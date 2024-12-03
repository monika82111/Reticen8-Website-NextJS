// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: NextRequest) {
//   try {
//     const { from, message, product } = await req.json();  // Extract the necessary data from the request

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
//       to: "sales@reticen8.com",  // Hardcoded recipient email 
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



// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: NextRequest) {
//   try {
//     const { from, message, product } = await req.json(); // Extract the necessary data from the request

//     // Set up the email transport
//     const transporter = nodemailer.createTransport({
//        host: "mail.reticen8.com",
//       port: 587,
//       secure: false,  // Set to true for port 465, otherwise false
//       auth: {
//         user: 'vivek.panchal@reticen8.com',
//         pass: 'VivekPanchal'
//       },
//     });

//     // Send the main email to your team
//     const teamEmailInfo = await transporter.sendMail({
//       from: from, // Sender's email address (from the form data)
//       to: "sales@reticen8.com", // Hardcoded recipient email
//       subject: message.subject || 'No Subject',
//       text: message.text, // Plain text version of the email
//       html: message.html, // HTML version of the email
//     });

//     // Send a thank-you email to the user
//     const thankYouEmailInfo = await transporter.sendMail({
//       from: "sales@reticen8.com", // Your official email address for thank-you emails
//       to: from, // Send the thank-you email to the form submitter
//       subject: "Thank You for Requesting a Demo of Our Solutions",
// text: `
// Thank you for your interest in Reticen8 and for requesting a demo of our ${product || 'services'}. We are thrilled about the opportunity to showcase how our solutions can meet your needs and drive success for your organization.

// Our team has received your request and will be reaching out shortly to schedule the demo at a time that works best for you. If you have specific requirements or areas you'd like us to focus on during the demo, please feel free to let us know.

// We look forward to connecting with you soon and demonstrating the value we can bring to your business.

// Best regards,  
// The Reticen8 Team`,
// html: `
//  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">    
//  <div style="background-color: #e0edf5; padding: 20px; text-align: center;">
//    <img src = "https://repositories.reticen8.com/static/proprium.png"
//    alt="Reticen8 Logo" 
//    style="width: 100px; height: auto; margin-bottom: 10px;" 
//  />
//       <h1 style="color: #333; font-size: 24px; margin: 0;">Welcome to Reticen8</h1>
//     </div>
//     <div style="padding: 20px;">
//       <p>Thank you for your interest in <strong>Reticen8</strong> and for requesting a demo of our <strong>${product || 'services'}</strong>. We are thrilled about the opportunity to showcase how our solutions can meet your needs and drive success for your organization.</p>
//       <p>Our team has received your request and will be reaching out shortly to schedule the demo at a time that works best for you. If you have specific requirements or areas you'd like us to focus on during the demo, please feel free to let us know.</p>
//       <p>We look forward to connecting with you soon and demonstrating the value we can bring to your business.</p>
//       <p>Best regards,</p>
//       <p><strong>The Reticen8 Team</strong></p>
//     </div>
//     <div style="background-color: #e0edf5; text-align: center; padding: 10px;">
//       <p style="font-size: 12px; color: #777; margin: 0;">&copy; 2024 Reticen8. All rights reserved.</p>
//       <p style="font-size: 12px; color: #777; margin: 0;">Reticen8 Technologies, Innohouse, Plot No. 9,
// Sector 32, Gurugram , India </p>
//     </div>
//   </div>
// `,

//     });

//     return NextResponse.json(
//       { 
//         message: 'Emails sent successfully', 
//         teamEmailInfo, 
//         thankYouEmailInfo 
//       }, 
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { message: 'Failed to send email', error: error.message }, 
//       { status: 500 }
//     );
//   }
// }








import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // Extract the form data from the request
    const { from, message, product, turnstileResponse } = await req.json();

    // Step 1: Verify the Turnstile response
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

    // Step 2: Set up the email transport
    const transporter = nodemailer.createTransport({
      host: "mail.reticen8.com",
      port: 587,
      secure: false,  // Set to true for port 465, otherwise false
      auth: {
        user: 'vivek.panchal@reticen8.com',
        pass: 'VivekPanchal',
      },
    });

    // Step 3: Send the main email to your team
    const teamEmailInfo = await transporter.sendMail({
      from: from,  // Sender's email address
      to: "sales@reticen8.com",  // Team email
      subject: message.subject || 'No Subject',
      text: message.text,  // Plain text version of the email
      html: message.html,  // HTML version of the email
    });

    // Step 4: Send a thank-you email to the user
      const thankYouEmailInfo = await transporter.sendMail({
      from: "sales@reticen8.com", // Your official email address for thank-you emails
      to: from, // Send the thank-you email to the form submitter
      subject: "Thank You for Requesting a Demo of Our Solutions",
text: `
Thank you for your interest in Reticen8 and for requesting a demo of our ${product || 'services'}. We are thrilled about the opportunity to showcase how our solutions can meet your needs and drive success for your organization.

Our team has received your request and will be reaching out shortly to schedule the demo at a time that works best for you. If you have specific requirements or areas you'd like us to focus on during the demo, please feel free to let us know.

We look forward to connecting with you soon and demonstrating the value we can bring to your business.

Best regards,  
The Reticen8 Team`,
html: `
 <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">    
 <div style="background-color: #e0edf5; padding: 20px; text-align: center;">
   <img src = "https://repositories.reticen8.com/static/proprium.png"
   alt="Reticen8 Logo" 
   style="width: 100px; height: auto; margin-bottom: 10px;" 
 />
      <h1 style="color: #333; font-size: 24px; margin: 0;">Welcome to Reticen8</h1>
    </div>
    <div style="padding: 20px;">
      <p>Thank you for your interest in <strong>Reticen8</strong> and for requesting a demo of our <strong>${product || 'services'}</strong>. We are thrilled about the opportunity to showcase how our solutions can meet your needs and drive success for your organization.</p>
      <p>Our team has received your request and will be reaching out shortly to schedule the demo at a time that works best for you. If you have specific requirements or areas you'd like us to focus on during the demo, please feel free to let us know.</p>
      <p>We look forward to connecting with you soon and demonstrating the value we can bring to your business.</p>
      <p>Best regards,</p>
      <p><strong>The Reticen8 Team</strong></p>
    </div>
    <div style="background-color: #e0edf5; text-align: center; padding: 10px;">
      <p style="font-size: 12px; color: #777; margin: 0;">&copy; 2024 Reticen8. All rights reserved.</p>
      <p style="font-size: 12px; color: #777; margin: 0;">Reticen8 Technologies, Innohouse, Plot No. 9,
Sector 32, Gurugram , India </p>
    </div>
  </div>
`,

    });

    return NextResponse.json(
      { message: 'Emails sent successfully', teamEmailInfo, thankYouEmailInfo },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Failed to process the form', error: error.message },
      { status: 500 }
    );
  }
}
