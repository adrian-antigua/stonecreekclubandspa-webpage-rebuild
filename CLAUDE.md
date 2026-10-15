# Stone Creek Club & Spa — Website Redesign (Proof of Concept)

## What this is
A fully designed proof-of-concept redesign of https://www.stonecreekclubandspa.com for
Stone Creek Club & Spa — "The Northshore Sports Resort" — a privately owned, limited-
enrollment club in Covington, LA (Northshore of Lake Pontchartrain), open since 2009.
It is NOT production. Forms are mocked. The goal is to show ownership what a site that
matches the property could look like.

The current site is a HubSpot template: stock blocks, a logo that's a 350px PNG, class
schedules and menus as linked PDFs, and most section copy identical across pages. The
business is a genuine resort — 19 lit courts, two saltwater pools, a full-service spa with
a Vichy shower, a café, a childcare center, 75+ weekly classes, adult-only locker rooms with
cold plunge and eucalyptus wet sauna. The redesign's job is to make the site feel like
turning onto the property.

## Audience & positioning
- Affluent Northshore families and professionals, 30–65. Tennis is a core identity, not
  an add-on. Spa, café, and childcare make it an all-day destination.
- Their own line, used everywhere: **"Your Everyday Getaway."** Keep it. It's good.
- Their self-description: "I can't call it a gym, because that would be an understatement."
  (member review). "The Northshore Sports Resort." Resort is the word.
- Tone: gracious, unhurried, Southern-hospitality premium. Closer to a hotel than a gym.
  No "crush your goals," no fitness-bro energy, no urgency tactics.

## Stack & rules
- Next.js (App Router) + TypeScript + Tailwind CSS. No component libraries. Build
  primitives in `src/components/ui`.
- Mobile-first. Every page finished at 375px and 1440px.
- All imagery in `/public`. Never hotlink from stonecreekclubandspa.com. Where no photo is
  available, use a labeled placeholder block with alt text describing the shot.
- YouTube: embed by ID via `<iframe src="https://www.youtube.com/embed/{id}">`. No API.
- Forms: every form posts to a local stub and shows a toast — "Demo mode: this form isn't
  connected yet." Never fake a real submission.
- Content: pull ALL copy, prices, hours, staff names, and addresses from
  `/reference/content.md`. If missing there, write `[TBD]`. Never invent.
- Accessibility: semantic HTML, alt text everywhere, visible focus, AA contrast.
- Commit after each page. Small, named commits.

## Design direction
Reference screenshots in `/reference/design/` plus `design-notes.md`. Same editorial,
luxury-hospitality system as the references, tuned for a Louisiana resort:

1. **Full-bleed cinematic hero** — the virtual-tour video or a wide property/courts shot,
   2–4 word uppercase serif headline, one line, one CTA, scroll cue.
2. **Editorial typography** — serif display (Fraunces / Cormorant Garamond / Playfair) +
   clean sans body (DM Sans / Inter). Large scale, generous leading, tracked uppercase
   eyebrows.
3. **Palette** — Derive from the logo in reference/brand/ — sky blue and warm gray.
   Anchor: a deep slate or navy that the sky blue sits on; neutral: warm stone/cream;
   accent: the logo's sky blue, used sparingly. Clay-court terracotta may appear only in
   photography. No pure black, no pure white, no SaaS blue.
4. **Alternating image/text sections** — eyebrow → short headline → 2–3 sentences →
   text-link CTA, large photo alongside, left/right alternating, py-24 to py-40.
5. **Minimal nav** — logo left, 6 links max (Membership, Fitness, Tennis, Spa, Kids,
   Café), one solid CTA ("Schedule a Visit"), phone visible on desktop. Transparent over
   hero, solid on scroll. Full-screen overlay menu on mobile. "Member Login" as a quiet
   text link, not a button.
6. **Subtle motion** — fade-up scroll reveal, slow hero zoom. Nothing bouncy.
7. **Horizontal card rails** for amenities and programs — image, small label, one line.
8. **Stat band** — their own "19 Courts / 25 Meters / 75+ Classes" block, set large in the
   serif, is already the right idea. Keep it and make it beautiful.
9. **Social proof as design** — big serif pull quotes with attribution.
10. **Dark footer** — logo, address, phone, hours (club / spa / Pebble Creek / café),
    nav columns, social, awards line, legal.

What NOT to do: icon bento grids, gradient buttons, SaaS pricing tables, emoji, stock
dumbbell photos, HubSpot-style stacked full-width color bands.

## Site map
- `/` Home — hero ("YOUR EVERYDAY GETAWAY"), intro, stat band (19 courts / 2 pools /
  75+ classes / since 2009), amenity rail, three alternating sections (Tennis, The Spa,
  Family & Pebble Creek), video (virtual tour), pull quote, membership CTA, location strip.
- `/membership` — "Everyday Getaway" intro; Individual / Couple / Family as editorial
  cards with real rates and enrollment fees; New Member Benefits list; month-to-month
  promise; Member Services team grid (6 people, photos as placeholders unless provided);
  TrainAway passport note; schedule-a-visit DemoForm.
- `/fitness` — floor description (two-story windows, pine ceilings, equipment brands),
  Group Fitness (75+ classes, 4 studios), FITCORE/Pilates, Fascial Stretch Therapy,
  Personal Training. Schedule as filterable table from static JSON, labeled sample.
- `/tennis` — "Where Tennis Thrives": 9 clay Hydro-Courts, 5 hard courts, 4 pickleball,
  practice court, 12,000W lighting; Adult / Junior / Pickleball / Meet Our Pros sections;
  awards.
- `/spa` — "Escape to The Spa at Stone Creek": intro, Creekside Retreat packages,
  Massages, Facials, Body, Nails as an elegant menu (accordion or columns, not a PDF);
  spa amenities (cold plunge, wet sauna, whirlpool); spa hours; Google reviews;
  book DemoForm.
- `/kids` — Pebble Creek childcare (ages, 2-hr limit, hours, CPR staff, playground,
  iWall), Parent's Night Out, Birthday Parties, Youth Fitness, Jr Tennis, Swim Lessons
  (SafeWater partner), Childcare Director contact.
- `/cafe` — The Café at Stone Creek: philosophy, hours, menu highlights (`[TBD]` until
  the PDF is parsed), catering mention.
- `/about` — Our Story (owners built it for their employees, evolved into a resort;
  opened 2009), Mission, Vision, Values (five, verbatim), awards, community partners,
  hours page content, map.
- `/contact` — address, map embed, phone, all hours, mocked contact + visit forms.

## Reference folder
- `/reference/content.md` — content source of truth
- `/reference/brand/` — logo, downloaded photos, current-site screenshots
- `/reference/design/` — reference-site screenshots + `design-notes.md`
- `/reference/videos.md` — YouTube IDs
