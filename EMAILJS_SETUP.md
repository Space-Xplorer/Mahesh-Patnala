# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails from your contact form directly to your email address.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** Contact Form Message from {{from_name}}

**HTML Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Contact Form Message</title>
</head>
<body>
    <h2>New Contact Form Message</h2>
    <p><strong>From:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Message:</strong></p>
    <p>{{message}}</p>
</body>
</html>
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key** (e.g., `user_public_key_123`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "your_actual_public_key",
  SERVICE_ID: "your_actual_service_id", 
  TEMPLATE_ID: "your_actual_template_id"
}
```

## Step 6: Test the Form

1. Run your development server: `npm run dev`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email for the message

## Important Notes

- **Free Plan Limits:** EmailJS free plan allows 200 emails per month
- **Security:** Your public key is safe to expose in client-side code
- **CORS:** EmailJS handles CORS issues automatically
- **Deployment:** Works on any hosting platform including Render

## Troubleshooting

- **"Failed to send message" error:** Check your EmailJS credentials
- **No emails received:** Verify your email service is properly connected
- **Template variables not working:** Ensure template variable names match exactly

## Alternative: Environment Variables (Optional)

For better security, you can use environment variables:

1. Create a `.env` file in your project root:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

2. Update `src/config/emailjs.js`:
```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID
}
```

3. Add `.env` to your `.gitignore` file to keep credentials private 