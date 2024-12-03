import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { formValues, datasheet } = await req.json(); // Extract form values and datasheet from the request

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

    // Construct the email content
    const emailBody = `
      <p><strong>Name:</strong> ${formValues.name}</p>
      <p><strong>Organization:</strong> ${formValues.organization}</p>
      <p><strong>Contact:</strong> ${formValues.contact}</p>
      <p><strong>Email:</strong> ${formValues.email}</p>
      <p><strong>Datasheet Selected:</strong> ${formValues.datasheetTitle}</p>
    `;

    // Send the email
    const info = await transporter.sendMail({
      from: formValues.email, // Sender's email address
      to: "sales@reticen8.com", // Hardcoded recipient email
      subject: `Datasheet Download Request - ${formValues.datasheetTitle}`,
      html: emailBody, // HTML version of the email
    });

    return NextResponse.json({ message: 'Email sent successfully', info }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
  }
}





// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: NextRequest) {
//   try {
//     const { formValues, datasheet } = await req.json(); // Extract form values and datasheet from the request

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

//     // Construct the email content
//     const emailBody = `
//       <p><strong>Name:</strong> ${formValues.name}</p>
//       <p><strong>Organization:</strong> ${formValues.organization}</p>
//       <p><strong>Contact:</strong> ${formValues.contact}</p>
//       <p><strong>Email:</strong> ${formValues.email}</p>
//       <p><strong>Datasheet Selected:</strong> ${formValues.datasheetTitle}</p>
//     `;

//     // Send the email
//     const info = await transporter.sendMail({
//       from: formValues.email, // Sender's email address
//       to: "sales@reticen8.com", // Hardcoded recipient email
//       subject: `Datasheet Download Request - ${formValues.datasheetTitle}`,
//       html: emailBody, // HTML version of the email
//     });

//     return NextResponse.json({ message: 'Email sent successfully', info }, { status: 200 });
//   } catch (error: any) {
//     console.error('Error sending email:', error);
//     return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
//   }
// }
