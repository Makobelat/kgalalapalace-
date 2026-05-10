import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/api/send-booking', async (req, res) => {
  const { name, email, date, message, type } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ ok: false, error: 'Name and email are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true' || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.BOOKING_RECIPIENT || 'bookings@kgalalapalace.co.za';

    const subject = `Booking Request from ${name}`;
    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Type:</strong> ${type || ''}</p>
      <p><strong>Date:</strong> ${date || ''}</p>
      <p><strong>Message:</strong><br/>${(message || '').replace(/\n/g, '<br/>')}</p>
    `;

    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to,
      subject,
      html,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('send-booking error', err);
    return res.status(500).json({ ok: false, error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Booking email server listening on ${port}`);
});
