# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for the demo form submissions.

## Overview

When someone submits the demo form, their information will be:
1. Sent to your email (myauvora@gmail.com) via SendGrid
2. Logged to a Google Sheet automatically

## Step 1: Create a Google Cloud Project

1. Go to https://console.cloud.google.com
2. Sign in with your Google account (myauvora@gmail.com)
3. Click the project dropdown at the top (next to "Google Cloud")
4. Click **"New Project"**
5. Name it: **"Auvora Website"**
6. Click **"Create"**
7. Wait for the project to be created (takes ~30 seconds)
8. Make sure the new project is selected in the dropdown

## Step 2: Enable Google Sheets API

1. In the Google Cloud Console, click the hamburger menu (☰) in the top left
2. Go to **"APIs & Services"** → **"Library"**
3. Search for **"Google Sheets API"**
4. Click on it
5. Click **"Enable"**
6. Wait for it to enable (~10 seconds)

## Step 3: Create a Service Account

1. In the Google Cloud Console, go to **"APIs & Services"** → **"Credentials"**
2. Click **"Create Credentials"** at the top
3. Select **"Service Account"**
4. Fill in the details:
   - **Service account name**: `auvora-website-forms`
   - **Service account ID**: (auto-filled, leave as is)
   - **Description**: "Service account for logging demo form submissions to Google Sheets"
5. Click **"Create and Continue"**
6. For "Grant this service account access to project":
   - Skip this step (click "Continue")
7. For "Grant users access to this service account":
   - Skip this step (click "Done")

## Step 4: Create and Download Service Account Key

1. You should now see your service account in the list
2. Click on the service account email (looks like: `auvora-website-forms@...`)
3. Go to the **"Keys"** tab
4. Click **"Add Key"** → **"Create new key"**
5. Select **"JSON"** format
6. Click **"Create"**
7. A JSON file will download to your computer - **SAVE THIS FILE SECURELY**
8. Open the JSON file in a text editor (Notepad, TextEdit, etc.)

## Step 5: Share Your Google Sheet with the Service Account

1. Open the JSON file you just downloaded
2. Find the `client_email` field - it looks like:
   ```
   "client_email": "auvora-website-forms@auvora-website-123456.iam.gserviceaccount.com"
   ```
3. Copy that email address
4. Go to your Google Sheet: https://docs.google.com/spreadsheets/d/1oh1C1sxRG87YlSrmejGBuGAHoU4PAtnZZkNedudnd5E/edit
5. Click the **"Share"** button in the top right
6. Paste the service account email
7. Make sure it has **"Editor"** permissions
8. **UNCHECK** "Notify people" (the service account doesn't need an email notification)
9. Click **"Share"**

## Step 6: Extract Values for Vercel Environment Variables

Open the JSON file and find these values:

### Required Values:

1. **GOOGLE_CLIENT_EMAIL**
   - Find: `"client_email": "..."`
   - Copy the entire email address

2. **GOOGLE_PRIVATE_KEY**
   - Find: `"private_key": "-----BEGIN PRIVATE KEY-----\n..."`
   - Copy the ENTIRE value including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
   - **Important**: Keep all the `\n` characters - they're needed!

3. **GOOGLE_PRIVATE_KEY_ID**
   - Find: `"private_key_id": "..."`
   - Copy the value

4. **GOOGLE_CLIENT_ID**
   - Find: `"client_id": "..."`
   - Copy the value

5. **GOOGLE_PROJECT_ID**
   - Find: `"project_id": "..."`
   - Copy the value

### Optional Values:

6. **GOOGLE_SHEETS_SPREADSHEET_ID** (optional - defaults to your current sheet)
   - Value: `1oh1C1sxRG87YlSrmejGBuGAHoU4PAtnZZkNedudnd5E`
   - This is the ID from your Google Sheet URL

7. **GOOGLE_SHEETS_SHEET_NAME** (optional - defaults to "Sheet1")
   - Value: `Sheet1`
   - Change this if you want to use a different sheet tab

## Step 7: Add Environment Variables to Vercel

Now go back to Vercel and add these environment variables:

1. In Vercel project setup (or Settings → Environment Variables)
2. Add each variable:
   - Click "Add" for each one
   - Name: (use the exact names above)
   - Value: (paste the value from the JSON file)
   - Environment: Select "Production", "Preview", and "Development"

**All Environment Variables:**
- `SENDGRID_API_KEY` (you already have this)
- `SENDGRID_FROM_EMAIL` (you already have this)
- `GOOGLE_CLIENT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_PRIVATE_KEY_ID`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_PROJECT_ID`
- `GOOGLE_SHEETS_SPREADSHEET_ID` (optional)
- `GOOGLE_SHEETS_SHEET_NAME` (optional)

## Step 8: Deploy and Test

1. Click **"Deploy"** in Vercel
2. Wait for deployment to complete (2-3 minutes)
3. Go to your deployed site: `/demo`
4. Fill out and submit the demo form
5. Check:
   - Your email (myauvora@gmail.com) for the notification
   - Your Google Sheet for the new row

## Troubleshooting

### Form submits but no row appears in Google Sheet

**Check Vercel Function Logs:**
1. Go to your Vercel project dashboard
2. Click on the deployment
3. Click "Functions" tab
4. Click on `/api/demo`
5. Look for error messages

**Common Issues:**
- Service account email not shared with the sheet (go back to Step 5)
- Private key copied incorrectly (make sure to include all `\n` characters)
- Wrong spreadsheet ID (check the URL of your Google Sheet)

### "Permission denied" error

- Make sure the service account email has "Editor" permissions on the sheet
- Verify you shared the sheet with the correct email from the JSON file

### "Invalid credentials" error

- Double-check that all the values from the JSON file are copied correctly
- Make sure `GOOGLE_PRIVATE_KEY` includes the full key with BEGIN and END markers

## Security Notes

- **Never commit the JSON file to GitHub** - it contains sensitive credentials
- Store the JSON file securely (password manager, encrypted drive, etc.)
- Only add credentials as environment variables in Vercel
- You can rotate the key anytime by creating a new key and deleting the old one

## Need Help?

If you run into issues, check the Vercel function logs first - they'll show you exactly what's going wrong with the Google Sheets integration.
