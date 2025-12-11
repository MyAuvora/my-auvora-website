# Deployment Instructions for Auvora Website

## Prerequisites
- GitHub account with access to MyAuvora/my-auvora-website
- Vercel account (free tier works)
- SendGrid account (free tier works)
- Google Sheet shared with service account

## Step 1: Verify SendGrid Sender Email

Before deploying, you need to verify your sender email in SendGrid:

1. Go to https://app.sendgrid.com/settings/sender_auth/senders
2. Click "Create New Sender"
3. Fill in the form with your details:
   - From Name: "Auvora"
   - From Email Address: **myauvora@gmail.com**
   - Reply To: myauvora@gmail.com
   - Company Address: (your business address)
4. Click "Create"
5. **Check your email** (myauvora@gmail.com) and click the verification link
6. Wait for verification to complete (usually instant)

## Step 2: Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click "Add New Project"
3. Import your repository: `MyAuvora/my-auvora-website`
4. Vercel will auto-detect Next.js settings - **don't change anything**
5. **Before clicking Deploy**, add environment variables (see Step 3)

## Step 3: Add Environment Variables in Vercel

In the Vercel project setup, scroll down to "Environment Variables" and add these:

### Required Variables:

1. **SENDGRID_API_KEY**
   - Value: (use the API key from SendGrid that starts with "SG.")

2. **SENDGRID_FROM_EMAIL**
   - Value: `myauvora@gmail.com`
   - Note: This MUST match the verified sender email from Step 1

3. **GOOGLE_PRIVATE_KEY_ID**
   - Value: (will be provided by Devin)

4. **GOOGLE_PRIVATE_KEY**
   - Value: (will be provided by Devin)
   - Note: This is a multi-line value - paste it exactly as provided

5. **GOOGLE_CLIENT_ID**
   - Value: (will be provided by Devin)

## Step 4: Deploy

1. After adding all environment variables, click **"Deploy"**
2. Wait 2-3 minutes for deployment to complete
3. Vercel will give you a URL like: `my-auvora-website.vercel.app`

## Step 5: Add Custom Domain (Optional)

Once deployed, you can add your custom domain:

1. In Vercel project settings, go to "Domains"
2. Add your domain (e.g., `myauvora.com`)
3. Vercel will show you DNS records to add
4. Go to your domain registrar (GoDaddy, Namecheap, etc.)
5. Add the DNS records Vercel provides
6. Wait 24-48 hours for DNS propagation

## Step 6: Test the Demo Form

1. Go to your deployed site: `https://your-site.vercel.app/demo`
2. Fill out the demo form
3. Submit it
4. Check your email (myauvora@gmail.com) for the notification
5. Check your Google Sheet for the logged entry

## Troubleshooting

### Email not sending?
- Verify your sender email in SendGrid (Step 1)
- Check that `SENDGRID_FROM_EMAIL` matches your verified sender
- Check Vercel logs for errors

### Google Sheets not logging?
- Verify the sheet is shared with: `devin-service-account@devin-integration.iam.gserviceaccount.com`
- Check that all Google environment variables are set correctly
- Check Vercel logs for errors

### How to view Vercel logs?
1. Go to your Vercel project dashboard
2. Click on the deployment
3. Click "Functions" tab
4. Click on any function to see logs

## Updating the Site

After deployment, any changes you make:
1. Devin pushes changes to GitHub
2. You merge the PR
3. Vercel automatically deploys the updates (takes 1-2 minutes)

No need to redeploy manually!
