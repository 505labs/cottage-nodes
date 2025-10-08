import React from "react";
import contact1 from "@/assets/img/icons/contact-1.svg";
import contact2 from "@/assets/img/icons/contact-2.svg";
import teamPhoto from "@/assets/img/team/team1-square.jpg";
import Image from "next/image";

function Contact() {
  return (
    <section className="aai-contact-form">
      <div className="container">
        <div className="row g-5 align-items-center justify-content-between">
          <div className="col-xl-6 col-lg pe-lg-5">
            <div>
              <h2 className="section-title mb-5">
                We love to collab with, Let’s do great together!
              </h2>
              <div className="">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Jarška+cesta+10B,+Ljubljana,+Slovenia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ display: "block", cursor: "pointer" }}
                >
                  <div className="aai-contact-widget mb-4" style={{ transition: "transform 0.2s" }}>
                    <div className="aai-contact-widget-inner d-flex">
                      <div>
                        <Image
                          src={contact1.src}
                          height={contact1.height}
                          width={contact1.width}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="aai-contact-widget-title">Our Address</h3>
                        <address className="aai-contact-address" style={{ marginBottom: 0 }}>
                          Jarška cesta 10B <br />
                          Ljubljana, Slovenia
                        </address>
                      </div>
                    </div>
                  </div>
                </a>
                <a 
                  href="mailto:info@505labs.com"
                  className="text-decoration-none"
                  style={{ display: "block", cursor: "pointer" }}
                >
                  <div className="aai-contact-widget mb-4" style={{ transition: "transform 0.2s" }}>
                    <div className="aai-contact-widget-inner d-flex">
                      <div>
                        <Image
                          src={contact2.src}
                          height={contact2.height}
                          width={contact2.width}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="aai-contact-widget-title">Contact Info</h3>
                        <p className="aai-contact-support">
                          Open a chat with us at
                        </p>
                        <span className="aai-contact-address">
                          info@505labs.com
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg">
            <div className="aai-team-photo">
              <Image
                src={teamPhoto.src}
                height={teamPhoto.height}
                width={teamPhoto.width}
                className="img-fluid rounded shadow"
                alt="505 Labs Team"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
