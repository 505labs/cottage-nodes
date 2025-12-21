"use client";
import React, { useState } from "react";

function DelegateSection() {
  const [copied, setCopied] = useState({ flr: false });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [type]: true });
    setTimeout(() => {
      setCopied({ ...copied, [type]: false });
    }, 2000);
  };

  const flrAddress = "0x6EBbd69832AF87434253C10F9045E012286f509E";

  return (
    <section 
      id="delegate" 
      className="aai-delegate-section pt-120 pb-120"
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
                Delegate your vote to earn passive income
              </h2>
              <p 
                className="section-desc" 
                style={{ 
                  fontSize: "1.1rem",  
                  margin: "0 auto", 
                  color: "#ffffff",
                  lineHeight: "1.8",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.1)",
                }}
              >
                Flare FLR and Songbird SGB token holders are free to delegate and un-delegate their votes at any time.
              </p>
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
                  <h3 
                    className="mb-4" 
                    style={{ 
                      fontSize: "1.5rem", 
                      fontWeight: "600",
                      background: "linear-gradient(135deg, #ffffff 0%, #d4a574 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 30px rgba(255, 255, 255, 0.3), 2px 2px 8px rgba(0, 0, 0, 0.5)",
                      filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.5))",
                    }}
                  >
                    Voting Delegation Lock
                  </h3>
                  <p 
                    style={{ 
                      fontSize: "1rem", 
                      lineHeight: "1.8", 
                      marginBottom: "1.5rem",
                      color: "#ffffff",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    Delegators receive a share of the rewards earned by the data providers they have delegated to.
                    The more accurate a data provider’s submissions and the larger the number of tokens delegated 
                    to them, the more rewards they receive and are able to share with their delegators.
                  </p>
                  <p 
                    style={{ 
                      fontSize: "1rem", 
                      lineHeight: "1.8",
                      color: "#ffffff",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    All Flare reward epochs last 3.5 days and your rewards will be distributed to you on the same day as the reward epoch ends.
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
                  <h3 
                    className="mb-4" 
                    style={{ 
                      fontSize: "1.5rem", 
                      fontWeight: "600",
                      background: "linear-gradient(135deg, #ffffff 0%, #d4a574 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 0 30px rgba(255, 255, 255, 0.3), 2px 2px 8px rgba(0, 0, 0, 0.5)",
                      filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.5))",
                    }}
                  >
                    Delegation Addresses
                  </h3>
                  <div className="mb-4">
                    <p 
                      style={{ 
                        fontSize: "0.9rem", 
                        color: "#ffffff",
                        marginBottom: "0.5rem", 
                        fontWeight: "500",
                        textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      FLR Address:
                    </p>
                    <div 
                      style={{ 
                        padding: "1rem", 
                        backgroundColor: "rgba(26, 47, 26, 0.6)", 
                        backdropFilter: "blur(10px)",
                        borderRadius: "8px",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                        wordBreak: "break-all",
                        cursor: "pointer",
                        position: "relative",
                        border: "2px solid rgba(212, 165, 116, 0.3)",
                        transition: "all 0.3s ease",
                        color: "#ffffff",
                        textShadow: "0 1px 4px rgba(0, 0, 0, 0.5)",
                      }}
                      onClick={() => copyToClipboard(flrAddress, "flr")}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(212, 165, 116, 0.2)";
                        e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.6)";
                        e.currentTarget.style.boxShadow = "0 0 20px rgba(212, 165, 116, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(26, 47, 26, 0.6)";
                        e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.3)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {flrAddress}
                      {copied.flr && (
                        <span style={{ 
                          position: "absolute", 
                          right: "10px", 
                          top: "50%", 
                          transform: "translateY(-50%)",
                          fontSize: "0.8rem",
                          color: "#d4a574",
                          fontWeight: "600",
                          textShadow: "0 0 10px rgba(212, 165, 116, 0.8)",
                        }}>
                          Copied!
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-5">
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
    </section>
  );
}

export default DelegateSection;
