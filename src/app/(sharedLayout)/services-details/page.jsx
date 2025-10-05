import React from "react";
import Breadcrumb from "@/component/common/Breadcrumb";
import Cta from "@/component/homeOne/Cta";
import ServiceDetail from "@/component/servicesDetails/ServiceDetail";
import AboutService from "@/component/servicesDetails/AboutService";
import RelatedService from "@/component/servicesDetails/RelatedService";

function ServiceDetails() {
  return (
    <>
      <Breadcrumb title="Service Details" />
      <ServiceDetail />
      <AboutService />
      <RelatedService />
      <Cta className="py-120" />
    </>
  );
}

export default ServiceDetails;
