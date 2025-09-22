"use client";

import { AboutMe } from "@/components/sections/AboutMe";
import { HeroSection } from "@/components/sections/HeroSection";
import NavbarSection from "@/components/sections/NavbarSection";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className={`relative w-full  bg-slate-900`}>
      <NavbarSection />
      <div id="home" className="px-6 ">
        <HeroSection />
      </div>

      <div id="about">
        <AboutMe />
      </div>
      <div id="projects" className="bg-slate-900 mt-20 px-6 ">
        <Projects />
      </div>
      <div id="experience" className="mt-20 px-6 ">
        <Experience />
      </div>
      <div id="contact" className="bg-slate-900 mt-20 px-6 ">
        <Contact />
      </div>
    </div>
  );
}
