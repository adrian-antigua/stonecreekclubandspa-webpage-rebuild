# Design reference notes — Stone Creek

Same three references as Spa 23 (Mr. C Residences, Tengile MalaMala, Life Time). Copy the
screenshots over from the Spa 23 repo's reference/design/ folder — no need to retake them.
Everything in the Spa 23 design-notes still applies. What's different for Stone Creek:

## Closest reference: Tengile MalaMala
Stone Creek is literally a resort on wetlands with pines. Tengile's deep-green anchor,
cream neutral, nature photography, and "property + experiences" structure map almost 1:1.
Lean hardest on this one.

## Palette direction
Derived from the logo in reference/brand/ — sky blue and warm gray.
- Anchor: a deep slate or navy that the sky blue sits on (implemented as blue slate `#1F2C36`)
- Neutral: warm stone / cream (not white)
- Accent: the logo's sky blue, used sparingly — rules, focus, link hover; never a fill
- Clay-court terracotta may appear only in photography; let the court photos carry the warmth
- No pure black, no pure white, no SaaS blue. Full token table lives on /styleguide.

## Structural differences from Spa 23
- **Tennis is a pillar**, not a program. It gets a top-level nav item and its own
  ImageTextSection on the home page, before the spa.
- **Stat band** is central: 19 Courts / 25 Meters / 75+ Classes. Set it large in the
  serif, on the neutral background, with thin rules between stats — Tengile's "9 Suites"
  card-label energy, scaled up.
- **The Spa gets a real menu page**, not a PDF link. Treat it like a hotel spa site:
  category headers in serif, service names bold, duration in small caps, one-line
  description. Prices only if confirmed.
- **Hours are complex** (club / spa / childcare / café). One HoursTable component, used
  on Contact, About, and in the footer condensed.
- **Member Login** exists on the real site — keep it as a quiet text link in the nav.

## Headline candidates (their words)
- "YOUR EVERYDAY GETAWAY" (hero — this is their line, use it)
- "THE NORTHSHORE SPORTS RESORT" (sub-line or About hero)
- "WHERE TENNIS THRIVES" (tennis)
- "ESCAPE TO THE SPA" (spa)
- "MORE THAN A GYM" is Spa 23's — don't reuse it here
