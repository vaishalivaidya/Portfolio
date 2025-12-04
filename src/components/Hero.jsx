import React from "react";
import Hero3D from "./Hero3D";

const Hero = ({ onViewProjects, onDownloadResume }) => {
  return (
    <section
      id="home"
      className="reveal-section hero-section d-flex align-items-center min-vh-100 text-light"
    >
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* LEFT TEXT SIDE */}
          <div className="col-12 col-md-7 text-center text-md-start">
            {/* <p className="text-uppercase small text-info mb-2 fw-semibold letter-spacing">
              Frontend • React • UI
            </p> */}
            <p className="hero-badge text-secondary small letter-spacing mb-2 fw-semibold text-uppercase textcolor-white">
              MERN Stack Developer • REACT • UI
            </p>

            <h1 className="display-5 fw-bold mb-3 hero-title">
              Hi, I&apos;m{" "}
              <span className="text-gradient">Vaishali Vaidya</span>
            </h1>

            <h2 className="h5 text-muted-hero mb-3">
              Frontend / React Developer
            </h2>

            <p className="lead text-muted-hero mb-4">
              I build modern, responsive, and user-focused web experiences using
              React, JavaScript, and Bootstrap. I love turning creative ideas
              into beautiful interfaces that are fast, accessible, and easy to
              use. I enjoy solving UI challenges, writing clean code, and
              continuously learning new tools to improve user experience.
              Passionate about frontend innovation, teamwork, and delivering
              products that make a real impact.
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <button
                className="btn btn-info px-4 py-2 btn-glow"
                onClick={onViewProjects}
              >
                View Projects
              </button>

              <button
                className="btn btn-outline-light px-4 py-2 btn-soft"
                onClick={onDownloadResume}
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* RIGHT 3D SIDE */}
          <div className="col-12 col-md-5 d-flex justify-content-center mt-4 mt-md-0">
            <Hero3D primary="#00cfff" secondary="#a855ff" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
