import type { Metadata } from "next";
import Image from "next/image";
import { DemoForm, type FormField } from "@/components/ui/DemoForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hero } from "@/components/ui/Hero";
import { HoursTable } from "@/components/ui/HoursTable";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { Placeholder } from "@/components/ui/Placeholder";
import { Reveal } from "@/components/ui/Reveal";
import { hours, site } from "@/content/site";
import { spaAmenities, spaInstagram, spaMenu, spaPackages, spaReviews } from "@/content/spa";

export const metadata: Metadata = {
  title: "The Spa",
  description:
    "Escape to The Spa at Stone Creek — massages, facials, body treatments, nail care and the Creekside Retreat packages in Covington, Louisiana.",
};

const spaHours = hours.filter((s) => s.id === "spa");

const bookFields: FormField[] = [
  { type: "text", name: "name", label: "Name", required: true, half: true, autoComplete: "name" },
  { type: "email", name: "email", label: "Email", required: true, half: true, autoComplete: "email" },
  { type: "tel", name: "phone", label: "Phone number", required: true, half: true, autoComplete: "tel" },
  { type: "select", name: "member", label: "Are you a member?", options: ["Yes", "No"], half: true },
  {
    type: "select",
    name: "service",
    label: "Service",
    options: [...spaPackages.map((p) => p.name), ...spaMenu.map((c) => c.title)],
    half: true,
  },
  { type: "text", name: "when", label: "Preferred day & time", required: true, half: true },
  { type: "textarea", name: "notes", label: "Notes for your therapist", rows: 3 },
];

