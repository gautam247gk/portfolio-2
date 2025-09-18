"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function AboutMe() {
  return <HeroParallax products={skillLogos} />;
}

export const skillLogos = [
  {
    title: "React.js",
    link: "https://reactjs.org",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    title: "Tailwind CSS",
    link: "https://tailwindcss.com",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
  },

  {
    title: "HTML5",
    link: "https://developer.mozilla.org/docs/Web/Guide/HTML/HTML5",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    title: "JavaScript (ES6+)",
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    title: "Node.js",
    link: "https://nodejs.org",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Express.js",
    link: "https://expressjs.com",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    dark: true,
  },
  {
    title: "Socket.io",
    link: "https://socket.io",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
    dark: true,
  },
  {
    title: "Docker",
    link: "https://www.docker.com",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  {
    title: "Azure",
    link: "https://azure.microsoft.com",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
  },
  {
    title: "MongoDB",
    link: "https://www.mongodb.com",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },

  {
    title: "SQL Server",
    link: "https://www.microsoft.com/en-us/sql-server",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/azuresqldatabase/azuresqldatabase-plain.svg",
  },
  {
    title: "Git",
    link: "https://git-scm.com",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  },
  {
    title: "Visual Studio Code",
    link: "https://code.visualstudio.com",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
  },
  {
    title: "GraphQL",
    link: "https://graphql.org",
    thumbnail:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
  },
];
