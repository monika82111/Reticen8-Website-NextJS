import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "This is Services Page ",
  // other metadata
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName=" Services"
        description="At Reticen8 Technologies, we offer a wide range of services to meet the diverse needs of our clients. From one-time installations to advanced support, our dedicated team ensures smooth integration and optimal performance of our products. Explore our service offerings below"
      />

      <Services />
    </>
  );
};

export default ServicesPage;
