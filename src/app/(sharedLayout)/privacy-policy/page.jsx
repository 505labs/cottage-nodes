import React from "react";
import LegalDocument from "@/component/legal/LegalDocument";

function PrivacyPolicy() {
  return (
    <LegalDocument title="Privacy Policy" lastUpdated="January 2025">
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          1. Introduction
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          Cottage Nodes (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
          when you visit our website and use our FTSO delegation services.
        </p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          2. Information We Collect
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          We may collect information about you in various ways. The information we may collect includes:
        </p>
        <ul style={{ paddingLeft: "2rem", marginBottom: "1rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Personal data such as name and email address when you contact us</li>
          <li style={{ marginBottom: "0.5rem" }}>Usage data including your IP address, browser type, and pages visited</li>
          <li style={{ marginBottom: "0.5rem" }}>Blockchain addresses when you interact with our delegation services</li>
        </ul>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          3. How We Use Your Information
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          We use the information we collect to:
        </p>
        <ul style={{ paddingLeft: "2rem", marginBottom: "1rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Provide, operate, and maintain our services</li>
          <li style={{ marginBottom: "0.5rem" }}>Respond to your inquiries and provide customer support</li>
          <li style={{ marginBottom: "0.5rem" }}>Improve our website and services</li>
          <li style={{ marginBottom: "0.5rem" }}>Comply with legal obligations</li>
        </ul>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          4. Data Security
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          We implement appropriate technical and organizational security measures to protect your personal 
          information. However, no method of transmission over the Internet or electronic storage is 100% 
          secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          5. Contact Us
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:info@cottagenodes.com" style={{ color: "#d4a574", textDecoration: "none" }}>
            info@cottagenodes.com
          </a>
        </p>
      </div>
    </LegalDocument>
  );
}

export default PrivacyPolicy;
