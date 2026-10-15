import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import type { CardData } from "@/components/ui/Card";
import { Card } from "@/components/ui/Card";
import { CardRail } from "@/components/ui/CardRail";
import { DemoForm, type FormField } from "@/components/ui/DemoForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HoursTable } from "@/components/ui/HoursTable";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { PullQuote } from "@/components/ui/PullQuote";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatBand } from "@/components/ui/StatBand";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { hours, referralSources, site, stats, testimonials, visitInterests } from "@/content/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
};

const swatches = [
  { group: "Anchor", items: [
    { token: "slate-950", hex: "#1F2C36", use: "Footer, solid bands, headline ink", className: "bg-slate-950", dark: true },
    { token: "slate-800", hex: "#2E3D48", use: "Hover + rules on dark", className: "bg-slate-800", dark: true },
    { token: "slate-600", hex: "#4E5D68", use: "Secondary text, eyebrows", className: "bg-slate-600", dark: true },
  ] },
  { group: "Neutral", items: [
    { token: "stone-50", hex: "#F4EFE7", use: "Page ground", className: "bg-stone-50" },
    { token: "stone-100", hex: "#ECE5DA", use: "Alternate ground, cards", className: "bg-stone-100" },
    { token: "stone-300", hex: "#D8CEBF", use: "Hairlines, input borders", className: "bg-stone-300" },
    { token: "warmgray-500", hex: "#8C857B", use: "Placeholders, decorative", className: "bg-warmgray-500", dark: true },
    { token: "warmgray-700", hex: "#5F5950", use: "Body text on stone", className: "bg-warmgray-700", dark: true },
  ] },
  { group: "Accent — use sparingly", items: [
    { token: "sky-300", hex: "#A9D2EE", use: "Accents + focus on dark", className: "bg-sky-300" },
    { token: "sky-500", hex: "#5B9FD3", use: "Logo blue — rules, icons only", className: "bg-sky-500" },
    { token: "sky-700", hex: "#2C6898", use: "Links + focus on light", className: "bg-sky-700", dark: true },
  ] },
];

const typeScale = [
  { name: "display-xl", spec: "Cormorant 300 · clamp(48–120px) · caps · +0.04em", sample: "Your Everyday Getaway", className: "font-display text-display-xl font-light uppercase" },
  { name: "display-lg", spec: "Cormorant 300 · clamp(40–76px)", sample: "The Northshore Sports Resort", className: "font-display text-display-lg font-light" },
  { name: "h2", spec: "Cormorant 400 · clamp(32–52px)", sample: "Where Tennis Thrives", className: "font-display text-h2" },
  { name: "h3", spec: "Cormorant 500 · clamp(24–30px)", sample: "Escape to The Spa at Stone Creek", className: "font-display text-h3 font-medium" },
  { name: "quote", spec: "Cormorant italic 400 · clamp(28–48px)", sample: "From the moment you walk in, you know you're somewhere special.", className: "font-display text-quote italic" },
  { name: "body-lg", spec: "DM Sans 400 · 20px / 1.6", sample: "Whether you're short on time or want to spend the entire day, Stone Creek is the place to forget your stresses and achieve your goals!", className: "text-body-lg text-warmgray-700" },
  { name: "body", spec: "DM Sans 400 · 17px / 1.7", sample: "Stone Creek is surrounded by lush green space bordering on natural wetlands, designed to bring you closer to nature in the practice of mind and body fitness.", className: "text-body text-warmgray-700" },
  { name: "small", spec: "DM Sans 400 · 14px / 1.5", sample: "1201 Ochsner Blvd, Covington, LA 70433 · 985.801.7100", className: "text-small text-warmgray-700" },
  { name: "eyebrow", spec: "DM Sans 500 · 12px · caps · +0.22em", sample: "Unlimited Classes – Unlimited Results", className: "eyebrow text-slate-600" },
];

const spacing = [
  { name: "section", value: "80px → 128px (md)" },
  { name: "section-lg", value: "96px → 160px (md)" },
  { name: "container-site", value: "max 1440px · gutters 20 / 40 / 64px" },
  { name: "grid", value: "12 columns at lg · gap 40–64px" },
];

