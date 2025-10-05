import React from "react";
import ProtoTypes from "prop-types";
import bg from "@/assets/img/bg/cta-bg.jpeg";
import img from "@/assets/img/cta/cta-screen.png";
import Link from "next/link";
import Image from "next/image";

function Cta({ className }) {
  return (
    <section
      className={`aai-cta pb-120 ${className}`}
      style={{ background: `url(${bg.src}) no-repeat center center/cover` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg">
            <div>
              <h2 className="section-title mb-4">
                Be part of the future of
                <span className="position-relative">
                  <span className="position-relative aai-cta-line z-3">
                    Ai Writing
                  </span>
                </span>
                tools
              </h2>
              <p className="section-desc">
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
