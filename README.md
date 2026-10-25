# Precision MedTech Services — Website

Live site: https://www.precisionmedtechservices.com
Hosted free on GitHub Pages from the `main` branch. Any change pushed to `main` is live within a few minutes.

Plain HTML and CSS — no build step, no database, nothing to install.

## Pages

| Address | File |
|---|---|
| `/` | `index.html` |
| `/biodex-repair/` | `biodex-repair/index.html` |
| `/rehab-equipment/` | `rehab-equipment/index.html` |
| `/preventive-maintenance/` | `preventive-maintenance/index.html` |
| `/right-to-choose/` | `right-to-choose/index.html` |
| `/resources/` | `resources/index.html` (plus two article folders and their PDFs) |
| `/about/` | `about/index.html` |
| `/faq/` | `faq/index.html` |
| `/contact/` | `contact/index.html` |
| `/privacy/`, `/accessibility/` | their folders |
| page not found | `404.html` |

Shared files live in `assets/`: `styles.css` (look and feel), `site.js` (menu and contact form), logo, favicon and photos.

## Contact form

The Request Service form sends through **Web3Forms** (free plan, 250 submissions a month) to CSenzamici@PrecisionMedTechServices.com. The access key is `WEB3FORMS_KEY` in `assets/site.js`. Manage it at app.web3forms.com. If sending fails, visitors are shown the phone number and email instead.

## Search and AI visibility

- `sitemap.xml` lists every page with its last-updated date. Update the date when a page changes.
- `robots.txt` allows all search engines and AI crawlers.
- `llms.txt` is a plain-text summary of the business for AI tools.
- Each page carries structured data (JSON-LD) describing the business, services, FAQs and articles. The homepage's business entry links the Google Business Profile and LinkedIn pages.
- The site is registered in Google Search Console and Bing Webmaster Tools.

## Old addresses from the Google Sites version

These files exist only to send old links to the new pages. Keep them.

- `about-us.html`, `contact-us.html`, `downloads.html`, `faq.html`, `right-to-choose.html`
- `Biodex-repair-florida.html` and `biodex-repair-florida.html` (the old main page)
- `4-Ways-to-Prevent-Costly-Biodex-Repairs.pdf` and `The-Unreliable-Zone.pdf` at the top level are copies kept so old PDF links keep working; the current copies are in `resources/`.

## Don't delete

- `CNAME` — connects the custom domain. Removing it takes the site off precisionmedtechservices.com.

## Content rules

- Calibration is never claimed; preventive maintenance is described as inspection and functional checks.
- "The only factory-trained independent technician in the country for Biodex/SMTI equipment" is the approved wording.
- Brand names are used only to identify equipment serviced; no manufacturer endorsement is implied.
