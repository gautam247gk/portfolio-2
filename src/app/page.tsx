"use client";

import { AboutMe } from "@/components/sections/AboutMe";
import { HeroSection } from "@/components/sections/HeroSection";
import NavbarSection from "@/components/sections/NavbarSection";

export default function Home() {
  return (
    <div className="relative w-full">
      <NavbarSection />
      <div id="home" className="mt-[-56px]">
        <HeroSection />
      </div>

      <div id="about">
        <AboutMe />
      </div>
    </div>
  );
}
