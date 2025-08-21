import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import multer from 'multer';

dotenv.config();

const app = express();
const port = process.env.PORT || 5050;

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') || '*'}));
app.use(express.json({ limit: '2mb' }));

const limiter = rateLimit({ windowMs: 60 * 1000, max: 60 });
app.use('/api/', limiter);

// File upload handling (for CVs)
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

function buildMailOptions({ fromEmail, subject, html, attachments = [] }) {
  return {
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to: process.env.MAIL_TO || process.env.SMTP_USER,
    replyTo: fromEmail || process.env.MAIL_FROM || process.env.SMTP_USER,
    subject,
    html,
    attachments,
  };
}

// Contact/general inquiry
app.post('/api/contact', async (req, res) => {
  try {
    const data = req.body || {};
    const subject = `New Contact Inquiry — ${data.name || 'Unknown'}`;
    const html = `<h2>Contact Inquiry</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;
    await transporter.sendMail(buildMailOptions({ fromEmail: data.email, subject, html }));
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
});

// Placement form with optional CV file
app.post('/api/placement', upload.single('cv'), async (req, res) => {
  try {
    const data = JSON.parse(req.body.data || '{}');
    const attachments = [];
    if (req.file) {
      attachments.push({ filename: req.file.originalname, content: req.file.buffer });
    }
    const subject = `Placement Registration — ${data.name || 'Unknown'}`;
    const html = `<h2>Placement Registration</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;
    await transporter.sendMail(buildMailOptions({ fromEmail: data.email, subject, html, attachments }));
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
});

// Admission assistance
app.post('/api/admission', async (req, res) => {
  try {
    const data = req.body || {};
    const subject = `Admission Assistance — ${data.name || 'Unknown'}`;
    const html = `<h2>Admission Assistance</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;
    await transporter.sendMail(buildMailOptions({ fromEmail: data.email, subject, html }));
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
});

// Tuition inquiry
app.post('/api/tuition', async (req, res) => {
  try {
    const data = req.body || {};
    const subject = `Tuition Inquiry — ${data.name || 'Unknown'}`;
    const html = `<h2>Tuition Inquiry</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;
    await transporter.sendMail(buildMailOptions({ fromEmail: data.email, subject, html }));
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});


