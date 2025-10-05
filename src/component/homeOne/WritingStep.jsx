import React from "react";
import ProtoTypes from "prop-types";
import addUserIco from "@/assets/img/icons/Add-User.svg";
import homeIco from "@/assets/img/icons/Home.svg";
import walletIco from "@/assets/img/icons/Wallet.svg";
import Image from "next/image";

function WritingStep({ className }) {
  return (
    <section className={`writing-steps-area  ${className}`}>
      <div className="container">
        <div className="writing-steps-wrapper" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-4">
              <div className="writing-step">
                <Image
                  height={addUserIco.height}
                  width={addUserIco.width}
                  src={addUserIco.src}
                  className="writing-step-icon"
                  alt=""
                />
                <h3 className="writing-step-title">Artificial Intelligence</h3>
                <p className="writing-step-desc">
                  Building intelligent applications and AI-powered systems that solve real-world problems at scale.
                </p>
                <div className="writing-step-arrow d-none d-lg-grid">
                  <svg
                    width="13"
                    height="20"
                    viewBox="0 0 13 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L11.4211 9.52632L1 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="writing-step">
                <Image
                  height={homeIco.height}
                  width={homeIco.width}
                  src={homeIco.src}
                  className="writing-step-icon"
                  alt=""
                />
                <h3 className="writing-step-title">Blockchain Technology</h3>
                <p className="writing-step-desc">
                  Building secure blockchain solutions with expertise in DeFi, ZK cryptography, and TEEs.
                </p>
                <div className="writing-step-arrow d-none d-lg-grid">
                  <svg
                    width="13"
                    height="20"
                    viewBox="0 0 13 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L11.4211 9.52632L1 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="writing-step border-0 pe-0">
                <Image
                  height={walletIco.height}
                  width={walletIco.width}
                  src={walletIco.src}
                  className="writing-step-icon"
                  alt=""
                />
                <h3 className="writing-step-title">Complex Systems</h3>
                <p className="writing-step-desc">
                  Engineering solutions for complex systems using principles from physics and mathematics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

WritingStep.propTypes = {
  className: ProtoTypes.string,
};

export default WritingStep;
