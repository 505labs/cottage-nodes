import React from "react";
import bg from "@/assets/img/bg/awards-bg.jpeg";
import trustpilot from "@/assets/img/brand/trustpilot.svg";
import hubspot from "@/assets/img/brand/hubspot.svg";
import capt from "@/assets/img/brand/capt.svg";
import trip from "@/assets/img/brand/trip.svg";
import fedex from "@/assets/img/brand/fedex.svg";
import Image from "next/image";
import Link from "next/link";

function Awards() {
  return (
    <section
      className="aai-awards py-120"
      style={{
        background: `url(${bg.src}) no-repeat center center/cover`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="aai-awards-left">
              <h2 className="section-title">
                The awards won <br />
                by our works.
              </h2>
              <ul className="work-list d-flex flex-column mt-4">
                <li className="work-list-item d-flex align-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_82_5376)">
                      <circle cx="12" cy="12" r="12" fill="#4562FF" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_82_5376">
                        <rect width="24" height="24" rx="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="aai-testimonial-author-title">
                    10+ million user
                  </span>
                </li>
                <li className="work-list-item d-flex align-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_82_5376)">
                      <circle cx="12" cy="12" r="12" fill="#4562FF" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_82_5376">
                        <rect width="24" height="24" rx="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="aai-testimonial-author-title">
                    6K+ Website user
                  </span>
                </li>
                <li className="work-list-item d-flex align-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_82_5376)">
                      <circle cx="12" cy="12" r="12" fill="#4562FF" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.50114 12.7402C5.8868 12.3595 6.27246 11.9788 6.64135 11.6147C7.74803 12.7071 8.83793 13.783 9.94461 14.8754C12.4262 12.4257 14.9079 9.97607 17.3727 7.54297C17.7584 7.92366 18.1441 8.30435 18.5129 8.66849C15.6457 11.4988 12.7951 14.3126 9.92784 17.143C8.45227 15.6864 6.95994 14.2133 5.48438 12.7568L5.50114 12.7402Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_82_5376">
                        <rect width="24" height="24" rx="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="aai-testimonial-author-title">
                    100% billion plagiarism past
                  </span>
                </li>
              </ul>
              <div className="mt-5">
                <Link href="/services" className="aai-gradient-outline-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 mt-5 mt-xl-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="aai-awards-right">
              <p className="aai-awards-desc">
                Our clients describe us as a product team which creates AI
                writing tools, by crafting top-notch user experience.
              </p>
              <div className="d-flex aai-awards-names">
                <div>
                  <Image
                    height={trustpilot.height}
                    width={trustpilot.width}
                    src={trustpilot.src}
                    className="mb-2"
                    alt=""
                  />
                  <div className="aai-awards-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="aai-awards-ratings">4.8/5 Rating</span>
                  </div>
                </div>
                <div>
                  <Image
                    height={capt.height}
                    width={capt.width}
                    src={capt.src}
                    className="mb-2"
                    alt=""
                  />
                  <div className="aai-awards-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="aai-awards-ratings">4.8/5 Rating</span>
                  </div>
                </div>
              </div>
              <div className="d-flex aai-awards-names">
                <div>
                  <Image
                    height={hubspot.height}
                    width={hubspot.width}
                    src={hubspot.src}
                    className="mb-2"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height={trip.height}
                    width={trip.width}
                    src={trip.src}
                    className="mb-2"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    height={fedex.height}
                    width={fedex.width}
                    src={fedex.src}
                    className="mb-2"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
