"use client";
import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import contactPhoto from "@/assets/img/cottage/cottage-contact-16-9.png";

function Contact() {
  return (
    <section className="aai-contact-section" style={{ padding: "0", marginTop: "80px", minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center" }}>
      <div className="container-fluid" style={{ padding: "0", width: "100%" }}>
        <div className="row align-items-center" style={{ margin: "0" }}>
          <div className="col-lg-5" data-aos="fade-right" style={{ padding: "5rem 4rem", minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center", margin: "2rem 0" }}>
            <ContactForm />
          </div>
          <div className="col-lg-7" data-aos="fade-left" style={{ padding: "0" }}>
            <div className="aai-contact-image-wrapper" style={{ minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center", justifyContent: "center", margin: "2rem 0" }}>
              <div 
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "600px",
                  position: "relative",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Image
                  src={contactPhoto.src}
                  alt="Contact Us"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
