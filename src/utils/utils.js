import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});

export async function sendContactUsEmail({
    fullName,
    email,
    phone,
    service,
    message,
}) {
    const emailContent = `
    <html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Agdasima&family=Lato&display=swap" rel="stylesheet">
        <style>
            a {
                color: #fff !important;
            }
        </style>
    </head>
        <body>
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #fff;background: linear-gradient(rgba(43,57,144,0.8),rgb(39,170,225) 65%);border-radius: 20px;font-family: 'Lato', sans-serif;max-width: 620px;">
                <h2 style="font-weight: 500;line-height: 1.1;font-size: 30px;color: rgb(255,255,255);font-family: 'Agdasima',sans-serif;">Contact Us Form Submission</h2>
                <p style="font-size: 18px; color: #fff; margin-top: 10px;">You have received a new contact form submission from your website.</p>
                <p style="font-size: 18px; color: #fff; margin-top: 10px;"><strong>Full Name:</strong> ${fullName}</p>
                <p style="font-size: 18px; color: #fff; margin-top: 10px;"><strong>Email:</strong> ${email}</p>
                ${phone
            ? `<p style="font-size: 18px; color: #fff; margin-top: 10px;"><strong>Phone:</strong> ${phone}</p>`
            : ""
        }
                ${service
            ? `<p style="font-size: 18px; color: #fff; margin-top: 10px;"><strong>Service:</strong> ${service}</p>`
            : ""
        }
                ${message
            ? `<p style="font-size: 18px; color: #fff; margin-top: 10px;"><strong>Message:</strong> ${message}</p>`
            : ""
        }
            </div>
        </body>
    </html>`;

    console.log("Email Content ==> ", email);

    await transporter.sendMail({
        from: `${fullName} <${email}>`,
        to: process.env.MAIL_USERNAME,
        subject: "New Contact Form Submission",
        html: emailContent,
    });
}

