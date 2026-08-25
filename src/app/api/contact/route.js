import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { Name, Email, "E-mail": AltEmail, Company, Phone, Message } = body || {};

    const clientName = (Name || "Valued Client").trim();
    const clientEmail = (Email || AltEmail || "").trim();
    const clientCompany = (Company || "N/A").trim();
    const clientPhone = (Phone || "N/A").trim();
    const clientMessage = (Message || "No message body provided.").trim();

    if (!clientEmail || !Message) {
      return NextResponse.json(
        { error: "Email and Message are required" },
        { status: 400 }
      );
    }

    const emailUser = (process.env.EMAIL_USER || process.env.SMTP_USER || "surajbanerjee255@gmail.com").trim();
    const emailPass = (process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD || process.env.SMTP_PASS || "").replace(/\s+/g, "");
    const recipientEmail = (process.env.RECIPIENT_EMAIL || "surajbanerjee255@gmail.com").trim();

    // Plain text versions to pass spam filters
    const adminEmailText = `New Project Inquiry from ${clientName}

Name: ${clientName}
Email: ${clientEmail}
Company: ${clientCompany}
Phone: ${clientPhone}

Message:
${clientMessage}

---
Sent from Suraj Banerjee Portfolio at ${new Date().toLocaleString()}`;

    const clientAutoReplyText = `Hi ${clientName},

Thank you for reaching out! I have received your project inquiry and will get back to you within 24 hours.

Your Message:
"${clientMessage}"

Best regards,
Suraj Banerjee
Frontend UI Developer
https://suraj-banerjee.vercel.app`;

    const adminEmailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #121212; color: #FAF7F6; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #1c1c1c; border-radius: 16px; padding: 32px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          .header { text-align: left; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 20px; margin-bottom: 25px; }
          .header h1 { color: #ffffff; font-size: 22px; font-weight: 700; margin: 0; }
          .badge { display: inline-block; background: #BEF264; color: #121212; padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 11px; margin-top: 10px; letter-spacing: 0.5px; text-transform: uppercase; }
          .field { margin-bottom: 20px; }
          .field-label { font-size: 11px; text-transform: uppercase; color: #888888; letter-spacing: 1px; margin-bottom: 6px; font-weight: 600; }
          .field-value { font-size: 15px; color: #ffffff; font-weight: 500; }
          .message-box { background: #141414; padding: 20px; border-radius: 12px; border-left: 3px solid #BEF264; font-size: 15px; line-height: 1.6; color: #e0e0e0; margin-top: 8px; border-top: 1px solid rgba(255,255,255,0.04); border-right: 1px solid rgba(255,255,255,0.04); border-bottom: 1px solid rgba(255,255,255,0.04); }
          .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666666; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚀 New Project Inquiry</h1>
            <span class="badge">Suraj Banerjee Portfolio</span>
          </div>
          <div class="field">
            <div class="field-label">Sender Name</div>
            <div class="field-value">${clientName}</div>
          </div>
          <div class="field">
            <div class="field-label">Sender Email</div>
            <div class="field-value"><a href="mailto:${clientEmail}" style="color: #BEF264; text-decoration: none; font-weight: 600;">${clientEmail}</a></div>
          </div>
          <div class="field">
            <div class="field-label">Company / Organization</div>
            <div class="field-value">${clientCompany}</div>
          </div>
          <div class="field">
            <div class="field-label">Phone Number</div>
            <div class="field-value">${clientPhone}</div>
          </div>
          <div class="field">
            <div class="field-label">Project Details / Message</div>
            <div class="message-box">${clientMessage.replace(/\n/g, "<br>")}</div>
          </div>
          <div class="footer">
            Delivered directly via Nodemailer from Suraj Banerjee Portfolio
          </div>
        </div>
      </body>
      </html>
    `;

    const clientAutoReplyHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Reaching Out</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5f7; color: #1d1d1f; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 36px; border: 1px solid #e5e5e7; box-shadow: 0 4px 20px rgba(0,0,0,0.04); }
          .header { text-align: center; margin-bottom: 24px; }
          .header h2 { font-size: 22px; color: #1d1d1f; margin: 0 0 6px; font-weight: 700; }
          .content { font-size: 15px; line-height: 1.7; color: #424245; }
          .highlight { background: #f5f5f7; padding: 18px 22px; border-radius: 12px; margin: 20px 0; font-size: 14px; color: #515154; border-left: 3px solid #161616; }
          .btn-wrap { text-align: center; margin: 30px 0 20px; }
          .btn { background: #161616; color: #ffffff !important; padding: 13px 32px; border-radius: 30px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block; }
          .footer { text-align: center; font-size: 12px; color: #86868b; margin-top: 32px; border-top: 1px solid #f0f0f2; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Reaching Out! 👋</h2>
          </div>
          <div class="content">
            <p>Hi <strong>${clientName}</strong>,</p>
            <p>Thank you for getting in touch! I have received your message regarding your project inquiry and will review the requirements shortly.</p>
            <div class="highlight">
              "${clientMessage.substring(0, 160)}${clientMessage.length > 160 ? "..." : ""}"
            </div>
            <p>I typically respond to inquiries within 24 hours.</p>
            <div class="btn-wrap">
              <a href="https://suraj-banerjee.vercel.app" class="btn">Visit Portfolio</a>
            </div>
            <p style="margin-top: 25px;">Best regards,<br><strong>Suraj Banerjee</strong><br><span style="color: #86868b; font-size: 13px;">Frontend UI Developer</span></p>
          </div>
          <div class="footer">
            © ${new Date().getFullYear()} Suraj Banerjee. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `;

    // If EMAIL_PASS credentials exist, send via Nodemailer
    if (emailPass) {
      try {
        const transporter = nodemailer.createTransport(
          process.env.SMTP_HOST
            ? {
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT) || 465,
                secure: Number(process.env.SMTP_PORT) === 465,
                auth: {
                  user: emailUser,
                  pass: emailPass,
                },
              }
            : {
                service: "gmail",
                auth: {
                  user: emailUser,
                  pass: emailPass,
                },
              }
        );

        // 1. Send inquiry notification to Admin (Suraj)
        await transporter.sendMail({
          from: `"Suraj Banerjee Portfolio" <${emailUser}>`,
          replyTo: `"${clientName}" <${clientEmail}>`,
          to: recipientEmail,
          subject: `🚀 New Project Inquiry from ${clientName}`,
          text: adminEmailText,
          html: adminEmailHtml,
          headers: {
            "X-Priority": "1",
            "Importance": "high",
          },
        });

        // 2. Send instant confirmation receipt to Client
        await transporter.sendMail({
          from: `"Suraj Banerjee" <${emailUser}>`,
          replyTo: recipientEmail,
          to: clientEmail,
          subject: `Thanks for getting in touch, ${clientName}! — Suraj Banerjee`,
          text: clientAutoReplyText,
          html: clientAutoReplyHtml,
        });

        return NextResponse.json({
          success: true,
          message: "Message sent successfully via Nodemailer!",
        });
      } catch (nodemailerErr) {
        console.error("Nodemailer failed, falling back to Web3Forms:", nodemailerErr);
      }
    }

    // Fallback: Send directly via Web3Forms if EMAIL_PASS is not configured or failed on Vercel
    const web3FormData = new FormData();
    web3FormData.append("access_key", "a4a14ce6-6913-4d3d-92a0-42ddfd37ec95");
    web3FormData.append("subject", `🚀 New Project Inquiry from ${clientName}`);
    web3FormData.append("from_name", "Suraj Banerjee Portfolio");
    web3FormData.append("Name", clientName);
    web3FormData.append("Email", clientEmail);
    web3FormData.append("Company", clientCompany);
    web3FormData.append("Phone", clientPhone);
    web3FormData.append("Message", clientMessage);

    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: web3FormData,
    });

    if (web3Res.ok) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully via Web3Forms fallback!",
      });
    } else {
      throw new Error("Both Nodemailer and Web3Forms failed to deliver email");
    }
  } catch (err) {
    console.error("Contact API Error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
