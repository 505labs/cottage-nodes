import React from "react";
import bg from "@/assets/img/cottage/cottage-4-3.png";
import truePilot from "@/assets/img/brand/trustpilot.svg";
import capt from "@/assets/img/brand/capt.svg";
import Image from "next/image";

function Awards() {
  return (
    <section
      className="aai-awards py-100"
      style={{
        background: `url(${bg.src}) no-repeat center center/cover`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up">
            <div className="aai-awards-right">
              <div className="d-flex aai-awards-names justify-content-center">
                <div>
                  <Image
                    height={truePilot.height}
                    width={truePilot.width}
                    src={truePilot.src}
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
            </div>
            <ul className="aai-list-items d-flex flex-lg-row flex-column justify-content-center gap-3 gap-lg-5 mt-4">
              <li className="aai-list-item d-flex align-items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="12" fill="#d4a574" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.8047 7.52876C18.0651 7.78911 18.0651 8.21122 17.8047 8.47157L10.4714 15.8049C10.2111 16.0653 9.78894 16.0653 9.5286 15.8049L6.19526 12.4716C5.93491 12.2112 5.93491 11.7891 6.19526 11.5288C6.45561 11.2684 6.87772 11.2684 7.13807 11.5288L10 14.3907L16.8619 7.52876C17.1223 7.26841 17.5444 7.26841 17.8047 7.52876Z"
                    fill="#1a2f1a"
                  />
                </svg>
                <span className="aai-list-item-text">10+ million user</span>
              </li>
              <li className="aai-list-item d-flex align-items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="12" fill="#d4a574" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.8047 7.52876C18.0651 7.78911 18.0651 8.21122 17.8047 8.47157L10.4714 15.8049C10.2111 16.0653 9.78894 16.0653 9.5286 15.8049L6.19526 12.4716C5.93491 12.2112 5.93491 11.7891 6.19526 11.5288C6.45561 11.2684 6.87772 11.2684 7.13807 11.5288L10 14.3907L16.8619 7.52876C17.1223 7.26841 17.5444 7.26841 17.8047 7.52876Z"
                    fill="#1a2f1a"
                  />
                </svg>
                <span className="aai-list-item-text">6K+ Website user</span>
              </li>
              <li className="aai-list-item d-flex align-items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="12" fill="#d4a574" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.8047 7.52876C18.0651 7.78911 18.0651 8.21122 17.8047 8.47157L10.4714 15.8049C10.2111 16.0653 9.78894 16.0653 9.5286 15.8049L6.19526 12.4716C5.93491 12.2112 5.93491 11.7891 6.19526 11.5288C6.45561 11.2684 6.87772 11.2684 7.13807 11.5288L10 14.3907L16.8619 7.52876C17.1223 7.26841 17.5444 7.26841 17.8047 7.52876Z"
                    fill="#1a2f1a"
                  />
                </svg>
                <span className="aai-list-item-text">
                  100% billion plagiarism past
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
