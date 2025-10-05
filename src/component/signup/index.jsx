import React from "react";
import bg from "@/assets/img/bg/sign-in-up.jpeg";
import img from "@/assets/img/others/ai-ills.svg";
import Link from "next/link";
import SignUp from "../forms/SignUp";
import Image from "next/image";

function Signup() {
  return (
    <main className="wrapper">
      <section
        className="aai-signup-in"
        style={{
          background: `url(${bg.src}) no-repeat center center/cover`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-4 d-none d-xl-block order-2 order-lg-1">
              <div className="position-relative">
                <Image
                  height={img.height}
                  width={img.width}
                  src={img.src}
                  className="img-fluid aai-signup-in-img"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-7 order-1 ps-xl-5 order-lg-2 mb-5 mb-lg-0">
              <div className="aai-form-wrapper">
                <div className="">
                  <div className="aai-form-header d-flex justify-content-center text-center flex-column align-items-center">
                    <h2 className="aai-form-title">Sign up for an account</h2>
                    <p className="aai-form-desc">
                      Send, spend and save smarter
                    </p>
                  </div>
                  <div className="row aai-auth-links">
                    <div className="col-lg-6 mb-3 mb-lg-0">
                      <Link
                        href="#"
                        className="aai-auth-link w-100 justify-content-center d-flex align-items-center"
                      >
                        <svg
                          width="23"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.1258 11.2139C21.1258 10.4225 21.0603 9.84497 20.9185 9.24609H11.6973V12.818H17.1099C17.0008 13.7057 16.4115 15.0425 15.102 15.9408L15.0836 16.0603L17.9992 18.2738L18.2012 18.2936C20.0563 16.6145 21.1258 14.1441 21.1258 11.2139"
                            fill="#4285F4"
                          />
                          <path
                            d="M11.6976 20.6248C14.3494 20.6248 16.5755 19.7692 18.2016 18.2934L15.1024 15.9405C14.273 16.5073 13.1599 16.903 11.6976 16.903C9.10043 16.903 6.89609 15.224 6.11031 12.9033L5.99513 12.9129L2.96347 15.2122L2.92383 15.3202C4.53888 18.4644 7.85634 20.6248 11.6976 20.6248Z"
                            fill="#34A853"
                          />
                          <path
                            d="M6.10908 12.9034C5.90174 12.3045 5.78175 11.6628 5.78175 10.9997C5.78175 10.3366 5.90174 9.695 6.09817 9.09612L6.09268 8.96857L3.02303 6.63232L2.92259 6.67914C2.25695 7.98388 1.875 9.44905 1.875 10.9997C1.875 12.5504 2.25695 14.0155 2.92259 15.3203L6.10908 12.9034"
                            fill="#FBBC05"
                          />
                          <path
                            d="M11.6977 5.09664C13.5419 5.09664 14.7859 5.87733 15.4953 6.52974L18.2671 3.8775C16.5648 2.32681 14.3494 1.375 11.6977 1.375C7.85637 1.375 4.53889 3.53526 2.92383 6.6794L6.09942 9.09638C6.89612 6.77569 9.10047 5.09664 11.6977 5.09664"
                            fill="#EB4335"
                          />
                        </svg>
                        <span>Sign Up with Google</span>
                      </Link>
                    </div>
                    <div className="col-lg-6">
                      <Link
                        href="#"
                        className="aai-auth-link w-100 d-flex justify-content-center align-items-center"
                      >
                        <svg
                          width="20"
                          height="22"
                          viewBox="0 0 20 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.3744 7.50391C19.2653 7.56519 16.6672 8.85841 16.6672 11.7258C16.7897 14.9959 19.9459 16.1427 20 16.1427C19.9459 16.2039 19.5235 17.7049 18.2724 19.2783C17.2795 20.6336 16.1775 22 14.504 22C12.9121 22 12.3407 21.0967 10.504 21.0967C8.53147 21.0967 7.97335 22 6.46314 22C4.78967 22 3.60599 20.5603 2.55896 19.2178C1.19871 17.4606 0.0425398 14.703 0.00172334 12.0553C-0.0257834 10.6522 0.274128 9.27304 1.03544 8.10158C2.10998 6.46614 4.02835 5.35595 6.1233 5.31935C7.72845 5.2708 9.15703 6.30777 10.1366 6.30777C11.0754 6.30777 12.8305 5.31935 14.8163 5.31935C15.6735 5.32014 17.9592 5.55173 19.3744 7.50391ZM10.0009 5.03921C9.71515 3.75792 10.504 2.47663 11.2387 1.65931C12.1774 0.670887 13.6601 0 14.9388 0C15.0204 1.28129 14.5031 2.53791 13.5785 3.45312C12.7489 4.44154 11.3203 5.18565 10.0009 5.03921Z"
                            fill="#747681"
                          />
                        </svg>

                        <span>Sign Up with Apple</span>
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row aai-option-bar justify-content-center align-items-center">
                    <span className="aai-auth-line"> </span>
                    <span className="aai-auth-option flex-shrink-0">
                      Or with email
                    </span>
                    <span className="aai-auth-line"></span>
                  </div>
                </div>
                <div>
                  <SignUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Signup;
