# Claude Code prompts — Stone Creek. Run in order, commit after each.

## 0. Finish the scrape (fills the few remaining [TBD]s + downloads assets)
> Use Playwright (install if needed) to crawl https://www.stonecreekclubandspa.com — every nav, sub-nav, and footer link, 3-second delay between pages. Pages I still need: /guests, /personal_training, /meet-our-pros, /adult-tennis, /jr-tennis, /pickleball, /group-fitness, /fitness_pilates, /fst, /cafe-catering, /pno, /birthday-parties, /youth-fitness, /community_partners, /events. Extract staff names and titles, program descriptions, guest policy, and anything with a number. Download the logo (find the highest-res version — check for SVG) and up to 30 facility photos into reference/brand/, named by subject. Also download the PDFs linked from the site (class schedule, spa menu, café menu, member guide) into reference/brand/pdfs/ and extract spa service prices and the café menu highlights into content.md. Then update reference/content.md: replace [TBD]s you can confirm, add new facts under the right heading, leave [TBD] where nothing exists. Do not write anything you did not find.

## 1. Design system — PLAN MODE first (Shift+Tab)
> Read CLAUDE.md, reference/design/design-notes.md, every screenshot in reference/design/, and the logo in reference/brand/. Propose a design system: color tokens derived from the Stone Creek logo and the property (pines, wetlands, clay courts, saltwater — deep green or slate anchor, warm stone neutral, one earthy accent), a serif display + sans body type scale, spacing scale, and these components: Button (solid / outline / text-link), Eyebrow, SectionHeading, ImageTextSection (alternating), Card, CardRail, StatBand, PullQuote, VideoEmbed, HoursTable, Nav (transparent→solid on scroll, overlay menu on mobile, quiet "Member Login" text link), Footer, Toast, DemoForm. Show the plan before writing code. After approval, implement and add /styleguide rendering every component with real content from reference/content.md.

## 2. Home
> Build / using the components. Sections: (1) video hero — ID ONwzG9uqJNU, muted loop, poster fallback, headline "YOUR EVERYDAY GETAWAY", sub-line "The Northshore Sports Resort", CTA "Schedule a Visit"; (2) intro — "From the moment you turn onto the property…" copy, since 2009, Covington; (3) StatBand — 19 Courts / 25 Meters / 75+ Classes / Since 2009; (4) "Everything under one roof" CardRail of amenities; (5) three alternating ImageTextSections — Tennis ("Where Tennis Thrives"), The Spa ("Escape to The Spa"), Family & Pebble Creek; (6) virtual tour video section; (7) PullQuote — Carla W.; (8) membership CTA band with the three rates and "month-to-month, no term commitment"; (9) location strip — address, club hours, map link. All copy from reference/content.md; real photos from reference/brand/; labeled placeholders otherwise. Check 375px and 1440px before reporting done.

## 3. Membership
> Build /membership: intro ("Everyday Getaway" copy); Individual / Couple / Family as three editorial cards — real monthly rate, enrollment fee, who's covered — NOT a SaaS pricing table; New Member Benefits as a feature row; month-to-month and fair-pricing statements; Member Services team grid (8 people from content.md, placeholder portraits); TrainAway passport note; schedule-a-visit DemoForm.

## 4. Tennis
> Build /tennis: hero band "Where Tennis Thrives"; court breakdown (9 clay Hydro-Courts, 5 hard, 4 pickleball, practice court, 12,000W lighting) as a StatBand or feature list; sections for Adult Tennis, Junior Tennis, Pickleball, Meet Our Pros (placeholder cards if names are [TBD]); awards; "Reserve a Court" CTA pointing to a DemoForm.

## 5. Spa
> Build /spa: "Escape to The Spa at Stone Creek" intro; day-access perk callout; Creekside Retreat packages as two feature cards; services menu — Massages, Facials, Body, Nails — as an elegant accordion or two-column menu with names, durations, and one-line descriptions (prices if in content.md, else omit the price column entirely); spa amenities trio (cold plunge, wet sauna, whirlpool); spa hours; three Google reviews as PullQuotes; "Book an Appointment" DemoForm; gift card and spa party mentions.

## 6. Fitness, Kids, Café, About, Contact — one prompt each
> Build /fitness: floor description with equipment brands, Group Fitness (75+ classes, 4 studios) with a filterable sample schedule from /src/data/schedule.json labeled as sample data, FITCORE/Pilates, Fascial Stretch Therapy, Personal Training sections.
> Build /kids: Pebble Creek section with ages, 2-hour policy, hours, features, Childcare Director contact; cards for Parent's Night Out, Birthday Parties, Youth Fitness, Jr Tennis, Swim Lessons (SafeWater).
> Build /cafe: The Café philosophy copy, hours (counter vs kitchen), menu highlights from content.md or a labeled placeholder, catering mention.
> Build /about: Our Story, Mission, Vision, five Values (verbatim), awards row, community commitment, full hours, map embed.
> Build /contact: address, map embed, phone numbers (main, membership, childcare), all hours via HoursTable, DemoForms for general contact and schedule-a-visit.

## 7. Visual QA loop
Screenshot each page at 375 and 1440; paste into Claude Code; name what's off. "Compare to reference/design/tengile-home-1440.png — match the spacing and type scale."

## 8. Polish + README
> Audit every page: broken links, alt text, focus states, contrast, horizontal overflow at 375px, any copy not in content.md (flag it), Lighthouse accessibility. Fix all. Write README.md: what this is, how to run it, what's mocked, what production needs (CMS, Club Automation / Mindbody integration for booking and login, form backend, real photography, analytics).
