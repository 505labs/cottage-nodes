"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import logo from "@/assets/img/logo/logo-m.svg";
import StickyMenu from "../../lib/StickyMenu";
import Image from "next/image";

function Header() {
  useEffect(() => {
    StickyMenu();
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="header-primary aai-sticky">
      <div className="container">
        <nav className="navbar navbar-expand-xl justify-content-between">
          <Link href="/">
            <Image
              src={logo.src}
              height={logo.height}
              width={logo.width}
              alt=""
            />
          </Link>
          <div
            className={`collapse navbar-collapse  ${mobileMenu ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="d-block d-xl-none">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src={logo.src}
                      height={logo.height}
                      width={logo.width}
                      alt=""
                    />
                  </Link>
                </div>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Home
                </Link>
                <div className="dropdown-menu">
                  <div className="d-flex flex-column flex-xl-row">
                    <ul>
                      <li>
                        <Link href="/" className="dropdown-item">
                          <span>Home Main</span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/home-two" className="dropdown-item">
                          <span>Home Two</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About Us
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/services-details" className="dropdown-item">
                      <span>Service Details</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="dropdown-item">
                      <span>Features</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/prices" className="dropdown-item">
                      <span>Pricing</span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/404" className="dropdown-item">
                      <span>404 Page</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/signin" className="dropdown-item">
                      <span>Signin Page</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/signup" className="dropdown-item">
                      <span>Signup Page</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Blog
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/blog" className="dropdown-item">
                      <span>Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details" className="dropdown-item">
                      <span>Blog Details</span>
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {/* <div className="d-flex align-items-center gap-4 mt-4">
              <div className="align-items-center aai-signup-in-links d-flex d-lg-none">
                <Link href="/signin">Login</Link>
                <Link href="/signup" className="aai-gradient-outline-btn">
                  Signup
                </Link>
              </div>
            </div> */}
          </div>
          <div className="navbar-right d-flex align-items-center gap-4">
            {/* <div className="align-items-center aai-signup-in-links d-none d-lg-flex">
              <Link href="/signin">Login</Link>
              <Link href="/signup" className="aai-gradient-outline-btn">
                Signup{" "}
              </Link>
            </div> */}
            <button
              className={`navbar-toggler d-block d-xl-none ${
                mobileMenu ? "collapsed" : ""
              }`}
              onClick={() => setMobileMenu(!mobileMenu)}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={mobileMenu}
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
