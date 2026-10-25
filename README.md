# Precision MedTech Services — Website

Production-oriented, responsive, dependency-free static website. No Node build or paid hosting required.

## Included
- Homepage and 10 additional pages (including Your Right to Choose) (FAQ is linked from the footer) (Biodex, Florida rehab equipment, preventive maintenance, About, Resources, FAQ, Contact, Privacy, Accessibility)
- Original owner-provided Biodex photograph and portrait, optimized as WebP
- Responsive navigation, keyboard accessibility, SEO metadata, Open Graph tags, JSON-LD (business + FAQ), sitemap, robots.txt, llms.txt
- Service-request form sent through Web3Forms (key set as `WEB3FORMS_KEY` in `assets/site.js`); falls back to the visitor's email app if the key is empty
- GitHub Pages deployment workflow

## REQUIRED before launch
1. **Receiving email** is set in `assets/site.js` (`SERVICE_EMAIL`). Change it there if the address ever changes.
2. **Confirm permission to use the clinic photograph** at the location where it was taken. The photographer owns the image, subject to facility policies/agreements.
3. **Review claims and service areas**, especially nationwide Biodex availability and manufacturer relationships. No affiliation or current authorization is claimed.
4. **Confirm your domain.** This starter assumes `https://www.precisionmedtechservices.com`. If different, update `sitemap.xml`, `robots.txt`, and all canonical/OG URLs in the HTML files.
5. After launch, add the site in Google Search Console and submit `sitemap.xml`; claim/update your Google Business Profile with the same name, phone and service area.
6. Review privacy notice for any additional analytics, email, hosting or tracking services you activate.

## Publish with GitHub Pages
1. Create a **public** GitHub repository, e.g. `precision-medtech-website`.
2. Upload **the contents of this folder** to the repository root (not the outer folder). Preserve the `assets/`, `.github/`, and page subfolders.
3. In GitHub, go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push to the `main` branch. The included workflow deploys the site. GitHub will show the public URL under Pages.
5. To use your custom domain, configure DNS according to GitHub Pages documentation and set the domain in Settings → Pages. For apex domain use GitHub's published A records; for `www`, use a CNAME to your GitHub Pages host. Do not change DNS until you are ready to replace the existing site.
6. Test all pages, the mobile menu, and the inquiry form from a phone and desktop.

## Redirects from the old site
The root files `about-us.html`, `contact-us.html`, `downloads.html`, `faq.html`, `right-to-choose.html` and `Biodex-repair-florida.html` (plus a lowercase copy) are small redirect pages that send old addresses to the new pages. The old PDFs (`/4-Ways-to-Prevent-Costly-Biodex-Repairs.pdf`, `/The-Unreliable-Zone.pdf`) now live in `/resources/`; copies are kept at the root so old links keep working.

## Local preview
From this directory: `python -m http.server 8000`, then open `http://localhost:8000`.

## Important technical notes
- GitHub Pages serves static files only. The contact form posts to Web3Forms; the privacy notice describes this.
- All internal page links are relative, so the site also works at a GitHub Pages project subpath. Canonical URLs point to the intended custom domain.
- The site is designed for performance but no actual Lighthouse or Core Web Vitals results are claimed. Test against your deployed URL.
- Images of equipment may include third-party trademarks. The site uses them descriptively, not to imply endorsement.
