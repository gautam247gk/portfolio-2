import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function Projects() {
  return (
    <>
      <div className="relative z-20 pt-10 pb-5 lg:pb-20 lg:pt-40 max-w-7xl mx-auto">
        <div className="px-8">
          <h1 className="text-2xl md:text-7xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-black dark:text-white">
            My Projects
          </h1>

          <p className="text-base md:text-xl  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            From backend systems to intuitive user interfaces, explore a
            selection of my work that showcases my skills and passion for
            technology.
          </p>
        </div>
      </div>

      <BentoGrid className="max-w-7xl mx-auto ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            url={item.url}
          />
        ))}
      </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br  from-blue-950 via-slate-900 to-gray-900"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Socket.io Azure Service Bus Emitter",
    description:
      "An emitter module that integrates with Socket.io and the Azure Service Bus adapter enabling other JavaScript applications to communicate with the Socket.io servers.",
    header: (
      <Image
        src="/npmjs-logo.png"
        alt="Socket.io Azure Service Bus Emitter"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover "
        width={300}
        height={200}
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    url: "https://www.npmjs.com/package/socket-io-azure-service-bus-emitter",
  },
  {
    title: "Rockbell Landing Page",
    description:
      "Landing page for Rockbell, a fictional company that runs an events platform.",
    header: (
      <Image
        src="/rockbell.png"
        alt="Rockbell Landing Page"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover "
        width={300}
        height={200}
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The LRU Cache",
    description:
      "An LRU cache library supporting O(1) set, get and eviction of old keys in TypeScript.",
    header: (
      <Image
        src="/npmjs-logo.png"
        alt="LRU Cache"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover "
        width={300}
        height={200}
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    url: "https://www.npmjs.com/package/smart-lru-ts",
  },
  {
    title: "The Weather App",
    description:
      "A simple React PWA that provides weather forecasts using the Open Weather API.",
    header: (
      <Image
        src="/weather.png"
        alt="Weather App"
        width={300}
        height={200}
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover "
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    url: "https://gautam247gk.github.io/weather/",
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
