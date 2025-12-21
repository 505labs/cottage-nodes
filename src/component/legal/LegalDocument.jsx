"use client";
import React from "react";

function LegalDocument({ title, lastUpdated, children }) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 100px)",
        paddingTop: "7rem",
        paddingBottom: "4rem",
        background: "linear-gradient(to bottom, rgba(26, 47, 26, 0.98), rgba(26, 47, 26, 0.98))",
        position: "relative",
        zIndex: 1,
        marginTop: 0,
        width: "100%",
        overflow: "visible",
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "15px",
            padding: "3rem",
            border: "1px solid rgba(212, 165, 116, 0.2)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "2.5rem",
              fontWeight: "600",
              marginBottom: "1rem",
              textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
            }}
          >
            {title}
          </h1>
          <div
            style={{
              color: "#e0e0e0",
              fontSize: "1rem",
              lineHeight: "1.8",
              textShadow: "0 1px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalDocument;
