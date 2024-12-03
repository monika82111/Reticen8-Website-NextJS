import Breadcrumb from "@/components/Common/Breadcrumb";
import Products from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reticen8 ",
  description: "This is Product Page ",
  // other metadata
};

const ProductPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Product Page"
        description="Reticen8's commitment to innovation extends to our proprietary software and hardware-based gateway products, providing comprehensive cybersecurity solutions tailored to client needs. Our hardware forms the frontline defense, enhanced by our software for unparalleled robustness."
      />

      <Products />
    </>
  );
};

export default ProductPage;



