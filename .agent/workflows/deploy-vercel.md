---
description: Deploy to Vercel
---

# Deploy to Vercel

This workflow guides you through deploying your frontend application to Vercel.

## Prerequisites

1. You need a Vercel account (sign up at https://vercel.com)
2. Install Vercel CLI globally (if not already installed)
3. Your backend API should be deployed and accessible (update the API URL in vercel.json)

## Steps

### 1. Update Backend API URL

Before deploying, update the `vercel.json` file with your actual backend API URL:
- Open `vercel.json`
- Replace `https://your-backend-api-url.com` with your actual backend API URL (e.g., `https://api.yourdomain.com` or your Spring Boot backend URL)

### 2. Install Vercel CLI

// turbo
```bash
npm install -g vercel
```

### 3. Login to Vercel

```bash
vercel login
```

This will open a browser window to authenticate.

### 4. Deploy to Vercel

For the first deployment:
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope do you want to deploy to? (select your account)
- Link to existing project? **N** (for first time) or **Y** (if project exists)
- What's your project's name? (press Enter to use default or type a name)
- In which directory is your code located? **.**
- Want to modify these settings? **N**

### 5. Deploy to Production

Once the preview deployment is successful, deploy to production:
```bash
vercel --prod
```

## Alternative: Deploy via GitHub (Recommended)

1. Push your code to a GitHub repository
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Add environment variables if needed
6. Click "Deploy"

## Environment Variables

If you need to configure different API URLs for preview vs production, you can set environment variables in Vercel:

1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add variables like:
   - `VITE_API_URL` for your backend API URL
4. Update your code to use `import.meta.env.VITE_API_URL`

## Important Notes

- Make sure your backend API has CORS enabled for your Vercel domain
- Update `vercel.json` with your actual backend API URL before deploying
- Each deployment will give you a unique Preview URL
- Production deployments will use your custom domain (if configured) or vercel.app domain
