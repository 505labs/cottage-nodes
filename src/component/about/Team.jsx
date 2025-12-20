"use client";
import React from "react";
import Image from "next/image";
import team1 from "@/assets/img/team/team1.jpg";


import jakobPF from "@/assets/img/team/members/JakobPFP.jpg";
import galPF from "@/assets/img/team/members/GalPFP.jpg";
import lukaPF from "@/assets/img/team/members/LukaPFP.jpg";
import jurePF from "@/assets/img/team/members/JurePFP.jpg";



function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Jakob Fir",
      role: "",
      image: jakobPF,
      bio: "",
      social: {
        // linkedin: "#",
        // twitter: "#",
        // email: "jakob@505labs.com"
      }
    },
    {
      id: 2,
      name: "Gal Gantar",
      role: "",
      image: galPF,
      bio: "",
      social: {
        // linkedin: "#",
        // twitter: "#",
        email: "gal.gantar@505labs.com"
      }
    },
    {
      id: 3,
      name: "Luka Skeledzija",
      role: "",
      image: lukaPF,
      bio: "",
      social: {
        // linkedin: "#",
        // twitter: "#",
        email: "luka.skeledzija@505labs.com"
      }
    },
    {
      id: 4,
      name: "Jure Snoj",
      role: "",
      image: jurePF,
      bio: "",
      social: {
        // linkedin: "#",
        // twitter: "#",
        email: "jure.snoj@505labs.com"
      }
    }
  ];

  return (
    <section className="aai-team py-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8 mx-auto">
            <div className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title mb-3">Meet Our Team</h2>
              <p className="section-desc">
                Our diverse team of experts is passionate about pushing the boundaries 
                of technology to create innovative solutions that make a difference.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aai-team-card">
                <div className="aai-team-img-wrapper">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="img-fluid w-100"
                    style={{
                      height: "350px",
                      objectFit: "cover",
                      borderRadius: "12px"
                    }}
                  />
                  <div className="aai-team-overlay">
                    <div className="aai-team-social">
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="aai-social-icon"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a 
                        href={member.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="aai-social-icon"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="aai-social-icon"
                      >
                        <i className="fa-regular fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="aai-team-content mt-4">
                  <h4 className="aai-team-name mb-2">{member.name}</h4>
                  <p className="aai-team-role mb-3" style={{ color: "#d4a574" }}>
                    {member.role}
                  </p>
                  <p className="aai-team-bio" style={{ fontSize: "14px", color: "#B6B6B6" }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .aai-team {
          background: linear-gradient(180deg, #1a2f1a 0%, #152615 100%);
        }
        
        .aai-team-card {
          position: relative;
          transition: transform 0.3s ease;
        }
        
        .aai-team-card:hover {
          transform: translateY(-8px);
        }
        
        .aai-team-img-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }
        
        .aai-team-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(4, 9, 30, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 12px;
        }
        
        .aai-team-img-wrapper:hover .aai-team-overlay {
          opacity: 1;
        }
        
        .aai-team-social {
          display: flex;
          gap: 15px;
        }
        
        .aai-social-icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(212, 165, 116, 0.1);
          border: 1px solid #d4a574;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d4a574;
          transition: all 0.3s ease;
          font-size: 18px;
        }
        
        .aai-social-icon:hover {
          background: #d4a574;
          color: #1a2f1a;
          transform: scale(1.1);
        }
        
        .aai-team-name {
          color: #fff;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .aai-team-role {
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .aai-team-bio {
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}

export default Team;
