"use client";
import React, { useState } from "react";
import Link from "next/link";

function DelegateSection() {
  const [copied, setCopied] = useState({ flr: false, sgb: false });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [type]: true });
    setTimeout(() => {
      setCopied({ ...copied, [type]: false });
    }, 2000);
  };

  const flrAddress = "0x4429306b301a0eb573fa5758bb40aa581255c624";
  const sgbAddress = "0x0708a4c813594b7e0218cb4a5d8b75c76abfc859";

  return (
    <section id="delegate" className="aai-delegate-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="text-center mb-5">
              <h2 className="section-title mb-4" style={{ fontSize: "2.5rem", fontWeight: "600" }}>
                Delegate your vote to earn passive income
              </h2>
              <p className="section-desc" style={{ fontSize: "1.1rem",  margin: "0 auto", color: "#666", lineHeight: "1.8" }}>
                Flare FLR and Songbird SGB token holders are free to delegate and un-delegate their votes at any time.
              </p>
            </div>
            
            <div className="row mt-5">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="aai-delegate-card" style={{ 
                  padding: "2.5rem", 
                  backgroundColor: "#f8f9fa", 
                  borderRadius: "10px",
                  height: "100%",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
                }}>
                  <h3 className="mb-4" style={{ fontSize: "1.5rem", fontWeight: "600", color: "#333" }}>
                    Voting Delegation Lock
                  </h3>
                  <p style={{ fontSize: "1rem", lineHeight: "1.8", marginBottom: "1.5rem", color: "#555" }}>
                    The voting delegation lock takes place on any random block beginning approximately 42 hours 
                    prior to the start of the next reward epoch. Basically any time between 14:41 UTC Thursdays 
                    and 08:41 UTC Saturdays for SGB tokens. All Songbird reward epochs last 7 days and begin on 
                    Saturdays at 08:41 UTC.
                  </p>
                  <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#555" }}>
                    All Flare reward epochs last 3.5 days and begin on Thursdays at 19:00 UTC and Mondays at 07:00 UTC.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div className="aai-delegate-card" style={{ 
                  padding: "2.5rem", 
                  backgroundColor: "#f8f9fa", 
                  borderRadius: "10px",
                  height: "100%",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
                }}>
                  <h3 className="mb-4" style={{ fontSize: "1.5rem", fontWeight: "600", color: "#333" }}>
                    Delegation Addresses
                  </h3>
                  <div className="mb-4">
                    <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.5rem", fontWeight: "500" }}>FLR Address:</p>
                    <div 
                      style={{ 
                        padding: "1rem", 
                        backgroundColor: "#fff", 
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                        wordBreak: "break-all",
                        cursor: "pointer",
                        position: "relative",
                        border: "1px solid #e0e0e0",
                        transition: "all 0.3s ease"
                      }}
                      onClick={() => copyToClipboard(flrAddress, "flr")}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f5f5f5";
                        e.currentTarget.style.borderColor = "#6b8e6b";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#fff";
                        e.currentTarget.style.borderColor = "#e0e0e0";
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
                          color: "#6b8e6b",
                          fontWeight: "600"
                        }}>
                          Copied!
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.5rem", fontWeight: "500" }}>SGB Address:</p>
                    <div 
                      style={{ 
                        padding: "1rem", 
                        backgroundColor: "#fff", 
                        borderRadius: "5px",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                        wordBreak: "break-all",
                        cursor: "pointer",
                        position: "relative",
                        border: "1px solid #e0e0e0",
                        transition: "all 0.3s ease"
                      }}
                      onClick={() => copyToClipboard(sgbAddress, "sgb")}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f5f5f5";
                        e.currentTarget.style.borderColor = "#6b8e6b";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#fff";
                        e.currentTarget.style.borderColor = "#e0e0e0";
                      }}
                    >
                      {sgbAddress}
                      {copied.sgb && (
                        <span style={{ 
                          position: "absolute", 
                          right: "10px", 
                          top: "50%", 
                          transform: "translateY(-50%)",
                          fontSize: "0.8rem",
                          color: "#6b8e6b",
                          fontWeight: "600"
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
              <Link href="#delegate" className="aai-btn btn-pill-solid" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}>
                DELEGATE YOUR VOTES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DelegateSection;
