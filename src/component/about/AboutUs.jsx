"use client";
import React, { useState } from "react";
import Image from "next/image";
import bg from "@/assets/img/cottage/cottage-4-3.png";
import teamPhoto from "@/assets/img/cottage/cottage-team-1-1.png";

function AboutUs() {
  const [copiedField, setCopiedField] = useState(null);

  // Validator verification data
  const validatorData = {
    identityAddress: "0x781ea2dce725ca139c6ecc62c1ee7c8876608392",
    submitAddress: "0x04a7Aa6b6a318b525Aff7bAfa0269d9BEF977380",
    submitSignaturesAddress: "0xE02B800e56f071eb498b871eDadd99Ae7FCE4D6e",
    signingPolicyAddress: "0x6d62d0e3614fD6C44b14B41a00fC7dF80Ae91DAe",
    delegationAddress: "0x6EBbd69832AF87434253C10F9045E012286f509E",
    validatorNodeId: "NodeID-Gmd8JQGtt7UuGTus32SMhqV9TG1D92a7f",
    sortitionPublicKeyX: "0x16241bf63c68c7c524bbafe9b3f2e6e8a7b12b2bfe415fe595e2488bb0e809d5",
    sortitionPublicKeyY: "0x1d293ab15caaecfafcd2ac69536587d15993a1a35d75d51a565a81585b9957df",
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const formatAddress = (address) => {
    if (!address || address === "0x0000000000000000000000000000000000000000") return "Not configured";
    return address; // Return full address
  };

  const getExplorerUrl = (address, type = "address") => {
    // Flare Mainnet explorer - adjust for testnet if needed
    if (type === "address") {
      return `https://flare-explorer.flare.network/address/${address}`;
    }
    return null;
  };
  return (
    <>
    <section 
      className="aai-about-us-section" 
      style={{ 
        padding: "0", 
        marginTop: "80px", 
        minHeight: "calc(100vh - 80px)", 
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
        <div className="row align-items-center" style={{ margin: "0" }}>
          {/* Left side - Image */}
          <div className="col-lg-6" data-aos="fade-right" style={{ padding: "0", position: "relative" }}>
            <div className="aai-about-image-wrapper" style={{ minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center", justifyContent: "center", margin: "2rem", position: "relative" }}>
              {/* Title above image - positioned absolutely */}
              <div style={{ position: "absolute", top: "-3rem", left: "50%", transform: "translateX(-50%)", textAlign: "center", zIndex: 3, width: "100%", maxWidth: "400px" }}>
                {/* Decorative accent line */}
                <div
                  style={{
                    width: "80px",
                    height: "4px",
                    background: "linear-gradient(90deg, transparent, #d4a574, transparent)",
                    margin: "5rem auto 1.5rem",
                    borderRadius: "2px",
                  }}
                />
                <h2 
                  className="section-title" 
                  style={{ 
                    fontSize: "2.5rem", 
                    fontWeight: "600",
                    background: "linear-gradient(135deg, #ffffff 0%, #f5f1e8 50%, #d4a574 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.3), 2px 2px 8px rgba(0, 0, 0, 0.5)",
                    filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.5))",
                    margin: 0,
                  }}
                >
                  About Us
                </h2>
              </div>
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
                  src={teamPhoto.src}
                  alt="Our Team"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Text Content */}
          <div className="col-lg-6" data-aos="fade-left" style={{ padding: "3rem 4rem", minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "flex-start", margin: "2rem 0", paddingTop: "2rem" }}>
            <div className="aai-about-content">
              {/* Card 1 */}
              <div
                style={{
                  padding: "2rem",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(15px)",
                  borderRadius: "15px",
                  border: "2px solid rgba(212, 165, 116, 0.4)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 30px rgba(212, 165, 116, 0.1)",
                  marginBottom: "1.5rem",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(5px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 40px rgba(212, 165, 116, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 30px rgba(212, 165, 116, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.4)";
                }}
              >
                {/* Number Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(212, 165, 116, 0.3), rgba(212, 165, 116, 0.1))",
                    border: "2px solid rgba(212, 165, 116, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "#d4a574",
                    boxShadow: "0 0 20px rgba(212, 165, 116, 0.3)",
                  }}
                >
                  1
                </div>
                <p 
                  className="section-desc mb-0" 
                  style={{ 
                    fontSize: "1.1rem", 
                    lineHeight: "1.8", 
                    color: "#ffffff",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.1)",
                    margin: 0,
                  }}
                >
                  We are a dedicated team of blockchain engineers and developers who have been deeply involved 
                  in the Flare Network ecosystem since its early days. Our team has contributed to Flare core 
                  development for years, working closely with the network&apos;s infrastructure and protocols.
                </p>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  padding: "2rem",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(15px)",
                  borderRadius: "15px",
                  border: "2px solid rgba(212, 165, 116, 0.4)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 30px rgba(212, 165, 116, 0.1)",
                  marginBottom: "1.5rem",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(5px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 40px rgba(212, 165, 116, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 30px rgba(212, 165, 116, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.4)";
                }}
              >
                {/* Number Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(212, 165, 116, 0.3), rgba(212, 165, 116, 0.1))",
                    border: "2px solid rgba(212, 165, 116, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "#d4a574",
                    boxShadow: "0 0 20px rgba(212, 165, 116, 0.3)",
                  }}
                >
                  2
                </div>
                <p 
                  className="section-desc mb-0" 
                  style={{ 
                    fontSize: "1.1rem", 
                    lineHeight: "1.8", 
                    color: "#ffffff",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.1)",
                    margin: 0,
                  }}
                >
                  With extensive experience in the blockchain industry, we have been running validator nodes 
                  across multiple networks for years, initially for private use and research. This hands-on 
                  experience has given us deep insights into network operations, consensus mechanisms, and 
                  the critical importance of reliable data oracles.
                </p>
              </div>

              {/* Card 3 - Highlighted */}
              <div
                style={{
                  padding: "2.5rem",
                  backgroundColor: "rgba(212, 165, 116, 0.2)",
                  backdropFilter: "blur(15px)",
                  borderRadius: "20px",
                  border: "2px solid rgba(212, 165, 116, 0.5)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 40px rgba(212, 165, 116, 0.2)",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(5px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 50px rgba(212, 165, 116, 0.3)";
                  e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 40px rgba(212, 165, 116, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.5)";
                }}
              >
                {/* Number Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(212, 165, 116, 0.4), rgba(212, 165, 116, 0.2))",
                    border: "3px solid rgba(212, 165, 116, 0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#ffffff",
                    boxShadow: "0 0 30px rgba(212, 165, 116, 0.5)",
                  }}
                >
                  3
                </div>
                <p 
                  className="section-desc mb-4" 
                  style={{ 
                    fontSize: "1.1rem", 
                    lineHeight: "1.8", 
                    color: "#ffffff",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.1)",
                    margin: 0,
                  }}
                >
                  Now, we are excited to contribute to the Flare Network in a new capacity <br /> as an <strong style={{ color: "#d4a574" }}>FTSO (Flare Time Series Oracle)</strong> data provider. Leveraging our technical expertise and understanding of 
                  the Flare ecosystem, we are committed to providing accurate, reliable price data submissions 
                  that help maximize rewards for FLR token holders who delegate their votes to us.
                </p>
                <p 
                  className="section-desc mb-0" 
                  style={{ 
                    fontSize: "1.1rem", 
                    lineHeight: "1.8", 
                    color: "#ffffff",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.1)",
                    margin: 0,
                  }}
                >
                  Our mission is to strengthen the Flare Network&apos;s oracle infrastructure while delivering 
                  consistent, competitive rewards to our delegators through our advanced algorithms and robust 
                  technical infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Validator Verification Section - Separate Section */}
    <section 
      className="aai-validator-verification-section"
      style={{ 
        padding: "4rem 0",
        marginTop: "0",
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
      
      <div 
        className="container-fluid" 
        style={{ 
          padding: "4rem 2rem", 
          width: "100%", 
          position: "relative", 
          zIndex: 2,
        }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Section Header */}
            <div className="text-center mb-5">
              <div
                style={{
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(90deg, transparent, #d4a574, transparent)",
                  margin: "0 auto 2rem",
                  borderRadius: "2px",
                }}
              />
              <h2 
                className="section-title mb-3" 
                style={{ 
                  fontSize: "2.5rem", 
                  fontWeight: "600",
                  background: "linear-gradient(135deg, #ffffff 0%, #f5f1e8 50%, #d4a574 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.3), 2px 2px 8px rgba(0, 0, 0, 0.5)",
                  filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.5))",
                }}
              >
                Validator Verification
              </h2>
              <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                width: "100%"
              }}>
                <p 
                  style={{ 
                    fontSize: "1.1rem", 
                    color: "#ffffff",
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                    maxWidth: "800px",
                    margin: "0",
                    lineHeight: "1.8",
                    textAlign: "center"
                  }}
                >
                  All our validator addresses and keys are registered on-chain and can be verified through the Flare blockchain. 
                  This information proves our identity as a legitimate Flare Entity and allows you to verify our participation 
                  in the network&apos;s consensus and data provider protocols.
                </p>
              </div>
            </div>

            {/* Verification Cards */}
            <div className="row g-4">
              {/* Identity Address */}
              <div className="col-md-6 col-lg-4">
                <div
                  style={{
                    padding: "2rem",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "15px",
                    border: "2px solid rgba(212, 165, 116, 0.4)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    height: "100%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.4)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, rgba(212, 165, 116, 0.3), rgba(212, 165, 116, 0.1))",
                        border: "2px solid rgba(212, 165, 116, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1rem",
                        fontSize: "1.5rem",
                      }}
                    >
                      🏛️
                    </div>
                    <h3 style={{ color: "#d4a574", fontSize: "1.2rem", margin: 0, fontWeight: "600" }}>
                      Identity Address
                    </h3>
                  </div>
                  <p style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "1rem", lineHeight: "1.6", textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}>
                    Our central identity address. This is the primary address that represents our Flare Entity and is used for 
                    managing all other operational addresses.
                  </p>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem",
                    padding: "0.75rem",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderRadius: "8px",
                    border: "1px solid rgba(212, 165, 116, 0.2)"
                  }}>
                    <code style={{ 
                      color: "#d4a574", 
                      fontSize: "0.85rem", 
                      flex: 1,
                      wordBreak: "break-all",
                      fontFamily: "monospace"
                    }}>
                      {formatAddress(validatorData.identityAddress)}
                    </code>
                    <button
                      onClick={() => copyToClipboard(validatorData.identityAddress, "identity")}
                      style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "rgba(212, 165, 116, 0.2)",
                        border: "1px solid rgba(212, 165, 116, 0.5)",
                        borderRadius: "6px",
                        color: "#d4a574",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.2)";
                      }}
                    >
                      {copiedField === "identity" ? "✓ Copied" : "Copy"}
                    </button>
                  </div>
                  {validatorData.identityAddress !== "0x0000000000000000000000000000000000000000" && (
                    <a
                      href={getExplorerUrl(validatorData.identityAddress)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "0.75rem",
                        color: "#d4a574",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.textDecoration = "underline";
                      }}
                    >
                      View on Explorer →
                    </a>
                  )}
                </div>
              </div>

              {/* Delegation Address */}
              <div className="col-md-6 col-lg-4">
                <div
                  style={{
                    padding: "2rem",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "15px",
                    border: "2px solid rgba(212, 165, 116, 0.4)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    height: "100%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.4)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, rgba(212, 165, 116, 0.3), rgba(212, 165, 116, 0.1))",
                        border: "2px solid rgba(212, 165, 116, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1rem",
                        fontSize: "1.5rem",
                      }}
                    >
                      💰
                    </div>
                    <h3 style={{ color: "#d4a574", fontSize: "1.2rem", margin: 0, fontWeight: "600" }}>
                      Delegation Address
                    </h3>
                  </div>
                  <p style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "1rem", lineHeight: "1.6", textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}>
                    The address where you can delegate your WFLR tokens to increase our voting power and earn rewards 
                    together. This is the address you&apos;ll use when delegating.
                  </p>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem",
                    padding: "0.75rem",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderRadius: "8px",
                    border: "1px solid rgba(212, 165, 116, 0.2)"
                  }}>
                    <code style={{ 
                      color: "#d4a574", 
                      fontSize: "0.85rem", 
                      flex: 1,
                      wordBreak: "break-all",
                      fontFamily: "monospace"
                    }}>
                      {formatAddress(validatorData.delegationAddress)}
                    </code>
                    <button
                      onClick={() => copyToClipboard(validatorData.delegationAddress, "delegation")}
                      style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "rgba(212, 165, 116, 0.2)",
                        border: "1px solid rgba(212, 165, 116, 0.5)",
                        borderRadius: "6px",
                        color: "#d4a574",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.2)";
                      }}
                    >
                      {copiedField === "delegation" ? "✓ Copied" : "Copy"}
                    </button>
                  </div>
                  {validatorData.delegationAddress !== "0x0000000000000000000000000000000000000000" && (
                    <a
                      href={getExplorerUrl(validatorData.delegationAddress)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "0.75rem",
                        color: "#d4a574",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.textDecoration = "underline";
                      }}
                    >
                      View on Explorer →
                    </a>
                  )}
                </div>
              </div>

              {/* Validator Node ID */}
              <div className="col-md-6 col-lg-4">
                <div
                  style={{
                    padding: "2rem",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "15px",
                    border: "2px solid rgba(212, 165, 116, 0.4)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    height: "100%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.4)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, rgba(212, 165, 116, 0.3), rgba(212, 165, 116, 0.1))",
                        border: "2px solid rgba(212, 165, 116, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1rem",
                        fontSize: "1.5rem",
                      }}
                    >
                      🖥️
                    </div>
                    <h3 style={{ color: "#d4a574", fontSize: "1.2rem", margin: 0, fontWeight: "600" }}>
                      Validator Node ID
                    </h3>
                  </div>
                  <p style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "1rem", lineHeight: "1.6", textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}>
                    Our registered validator node identifier on the Flare network. This proves we&apos;re running a validator node 
                    that participates in network consensus.
                  </p>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.5rem",
                    padding: "0.75rem",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderRadius: "8px",
                    border: "1px solid rgba(212, 165, 116, 0.2)"
                  }}>
                    <code style={{ 
                      color: "#d4a574", 
                      fontSize: "0.85rem", 
                      flex: 1,
                      wordBreak: "break-all",
                      fontFamily: "monospace"
                    }}>
                      {validatorData.validatorNodeId}
                    </code>
                    <button
                      onClick={() => copyToClipboard(validatorData.validatorNodeId, "nodeId")}
                      style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: "rgba(212, 165, 116, 0.2)",
                        border: "1px solid rgba(212, 165, 116, 0.5)",
                        borderRadius: "6px",
                        color: "#d4a574",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.2)";
                      }}
                    >
                      {copiedField === "nodeId" ? "✓ Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Operational Addresses Section */}
              <div className="col-12 mt-4">
                <div
                  style={{
                    padding: "2.5rem",
                    backgroundColor: "rgba(212, 165, 116, 0.15)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "20px",
                    border: "2px solid rgba(212, 165, 116, 0.4)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <h3 
                    style={{ 
                      color: "#d4a574", 
                      fontSize: "1.5rem", 
                      marginBottom: "1.5rem",
                      fontWeight: "600",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    Operational Addresses
                  </h3>
                  <p 
                    style={{ 
                      color: "#ffffff", 
                      fontSize: "1rem", 
                      marginBottom: "2rem",
                      lineHeight: "1.8",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    These addresses are used internally by our Flare Entity for various protocol operations. They&apos;re all registered 
                    on-chain and linked to our Identity address, ensuring secure and verifiable operations.
                  </p>
                  
                  <div className="row g-3">
                    {/* Submit Address */}
                    <div className="col-md-6">
                      <div style={{ 
                        padding: "1.25rem",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        borderRadius: "10px",
                        border: "1px solid rgba(212, 165, 116, 0.2)"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                          <span style={{ color: "#d4a574", fontSize: "0.95rem", fontWeight: "600" }}>Submit Address</span>
                          <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.8rem" }}>FTSO Transactions</span>
                        </div>
                        <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.85rem", marginBottom: "0.75rem", lineHeight: "1.5" }}>
                          Used for submitting FTSO price data (commit/reveal transactions)
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <code style={{ color: "#d4a574", fontSize: "0.8rem", flex: 1, fontFamily: "monospace", wordBreak: "break-all" }}>
                            {formatAddress(validatorData.submitAddress)}
                          </code>
                          <button
                            onClick={() => copyToClipboard(validatorData.submitAddress, "submit")}
                            style={{
                              padding: "0.4rem 0.8rem",
                              backgroundColor: "rgba(212, 165, 116, 0.2)",
                              border: "1px solid rgba(212, 165, 116, 0.5)",
                              borderRadius: "6px",
                              color: "#d4a574",
                              cursor: "pointer",
                              fontSize: "0.75rem",
                            }}
                          >
                            {copiedField === "submit" ? "✓" : "Copy"}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* SubmitSignatures Address */}
                    <div className="col-md-6">
                      <div style={{ 
                        padding: "1.25rem",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        borderRadius: "10px",
                        border: "1px solid rgba(212, 165, 116, 0.2)"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                          <span style={{ color: "#d4a574", fontSize: "0.95rem", fontWeight: "600" }}>SubmitSignatures Address</span>
                          <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.8rem" }}>FTSO Signatures</span>
                        </div>
                        <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.85rem", marginBottom: "0.75rem", lineHeight: "1.5" }}>
                          Used for submitting FTSO result signatures (separate from Submit for nonce management)
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <code style={{ color: "#d4a574", fontSize: "0.8rem", flex: 1, fontFamily: "monospace", wordBreak: "break-all" }}>
                            {formatAddress(validatorData.submitSignaturesAddress)}
                          </code>
                          <button
                            onClick={() => copyToClipboard(validatorData.submitSignaturesAddress, "submitSignatures")}
                            style={{
                              padding: "0.4rem 0.8rem",
                              backgroundColor: "rgba(212, 165, 116, 0.2)",
                              border: "1px solid rgba(212, 165, 116, 0.5)",
                              borderRadius: "6px",
                              color: "#d4a574",
                              cursor: "pointer",
                              fontSize: "0.75rem",
                            }}
                          >
                            {copiedField === "submitSignatures" ? "✓" : "Copy"}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* SigningPolicy Address */}
                    <div className="col-md-6">
                      <div style={{ 
                        padding: "1.25rem",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        borderRadius: "10px",
                        border: "1px solid rgba(212, 165, 116, 0.2)"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                          <span style={{ color: "#d4a574", fontSize: "0.95rem", fontWeight: "600" }}>SigningPolicy Address</span>
                          <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.8rem" }}>Data Signing</span>
                        </div>
                        <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.85rem", marginBottom: "0.75rem", lineHeight: "1.5" }}>
                          Used for signing FTSO data during voting rounds and reward epoch configurations
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <code style={{ color: "#d4a574", fontSize: "0.8rem", flex: 1, fontFamily: "monospace", wordBreak: "break-all" }}>
                            {formatAddress(validatorData.signingPolicyAddress)}
                          </code>
                          <button
                            onClick={() => copyToClipboard(validatorData.signingPolicyAddress, "signingPolicy")}
                            style={{
                              padding: "0.4rem 0.8rem",
                              backgroundColor: "rgba(212, 165, 116, 0.2)",
                              border: "1px solid rgba(212, 165, 116, 0.5)",
                              borderRadius: "6px",
                              color: "#d4a574",
                              cursor: "pointer",
                              fontSize: "0.75rem",
                            }}
                          >
                            {copiedField === "signingPolicy" ? "✓" : "Copy"}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Sortition Public Key */}
                    <div className="col-md-6">
                      <div style={{ 
                        padding: "1.25rem",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        borderRadius: "10px",
                        border: "1px solid rgba(212, 165, 116, 0.2)"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                          <span style={{ color: "#d4a574", fontSize: "0.95rem", fontWeight: "600" }}>Sortition Public Key</span>
                          <span style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.8rem" }}>Fast Updates</span>
                        </div>
                        <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.85rem", marginBottom: "0.75rem", lineHeight: "1.5" }}>
                          Public key for FTSOv2 Fast Updates protocol (block-latency price feeds)
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <code style={{ color: "#d4a574", fontSize: "0.75rem", flex: 1, fontFamily: "monospace", wordBreak: "break-all" }}>
                              X: {validatorData.sortitionPublicKeyX}
                            </code>
                            <button
                              onClick={() => copyToClipboard(validatorData.sortitionPublicKeyX, "sortitionX")}
                              style={{
                                padding: "0.4rem 0.8rem",
                                backgroundColor: "rgba(212, 165, 116, 0.2)",
                                border: "1px solid rgba(212, 165, 116, 0.5)",
                                borderRadius: "6px",
                                color: "#d4a574",
                                cursor: "pointer",
                                fontSize: "0.75rem",
                              }}
                            >
                              {copiedField === "sortitionX" ? "✓" : "Copy"}
                            </button>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <code style={{ color: "#d4a574", fontSize: "0.75rem", flex: 1, fontFamily: "monospace", wordBreak: "break-all" }}>
                              Y: {validatorData.sortitionPublicKeyY}
                            </code>
                            <button
                              onClick={() => copyToClipboard(validatorData.sortitionPublicKeyY, "sortitionY")}
                              style={{
                                padding: "0.4rem 0.8rem",
                                backgroundColor: "rgba(212, 165, 116, 0.2)",
                                border: "1px solid rgba(212, 165, 116, 0.5)",
                                borderRadius: "6px",
                                color: "#d4a574",
                                cursor: "pointer",
                                fontSize: "0.75rem",
                              }}
                            >
                              {copiedField === "sortitionY" ? "✓" : "Copy"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verification Note */}
              <div className="col-12 mt-4">
                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "rgba(212, 165, 116, 0.1)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "15px",
                    border: "1px solid rgba(212, 165, 116, 0.3)",
                    textAlign: "center",
                  }}
                >
                  <p style={{ color: "#ffffff", fontSize: "0.95rem", margin: 0, lineHeight: "1.8", textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}>
                    <strong style={{ color: "#d4a574" }}>All addresses and keys are registered on-chain</strong> and can be verified through the 
                    <a 
                      href="https://flare-systems-explorer.flare.network" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: "#d4a574", textDecoration: "none", marginLeft: "0.5rem" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.textDecoration = "underline";
                      }}
                    >
                      Flare Systems Explorer
                    </a>
                    . You can search for our Identity address to view all linked addresses and verify our registration status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default AboutUs;
