import React from "react";

const education = [
  {
    degree: "B.Tech. in CSE",
    institute: "DBATU",
    grade: "8.7 CGPA",
    duration: "2020 - 2023",
    type: "Degree",
    description:
      "Learned core computer science concepts including data structures, algorithms, databases, and software engineering.",
  },
  {
    degree: "Frontend Development Course",
    institute: "Online / Naresh IT Institute",
    duration: "2023",
    type: "Certificate",
    description:
      "Focused on modern frontend development with HTML, CSS, JavaScript, React, and responsive UI patterns.",
  },
  {
    degree: "JavaScript & React Bootcamp",
    institute: "Bootcamp / Udemy",
    duration: "2023",
    type: "Bootcamp",
    description:
      "Built multiple projects using React, REST APIs, and Git. Practiced real-world workflows and clean code.",
  },
];

const Education = () => {
  return (
    <section id="education" className="reveal-section py-5 bg-dark-2">
      <div className="container">
        <h2 className="section-title text-center mb-4">Education</h2>
        <p className="section-subtitle text-center mb-5 text-muted-hero">
          My academic background and learning journey that support my work as a
          developer.
        </p>

        <div className="row g-4">
          {education.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card education-card h-100 border-0">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">{item.degree}</h5>
                    <span className="badge edu-badge small">{item.type}</span>
                  </div>

                  <h6 className="card-subtitle mb-1 text-info">
                    {item.institute}
                  </h6>

                  {/* Grade only for Degree */}
                  {item.grade && (
                    <p className="small text-gradient mb-2">{item.grade}</p>
                  )}

                  {/* Duration White */}
                  <p className="small text-white mb-1">{item.duration}</p>
                  <p className="card-text text-muted-hero mb-0">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
