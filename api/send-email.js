// Vercel Serverless Function - Send Email
// Endpoint: /api/send-email

const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, subject, html, attachments } = req.body;

  if (!to || !subject || !html) {
    return res.status(400).json({ error: 'Missing to, subject, or html' });
  }

  try {
    // Create Gmail transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'agent.neo.angel@gmail.com',
        pass: process.env.GMAIL_PASSWORD // App-specific password needed
      }
    });

    const info = await transporter.sendMail({
      from: '"PetPix Pro" <agent.neo.angel@gmail.com>',
      to,
      subject,
      html,
      attachments: attachments || []
    });

    return res.status(200).json({
      success: true,
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
};
