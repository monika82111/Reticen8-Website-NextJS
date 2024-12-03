import Breadcrumb from "@/components/Common/Breadcrumb";
import Careers from "@/components/Careers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reticen8",
  description: "This is Career Page",
  // other metadata
};

const CareersPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Careers"
        description="Join our team at Reticen8 and be part of our mission to make the digital world a safer place."
      />

      <Careers />
    </>
  );
};

export default CareersPage;
