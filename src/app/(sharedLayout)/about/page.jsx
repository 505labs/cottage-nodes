import Service from "@/component/about/Service";
import Breadcrumb from "@/component/common/Breadcrumb";
import Cta from "@/component/homeOne/Cta";
import Faq from "@/component/homeOne/Faq";
import React from "react";


function About() {
  return (
    <>
      <Breadcrumb title="About Us" />
      <Service />
      <Faq />
      <Cta />
    </>
  );
}

export default About;
