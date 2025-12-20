"use client";
import React from "react";
import Image from "next/image";
import bg from "@/assets/img/cottage/cottage-4-3.png";
import teamPhoto from "@/assets/img/cottage/cottage-team-1-1.png";

function AboutUs() {
  return (
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
          <div className="col-lg-6" data-aos="fade-right" style={{ padding: "0" }}>
            <div className="aai-about-image-wrapper" style={{ minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center", justifyContent: "center", margin: "2rem 0" }}>
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
          <div className="col-lg-6" data-aos="fade-left" style={{ padding: "5rem 4rem", minHeight: "calc(100vh - 80px)", display: "flex", alignItems: "center", margin: "2rem 0" }}>
            <div className="aai-about-content">
              {/* Decorative accent line */}
              <div
                style={{
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(90deg, #d4a574, transparent)",
                  marginBottom: "2rem",
                  borderRadius: "2px",
                }}
              />
              
              <h2 
                className="section-title mb-5" 
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
                About Us
              </h2>
              
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
                  01
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
                  development for years, working closely with the network's infrastructure and protocols.
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
                  02
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
                  03
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
                  Now, we are excited to contribute to the Flare Network in a new capacity as an <strong style={{ color: "#d4a574" }}>FTSO (Flare Time Series Oracle)</strong> data provider. Leveraging our technical expertise and understanding of 
                  the Flare ecosystem, we are committed to providing accurate, reliable price data submissions 
                  that help maximize rewards for FLR and SGB token holders who delegate their votes to us.
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
                  Our mission is to strengthen the Flare Network's oracle infrastructure while delivering 
                  consistent, competitive rewards to our delegators through our advanced algorithms and robust 
                  technical infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
