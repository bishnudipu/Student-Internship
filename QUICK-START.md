# Quick Start Guide - Deploy Backend with Database

Your Neon database is ready! The connection issue is likely due to network/firewall restrictions from your local machine. Let's deploy directly to Railway where it will work perfectly.

## Step 1: Install Railway CLI

```bash
npm install -g @railway/cli
```

## Step 2: Login to Railway

```bash
railway login
```

This will open your browser to authenticate.

## Step 3: Deploy Backend

```bash
cd api
railway init
```

When prompted:
- Project name: `future-tech-backend`
- Select: "Create new project"

## Step 4: Link and Deploy

```bash
railway up
```

This will deploy your backend to Railway!

## Step 5: Set Environment Variables in Railway Dashboard

1. Go to https://railway.app/dashboard
2. Click on your `future-tech-backend` project
3. Click "Variables" tab
4. Add these variables:

```
DATABASE_URL=postgresql://neondb_owner:npg_2FlBXvcn5gkJ@ep-blue-waterfall-a10slard-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&pgbouncer=true

DIRECT_URL=postgresql://neondb_owner:npg_2FlBXvcn5gkJ@ep-blue-waterfall-a10slard.ap-southeast-1.aws.neon.tech/neondb?sslmode=require

JWT_SECRET=future-tech-super-secret-jwt-key-min-32-characters-long-random-string

EMAIL_SERVICE=gmail

EMAIL_USER=your-email@gmail.com

EMAIL_PASSWORD=your-16-char-gmail-app-password

FRONTEND_URL=https://student-internship.vercel.app

NODE_ENV=production
```

## Step 6: Add Build Command

In Railway dashboard:
1. Go to "Settings" tab
2. Find "Build Command"
3. Set to: `npm install && npx prisma generate && npx prisma db push --accept-data-loss`
4. Find "Start Command"  
5. Set to: `npm start`

## Step 7: Deploy

Railway will automatically redeploy with the new settings. The database tables will be created automatically!

## Step 8: Get Your Backend URL

After deployment completes:
1. Go to "Settings" tab
2. Find "Domains" section
3. Click "Generate Domain"
4. Copy the URL (e.g., `https://future-tech-backend.up.railway.app`)

## Step 9: Update Frontend

Update your frontend `.env`:

```bash
VITE_API_URL=https://your-backend-url.up.railway.app
```

Then redeploy frontend to Vercel.

## Step 10: Test!

1. Visit your Vercel frontend URL
2. Click "Register"
3. Fill the form
4. Submit
5. Check your email for welcome message!

---

## Alternative: Use Railway PostgreSQL (Even Easier!)

If you prefer, you can use Railway's built-in PostgreSQL instead of Neon:

1. In Railway dashboard, click "New"
2. Select "Database" → "PostgreSQL"
3. Railway will automatically set `DATABASE_URL`
4. Remove `DIRECT_URL` variable (not needed)
5. Update `prisma/schema.prisma` - remove `directUrl` line
6. Redeploy

Railway PostgreSQL Free Tier: 1GB storage, shared CPU

---

## Troubleshooting

### Can't connect to Neon from local machine?
- This is normal! Many ISPs/firewalls block direct PostgreSQL connections
- Deploy to Railway - it will work there
- Or use Railway's PostgreSQL database

### Email not sending?
1. Make sure you have Gmail App Password (not regular password)
2. Enable 2-Factor Authentication on Google Account
3. Generate App Password: https://myaccount.google.com/apppasswords

### Railway deployment failed?
- Check logs in Railway dashboard
- Verify all environment variables are set
- Make sure DATABASE_URL is correct

---

## What Happens After Deployment?

✅ Backend API running on Railway
✅ Connected to Neon PostgreSQL database  
✅ Database tables automatically created
✅ Email notifications working
✅ Ready to accept registrations!

When students register:
1. Data saved to Neon database
2. Password hashed with bcrypt
3. JWT token generated
4. Welcome email sent automatically
5. User can login immediately

---

## Next Steps

1. Test registration on your live site
2. Check Railway logs to see registrations
3. Check Neon dashboard to see user data
4. Monitor email delivery
5. Add more features!

**Total time: ~10 minutes** ⚡

**Total cost: $0/month** 🎉
