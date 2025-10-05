import React from "react";
import Link from "next/link";
import error from "@/assets/img/others/error-vect.svg";
import Image from "next/image";

function ErrorCom() {
  return (
    <section className="aai-error pt-100 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center">
              <Image
                src={error.src}
                height={error.height}
                width={error.width}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="text-center mt-5">
              <h2 className="section-title">Oops! Page not found.</h2>
              <div className="mt-5 d-flex flex-column justify-content-center flex-md-row aai-btns-group">
                <Link href="/" className="aai-btn btn-pill-solid">
                  Back To Home
                </Link>
                <Link
                  href="/contact"
                  className="aai-btn aai-gradient-outline-btn"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorCom;
