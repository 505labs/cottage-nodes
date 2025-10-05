import React from "react";
import Breadcrumb from "@/component/common/Breadcrumb";
import PricingCom from "@/component/homeOne/Pricing";
import Testimonials from "@/component/homeOne/Testimonials";
import Cta from "@/component/homeOne/Cta";
import PricingTable from "@/component/pricing/PricingTable";

function Pricing() {
  return (
    <>
      <Breadcrumb title="Pricing" />
      <PricingCom />
      <PricingTable />
      <Testimonials />
      <Cta />
    </>
  );
}

export default Pricing;
