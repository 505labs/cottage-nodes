import React from "react";
import LegalDocument from "@/component/legal/LegalDocument";

function Disclaimer() {
  return (
    <LegalDocument title="Disclaimer" lastUpdated="January 2025">
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          1. General Information
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          The information provided on this website is for general informational purposes only. 
          Cottage Nodes makes no representations or warranties of any kind, express or 
          implied, about the completeness, accuracy, reliability, or suitability of the information 
          contained on this website.
        </p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          2. FTSO Delegation Services
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          Our FTSO delegation services are provided on an &quot;as is&quot; basis. While we strive to provide 
          accurate price data submissions and maximize rewards for token holders, we do not guarantee:
        </p>
        <ul style={{ paddingLeft: "2rem", marginBottom: "1rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Specific reward amounts or returns</li>
          <li style={{ marginBottom: "0.5rem" }}>Continuous availability of services</li>
          <li style={{ marginBottom: "0.5rem" }}>Error-free operation of our systems</li>
        </ul>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          3. Cryptocurrency Risks
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          Cryptocurrency and blockchain technology involve substantial risk. Delegating tokens to 
          FTSO data providers may result in loss of funds. You should:
        </p>
        <ul style={{ paddingLeft: "2rem", marginBottom: "1rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>Only delegate funds you can afford to lose</li>
          <li style={{ marginBottom: "0.5rem" }}>Conduct your own research before making decisions</li>
          <li style={{ marginBottom: "0.5rem" }}>Seek professional financial advice if needed</li>
        </ul>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          4. No Financial Advice
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          Nothing on this website constitutes financial, investment, legal, or tax advice. You should 
          not rely on any information on this website as a basis for making any financial decisions. 
          Always consult with qualified professionals before making investment decisions.
        </p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          5. Limitation of Liability
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          To the fullest extent permitted by law, Cottage Nodes shall not be liable for any 
          indirect, incidental, special, consequential, or punitive damages, or any loss of profits 
          or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, 
          or other intangible losses resulting from your use of our services.
        </p>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#d4a574", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>
          6. Contact Us
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          If you have questions about this Disclaimer, please contact us at{" "}
          <a href="mailto:info@cottagenodes.com" style={{ color: "#d4a574", textDecoration: "none" }}>
            info@cottagenodes.com
          </a>
        </p>
      </div>
    </LegalDocument>
  );
}

export default Disclaimer;