const amenityCards: CardData[] = [
  { label: "Aquatics", title: "25-Meter Saltwater Lap Pool", image: { src: "/images/lap-pool-swimmer.jpg", alt: "A swimmer doing laps in the six-lane saltwater lap pool" } },
  { label: "Aquatics", title: "Resort Style Pool", image: { src: "/images/resort-pool-splash-zone.jpg", alt: "Resort pool splash zone with spray features under blue umbrellas and tall pines" } },
  { label: "Wellness", title: "The Spa at Stone Creek", image: { src: "/images/spa-relaxation-lounge.jpg", alt: "Guests in robes resting on loungers in the spa relaxation lounge" } },
  { label: "Fitness", title: "Pilates Reformer Studio", image: { src: "/images/pilates-reformer-studio.jpg", alt: "Three women working out on Pilates reformers by tall windows" } },
  { label: "Family", title: "Pebble Creek Childcare", image: { src: "/images/pebble-creek-movie-area.jpg", alt: "Colorful kid-sized seating in the Pebble Creek movie area" } },
  { label: "Dining", title: "The Café at Stone Creek", image: { src: "/images/cafe-dining-room.jpg", alt: "The café dining room with orange chairs and pendant lights" } },
  { label: "Recovery", title: "Adult Locker Rooms", image: { src: "/images/womens-locker-room-vanity.jpg", alt: "Women's locker room vanity with mirrors and upholstered stools" } },
];

const visitFields: FormField[] = [
  { type: "text", name: "firstName", label: "First Name", required: true, half: true, autoComplete: "given-name" },
  { type: "text", name: "lastName", label: "Last Name", required: true, half: true, autoComplete: "family-name" },
  { type: "email", name: "email", label: "Email", required: true, half: true, autoComplete: "email" },
  { type: "tel", name: "phone", label: "Phone number", required: true, half: true, autoComplete: "tel" },
  { type: "select", name: "interest", label: "Let Us Know Your Interests!", options: visitInterests, half: true },
  { type: "select", name: "referral", label: "How'd You Hear About Us?", options: referralSources, half: true },
];

