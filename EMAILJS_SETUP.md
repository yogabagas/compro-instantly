# EmailJS Setup Instructions for Contact Form

Your contact form is ready! However, you need to set up EmailJS to enable email sending functionality.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Select **Gmail** (or your preferred email provider)
4. Click **Connect Account** and authorize with **ybagasakthi@gmail.com**
5. Note the **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set **Template ID** as: `template_contact`
4. Use this template content:

```
Subject: New Contact Form Submission - {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Business: {{business_name}}
Category: {{business_category}}

Message:
{{message}}

---
Sent from PT. Juara Satu Indonesia Website
```

5. Save the template

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (starts with a long string)
3. Copy it

## Step 5: Update Contact Component

Open `/src/components/Contact/index.js` and replace these values (around line 35-37):

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateId = 'template_contact'; // Keep this as is (or use your template ID)
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Example Configuration:

```javascript
const serviceId = 'service_abc123';
const templateId = 'template_contact';
const publicKey = 'xYz123ABc456DEF789';
```

## Step 6: Test the Form

1. Save the file
2. The website will auto-reload
3. Go to the Contact section
4. Fill out and submit the form
5. Check **ybagasakthi@gmail.com** for the email!

## Troubleshooting:

- **"Failed to send"**: Check that all IDs and keys are correct
- **No email received**: Check spam folder or verify EmailJS service is connected
- **Template error**: Make sure template ID matches exactly

## Alternative: Using FormSubmit (No Setup Required)

If you prefer a simpler solution, you can use FormSubmit instead:

1. Replace the form's `action` attribute with: `https://formsubmit.co/ybagasakthi@gmail.com`
2. No configuration needed!
3. However, EmailJS provides better customization and error handling.

---

For support, visit: https://www.emailjs.com/docs/
