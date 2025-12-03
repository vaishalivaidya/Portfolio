import React from "react";

const skills = [
  { name: "HTML", rating: 5 },
  { name: "CSS", rating: 5 },
  { name: "JavaScript", rating: 5 },
  { name: "React", rating: 5 },
  { name: "React Native", rating: 4 },
  { name: "React Router", rating: 4 },
  { name: "Redux", rating: 4 },
  { name: "Next.js", rating: 4 },
  { name: "Three.js", rating: 3 },
  { name: "TypeScript", rating: 4 },
  { name: "Tailwind CSS", rating: 4 },
  { name: "Bootstrap", rating: 5 },
  { name: "Git & GitHub", rating: 5 },
  { name: "Responsive Design", rating: 5 },
  { name: "REST APIs", rating: 4 },
  { name: "Aws lambda", rating: 3 },
];

const Skills = () => {
  return (
    <section id="skills" className="reveal-section py-5 bg-dark-3">
      <div className="container">
        <h2 className="section-title text-center mb-4">Skills</h2>
        <p className="section-subtitle text-center mb-5 text-muted-hero">
          Technologies and tools I use to build modern web applications.
        </p>
        <div className="row g-4">
          {skills.map((skill) => (
            <div className="col-6 col-md-4 col-lg-3" key={skill.name}>
              <div className="card skill-card card-hover h-100 border-0 text-center">
                <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title mb-2">{skill.name}</h5>

                  {/* ⭐ Star Rating */}
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`star ${i < skill.rating ? "filled" : ""}`}
                      >
                        ★
                      </span>
                    ))}
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

export default Skills;
