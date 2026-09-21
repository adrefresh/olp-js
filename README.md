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

## Project structure

```
app/                            routing only — every route is page.tsx + page.css
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

comps/                          every component, grouped by page
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
    SharedHeader.tsx       the nav used by the 5 non-home pages, parameterized
                               by `active` for the current page
    SharedFooter.tsx       footer for the 5 non-home pages
    siteScript.ts             the one script those 5 pages share, as a
                                 single source of truth (see below)
    ScriptRunner.tsx        runs a page's script on mount, once

public/
.gitignore
package.json
```

No `src/` wrapper — `app/` and `comps/` sit at the project root, which is
fully supported by Next.js App Router (it looks for `src/app` first, then
falls back to a root-level `app/`).

**Every section is real JSX**, not an HTML string. For example,
`comps/about-us-comps/Manifesto.tsx` in full:

```tsx
export default function Manifesto() {
  return (
    <section id="manifesto">
      <div className="wrap split">
        <div className="reveal">
          <span className="eyebrow orange">The OpsLogic DNA</span>
          <h2 style={{ marginTop: "1rem" }}>Less friction. More forward.</h2>
          <p className="muted">
            Our work lives in the unglamorous, high-impact details: the
            handoffs, systems, people and routines that make growth
            sustainable.
          </p>
          <a className="button" href="/services">
            See what we solve →
          </a>
        </div>
        <div className="visual reveal">
          {/* ...svg diagram... */}
        </div>
      </div>
    </section>
  );
}
```

There is no `content.ts`, no `dangerouslySetInnerHTML`, and no HTML string
anywhere in the project — every element, class, and style is a real JSX
node, converted from the original static markup with an HTML→JSX pass built
specifically for this codebase (parses with `parse5`, renames `class` →
`className`, converts `style="..."` strings to style objects, camelCases SVG
attributes like `stroke-width` → `strokeWidth`, and self-closes empty
elements), then hand-verified against a full `npm run build` + `eslint` pass
with zero errors.

`page.tsx` for each route is just imports + composition:

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

## The shared site script

`comps/shared/siteScript.ts` holds the one script the five non-home pages
share (header/footer active-link behavior, FAQ accordions, reveal-on-scroll,
magnetic buttons, etc.) as a single source of truth, run once per page via
`<ScriptRunner script={SITE_SCRIPT} />` — instead of five duplicated copies.
The home page has its own separate script (`app/homeScript.ts`), since its
behavior (custom cursor, hero word-cascade, stat counters) is unique to that
page.

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

## `public/`

Currently empty aside from a `.gitkeep` placeholder. Git doesn't track empty
directories — without a file inside it, `public/` won't show up after a
`git push` even though it exists locally. Once you add real assets
(favicon, images, etc.), the `.gitkeep` is safe to delete.
