/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static Site Generation only — no Node.js server, no API routes,
  // no ISR/SSR at runtime. `next build` emits a fully static `out/` folder
  // that can be hosted on any static file host (Netlify, S3, GitHub Pages, etc.).
  output: "export",

  // Emit `/about-us/index.html` style routes instead of `/about-us.html`,
  // the most broadly compatible layout across static hosts.
  trailingSlash: true,

  // next/image's optimization API requires a running server; it is disabled
  // here since this project has no server. (The site doesn't currently use
  // next/image — all media are inline SVG/plain tags — but this is set for
  // safety if it's ever introduced.)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
