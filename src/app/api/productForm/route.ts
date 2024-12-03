// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: NextRequest) {
//   try {
//     const { from, message } = await req.json();  // Extract 'from' and 'message' data from the request

//     // Set up the email transport
//     const transporter = nodemailer.createTransport({
//       host: "mail.reticen8.com",
//       port: 587,
//       secure: false,  // Set to true for port 465, otherwise false
//       auth: {
//         user: 'vivek.panchal@reticen8.com',
//         pass: 'VivekPanchal'
//       },
//     });

//     // Send the email
//     const info = await transporter.sendMail({
//       from: from,  // Sender's email address (from the form data)
//       to: "sales@reticen8.com",  // Hardcoded recipient email (Monika)
//       subject: message.subject || 'No Subject',
//       text: message.text,  // Plain text version of the email
//       html: message.html,  // HTML version of the email
//     });

//     return NextResponse.json({ message: 'Email sent successfully', info }, { status: 200 });
//   } catch (error: any) {
//     console.error('Error sending email:', error);
//     return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { from, message , turnstileResponse } = await req.json(); // Extract 'from' and 'message' data from the request
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({
        secret: "0x4AAAAAAAbOmba7t7kVUEucUqMOiyG0YeU",  // Replace with your actual secret key
        response: turnstileResponse,
      }),
    });

        const data = await response.json();

    // If the CAPTCHA verification fails, return an error response
    if (!data.success) {
      return NextResponse.json(
        { message: 'Captcha verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Set up the email transport
    const transporter = nodemailer.createTransport({
     host: "mail.reticen8.com",
      port: 587,
      secure: false,  // Set to true for port 465, otherwise false
      auth: {
        user: 'vivek.panchal@reticen8.com',
        pass: 'VivekPanchal'
      },
    });

    // Send email to sales team
    const salesEmailInfo = await transporter.sendMail({
      from: from, // Sender's email address (from the form data)
      to: "sales@reticen8.com", // Hardcoded recipient email
      subject: message.subject || "No Subject",
      text: message.text, // Plain text version of the email
      html: message.html, // HTML version of the email
    });

    // Send "Thank You" email to the user
    const thankYouMessage = `
      <p>Thank you for reaching out to us and submitting your partnership request. We have received your information and will get back to you within 48 hours.</p>
      <p>Best Regards,</p>
      <p>Reticen8 Team</p>
    `;

  const thankYouEmailInfo = await transporter.sendMail({
  from: "sales@reticen8.com", // Sender's email address for the "Thank You" email
  to: from, // Send to the form submitter
  subject: "Thank You for Partnering with Us!",
  text: `Thank you for your interest in becoming our partner. We truly appreciate the time you took to fill out the partnership request form.

Your submission has been received successfully, and our team is already reviewing your details. Rest assured, we are committed to understanding your needs and exploring how we can collaborate effectively. A representative from our team will reach out to you within the next 48 hours.

At Reticen8, we believe in building strong and fruitful partnerships. Together, we can create meaningful opportunities and achieve success.

If you have any additional questions or require immediate assistance, please do not hesitate to contact us at sales@reticen8.com.

Thank you once again for choosing to partner with us. We look forward to a productive collaboration!

Warm regards,
The Reticen8 Team
`,
html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">    
    <div style="background-color: #e0edf5; padding: 20px; text-align: center;">
      <img src="https://repositories.reticen8.com/static/proprium.png"
        alt="Reticen8 Logo" 
        style="width: 100px; height: auto; margin-bottom: 10px;" 
      />
      <h1 style="color: #333; font-size: 24px; margin: 0;">Welcome to Reticen8</h1>
    </div>
    <div style="padding: 20px;">
      <p>Thank you for your interest in becoming our partner. We truly appreciate the time you took to fill out the partnership request form.</p>
      <p>Your submission has been received successfully, and our team is already reviewing your details. Rest assured, we are committed to understanding your needs and exploring how we can collaborate effectively. A representative from our team will reach out to you within the next 48 hours.</p>
      <p>At Reticen8, we believe in building strong and fruitful partnerships. Together, we can create meaningful opportunities and achieve success.</p>
      <p>If you have any additional questions or require immediate assistance, please do not hesitate to contact us at <a href="mailto:sales@reticen8.com">sales@reticen8.com</a>.</p>
      <p>Thank you once again for choosing to partner with us. We look forward to a productive collaboration!</p>
      <p>Warm regards,</p>
      <p><strong>The Reticen8 Team</strong></p>
    </div>
    <div style="background-color: #e0edf5; text-align: center; padding: 10px;">
      <p style="font-size: 12px; color: #777; margin: 0;">&copy; 2024 Reticen8. All rights reserved.</p>
      <p style="font-size: 12px; color: #777; margin: 0;">Reticen8 Technologies, Innohouse, Plot No. 9,
      Sector 32, Gurugram, India </p>
    </div>
  </div>
`,

});


    return NextResponse.json(
      {
        message: "Emails sent successfully",
        salesEmailInfo,
        thankYouEmailInfo,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
