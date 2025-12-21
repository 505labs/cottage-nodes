import React from "react";
import LegalDocument from "@/component/legal/LegalDocument";

function TermsAndConditions() {
  return (
    <LegalDocument title="Terms and Conditions" lastUpdated="January 2025">
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          1. Acceptance of Terms
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          By accessing and using this website and our FTSO delegation services, you accept and agree 
          to be bound by the terms and provision of this agreement. If you do not agree to abide by 
          the above, please do not use this service.
        </p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          2. Use License
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          Permission is granted to temporarily access the materials on Cottage Nodes&apos; website 
          for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
          transfer of title, and under this license you may not:
        </p>
        <ul style={{ paddingLeft: "2rem", marginBottom: "1rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Modify or copy the materials</li>
          <li style={{ marginBottom: "0.5rem" }}>Use the materials for any commercial purpose</li>
          <li style={{ marginBottom: "0.5rem" }}>Attempt to reverse engineer any software contained on the website</li>
          <li style={{ marginBottom: "0.5rem" }}>Remove any copyright or other proprietary notations from the materials</li>
        </ul>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          3. FTSO Delegation Services
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          When you delegate tokens to our FTSO data provider, you acknowledge that:
        </p>
        <ul style={{ paddingLeft: "2rem", marginBottom: "1rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>You are responsible for managing your own wallet and private keys</li>
          <li style={{ marginBottom: "0.5rem" }}>Rewards are distributed according to the Flare Network protocol</li>
          <li style={{ marginBottom: "0.5rem" }}>We do not control or guarantee specific reward amounts</li>
          <li style={{ marginBottom: "0.5rem" }}>You can undelegate at any time according to network rules</li>
        </ul>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          4. User Responsibilities
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          You agree to:
        </p>
        <ul style={{ paddingLeft: "2rem", marginBottom: "1rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Provide accurate and complete information when contacting us</li>
          <li style={{ marginBottom: "0.5rem" }}>Maintain the security of your wallet and credentials</li>
          <li style={{ marginBottom: "0.5rem" }}>Comply with all applicable laws and regulations</li>
          <li style={{ marginBottom: "0.5rem" }}>Not use our services for any illegal or unauthorized purpose</li>
        </ul>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          5. Modifications
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          Cottage Nodes may revise these terms of service at any time without notice. By using 
          this website, you are agreeing to be bound by the then current version of these terms of service.
        </p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          6. Governing Law
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          These terms and conditions are governed by and construed in accordance with applicable laws. 
          Any disputes relating to these terms will be subject to the exclusive jurisdiction of the 
          courts of the relevant jurisdiction.
        </p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          7. Contact Information
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          If you have any questions about these Terms and Conditions, please contact us at{" "}
          <a href="mailto:info@cottagenodes.com" style={{ color: "#d4a574", textDecoration: "none" }}>
            info@cottagenodes.com
          </a>
        </p>
      </div>
    </LegalDocument>
  );
}

export default TermsAndConditions;
