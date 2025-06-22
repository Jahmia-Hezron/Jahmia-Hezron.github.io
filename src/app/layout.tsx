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
    "I’m Hezron Jahmia, an IT specialist and fullstack software engineer based in Kampala, Uganda. I build clean, practical, and maintainable digital solutions using Flutter, Golang, React, Docker, and Kubernetes.",
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
  authors: [{ name: "Hezron Jahmia", url: "https://yourdomain.com" }],
  creator: "Hezron Jahmia",
  publisher: "Hezron Jahmia",
  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "Hezron Jahmia | Software Engineer & IT Specialist",
    description:
      "Explore the work of Hezron Jahmia, a fullstack software engineer from Kampala specializing in Flutter, React, Golang, and scalable backend systems.",
    url: "https://yourdomain.com",
    siteName: "Hezron Jahmia Portfolio",
    locale: "en_UG",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/images/og-banner.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Hezron Jahmia Portfolio Screenshot",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hezron Jahmia | Fullstack Software Engineer",
    description:
      "Fullstack developer & IT specialist based in Kampala. Building digital systems using Flutter, React, Golang, and Kubernetes.",
    creator: "@hezron_jahmia", // Replace with actual handle if available
    images: ["https://yourdomain.com/images/og-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
