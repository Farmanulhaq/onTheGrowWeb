import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, role, challenge, timeline, budget, referral } = body;

    // ✅ Setup transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // or your own mail server
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // set in .env
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ Compose email
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "liz@onthegrowleadership.com", // your destination email
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Role:</b> ${role}</p>
        <p><b>Challenge:</b> ${challenge}</p>
        <p><b>Timeline:</b> ${timeline}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Referral:</b> ${referral}</p>
      `,
    };

    // ✅ Send mail
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Email sending failed:", error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
