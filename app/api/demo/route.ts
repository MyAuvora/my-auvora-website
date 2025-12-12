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

    if (process.env.SENDGRID_API_KEY) {
      try {
        const emailContent = {
          to: 'myauvora@gmail.com',
          from: process.env.SENDGRID_FROM_EMAIL || 'myauvora@gmail.com', // Use verified sender from env
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
Submitted at: ${new Date().toLocaleString()}
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
    Submitted at: ${new Date().toLocaleString()}
  </p>
</div>
          `,
        };

        await sgMail.send(emailContent);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
      }
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

        const timestamp = new Date().toLocaleString();
        const row = [timestamp, name, email, businessName, website || '', industry, message];

        const escapedSheetName = `'${sheetName.replace(/'/g, "''")}'`;
        const range = `${escapedSheetName}!A:G`;
        
        const result = await sheets.spreadsheets.values.append({
          spreadsheetId,
          range,
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [row],
          },
        });

        if (process.env.SENDGRID_API_KEY) {
          try {
            await sgMail.send({
              to: 'myauvora@gmail.com',
              from: process.env.SENDGRID_FROM_EMAIL || 'myauvora@gmail.com',
              subject: 'Google Sheets SUCCESS - Diagnostic',
              text: `
Google Sheets integration SUCCEEDED!

Configuration Used:
- Spreadsheet ID: ${spreadsheetId}
- Sheet Name: ${sheetName}
- Escaped Sheet Name: ${escapedSheetName}
- Range: ${range}

API Response:
- Updates: ${JSON.stringify(result.data.updates)}
- Spreadsheet ID: ${result.data.spreadsheetId}

This diagnostic email confirms the API call succeeded. Check your Google Sheet to see if the data appears.
              `,
            });
          } catch (diagnosticEmailError) {
            console.error('Failed to send success diagnostic email:', diagnosticEmailError);
          }
        }
      } catch (sheetsError) {
        console.error('Error logging to Google Sheets:', sheetsError);
        
        if (process.env.SENDGRID_API_KEY) {
          try {
            const errorDetails = sheetsError as any;
            await sgMail.send({
              to: 'myauvora@gmail.com',
              from: process.env.SENDGRID_FROM_EMAIL || 'myauvora@gmail.com',
              subject: 'Google Sheets ERROR - Diagnostic',
              text: `
Google Sheets integration FAILED with the following error:

Error Message: ${errorDetails?.message || 'Unknown error'}
Error Code: ${errorDetails?.code || 'N/A'}
Status: ${errorDetails?.response?.status || 'N/A'}
Error Details: ${JSON.stringify(errorDetails?.errors || [])}

Configuration Used:
- Spreadsheet ID: ${process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '1oh1C1sxRG87YlSrmejGBuGAHoU4PAtnZZkNedudnd5E'}
- Sheet Name: ${process.env.GOOGLE_SHEETS_SHEET_NAME || 'Sheet1'}

This is a diagnostic email to help identify the issue. Once fixed, this email will stop being sent.
              `,
            });
          } catch (diagnosticEmailError) {
            console.error('Failed to send error diagnostic email:', diagnosticEmailError);
          }
        }
      }
    } else {
      if (process.env.SENDGRID_API_KEY) {
        try {
          await sgMail.send({
            to: 'myauvora@gmail.com',
            from: process.env.SENDGRID_FROM_EMAIL || 'myauvora@gmail.com',
            subject: 'Google Sheets NOT RUNNING - Diagnostic',
            text: `
Google Sheets integration did NOT run because required environment variables are missing:

- GOOGLE_CLIENT_EMAIL present: ${!!process.env.GOOGLE_CLIENT_EMAIL}
- GOOGLE_PRIVATE_KEY present: ${!!process.env.GOOGLE_PRIVATE_KEY}

Please ensure both variables are set in Vercel Production environment.
            `,
          });
        } catch (diagnosticEmailError) {
          console.error('Failed to send diagnostic email:', diagnosticEmailError);
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Demo request received successfully',
    });
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Failed to process demo request' },
      { status: 500 }
    );
  }
}
