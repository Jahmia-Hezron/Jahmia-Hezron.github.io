import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/pages.scss";
import "../styles/components.scss";
import PageNavButton from "@/components/pageNavigator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hezron Jahmia Presci | IT Specialist & Software Engineer in Kampala",
  description:
    "I’m Hezron Jahmia, an IT specialist & fullstack software engineer based in Kampala, Uganda. I build clean, practical, and maintainable digital solutions using Flutter, Golang, React, Docker, and Kubernetes.",
  keywords: [
    "Hezron Jahmia",
    "Presci",
    "Hezron Jahmia Presci",
    "Hezron",
    "IT Specialist Uganda",
    "Software Engineer Kampala",
    "Fullstack Developer Uganda",
    "Flutter Developer",
    "Golang Developer",
    "React Developer",
    "Docker Kubernetes Engineer",
    "Tech Portfolio",
    "Ugandan Software Developer",
    "Clean Code",
    "Multimedia Designer Uganda",
  ],
  authors: [{ name: "Hezron Jahmia", url: "https://hezron-jahmia-presci.github.io/" }],
  creator: "Hezron Jahmia",
  publisher: "Hezron Jahmia",
  metadataBase: new URL("https://hezron-jahmia-presci.github.io/"),

  openGraph: {
    title: "Hezron Jahmia | Software Engineer & IT Specialist",
    description:
      "Explore the work of Hezron Jahmia, an IT Specialist & fullstack software engineer from Kampala specializing in Flutter, React, Golang, and scalable backend systems.",
    url: "https://hezron-jahmia-presci.github.io/",
    siteName: "Hezron Jahmia Portfolio",
    locale: "en_UG",
    type: "website",
    images: [
      {
        url: "https://hezron-jahmia-presci.github.io/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Hezron Jahmia Presci Portfolio Screenshot",
      },
    ],
  },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "Hezron Jahmia | Fullstack Software Engineer",
  //   description:
  //     "IT specialist & Fullstack developer based in Kampala. Building digital systems using Flutter, React, Golang, and Kubernetes.",
  //   creator: "@hezron_jahmia", // Replace with actual handle if available
  //   images: ["https://hezron-jahmia-presci.github.io/images/og-banner.jpg"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hezron Jahmia | IT Specialist & Fullstack Software Engineer" />
        <meta property="og:description" content="IT specialist & Fullstack developer based in Kampala. Building digital systems using Flutter, React, Golang, and Kubernetes." />
        <meta property="og:image" content="https://hezron-jahmia-presci.github.io/images/og-banner.jpg" />
        <meta property="og:url" content="https://hezron-jahmia-presci.github.io" />

        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <PageNavButton />
      </body>
    </html>
  );
}
