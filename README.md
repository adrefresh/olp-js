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

## Contact form mail (Gmail SMTP)

1. Google Account > Security > turn on 2-Step Verification > App passwords > create one (16 characters).
2. On the server, in the same folder as `contactform.php`, copy `mail-config.sample.php` to `mail-config.php` and put the App Password in `pass`.
3. Submit the form on the live site. Errors are written to `contact-error.log` on the server.

If `mail-config.php` is missing, the form falls back to PHP `mail()`.
