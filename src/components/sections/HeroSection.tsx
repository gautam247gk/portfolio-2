"use client";
import { motion } from "motion/react";
import { HeroHighlight } from "../ui/hero-highlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <div className="h-dvh relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-6xl px-4 md:text-6xl lg:text-8xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        {
          <>
            <TextGenerateEffect
              words="Hello I'm Gautam Krishnan"
              className=""
              duration={1}
            />
          </>
        }
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mt-6 text-lg z-20 md:text-xl max-w-2xl text-center text-white px-4"
      >
        I&apos;m a software engineer with a passion for building scalable
        applications and exploring new technologies. Learn more about me below.
      </motion.p>
    </div>
  );
}
