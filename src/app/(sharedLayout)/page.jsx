import React from "react";
import Hero from "@/component/homeOne/Hero";
import WritingStep from "@/component/homeOne/WritingStep";
import Service from "@/component/homeOne/Service";
// import Features from "@/component/homeOne/Features";
// import Awards from "@/component/homeOne/Awards";
// import Testimonials from "@/component/homeOne/Testimonials";
// import Pricing from "@/component/homeOne/Pricing";
// import Faq from "@/component/homeOne/Faq";
// import Cta from "@/component/homeOne/Cta";

function Home() {
  return (
    <>
      <Hero />
      <WritingStep className="pb-5" />
      <Service />
      {/* <Features />
      <Awards />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta /> */}
    </>
  );
}

export default Home;
