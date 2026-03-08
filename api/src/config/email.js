const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendWelcomeEmail = async (userEmail, userName, courseName) => {
  const mailOptions = {
    from: `"Future Tech" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: '🎉 Welcome to Future Tech - Registration Successful!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; background: #3B82F6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          .course-box { background: white; padding: 20px; border-left: 4px solid #8B5CF6; margin: 20px 0; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 Welcome to Future Tech!</h1>
          </div>
          <div class="content">
            <h2>Hi ${userName}! 👋</h2>
            <p>Congratulations! Your registration has been successfully completed.</p>
            
            <div class="course-box">
              <h3>📚 Your Enrolled Course:</h3>
              <p><strong>${courseName}</strong></p>
            </div>
            
            <h3>What's Next?</h3>
            <ul>
              <li>✅ Check your email for course materials</li>
              <li>✅ Join our student community</li>
              <li>✅ Access your learning dashboard</li>
              <li>✅ Meet your instructor</li>
            </ul>
            
            <center>
              <a href="${process.env.FRONTEND_URL}/login" class="button">Login to Dashboard</a>
            </center>
            
            <p>If you have any questions, feel free to reach out to us at <a href="mailto:${process.env.EMAIL_USER}">${process.env.EMAIL_USER}</a></p>
            
            <p>Happy Learning! 🎓</p>
            <p><strong>The Future Tech Team</strong></p>
          </div>
          <div class="footer">
            <p>© 2026 Future Tech - Student Internship Program</p>
            <p>This email was sent because you registered on our platform.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent to:', userEmail);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};

module.exports = { sendWelcomeEmail };
