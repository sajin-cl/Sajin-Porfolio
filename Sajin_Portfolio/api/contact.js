import nodemailer from 'nodemailer';

export default async function contactUs(req, res) {
  try {

    if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

    const { name, email, message } = req.body;

    if (!name || !email || !message) return res.status(400).json({ message: 'All Fields are required' });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"PORTFOLIO REPLY" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name} via Portfolio`,
      html: `
    <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    </div>
  `
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message sent successfully!" });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Message not sent!" });
  }

}
