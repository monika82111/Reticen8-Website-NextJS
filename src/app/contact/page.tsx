import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reticen8",
  description: "This is Contact Page ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We're always ready to hear from you. Whether you have a question, need support, or want to explore partnership opportunities, don't hesitate to reach out. Our team is here to assist you promptly and efficiently. Feel free to contact us via the form below or directly through email or phone. We're committed to providing you with exceptional service and support."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
