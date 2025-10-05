import React from "react";
import Faq from "@/component/homeOne/Faq";
import Cta from "@/component/homeOne/Cta";
import ContactCom from "@/component/forms/Contact";
import Breadcrumb from "@/component/common/Breadcrumb";

function Contact() {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <ContactCom />
      <Faq className="py-120" />
      <Cta />
    </>
  );
}

export default Contact;
