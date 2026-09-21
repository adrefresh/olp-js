import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "OpsLogic — Let's Make Business Move",
    template: "%s",
  },
  description:
    "OpsLogic — Business Operations, IT, Hiring, Payroll, SAP & Shared Workspace solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/*
          Merged weight set covering both the home page's font link
          (Sora 400/500/600/700/800, Inter 400/500/600/700, Space Mono
          400/700) and every subpage's font link (Inter 400/600/700/800,
          Sora 600/700/800, Space Mono 700) — loaded once, here, instead of
          twice per page.
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
