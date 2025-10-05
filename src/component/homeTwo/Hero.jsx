"use client";
import React, { useEffect, useMemo, useState } from "react";
import bg from "@/assets/img/hero/hero-bg-2.jpeg";
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
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="aai-hero-two-content d-flex text-center flex-column align-items-center justify-content-center">
                <h1 className="aai-hero-two-title">
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
                    style={{ background: "transparent", color: "white" }}
                  >
                    |
                  </span>
                </h1>
                <p className="aai-hero-two-desc">
                  AI Copywriting is revolutionizing the way content is created.
                  AI can create content for blogs, articles, websites, social
                  media and more.
                </p>
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
