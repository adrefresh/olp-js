import type { Metadata } from "next";
import "./globals.css";
import "./site.css";
import "./ux.css";
import UxMotion from "../comps/shared/UxMotion";

export const metadata: Metadata = {
  title: {
    default: "OpsLogic — Let's Make Business Move",
    template: "%s",
  },
  description:
    "OpsLogic — Business Operations, IT, Hiring, Payroll, SAP & Shared Workspace solutions.",
  metadataBase: new URL("https://www.opslogic.team"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/brand/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
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
        <UxMotion />
        <noscript><style>{".ux-r{opacity:1!important;transform:none!important}.ux-l>span{transform:none!important}.ux-sub{opacity:1!important}"}</style></noscript>
        {children}
      </body>
    </html>
  );
}
