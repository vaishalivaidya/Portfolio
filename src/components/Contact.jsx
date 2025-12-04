import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields.");
      return;
    }
    console.log("Contact form submitted:", form);
    alert("Thank you! Your message has been logged in the console.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="reveal-section py-5 bg-dark-3">
      <div className="container">
        <h2 className="section-title text-center mb-4">Contact Me</h2>
        <p className="section-subtitle text-center mb-5 text-muted-hero">
          Have a project, idea, or just want to say hi? Drop a message!
        </p>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card bg-dark border-0 card-hover h-100">
              <div className="card-body">
                <h5 className="mb-3">Send a Message</h5>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-dark-2 border-0 text-light"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-dark-2 border-0 text-light"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      className="form-control bg-dark-2 border-0 text-light"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message"
                    />
                  </div>
                  <button type="submit" className="btn btn-info btn-glow">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-dark border-0 h-100 card-hover">
              <div className="card-body">
                <h5 className="mb-3">Contact Info</h5>
                <p className="text-muted-hero mb-2">
                  Email:{" "}
                  <a href="vaidya.vaishali2023@gmail.com" className="link-info">
                    vaidya.vaishali2023@gmail.com
                  </a>
                </p>
                <p className="text-muted-hero mb-2">
                  GitHub:{" "}
                  <a
                    href="https://github.com/vaishalivaidya/Portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="link-info"
                  >
                    vaishali vaidya Portfolio
                  </a>
                </p>
                <p className="text-muted-hero mb-2">
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/vaishali-vaidya-19b9a8207"
                    target="_blank"
                    rel="noreferrer"
                    className="link-info"
                  >
                    linkedin.com/in/vaishali-vaidya-19b9a8207
                  </a>
                </p>
                {/* <p className="text-muted-hero mt-4">
                  Update these links to your actual profiles so people can
                  easily connect with you.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
