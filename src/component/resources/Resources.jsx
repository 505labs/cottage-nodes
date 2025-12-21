"use client";
import React from "react";
import Image from "next/image";
import bg from "@/assets/img/cottage/cottage-4-3.png";
import resourcesImage from "@/assets/img/cottage/cottage-recources-4-3.png";
import Link from "next/link";

function Resources() {
  const resources = [
    {
      title: "FTSOv2",
      subtitle: "Flare Time Series Oracle",
      description: "FTSOv2 is an enshrined oracle that provides decentralized data feeds to the Flare network. It features block-latency feeds updating every ≈1.8 seconds, supporting up to 1000 feeds across various asset classes. Each feed is supported by around 100 independent data providers selected through delegated stake.",
      link: "https://dev.flare.network/ftso/overview",
      icon: "📊",
      features: [
        "Block-latency feeds updating every ≈1.8 seconds",
        "Up to 1000 feeds across various asset classes",
        "Decentralized with ~100 independent data providers per feed",
        "Completely free to query",
      ],
    },
    {
      title: "FDC",
      subtitle: "Flare Data Connector",
      description: "The Flare Data Connector (FDC) is an enshrined oracle designed to validate external data for Flare's EVM state. It allows users to submit attested data that smart contracts can trust, eliminating the need for direct reliance on users for data integrity.",
      link: "https://dev.flare.network/fdc/overview",
      icon: "🔗",
      features: [
        "Network-level security with 50%+ signature weight requirement",
        "Efficient onchain storage using Merkle trees",
        "Proof-based verification for smart contracts",
        "Supports multiple attestation types",
      ],
    },
    {
      title: "FAssets",
      subtitle: "Trustless Bridge Protocol",
      description: "FAssets is a trustless, over-collateralized bridge connecting non smart contract networks to Flare. It enables the creation of wrapped tokens (FAssets) for assets like BTC, DOGE, and XRP, allowing them to participate in Flare's DeFi ecosystem.",
      link: "https://dev.flare.network/fassets/overview",
      icon: "🌉",
      features: [
        "Trustless and over-collateralized bridge",
        "Supports BTC, DOGE, XRP, and more",
        "Powered by FTSO and FDC protocols",
        "Redeemable for original underlying assets",
      ],
    },
    {
      title: "TEEs",
      subtitle: "Trusted Execution Environments",
      description: "Coming soon - Trusted Execution Environments will provide enhanced security and privacy features for Flare Network applications. This technology will enable secure computation and data processing while maintaining decentralization.",
      link: "#",
      icon: "🔒",
      features: [
        "Enhanced security and privacy",
        "Secure computation capabilities",
        "Maintains decentralization",
        "Coming soon to Flare Network",
      ],
      comingSoon: true,
    },
  ];

  return (
    <>
      {/* Hero Section - Full Page Height */}
      <section 
        className="aai-resources-hero-section" 
        style={{ 
          padding: "0", 
          marginTop: "80px", 
          minHeight: "calc(100vh - 80px)", 
          height: "calc(100vh - 80px)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          background: `url(${bg.src}) no-repeat center center/cover`,
          overflow: "hidden",
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
            background: "linear-gradient(to right, rgba(26, 47, 26, 0.85) 0%, rgba(26, 47, 26, 0.7) 50%, rgba(26, 47, 26, 0.9) 100%)",
            zIndex: 1,
          }}
        />
        
        <div className="container-fluid" style={{ padding: "0", width: "100%", position: "relative", zIndex: 2 }}>
          <div className="row align-items-center" style={{ margin: "0", height: "100%" }}>
            {/* Left side - Text Content */}
            <div className="col-lg-6" data-aos="fade-right" style={{ padding: "5rem 4rem", minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center", margin: "2rem 0", position: "relative", zIndex: 10 }}>
              <div className="aai-resources-hero-content">
                {/* Decorative accent line */}
                <div
                  style={{
                    width: "80px",
                    height: "4px",
                    background: "linear-gradient(90deg, transparent, #d4a574, transparent)",
                    margin: "0 0 2rem 0",
                    borderRadius: "2px",
                  }}
                />
                <h1 
                  className="section-title mb-4" 
                  style={{ 
                    fontSize: "3rem", 
                    fontWeight: "600",
                    background: "linear-gradient(135deg, #ffffff 0%, #f5f1e8 50%, #d4a574 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.3), 2px 2px 8px rgba(0, 0, 0, 0.5)",
                    filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.5))",
                  }}
                >
                  Resources
                </h1>
                <p 
                  style={{ 
                    fontSize: "1.2rem", 
                    color: "#ffffff",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                    lineHeight: "1.8",
                    marginBottom: "2rem",
                  }}
                >
                  Discover the foundational protocols that drive the Flare Network&apos;s innovative infrastructure. Learn about 
                  FTSOv2 (Flare Time Series Oracle), FDC (Flare Data Connector), FAssets, and the upcoming TEEs (Trusted Execution Environments) 
                  that enable secure, decentralized applications on Flare.
                </p>
                <p 
                  style={{ 
                    fontSize: "1.1rem", 
                    color: "rgba(255, 255, 255, 0.9)",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                    lineHeight: "1.8",
                  }}
                >
                  We&apos;ve curated essential documentation and resources to help you quickly understand these groundbreaking protocols 
                  and how they work together to create a robust, trustless ecosystem for decentralized applications.
                </p>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="col-lg-6" data-aos="fade-left" style={{ padding: "0" }}>
              <div className="aai-resources-image-wrapper" style={{ minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center", justifyContent: "center", margin: "2rem 0" }}>
                <div 
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "600px",
                    position: "relative",
                    border: "2px solid rgba(212, 165, 116, 0.3)",
                    borderRadius: "15px",
                    margin: "2rem",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={resourcesImage.src}
                    alt="Flare Network Resources"
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

      {/* Resources Cards Section */}
      <section 
        className="aai-resources-cards-section" 
        style={{ 
          padding: "4rem 0", 
          position: "relative",
          background: `url(${bg.src}) no-repeat center center/cover`,
          overflow: "hidden",
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
            background: "linear-gradient(to bottom, rgba(26, 47, 26, 0.9) 0%, rgba(26, 47, 26, 0.85) 100%)",
            zIndex: 1,
          }}
        />
        
        <div className="container-fluid" style={{ padding: "4rem 2rem", width: "100%", position: "relative", zIndex: 2 }}>
          {/* Resources Cards */}
          <div className="row g-4 justify-content-center">
            {resources.map((resource, index) => (
              <div key={index} className="col-lg-6 col-xl-5">
                <div
                  style={{
                    padding: "2.5rem",
                    backgroundColor: resource.comingSoon 
                      ? "rgba(255, 255, 255, 0.1)" 
                      : "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "20px",
                    border: resource.comingSoon
                      ? "2px solid rgba(212, 165, 116, 0.3)"
                      : "2px solid rgba(212, 165, 116, 0.4)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 30px rgba(212, 165, 116, 0.1)",
                    height: "100%",
                    transition: "all 0.3s ease",
                    position: "relative",
                    opacity: resource.comingSoon ? 0.85 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!resource.comingSoon) {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 40px rgba(212, 165, 116, 0.2)";
                      e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.6)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!resource.comingSoon) {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 30px rgba(212, 165, 116, 0.1)";
                      e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.4)";
                    }
                  }}
                >
                  {/* Coming Soon Badge */}
                  {resource.comingSoon && (
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        padding: "0.5rem 1rem",
                        backgroundColor: "rgba(212, 165, 116, 0.3)",
                        border: "1px solid rgba(212, 165, 116, 0.5)",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        color: "#d4a574",
                        fontWeight: "600",
                        textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Coming Soon
                    </div>
                  )}

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

                  {/* Icon and Title Section */}
                  <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "15px",
                        background: "linear-gradient(135deg, rgba(212, 165, 116, 0.3), rgba(212, 165, 116, 0.1))",
                        border: "2px solid rgba(212, 165, 116, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2.5rem",
                        marginRight: "1.5rem",
                        boxShadow: "0 4px 15px rgba(212, 165, 116, 0.2)",
                        flexShrink: 0,
                      }}
                    >
                      {resource.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 
                        style={{ 
                          color: "#d4a574", 
                          fontSize: "1.8rem", 
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                          textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        {resource.title}
                      </h3>
                      <p 
                        style={{ 
                          color: "rgba(255, 255, 255, 0.8)", 
                          fontSize: "1rem",
                          margin: 0,
                          textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        {resource.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p 
                    style={{ 
                      fontSize: "1.05rem", 
                      lineHeight: "1.8", 
                      color: "#ffffff",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {resource.description}
                  </p>

                  {/* Features List */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <h4 
                      style={{ 
                        color: "#d4a574", 
                        fontSize: "1rem", 
                        fontWeight: "600",
                        marginBottom: "1rem",
                        textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Key Features:
                    </h4>
                    <ul style={{ 
                      listStyle: "none", 
                      padding: 0, 
                      margin: 0,
                    }}>
                      {resource.features.map((feature, idx) => (
                        <li 
                          key={idx}
                          style={{ 
                            color: "#ffffff",
                            fontSize: "0.95rem",
                            lineHeight: "1.8",
                            marginBottom: "0.75rem",
                            paddingLeft: "1.5rem",
                            position: "relative",
                            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              top: "0.5rem",
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              backgroundColor: "#d4a574",
                              boxShadow: "0 0 10px rgba(212, 165, 116, 0.5)",
                            }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Read More Button */}
                  {!resource.comingSoon && (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "0.75rem 2rem",
                        backgroundColor: "rgba(212, 165, 116, 0.2)",
                        border: "2px solid rgba(212, 165, 116, 0.5)",
                        borderRadius: "30px",
                        color: "#d4a574",
                        textDecoration: "none",
                        fontSize: "1rem",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.4)";
                        e.currentTarget.style.borderColor = "#d4a574";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 4px 15px rgba(212, 165, 116, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.2)";
                        e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.5)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      READ MORE →
                    </a>
                  )}

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

          {/* Additional Resources Section */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div
                style={{
                  padding: "2.5rem",
                  backgroundColor: "rgba(212, 165, 116, 0.15)",
                  backdropFilter: "blur(15px)",
                  borderRadius: "20px",
                  border: "2px solid rgba(212, 165, 116, 0.4)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  textAlign: "center",
                }}
              >
                <h3 
                  style={{ 
                    color: "#d4a574", 
                    fontSize: "1.8rem", 
                    fontWeight: "600",
                    marginBottom: "1rem",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Explore Flare Network
                </h3>
                <p 
                  style={{ 
                    color: "#ffffff", 
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    marginBottom: "2rem",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  For comprehensive documentation, developer guides, and the latest updates, visit the official Flare Developer Hub.
                </p>
                <a
                  href="https://dev.flare.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "1rem 2.5rem",
                    backgroundColor: "rgba(212, 165, 116, 0.3)",
                    border: "2px solid rgba(212, 165, 116, 0.6)",
                    borderRadius: "30px",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.5)";
                    e.currentTarget.style.borderColor = "#d4a574";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(212, 165, 116, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.3)";
                    e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.6)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  VISIT DEVELOPER HUB →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resources;
