"use client"; // This marks the file as a Client Component
import { useState, useEffect, useRef } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      from: formData.email,  // Use formData.email as 'from' address

      message: {
        subject: `Support request from ${formData.name}`,
        text: formData.message,
        html: `<p>${formData.message}</p>`, // Optional HTML formatting
      },
       turnstileResponse,
    };

    try {
      const res = await fetch("/api/sendEmail", {
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
        setFormData({ name: "", email: "", message: "" });
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
    //ensures the CAPTCHA widget initialization occurs only after the script is fully loaded.
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
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 bg-blue-50">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm border w-full bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                       Name
                      </label>
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
                        Email
                      </label>
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
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                         Message
                      </label>
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
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
              <div ref={turnstileRef} className="g-recaptcha" />
              {statusMessage && <p>{statusMessage}</p>}
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            {/* <NewsLatterBox /> */}
            <div className="w-full h-[340px] ">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.0797290139285!2d77.0364714096439!3d28.447012875665447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18423fffffff%3A0xf1cb8c82c3c93b7d!2sInnoHouse!5e0!3m2!1sen!2sin!4v1713606572527!5m2!1sen!2sin"
    className="w-full h-full border"
  ></iframe>
</div>
  
  {/* Location Info */}
  <div className="flex mt-2 space-x-4  ">
    <i className="bi bi-geo-alt text-xl text-blue-600"></i> {/* Location Icon */}
    <div>
      <h4 className="text-lg font-bold text-gray-800">Location:</h4>
      <p className="text-gray-600">
        Reticen8 Technologies,  <br/>Innohouse, Plot No. 9,<br/>
        Sector 32, Institutional area,<br/>
       Gurugram 122018
      </p>
    </div>
  </div>
  <br/>

  {/* Email Info */}
  <div className="flex items-start  space-x-4">
    <i className="bi bi-envelope text-xl text-primary"></i>
    <div>
      <h4 className="text-lg font-bold text-gray-800">Email:</h4>
      <p className="text-gray-600">info@reticen8.com</p>
    </div>
  </div>
<br/>
  {/* Call Info */}
  <div className="flex items-start space-x-4 ">
    <i className="bi bi-phone text-xl text-primary"></i>
    <div>
      <h4 className="text-lg font-bold text-gray-800">Call:</h4>
      <p className="text-gray-600">0124-4957718</p>
    </div>
  </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