function GuideSection({ id, index, title, note, children, className }: { id: string; index: string; title: string; note?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("border-t border-stone-300 py-16 md:py-24", className)}>
      <div className="container-site">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
          <h2 id={`${id}-title`} className="flex items-baseline gap-4 font-display text-h3 font-medium">
            <span className="eyebrow text-sky-700">{index}</span>
            {title}
          </h2>
          {note && <p className="max-w-md text-small text-warmgray-700">{note}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <>
      {/* Hero — demonstrates the transparent → solid nav */}
      <section data-nav-hero className="tone-dark relative flex min-h-[88svh] items-end overflow-hidden bg-slate-950 text-stone-50">
        <Image
          src="/images/tennis-courts-dusk-walkway.jpg"
          alt="Stone Creek's lit tennis courts at dusk, with a walkway leading to the clubhouse under a deep blue sky"
          fill
          preload
          sizes="100vw"
          className="animate-slow-zoom object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/50 to-slate-950/45" />
        <div className="container-site relative flex flex-col items-center gap-8 pb-16 text-center md:pb-24">
          <Eyebrow tone="dark">Styleguide · {site.positioning}</Eyebrow>
          <h1 className="font-display text-display-xl font-light uppercase text-balance">{site.tagline}</h1>
          <Button href="#visit" tone="dark">
            Schedule a Visit
          </Button>
          <a href="#colors" className="eyebrow mt-6 flex flex-col items-center gap-3 text-stone-100">
            Scroll
            <span aria-hidden className="h-10 w-px bg-sky-300" />
          </a>
        </div>
      </section>

      <div className="section pb-0">
        <div className="container-site">
          <SectionHeading
            eyebrow="Design system"
            title="Stone Creek, in tokens and components"
            intro="Palette derived from the logo’s sky-blue water mark and warm-gray wordmark, anchored on a deep blue slate. Every component below uses real content from reference/content.md."
          />
        </div>
      </div>

      <GuideSection id="colors" index="01" title="Color" note="No pure black or white. Sky blue is an accent only — rules, focus, link hover — never a fill.">
        <div className="flex flex-col gap-12">
          {swatches.map((group) => (
            <div key={group.group}>
              <Eyebrow className="mb-5">{group.group}</Eyebrow>
              <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {group.items.map((s) => (
                  <li key={s.token} className="flex flex-col">
                    <div className={cn("flex aspect-[4/3] items-end p-4 ring-1 ring-stone-300 ring-inset", s.className)}>
                      <span className={cn("eyebrow", s.dark ? "text-stone-50" : "text-slate-950")}>Aa</span>
                    </div>
                    <p className="mt-3 text-small font-medium">{s.token}</p>
                    <p className="text-small tabular-nums text-warmgray-700">{s.hex}</p>
                    <p className="text-small text-warmgray-700">{s.use}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection id="type" index="02" title="Typography" note="Cormorant Garamond for display, DM Sans for everything you read. Sizes are fluid between 375px and 1440px.">
        <ul className="flex flex-col divide-y divide-stone-300">
          {typeScale.map((t) => (
            <li key={t.name} className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-3">
                <p className="text-small font-medium">{t.name}</p>
                <p className="text-small text-warmgray-700">{t.spec}</p>
              </div>
              <p className={cn("text-balance lg:col-span-9", t.className)}>{t.sample}</p>
            </li>
          ))}
        </ul>
      </GuideSection>

      <GuideSection id="spacing" index="03" title="Spacing & layout" note="Tailwind’s 4px scale for components; three named rhythms for sections and the page frame.">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {spacing.map((s) => (
            <li key={s.name} className="border-t border-slate-950 pt-4">
              <p className="text-small font-medium">{s.name}</p>
              <p className="text-small text-warmgray-700">{s.value}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex items-end gap-3" aria-hidden>
          {[4, 8, 12, 16, 24, 32, 48, 64, 96, 128].map((px) => (
            <div key={px} className="flex flex-col items-center gap-2">
              <div className="w-4 bg-sky-500" style={{ height: px }} />
              <span className="text-[11px] tabular-nums text-warmgray-700">{px}</span>
            </div>
          ))}
        </div>
      </GuideSection>

      <GuideSection id="buttons" index="04" title="Buttons" note="Solid for the one primary action, outline for secondary, text-link inside editorial sections.">
        <div className="grid gap-px bg-stone-300 md:grid-cols-2">
          <div className="flex flex-wrap items-center gap-6 bg-stone-50 p-8 md:p-12">
            <Button href="#visit">Schedule a Visit</Button>
            <Button href="#visit" variant="outline">Membership Rates</Button>
            <Button href="#tennis" variant="text">Explore Tennis</Button>
          </div>
          <div className="tone-dark flex flex-wrap items-center gap-6 bg-slate-950 p-8 md:p-12">
            <Button href="#visit" tone="dark">Schedule a Visit</Button>
            <Button href="#visit" variant="outline" tone="dark">Membership Rates</Button>
            <Button href="#spa" variant="text" tone="dark">Escape to The Spa</Button>
          </div>
        </div>
      </GuideSection>

      <GuideSection id="headings" index="05" title="Eyebrow & SectionHeading">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Eyebrow>Plain eyebrow</Eyebrow>
            <Eyebrow rule>Eyebrow with rule</Eyebrow>
          </div>
          <SectionHeading
            eyebrow="Membership"
            title="Everyday Getaway"
            intro="Enjoy Northshore living as it was meant to be at Stone Creek Club & Spa. Our spacious natural surroundings, genuine hospitality and limited enrollment allow our members the personal service, attention and space they deserve."
          />
        </div>
        <SectionHeading
          className="mt-20"
          align="center"
          eyebrow="Fitness and Beyond"
          title="Unlimited Classes – Unlimited Results"
        />
      </GuideSection>

      <div className="border-t border-stone-300">
        <div className="container-site pt-16 md:pt-24">
          <h2 className="flex items-baseline gap-4 font-display text-h3 font-medium">
            <span className="eyebrow text-sky-700">06</span>ImageTextSection
          </h2>
        </div>
        <ImageTextSection
          id="tennis"
          eyebrow="Tennis & Pickleball"
          title="Where Tennis Thrives"
          headingLevel="h3"
          image={{ src: "/images/tennis-mixed-doubles-play.jpg", alt: "A mixed doubles pair returning a shot on a Stone Creek hard court" }}
          cta={{ label: "Explore Tennis", href: "/tennis" }}
        >
          <p>
            Whether you play tennis socially or competitively, Stone Creek has the facilities and programming you’ve been
            looking for. The Stone Creek tennis campus is one of the finest in the state.
          </p>
          <p>
            Nine clay Hydro-Courts, five hard courts, four pickleball courts and a lighted practice court — all brilliantly
            lit with 12,000 watts per court.
          </p>
        </ImageTextSection>
        <ImageTextSection
          id="spa"
          reverse
          tone="muted"
          eyebrow="The Spa"
          title="Escape to The Spa at Stone Creek"
          headingLevel="h3"
          image={{ src: "/images/spa-relaxation-lounge.jpg", alt: "Guests in robes unwinding in the spa's relaxation lounge" }}
          cta={{ label: "View the Spa Menu", href: "/spa" }}
        >
          <p>
            Experience personalized pampering in the serene natural beauty of the Northshore. Our full-service spa offers a
            range of luxurious treatments, including massages, facials, body therapies, nail care, and hair removal.
          </p>
          <p>As a spa guest, enjoy full access to Stone Creek’s premium fitness facilities for the day.</p>
        </ImageTextSection>
      </div>

      <GuideSection id="cards" index="07" title="Card & CardRail" note="Image, small label, one line. The rail scroll-snaps; arrows appear from tablet up.">
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:w-2/3">
          <Card {...amenityCards[2]} href="/spa" />
          <Card {...amenityCards[0]} ratio="landscape" sizes="(min-width: 1024px) 30vw, 50vw" />
        </div>
        <SectionHeading eyebrow="Amenities" title="Everything under one roof" className="mb-10" />
        <CardRail cards={amenityCards} label="Amenities" />
      </GuideSection>

      <div className="border-t border-stone-300">
        <div className="container-site pt-16 md:pt-24">
          <h2 className="flex items-baseline gap-4 font-display text-h3 font-medium">
            <span className="eyebrow text-sky-700">08</span>StatBand
          </h2>
        </div>
        <div className="mt-12">
          <StatBand stats={stats} />
        </div>
      </div>

      <div className="border-t border-stone-300">
        <div className="container-site pt-16 md:pt-24">
          <h2 className="flex items-baseline gap-4 font-display text-h3 font-medium">
            <span className="eyebrow text-sky-700">09</span>PullQuote — light & dark
          </h2>
        </div>
        <PullQuote quote={testimonials.carla.quote} attribution={testimonials.carla.attribution} />
        <PullQuote tone="dark" quote={testimonials.spaReviews[0].quote} attribution={testimonials.spaReviews[0].attribution} />
      </div>

      <GuideSection id="video" index="10" title="VideoEmbed" note="YouTube by ID. With a poster, the iframe only loads after play is pressed.">
        <div className="mx-auto max-w-5xl">
          <VideoEmbed
            id={site.virtualTourVideoId}
            title="Take a Virtual Tour of Stone Creek Club & Spa"
            poster={{ src: "/images/pool-deck-wetland-pond.jpg", alt: "The pool deck and its blue umbrellas seen across a wetland pond" }}
          />
          <p className="mt-4 eyebrow text-slate-600">Take a Virtual Tour</p>
        </div>
      </GuideSection>

      <GuideSection id="hours" index="11" title="HoursTable" note="Full on Contact and About; condensed in the footer.">
        <HoursTable schedules={hours} />
        <div className="tone-dark mt-16 bg-slate-950 p-8 md:max-w-md md:p-10">
          <HoursTable schedules={hours} variant="condensed" tone="dark" />
        </div>
      </GuideSection>

      <GuideSection id="visit" index="12" title="DemoForm & Toast" note="Posts to a local stub, then shows the demo toast. Nothing is sent anywhere." className="bg-stone-100">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Schedule a Visit"
              title="Stop by for a tour"
              intro="We invite you to visit Stone Creek for a tour! Meet with our Member Services team to have all your questions answered."
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <DemoForm title="Schedule a visit" fields={visitFields} submitLabel="Request a Tour" />
          </div>
        </div>
      </GuideSection>
    </>
  );
}
