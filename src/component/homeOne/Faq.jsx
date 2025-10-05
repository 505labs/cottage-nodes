"use client"
import React, { useEffect, useState } from "react";
import ProtoTypes from "prop-types";
import Link from "next/link";

function Faq({ className }) {
  const [activeCollapse, setActiveCollapse] = useState("flush-collapseOne")
  useEffect(() => {
    const accrodionBtn = document.getElementsByClassName("accordion-button")
    for(let i=0; i<accrodionBtn.length;i++){
      if(accrodionBtn[i].attributes.name.nodeValue===activeCollapse){
        document.getElementById(activeCollapse)?.classList.add("accordion-collapse-show")
        document.getElementsByName(activeCollapse)[0]?.classList.add("accordion-button-show")
      }else{
        document.getElementById(accrodionBtn[i].attributes.name.nodeValue)?.classList.remove("accordion-collapse-show")
        document.getElementsByName(accrodionBtn[i].attributes.name.nodeValue)[0]?.classList.remove("accordion-button-show")
      }

    }
  }, [activeCollapse])

  const handleAccordion = (e)=>{
setActiveCollapse(activeCollapse===e.target.attributes.name.nodeValue?false:e.target.attributes.name.nodeValue)
  }

  return (
    <section className={`aai-faq pb-120 ${className}`}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-5 col-lg">
            <div>
              <h2 className="section-title mb-4">
                Any <span className="gradient-text"> Questions? </span> <br />
                We have Answers!
              </h2>
              <p className="section-desc">
                Don’t find your answer here? just send us a message for any
                query.
              </p>
              <div className="mt-5">
                <Link href="/contact" className="aai-gradient-outline-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg mt-5 mt-xl-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="aai-accordions">
              <div
                className="accordion accordion-flush"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                    name="flush-collapseOne"
                      className="accordion-button"
                      type="button"
                      onClick={(e)=>handleAccordion(e)}
                    >
                      What is AI content writing tool?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse "
                  >
                    <div className="accordion-body">
                      <p className="aai-accordion-text">
                        They not only understand what I say but read between the
                        lines and also give me ideas of my own. AI technology is
                        perfect for best business solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                    name="flush-collapseTwo"
                      className="accordion-button shadow-none"
                      type="button"
                      onClick={(e)=>handleAccordion(e)}
                    >
                      How do you different criteria in your process?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="aai-accordion-text">
                        They not only understand what I say but read between the
                        lines and also give me ideas of my own. AI technology is
                        perfect for best business solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                    name="flush-collapseThree"
                      className="accordion-button shadow-none"
                      type="button"
                      onClick={(e)=>handleAccordion(e)}
                    >
                      How can invest money here?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="aai-accordion-text">
                        They not only understand what I say but read between the
                        lines and also give me ideas of my own. AI technology is
                        perfect for best business solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                    name="flush-collapseFour"
                      className="accordion-button shadow-none"
                      type="button"
                      onClick={(e)=>handleAccordion(e)}
                    >
                      How can I trade my crypto into different currency?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="aai-accordion-text">
                        They not only understand what I say but read between the
                        lines and also give me ideas of my own. AI technology is
                        perfect for best business solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                    name="flush-collapseFive"
                      className="accordion-button shadow-none"
                      type="button"
                      onClick={(e)=>handleAccordion(e)}
                    >
                      How can I accept credit cards online?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <p className="aai-accordion-text">
                        They not only understand what I say but read between the
                        lines and also give me ideas of my own. AI technology is
                        perfect for best business solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Faq.propTypes = {
  className: ProtoTypes.string,
};

export default Faq;
