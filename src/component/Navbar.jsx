"use client";

import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./navbar.css";

export default function Navbar() {
  return (
    <header className="fast-navbar sticky-top">

      {/* ================= TOP LEFT SOCIAL ================= */}
      <div className="social-icons">
        <Link href="#">
          <i className="bi bi-twitter"></i>
        </Link>

        <Link href="#">
          <i className="bi bi-instagram"></i>
        </Link>

        <Link href="#">
          <i className="bi bi-whatsapp"></i>
        </Link>

        <Link href="#">
          <i className="bi bi-youtube"></i>
        </Link>
      </div>


      {/* ================= TOP RIGHT CONTACT ================= */}
      <div className="top-contact">
 
      * <span className="email">
          <i className="bi bi-envelope"></i>
          info@fastreachglobal.com
        </span>

        <span className="phone">
          <i className="bi bi-telephone"></i>
          +966546865628
        </span> 

      </div>


      {/* ================= CENTER LOGO ================= */}
      <div className="logo-area">

        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Fast Reach Global"
            className="fast-logo"
            priority
          />
        </Link>

      </div>


      {/* ================= LEFT MENU ================= */}
      <nav className="main-menu">

        <Link href="/">HOME</Link>

        <Link href="/About">
          ABOUT US
        </Link>

        <Link href="/expertise">
          OUR EXPERTISE
        </Link>

        <Link href="/testimonial">
          TESTIMONIAL
        </Link>

      </nav>


      {/* ================= RIGHT ACTIONS ================= */}
      <div className="action-area">
 
         <Link href="/contact" className="contact-btn">
          CONTACT US
          <i className="bi bi-arrow-right"></i>
        </Link>

        <Link
          href="mailto:info@fastreachglobal.com"
          className="round-btn email-btn"
        >
          <i className="bi bi-envelope"></i>
        </Link>

        <Link
          href="tel:+966546865628"
          className="round-btn phone-btn"
        >
          <i className="bi bi-telephone"></i>
        </Link> 

      </div>

    </header>
  );
}