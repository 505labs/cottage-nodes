"use client";
import React, { useEffect, useMemo, useState } from "react";
import bg from "@/assets/img/hero/hero-bg-2.jpeg";
import dashboard from "@/assets/img/hero/dashboard-img.png";
import dashboardTwo from "@/assets/img/hero/dashboard-img-2.png";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const content = useMemo(
    () => ["Artificial Intelligence", "Blockchain Technology", "Complex Systems"],
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
    <section
      className="aai-hero-one position-relative"
      style={{
        background: `url(${bg.src}) no-repeat center center/cover`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-11 col-xl-9">
            <div className="aai-hero-one-content text-center">
              <h1 className="aai-hero-one-title">
                Building the Future <br />
                 with <br />
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
              <p className="aai-hero-one-desc mx-auto" style={{ maxWidth: "700px" }}>
                505 Labs is a software development company based in Ljubljana, Slovenia. 
                We are a team of engineers with backgrounds in mathematics, computer science, 
                and physics, specializing in solving complex problems where science and 
                technology converge.
              </p>
              {/* <div className="mt-5 d-flex flex-column flex-md-row aai-btns-group justify-content-center">
                <Link href="/contact" className="aai-btn btn-pill-solid">
                  Get in Touch
                </Link>
                <Link href="/about" className="aai-gradient-outline-btn">
                  Learn More
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
