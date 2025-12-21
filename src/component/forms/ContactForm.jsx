"use client";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Show success popup
    setShowSuccessPopup(true);
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="aai-contact-form-wrapper">
      <h2 className="section-title mb-4" style={{ fontSize: "2.5rem", fontWeight: "600" }}>
        Contact Us
      </h2>
      <p className="section-desc mb-5" style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#aaa" }}>
        Have a question or want to learn more about our FTSO delegation services? 
        Get in touch with us and we&apos;ll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="form-label" style={{ 
            fontSize: "0.9rem", 
            fontWeight: "500", 
            color: "whitesmoke",
            marginBottom: "0.5rem",
            display: "block"
          }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              backgroundColor: "#f8f7f4",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              width: "100%",
              transition: "all 0.3s ease"
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#6b8e6b";
              e.target.style.backgroundColor = "#ffffff";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e0e0e0";
              e.target.style.backgroundColor = "#f8f7f4";
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="form-label" style={{ 
            fontSize: "0.9rem", 
            fontWeight: "500", 
            color: "whitesmoke",
            marginBottom: "0.5rem",
            display: "block"
          }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              backgroundColor: "#f8f7f4",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              width: "100%",
              transition: "all 0.3s ease"
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#6b8e6b";
              e.target.style.backgroundColor = "#ffffff";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e0e0e0";
              e.target.style.backgroundColor = "#f8f7f4";
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="form-label" style={{ 
            fontSize: "0.9rem", 
            fontWeight: "500", 
            color: "whitesmoke",
            marginBottom: "0.5rem",
            display: "block"
          }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              backgroundColor: "#f8f7f4",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              width: "100%",
              resize: "vertical",
              transition: "all 0.3s ease"
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#6b8e6b";
              e.target.style.backgroundColor = "#ffffff";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e0e0e0";
              e.target.style.backgroundColor = "#f8f7f4";
            }}
          />
        </div>
        <button
          type="submit"
          className="aai-btn btn-pill-solid"
          style={{
            fontSize: "1.1rem",
            padding: "1rem 2.5rem",
            width: "100%",
            cursor: "pointer"
          }}
        >
          Send Message
        </button>
      </form>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
            animation: "fadeIn 0.3s ease-in"
          }}
          onClick={closePopup}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              padding: "2.5rem",
              maxWidth: "500px",
              width: "90%",
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
              animation: "slideUp 0.3s ease-out",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                fontSize: "4rem",
                marginBottom: "1rem",
                lineHeight: "1"
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "1rem"
              }}
            >
              Message Sent!
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#666",
                marginBottom: "2rem",
                lineHeight: "1.6"
              }}
            >
              Thank you for contacting us. We&apos;ll get back to you as soon as possible.
            </p>
            <button
              onClick={closePopup}
              style={{
                backgroundColor: "#6b8e6b",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#5a7a5a";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#6b8e6b";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default ContactForm;
