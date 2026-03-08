# Complete Deployment Guide - Future Tech

## Overview

This guide covers deploying both frontend and backend for FREE with database and email notifications.

## Architecture

```
Frontend (Vercel) → Backend (Railway) → Database (Neon) + Email (Gmail)
```

---

## Part 1: Database Setup (FREE)

### Option: Neon PostgreSQL (Recommended)

1. Go to https://neon.tech
2. Sign up with GitHub
3. Click "Create Project"
4. Project name: `future-tech-db`
5. Region: Choose closest to you
6. Copy the connection string (looks like):
   ```
   postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb
   ```

**Free Tier**: 3GB storage, 100 hours compute/month

---

## Part 2: Email Setup (FREE)

### Gmail App Password

1. Go to https://myaccount.google.com
2. Security → 2-Step Verification (Enable it)
3. Security → App Passwords
4. Select "Mail" and "Other (Custom name)"
5. Name it: "Future Tech"
6. Copy the 16-character password

**Free Tier**: 500 emails/day

### Alternative: SendGrid (100 emails/day free)
1. Go to https://sendgrid.com
2. Sign up for free account
3. Create API Key
4. Use in EMAIL_PASSWORD

---

## Part 3: Backend Deployment (FREE)

### Railway Deployment

1. **Install Railway CLI**:
   ```bash
   npm install -g @railway/cli
   ```

2. **Login**:
   ```bash
   railway login
   ```

3. **Deploy Backend**:
   ```bash
   cd api
   railway init
   railway up
   ```

4. **Set Environment Variables** in Railway Dashboard:
   ```
   DATABASE_URL=postgresql://... (from Neon)
   JWT_SECRET=your-random-secret-key-min-32-chars
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   FRONTEND_URL=https://your-app.vercel.app
   NODE_ENV=production
   ```

5. **Get Backend URL**:
   - Railway will give you a URL like: `https://your-app.up.railway.app`
   - Copy this URL

**Free Tier**: 500 hours/month, $5 credit

### Alternative: Render

1. Go to https://render.com
2. New → Web Service
3. Connect GitHub repo
4. Root Directory: `api`
5. Build Command: `npm install && npm run prisma:generate`
6. Start Command: `npm run prisma:push && npm start`
7. Add environment variables (same as above)

**Free Tier**: 750 hours/month

---

## Part 4: Frontend Deployment (FREE)

### Vercel Deployment

1. **Update API URL** in frontend:
   
   Create `.env.production`:
   ```bash
   VITE_API_URL=https://your-backend.up.railway.app
   ```

2. **Update Register.jsx** to use env variable:
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
   
   const response = await fetch(`${API_URL}/api/auth/register`, {
     // ... rest of code
   })
   ```

3. **Deploy to Vercel**:
   - Go to https://vercel.com
   - Import your GitHub repo
   - Framework: Vite
   - Root Directory: `./` (leave as is)
   - Add Environment Variable:
     - Name: `VITE_API_URL`
     - Value: `https://your-backend.up.railway.app`
   - Click Deploy

4. **Get Frontend URL**:
   - Vercel gives you: `https://student-internship.vercel.app`

5. **Update Backend FRONTEND_URL**:
   - Go back to Railway dashboard
   - Update `FRONTEND_URL` to your Vercel URL
   - Redeploy backend

**Free Tier**: Unlimited bandwidth, 100GB/month

---

## Part 5: Testing the Complete Flow

1. **Visit your Vercel URL**
2. **Click Register**
3. **Fill the form**:
   - Full Name: Test User
   - Email: your-email@gmail.com
   - Phone: +91 98765 43210
   - Password: Test@123
   - Course: Select any
4. **Submit**
5. **Check your email** - You should receive welcome email!
6. **Check Railway logs** to see registration

---

## Complete Free Stack Summary

| Service | Purpose | Free Tier | URL |
|---------|---------|-----------|-----|
| **Vercel** | Frontend Hosting | Unlimited | vercel.com |
| **Railway** | Backend API | 500 hrs/month | railway.app |
| **Neon** | PostgreSQL DB | 3GB storage | neon.tech |
| **Gmail** | Email Notifications | 500/day | gmail.com |

**Total Cost: $0/month** 🎉

---

## Environment Variables Checklist

### Backend (.env in Railway)
- [ ] DATABASE_URL
- [ ] JWT_SECRET
- [ ] EMAIL_SERVICE
- [ ] EMAIL_USER
- [ ] EMAIL_PASSWORD
- [ ] FRONTEND_URL
- [ ] NODE_ENV=production

### Frontend (Vercel)
- [ ] VITE_API_URL

---

## Troubleshooting

### Database Connection Failed
- Check DATABASE_URL is correct
- Verify Neon database is active
- Run `npm run prisma:push` in Railway

### Email Not Sending
- Verify Gmail App Password (16 chars, no spaces)
- Check 2FA is enabled on Google Account
- Try SendGrid as alternative

### CORS Errors
- Verify FRONTEND_URL in backend matches Vercel URL
- Check CORS settings in server.js

### Registration Not Working
- Check Railway logs for errors
- Verify all environment variables are set
- Test backend health: `https://your-backend.up.railway.app/api/health`

---

## Monitoring & Logs

### Railway Logs
```bash
railway logs
```

### Vercel Logs
- Go to Vercel Dashboard → Your Project → Deployments → View Logs

### Database Monitoring
- Neon Dashboard → Your Project → Monitoring

---

## Scaling (When Needed)

### Upgrade Options:
- **Railway Pro**: $20/month - More hours, better performance
- **Vercel Pro**: $20/month - More bandwidth, analytics
- **Neon Scale**: $19/month - More storage, better performance

---

## Custom Domain (Optional - FREE)

### Add Custom Domain to Vercel:
1. Buy domain from Namecheap/GoDaddy (~$10/year)
2. Vercel Dashboard → Your Project → Settings → Domains
3. Add your domain
4. Update DNS records as instructed
5. SSL certificate auto-generated (FREE)

---

## Security Checklist

- [ ] Strong JWT_SECRET (min 32 characters)
- [ ] HTTPS enabled (automatic on Vercel/Railway)
- [ ] Environment variables secured
- [ ] CORS properly configured
- [ ] Password hashing enabled (bcrypt)
- [ ] SQL injection protected (Prisma)

---

## Support

If you face any issues:
1. Check Railway logs
2. Check Vercel deployment logs
3. Verify all environment variables
4. Test API health endpoint
5. Check database connection

---

## Next Steps

After deployment:
1. ✅ Test registration flow
2. ✅ Verify email notifications
3. ✅ Test login functionality
4. ✅ Monitor Railway usage
5. ✅ Set up custom domain (optional)

**Congratulations! Your app is now live! 🚀**
