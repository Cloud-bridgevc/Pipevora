# Pipevora

**Find water losses. Focus repair crews.**

Pipevora helps water operators identify where losses may be occurring. Its AI brings operational records together to guide inspections and measure what changes after repairs.

> Pipevora is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype uses fictional data. Named organisation types are prospective customers with no implied affiliation. The domain `www.pipevora.com` and email `hello@pipevora.com` are placeholders — check availability with a registrar before use.

Categories: AI · WaterTech · Infrastructure Analytics

## What's here

- **Marketing site** (`/`): hero, purpose and stakes (with sourced statistics), problem, solution, how it works, customers, public-sector angle, AI safeguards, principles, founders' letter, vision, pricing, proposed AWS architecture, team, FAQ and an early-access form.
- **Interactive prototype** (`/app`): a review workspace on fictional loss zones. Switch roles with *Demo as*, open a record to see AI flags with evidence and confidence, assign reviewers, add notes and record decisions (a reason is required). Every change is written to an audit log you can export as CSV. A grounded assistant answers only from the records and refuses decisions that belong to people. Changes persist in `localStorage`.
- **Legal drafts**: `/privacy` and `/terms` (review drafts; operator details to be confirmed).

## Team

- **Tamuno Briggs** — Founder/CEO. Water engineer with utility rehabilitation experience.
- **Yetunde Olaniran** — Co-founder. Infrastructure programme manager.
- **Musa Shehu** — CTO. Data engineer and ML specialist focused on network monitoring.

## Sources for the statistics

- 126bn m³ — Estimated non-revenue water lost worldwide each year. ([Liemberger & Wyatt, via The Source (IWA)](https://thesourcemagazine.org/bursting-at-the-seams-new-study-highlights-the-realities-of-water-loss/))
- $39bn — Estimated annual value of that lost water, at a conservative 31 cents per cubic metre. ([Liemberger & Wyatt, via The Source (IWA)](https://thesourcemagazine.org/bursting-at-the-seams-new-study-highlights-the-realities-of-water-loss/))
- 48.6bn m³ — The World Bank’s earlier, narrower estimate of annual non-revenue water. ([World Bank, 2006](https://documents1.worldbank.org/curated/en/385761468330326484/pdf/394050Reducing1e0water0WSS81PUBLIC1.pdf))

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build   # Vite build, server render, and static prerender of /, /app, /privacy, /terms and 404.html
npm test        # Engine and content tests (node --test)
npm run preview
```

The build output in `dist/` is fully static. `public/_headers` and `public/_redirects` cover Netlify/Cloudflare Pages; `vercel.json` covers Vercel.

### Early-access form

Without configuration the form saves the request in the browser and offers a pre-filled email to hello@pipevora.com. To send submissions to HubSpot, set `VITE_HUBSPOT_PORTAL_ID` and `VITE_HUBSPOT_FORM_GUID` at build time, and update the privacy notice first.

### Motion

Scroll reveals, word-by-word manifesto lighting, count-up statistics, timeline and step lines, card tilt and magnetic buttons live in `src/motion.js`. Content is server-rendered and fully visible without JavaScript; motion is skipped when the visitor prefers reduced motion.

## Structure

```
src/content.js        all site copy (edit here)
src/seed.js           fictional prototype records
src/theme.css         colours and fonts
src/App.jsx           marketing pages
src/Purpose.jsx       purpose, stakes, principles, letter, vision
src/app/engine.js     prototype rules (permissions, decisions, audit, assistant)
src/app/Prototype.jsx prototype UI
scripts/prerender.mjs static HTML for every route
```
