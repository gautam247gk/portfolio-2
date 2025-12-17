"use client";
import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "Nov 2025 - Present",
      content: (
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col mb-6 md:flex-row md:items-start md:justify-between w-full gap-6">
            <div className="flex-1 justify-around">
              <h2 className="mb-4 text-5xl font-normal text-neutral-800 dark:text-neutral-200">
                Senior Analyst Developer
              </h2>
              <h3 className="mb-2 text-2xl font-normal text-neutral-800 dark:text-neutral-200">
                University of Huddersfield, Huddersfield, UK
              </h3>
            </div>
            <div className="flex-shrink-0 ">
              <Image
                src="https://www.hud.ac.uk/media/assets/document/corporateidentity/HUD_Logo_White.svg"
                alt="logo"
                width={300}
                height={100}
                className="w-56 h-auto object-contain"
              />
            </div>
          </div>
          <p className="mb-6 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            As a Senior Analyst Developer, I design and deliver advanced technical
            solutions to support institutional operations. My role focuses on
            analyzing complex business requirements, architecting scalable systems,
            and implementing enterprise software solutions across the university.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <li>
              Analyze business requirements and translate them into technical
              specifications for enterprise-grade applications.
            </li>
            <li>
              Design and develop solutions to integrate university systems and
              streamline operational workflows.
            </li>
            <li>
              Collaborate with stakeholders across departments to identify
              opportunities for digital transformation and process improvement.
            </li>
            <li>
              Provide technical leadership and guidance on software development
              best practices and architectural decisions.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Jan 2024 - Present",
      content: (
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col mb-6 md:flex-row md:items-start md:justify-between w-full gap-6">
            <div className="flex-1 justify-around">
              <h2 className="mb-4 text-5xl font-normal text-neutral-800 dark:text-neutral-200">
                Software Developer
              </h2>
              <h3 className="mb-2 text-2xl font-normal text-neutral-800 dark:text-neutral-200">
                Northumbria University, Newcastle Upon Tyne, UK
              </h3>
            </div>
            <div className="flex-shrink-0 ">
              <Image
                src="https://www.northumbria.ac.uk/common/images/NU_Logo_White.svg"
                alt="logo"
                width={300}
                height={100}
                className="w-56 h-auto  object-contain"
              />
            </div>
          </div>
          <p className="mb-6 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            In my current role, I build and maintain enterprise-grade
            applications and data integration pipelines. My work involves
            replacing legacy systems with modern, cost-effective solutions and
            developing scalable backend services to connect critical university
            platforms like Oracle, Worktribe, and Azure Active Directory.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <li>
              Replaced a legacy system with a custom Electron.js and React
              communication tool for over 20,000 users, saving the university
              £30K+ annually.
            </li>
            <li>
              Engineered complex data integration pipelines using Azure Data
              Factory and TypeScript-based Azure Functions to automate data
              flows between key enterprise systems.
            </li>
            <li>
              Developed secure and scalable backend services using Node.js,
              GraphQL, and TypeScript to bridge modern cloud platforms with
              legacy Oracle systems.
            </li>
            <li>
              Designed and deployed responsive internal portals using React.js,
              Next.js (App Router), and Tailwind CSS.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Apr 2023 – Jun 2023",
      content: (
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col mb-6 md:flex-row md:items-start md:justify-between w-full gap-6">
            <div className="flex-1 justify-around">
              <h2 className="mb-4 text-5xl font-normal text-neutral-800 dark:text-neutral-200">
                Developer
              </h2>
              <h3 className="mb-2 text-2xl font-normal text-neutral-800 dark:text-neutral-200">
                NU Opportunities, Northumbria University Newcastle Upon Tyne, UK
              </h3>
            </div>
            <div className="flex-shrink-0 ">
              <Image
                src="https://www.northumbria.ac.uk/common/images/NU_Logo_White.svg"
                alt="logo"
                width={300}
                height={100}
                className="w-56 h-auto object-contain"
              />
            </div>
          </div>
          <p className="mb-6 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            During this short-term project, I developed a proof-of-concept for a
            progressive sales dashboard. The primary focus was on creating an
            engaging user experience by integrating gamification elements and
            building on a modern, scalable tech stack.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <li>
              Developed a dynamic sales dashboard prototype with a responsive
              React.js frontend.
            </li>
            <li>
              Integrated gamification features and connected the frontend to
              RESTful APIs built with Node.js and Express.js, hosted on Azure.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: " Mar 2022 – Aug 2022",
      content: (
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col mb-6 md:flex-row md:items-start md:justify-between w-full gap-6">
            <div className="flex-1 justify-around">
              <h2 className="mb-4 text-5xl font-normal text-neutral-800 dark:text-neutral-200">
                Software Developer - Team Lead
              </h2>
              <h3 className="mb-2 text-2xl font-normal text-neutral-800 dark:text-neutral-200">
                Bibox Labs, Bangalore, India
              </h3>
            </div>
            <div className="flex-shrink-0 ">
              <Image
                src="/evobi-logo.jpg"
                alt="logo"
                width={144}
                height={48}
                className="w-24 md:w-36 h-auto mt-2 object-contain"
              />
            </div>
          </div>
          <p className="mb-6 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            In this role, I took on more leadership responsibilities, including
            project ownership and team guidance. My focus was on optimizing
            infrastructure, improving application performance, and enforcing
            best practices like TDD to streamline development cycles.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <li>
              Led a cross-functional team to optimize backend systems and
              infrastructure, successfully reducing GCP costs by 25%.
            </li>
            <li>
              Drove the transition of projects from React.js to Next.js,
              improving SEO and reducing page load times.
            </li>
            <li>
              Enforced Test-Driven Development (TDD) using Jest, Chai, and Mocha
              within an Agile workflow, cutting release cycles by 15%.
            </li>
            <li>
              Achieved a 70% reduction in deployment size and a 20% increase in
              load times by redesigning routing with Nginx and optimizing
              applications.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: " Jul 2021 – Feb 2022",
      content: (
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col mb-6 md:flex-row md:items-start md:justify-between w-full gap-6">
            <div className="flex-1 justify-around">
              <h2 className="mb-4 text-5xl font-normal text-neutral-800 dark:text-neutral-200">
                Software Developer
              </h2>
              <h3 className="mb-2 text-2xl font-normal text-neutral-800 dark:text-neutral-200">
                Bibox Labs, Bangalore, India
              </h3>
            </div>
            <div className="flex-shrink-0 ">
              <Image
                src="/evobi-logo.jpg"
                alt="logo"
                width={144}
                height={48}
                className="w-24 md:w-36 h-auto mt-2 object-contain"
              />
            </div>
          </div>

          <p className="mb-6 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            As a full-stack developer, I was responsible for building both the
            backend services and frontend components for web and IoT-powered
            educational tools. This role involved creating responsive user
            interfaces and developing robust APIs for real-time communication.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <li>
              Designed and developed backend services and REST APIs in Node.js
              with MongoDB to support web and mobile interfaces.
            </li>
            <li>
              Built WebSocket services to enable real-time communication for
              IoT-powered educational tools.
            </li>
            <li>
              Developed responsive frontends using React.js and Tailwind, and
              later migrated projects to Next.js for server-side rendering
              (SSR).
            </li>
            <li>
              Maintained high code quality and consistency across projects using
              ESLint, Prettier, and unit testing practices.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
