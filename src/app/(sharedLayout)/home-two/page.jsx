import React from "react";
import WritingStep from "@/component/homeOne/WritingStep";
import Features from "@/component/homeOne/Features";
import Testimonials from "@/component/homeOne/Testimonials";
import Pricing from "@/component/homeOne/Pricing";
import Faq from "@/component/homeOne/Faq";
import Cta from "@/component/homeOne/Cta";
import Hero from "@/component/homeTwo/Hero";
import Awards from "@/component/homeTwo/Awards";

function HomeTwo() {
  return (
    <>
      <Hero />
      <Features className="py-120" />
      <WritingStep className="pt-5 pt-120" />
      <Awards />
      <Testimonials className={"py-120"} />
      <Pricing />
      <Faq />
      <Cta />
    </>
  );
}

export default HomeTwo;
