import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hero } from "@/components/ui/Hero";
import { HoursTable } from "@/components/ui/HoursTable";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  affiliations,
  awards,
  communityPartners,
  employment,
  extraHours,
  mission,
  values,
  vision,
} from "@/content/about";
import { directionsUrl, fullAddress, hours, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stone Creek Club & Spa is the Northshore Sports Resort — privately owned in Covington, Louisiana since 2009. Our story, mission, vision, values, community partners and hours.",
};

const linkClass = "text-sky-700 underline underline-offset-4 hover:text-slate-950";

export default function AboutPage() {
  return (
    <>
      <Hero
        size="page"
        eyebrow="About Stone Creek"
        title="The Northshore Sports Resort"
        poster={{
          src: "/images/tennis-mixed-doubles-play.jpg",
          alt: "Mixed doubles players at the net on a Stone Creek court framed by pines",
        }}
        cta={{ label: "Our Story", href: "#story" }}
      />

      {/* Intro */}
      <section className="section-lg bg-stone-50">
        <Reveal className="container-site mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <Eyebrow>Since {site.opened} · Covington, Louisiana</Eyebrow>
          <p className="font-display text-quote font-light text-balance text-slate-950">
            Stone Creek Club &amp; Spa is the Northshore Sports Resort, providing members with a relaxing &amp; inviting
            destination for their fitness, social and lifestyle needs.
          </p>
        </Reveal>
      </section>

      {/* Story */}
      <ImageTextSection
        id="story"
        tone="muted"
        eyebrow="Our Story"
        title="An Idea That Evolved"
        image={{
          src: "/images/entrance-monument-sign.jpg",
          alt: "The Stone Creek Club & Spa stone entrance sign framed by spring flowers and tall pines",
        }}
      >
        <p>
          Stone Creek’s owners have always valued fitness as part of a balanced life. The original idea was a stand-out
          facility for their own employees as they grew their company on the Northshore.
        </p>
        <p>
          The idea evolved. Drawing on the best clubs and resorts they had seen around the world, they built Stone Creek in
          Covington and opened its doors in {site.opened}.
        </p>
        <p className="font-display text-h3 font-light italic text-slate-950">
          “Along with our members, we’ve contributed millions of dollars and countless hours of community service.”
        </p>
      </ImageTextSection>

      {/* Mission & vision */}
      <section className="tone-dark section-lg bg-slate-950" aria-label="Mission and vision">
        <div className="container-site grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col gap-6">
            <h2 className="eyebrow text-sky-300">Our Mission</h2>
            <p className="font-display text-h2 font-light text-balance text-stone-50">{mission}</p>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-6 lg:border-l lg:border-slate-800 lg:pl-20">
            <h2 className="eyebrow text-sky-300">Our Vision</h2>
            <p className="text-body-lg text-stone-100">{vision}</p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-stone-50" aria-labelledby="values-title">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-6 lg:sticky lg:top-32">
              <Eyebrow rule>Our Values</Eyebrow>
              <h2 id="values-title" className="font-display text-h2 text-balance">
                Five Commitments
              </h2>
            </div>
          </div>
          <ol className="border-t border-slate-950 lg:col-span-8">
            {values.map((v, i) => (
              <Reveal as="li" key={v} delay={i * 80} className="flex items-baseline gap-6 border-b border-stone-300 py-8 md:gap-10">
                <span aria-hidden className="w-10 shrink-0 font-display text-h2 font-light tabular-nums text-sky-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-h3 font-light text-slate-950">{v}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Awards */}
      <section className="section bg-stone-100" aria-labelledby="awards-title">
        <div className="container-site flex flex-col gap-12">
          <SectionHeading eyebrow="Recognition" title={<span id="awards-title">Voted the Northshore’s Best</span>} />
          <ul className="grid border-t border-slate-950 md:grid-cols-3">
            {awards.map((a, i) => (
              <Reveal
                as="li"
                key={a.source}
                delay={i * 100}
                className="flex flex-col gap-3 border-b border-stone-300 py-8 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0 md:[&:not(:first-child)]:border-l"
              >
                <p className="eyebrow text-slate-600">{a.source}</p>
                <p className="font-display text-h2 font-light italic">{a.title}</p>
                <p className="text-body text-warmgray-700">{a.detail}</p>
              </Reveal>
            ))}
          </ul>
          <p className="text-small text-warmgray-700">{affiliations}</p>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="section scroll-mt-20 bg-stone-50" aria-labelledby="community-title">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Eyebrow rule>Community</Eyebrow>
            <h2 id="community-title" className="font-display text-h2 text-balance">
              A Positive Difference
            </h2>
            <p className="text-body text-warmgray-700">
              Stone Creek Club &amp; Spa has a deep-rooted history in supporting the community around us. Donation requests
              are reviewed weekly by our executive team and ownership — please send them at least 30 days ahead. We
              donate auction items, spa services, Lagniappe Cards, logo merchandise and baskets, and on-site fitness
              classes rather than money.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-7 lg:col-start-6">
            <h3 className="eyebrow text-slate-600">Community partners · member perks</h3>
            <ul className="grid border-t border-slate-950 sm:grid-cols-2 sm:gap-x-10">
              {communityPartners.map((p) => (
                <li key={p.name} className="flex flex-col gap-1 border-b border-stone-300 py-4">
                  <span className="font-medium text-slate-950">{p.name}</span>
                  <span className="text-small text-warmgray-700">{p.perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Setting */}
      <ImageTextSection
        reverse
        tone="muted"
        eyebrow="The Property"
        title="Closer to Nature"
        image={{
          src: "/images/nature-walking-trail.jpg",
          alt: "A gravel walking trail lined with tall pines and holly on the Stone Creek grounds",
        }}
      >
        <p>
          Stone Creek is surrounded by lush green space bordering on natural wetlands, designed to bring you closer to
          nature in the practice of mind and body fitness.
        </p>
      </ImageTextSection>

      {/* Hours */}
      <section id="hours" className="section scroll-mt-20 bg-stone-50" aria-labelledby="hours-title">
        <div className="container-site flex flex-col gap-14">
          <SectionHeading eyebrow="Club Hours" title={<span id="hours-title">When We’re Open</span>} />
          <HoursTable schedules={hours} />
          <dl className="grid gap-8 border-t border-stone-300 pt-10 md:grid-cols-3">
            {extraHours.map((h) => (
              <div key={h.title} className="flex flex-col gap-2">
                <dt className="eyebrow text-slate-600">{h.title}</dt>
                <dd className="text-body text-warmgray-700">{h.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Map */}
      <section className="bg-stone-100" aria-labelledby="map-title">
        <div className="container-site grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Eyebrow rule>Find Us</Eyebrow>
            <h2 id="map-title" className="font-display text-h2">
              On the Northshore
            </h2>
            <address className="text-body not-italic text-warmgray-700">{fullAddress}</address>
            <p className="flex flex-col gap-2 text-body">
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={`w-fit ${linkClass}`}>
                Get directions<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={`tel:${site.phones.main.tel}`} className={`w-fit tabular-nums ${linkClass}`}>
                {site.phones.main.display}
              </a>
            </p>
            <p className="border-t border-stone-300 pt-6 text-small text-warmgray-700">
              {employment.copy} Contact {employment.contact.name} at{" "}
              <a href={`mailto:${employment.contact.email}`} className={linkClass}>
                {employment.contact.email}
              </a>
              .
            </p>
          </div>
          <MapEmbed className="lg:col-span-8 lg:aspect-auto lg:min-h-[28rem]" />
        </div>
      </section>
    </>
  );
}
