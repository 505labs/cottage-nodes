"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import blogImg from "@/assets/img/blog/bp-1.webp";
import blogImg2 from "@/assets/img/blog/bp-2.webp";
import blogImg3 from "@/assets/img/blog/bp-3.webp";
import blogImg4 from "@/assets/img/blog/bp-4.webp";

import heptagon from "@/assets/img/blog/heptagon.jpg";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Heptagon AI",
      description: "Proof of learning AI training platform that uses Filecoin for dataset storage, Phala TEE for proof verification and Flare Network for data collection and price feeds",
      image: heptagon,
      category: "AI & Data",
      tags: ["ML", "Data", "ZK"],
    //   client: "505 Labs",
      date: "2024",
      link: "https://ethglobal.com/showcase/heptagonai-otoou"
    },
    {
      id: 2,
      title: "Decentralized Finance Protocol",
      description: "Built a secure DeFi lending protocol with smart contracts on Ethereum. Implemented automated market making and yield farming features with comprehensive security audits.",
      image: blogImg2,
      category: "Blockchain",
      tags: ["Blockchain", "Smart Contracts", "DeFi"],
      client: "FinTech Company",
      date: "2023",
      link: "#"
    },
    {
      id: 3,
      title: "Real-Time Analytics Dashboard",
      description: "Enterprise-grade analytics platform processing millions of events per second. Features real-time data visualization, predictive analytics, and custom reporting tools.",
      image: blogImg3,
      category: "Data Engineering",
      tags: ["Big Data", "Analytics", "Real-time"],
      client: "Enterprise Corp",
      date: "2024",
      link: "#"
    },
    {
      id: 4,
      title: "Zero-Knowledge Proof System",
      description: "Implemented a privacy-preserving authentication system using ZK-SNARKs. Enables users to prove identity without revealing sensitive information.",
      image: blogImg4,
      category: "Cryptography",
      tags: ["ZKP", "Security", "Cryptography"],
      client: "Privacy Startup",
      date: "2023",
      link: "#"
    },

    {
      id: 5,
      title: "Zero-Knowledge Proof System",
      description: "Implemented a privacy-preserving authentication system using ZK-SNARKs. Enables users to prove identity without revealing sensitive information.",
      image: blogImg,
      category: "Cryptography",
      tags: ["ZKP", "Security", "Cryptography"],
      client: "Privacy Startup",
      date: "2023",
      link: "#"
    },
    {
      id: 6,
      title: "Zero-Knowledge Proof System",
      description: "Implemented a privacy-preserving authentication system using ZK-SNARKs. Enables users to prove identity without revealing sensitive information.",
      image: blogImg2,
      category: "Cryptography",
      tags: ["ZKP", "Security", "Cryptography"],
      client: "Privacy Startup",
      date: "2023",
      link: "#"
    },
    {
      id: 7,
      title: "Zero-Knowledge Proof System",
      description: "Implemented a privacy-preserving authentication system using ZK-SNARKs. Enables users to prove identity without revealing sensitive information.",
      image: blogImg3,
      category: "Cryptography",
      tags: ["ZKP", "Security", "Cryptography"],
      client: "Privacy Startup",
      date: "2023",
      link: "#"
    },
    {
      id: 8,
      title: "Zero-Knowledge Proof System",
      description: "Implemented a privacy-preserving authentication system using ZK-SNARKs. Enables users to prove identity without revealing sensitive information.",
      image: blogImg4,
      category: "Cryptography",
      tags: ["ZKP", "Security", "Cryptography"],
      client: "Privacy Startup",
      date: "2023",
      link: "#"
    },
    {
      id: 9,
      title: "Zero-Knowledge Proof System",
      description: "Implemented a privacy-preserving authentication system using ZK-SNARKs. Enables users to prove identity without revealing sensitive information.",
      image: blogImg,
      category: "Cryptography",
      tags: ["ZKP", "Security", "Cryptography"],
      client: "Privacy Startup",
      date: "2023",
      link: "#"
    },
    {
      id: 10,
      title: "Zero-Knowledge Proof System",
      description: "Implemented a privacy-preserving authentication system using ZK-SNARKs. Enables users to prove identity without revealing sensitive information.",
      image: blogImg2,
      category: "Cryptography",
      tags: ["ZKP", "Security", "Cryptography"],
      client: "Privacy Startup",
      date: "2023",
      link: "#"
    },
    {
      id: 11,
      title: "Zero-Knowledge Proof System",
      description: "Implemented a privacy-preserving authentication system using ZK-SNARKs. Enables users to prove identity without revealing sensitive information.",
      image: blogImg3,
      category: "Cryptography",
      tags: ["ZKP", "Security", "Cryptography"],
      client: "Privacy Startup",
      date: "2023",
      link: "#"
    },
    {
      id: 12,
      title: "Zero-Knowledge Proof System",
      description: "Implemented a privacy-preserving authentication system using ZK-SNARKs. Enables users to prove identity without revealing sensitive information.",
      image: blogImg4,
      category: "Cryptography",
      tags: ["ZKP", "Security", "Cryptography"],
      client: "Privacy Startup",
      date: "2023",
      link: "#"
    }
  ];

  return (
    <section className="aai-projects py-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 mx-auto">
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title mb-3">Our Previous Work and Research</h2>
              <p className="section-desc">
                Explore our portfolio of successful projects across AI, blockchain, 
                and software systems. Each project showcases our commitment to innovation 
                and technical excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <article className="aai-project-card">
                <a 
                  href={project.link} 
                  className="aai-project-image-wrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="aai-project-image-container">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="aai-project-image"
                      style={{
                        width: "100%",
                        height: "280px",
                        objectFit: "cover"
                      }}
                    />
                    <div className="aai-project-overlay">
                      <span className="aai-project-view">
                        View Project
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginLeft: "8px" }}
                        >
                          <path
                            d="M7.5 15L12.5 10L7.5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>

                <div className="aai-project-content">
                  <div className="aai-project-meta">
                    <span className="aai-project-category">
                      <i className="fa-regular fa-folder"></i>
                      {project.category}
                    </span>
                    <span className="aai-project-date">
                      <i className="fa-regular fa-calendar"></i>
                      {project.date}
                    </span>
                    <span className="aai-project-client">
                      <i className="fa-regular fa-building"></i>
                      {project.client}
                    </span>
                  </div>

                  <h3 className="aai-project-title">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>

                  <p className="aai-project-description">{project.description}</p>

                  <div className="aai-project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="aai-project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    className="aai-project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Case Study</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <Link href="/contact" className="aai-gradient-outline-btn">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .aai-projects {
          background: #04091e;
        }

        .aai-project-card {
          background: linear-gradient(135deg, rgba(69, 98, 255, 0.05) 0%, rgba(237, 203, 136, 0.05) 100%);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .aai-project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(237, 203, 136, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .aai-project-image-wrapper {
          display: block;
          position: relative;
          overflow: hidden;
        }

        .aai-project-image-container {
          position: relative;
          overflow: hidden;
        }

        .aai-project-image {
          transition: transform 0.5s ease;
        }

        .aai-project-card:hover .aai-project-image {
          transform: scale(1.1);
        }

        .aai-project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 9, 30, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .aai-project-image-wrapper:hover .aai-project-overlay {
          opacity: 1;
        }

        .aai-project-view {
          color: #EDCB88;
          font-size: 18px;
          font-weight: 600;
          display: flex;
          align-items: center;
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }

        .aai-project-image-wrapper:hover .aai-project-view {
          transform: translateY(0);
        }

        .aai-project-content {
          padding: 28px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .aai-project-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 16px;
          font-size: 13px;
        }

        .aai-project-meta span {
          color: #B6B6B6;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .aai-project-meta i {
          color: #EDCB88;
          font-size: 14px;
        }

        .aai-project-category,
        .aai-project-date,
        .aai-project-client {
          transition: color 0.3s ease;
        }

        .aai-project-card:hover .aai-project-category,
        .aai-project-card:hover .aai-project-date,
        .aai-project-card:hover .aai-project-client {
          color: #fff;
        }

        .aai-project-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 14px;
          line-height: 1.4;
        }

        .aai-project-title a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .aai-project-title a:hover {
          color: #EDCB88;
        }

        .aai-project-description {
          color: #B6B6B6;
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 18px;
          flex: 1;
        }

        .aai-project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .aai-project-tag {
          background: rgba(237, 203, 136, 0.1);
          border: 1px solid rgba(237, 203, 136, 0.3);
          color: #EDCB88;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .aai-project-card:hover .aai-project-tag {
          background: rgba(237, 203, 136, 0.2);
          border-color: #EDCB88;
        }

        .aai-project-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #EDCB88;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: gap 0.3s ease;
        }

        .aai-project-link:hover {
          gap: 15px;
          color: #EDCB88;
        }

        .aai-project-link i {
          transition: transform 0.3s ease;
        }

        .aai-project-link:hover i {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .aai-project-title {
            font-size: 20px;
          }

          .aai-project-description {
            font-size: 14px;
          }

          .aai-project-content {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;
