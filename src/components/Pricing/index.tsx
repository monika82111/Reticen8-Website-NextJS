"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28 bg-blue-50">
      <div className="container">
        <SectionTitle
          title="Support"
          paragraph="We offer a range of support options, including Standard, Premium, and Advanced tiers to meet your specific needs . "
          center
          width="665px"
        />

        

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Standard (8x5)"

          >
            <OfferList text="8 hours of support on weekdays" status="active" />
            <OfferList text="Callback within 30 minutes" status="active" />
            <OfferList text="Support up to Level 3 as per escalation matrix" status="active" />
            <OfferList text="Available for supported products" status="active" />
            <OfferList text="Not available for products at end of life" status="inactive" />
            <OfferList text="Dedicated support contact" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Premium (24x7)"
           
          >
            <OfferList text="24/7 support" status="active" />
            <OfferList text="Callback within 30 minutes" status="active" />
            <OfferList text="Support up to Level 3 as per escalation matrix" status="active" />
            <OfferList text="Available for supported products" status="active" />
            <OfferList text="Not available for products at end of life" status="active" />
            <OfferList text="Dedicated support contact" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Advanced Support"
           
          >
            <OfferList text="Support up to Level 3 as per escalation matrix" status="active" />
            <OfferList text="Dedicated support manager" status="active" />
            <OfferList text="24/7 support" status="active" />
            <OfferList text="10-hour resolution in metropolitan areas" status="active" />
            <OfferList text="Dedicated support contact" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
