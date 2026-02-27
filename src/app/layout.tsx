import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://gautam247gk.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gautam Krishnan | Software Engineer & Developer",
    template: "%s | Gautam Krishnan",
  },
  description:
    "Portfolio of Gautam Krishnan — a software engineer specialising in React, Next.js, Node.js, TypeScript, and cloud technologies. Currently Senior Analyst Developer at the University of Huddersfield.",
  keywords: [
    "Gautam Krishnan",
    "software engineer",
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfolio",
    "UK developer",
  ],
  creator: "Gautam Krishnan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Gautam Krishnan | Portfolio",
    title: "Gautam Krishnan | Software Engineer & Developer",
    description:
      "Portfolio of Gautam Krishnan — a software engineer specialising in React, Next.js, Node.js, TypeScript, and cloud technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gautam Krishnan | Software Engineer & Developer",
    description:
      "Portfolio of Gautam Krishnan — a software engineer specialising in React, Next.js, Node.js, TypeScript, and cloud technologies.",
    creator: "@gautam247gk",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gautam Krishnan",
  url: siteUrl,
  jobTitle: "Senior Analyst Developer",
  worksFor: {
    "@type": "Organization",
    name: "University of Huddersfield",
  },
  sameAs: [
    "https://www.linkedin.com/in/gautam247gk/",
    "https://github.com/gautam247gk",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Azure",
    "Docker",
    "MongoDB",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark h-full bg-slate-900 font-sans scroll-smooth`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
