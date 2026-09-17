# OpsLogic — Next.js (Static Export)

**Static Site Generation only** — no server runtime, no API routes, no
SSR/ISR at request time. `next build` emits a fully static `out/` folder
deployable to any static host.

## Stack

| Package     | Version |
|-------------|---------|
| Next.js     | 16.3.x (App Router) |
| React       | 19.2.x |
| TypeScript  | 5.7.x |
| Tailwind CSS| 4.3.x  |
| ESLint      | 9.x (flat config) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build (SSG)

```bash
npm run build     # writes the static site to ./out
npm start          # serves ./out locally to sanity-check the export
```

## Routes

| Route |
|---|
| `/` |
| `/about-us` |
| `/services` |
| `/careers` |
| `/contact-us` |
| `/success-stories` |

## Project structure — one component per section

```
src/
  app/                             routing only — every route is just
                                       page.tsx + page.css
    layout.tsx
    globals.css
    homeScript.ts                    the home page's own behavior script
    page.tsx                           /
    page.css
    about-us/
      page.tsx                          /about-us
      page.css
    services/
      page.tsx                          /services
      page.css
    careers/
      page.tsx                          /careers
      page.css
    contact-us/
      page.tsx                          /contact-us
      page.css
    success-stories/
      page.tsx                          /success-stories
      page.css

  components/                      every actual component, grouped by page
    homepage-comps/
      CursorFx.tsx
      SiteHeader.tsx
      Hero.tsx
      CoreMessage.tsx
      WhatWeDo.tsx
      WhyOpsLogic.tsx
      WhoWeServe.tsx
      Proof.tsx
      CtaBand.tsx
      WaveDivider.tsx
      SiteFooter.tsx

    about-us-comps/
      Hero.tsx
      Manifesto.tsx
      HowWeShowUp.tsx
      Trajectory.tsx

    services-comps/
      Hero.tsx
      WhatWeOffer.tsx
      HowItWorks.tsx
      ModularCta.tsx
      Faq.tsx

    careers-comps/
      Hero.tsx
      VibeCheck.tsx
      LifeHere.tsx
      OpenRoles.tsx
      NoFitCta.tsx

    contact-us-comps/
      Hero.tsx
      FormSection.tsx
      WhatHappensNext.tsx
      FlexibleWork.tsx
      TinyFaq.tsx

    success-stories-comps/
      Hero.tsx
      CaseFiles.tsx
      CommonThread.tsx
      FinalCta.tsx

    shared/
      SharedHeader.tsx       real JSX — the nav used by the 5 non-home pages,
                                 parameterized by `active` for the current page
      SharedFooter.tsx       real JSX — footer for the 5 non-home pages
      siteScript.ts             the one script those 5 pages share, as a
                                   single source of truth (see below)
      ScriptRunner.tsx        runs a page's script on mount, once
```

`src/app/` holds routing only — every route folder is just `page.tsx` +
`page.css`. Every actual component lives under `src/components/`, grouped
into one folder per page (`homepage-comps/`, `about-us-comps/`, etc.), plus
`shared/` for the handful of components genuinely reused across pages.

**Each section is a real, separate component**, in its own file, containing
only that section's markup — e.g. `src/components/about-us-comps/Hero.tsx`
contains the About page's hero, and nothing else. `page.tsx` for each route
is just imports + composition:

```tsx
export default function AboutUsPage() {
  return (
    <>
      <SharedHeader active="about-us" />
      <main>
        <Hero />
        <Manifesto />
        <HowWeShowUp />
        <Trajectory />
      </main>
      <SharedFooter showEmail={false} />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
```

## Why `SharedHeader`/`SharedFooter` but not shared sections

The About/Services/Careers/Contact/Success-Stories pages' header and footer
are genuinely the same component across all five (just a different active
link, or whether the footer shows an email) — sharing them is a real
de-duplication, so they're written as proper JSX taking props, not five
copies of near-identical markup.

Each page's actual content sections (Hero, Manifesto, FAQ, etc.) are
**not** shared — every page's sections are unique to that page, so each
lives only where it's used.

## Why each section renders via `dangerouslySetInnerHTML`

Every section component still renders its markup as a string via
`dangerouslySetInnerHTML`, rather than as hand-converted JSX:

```tsx
const MANIFESTO_HTML: string = "<section id=\"manifesto\">...</section>";

export default function Manifesto() {
  return <div dangerouslySetInnerHTML={{ __html: MANIFESTO_HTML }} />;
}
```

This is a deliberate choice, not a shortcut: converting dozens of sections
full of inline styles, SVG diagrams, and CSS custom properties into
hand-written JSX (`class` → `className`, `stroke-width` → `strokeWidth`,
`style="..."` → a style object, etc.) across every page is a large surface
area for introducing a subtle visual bug in exactly the kind of detail that's
hardest to spot in review. Splitting each section into its own file gets you
the organizational benefit (readability, isolation, easy per-section edits)
without that conversion risk. If you want a specific section rewritten as
idiomatic JSX later, its exact markup is sitting right there, ready to
convert one component at a time.

## The shared site script

`src/components/shared/siteScript.ts` holds the one script the five non-home
pages share (header/footer behavior, FAQ accordions, reveal-on-scroll,
magnetic buttons, etc.) as a single source of truth, run once per page via
`<ScriptRunner script={SITE_SCRIPT} />` — instead of five duplicated copies.
The home page has its own separate script (`src/app/homeScript.ts`), since
its behavior (custom cursor, hero word-cascade, stat counters) is unique to
that page.

`ScriptRunner` dispatches synthetic `DOMContentLoaded` / `window load`
events **only when the real ones have already fired** by the time React
mounts, so every listener in the original script still fires exactly once,
at the right time, with zero changes to the script itself.

## Tailwind CSS

Tailwind v4 is installed and wired up via `@tailwindcss/postcss`.
`globals.css` imports only `tailwindcss/theme.css` and
`tailwindcss/utilities.css` — Tailwind's preflight/base reset is
intentionally skipped, since every route's `page.css` already ships a
complete reset of its own.

## Responsiveness (mobile / tablet / desktop)

No breakpoints were changed. Every route's ported CSS carries its original
`@media` rules, so mobile/tablet/desktop behavior is unchanged.
