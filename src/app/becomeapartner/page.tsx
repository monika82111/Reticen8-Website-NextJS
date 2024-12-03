import Breadcrumb from "@/components/Common/Breadcrumb";
import Becomeapartner from "@/components/Becomeapartner";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Reticen8",
  description: "This is Become a partner page",
  // other metadata
};

const becomeapartner = () => {
  return (
    <>
      <Breadcrumb
        pageName="Become a Partner "
        description="Become a Partner and Join our team at Reticen8 and be part of our mission to make the digital world a safer place."
      />
      <Becomeapartner />
    </>
  );
};

export default becomeapartner;
