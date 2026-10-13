import type { Metadata } from "next";
import "./globals.css";
import "./site.css";
import SiteCursor from "../comps/shared/SiteCursor";

export const metadata: Metadata = {
  title: {
    default: "OpsLogic — Let's Make Business Move",
    template: "%s",
  },
  description:
    "OpsLogic — Business Operations, IT, Hiring, Payroll, SAP & Shared Workspace solutions.",
  metadataBase: new URL("https://www.opslogic.team"),
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "OpsLogic",
      url: "https://www.opslogic.team",
      logo: "https://www.opslogic.team/favicon.ico",
    },
    {
      "@type": "WebSite",
      name: "OpsLogic",
      url: "https://www.opslogic.team",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body id="top">
        <SiteCursor />
        {children}
      </body>
    </html>
  );
}
