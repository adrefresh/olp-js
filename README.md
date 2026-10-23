# OpsLogic website

Next.js (App Router), static export. Run `npm install`, then `npm run dev` or `npm run build` (output in `out/`).

## Folders

```
app/                 routes only (thin page.tsx files) + the CSS files
components/          ALL components, one folder, grouped by page
  layout/            SiteHeader, SiteFooter, MobileMenu, Breadcrumbs, CookieBanner, FooterClock, ScriptRunner
  ui/                PageHero, SectionHead, Html, ScrollMotion (shared)
  home/  about/  careers/  contact/  services/  success-stories/  privacy/
content/             editable .md files
  services/<category>/<slug>.md    one file per service page
  categories/<slug>.md             the three category pages
  testimonials/*.md                home-page testimonials
lib/                 loaders and data (services, testimonials, nav, markdown parser, scripts, india map)
public/              images, brand assets
```

There is no `comps/` folder any more. If you still have one from an older version, delete it.

## Editing content

Service, category and testimonial text lives in `content/`. Each file has front matter between `---` lines, then the body.
Testimonials: change `name`, `role`, `company` in the front matter and the quote in the body.
