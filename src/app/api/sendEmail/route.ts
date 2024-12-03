import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { from , message , turnstileResponse } = await req.json();  // Only extract 'to' and 'message'
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


        const transporter = nodemailer.createTransport({
            host: "mail.reticen8.com",
      port: 587,
      secure: false,  // Set to true for port 465, otherwise false
      auth: {
        user: 'vivek.panchal@reticen8.com',
        pass: 'VivekPanchal'
      },
        });
        // const transporter = nodemailer.createTransport({
        //     host: process.env.SMTP_HOST,
        //     port: Number(process.env.SMTP_PORT),
        //     secure: true, // Set to true for port 465, otherwise false
        //     auth: {
        //         user: process.env.SMTP_USER,
        //         pass: process.env.SMTP_PASS,
        //     },
        // });

        const info = await transporter.sendMail({
            from: from,
            to:"sales@reticen8.com",                                 
            subject: message.subject || 'No Subject', 
            text: message.text,        
            html: message.html,   
            // from: process.env.SMTP_USER,       // Always use the authenticated sender
            // to: 'monika28022003@gmail.com',         // Hardcoded recipient (Monika)
            // subject: message.subject || 'No Subject', 
            // text: message.text,               // Plain text content
            // html: message.html,               
        });

        return NextResponse.json({ message: 'Email sent successfully', info }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
    }
}
