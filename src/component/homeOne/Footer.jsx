"use client";
import React from "react";
import bg from "@/assets/img/cottage/cottage-ultra-wide.png";
import headset from "@/assets/img/icons/headset.svg";
import logoF from "@/assets/img/logo/logo-f.svg";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer
      className="aai-footer"
      style={{
        backgroundImage: `url(${bg.src})`,
        // backgroundPosition: "center bottom",
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // position: "relative",
        // backgroundAttachment: "fixed",
        // minHeight: "auto",
      }}
    >
      {/* Minimal warm overlay for subtle distinction */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, rgba(212, 165, 116, 0.15), rgba(26, 47, 26, 0.4))",
          zIndex: 1,
        }}
      />
      
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="aai-footer-navigation-widgets" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
          <div className="row align-items-start">
            {/* Logo and Description */}
            <div
              className="col-xl-4 col-lg-4 col-md-6 mb-4 mb-xl-0"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="50"
            >
              <div className="aai-footer-info">
                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "rgba(26, 47, 26, 0.6)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "12px",
                    border: "1px solid rgba(212, 165, 116, 0.2)",
                  }}
                >
                  <Link href="/" className="aai-footer-logo" style={{ marginBottom: "1.5rem", display: "block" }}>
                    <Image
                      height={logoF.height}
                      width={logoF.width}
                      src={logoF.src}
                      alt=""
                      style={{ borderRadius: "50px" }}
                    />
                  </Link>
                  <p 
                    className="aai-footer-desc" 
                    style={{ 
                      color: "#ffffff",
                      fontSize: "1rem",
                      lineHeight: "1.7",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
                      marginBottom: "1.5rem",
                      margin: 0,
                    }}
                  >
                    Providing accurate and reliable submissions of price data to the Flare Time Series Oracle (FTSO).
                  </p>
                {/* Contact Info */}
                <div style={{ marginTop: "1.5rem" }}>
                  <p 
                    style={{ 
                      color: "#ffffff",
                      fontSize: "1rem",
                      marginBottom: "0.75rem",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    <a 
                      href="mailto:info@cottagenodes.com" 
                      className="text-decoration-none" 
                      style={{ 
                        color: "#ffffff",
                        textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => e.target.style.color = "#d4a574"}
                      onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                    >
                      info@cottagenodes.com
                    </a>
                  </p>
                  <div className="aai-social-links d-flex" style={{ gap: "12px" }}>
                    <a 
                      href="https://x.com/cottage_nodes" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.15)",
                        border: "1px solid rgba(212, 165, 116, 0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(212, 165, 116, 0.4)";
                        e.currentTarget.style.borderColor = "#d4a574";
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                        e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.4)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/cottage-nodes/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.15)",
                        border: "1px solid rgba(212, 165, 116, 0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(212, 165, 116, 0.4)";
                        e.currentTarget.style.borderColor = "#d4a574";
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                        e.currentTarget.style.borderColor = "rgba(212, 165, 116, 0.4)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                </div>
              </div>
            </div>
            
            {/* Network Links */}
            <div
              className="col-xl-2 col-lg-2 col-md-6 mb-4 mb-xl-0"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <nav className="aai-footer-nav">
                <div
                  style={{
                    padding: "1.25rem",
                    backgroundColor: "rgba(26, 47, 26, 0.5)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "12px",
                    border: "1px solid rgba(212, 165, 116, 0.2)",
                    height: "100%",
                  }}
                >
                  <h3 
                    className="aai-footer-nav-title" 
                    style={{ 
                      color: "#ffffff",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "1.25rem",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    NETWORK
                  </h3>
                  <ul className="aai-footer-nav-list" style={{ gap: "12px" }}>
                  <li className="aai-footer-nav-list-item">
                      <a 
                        href="https://flare-explorer.flare.network" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="aai-footer-nav-link"
                        style={{
                          color: "#ffffff",
                          fontSize: "0.95rem",
                          textShadow: "0 1px 4px rgba(0, 0, 0, 0.7)",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#d4a574"}
                        onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                      >
                        Flare Explorer
                      </a>
                    </li>
                    <li className="aai-footer-nav-list-item">
                      <a 
                        href="https://songbird-explorer.flare.network" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="aai-footer-nav-link"
                        style={{
                          color: "#ffffff",
                          fontSize: "0.95rem",
                          textShadow: "0 1px 4px rgba(0, 0, 0, 0.7)",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#d4a574"}
                        onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                      >
                        Songbird Explorer
                      </a>
                    </li>
                    <li className="aai-footer-nav-list-item">
                      <a 
                        href="https://flare-explorer.flare.network/address/0x134b3311C6BdeD895556807a30C7f047D99DfdC2?tab=contract" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="aai-footer-nav-link"
                        style={{
                          color: "#ffffff",
                          fontSize: "0.95rem",
                          textShadow: "0 1px 4px rgba(0, 0, 0, 0.7)",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#d4a574"}
                        onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                      >
                        Entity Manager
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            
            {/* Support Links */}
            <div
              className="col-xl-2 col-lg-2 col-md-6 mb-4 mb-xl-0"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="150"
            >
              <nav className="aai-footer-nav">
                <div
                  style={{
                    padding: "1.25rem",
                    backgroundColor: "rgba(26, 47, 26, 0.5)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "12px",
                    border: "1px solid rgba(212, 165, 116, 0.2)",
                    height: "100%",
                  }}
                >
                  <h3 
                    className="aai-footer-nav-title" 
                    style={{ 
                      color: "#ffffff",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "1.25rem",
                      textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    SUPPORT
                  </h3>
                  <ul className="aai-footer-nav-list" style={{ gap: "12px" }}>
                    <li className="aai-footer-nav-list-item">
                      <Link 
                        href="/resources" 
                        className="aai-footer-nav-link"
                        style={{
                          color: "#ffffff",
                          fontSize: "0.95rem",
                          textShadow: "0 1px 4px rgba(0, 0, 0, 0.7)",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#d4a574"}
                        onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                      >
                        Resources
                      </Link>
                    </li>
                    <li className="aai-footer-nav-list-item">
                      <Link 
                        href="/contact" 
                        className="aai-footer-nav-link"
                        style={{
                          color: "#ffffff",
                          fontSize: "0.95rem",
                          textShadow: "0 1px 4px rgba(0, 0, 0, 0.7)",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => e.target.style.color = "#d4a574"}
                        onMouseLeave={(e) => e.target.style.color = "#ffffff"}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            
            {/* Additional Info Section */}
            <div
              className="col-xl-4 col-lg-4 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <div 
                style={{
                  padding: "2rem",
                  backgroundColor: "rgba(26, 47, 26, 0.6)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  border: "1px solid rgba(212, 165, 116, 0.3)",
                  height: "100%",
                }}
              >
                <h3 
                  style={{ 
                    color: "#ffffff",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                    textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
                    letterSpacing: "0.5px",
                  }}
                >
                  ABOUT FTSO
                </h3>
                <p 
                  style={{ 
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    textShadow: "0 1px 4px rgba(0, 0, 0, 0.7)",
                    margin: 0,
                  }}
                >
                  We are committed to providing accurate price data submissions to maximize rewards for FLR token holders through our advanced algorithms and robust infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div 
          className="aai-footer-copyright text-center" 
          style={{ 
            padding: "1.5rem 0",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            style={{
              padding: "1rem",
              backgroundColor: "rgba(26, 47, 26, 0.4)",
              backdropFilter: "blur(8px)",
              borderRadius: "10px",
              display: "inline-block",
            }}
          >
            <p 
              className="aai-copyright-text" 
              style={{ 
                color: "#ffffff",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                textShadow: "0 1px 4px rgba(0, 0, 0, 0.7)",
                margin: 0,
              }}
            >
              © 2025 Cottage Nodes |{" "}
              <Link href="/privacy-policy" style={{ color: "#d4a574", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#f5d4a0"} onMouseLeave={(e) => e.target.style.color = "#d4a574"}>Privacy Policy</Link> |{" "}
              <Link href="/disclaimer" style={{ color: "#d4a574", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#f5d4a0"} onMouseLeave={(e) => e.target.style.color = "#d4a574"}>Disclaimer</Link> |{" "}
              <Link href="/terms-and-conditions" style={{ color: "#d4a574", textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#f5d4a0"} onMouseLeave={(e) => e.target.style.color = "#d4a574"}>Terms and Conditions</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
