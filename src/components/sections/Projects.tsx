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
      <div className="mx-auto my-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
        <span>
          *Some of these projects may be marked to private in the future and the
          links may not work, please get in touch if you would like to know
          more.
        </span>
      </div>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br  from-blue-950 via-slate-900 to-gray-900"></div>
);
const items = [
  {
    title: "Socket Io Admin UI",
    description:
      "An admin dashboard for managing Socket.io servers, based on the Socket.io module @socket.io/admin-ui.",
    header: (
      <Image
        src="/dashboard.png"
        alt="Socket.io Admin UI"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover "
        width={600}
        height={400}
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    url: "https://gautam247gk.github.io/socket.io-admin-ui/",
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
        width={600}
        height={400}
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
        width={600}
        height={400}
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    url: "https://rockbell.vercel.app/",
  },
  {
    title: "Relay Beacon",
    description:
      "Relay Beacon is a mass communication tool that provides real-time notifications and updates to desktop users in an organization through WebSockets, built with Node.js, Express, Electron and Socket.io.",
    header: (
      <Image
        src="/relayBeacon.png"
        alt="Relay Beacon"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover "
        width={2160}
        height={1080}
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    url: "https://github.com/gautam247gk/relay-beacon",
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
        width={600}
        height={4200}
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
        width={600}
        height={400}
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover "
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    url: "https://gautam247gk.github.io/weather/",
  },
  {
    title: "Away Day Planner (WinForms + .NET)",
    description:
      "Built a secure desktop app using C# WinForms, 3-tier architecture, AES encryption, and Entity Framework ORM. Stored data in LocalDB and applied MVP pattern for scalable code.",
    header: (
      <Image
        src="/ADP.png"
        alt="Relay Beacon"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover "
        width={2160}
        height={1080}
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
