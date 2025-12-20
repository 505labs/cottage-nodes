"use client";
import React from "react";

function Features() {
  const features = [
    {
      title: "Token rewards",
      description: "Token holders are rewarded for vote delegation. Tokens remain unaffected within each token holder's wallet. It is the perfect and simplest way of generating passive income.",
    },
    {
      title: "Accurate and robust",
      description: "Our proprietary price data algorithms are constantly refined to optimise rewards. Our price signals are sourced from live data feeds and submitted in accordance with FTSO requirements via our automated systems.",
    },
    {
      title: "Global systems",
      description: "Our IT infrastructure is located within tier 3 data centres around the globe backed by SLAs that guarantee a monthly uptime percentage of 99.9%. Our solutions are scalable and offer high availability with full redundancy.",
    },
  ];

  return (
    <section className="aai-features-section pt-120 pb-120" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 mb-4 mb-lg-0">
              <div 
                className="aai-feature-card text-center" 
                style={{ 
                  padding: "3rem 2rem", 
                  height: "100%",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
                }}
              >
                <h3 className="section-title mb-4" style={{ fontSize: "1.5rem", fontWeight: "600", color: "#1a2f1a", textShadow: "none" }}>
                  {feature.title}
                </h3>
                <p className="section-desc" style={{ fontSize: "1rem", lineHeight: "1.8", color: "#4a5a4a", textShadow: "none" }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
