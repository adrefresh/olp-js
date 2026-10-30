# OpsLogic website

Marketing site for OpsLogic, a Hyderabad-based business operations partner. It offers HR and payroll, IT services and business operations (company setup, compliance, finance) to companies in India and abroad. The site explains the services, introduces the team and takes enquiries through a contact form.

## Tech stack

- Next.js (App Router), React 19, TypeScript, static export (`output: "export"`)
- Tailwind CSS v4 plus `app/ux.css` for the site styles
- Content in Markdown files under `content/`
- PHP contact form (`public/contactform.php`) on Hostinger
- Hosting on Hostinger, deployed with GitHub Actions

Run locally: `npm install`, then `npm run dev`. Production build: `npm run build` (output in `out/`).

## Current pages

| Page | Route |
|---|---|
| Home | `/` |
| Services (3 categories: HR & Payroll, IT Services, Business Operations, with a page for each service) | `/services/` |
| About | `/about/` |
| Careers (live roles from Keka) | `/careers/` |
| Contact | `/contact/` |
| Privacy Policy | `/privacy-policy/` |

Success Stories is hidden for now. Its code is kept in `app/_success-stories/`; the leading underscore stops Next.js from building it as a page. Rename the folder back to `success-stories` and add its entries back to `app/sitemap.ts` and `app/llms.txt/route.ts` to show it again.

## Workflow

`.github/workflows/deploy.yml` builds and deploys on every push:

- Push to `dev`: build without GTM, then rsync `out/` to `public_html/dev` (dev site).
- Push to `main`: build with `NEXT_PUBLIC_ENABLE_GTM=true`, then rsync `out/` to `public_html/olpjs`.

Both jobs use the repository secrets `SSH_PRIVATE_KEY`, `REMOTE_HOST`, `REMOTE_USER` and `REMOTE_PORT`. The server file `mail-config.php` (SMTP settings for the contact form) is never overwritten by a deploy.

To edit text: services, categories and testimonials are in `content/` (one `.md` file each). Everything else is in `app/` and `components/`.
