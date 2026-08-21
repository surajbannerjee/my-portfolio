import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { Name, Email, "E-mail": AltEmail, Company, Phone, Message } = body || {};

    const clientName = Name || "Valued Client";
    const clientEmail = Email || AltEmail;
    const clientCompany = Company || "N/A";
    const clientPhone = Phone || "N/A";
    const clientMessage = Message || "No message body provided.";

    if (!clientEmail || !Message) {
      return NextResponse.json(
        { error: "Email and Message are required" },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY || "";

    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #161616; color: #FAF7F6; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #222222; border-radius: 12px; padding: 30px; border: 1px solid #333; }
          .header { text-align: center; border-bottom: 1px solid #333; padding-bottom: 20px; margin-bottom: 25px; }
          .header h1 { color: #FAF7F6; font-size: 24px; margin: 0; }
          .badge { display: inline-block; background: #FAF7F6; color: #161616; padding: 4px 12px; border-radius: 20px; font-weight: bold; font-size: 12px; margin-top: 8px; }
          .field { margin-bottom: 18px; }
          .field-label { font-size: 12px; text-transform: uppercase; color: #888; letter-spacing: 1px; margin-bottom: 4px; }
          .field-value { font-size: 16px; color: #fff; font-weight: 500; }
          .message-box { background: #1a1a1a; padding: 20px; border-radius: 8px; border-left: 4px solid #FAF7F6; font-size: 15px; line-height: 1.6; color: #ddd; margin-top: 10px; }
          .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #333; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Client Project Inquiry</h1>
            <span class="badge">Suraj Banerjee Portfolio</span>
          </div>
          <div class="field">
            <div class="field-label">Client Name</div>
            <div class="field-value">${clientName}</div>
          </div>
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value"><a href="mailto:${clientEmail}" style="color: #fff; text-decoration: underline;">${clientEmail}</a></div>
          </div>
          <div class="field">
            <div class="field-label">Company</div>
            <div class="field-value">${clientCompany}</div>
          </div>
          <div class="field">
            <div class="field-label">Phone Number</div>
            <div class="field-value">${clientPhone}</div>
          </div>
          <div class="field">
            <div class="field-label">Project Message</div>
            <div class="message-box">${clientMessage.replace(/\n/g, "<br>")}</div>
          </div>
          <div class="footer">
            Sent automatically from your portfolio at ${new Date().toLocaleDateString()}
          </div>
        </div>
      </body>
      </html>
    `;

    const clientAutoReplyHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9; color: #222; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 35px; border: 1px solid #eee; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
          .header { text-align: center; margin-bottom: 25px; }
          .header h2 { font-size: 24px; color: #111; margin: 0; }
          .content { font-size: 15px; line-height: 1.7; color: #444; }
          .highlight { background: #f4f4f4; padding: 15px 20px; border-radius: 8px; margin: 20px 0; font-style: italic; color: #555; }
          .button-wrap { text-align: center; margin: 30px 0; }
          .btn { background: #161616; color: #ffffff !important; padding: 12px 28px; border-radius: 30px; text-decoration: none; font-weight: 600; display: inline-block; }
          .footer { text-align: center; font-size: 12px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Reaching Out! 👋</h2>
          </div>
          <div class="content">
            <p>Hi <strong>${clientName}</strong>,</p>
            <p>Thank you for getting in touch! I have received your message regarding your project inquiry and I'm excited to review your requirements.</p>
            <div class="highlight">
              "${clientMessage.substring(0, 150)}${clientMessage.length > 150 ? "..." : ""}"
            </div>
            <p>I typically respond to inquiries within 24 hours. If your request is urgent, feel free to connect with me directly on my social channels.</p>
            <div class="button-wrap">
              <a href="https://surajbanerjee.dev" class="btn">View Portfolio</a>
            </div>
            <p>Best regards,<br><strong>Suraj Banerjee</strong><br><em>Frontend UI Developer</em></p>
          </div>
          <div class="footer">
            © ${new Date().getFullYear()} Suraj Banerjee. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;

    if (RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Suraj Banerjee Portfolio <onboarding@resend.dev>",
          to: "surajbanerjee255@gmail.com",
          subject: `🚀 New Project Inquiry from ${clientName}`,
          html: adminEmailHtml,
        }),
      });

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Suraj Banerjee <onboarding@resend.dev>",
          to: clientEmail,
          subject: `Thanks for your inquiry, ${clientName}! — Suraj Banerjee`,
          html: clientAutoReplyHtml,
        }),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.error("Contact API Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
