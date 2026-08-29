"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


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
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h3 className=" text-content mb-0 pt-5 ps-4">
                Want To Chat? Feel Free
                <h3 className="d-block text-content ">To Contact Our Team</h3>
              </h3>
              <p className="if-text ps-4">If you have anything in mind just contact with our exper</p>
            </div>


            <div className="col-sm-12 col-md-6 col-lg-6 btns mt-5">
              <button className="subtext mb-4">Submit In Enquiry  </button>
              {/* <button className="subtext">Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>






      <footer className="main-footer">

        {/* Contact Section */}
        <div className="footer-contact">
          <div className="container-fluid">
            <div className="row align-items-center">

              {/* Phone */}
              <div className="col-12 col-md-4 footer-item">
                <Phone className="footer-icon" size={55} strokeWidth={1.5} />

                <span>+966546865628</span>
              </div>

              {/* Email */}
              <div className="col-12 col-md-4 footer-item">
                <Mail className="footer-icon" size={55} strokeWidth={1.5} />

                <span>info@fastreachglobal.com</span>
              </div>

              {/* Address */}
              <div className="col-12 col-md-4 footer-item address-item">
                <MapPin className="footer-icon" size={55} strokeWidth={1.5} />

                <span>
                  Building No. 3922, Street 4, Al Iskan District,
                  Riyadh, Kingdom of Saudia Arabia.
                </span>
              </div>

            </div>
          </div>
        </div>


        {/* Navigation */}
        <div className="footer-nav">
          <div className="container">
            <div className="footer-links">

              <a href="/">HOME</a>
              <a href="/about">ABOUT US</a>
              <a href="/expertise">OUR EXPERTIES</a>
              <a href="/testimonials">TESTIMONIALS</a>

            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="footer-bottom">
          <div className="container-fluid">

            <div className="row align-items-center">

              <div className="col-md-8">
                <p className="copyright">
                  Copyrights 2025 © Fast Reach Global, Designed and
                  Developed by Swismax Solutions FZE
                </p>
              </div>

              <div className="social-icons">

                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#">
                  <i className="bi bi-whatsapp"></i>
                </a>

                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>

              </div>

            </div>

          </div>
        </div>


        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/966546865628"
          className="whatsapp-btn"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={38} />
        </a>

      </footer>
      <h1>Hello</h1>
    </>
  );
}