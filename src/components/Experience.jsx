import React from "react";

const experience = [
  {
    role: "Frontend Developer",
    company: "Delta 360 Services PVT LTD  ",
    duration: "Jan 2023 - Present",
    description:
      "Building responsive React applications with reusable UI components and smooth REST API integrations.Collaborating with designers and backend teams to deliver user‑friendly, scalable solutions.Ensuring performance, accessibility, and maintainability through modern frontend practices and code reviews.",
  },
  {
    role: "Web Developer Intern",
    company: "Delta 360 Services PVT LTD ",
    duration: "March 2023 - Aug 2023",
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
