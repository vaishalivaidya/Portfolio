import React from "react";

const experience = [
  {
    role: "Fullstack Developer",
    company: "Cognizant",
    duration: "May 2025 - Present",
    description:
      "Leading frontend development for a cutting‑edge SaaS platform using React and TypeScript. Collaborating with cross‑functional teams to design and implement user‑centric features that enhance engagement and retention. Optimizing performance and accessibility while maintaining a consistent brand experience across devices. Mentoring junior developers and contributing to code reviews to uphold high standards of quality and maintainability.",

  },

  {
    role: "Fullstack Developer",
    company: "Capgemini",
    duration: "Jan 2023 - March 2025",
    description:
      "Building responsive React applications with reusable UI components and smooth REST API integrations.Collaborating with designers and backend teams to deliver user‑friendly, scalable solutions.Ensuring performance, accessibility, and maintainability through modern frontend practices and code reviews.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="reveal-section py-5 bg-dark-2">
      <div className="container">
        <h2 className="section-title text-center mb-4">Experience</h2>
        <p className="section-subtitle text-center mb-5 text-muted-hero">
          A quick look at my professional and learning journey so far.
        </p>

        <div className="timeline">
          {experience.map((item, index) => (
            <div
              className="timeline-item card bg-dark border-0 mb-4 card-hover"
              key={index}
            >
              <div className="card-body">
                <h5 className="card-title mb-1">{item.role}</h5>
                <h6 className="card-subtitle mb-2 text-info">{item.company}</h6>
                <p className="small text-white mb-2">{item.duration}</p>
                <p className="card-text text-muted-hero">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
