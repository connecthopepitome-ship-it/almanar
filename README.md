# AL MANAR TECH — Official Corporate Website Redesign

> **"Engineering the Systems That Keep Buildings Running."**

Official website repository for **Al Manar Tech** (Al Manar Technical Contracting), an established engineering and technical infrastructure contractor in Abu Dhabi and Al Ain, UAE (Established 2001, ADDC & ADM Approved).

---

## 🏛️ Company Credentials & Identity

* **Brand Positioning:** Integrated Building & Infrastructure Solutions
* **Established:** 2001 (Over 2 Decades in Abu Dhabi)
* **Verified Project Count:** 160+ Technical & Electromechanical Contracting Projects Completed
* **Licensures & Accreditations:**
  * **ADDC Approved:** Abu Dhabi Distribution Company (Water & Electricity)
  * **ADM Recognized:** Abu Dhabi Municipality
  * **ADQCC Compliant:** Abu Dhabi Quality and Conformity Council
  * **Civil Defence Aligned:** UAE Fire and Life Safety Code of Practice
* **Public Contact Details:**
  * **Phone:** `02-5829700` (Direct Engineering Line)
  * **Email:** `info@almanartech.com`
  * **Office:** Warehouse 2, Al Afou 3St, Musaffah M35, Abu Dhabi, UAE
  * **Business Hours:** Monday – Saturday, 09:00 – 18:00 (Emergency Response On-Call)

---

## 🏗️ Architecture & Technology Stack

* **Framework:** [Astro 5.x](https://astro.build/) (Static Site Generation for sub-second Core Web Vitals, pristine technical SEO, and pre-rendered JSON-LD schema markup)
* **Styling & Design System:** [Tailwind CSS 3.4](https://tailwindcss.com/) with customized engineering tokens:
  * Midnight Navy (`#101D2D`)
  * Steel Blue (`#203B53`)
  * Engineering Gold (`#F0B641`)
  * Cloud White (`#F2F4F6`)
  * Slate Grey (`#667483`)
  * Headings: `Manrope` / `Sora`
  * Body: `Inter`
* **Serverless Backend (Cloudflare Pages Functions):**
  * `/functions/api/enquiry.js`: Handles project tenders and consultations with anti-spam honeypot, server-side payload validation, reference number generation (`AMT-YYYYMMDD-XXXX`), and optional transactional dispatch via Resend/Webhook.
* **Hosting / Edge Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/) + Cloudflare Workers.

---

## 🌐 Site Structure & Routes

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Hero, authority credentials, 6 division cards, industries, verified projects, 4-stage process, stats, inquiry CTA |
| `/about` | **About Us** | 2001 founding history, engineering values, ADDC/ADM/ADQCC credentials, leadership principles |
| `/services` | **Services Overview** | Comprehensive engineering overview with technical breakdown |
| `/services/mep-contracting` | **MEP Contracting** | Power distribution, MDBs, busbars, grounding, lighting controls, plumbing |
| `/services/it-telecom` | **IT & Telecom** | Cat6A/Cat7 cabling, fiber splicing (OTDR), server racks, PABX, Wi-Fi heatmaps |
| `/services/fire-detection` | **Fire Detection** | Analogue addressable FACPs, smoke/beam detectors, Civil Defence interlocks |
| `/services/hvac` | **HVAC Installations** | Chilled water FCUs/AHUs, VRF/VRV, SMACNA ducting, FAHU, Ecology kitchen units |
| `/services/security` | **Security Systems** | IP-CCTV, biometric access control, ANPR vehicle barriers, control room consoles |
| `/services/facility-maintenance` | **Facility Maintenance** | Planned Preventive Maintenance (PPM), switchgear thermography, 24/7 AMC response |
| `/industries` | **Industries** | Sector challenges & engineering solutions: Industrial, Commercial, Retail, F&B, Healthcare, Residential |
| `/projects` | **Project Portfolio** | Verified project cards with category filtering (Aldar Academies, Yas Waterworld, Puma, Emirates NBD, etc.) |
| `/process` | **Our Process** | 4-stage execution: Consultation, Design & Approvals, Execution, Handover & Commissioning |
| `/contact` | **Contact Us** | Direct engineering phone line, email, Musaffah office directions, genuine enquiry form |
| `/sitemap.xml` | **XML Sitemap** | Dynamic XML sitemap covering all 13 canonical routes |
| `/robots.txt` | **Robots Directives** | Clean indexing directives |

---

## 🚀 Local Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build (outputs to /dist)
npm run build

# Preview production build locally
npm run preview
```

---

## ☁️ Cloudflare Pages Deployment Settings

When linking this repository to Cloudflare Pages:

* **Framework Preset:** `Astro`
* **Build Command:** `npm run build`
* **Build Output Directory:** `dist`
* **Node.js Version:** `20.x` or higher
* **Optional Environment Variables:**
  * `RESEND_API_KEY`: API key for email delivery notifications upon form submissions.
  * `NOTIFICATION_EMAIL`: Recipient email (defaults to `info@almanartech.com`).
