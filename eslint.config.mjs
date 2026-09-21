import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      // Internal navigation is intentionally plain <a> tags everywhere,
      // including in shared components like SharedHeader — the site's
      // per-page scripts (site.js / each page's own script) assume a full
      // page load, matching the original static site's navigation model.
      // Using next/link only in a few spots would be inconsistent with
      // every other link on the site.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  {
    // The root layout is the documented place to declare shared external
    // fonts in the App Router (there is no pages/_document.js to put them
    // in) — this rule is written for the Pages Router and doesn't apply here.
    files: ["app/layout.tsx"],
    rules: {
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default eslintConfig;
