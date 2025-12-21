"use client";
import React from "react";

function AboutSection() {
  return (
    <section 
      className="aai-about-section pt-120 pb-120"
      style={{
        position: "relative",
        background: "linear-gradient(135deg, rgba(26, 47, 26, 0.95) 0%, rgba(21, 38, 21, 0.98) 100%)",
        overflow: "hidden",
      }}
    >
      {/* Decorative pattern overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          zIndex: 1,
        }}
      />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="text-center mb-5">
              {/* Decorative accent line */}
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
                className="section-title mb-4" 
                style={{ 
                  fontSize: "2rem", 
                  lineHeight: "1.4", 
                  background: "linear-gradient(135deg, #ffffff 0%, #f5f1e8 50%, #d4a574 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.3), 2px 2px 8px rgba(0, 0, 0, 0.5)",
                  fontWeight: "600",
                  filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.5))",
                }}
              >
                Specialists in IT and Finance, we are well equipped to outperform as a data signal provider to the Flare Network
              </h2>
            </div>
            
            <div className="row mt-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                {/* Card-style container */}
                <div
                  style={{
                    padding: "2.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "15px",
                    border: "2px solid rgba(212, 165, 116, 0.4)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 30px rgba(212, 165, 116, 0.1)",
                    height: "100%",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 40px rgba(212, 165, 116, 0.2)";
                    e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.6)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 30px rgba(212, 165, 116, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.4)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                  }}
                >
                  {/* Decorative corner accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      width: "40px",
                      height: "40px",
                      borderTop: "3px solid #d4a574",
                      borderLeft: "3px solid #d4a574",
                      borderRadius: "8px 0 0 0",
                      boxShadow: "0 0 10px rgba(212, 165, 116, 0.5)",
                    }}
                  />
                  <p 
                    style={{ 
                      fontSize: "1.1rem", 
                      lineHeight: "1.8", 
                      color: "#ffffff", 
                      fontWeight: "400",
                      margin: 0,
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    Years of experience in the IT and Finance sectors have helped us understand that investment 
                    in technology research and development is key to success.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-6">
                {/* Card-style container */}
                <div
                  style={{
                    padding: "2.5rem",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "15px",
                    border: "2px solid rgba(212, 165, 116, 0.4)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 30px rgba(212, 165, 116, 0.1)",
                    height: "100%",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 0 40px rgba(212, 165, 116, 0.2)";
                    e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.6)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 30px rgba(212, 165, 116, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.4)";
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                  }}
                >
                  {/* Decorative corner accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      width: "40px",
                      height: "40px",
                      borderTop: "3px solid #d4a574",
                      borderRight: "3px solid #d4a574",
                      borderRadius: "0 8px 0 0",
                      boxShadow: "0 0 10px rgba(212, 165, 116, 0.5)",
                    }}
                  />
                  <p 
                    style={{ 
                      fontSize: "1.1rem", 
                      lineHeight: "1.8", 
                      color: "#ffffff", 
                      fontWeight: "400",
                      margin: 0,
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    Specializing in IT and extremely knowledgeable in the cryptocurrency space, we are well 
                    equipped as a data service provider to deliver lucrative rewards to Flare token holders. We value the vote of every FLR token holder and we are truly 
                    excited about how we&apos;re positioned to generate Flare Rewards.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-5">
              {/* Call-to-action container */}
              <div
                style={{
                  padding: "3rem 2rem",
                  backgroundColor: "rgba(212, 165, 116, 0.15)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  border: "2px solid rgba(212, 165, 116, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  maxWidth: "700px",
                  margin: "0 auto",
                }}
              >
                <h3 
                  style={{ 
                    fontSize: "1.8rem", 
                    fontWeight: "500", 
                    marginBottom: "2rem", 
                    background: "linear-gradient(135deg, #ffffff 0%, #d4a574 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.3), 2px 2px 8px rgba(0, 0, 0, 0.5)",
                    filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.5))",
                  }}
                >
                  Together, let us help you maximise your Flare Rewards
                </h3>
                <a 
                  href="https://portal.flare.network/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aai-btn btn-pill-solid" 
                  style={{ 
                    fontSize: "1.1rem", 
                    padding: "1rem 2.5rem",
                    boxShadow: "0 4px 15px rgba(212, 165, 116, 0.3)",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  DELEGATE YOUR VOTES
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
