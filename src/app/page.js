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

              <p>
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







      <section className="hero-wrapper">
        <div className="row g-0 min-vh-100">
          {/* Left: Image */}
          <div className="col-lg-6 position-relative hero-image-col">
            <Image
              src="/constration.avif" // place your image in the /public folder
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
              {/* Eyebrow */}
              <div className="d-flex align-items-center mb-3">
                <span className="eyebrow-line" />
                <span className="eyebrow-text">TRADING &amp; CONTRACTING</span>
              </div>

              {/* Heading */}
              <h1 className="hero-heading mb-4">
                Welcome To <span className="text-accent">Fast</span> Reach
                Global
              </h1>

              {/* Body copy */}
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


              {/* CTA Button */}
              <a href="#read-more" className="btn hero-btn d-inline-flex align-items-center hero-btn">
                READ MORE
                <ArrowRight size={18} className="ms-2" />
              </a>

            </div>
          </div>
        </div>
      </section>



      <section>
        <div className="container-fluid">
          <div className="row m-3 gap-3">
            <h1 className="text-center pt-5 services-text">Our Expertise</h1>
            <p className="text-center lorem pb-0">Lorem, ipsum dolor sit amet consectet         uradipisicing elit. Explicabo
              <p className="d-block"> omnis hic aliquam sapiente possimus totam iste
                perspiciatis necessitatibus repellendus reprehenderit
              </p>
            </p>
            <div className="col-sm-12 col-md-3 col-lg pic-box">
              <Image className="image"
                src="/First-pic.jpg"
                width={300}
                height={300}
                alt="pic"

                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "450px",
                  display: "block"
                }}
              />

              <div className="pic-content">
                <h6>General Contracting</h6>
                <button ><ArrowRight size={20} /></button>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg pic-box">

              <Image
                src="/civil2.jpg"
                width={300}
                height={300}
                alt="pic"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "450px",
                  display: "block"
                }}
              />

              <div className="pic-content">
                <h6>FAADE & EXTERNEL WORKS</h6>
                <button><ArrowRight size={20} /></button>
              </div>


            </div>
            <div className="col-sm-12 col-md-3 col-lg pic-box">
              <Image
                src="/civil3.jpg"
                width={300}
                height={300}
                alt="pic"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "450px",
                  display: "block"
                }}
              />

              <div className="pic-content">
                <h6>FREFIGHTING & LIFE SAFITY SYSTEM</h6>
                <button><ArrowRight size={20} /></button>
              </div>


            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 pic-box">

              <Image
                src="/civil5.jpg"
                width={300}
                height={300}
                alt="pic"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "450px",
                  display: "block"
                }}
              />

              <div className="pic-content">
                <h6>OUR MECHANICAL EXPIRTIES </h6>
                <button><ArrowRight size={20} /></button>
              </div>

            </div>
          </div>
        </div>
      </section>





      <section>
        <div className="container-fluid">
          <div className="row m-3 gap-3">
            <div className="col-sm-12 col-md-3 col-lg pic-box">
              <Image
                src="/irgition-pic.jpg"
                width={300}
                height={300}
                alt="pic"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "450px",
                  display: "block"
                }}
              />

              <div className="pic-content">
                <h6>IRGITION SYSTEM</h6>
                <button ><ArrowRight size={20} /></button>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg pic-box">

              <Image
                src="/medical-gas.jpg"
                width={300}
                height={300}
                alt="pic"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "450px",
                  display: "block"
                }}
              />

              <div className="pic-content">
                <h6>MEDICAL GAS SYSTEM</h6>
                <button><ArrowRight size={20} /></button>
              </div>


            </div>
            <div className="col-sm-12 col-md-3 col-lg pic-box">
              <Image
                src="/Electrical-pic.jpg"
                width={300}
                height={300}
                alt="pic"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "450px",
                  display: "block"
                }}
              />

              <div className="pic-content">
                <h6>ELECTRIC SYSTEM</h6>
                <button><ArrowRight size={20} /></button>
              </div>


            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 pic-box">

              <Image
                src="/lowCurrent-pic.jpg"
                width={300}
                height={300}
                alt="pic"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "450px",
                  display: "block"
                }}
              />

              <div className="pic-content">
                <h6>LOW CURRENT </h6>
                <button><ArrowRight size={20} /></button>
              </div>

            </div>
          </div>
        </div>
      </section>






      <section>
        <div className="container-fluid sixth-container">
          <div className="row text-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h5 className=" text-content mb-0 pt-5 ps-4">
                Want To Chat? Feel Free To Contact Our Team
              </h5>
              <p className="if-text ">If you have anything in mind just contact with our exper</p>

              <button className="subtext mb-2">Submit In Enquiry  </button>
              <button className="subtext mb-2">Contact Us</button>
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
            width: "36px",
            height: "36px",
            fontSize: "16px",
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