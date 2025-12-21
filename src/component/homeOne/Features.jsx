"use client";
import React from "react";
import bg from "@/assets/img/cottage/cottage-ultra-wide-mountains.png";

function Features() {
  const features = [
    {
      title: "Token rewards",
      description: "Token holders are rewarded for vote delegation. Tokens remain unaffected within each token holder's wallet. It is the perfect and simplest way of generating passive income.",
      icon: "💰",
    },
    {
      title: "Accurate and robust",
      description: "Our proprietary price data algorithms are constantly refined to optimise rewards. Our price signals are sourced from live data feeds and submitted in accordance with FTSO requirements via our automated systems.",
      icon: "🎯",
    },
    {
      title: "Global systems",
      description: "Our IT infrastructure is located within tier 3 data centres around the globe backed by SLAs that guarantee a monthly uptime percentage of 99.9%. Our solutions are scalable and offer high availability with full redundancy.",
      icon: "🌍",
    },
  ];

  return (
    <section 
      className="aai-features-section pt-120 pb-120" 
      style={{ 
        position: "relative",
        backgroundImage: `url(${bg.src})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 mb-4 mb-lg-0">
              <div 
                className="aai-feature-card text-center" 
                style={{ 
                  padding: "2.5rem 2rem", 
                  height: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "20px",
                  border: "2px solid rgba(212, 165, 116, 0.35)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 25px rgba(212, 165, 116, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 15px 45px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 35px rgba(212, 165, 116, 0.15)";
                  e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.55)";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 25px rgba(212, 165, 116, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.35)";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                }}
              >
                {/* Gradient border accent at top */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, transparent, #d4a574, transparent)",
                    borderRadius: "20px 20px 0 0",
                  }}
                />
                
                {/* Icon badge */}
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    margin: "0 auto 1.5rem",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(212, 165, 116, 0.25), rgba(212, 165, 116, 0.1))",
                    border: "2px solid rgba(212, 165, 116, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    boxShadow: "0 4px 15px rgba(212, 165, 116, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(212, 165, 116, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(212, 165, 116, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                  }}
                >
                  {feature.icon}
                </div>
                
                <h3 
                  className="section-title mb-4" 
                  style={{ 
                    fontSize: "1.5rem", 
                    fontWeight: "600",
                    background: "linear-gradient(135deg, #ffffff 0%,rgb(255, 222, 146) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 20px rgba(255, 255, 255, 0.2), 2px 2px 6px rgba(0, 0, 0, 0.4)",
                    filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4))",
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="section-desc" 
                  style={{ 
                    fontSize: "1rem", 
                    lineHeight: "1.8", 
                    color: "#ffffff",
                    textShadow: "0 2px 8px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.08)",
                  }}
                >
                  {feature.description}
                </p>
                
                {/* Decorative bottom accent */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60px",
                    height: "3px",
                    background: "linear-gradient(90deg, transparent, rgba(212, 165, 116, 0.5), transparent)",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
