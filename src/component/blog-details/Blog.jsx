import React from "react";
import blogImg from "@/assets/img/blog/bp-1.webp";
import Image from "next/image";

function Blog() {
  return (
    <>
      <div className="aai-post-details-top mb-4">
        <div>
          <Image
            src={blogImg.src}
            height={blogImg.height}
            width={blogImg.width}
            className="img-fluid aai-blog-details-thumb mb-5"
            alt=""
          />
          <p className="aai-post-details-text mb-4">
            Artificial Intelligence (AI) is a groundbreaking field of computer
            science that aims to create intelligent machines capable of
            performing tasks that typically require human intelligence.
          </p>
          <p className="aai-post-details-text">
            By simulating human cognitive processes, AI systems can analyze vast
            amounts of data, identify patterns, make predictions, and learn from
            experiences, enabling them to continuously improve their
            performance.
          </p>
          <blockquote className="aai-post-blockquote">
            <p>
              Artificial Intelligence (AI) is a groundbreaking field of computer
              science that aims to create intelligent machines capable of
              performing tasks.
            </p>
          </blockquote>
          <p className="aai-post-details-text">
            AI has the potential to revolutionize various industries, including
            healthcare, finance, transportation, and manufacturing, by
            automating processes, enhancing decision-making, and unlocking new
            insights.
          </p>
        </div>
      </div>
      {/* Social Links */}
      <div className="d-flex align-items-center gap-3 mb-5">
        <h3 className="aai-post-social-share">Social:</h3>
        <div className="aai-post-social-links d-flex gap-1">
          <a className="facebook" data-social="facebook" href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="twitter" data-social="twitter" href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a className="pinterest" data-social="pinterest" href="#">
            <i className="fa-brands fa-pinterest-p"></i>
          </a>
          <a className="linkedin" data-social="linkedin" href="#">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Blog;
