import "app/globals.css";

import About from "@/pages/Components/About";
import Header from "@/pages/Components/Header";
import Hero from "@/pages/Components/Hero";
import WorkExperience from "@/pages/Components/WorkExperience";
import React from "react";
import Skills from "@/pages/Components/Skills";
import Projects from "@/pages/Components/Projects";
import ContactMe from "@/pages/Components/ContactMe";

function page() {
  return (
    <div className="bg-[rgb(63,63,63)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}

export default page;
