import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Bootstrap to showcase my skills, experience, and projects.",
    tech: ["React", "Bootstrap", "CSS"],
    demo: "https://portfolio-vaishali-vaidya.vercel.app/",
    github: "https://github.com/vaishalivaidya/Portfolio",
  },
  {
    title: "Story App",
    description:
      "This is story App and here we can watch videoes and audio story too",
    tech: ["React", "JavaScript", "styesheet"],
    demo: "#",
    github: "https://github.com/vaishalivaidya/StoryApp.git",
  },
  {
    title: "Landing Page Design",
    description:
      "A responsive landing page for a fictional product with smooth scroll and animations.",
    tech: ["HTML", "CSS", "Bootstrap"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="reveal-section py-5 bg-dark-3">
      <div className="container">
        <h2 className="section-title text-center mb-4">Projects</h2>
        <p className="section-subtitle text-center mb-5 text-muted-hero">
          Some of the work I&apos;ve done — live demos and code repositories.
        </p>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card project-card card-hover h-100 border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-2">{project.title}</h5>
                  <p className="card-text text-muted-hero mb-3">
                    {project.description}
                  </p>
                  <div className="mb-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="badge bg-gradient me-2 mb-2 small"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto d-flex gap-2">
                    <a
                      href={project.demo}
                      className="btn btn-sm btn-info"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="btn btn-sm btn-outline-light"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
