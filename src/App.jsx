import React, { useCallback, useState } from "react";
// import PortfolioNavbar from "./components/Navbar";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useSectionObserver from "./hooks/useSectionObserver";
import Education from "./components/Education";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section.reveal-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveSection(id);
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <div className="app bg-deep-dark text-light">
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      <main className="pt-5">
        <Hero
          onViewProjects={() => scrollToSection("projects")}
          onDownloadResume={() => scrollToSection("resume")}
        />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
