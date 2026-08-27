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

    const emailUser = (
      process.env.MAIL_USERNAME ||
      process.env.EMAIL_USER ||
      process.env.SMTP_USER ||
      process.env.MAIL_USER ||
      "surajbanerjee255@gmail.com"
    ).trim();

    const emailPass = (
      process.env.MAIL_PASSWORD ||
      process.env.EMAIL_PASS ||
      process.env.EMAIL_PASSWORD ||
      process.env.SMTP_PASS ||
      process.env.MAIL_PASS ||
      process.env.GMAIL_APP_PASSWORD ||
      ""
    ).replace(/\s+/g, "");

    const recipientEmail = (
      process.env.RECIPIENT_EMAIL ||
      process.env.EMAIL_TO ||
      process.env.MAIL_TO ||
      "surajbanerjee255@gmail.com"
    ).trim();

    if (!emailPass) {
      console.error(
        "Nodemailer Error: Neither MAIL_PASSWORD nor EMAIL_PASS is configured in environment variables. Please check your Vercel / .env settings."
      );
      return NextResponse.json(
        { error: "Email server is not configured. Please check environment variables." },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport(
      process.env.SMTP_HOST
        ? {
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 465,
            secure: Number(process.env.SMTP_PORT || 465) === 465,
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

    // Plain text version for spam-filter compatibility
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

Thank you for reaching out! I have received your project inquiry and will review the details shortly.

Your Message Brief:
"${clientMessage}"

Next Steps:
1. Requirements Review (analyzing scope & design requirements)
2. Direct Response (proposal / discussion invite within 24 hours)

Best regards,
Suraj Banerjee
Frontend UI Developer
Portfolio: https://suraj-banerjee.vercel.app
Email: surajbanerjee255@gmail.com`;

    // -------------------------------------------------------------
    // Admin Notification Email Template (Dark Modern Aesthetic)
    // -------------------------------------------------------------
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry</title>
      </head>
      <body style="margin: 0; padding: 30px 15px; background-color: #0A0A0C; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FFFFFF;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width: 600px; background-color: #141417; border: 1px solid #26262B; border-radius: 18px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.6);" cellspacing="0" cellpadding="0">
                
                <!-- Top Brand Header -->
                <tr>
                  <td style="padding: 28px 32px; border-bottom: 1px solid #222227; background: linear-gradient(180deg, #18181D 0%, #141417 100%);">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="left">
                          <span style="font-size: 16px; font-weight: 800; letter-spacing: -0.3px; color: #FFFFFF;">suraj<span style="color: #BEF264;">.</span>banerjee</span>
                          <span style="display: block; font-size: 11px; color: #8E8E93; text-transform: uppercase; letter-spacing: 1px; margin-top: 2px;">Portfolio Inquiry System</span>
                        </td>
                        <td align="right">
                          <span style="display: inline-block; background-color: rgba(190, 242, 100, 0.12); color: #BEF264; border: 1px solid rgba(190, 242, 100, 0.3); font-size: 11px; font-weight: 700; padding: 5px 12px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">
                            🚀 New Lead
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Content Area -->
                <tr>
                  <td style="padding: 32px;">
                    <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 700; color: #FFFFFF;">New Inquiry from ${clientName}</h1>
                    <p style="margin: 0 0 24px 0; font-size: 14px; color: #9A9AA0; line-height: 1.5;">Received on ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}.</p>

                    <!-- Client Info Table -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #1A1A1F; border: 1px solid #2B2B32; border-radius: 12px; margin-bottom: 24px; overflow: hidden;">
                      <tr>
                        <td style="padding: 14px 18px; border-bottom: 1px solid #26262D; width: 35%; font-size: 12px; font-weight: 600; color: #7E7E88; text-transform: uppercase; letter-spacing: 0.5px;">Client Name</td>
                        <td style="padding: 14px 18px; border-bottom: 1px solid #26262D; font-size: 14px; font-weight: 600; color: #FFFFFF;">${clientName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 14px 18px; border-bottom: 1px solid #26262D; font-size: 12px; font-weight: 600; color: #7E7E88; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</td>
                        <td style="padding: 14px 18px; border-bottom: 1px solid #26262D; font-size: 14px; color: #BEF264;"><a href="mailto:${clientEmail}" style="color: #BEF264; text-decoration: none; font-weight: 600;">${clientEmail}</a></td>
                      </tr>
                      <tr>
                        <td style="padding: 14px 18px; border-bottom: 1px solid #26262D; font-size: 12px; font-weight: 600; color: #7E7E88; text-transform: uppercase; letter-spacing: 0.5px;">Company</td>
                        <td style="padding: 14px 18px; border-bottom: 1px solid #26262D; font-size: 14px; color: #FFFFFF;">${clientCompany}</td>
                      </tr>
                      <tr>
                        <td style="padding: 14px 18px; font-size: 12px; font-weight: 600; color: #7E7E88; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                        <td style="padding: 14px 18px; font-size: 14px; color: #FFFFFF;">${clientPhone}</td>
                      </tr>
                    </table>

                    <!-- Project Message Box -->
                    <div style="margin-bottom: 24px;">
                      <div style="font-size: 12px; font-weight: 700; color: #7E7E88; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Project Brief & Message</div>
                      <div style="background-color: #1A1A1F; border: 1px solid #2B2B32; border-left: 4px solid #BEF264; border-radius: 10px; padding: 20px; font-size: 14px; line-height: 1.65; color: #E4E4E7; white-space: pre-line;">${clientMessage}</div>
                    </div>

                    <!-- Direct Action Buttons -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="left">
                          <a href="mailto:${clientEmail}?subject=Re: Project Inquiry — Suraj Banerjee" style="display: inline-block; background-color: #BEF264; color: #0A0A0C; font-weight: 700; font-size: 13px; text-decoration: none; padding: 12px 24px; border-radius: 30px; letter-spacing: -0.2px;">Reply Directly to Client →</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 20px 32px; background-color: #0F0F12; border-top: 1px solid #222227; text-align: center;">
                    <p style="margin: 0; font-size: 11px; color: #6E6E77;">Sent securely via Nodemailer from suraj-banerjee.vercel.app</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // -------------------------------------------------------------
    // Client Confirmation Email Template (Ultra-Modern Dark UI)
    // -------------------------------------------------------------
    const clientAutoReplyHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Reaching Out</title>
      </head>
      <body style="margin: 0; padding: 36px 15px; background-color: #0A0A0C; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FFFFFF; -webkit-font-smoothing: antialiased;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" style="max-width: 580px; background-color: #131316; border: 1px solid #24242A; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 60px rgba(0,0,0,0.65);" cellspacing="0" cellpadding="0">
                
                <!-- Sleek Header Bar -->
                <tr>
                  <td style="padding: 30px 36px 24px 36px; border-bottom: 1px solid #1E1E24; background: linear-gradient(180deg, #18181D 0%, #131316 100%);">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="left">
                          <span style="font-size: 17px; font-weight: 800; letter-spacing: -0.4px; color: #FFFFFF;">suraj<span style="color: #BEF264;">.</span>banerjee</span>
                          <span style="display: block; font-size: 11px; color: #8E8E93; letter-spacing: 0.5px; margin-top: 3px;">Frontend UI Developer</span>
                        </td>
                        <td align="right">
                          <span style="display: inline-block; background-color: rgba(190, 242, 100, 0.1); color: #BEF264; border: 1px solid rgba(190, 242, 100, 0.25); font-size: 11px; font-weight: 600; padding: 5px 12px; border-radius: 20px;">
                            <span style="display: inline-block; width: 6px; height: 6px; background-color: #BEF264; border-radius: 50%; margin-right: 5px; vertical-align: middle;"></span>Received
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Main Hero Section -->
                <tr>
                  <td style="padding: 36px 36px 28px 36px;">
                    <h1 style="margin: 0 0 10px 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; color: #FFFFFF; line-height: 1.3;">
                      Thank you for reaching out, ${clientName}! 👋
                    </h1>
                    <p style="margin: 0 0 28px 0; font-size: 15px; color: #A1A1AA; line-height: 1.6;">
                      I have received your project inquiry. I'll personally review your scope and get back to you with thoughts and next steps <strong style="color: #FFFFFF;">within 24 hours</strong>.
                    </p>

                    <!-- Client Message Recap Card -->
                    <div style="background-color: #18181D; border: 1px solid #282830; border-radius: 14px; padding: 22px; margin-bottom: 28px;">
                      <div style="font-size: 11px; font-weight: 700; color: #71717A; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                        Your Project Brief
                      </div>
                      <div style="font-size: 14px; line-height: 1.6; color: #E4E4E7; font-style: italic; border-left: 2px solid #BEF264; padding-left: 14px;">
                        "${clientMessage}"
                      </div>
                    </div>

                    <!-- What's Next Timeline -->
                    <div style="background: linear-gradient(180deg, #16161B 0%, #131316 100%); border: 1px solid #222228; border-radius: 14px; padding: 22px; margin-bottom: 32px;">
                      <div style="font-size: 11px; font-weight: 700; color: #71717A; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;">
                        What to Expect Next
                      </div>

                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="width: 32px; vertical-align: top; padding-bottom: 14px;">
                            <div style="width: 22px; height: 22px; border-radius: 50%; background-color: rgba(190,242,100,0.15); color: #BEF264; font-size: 11px; font-weight: 800; text-align: center; line-height: 22px;">1</div>
                          </td>
                          <td style="vertical-align: top; padding-bottom: 14px; padding-left: 8px;">
                            <div style="font-size: 13px; font-weight: 700; color: #FFFFFF;">Requirements & Tech Analysis</div>
                            <div style="font-size: 12px; color: #8E8E93; margin-top: 2px;">Reviewing UI requirements, design files, or application stack.</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 32px; vertical-align: top; padding-bottom: 14px;">
                            <div style="width: 22px; height: 22px; border-radius: 50%; background-color: rgba(255,255,255,0.08); color: #FFFFFF; font-size: 11px; font-weight: 800; text-align: center; line-height: 22px;">2</div>
                          </td>
                          <td style="vertical-align: top; padding-bottom: 14px; padding-left: 8px;">
                            <div style="font-size: 13px; font-weight: 700; color: #FFFFFF;">Direct Response & Proposal</div>
                            <div style="font-size: 12px; color: #8E8E93; margin-top: 2px;">Sending a tailored roadmap, estimate, or quick discovery call link.</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 32px; vertical-align: top;">
                            <div style="width: 22px; height: 22px; border-radius: 50%; background-color: rgba(255,255,255,0.08); color: #FFFFFF; font-size: 11px; font-weight: 800; text-align: center; line-height: 22px;">3</div>
                          </td>
                          <td style="vertical-align: top; padding-left: 8px;">
                            <div style="font-size: 13px; font-weight: 700; color: #FFFFFF;">Kickoff & Build</div>
                            <div style="font-size: 12px; color: #8E8E93; margin-top: 2px;">Transforming ideas into high-performance web experiences.</div>
                          </td>
                        </tr>
                      </table>
                    </div>

                    <!-- Call To Action Button -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                      <tr>
                        <td align="center">
                          <a href="https://suraj-banerjee.vercel.app" style="display: inline-block; background-color: #FFFFFF; color: #0A0A0C; font-weight: 700; font-size: 14px; text-decoration: none; padding: 14px 34px; border-radius: 30px; letter-spacing: -0.2px; box-shadow: 0 6px 20px rgba(255,255,255,0.15);">
                            Explore Portfolio & Works →
                          </a>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <div style="border-top: 1px solid #222227; margin: 28px 0 24px 0;"></div>

                    <!-- Sender Signature -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="left">
                          <div style="font-size: 15px; font-weight: 700; color: #FFFFFF;">Suraj Banerjee</div>
                          <div style="font-size: 13px; color: #BEF264; margin-top: 2px;">Frontend UI Developer & Creative Engineer</div>
                          <div style="font-size: 12px; color: #71717A; margin-top: 4px;">Kolkata, India • <a href="mailto:surajbanerjee255@gmail.com" style="color: #71717A; text-decoration: underline;">surajbanerjee255@gmail.com</a></div>
                        </td>
                      </tr>
                    </table>

                    <!-- Social Channels Row -->
                    <div style="margin-top: 20px;">
                      <a href="https://www.linkedin.com/in/suraj-banerjee-0a1251268/" style="color: #8E8E93; font-size: 12px; text-decoration: none; margin-right: 15px;">LinkedIn</a>
                      <a href="https://github.com/surajbanerjee" style="color: #8E8E93; font-size: 12px; text-decoration: none; margin-right: 15px;">GitHub</a>
                      <a href="https://x.com/imsurajbanerjee" style="color: #8E8E93; font-size: 12px; text-decoration: none; margin-right: 15px;">X (Twitter)</a>
                      <a href="https://www.instagram.com/imsurajbanerjee" style="color: #8E8E93; font-size: 12px; text-decoration: none;">Instagram</a>
                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 24px 36px; background-color: #0E0E11; border-top: 1px solid #1E1E24; text-align: center;">
                    <p style="margin: 0; font-size: 11px; color: #52525B; line-height: 1.5;">
                      You received this automated confirmation because you submitted a message on <a href="https://suraj-banerjee.vercel.app" style="color: #71717A; text-decoration: none;">suraj-banerjee.vercel.app</a>.
                    </p>
                    <p style="margin: 6px 0 0 0; font-size: 11px; color: #3F3F46;">
                      © ${new Date().getFullYear()} Suraj Banerjee. All rights reserved.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

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
        Importance: "high",
      },
    });

    // 2. Send instant confirmation receipt to Client
    await transporter.sendMail({
      from: `"Suraj Banerjee" <${emailUser}>`,
      replyTo: recipientEmail,
      to: clientEmail,
      subject: `Thank you for reaching out, ${clientName}! — Suraj Banerjee`,
      text: clientAutoReplyText,
      html: clientAutoReplyHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully via Nodemailer!",
    });
  } catch (err) {
    console.error("Nodemailer Contact API Error:", err);
    return NextResponse.json(
      { error: "Failed to send message via Nodemailer. " + (err.message || "") },
      { status: 500 }
    );
  }
}
