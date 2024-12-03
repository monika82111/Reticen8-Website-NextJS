"use client"; // This marks the file as a Client Component

import { useState, useEffect, useRef } from "react";

const Becomeapartner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    companyName: "",
    city: "",
    phone: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileResponse, setTurnstileResponse] = useState(""); // Store Turnstile response
  const turnstileRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatusMessage("Sending...");

    if (!turnstileResponse) {
    setStatusMessage("Please complete the CAPTCHA.");
    return;
    }

  // Prepare the email data to be sent in the request body
  const emailData = {
    from: formData.email,  // 'from' is set to formData.email
    message: {
      subject: `Support request from ${formData.name}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Company: ${formData.companyName}
        City: ${formData.city}
        Phone: ${formData.phone}
        Message: ${formData.message}
      `,
      html: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.companyName}</p>
        <p><strong>City:</strong> ${formData.city}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    },
      turnstileResponse,
  };

  try {
    const res = await fetch("/api/productForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", 
      },
      body: JSON.stringify(emailData),
    });

    const result = await res.json();

    if (res.ok) {
      setStatusMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        companyName: "",
        city: "",
        phone: "",
      });
        setTurnstileResponse("");
    } else {
      setStatusMessage(result.message || "Something went wrong.");
    }
  } catch (error) {
    setStatusMessage("Failed to send message. Please try again later.");
    console.error("Error sending message:", error);
  }
};
 useEffect(() => {
  if (turnstileRef.current && !document.querySelector("script[src='https://challenges.cloudflare.com/turnstile/v0/api.js']")) {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.onload = () => {
      (window as any).turnstile.render(turnstileRef.current, {
        sitekey: "0x4AAAAAAAbOmXAcGx1n4tw-",
        callback: (token: string) => setTurnstileResponse(token),
        theme: "light",
      });
    };
    document.body.appendChild(script);
  }
}, []);

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-blue-50 ">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12 ">
            <div className="mb-12 rounded-sm border w-full bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <p className="mb-3 text-black dark:text-white">
                Fill out the form below, and our representative will get back to you within 48 hours. We're here to help you grow your business with our exclusive partnership program.
              </p>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  {/* Company Details Section */}
                  <div className="w-full px-4">
                    <h3 className="mb-6 text-lg font-semibold text-dark dark:text-white">Company Details</h3>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="companyName" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      </label>
                      Company Name
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder=""
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="city" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      </label>
                      City
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder=""
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none"
                      />
                    </div>
                  </div>


                  {/* Personal Details Section */}
                  <div className="w-full px-4">
                    <h3 className="mb-6 text-lg font-semibold text-dark dark:text-white">Personal Details</h3>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      </label>
                      Name
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=""
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      </label>
                      Email
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=""
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="phone" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      </label>
                      Phone Number
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=""
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      </label>
                      Message
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder=""
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 mb-5"
                    >
                      Submit Form
                    </button>
                  </div>
                </div>
              </form>
              <div ref={turnstileRef} className="g-recaptcha" />
              {statusMessage && <p>{statusMessage}</p>}
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <img
              src="/images/partners/partners.jpg"
              alt="Partners"
              className="w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Becomeapartner;
