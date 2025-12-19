import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { google } from 'googleapis';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '1oh1C1sxRG87YlSrmejGBuGAHoU4PAtnZZkNedudnd5E';
const SHEET_NAME = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Sheet1';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, businessName, website, industry, message } = body;

    if (!name || !email || !businessName || !industry || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      try {
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '1oh1C1sxRG87YlSrmejGBuGAHoU4PAtnZZkNedudnd5E';
        const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Sheet1';
        
        const auth = new google.auth.GoogleAuth({
          credentials: {
            type: 'service_account',
            project_id: process.env.GOOGLE_PROJECT_ID || 'auvora-project',
            private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            client_id: process.env.GOOGLE_CLIENT_ID,
          },
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
        const row = [timestamp, name, email, businessName, website || '', industry, message];

        const escapedSheetName = `'${sheetName.replace(/'/g, "''")}'`;
        const range = `${escapedSheetName}!A:G`;
        
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [row],
          },
        });
      } catch (sheetsError) {
        console.error('Error logging to Google Sheets:', sheetsError);
      }
    }

    // Forward to Auvora CRM leads API
    let crmResult: { ok: boolean; status?: number; leadId?: string; error?: string } = { ok: false };
    try {
      const crmResponse = await fetch('https://auvora-crm-demo.vercel.app/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone: null,
          business_name: businessName,
          industry: industry === 'other' ? null : industry,
          message,
          source: 'demo_form',
        }),
      });

      crmResult.status = crmResponse.status;
      
      if (crmResponse.ok) {
        const crmData = await crmResponse.json();
        crmResult.ok = true;
        crmResult.leadId = crmData.lead?.id;
      } else {
        const errorText = await crmResponse.text();
        console.error('Failed to forward to CRM:', errorText);
        crmResult.error = errorText.substring(0, 200);
      }
    } catch (crmError) {
      console.error('Error forwarding to CRM:', crmError);
      crmResult.error = crmError instanceof Error ? crmError.message : 'Unknown error';
    }

    if (process.env.SENDGRID_API_KEY) {
      try {
        const emailContent = {
          to: 'myauvora@gmail.com',
          from: process.env.SENDGRID_FROM_EMAIL || 'myauvora@gmail.com',
          subject: `New Demo Request from ${name} - ${businessName}`,
          text: `
New Demo Request Received!

Name: ${name}
Email: ${email}
Business Name: ${businessName}
Website: ${website || 'Not provided'}
Industry: ${industry}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}
          `,
          html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0f5257;">New Demo Request Received!</h2>
  
  <div style="background-color: #f0f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Business Name:</strong> ${businessName}</p>
    <p><strong>Website:</strong> ${website || 'Not provided'}</p>
    <p><strong>Industry:</strong> ${industry}</p>
  </div>
  
  <div style="margin: 20px 0;">
    <h3 style="color: #0f5257;">What they're looking to improve:</h3>
    <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0f5257; border-radius: 4px;">
      ${message}
    </p>
  </div>
  
  <p style="color: #666; font-size: 12px; margin-top: 30px;">
    Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}
  </p>
</div>
          `,
        };

        await sgMail.send(emailContent);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Demo request received successfully',
      crm: crmResult,
    });
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Failed to process demo request' },
      { status: 500 }
    );
  }
}
