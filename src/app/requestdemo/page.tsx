import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import RequestDemo from "@/components/Requestdemo/page";

export const metadata: Metadata = {
  title: "Reticen8",
  description: "This is Request Demo",
  // other metadata
};

const requestdemo = () => {
  return (
    <>
      <Breadcrumb
        pageName="Request Demo"
        description="Experience the full potential of our product with a hands-on demo! This personalized demonstration will guide you through its key features and capabilities, showcasing how it can address your unique needs and deliver tangible value."
      />

      <RequestDemo />
    </>
  );
};

export default requestdemo;
