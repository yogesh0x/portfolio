import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Security Services",

  description:
    "Web application security testing, API security testing, vulnerability assessment, and penetration testing services.",

  openGraph: {
    title: "Security Services | Yogesh Kumar",

    description:
      "Focused security assessment services for web applications and APIs.",
  },
};


export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}