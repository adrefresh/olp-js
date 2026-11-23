/** Organization + WebSite JSON-LD, output once on every page by app/layout.tsx. */
export const organizationSchema = {
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
        streetAddress: "1102D, Manjeera Trinity Corporate, JNTU - HiTech City Road, Kukatpally",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500072",
        addressCountry: "IN",
      },
      sameAs: ["https://www.linkedin.com/company/opslogic-team/", "https://www.instagram.com/opslogicteam/", "https://www.facebook.com/OpsLogicPrivateLimited", "https://x.com/opslogicteam"],
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
