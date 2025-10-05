import React from "react";
import bg1 from "@/assets/img/bg/service-1.jpeg";
import bg2 from "@/assets/img/bg/service-2.jpeg";
import img1 from "@/assets/img/services/service-1.svg";
import img2 from "@/assets/img/services/service-2.svg";
import img3 from "@/assets/img/services/service-3.svg";
import ServiceCard from "../cards/ServiceCard";

function Service() {
  return (
    <section className="aai-services">
      <ServiceCard
        img={img1}
        bg={bg1}
        desc="We build intelligent systems and AI-powered applications that transform how businesses operate. From architecting scalable AI solutions to integrating cutting-edge models into production systems, we combine deep technical expertise with practical engineering—creating tools and platforms that leverage AI to solve complex problems, automate workflows, and unlock new capabilities."
        title="AI Systems & Applications"
        features={[
          "AI-powered applications with intelligent automation and decision-making",
          "Custom AI tools and MCP integrations for extended AI capabilities",
          "System architecture for scalable AI integration and deployment",
        ]}
      />
      <ServiceCard
        img={img2}
        bg={bg2}
        desc="Security is at the heart of everything we build. Our expertise in cryptography and distributed systems enables us to develop blockchain solutions grounded in mathematical rigor. From DeFi protocols and zero-knowledge systems to secure enclaves with TEEs, we combine deep cryptographic knowledge with practical engineering—building systems where security isn't an afterthought, but a foundational principle."
        title="Blockchain & Cryptographic Systems"
        features={[
          "DeFi protocols and smart contracts with security-first design",
          "Zero-knowledge cryptography for privacy-preserving applications",
          "Trusted Execution Environments (TEEs) for secure computation",
        ]}
        style={{ flexDirection: "row-reverse" }}
      />
      <ServiceCard
        img={img3}
        bg={bg1}
        desc="Drawing from physics and mathematics, we tackle systems where precision matters. Whether it's simulation, optimization, or modeling intricate dynamics, we bring a deep understanding of complex systems—from computational physics to high-performance algorithms that handle scale, uncertainty, and emergent behavior."
        title="Complex Systems & Scientific Computing"
        features={[
          "High-performance simulations for physics-based and multi-agent systems",
          "Mathematical modeling and numerical optimization at scale",
          "Performance-critical software for scientific and industrial applications",
        ]}
      />
    </section>
  );
}

export default Service;
