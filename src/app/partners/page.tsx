import Breadcrumb from "@/components/Common/Breadcrumb";
import Partners from "@/components/Partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reticen8",
  description: "This is partner Page ",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName=" Partners"
        description="Partnering with Reticen8 Technologies offers a strategic advantage for organizations seeking to enhance their cybersecurity offerings and expand market reach"
      />

      <Partners />
    </>
  );
};

export default ServicesPage;
