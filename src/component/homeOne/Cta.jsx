import React from "react";
import ProtoTypes from "prop-types";
import bg from "@/assets/img/cottage/cottage-21-9.png";
import img from "@/assets/img/cta/cta-screen.png";
import Link from "next/link";
import Image from "next/image";

function Cta({ className }) {
  return (
    <section
      className={`aai-cta pb-120 ${className}`}
      style={{
        background: `url(${bg.src}) no-repeat center center/cover`,
        position: "relative",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, rgba(26, 47, 26, 0.4), rgba(26, 47, 26, 0.6))",
          zIndex: 1,
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg">
            {/* Semi-transparent background box for text */}
            <div
              style={{
                backgroundColor: "rgba(26, 47, 26, 0.75)",
                padding: "2.5rem",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2
                className="section-title mb-4"
                style={{
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
                }}
              >
                Be part of the future of
                <span className="position-relative">
                  <span className="position-relative aai-cta-line z-3">
                    Ai Writing
                  </span>
                </span>
                tools
              </h2>
              <p
                className="section-desc"
                style={{
                  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
                  color: "#ffffff",
                }}
              >
                Unleash the power of AI within Brainwave. Upgrade your
                productivity with Brainwave, the open AI chat app.
              </p>
              <div className="mt-5 d-flex flex-column flex-md-row aai-btns-group">
                <Link href="/prices" className="aai-btn btn-pill-solid">
                  Get Started
                </Link>
                <Link href="/about" className="aai-gradient-outline-btn">
                  Learn More
                </Link>
              </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-7 col-lg mt-5 mt-xl-0"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <div className="aai-cta-img">
              <Image
                height={img.height}
                width={img.width}
                src={img.src}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Cta.propTypes = {
  className: ProtoTypes.string,
};

export default Cta;
