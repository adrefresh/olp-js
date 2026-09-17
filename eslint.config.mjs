import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      // Every page's markup is a verbatim port of the original static site,
      // rendered per-section via dangerouslySetInnerHTML — see each
      // section component (e.g. src/app/about-us/components/Hero.tsx) and
      // src/components/shared/ScriptRunner.tsx for the rationale.
      "react/no-danger": "off",

      // Internal navigation is intentionally plain <a> tags, everywhere,
      // including in real-JSX components like SharedHeader — the site's
      // per-page scripts (site.js / each page's own script) assume a full
      // page load, matching the original static site's navigation model.
      // Using next/link only in the few real-JSX spots would be
      // inconsistent with every other link on the site.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  {
    // The root layout is the documented place to declare shared external
    // fonts in the App Router (there is no pages/_document.js to put them
    // in) — this rule is written for the Pages Router and doesn't apply here.
    files: ["src/app/layout.tsx"],
    rules: {
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default eslintConfig;
