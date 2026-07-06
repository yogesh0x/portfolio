import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import FooterWrapper from "@/components/FooterWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yogesh Kumar | Bug Bounty Hunter & Security Researcher",
    template: "%s | Yogesh Kumar",
  },

  description:
    "Portfolio of Yogesh Kumar, a bug bounty hunter and cybersecurity researcher focused on web application security, API security testing, vulnerability assessment, and penetration testing.",

  keywords: [
    "Yogesh Kumar",
    "Bug Bounty Hunter",
    "Cybersecurity Researcher",
    "Web Application Security",
    "API Security",
    "Penetration Testing",
    "Vulnerability Assessment",
    "VAPT",
  ],

  authors: [
    {
      name: "Yogesh Kumar",
    },
  ],

  creator: "Yogesh Kumar",

  openGraph: {
    title: "Yogesh Kumar | Bug Bounty Hunter & Security Researcher",

    description:
      "Bug bounty hunter and cybersecurity researcher focused on web application security, API security, vulnerability assessment, and penetration testing.",

    type: "website",

    locale: "en_IN",

    siteName: "Yogesh Kumar Portfolio",
  },

  twitter: {
    card: "summary_large_image",

    title: "Yogesh Kumar | Bug Bounty Hunter & Security Researcher",

    description:
      "Bug bounty hunter and cybersecurity researcher focused on web and API security testing.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black text-white">

        <Navbar />

        {/* 
          Navbar is fixed and h-20 = 80px.
          pt-20 reserves navbar space for every page.
        */}

        <div className="flex-1 pt-20">
          {children}
        </div>

        <FooterWrapper />

      </body>
    </html>
  );
}