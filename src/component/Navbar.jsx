"use client";

import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Navbar() {
  return (
    <header className="fast-navbar sticky-top">

      <div className="container-fluid h-100">
        <div className="row h-100 align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-4 left-side">

            {/* Social Icons */}
            <div className="social-icons mb-4">
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-whatsapp"></i>
              <i className="bi bi-youtube"></i>
            </div>

            {/* Menu */}
            <nav className="menu">
              <Link href="/">HOME</Link>
              <Link href="/About">ABOUT US</Link>
              <Link href="/expertise">OUR EXPERTISE</Link>
              <Link href="/testimonial">TESTIMONIAL</Link>
            </nav>

          </div>


          {/* CENTER LOGO */}
          <div className="col-lg-4 logo-section">

            <Image
              src="/logo.png"
              width={365}
              height={208}
              alt="Fast Reach"
              priority
            />

          </div>


          {/* RIGHT SIDE */}
          <div className="col-lg-4 right-side">

            {/* Email + Phone */}
            <div className="contact-info">

              <div>
                <i className="bi bi-envelope"></i>
                <span>info@fastreachglobal.com</span>
              </div>

              <div>
                <i className="bi bi-telephone"></i>
                <span>+966546865628</span>
              </div>

            </div>


            {/* Buttons */}
            <div className="action-buttons">

              <button className="contact-btn">
                CONTACT US
                <i className="bi bi-arrow-right"></i>
              </button>

              <button className="circle-btn white-btn">
                <i className="bi bi-envelope"></i>
              </button>

              <button className="circle-btn gold-btn">
                <i className="bi bi-telephone"></i>
              </button>

            </div>

          </div>

        </div>
      </div>

    </header>
  );
}