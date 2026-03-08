# Future Tech Backend API

Backend API for Student Internship Platform with Prisma ORM, PostgreSQL, and Email Notifications.

## Features

- ✅ User Registration with Email Verification
- ✅ User Login with JWT Authentication
- ✅ Prisma ORM for Database Management
- ✅ Automated Welcome Email Notifications
- ✅ Password Hashing with bcrypt
- ✅ CORS Enabled
- ✅ Free Deployment Ready

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT + bcrypt
- **Email**: Nodemailer

## Setup Instructions

### 1. Install Dependencies

```bash
cd api
npm install
```

### 2. Setup Database (Choose One Free Option)

#### Option A: Neon (Recommended - Free PostgreSQL)
1. Go to https://neon.tech
2. Sign up and create a new project
3. Copy the connection string

#### Option B: Supabase (Free PostgreSQL)
1. Go to https://supabase.com
2. Create a new project
3. Go to Settings > Database > Connection String

#### Option C: Railway (Free PostgreSQL)
1. Go to https://railway.app
2. Create new project > Add PostgreSQL
3. Copy DATABASE_URL from variables

### 3. Configure Environment Variables

Create `.env` file:

```bash
cp .env.example .env
```

Edit `.env`:

```env
DATABASE_URL="postgresql://user:password@host:5432/database"
JWT_SECRET="your-super-secret-key-change-this"
EMAIL_SERVICE="gmail"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"
PORT=3001
FRONTEND_URL="http://localhost:5173"
```

### 4. Setup Gmail for Email Notifications

1. Go to Google Account Settings
2. Enable 2-Factor Authentication
3. Generate App Password:
   - Go to Security > 2-Step Verification > App Passwords
   - Select "Mail" and "Other"
   - Copy the 16-character password
4. Use this password in `EMAIL_PASSWORD`

### 5. Initialize Database

```bash
npm run prisma:generate
npm run prisma:push
```

### 6. Run Development Server

```bash
npm run dev
```

Server runs on: http://localhost:3001

## API Endpoints

### Health Check
```
GET /api/health
```

### Register User
```
POST /api/auth/register

Body:
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "password": "securepassword",
  "course": "react-genai"
}

Response:
{
  "message": "Registration successful! Check your email for confirmation.",
  "user": {
    "id": "...",
    "fullName": "John Doe",
    "email": "john@example.com",
    "course": "react-genai"
  },
  "token": "jwt-token..."
}
```

### Login User
```
POST /api/auth/login

Body:
{
  "email": "john@example.com",
  "password": "securepassword"
}

Response:
{
  "message": "Login successful",
  "user": {
    "id": "...",
    "fullName": "John Doe",
    "email": "john@example.com",
    "course": "react-genai"
  },
  "token": "jwt-token..."
}
```

## Free Deployment Options

### Option 1: Railway (Recommended)

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login and deploy:
```bash
railway login
railway init
railway up
```

3. Add PostgreSQL:
```bash
railway add postgresql
```

4. Set environment variables in Railway dashboard

### Option 2: Render

1. Go to https://render.com
2. Create "New Web Service"
3. Connect your GitHub repo
4. Build Command: `cd api && npm install && npm run prisma:generate`
5. Start Command: `cd api && npm run prisma:push && npm start`
6. Add PostgreSQL database (free tier)
7. Set environment variables

### Option 3: Vercel (Serverless)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add PostgreSQL from Vercel Storage or external provider

## Email Notification Features

When a user registers, they automatically receive:
- ✅ Welcome email with course details
- ✅ Login link to dashboard
- ✅ Next steps information
- ✅ Contact information
- ✅ Beautiful HTML email template

## Database Schema

```prisma
model User {
  id              String   @id @default(cuid())
  fullName        String
  email           String   @unique
  phone           String
  password        String
  course          String
  enrollmentDate  DateTime @default(now())
  isVerified      Boolean  @default(false)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

## Security Features

- Password hashing with bcrypt (10 rounds)
- JWT token authentication
- CORS protection
- Input validation
- SQL injection prevention (Prisma)

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| DATABASE_URL | PostgreSQL connection string | postgresql://... |
| JWT_SECRET | Secret key for JWT | random-secret-key |
| EMAIL_SERVICE | Email service provider | gmail |
| EMAIL_USER | Email address | your@gmail.com |
| EMAIL_PASSWORD | Email app password | 16-char-password |
| PORT | Server port | 3001 |
| FRONTEND_URL | Frontend URL | http://localhost:5173 |

## Troubleshooting

### Database Connection Issues
- Verify DATABASE_URL is correct
- Check if database is accessible
- Run `npm run prisma:generate`

### Email Not Sending
- Verify Gmail App Password is correct
- Check if 2FA is enabled
- Try using SendGrid or Resend as alternative

### CORS Errors
- Update FRONTEND_URL in .env
- Check CORS configuration in server.js

## Alternative Email Services (Free)

### SendGrid (100 emails/day free)
```env
EMAIL_SERVICE="sendgrid"
EMAIL_USER="apikey"
EMAIL_PASSWORD="your-sendgrid-api-key"
```

### Resend (100 emails/day free)
```env
EMAIL_SERVICE="resend"
EMAIL_USER="resend"
EMAIL_PASSWORD="your-resend-api-key"
```

## License

© 2026 Future Tech - Student Internship Program
