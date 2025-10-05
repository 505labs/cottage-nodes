import React from "react";
import ProtoTypes from "prop-types";
import Link from "next/link";
import bg from "@/assets/img/bg/aai-feature-bg.jpeg";
import cardImg from "@/assets/img/features/fi-1.svg";
import cardImg2 from "@/assets/img/features/fi-2.svg";
import cardImg3 from "@/assets/img/features/fi-3.svg";
import cardImg4 from "@/assets/img/features/fi-4.svg";
import cardImg5 from "@/assets/img/features/fi-5.svg";
import cardImg6 from "@/assets/img/features/fi-6.svg";
import FeatureCard from "../cards/FeatureCard";

function Features({ className }) {
  return (
    <section
      className={className ? `aai-features ${className}` : "aai-features"}
      style={{ background: `url(${bg.src}) no-repeat center center/cover` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="aai-section-title mb-3 text-center mb-5">
              <h2 className="section-title">AI Generate content in seconds</h2>
              <p className="section-desc">
                QumAI has a variety of features that make it the best place to
                start trading
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <FeatureCard
            img={cardImg}
            title="Plagiarism checker"
            desc="Convert data noise intelligent for a quis lorem."
          />
          <FeatureCard
            img={cardImg2}
            title="Search Engine Optimization"
            desc="Convert data noise intelligent for a quis lorem."
          />
          <FeatureCard
            img={cardImg3}
            title="Content Generator"
            desc="Convert data noise intelligent for a quis lorem."
          />
          <FeatureCard
            img={cardImg4}
            title="Digital name generator"
            desc="Convert data noise intelligent for a quis lorem."
          />
          <FeatureCard
            img={cardImg5}
            title="Ad Targeting tips"
            desc="Generates suggestions for ad on targeting on ad."
          />
          <FeatureCard
            img={cardImg6}
            title="Content Rewriter"
            desc="Rewrites your text and say things different way."
          />
        </div>
        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="110"
        >
          <Link href="/services-details" className="aai-btn btn-pill-solid">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
}

Features.propTypes = {
  className: ProtoTypes.string,
};

export default Features;
