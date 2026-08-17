import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parthiban Aruchamy, PMP® — Program, Project Manager | Engineering Lead",
  description:
    "PMP®-certified Program/Project Manager with 14+ years leading subsea/offshore and ADAS/smart-glass R&D engineering programs across APAC, Europe, and the Middle East.",
  metadataBase: new URL("https://parthiban-aruchamy.vercel.app"),
  openGraph: {
    title: "Parthiban Aruchamy, PMP® — Program, Project Manager | Engineering Lead",
    description:
      "14+ years leading engineering and R&D programs across APAC, Europe, and the Middle East.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
