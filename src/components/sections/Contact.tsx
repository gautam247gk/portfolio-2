"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Looking to get in touch?".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal  dark:text-white"
        >
          Dont be afraid to say hi! Whether you have a question about my
          projects, want to collaborate, or just want to connect, my inbox is
          always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {/* LinkedIn */}
          <motion.a
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.25 }}
            href="https://www.linkedin.com/in/gautam247gk/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-56 transform rounded-lg bg-[#0077B5] px-6 py-2 flex gap-4 items-center justify-center text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#005582]"
          >
            <Linkedin />
            LinkedIn
          </motion.a>

          {/* Email (mailto) */}
          <motion.a
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.25 }}
            href="mailto:gautam247gk@gmail.com"
            className="w-56 transform rounded-lg bg-[#fffffeef] px-6 py-2 flex gap-4 items-center justify-center text-center font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-400"
          >
            <Mail />
            Email
          </motion.a>

          {/* GitHub */}
          <motion.a
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.25 }}
            href="https://github.com/gautam247gk"
            target="_blank"
            rel="noopener noreferrer"
            className="w-56 transform rounded-lg bg-[#181717] px-6 py-2 flex gap-4 items-center justify-center border border-white text-center font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#212121]"
          >
            <Github />
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
