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
        {/* Manrope is self-hosted via @font-face in globals.css — no external font links needed. */}
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {"@type":"Organization","name":"OpsLogic","url":"https://www.opslogic.team","logo":"https://www.opslogic.team/favicon.ico"},
                {"@type":"WebSite","name":"OpsLogic","url":"https://www.opslogic.team"}
              ]
            }) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
