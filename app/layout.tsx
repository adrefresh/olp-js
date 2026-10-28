import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./site.css";
import "./ux.css";
import CookieBanner from "../components/layout/CookieBanner";
import GoogleTagManager from "../components/layout/GoogleTagManager";
import FloatingContact from "../components/layout/FloatingContact";
import ScrollMotion from "../components/ui/ScrollMotion";

export const metadata: Metadata = {
  title: {
    default: "OpsLogic — Let's Make Business Move",
    template: "%s",
  },
  description:
    "OpsLogic — Business Operations, IT, Hiring, Payroll, SAP & Shared Workspace solutions.",
  metadataBase: new URL("https://www.opslogic.team"),
  applicationName: "OpsLogic",
  authors: [{ name: "OpsLogic Private Limited", url: "https://www.opslogic.team" }],
  creator: "OpsLogic Private Limited",
  publisher: "OpsLogic Private Limited",
  category: "Business services",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.4948;78.3996",
    ICBM: "17.4948, 78.3996",
    rating: "general",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/brand/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1b3a",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.opslogic.team/#org",
      name: "OpsLogic",
      alternateName: "OpsLogic Private Limited",
      url: "https://www.opslogic.team",
      logo: "https://www.opslogic.team/brand/opslogic-logo-color.png",
      image: "https://www.opslogic.team/og-image.png",
      email: "hello@opslogic.team",
      telephone: "+914035009631",
      foundingDate: "2022",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Manjeera Trinity Corporate, KPHB Colony, Kukatpally",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500072",
        addressCountry: "IN",
      },
      areaServed: ["IN", "Worldwide"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.opslogic.team/#website",
      inLanguage: "en-IN",
      name: "OpsLogic",
      url: "https://www.opslogic.team",
      publisher: { "@id": "https://www.opslogic.team/#org" },
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
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body id="top">
        <ScrollMotion />
        <noscript><style>{".ux-r{opacity:1!important;transform:none!important}.ux-l>span{transform:none!important}.ux-sub{opacity:1!important}"}</style></noscript>
        {children}
        <GoogleTagManager />
        <FloatingContact />
        <CookieBanner />
      </body>
    </html>
  );
}
