'use cline'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <>


      <div className="container-fluid About-hero-section">
        <div className="row">
          <h1 className='About-text'>About US</h1>
        </div>
      </div>



      {/* About second container */}
      <div className="container-fluid" style={{ marginTop: '100px' }}>
        <div className="row m-2">
          <div className='col-sm-12 col-md-6 col-lg-6'>

            <Image src='/logo.png'
              width={300}
              height={300}
              alt='pic'
              className=' logoo img-fluid'
            />
          </div>

          <div className='col-sm-12  col-md-6 col-lg-6'>
            <h3 className='about-text'>About  <span style={{ color: 'goldenrod' }}>Us</span>  </h3>
            <p className='p-text'>
              Fast Reach Global is a multidisciplinary Trading & Contracting company delivering end-to-end solutions across a wide range of construction and infrastructure projects. We act as a one-stop service provider for healthcare facilities, office buildings, hotels, educational institutions, commercial developments, IT projects, housing, and large-scale infrastructure works. From initial concept and design through procurement, construction, commissioning, testing, and operational stabilization, we ensure seamless project execution at every stage.
            </p>

            <p className='p-text'>
              Backed by strong financial capacity and advanced technical expertise, Fast Reach Global is fully equipped to manage projects of all sizes across the Kingdom. Our experienced technical team has successfully executed numerous projects for key government entities including the Ministries of Health, Education, Higher Education, Defense, Interior, Culture & Information, as well as major private sector developments. This extensive exposure allows us to meet complex project demands while maintaining strict compliance with international and national standards.
            </p>

            <p className='p-text'>
              Our strength lies in our people, processes, and resources. We employ a highly skilled workforce comprising design and planning engineers, AutoCAD specialists, site engineers, supervisors, technicians, and certified tradesmen across mechanical, electrical, plumbing, HVAC, firefighting, and low-current systems. With our in-house duct fabrication workshop operating in accordance with SMACNA standards and a full range of tools, equipment, and instruments, we deliver precision, quality, and reliability on every project.
            </p>
          </div>
        </div>
      </div>




      <section>
        <div className="container-fluid sixth-container">
          <div className="row text-center">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <h2 className=" text-content mb-0 pt-5 ps-4">
                Want To Chat ? Feel Free To Contact Our Team
              </h2>
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
  )
}







export default page