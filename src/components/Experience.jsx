import React from "react";

const experience = [
  {
    role: "Fullstack Developer",
    company: "Cortexn Technologies Pvt. Ltd.",
    duration: "Jan 2024 - Present",
    description:
      "Leading frontend development for a cutting‑edge SaaS platform using React and TypeScript. Collaborating with cross‑functional teams to design and implement user‑centric features that enhance engagement and retention. Optimizing performance and accessibility while maintaining a consistent brand experience across devices. Mentoring junior developers and contributing to code reviews to uphold high standards of quality and maintainability.",
  },
  {
    role: "Software Engineer Intern",
    company: "Virtua Technologies Pvt. Ltd.",
    duration: "March 2023 - Aug 2023",
    description:
      "Developed landing pages, portfolio sites, and small web apps using HTML, CSS, JavaScript, and Bootstrap. Focused on performance optimization, responsive layouts, and mobile‑first design principles to ensure accessibility across devices. Collaborated with senior developers to refine UI components and integrate interactive features. Assisted in debugging and improving usability while maintaining consistency with brand guidelines. Gained hands‑on experience with version control (Git) and agile development practices, contributing to sprint deliverables.",
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
