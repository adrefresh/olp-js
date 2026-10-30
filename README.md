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
