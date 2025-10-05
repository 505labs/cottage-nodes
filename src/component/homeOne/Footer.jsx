import React from "react";
import bg from "@/assets/img/bg/footer-bg.jpeg";
import headset from "@/assets/img/icons/headset.svg";
import logoF from "@/assets/img/logo/logo-f.svg";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer
      className="aai-footer pt-120"
      style={{
        background: `url(${bg.src}) no-repeat center center/cover`,
      }}
    >
      <div className="container">
        {/* <div className="aai-footer-support">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="aai-support-info d-flex align-items-center">
                <div>
                  <Image
                    height={headset.height}
                    width={headset.width}
                    src={headset.src}
                    alt=""
                  />
                </div>
                <div className="aai-support-contact">
                  <p className="aai-support-text mb-1">
                    Have a question? Call us 24/7
                  </p>
                  <a
                    href="tel:+17077970462"
                    className="aai-support-number"
                  >
                    +1 (707) 797 0462
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aai-newsletter">
                <form>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <button className="aai-newsletter-btn">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
        <div className="aai-footer-navigation-widgets py-80">
          <div className="row">
            <div
              className="col-xl-12 col-lg-12 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="50"
            >
              <div className="aai-footer-info">
                <Link href="/" className="aai-footer-logo">
                  <Image
                    height={logoF.height}
                    width={logoF.width}
                    src={logoF.src}
                    alt=""
                  />
                </Link>
                <p className="aai-footer-desc">
                  A software development company based in Ljubljana, Slovenia. <br />
                  We specialize in AI, blockchain, and complex systems—turning 
                  scientific principles into innovative solutions.
                </p>
                <div className="aai-social-links d-flex">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-8 col-lg-8 col-md-12 mt-5 mt-lg-0">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 col-md-4 mb-5 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  <nav className="aai-footer-nav">
                    <h3 className="aai-footer-nav-title">Links</h3>
                    <ul className="aai-footer-nav-list">
                      <li className="aai-footer-nav-list-item">
                        <Link href="/" className="aai-footer-nav-link">
                          Home
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link href="/services" className="aai-footer-nav-link">
                          Service
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link href="/prices" className="aai-footer-nav-link">
                          Pricing
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link href="/about" className="aai-footer-nav-link">
                          About US
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link href="/features" className="aai-footer-nav-link">
                          Feature
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-4 mb-5 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                >
                  <nav className="aai-footer-nav">
                    <h3 className="aai-footer-nav-title">Artworks</h3>
                    <ul className="aai-footer-nav-list">
                      <li className="aai-footer-nav-list-item">
                        <Link href="/services" className="aai-footer-nav-link">
                          3D Artworks
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link href="/services" className="aai-footer-nav-link">
                          Photography
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link href="/services" className="aai-footer-nav-link">
                          PriFlat Illustrationcing
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link href="/services" className="aai-footer-nav-link">
                          Intro Videos
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                >
                  <nav className="aai-footer-nav">
                    <h3 className="aai-footer-nav-title">Community</h3>
                    <ul className="aai-footer-nav-list">
                      <li className="aai-footer-nav-list-item">
                        <Link href="/services" className="aai-footer-nav-link">
                          Global Partners
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link href="/about" className="aai-footer-nav-link">
                          Forum
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link href="/services" className="aai-footer-nav-link">
                          Virtual World
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link href="/about" className="aai-footer-nav-link">
                          Community
                        </Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link href="/services" className="aai-footer-nav-link">
                          Brand Assets
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="aai-footer-copyright text-center">
          <p className="aai-copyright-text">Copyright @2025 505 Labs</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
