"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function HeroSection() {
  return (
    <HeroHighlight>
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
        className="text-3xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        {
          <>
            <TextGenerateEffect
              words="Hello I'm Gautam Krishnan"
              className="text-5xl"
              duration={1}
            />
          </>
        }
      </motion.h1>
    </HeroHighlight>
  );
}
