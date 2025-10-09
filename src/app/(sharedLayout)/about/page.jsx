import Service from "@/component/about/Service";
import Team from "@/component/about/Team";
import Projects from "@/component/about/Projects";
import Breadcrumb from "@/component/common/Breadcrumb";
import Cta from "@/component/homeOne/Cta";
import Faq from "@/component/homeOne/Faq";
import React from "react";


function About() {
  return (
    <>
      <Breadcrumb title="About Us" />
      <Team />
      <Projects />
      {/* <Service />
      <Faq />
      <Cta /> */}
    </>
  );
}

export default About;
