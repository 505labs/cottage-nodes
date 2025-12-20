"use client";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="aai-contact-form-wrapper">
      <h2 className="section-title mb-4" style={{ fontSize: "2.5rem", fontWeight: "600" }}>
        Contact Us
      </h2>
      <p className="section-desc mb-5" style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#666" }}>
        Have a question or want to learn more about our FTSO delegation services? 
        Get in touch with us and we'll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="form-label" style={{ 
            fontSize: "0.9rem", 
            fontWeight: "500", 
            color: "#333",
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
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              width: "100%",
              transition: "border-color 0.3s ease"
            }}
            onFocus={(e) => e.target.style.borderColor = "#6b8e6b"}
            onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="form-label" style={{ 
            fontSize: "0.9rem", 
            fontWeight: "500", 
            color: "#333",
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
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              width: "100%",
              transition: "border-color 0.3s ease"
            }}
            onFocus={(e) => e.target.style.borderColor = "#6b8e6b"}
            onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="form-label" style={{ 
            fontSize: "0.9rem", 
            fontWeight: "500", 
            color: "#333",
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
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              width: "100%",
              resize: "vertical",
              transition: "border-color 0.3s ease"
            }}
            onFocus={(e) => e.target.style.borderColor = "#6b8e6b"}
            onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
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
    </div>
  );
}

export default ContactForm;
