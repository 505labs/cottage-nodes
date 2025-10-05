import React from "react";
import Breadcrumb from "@/component/common/Breadcrumb";
import Service from "@/component/homeOne/Service";
import Faq from "@/component/homeOne/Faq";

function Features() {
  return (
    <>
      <Breadcrumb title="Features" />
      <Service />
      <Faq />
    </>
  );
}

export default Features;
