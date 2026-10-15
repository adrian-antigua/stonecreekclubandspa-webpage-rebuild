# Stone Creek Club & Spa — Website Redesign (Proof of Concept)

A fully designed proof-of-concept redesign of [stonecreekclubandspa.com](https://www.stonecreekclubandspa.com)
for Stone Creek Club & Spa, "The Northshore Sports Resort" in Covington, Louisiana. It shows
ownership what a site that matches the property could look like. **It is not production** —
forms are mocked and nothing is connected to the club's systems.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000  (use -- -p 3100 if 3000 is taken)
npm run build      # production build — every page prerenders as static HTML
npm run lint
```

Requires Node 20+. Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.
No component libraries — all primitives live in `src/components/ui`.

## Pages

| Route | Contents |
|---|---|
| `/` | Video hero ("Your Everyday Getaway"), intro, stat band, amenity rail, Tennis / Spa / Family sections, virtual tour, pull quote, membership rates, location |
| `/membership` | Individual / Couple / Family rates, New Member Benefits, policies, Member Services team, schedule-a-visit form |
| `/fitness` | Strength & cardio floors, adult-only hours, Group Fitness with a filterable schedule, FITCORE/Pilates, Fascial Stretch Therapy, personal trainers |
| `/tennis` | Court breakdown, Adult / Junior / Pickleball, pros, 2026 calendar, awards, court-request form |
| `/spa` | Day-access perk, Creekside Retreat packages, full service menu with prices, amenities, Google reviews, gift cards & parties, booking form |
| `/kids` | Pebble Creek childcare (hours, fees, director), programs, Parent's Night Out, birthday packages, youth access policy, swim lessons |
| `/cafe` | Philosophy, hours, menu highlights, smoothies, Tower Bar, catering, facility rentals |
| `/about` | Story, mission, vision, five values, awards, community partners & donations, full hours, map |
| `/contact` | Address, map, phone directory, all hours, general-inquiry and schedule-a-visit forms |
| `/styleguide` | Design tokens and every component rendered with real content |

## Where things live

- `reference/content.md` — **content source of truth.** Every fact, price, hour and name on the site
  comes from here; anything missing stays `[TBD]`.
- `src/content/*.ts` — typed copies of that content, one module per page (`site.ts` holds shared facts,
  hours, nav and memberships).
- `src/data/schedule.json` — **sample** group-fitness schedule (see below).
- `src/app/globals.css` — design tokens (palette from the logo: slate anchor, stone neutral,
  sky-blue accent), type scale, motion.
- `public/images/` — club photography (resized from `reference/brand/`). Nothing is hotlinked.

## What's mocked

- **Every form** (schedule a visit, contact, spa booking, court request) posts to a local stub,
  `src/app/api/demo/route.ts`, which stores and sends nothing. The visitor sees a toast:
  "Demo mode: this form isn't connected yet."
- **Group fitness schedule** — real class names and studios from the club's materials, with
  illustrative days and times. It's labeled "Sample data" on the page. The real Fall 2026 schedule
  is `reference/brand/pdfs/class-schedule-fall-2026.pdf`.
- **Photo placeholders** — labeled blocks where no photo exists: spa cold plunge and wet sauna; kids
  birthday parties, youth fitness and swim lessons.
- **Member Login / court reservations** link out to the club's existing Club Automation portal.

## Copy notes (flagged in the polish audit)

- **Facts** (prices, hours, names, policies, descriptions) are taken from `reference/content.md`,
  verbatim where the source is quotable.
- **Editorial headlines** were written for this design and should be approved by the club — e.g.
  "Plunge, Steam & Soak", "Share the Getaway", "Something for Every Age", "Parties After Hours",
  "An Idea That Evolved", "Five Commitments", "Closer to Nature", "Tour the Club". Page heroes use
  the club's own lines where one exists ("Where Tennis Thrives", "Escape to The Spa", "Fitness and
  Beyond", "The Northshore Sports Resort").
- **Time-sensitive content** that will go stale: the SHIFT studio closure (Oct 26 – Nov 2, 2026),
  Parent's Night Out dates (Oct 23, Nov 20), the 2026 tennis calendar.
- **Still `[TBD]`** in the source and left off the site: owner names, Membership Director, spa
  director/staff, café manager, junior tennis rates, smoothie prices, extra waxing prices, Spa Day
  Group pricing, rental pricing, YouTube channel.
- **Watermarked aerials** in `reference/brand/` (Cloud X Photography) are deliberately unused.

## QA status

- Every page checked at 375px and 1440px: no horizontal overflow, no console errors.
- axe-core (WCAG 2 A/AA + best practice): no violations on any page.
- All internal links and in-page anchors resolve; every image has alt text; visible focus rings;
  skip link; the mobile menu traps focus and closes on Esc; motion respects `prefers-reduced-motion`.
- Not run: a Lighthouse score, and testing with real screen readers or devices.

## What production needs

- **CMS** for hours, prices, events, staff and menus (most of `src/content/` becomes CMS data), so
  the club can update the site without a developer.
- **Club Automation integration** for member login, court reservations, Pebble Creek reservations
  and live class schedules; **Mindbody** for spa booking and gift cards.
- **Form backend** — route inquiries to Member Services / the Spa / catering by email or CRM, with
  spam protection and consent handling.
- **Real photography** — a property shoot (clean aerials, spa amenities, kids programs, café food),
  plus permission or clean originals for the watermarked aerials.
- **Analytics** and conversion tracking on "Schedule a Visit" and booking flows.
- Hosting, domain cutover, redirects from the old HubSpot URLs, an SEO/metadata pass,
  structured data (LocalBusiness / HealthClub), and a privacy policy.
