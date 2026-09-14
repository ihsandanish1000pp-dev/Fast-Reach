"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle
} from "lucide-react";


const stats = [
  {
    number: 30,
    text: (
      <>
        EXPERIENCE
        <br />
        IN FIELD
      </>
    ),
  },
  {
    number: 110,
    text: (
      <>
        SATISFIED
        <br />
        CUSTOMER
      </>
    ),
  },
  {
    number: 160,
    text: (
      <>
        COMPLETED
        <br />
        PROJECTS
      </>
    ),
  },
  {
    number: 20,
    text: (
      <>
        UNDER
        <br />
        PROCESS PROJECTS
      </>
    ),
  },
];





export default function Hero() {
  return (

    <>
      <section className="hero-section">
        {/* Dark Overlay */}
        <div className="hero-overlay"></div>

        {/* Hero Content */}
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">

            <div className="col-lg-9 col-md-10 col-12 text-center hero-content">

              <h1>
                Engineering Excellence.
                <br />
                Delivered with Precision.
              </h1>

              <p >
                Integrated contracting and trading solutions built on quality,
                safety, and
                <br className="desktop-break" />
                performance.
              </p>

            </div>

          </div>
        </div>


        {/* WhatsApp Button */}
        <a
          href="https://wa.me/966546865628"
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp"></i>
        </a>

      </section>




      <section className="stats-section">
        <div className="container">
          <div className="row">

            {stats.map((item, index) => (
              <div className="col-6 col-lg-3" key={index}>

                <h2>
                  {item.number}
                  <sup>+</sup>
                </h2>

                <p>
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>





<section className="hero-wrapper m-0 m-lg-5 mt-4">
  <div className="row g-0 min-vh-100">

    {/* Left: Image */}
    <div className="col-lg-6 position-relative hero-image-col">
      <Image
        src="/constration.avif"
        alt="Construction site at sunset with cranes"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      <div className="hero-image-overlay" />
    </div>

    {/* Right: Content */}
    <div className="col-lg-6 hero-content-col d-flex align-items-center">
      <div className="px-4 px-lg-5 py-5 w-100">

        <div className="d-flex align-items-center mb-3">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">
            TRADING &amp; CONTRACTING
          </span>
        </div>

        <h1 className="hero-heading mb-4">
          Welcome To <br /> <span className="text-accent">Fast</span> Reach <br />
          Global
        </h1>

        <p className="hero-paragraph mb-4">
          Fast Reach Global is a multidisciplinary Trading &amp;
          Contracting company delivering end-to-end solutions across
          construction and infrastructure projects — a one-stop service
          provider for healthcare, offices, hotels, education, commercial,
          IT, housing, and large-scale infrastructure works.
        </p>

        <p className="hero-paragraph mb-5">
          Backed by strong financial capacity and advanced technical
          expertise, our team has executed projects for key government
          entities including Ministries of Health, Education, Defense,
          Interior, and Culture — maintaining strict compliance with
          international and national standards.
        </p>

         <button className="read-moree" >read more</button>

      </div>
    </div>

  </div>
</section>





    
      <section className="expertise-section py-5">

        {/* Heading */}
        <div className="container-fluid px-3 px-md-4">

          <div className="expertise-heading text-center mb-4 mb-md-5">
            <h2>Our Expertise</h2>

            <p>
              We provide comprehensive contracting and trading solutions
              <br className="d-none d-md-block" />
              tailored to meet the highest standards of quality and performance.
            </p>
          </div>


          {/* Cards */}
          <div className="row g-3 g-md-4">

            {/* Card 1 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="expertise-card">

                <div className="expertise-image">

                  <Image
                    src="/First-pic.jpg"
                    width={600}
                    height={700}
                    className="img-fluid w-100"
                    alt="General Contracting"
                  />

                  <div className="expertise-overlay"></div>

                  <div className="expertise-content">

                    <h3>
                      GENERAL
                      <br />
                      CONTRACTING
                    </h3>

                    <button className="expertise-arrow">
                      <ArrowRight size={25} />
                    </button>

                  </div>

                </div>

              </div>
            </div>


            {/* Card 2 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="expertise-card">

                <div className="expertise-image">

                  <Image
                    src="/civil.avif"
                    width={600}
                    height={700}
                    className="img-fluid w-100"
                    alt="Facade and External Works"
                  />

                  <div className="expertise-overlay"></div>

                  <div className="expertise-content">

                    <h3>
                      FACADE & EXTERNAL
                      <br />
                      WORKS
                    </h3>

                    <button className="expertise-arrow">
                      <ArrowRight size={25} />
                    </button>

                  </div>

                </div>

              </div>
            </div>


            {/* Card 3 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="expertise-card">

                <div className="expertise-image">

                  <Image
                    src="/civil3.jpg"
                    width={600}
                    height={700}
                    className="img-fluid w-100"
                    alt="Firefighting and Life Safety Systems"
                  />

                  <div className="expertise-overlay"></div>

                  <div className="expertise-content">

                    <h3>
                      FIREFIGHTING & LIFE
                      <br />
                      SAFETY SYSTEMS
                    </h3>

                    <button className="expertise-arrow">
                      <ArrowRight size={25} />
                    </button>

                  </div>

                </div>

              </div>
            </div>


            {/* Card 4 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="expertise-card">

                <div className="expertise-image">

                  <Image
                    src="/civil5.jpg"
                    width={600}
                    height={700}
                    className="img-fluid w-100"
                    alt="Mechanical Expertise"
                  />

                  <div className="expertise-overlay"></div>

                  <div className="expertise-content">

                    <h3>
                      OUR MECHANICAL
                      <br />
                      EXPERTISE
                    </h3>

                    <button className="expertise-arrow">
                      <ArrowRight size={25} />
                    </button>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>


        {/* Second Row */}
        <div className="container-fluid px-3 px-md-4 mt-3 mt-md-4">

          <div className="row g-3 g-md-4">

            {/* Card 5 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="expertise-card">

                <div className="expertise-image">

                  <Image
                    src="/irgition-pic.jpg"
                    width={600}
                    height={700}
                    className="img-fluid w-100"
                    alt="General Contracting"
                  />

                  <div className="expertise-overlay"></div>

                  <div className="expertise-content">

                    <h3>
                      GENERAL
                      <br />
                      CONTRACTING
                    </h3>

                    <button className="expertise-arrow">
                      <ArrowRight size={25} />
                    </button>

                  </div>

                </div>

              </div>
            </div>


            {/* Card 6 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="expertise-card">

                <div className="expertise-image">

                  <Image
                    src="/medical-gas.jpg"
                    width={600}
                    height={700}
                    className="img-fluid w-100"
                    alt="Facade and External Works"
                  />

                  <div className="expertise-overlay"></div>

                  <div className="expertise-content">

                    <h3>
                      FACADE & EXTERNAL
                      <br />
                      WORKS
                    </h3>

                    <button className="expertise-arrow">
                      <ArrowRight size={25} />
                    </button>

                  </div>

                </div>

              </div>
            </div>


            {/* Card 7 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="expertise-card">

                <div className="expertise-image">

                  <Image
                    src="/electric.jpg"
                    width={600}
                    height={700}
                    className="img-fluid w-100"
                    alt="Firefighting and Life Safety Systems"
                  />

                  <div className="expertise-overlay"></div>

                  <div className="expertise-content">

                    <h3>
                      FIREFIGHTING & LIFE
                      <br />
                      SAFETY SYSTEMS
                    </h3>

                    <button className="expertise-arrow">
                      <ArrowRight size={25} />
                    </button>

                  </div>

                </div>

              </div>
            </div>


            {/* Card 8 */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="expertise-card">

                <div className="expertise-image">

                  <Image
                    src="/lowCurrent-pic.jpg"
                    width={600}
                    height={700}
                    className="img-fluid w-100"
                    alt="Mechanical Expertise"
                  />

                  <div className="expertise-overlay"></div>

                  <div className="expertise-content">

                    <h3>
                      OUR MECHANICAL
                      <br />
                      EXPERTISE
                    </h3>

                    <button className="expertise-arrow">
                      <ArrowRight size={25} />
                    </button>

                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </section>


      <section className="contact-cta">
        <div className="container-fluid">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-12 col-lg-8">
              <div className="cta-content">
                <h2>
                  Want To Chat? Feel Free
                  <br className="d-none d-md-block" />
                  To Contact Our Team
                </h2>

                <p>
                  If you have anything in mind just
                  <br className="d-none d-md-block" />
                  contact with our expert
                </p>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="col-12 col-lg-4">
              <div className="cta-buttons">

                <button className="cta-button">
                  <span>SUBMIT AN ENQUIRY</span>
                  <ArrowRight size={25} />
                </button>

                <button className="cta-button">
                  <span>CONTACT US</span>
                  <ArrowRight size={25} />
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>





      <footer className="bg-black text-white">

        {/* ================= TOP INFO ROW ================= */}
        <div className="container-fluid border-bottom border-secondary border-opacity-25">

          <div className="row py-4 align-items-center">

            {/* PHONE */}
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-md-center gap-3 mb-3 mb-md-0 px-4">

              <i
                className="bi bi-telephone"
                style={{ color: "#d4af37", fontSize: "26px" }}
              ></i>

              <a
                href="tel:+966546865628"
                className="text-white text-decoration-none fw-bold fs-5"
              >
                +966546865628
              </a>

            </div>


            {/* DIVIDER */}
            <div className="d-none d-md-block col-md-auto p-0">

              <div
                style={{
                  width: "1px",
                  height: "70px",
                  background: "rgba(212,175,55,0.4)",
                }}
              ></div>

            </div>


            {/* EMAIL */}
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-md-center gap-3 mb-3 mb-md-0 px-4">

              <i
                className="bi bi-envelope"
                style={{ color: "#d4af37", fontSize: "26px" }}
              ></i>

              <a
                href="mailto:info@fastreachglobal.com"
                className="text-white text-decoration-none fw-bold fs-5"
              >
                info@fastreachglobal.com
              </a>

            </div>


            {/* DIVIDER */}
            <div className="d-none d-md-block col-md-auto p-0">

              <div
                style={{
                  width: "1px",
                  height: "70px",
                  background: "rgba(212,175,55,0.4)",
                }}
              ></div>

            </div>


            {/* ADDRESS */}
            <div className="col-12 col-md d-flex align-items-start justify-content-md-center gap-3 px-4">

              <i
                className="bi bi-geo-alt"
                style={{
                  color: "#d4af37",
                  fontSize: "26px",
                  marginTop: "3px",
                }}
              ></i>

              <span className="fw-bold fs-5 lh-sm">
                Building No. 3922, Street 4, Al Iskan District, Riyadh,
                Kindom of Saudia Arabia.
              </span>

            </div>

          </div>

        </div>


        {/* ================= MIDDLE MENU ROW ================= */}

        <div className="border-bottom border-secondary border-opacity-25">

          <nav className="d-flex flex-wrap justify-content-center gap-4 gap-md-5 py-4">

            <Link
              href="/"
              className="text-white text-decoration-none fw-semibold"
            >
              HOME
            </Link>

            <Link
              href="/about"
              className="text-white text-decoration-none fw-semibold"
            >
              ABOUT US
            </Link>

            <Link
              href="/expertise"
              className="text-white text-decoration-none fw-semibold"
            >
              OUR EXPERTIES
            </Link>

            <Link
              href="/testimonial"
              className="text-white text-decoration-none fw-semibold"
            >
              TESTIMONIALS
            </Link>

          </nav>

        </div>


        {/* ================= BOTTOM ROW ================= */}

        <div className="container-fluid position-relative">

          <div className="row py-4 align-items-center">

            {/* COPYRIGHT */}
            <div className="col-12 col-md-6 text-center text-md-start px-4 mb-3 mb-md-0">

              <span className="opacity-75">
                Copyrights 2025 &copy; Fast Reach Global, Designed and
                Developed by Swismax Solutions FZE
              </span>

            </div>


            {/* SOCIAL ICONS */}
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center gap-3 px-4">

              {/* INSTAGRAM */}
              <a
                href="#"
                className="d-flex align-items-center justify-content-center rounded-circle border border-white text-white"
                style={{
                  width: "36px",
                  height: "36px",
                  fontSize: "16px",
                }}
              >
                <i className="bi bi-instagram"></i>
              </a>


              {/* WHATSAPP */}
              <a
                href="#"
                className="d-flex align-items-center justify-content-center rounded-circle border border-white text-white"
                style={{
                  width: "36px",
                  height: "36px",
                  fontSize: "16px",
                }}
              >
                <i className="bi bi-whatsapp"></i>
              </a>


              {/* FACEBOOK */}
              <a
                href="#"
                className="d-flex align-items-center justify-content-center rounded-circle border border-white text-white"
                style={{
                  width: "16px",
                  height: "16px",
                  fontSize: "10px",
                }}
              >
                <i className="bi bi-facebook"></i>
              </a>

            </div>

          </div>

        </div>

      </footer>
    </>
  );
}