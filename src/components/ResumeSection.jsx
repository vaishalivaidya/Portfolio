import React from "react";

const ResumeSection = () => {
  return (
    <section id="resume" className="reveal-section py-5 bg-dark-2">
      <div className="container text-center">
        <h2 className="section-title mb-4">Resume</h2>
        <p className="section-subtitle mb-4 text-muted-hero">
          Download my latest resume to get a detailed view of my experience,
          skills, and projects.
        </p>
        <a
          href="../assets/Vaishali_Resume"
          className="btn btn-info btn-lg btn-glow d-inline-flex align-items-center gap-2"
          download
        >
          <i className="bi bi-download" />
          <span>Download Resume</span>
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;
