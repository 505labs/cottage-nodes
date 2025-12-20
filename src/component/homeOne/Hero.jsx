"use client";
import React from "react";
import bg from "@/assets/img/cottage/cottage-21-9.png";
import Link from "next/link";

function Hero() {
  return (
    <section
      className="aai-hero-one position-relative"
      style={{
        background: `url(${bg.src}) no-repeat center center/cover`,
        minHeight: "100vh",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
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
          background: "linear-gradient(to bottom, rgba(26, 47, 26, 0.4), rgba(26, 47, 26, 0.6))",
          zIndex: 1,
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <div className="aai-hero-one-content text-center">
              {/* Semi-transparent background box for text */}
              <div
                style={{
                  backgroundColor: "rgba(26, 47, 26, 0.75)",
                  padding: "3rem 2rem",
                  borderRadius: "20px",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                }}
              >
                <h1
                  className="aai-hero-one-title"
                  style={{
                    fontSize: "3.5rem",
                    marginBottom: "1.5rem",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  DELEGATE YOUR VOTES
                </h1>
                <h2
                  className="aai-hero-one-subtitle"
                  style={{
                    fontSize: "2rem",
                    marginBottom: "2rem",
                    fontWeight: "400",
                    color: "#ffffff",
                    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Let's work together to maximise your Flare Rewards
                </h2>
                <p
                  className="aai-hero-one-desc mx-auto"
                  style={{
                    maxWidth: "800px",
                    fontSize: "1.1rem",
                    marginBottom: "2.5rem",
                    color: "#ffffff",
                    lineHeight: "1.8",
                    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Our delegation services enable token holders to earn lucrative rewards on the Flare Network.
                  Advanced algorithms are constantly refined with the objective of generating maximum reward 
                  for the benefit of all Songbird and Flare token holders who have delegated their vote to us.
                </p>
              </div>
              <div className="mt-5 d-flex flex-column flex-md-row aai-btns-group justify-content-center">
                <Link href="#delegate" className="aai-btn btn-pill-solid" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}>
                  DELEGATE YOUR VOTES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle decorative text at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(255, 255, 255, 0.6)",
            fontStyle: "italic",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontWeight: "300",
            textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
            margin: 0,
            opacity: 0.6,
            fontFamily: "'Sora', sans-serif",
          }}
        >
          Let's touch grass
        </p>
      </div>
    </section>
  );
}

export default Hero;
