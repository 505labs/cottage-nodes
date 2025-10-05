import React from "react";
import Breadcrumb from "@/component/common/Breadcrumb";
import Features from "@/component/homeOne/Features";
import Cta from "@/component/homeOne/Cta";

function Services() {
  return (
    <>
      <Breadcrumb title="Services" />
      <Features />
      <Cta className="py-120" />
    </>
  );
}

export default Services;
