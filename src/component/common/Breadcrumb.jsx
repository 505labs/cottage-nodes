import React from "react";
import ProtoTypes from "prop-types";
import Link from "next/link";
import bg from "@/assets/img/cottage/Cottage-16-9.png";

function Breadcrumb({ title }) {
  return (
    <section
      className="aai-breadcrumb"
      style={{
        background: `url(${bg.src}) no-repeat center center/cover`,
        position: "relative",
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, rgba(26, 47, 26, 0.5), rgba(26, 47, 26, 0.7))",
          zIndex: 1,
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="text-center">
              {/* Semi-transparent background box for text */}
              <div
                style={{
                  backgroundColor: "rgba(26, 47, 26, 0.8)",
                  padding: "2rem 3rem",
                  borderRadius: "15px",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  display: "inline-block",
                }}
              >
                <h2
                  className="aai-page-title"
                  style={{
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {title}
                </h2>
              <ul className="aai-breadcrumb-nav d-flex align-items-center justify-content-center">
                <li>
                  <Link
                    href="/"
                    className="aai-breadcrumb-link text-decoration-underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 16L18 12M18 12L14 8M18 12L6 12"
                      stroke="#DADADA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
                <li>
                  <Link href="#" className="aai-breadcrumb-link">
                    {" "}
                    {title}{" "}
                  </Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Breadcrumb.propTypes = {
  title: ProtoTypes.string,
};

export default Breadcrumb;
