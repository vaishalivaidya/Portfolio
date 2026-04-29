import React from "react";

const experience = [
  {
    role: "Fullstack Developer",
    company: "Matfly Solutions Pvt. Ltd.",
    duration: "June 2025 - Present",
    description:
      "Leading frontend development for a cutting‑edge SaaS platform using React and TypeScript. Collaborating with cross‑functional teams to design and implement user‑centric features that enhance engagement and retention. Optimizing performance and accessibility while maintaining a consistent brand experience across devices. Mentoring junior developers and contributing to code reviews to uphold high standards of quality and maintainability.",

  },
  {
    role: "Frontend Developer",
    company: "Priacc Innovation Pvt. Ltd.",
    duration: "April 2025 - May 2025",
    description:
      "Leading frontend development for a cutting‑edge SaaS platform using React and TypeScript. Collaborating with cross‑functional teams to design and implement user‑centric features that enhance engagement and retention. Optimizing performance and accessibility while maintaining a consistent brand experience across devices. Mentoring junior developers and contributing to code reviews to uphold high standards of quality and maintainability.",

  }
  ,
  {
    role: "Fullstack Developer",
    company: "Swift Solution Pvt. Ltd.",
    duration: "Sep 2023 - March 2025",
    description:
      "Building responsive React applications with reusable UI components and smooth REST API integrations.Collaborating with designers and backend teams to deliver user‑friendly, scalable solutions.Ensuring performance, accessibility, and maintainability through modern frontend practices and code reviews.",
  },
  {
    role: "Frontend Developer Intern",
    company: "Swift Solution Pvt. Ltd.",
    duration: "sep 2022 - Aug 2023",
    description:
      "Developed landing pages, portfolio sites, and small web apps using HTML, CSS, JavaScript, and Bootstrap. Focused on performance optimization, responsive layouts, and mobile‑first design principles to ensure accessibility across devices. Collaborated with senior developers to refine UI components and integrate interactive features. Assisted in debugging and improving usability while maintaining consistency with brand guidelines. Gained hands‑on experience with version control (Git) and agile development practices, contributing to sprint deliverables.",
  },
  {
    role: "Freelance Web Designer",
    company: "Self Employed",
    duration: "2022 - 2023",
    description:
      "Designed and developed simple websites for local businesses and personal brands, focusing on clean UI, color palettes, and branding. Built responsive layouts optimized for mobile devices and cross‑browser compatibility. Collaborated with clients to understand their vision, translate requirements into functional designs, and deliver tailored solutions. Implemented lightweight JavaScript interactions and Bootstrap components to enhance usability. Created visually consistent themes that strengthened brand identity and improved customer engagement. Managed end‑to‑end project delivery including design, development, testing, and deployment.",
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
