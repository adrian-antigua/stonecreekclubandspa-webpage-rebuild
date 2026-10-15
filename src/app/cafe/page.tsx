import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hero } from "@/components/ui/Hero";
import { HoursTable } from "@/components/ui/HoursTable";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  cateringContact,
  cateringHighlights,
  menuHighlights,
  rentalsContact,
  smoothies,
  venues,
} from "@/content/cafe";
import { hours, site } from "@/content/site";

export const metadata: Metadata = {
  title: "The Café",
  description:
    "The Café at Stone Creek — breakfast, lunch and dinner, nutrition shakes and the full PJ's Coffee of New Orleans menu. Open to members and non-members, with catering and event venues.",
};

const cafeHours = hours.filter((s) => s.id === "cafe");
const linkClass = "text-sky-700 underline underline-offset-4 hover:text-slate-950";

export default function CafePage() {
  return (
    <>
      <Hero
        size="page"
        eyebrow="The Café at Stone Creek"
        title="The Café"
        poster={{
          src: "/images/cafe-dining-room.jpg",
          alt: "The café dining room with orange chairs and pendant lights",
        }}
        cta={{ label: "See the Menu", href: "#menu" }}
      />

      {/* Philosophy */}
      <section className="section-lg bg-stone-50">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow rule>Our Philosophy</Eyebrow>
            <p className="font-display text-quote font-light italic text-balance text-slate-950">
              “To us, eating healthily involves much more than just tracking calories.”
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-6 text-body-lg text-warmgray-700 lg:col-span-7 lg:pt-12">
            <p>
              Our menus are crafted to support your well-being by combining natural ingredients with carefully curated
              flavors.
            </p>
            <p className="text-body">
              Open to members and non-members, The Café serves freshly made breakfast, lunch and dinner options, including
              great salads, sandwiches, paninis and wraps, home-made soups, inspired daily specials, nutrition shakes and
              the full PJ’s Coffee of New Orleans menu. Our chicken is always cage &amp; antibiotic free and sustainably
              raised.
            </p>
            <p className="text-body">
              Ordering to go? Call{" "}
              <a href={`tel:${site.phones.cafe.tel}`} className={`tabular-nums ${linkClass}`}>
                {site.phones.cafe.display}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hours */}
      <section className="section bg-stone-100" aria-labelledby="cafe-hours-title">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow rule>Hours</Eyebrow>
            <h2 id="cafe-hours-title" className="font-display text-h2 text-balance">
              Morning Coffee to Evening Dinner
            </h2>
            <p className="text-body text-warmgray-700">
              On weekends the counter opens first; the kitchen follows half an hour later.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <HoursTable schedules={cafeHours} columns={1} />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="section scroll-mt-20 bg-stone-50" aria-labelledby="menu-title">
        <div className="container-site flex flex-col gap-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Menu Highlights" title={<span id="menu-title">From the Café Menu</span>} />
            <p className="max-w-sm text-small text-warmgray-700">
              Highlights from the 2025 Café menu. Daily specials rotate weekly.
            </p>
          </div>
          <div className="columns-1 gap-16 md:columns-2 xl:columns-3">
            {menuHighlights.map((section) => (
              <section key={section.title} className="mb-14 break-inside-avoid" aria-labelledby={`menu-${section.title}`}>
                <div className="flex flex-col gap-2 border-b border-slate-950 pb-4">
                  <h3 id={`menu-${section.title}`} className="font-display text-h3 font-medium">
                    {section.title}
                  </h3>
                  {section.note && <p className="text-small text-warmgray-700">{section.note}</p>}
                </div>
                <ul>
                  {section.items.map((item) => (
                    <li key={item.name} className="flex items-baseline gap-3 border-b border-stone-300 py-3">
                      <span className="flex flex-col">
                        <span className="text-body text-slate-950">{item.name}</span>
                        {item.note && <span className="text-small text-warmgray-700">{item.note}</span>}
                      </span>
                      <span aria-hidden className="flex-1" />
                      <span className="font-display text-[1.25rem] tabular-nums text-slate-950">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="grid gap-10 border-t border-slate-950 pt-10 md:grid-cols-12">
            <div className="flex flex-col gap-3 md:col-span-4">
              <h3 className="font-display text-h2 font-light">Smoothies</h3>
            </div>
            <dl className="grid gap-8 sm:grid-cols-3 md:col-span-8">
              <div className="flex flex-col gap-2">
                <dt className="eyebrow text-slate-600">Eat Fit Approved</dt>
                <dd className="text-body text-slate-950">{smoothies.eatFit.join(" · ")}</dd>
              </div>
              <div className="flex flex-col gap-2">
                <dt className="eyebrow text-slate-600">Also blending</dt>
                <dd className="text-body text-slate-950">{smoothies.more.join(" · ")}</dd>
              </div>
              <div className="flex flex-col gap-2">
                <dt className="eyebrow text-slate-600">For kids</dt>
                <dd className="text-body text-slate-950">{smoothies.kids.join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Tower Bar */}
      <ImageTextSection
        tone="muted"
        eyebrow="Tower Bar"
        title="Poolside, Between the Pools and the Courts"
        image={{
          src: "/images/clubhouse-patio-outdoor-dining.jpg",
          alt: "Members dining at shaded tables on the clubhouse patio on a summer evening",
        }}
      >
        <p>
          Open seasonally with the full café menu, sports on big-screen TVs, and poolside service available.
        </p>
        <p className="text-small">
          No outside food or beverage, please — and glass is prohibited on the property.
        </p>
      </ImageTextSection>

      {/* Catering */}
      <section id="catering" className="tone-dark section scroll-mt-20 bg-slate-950" aria-labelledby="catering-title">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="Catering"
              title={<span id="catering-title">Let Stone Creek Make Your Next Meal Effortless</span>}
              intro="Business meetings, holiday meals, birthday parties, showers, tailgates, tennis leagues and parade packages — plus PJ’s Coffee “Joe To Go.”"
            />
            <div className="flex flex-col gap-1 border-t border-slate-800 pt-6 text-body text-stone-100">
              <p className="eyebrow text-sky-300">{cateringContact.title}</p>
              <p className="font-display text-h3 text-stone-50">{cateringContact.name}</p>
              <a href={`tel:${cateringContact.phone.tel}`} className="w-fit tabular-nums underline underline-offset-4 hover:text-sky-300">
                {cateringContact.phone.display}
              </a>
              <a href={`mailto:${cateringContact.email}`} className="w-fit break-all underline underline-offset-4 hover:text-sky-300">
                {cateringContact.email}
              </a>
              <p className="mt-3 text-small">Orders are also taken in the café.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-6 lg:col-start-7 lg:pt-10">
            <h3 className="eyebrow text-stone-100">Catering highlights · small / large</h3>
            <ul className="border-t border-stone-100">
              {cateringHighlights.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-6 border-b border-slate-800 py-4">
                  <span className="flex flex-col">
                    <span className="text-body text-stone-50">{item.name}</span>
                    {item.note && <span className="eyebrow mt-1 text-sky-300">{item.note}</span>}
                  </span>
                  <span className="shrink-0 font-display text-[1.25rem] tabular-nums text-stone-100">{item.price}</span>
                </li>
              ))}
            </ul>
            <p className="text-small text-stone-100">
              Starters feed 4–6 / 8–12; salads and platters 4–6 / 10–14; entrées 8–10 / 16–20. A tailgate menu is
              available for Super Bowl parties, Mardi Gras tailgates and more.
            </p>
          </div>
        </div>
      </section>

      {/* Rentals */}
      <ImageTextSection
        id="rentals"
        reverse
        eyebrow="Facility Rentals"
        title="Bring Your Next Event to Your Everyday Getaway"
        image={{
          src: "/images/event-lawn-reception.jpg",
          alt: "An evening reception on the event lawn with white-draped cocktail tables beside the clubhouse",
        }}
      >
        <ul className="flex flex-col divide-y divide-stone-300 border-y border-stone-300">
          {venues.map((v) => (
            <li key={v.name} className="flex flex-col gap-1 py-4">
              <span className="font-medium text-slate-950">{v.name}</span>
              <span className="text-small">{v.detail}</span>
            </li>
          ))}
        </ul>
        <p className="text-small">
          Contact {rentalsContact.name} —{" "}
          <a href={`mailto:${rentalsContact.email}`} className={`break-all ${linkClass}`}>
            {rentalsContact.email}
          </a>
        </p>
      </ImageTextSection>
    </>
  );
}
