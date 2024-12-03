"use client";
import { useState, useEffect, useRef } from "react";

const RequestDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    companyName: "",
    city: "",
    phone: "",
    product: "", // Track selected product
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileResponse, setTurnstileResponse] = useState(""); // Store Turnstile response
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      turnstileRef.current &&
      !document.querySelector(
        "script[src='https://challenges.cloudflare.com/turnstile/v0/api.js']",
      )
    ) {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, product: e.target.value });
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
      from: formData.email, // Sender's email
      message: {
        subject: `Support request for ${formData.product} from ${formData.name}`,
        text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Company Name: ${formData.companyName}
      City: ${formData.city}
      Product: ${formData.product}
      Message: ${formData.message}
    `,
        html: `
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Company Name:</strong> ${formData.companyName}</p>
      <p><strong>City:</strong> ${formData.city}</p>
      <p><strong>Product:</strong> ${formData.product}</p>
      <p><strong>Message:</strong><br/>${formData.message}</p>
    `,
      },
      product: formData.product, // You can include this separately if needed
      turnstileResponse,
    };

    try {
      const res = await fetch("/api/demoForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
          product: "",
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

  // useEffect(() => {
  //   if (!document.querySelector("script[src='https://challenges.cloudflare.com/turnstile/v0/api.js']")) {
  //     const script = document.createElement("script");
  //     script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
  //     script.async = true;
  //     script.onload = () => {
  //       (window as any).turnstile.render(turnstileRef.current, {
  //         sitekey: "0x4AAAAAAAbOmXAcGx1n4tw-",
  //         callback: (token: string) => setTurnstileResponse(token),
  //         theme: "light",
  //       });
  //     };
  //     document.body.appendChild(script);
  //   } else if (turnstileRef.current) {
  //     (window as any).turnstile.render(turnstileRef.current, {
  //       sitekey: "0x4AAAAAAAbOmXAcGx1n4tw-",
  //       callback: (token: string) => setTurnstileResponse(token),
  //       theme: "light",
  //     });
  //   }
  // }); // Add turnstileResponse as a dependency to re-render on token change

  return (
    <section
      id="contact"
      className="overflow-hidden bg-blue-50 py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12 ">
            <div className="mb-12 w-full rounded-sm border bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <p className="mb-3 text-black dark:text-white">
                Fill out the form below to get a demo of our product.
              </p>

              {/* Dropdown for product selection */}
              <div className="mb-8">
                <label
                  htmlFor="product"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                ></label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleProductChange}
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none"
                >
                  <option value="">Select a product</option>
                  <option value="Proprium">
                    Proprium: Digital Rights Management Solution
                  </option>
                  {/* <option value="Partaking">
                    Partaking: Secure File Sharing Solution
                  </option> */}
                  <option value="Epistle">
                    Epistle: Email Gateway Security Solution
                  </option>
                  <option value="X9">X9: Web Access Firewall Solution</option>
                  <option value="Equiflo">
                    Equiflo: Server Load Balancer Solution
                  </option>
                </select>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Rest of the form */}
                <div className="-mx-4 flex flex-wrap">
                  {/* Company Details Section */}
                  <div className="w-full px-4">
                    <h3 className="mb-6 text-lg font-semibold text-dark dark:text-white">
                      Company Details
                    </h3>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                  Company Name
                    <div className="mb-8">
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
                    <h3 className="mb-6 text-lg font-semibold text-dark dark:text-white">
                      Personal Details
                    </h3>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
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
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="mb-5 rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90"
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
              src="/images/demo/demo.avif"
              alt="Demo"
              className="h-[400px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestDemo;
