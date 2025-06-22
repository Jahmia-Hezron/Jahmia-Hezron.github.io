import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./../styles/pages.scss";
import "../styles/components.scss";
import PageNavButton from "@/components/pageNavigator";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hezron Jahmia Presci | IT Specialist & Software Engineer in Kampala",

  description:
    "I’m Hezron Jahmia, an IT specialist & fullstack software engineer based in Kampala, Uganda. I build clean, practical, and maintainable digital solutions using Flutter, Golang, React, Docker, and Kubernetes.",

  keywords: [
    "Hezron Jahmia",
    "Presci",
    "IT Specialist Uganda",
    "Software Engineer Kampala",
    "Fullstack Developer Uganda",
    "Flutter Developer",
    "Golang Developer",
    "React Developer",
    "Docker Kubernetes Engineer",
  ],

  authors: [{ name: "Hezron Jahmia", url: "https://hezron-jahmia-presci.vercel.app/" }],

  creator: "Hezron Jahmia Presci",
  publisher: "Hezron Jahmia Presci",
  metadataBase: new URL("https://hezron-jahmia-presci.vercel.app/"),

  openGraph: {
    title: "Hezron Jahmia | Software Engineer & IT Specialist",
    description:
      "Explore the work of Hezron Jahmia, an IT Specialist & fullstack software engineer from Kampala specializing in Flutter, React, Golang, and scalable backend systems.",
    url: "https://hezron-jahmia-presci.vercel.app/",
    siteName: "Hezron Jahmia Portfolio",
    locale: "en_UG",
    type: "website",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Hezron Jahmia Presci Portfolio Screenshot",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hezron Jahmia | Fullstack Software Engineer",
    description:
      "IT specialist & Fullstack developer based in Kampala. Building digital systems using Flutter, React, Golang, and Kubernetes.",
    creator: "@hezron_jahmia", // Use your real handle if you have one
    images: ["/images/og-banner.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    google: "K3amrIFK1A992vvDXlo9dFt3cnmgw66nPT2jsMks2es",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable}`}>
        {children}
        <PageNavButton />
      </body>
    </html>
  );
}