export default function SpaPage() {
  return (
    <>
      <Hero
        size="page"
        eyebrow="The Spa at Stone Creek"
        title="Escape to The Spa"
        poster={{
          src: "/images/spa-relaxation-lounge.jpg",
          alt: "Guests in robes resting on loungers in the spa relaxation lounge",
        }}
        cta={{ label: "Book an Appointment", href: "#book" }}
      />

      {/* Intro */}
      <section className="section-lg bg-stone-50">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow rule>Full-Service Spa</Eyebrow>
            <h2 className="font-display text-display-lg font-light text-balance">Escape to The Spa at Stone Creek</h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-6 text-body-lg text-warmgray-700 lg:col-span-7 lg:pt-12">
            <p>
              Experience personalized pampering in the serene natural beauty of the Northshore. Our full-service spa
              offers a range of luxurious treatments, including massages, facials, body therapies, nail care, and hair
              removal.
            </p>
            <p className="text-body">
              Nine treatment rooms, a private relaxation lounge, and an outdoor garden courtyard with a fountain — with
              complimentary handcrafted herbal tea while you unwind.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Day access perk */}
      <section className="tone-dark bg-slate-950 py-16 md:py-20" aria-labelledby="day-access-title">
        <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-16">
          <h2 id="day-access-title" className="eyebrow shrink-0 text-sky-300">
            Make a day of it
          </h2>
          <p className="max-w-3xl font-display text-h3 font-light italic text-stone-50 md:text-right">
            Spa guests enjoy full day access to the club — the outdoor pool, group classes, hot tub and wet sauna.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section bg-stone-100" aria-labelledby="packages-title">
        <div className="container-site flex flex-col gap-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-6">
              <Eyebrow rule>Spa Packages</Eyebrow>
              <h2 id="packages-title" className="font-display text-h2 text-balance">
                The Creekside Retreats
              </h2>
            </div>
            <p className="max-w-md text-body text-warmgray-700">
              Each package includes a spa meal, with gratuities included.
            </p>
          </div>
          <ul className="grid gap-14 md:grid-cols-2 md:gap-10">
            {spaPackages.map((pkg, i) => (
              <Reveal as="li" key={pkg.name} delay={i * 120} className="flex flex-col gap-6">
                <div className="relative aspect-[3/2] overflow-hidden bg-stone-300">
                  <Image src={pkg.image.src} alt={pkg.image.alt} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-slate-950 pb-5">
                  <h3 className="font-display text-h3 font-medium">{pkg.name}</h3>
                  <p className="font-display text-h2 font-light tabular-nums">{pkg.price}</p>
                </div>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 text-body text-warmgray-700">
                  {pkg.includes.map((item, j) => (
                    <li key={item} className="flex items-center gap-3">
                      {j > 0 && <span aria-hidden className="text-sky-500">·</span>}
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
          <p className="border-t border-stone-300 pt-8 text-body text-warmgray-700">
            <span className="font-medium text-slate-950">Spa Day Groups</span> — full club access, the café menu served for
            your group, and a complimentary bottle of champagne. Call The Spa at{" "}
            <a href={`tel:${site.phones.spa.tel}`} className="tabular-nums text-sky-700 underline underline-offset-4">
              {site.phones.spa.display}
            </a>{" "}
            to plan yours.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="section scroll-mt-20 bg-stone-50" aria-labelledby="menu-title">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <div className="flex flex-col gap-6 lg:sticky lg:top-32">
              <Eyebrow rule>Spa Menu</Eyebrow>
              <h2 id="menu-title" className="font-display text-h2 text-balance">
                Services
              </h2>
              <nav aria-label="Spa menu categories">
                <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:gap-3">
                  {spaMenu.map((cat) => (
                    <li key={cat.id}>
                      <a
                        href={`#${cat.id}`}
                        className="eyebrow text-slate-600 underline-offset-8 transition-colors hover:text-slate-950 hover:underline"
                      >
                        {cat.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="hidden text-small text-warmgray-700 lg:block">
                24-hour cancellation policy; late cancellations and no-shows are charged in full.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-16 lg:col-span-8">
            {spaMenu.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-28" aria-labelledby={`${cat.id}-title`}>
                <div className="flex flex-col gap-3 border-b border-slate-950 pb-5">
                  <h3 id={`${cat.id}-title`} className="font-display text-h2 font-light">
                    {cat.title}
                  </h3>
                  {cat.intro && <p className="text-small text-warmgray-700">{cat.intro}</p>}
                </div>
                <ul>
                  {cat.services.map((service) => (
                    <li
                      key={service.name}
                      className="flex items-baseline justify-between gap-6 border-b border-stone-300 py-5 sm:gap-8"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-body font-medium text-slate-950">{service.name}</span>
                        {service.note && <span className="text-small text-warmgray-700">{service.note}</span>}
                      </div>
                      <dl className="flex shrink-0 flex-col items-end gap-1 sm:flex-row sm:gap-6">
                        {service.options.map((opt) => (
                          <div key={`${opt.duration}-${opt.price}`} className="flex items-baseline gap-3">
                            {opt.duration ? (
                              <dt className="eyebrow text-slate-600">{opt.duration}</dt>
                            ) : (
                              <dt className="sr-only">Price</dt>
                            )}
                            <dd className="font-display text-[1.375rem] tabular-nums text-slate-950">{opt.price}</dd>
                          </div>
                        ))}
                      </dl>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            <p className="text-small text-warmgray-700 lg:hidden">
              24-hour cancellation policy; late cancellations and no-shows are charged in full.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section bg-stone-100" aria-labelledby="amenities-title">
        <div className="container-site flex flex-col gap-14">
          <div className="flex flex-col gap-6">
            <Eyebrow rule>Spa Amenities</Eyebrow>
            <h2 id="amenities-title" className="max-w-2xl font-display text-h2 text-balance">
              Plunge, Steam &amp; Soak
            </h2>
          </div>
          <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
            {spaAmenities.map((a, i) => (
              <Reveal as="li" key={a.name} delay={i * 100} className="flex flex-col gap-5">
                {a.image ? (
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-300">
                    <Image src={a.image.src} alt={a.image.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                  </div>
                ) : (
                  <Placeholder label={a.name} description={a.placeholder} />
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-h3 font-medium">{a.name}</h3>
                  <p className="text-body text-warmgray-700">{a.detail}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <section className="tone-dark section-lg bg-slate-950" aria-labelledby="reviews-title">
        <div className="container-site flex flex-col gap-16">
          <h2 id="reviews-title" className="eyebrow text-center text-sky-300">
            What Guests Say
          </h2>
          <ul className="grid gap-14 lg:grid-cols-3 lg:gap-12">
            {spaReviews.map((r, i) => (
              <Reveal as="li" key={r.attribution} delay={i * 120}>
                <figure className="flex h-full flex-col gap-6 border-t border-slate-800 pt-8">
                  <span aria-hidden className="font-display text-[4rem] leading-none text-sky-300">
                    “
                  </span>
                  <blockquote className="-mt-8 font-display text-h3 font-light italic text-stone-50 text-pretty">
                    <p>{r.quote}</p>
                  </blockquote>
                  <figcaption className="eyebrow mt-auto text-stone-100">— {r.attribution}</figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Gifts & parties */}
      <ImageTextSection
        eyebrow="Gift Cards & Spa Parties"
        title="Share the Getaway"
        image={{
          src: "/images/spa-pedicure-service.jpg",
          alt: "Friends in robes laughing together during pedicures at The Spa",
        }}
        cta={{ label: "Plan a Spa Party", href: "#book" }}
      >
        <p>
          The Spa is the perfect place for a variety of parties, and each one is customized. Spa gift cards are available
          too — call The Spa at{" "}
          <a href={`tel:${site.phones.spa.tel}`} className="tabular-nums text-sky-700 underline underline-offset-4">
            {site.phones.spa.display}
          </a>
          .
        </p>
        <p>
          Follow along on Instagram at{" "}
          <a
            href={spaInstagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 underline underline-offset-4"
          >
            {spaInstagram.handle}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </ImageTextSection>

      {/* Book */}
      <section id="book" className="section scroll-mt-20 bg-stone-100" aria-labelledby="book-title">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <div className="flex flex-col gap-6">
              <Eyebrow rule>Book an Appointment</Eyebrow>
              <h2 id="book-title" className="font-display text-h2 text-balance">
                Reserve Your Time
              </h2>
              <p className="text-body text-warmgray-700">
                Request an appointment below, or call The Spa at{" "}
                <a href={`tel:${site.phones.spa.tel}`} className="tabular-nums text-sky-700 underline underline-offset-4">
                  {site.phones.spa.display}
                </a>
                . Please note: no phone calls in the spa.
              </p>
            </div>
            <HoursTable schedules={spaHours} columns={1} />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <DemoForm title="Book a spa appointment" fields={bookFields} submitLabel="Request an Appointment" />
          </div>
        </div>
      </section>
    </>
  );
}
