"use client";
import React, { useEffect, useMemo, useState } from "react";
import bg from "@/assets/img/cottage/cottage-21-9.png";
import img from "@/assets/img/hero/dashboard-img-2.png";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const content = useMemo(
    () => ["Technical Writing", "Blog Writing", "AI Content"],
    []
  );
  const [contents, setContents] = useState("");
  const [num, setNum] = useState(0);
  const [jumping, setJumping] = useState(false);

  useEffect(() => {
    let timeOut = 100;
    if (content[num][contents.length] === " ") {
      timeOut = 0;
    } else if (content[num].length === contents.length) {
      timeOut = 3000;
      setJumping(true);
    } else {
      timeOut = 100;
      setJumping(false);
    }
    setTimeout(() => {
      if (content[num].length <= contents.length) {
        setContents("");
        if (content[num + 1]) {
          setNum(num + 1);
        } else {
          setNum(0);
        }
      } else {
        setContents(contents + content[num][contents.length]);
        if (contents.length + 1 === content[num].length) {
          setJumping(true);
        } else if (content[num][contents.length] !== " ") {
          setJumping(!jumping);
        }
      }
    }, timeOut);
  }, [contents, content, num, jumping]);
  return (
    <section className="aai-hero-two position-relative">
      <div
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
            background: "linear-gradient(to bottom, rgba(26, 47, 26, 0.4), rgba(26, 47, 26, 0.6))",
            zIndex: 1,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="aai-hero-two-content d-flex text-center flex-column align-items-center justify-content-center">
                {/* Semi-transparent background box for text */}
                <div
                  style={{
                    backgroundColor: "rgba(26, 47, 26, 0.75)",
                    padding: "3rem 2rem",
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    maxWidth: "900px",
                    margin: "0 auto",
                  }}
                >
                  <h1
                    className="aai-hero-two-title"
                    style={{
                      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    High-Quality Way to Write your{" "}
                    <span className="gradient-text typing-animation">
                      {contents}
                      <span
                        style={{
                          opacity: 0,
                        }}
                      ></span>
                    </span>
                    <span
                      className={jumping ? "cursor" : ""}
                      style={{
                        background: "transparent",
                        color: "white",
                        textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      |
                    </span>
                  </h1>
                  <p
                    className="aai-hero-two-desc"
                    style={{
                      textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.5)",
                      color: "#ffffff",
                    }}
                  >
                    AI Copywriting is revolutionizing the way content is created.
                    AI can create content for blogs, articles, websites, social
                    media and more.
                  </p>
                </div>
                <div className="mt-5 d-flex flex-column flex-lg-row aai-btns-group">
                  <Link href="/prices" className="aai-btn btn-pill-solid">
                    Get Started
                  </Link>
                  <Link href="/about" className="aai-gradient-outline-btn">
                    Learn More
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="aai-hero-two-img d-flex justify-content-center">
              <Image
                height={img.height}
                width={img.width}
                src={img.src}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
