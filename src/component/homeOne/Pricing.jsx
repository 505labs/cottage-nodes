import React from "react";
import PricingCard from "../cards/PricingCard";

function Pricing() {
  return (
    <section className="aai-price-tables pb-120">
      <div className="container">
        <div
          className="row align-items-center mb-5"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="col-xl-5">
            <div>
              <h2 className="section-title">
                The Right Plan for Transparent Pricing
              </h2>
            </div>
          </div>
          <div className="col-xl-7">
            <div>
              <p className="section-desc">
                We have several powerful plans to showcase your business and get
                discovered as a creative entrepreneurs. Everything your need.
              </p>
            </div>
          </div>
        </div>
        <PricingCard
          options={["Own Analytics Platform", "Chat Support"]}
          title="Starter"
          desc="For most businesses that want to optimize web queries"
          status="Free"
        />
        <PricingCard
          options={[
            "All Limited Links",
            "Own Analytics Platform",
            "Chat Support",
            "Unlimited Users",
          ]}
          title="Popular"
          desc="Invite & collaborate with other managers."
          status="$29.99"
          btnClass="aai-btn btn-pill-solid"
        />
        <PricingCard
          options={[
            "All Limited Links",
            "Own Analytics Platform",
            "Chat Support",
            "Unlimited Users",
          ]}
          title="Enterprise"
          desc="Assign & track your team’s progress visually"
          status="$39.99"
        />
      </div>
    </section>
  );
}

export default Pricing;
