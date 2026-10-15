import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DemoForm, type FormField } from "@/components/ui/DemoForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hero } from "@/components/ui/Hero";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatBand } from "@/components/ui/StatBand";
import { site } from "@/content/site";
import {
  courtAwards,
  courtReservationUrl,
  courtStats,
  juniorPrograms,
  pickleballOpenPlay,
  pros,
  tennisEvents2026,
  usaYouthProgressionUrl,
} from "@/content/tennis";

export const metadata: Metadata = {
  title: "Tennis & Pickleball",
  description:
    "Where Tennis Thrives: 19 lit courts — 9 clay Hydro-Courts, 5 hard courts, 4 pickleball courts and a lighted practice court — with USPTA professionals at Stone Creek Club & Spa.",
};

const reserveFields: FormField[] = [
  { type: "text", name: "name", label: "Name", required: true, half: true, autoComplete: "name" },
  { type: "email", name: "email", label: "Email", required: true, half: true, autoComplete: "email" },
  { type: "tel", name: "phone", label: "Phone number", half: true, autoComplete: "tel" },
  {
    type: "select",
    name: "court",
    label: "Court",
    options: ["Clay Hydro-Court", "Hard court", "Pickleball court"],
    half: true,
  },
  { type: "text", name: "when", label: "Preferred day & time", required: true },
  { type: "textarea", name: "notes", label: "Notes", rows: 3 },
];

export default function TennisPage() {
  return (
    <>
      <Hero
        size="page"
        eyebrow="Tennis & Pickleball"
        title="Where Tennis Thrives"
        poster={{
          src: "/images/tennis-hard-courts-aerial.jpg",
          alt: "Blue and green hard courts lined with Stone Creek windscreens, light poles and tall pines",
        }}
        cta={{ label: "Reserve a Court", href: "#reserve" }}
      />

      {/* Intro */}
      <section className="section-lg bg-stone-50">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <Eyebrow rule>The Heart of Tennis</Eyebrow>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-8 lg:col-span-8">
            <h2 className="font-display text-h2 font-light text-balance">
              The Stone Creek tennis campus is one of the finest in the state.
            </h2>
            <div className="grid gap-6 text-body text-warmgray-700 md:grid-cols-2 md:gap-10">
              <p>
                Whether you play tennis socially or competitively, Stone Creek has the facilities and programming you’ve
                been looking for — with spacious viewing areas and courts brilliantly lit for a professional-quality
                playing experience.
              </p>
              <p>
                Exceptional courts, professional coaching, and programs for every age and skill level, led by the club’s
                USPTA professionals.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Courts */}
      <StatBand stats={courtStats} title="The courts" stacked />

      {/* Programs */}
      <ImageTextSection
        id="adult"
        eyebrow="Adult Tennis"
        title="Casual or Competitive"
        image={{
          src: "/images/tennis-courts-dusk-walkway.jpg",
          alt: "Adults playing under the lights on Stone Creek's courts at dusk",
        }}
        cta={{ label: "See the 2026 Schedule", href: "#events" }}
      >
        <p>
          Take your game to the next level or simply enjoy time on the courts with friends. Stone Creek’s adult tennis
          programs aim to offer both casual and competitive players the best possible tennis experience.
        </p>
        <p>
          Stone Creek offers a variety of clinics for players at all levels. The club is also home to all levels of
          seasonal USTA and Northlake Tennis leagues, from singles to combos &amp; mixed doubles, and from beginners to
          seasoned competitors.
        </p>
      </ImageTextSection>

      <ImageTextSection
        id="junior"
        reverse
        tone="muted"
        eyebrow="Junior Tennis"
        title="Built for Every Stage"
        image={{
          src: "/images/junior-player-on-court.jpg",
          alt: "A young player in a white cap swinging on a Stone Creek court",
        }}
        cta={{ label: "USTA Youth Tennis Progression", href: usaYouthProgressionUrl }}
      >
        <p>
          Stone Creek’s Junior Tennis Programs aim to provide students with the highest level of instruction available
          in a healthy &amp; positive environment that will contribute to your child’s athletic and personal development.
        </p>
        <dl className="flex flex-col divide-y divide-stone-300 border-y border-stone-300">
          {juniorPrograms.map((program) => (
            <div key={program.name} className="flex flex-col gap-1 py-4">
              <dt className="font-medium text-slate-950">{program.name}</dt>
              <dd className="text-small">{program.description}</dd>
            </div>
          ))}
        </dl>
        <p className="text-small">
          For class schedules, rates &amp; times, please call{" "}
          <a href={`tel:${site.phones.main.tel}`} className="tabular-nums text-sky-700 underline underline-offset-4">
            {site.phones.main.display}
          </a>
          .
        </p>
      </ImageTextSection>

      <ImageTextSection
        id="pickleball"
        eyebrow="Pickleball"
        title="Easy to Learn, Fun to Play"
        image={{
          src: "/images/pickleball-tournament-group.jpg",
          alt: "Pickleball tournament medalists posing with paddles on a Stone Creek court",
        }}
        cta={{ label: "Reserve a Court", href: "#reserve" }}
      >
        <p>
          Pickleball is one of the fastest-growing sports in the country. It’s a fun, social game designed to appeal to
          all ages &amp; all fitness levels. It’s easy to learn and fun to play, and no tennis experience is needed!
        </p>
        <p>
          Reserving a pickleball court is as easy as reserving a tennis court. Court reservations are 2 hours long and can
          be made 3 days in advance.
        </p>
        <div className="border-y border-stone-300 py-5">
          <p className="eyebrow mb-3 text-slate-600">Open Play — all skill levels, no sign-up needed</p>
          <ul className="flex flex-col gap-1">
            {pickleballOpenPlay.map((slot) => (
              <li key={slot.day} className="flex justify-between gap-4 text-slate-950">
                <span>{slot.day}</span>
                <span className="tabular-nums text-warmgray-700">{slot.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </ImageTextSection>

      {/* Pros */}
      <section id="pros" className="section bg-stone-100" aria-labelledby="pros-title">
        <div className="container-site flex flex-col gap-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-6">
              <Eyebrow rule>Meet Our Pros</Eyebrow>
              <h2 id="pros-title" className="font-display text-h2">
                Tennis Professionals
              </h2>
            </div>
          </div>
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {pros.map((pro, i) => (
              <Reveal as="li" key={pro.email} delay={i * 100} className="flex flex-col gap-5">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-300">
                  <Image
                    src={pro.photo}
                    alt={`Portrait of ${pro.name}`}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="eyebrow text-slate-600">{pro.title}</p>
                  <h3 className="font-display text-h3 font-medium">{pro.name}</h3>
                </div>
                <p className="text-small text-warmgray-700">{pro.bio}</p>
                <a
                  href={`mailto:${pro.email}`}
                  className="mt-auto w-fit text-small text-sky-700 underline underline-offset-4 hover:text-slate-950"
                >
                  Email {pro.name.split(" ")[0]}
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="section scroll-mt-20 bg-stone-50" aria-labelledby="events-title">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Eyebrow rule>Calendar</Eyebrow>
            <h2 id="events-title" className="font-display text-h2 text-balance">
              2026 Tennis &amp; Pickleball Schedule
            </h2>
            <p className="text-body text-warmgray-700">
              Proud host of The Mauti, supporting the Mauti Cancer Fund, and of Hogwatch’s Pickle &amp; Pork Tournament.
            </p>
          </div>
          <ol className="grid border-t border-slate-950 sm:grid-cols-2 sm:gap-x-10 lg:col-span-8">
            {tennisEvents2026.map((event) => (
              <li key={event.name} className="flex items-baseline gap-6 border-b border-stone-300 py-4">
                <span className="w-36 shrink-0 whitespace-nowrap font-display text-[1.375rem] font-light tabular-nums text-slate-950">
                  {event.date}
                </span>
                <span className="text-body text-warmgray-700">{event.name}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Awards */}
      <section className="tone-dark bg-slate-950 py-16 md:py-20" aria-labelledby="awards-title">
        <div className="container-site flex flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
          <h2 id="awards-title" className="eyebrow text-sky-300">
            Award Winning Courts
          </h2>
          <ul className="flex flex-col gap-8 md:flex-row md:gap-16">
            {courtAwards.map((award) => (
              <li key={award.source} className="flex flex-col gap-1">
                <span className="font-display text-h3 font-light italic text-stone-50">{award.title}</span>
                <span className="eyebrow text-stone-100">{award.source}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="section scroll-mt-20 bg-stone-100" aria-labelledby="reserve-title">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Eyebrow rule>Reserve a Court</Eyebrow>
            <h2 id="reserve-title" className="font-display text-h2 text-balance">
              Book Your Court Time
            </h2>
            <p className="text-body text-warmgray-700">
              Members reserve courts through Club Automation — online through the Member Portal, in the Stone Creek Member
              App, or by calling the club at{" "}
              <a href={`tel:${site.phones.main.tel}`} className="tabular-nums text-sky-700 underline underline-offset-4">
                {site.phones.main.display}
              </a>
              . Reservations are complimentary for members.
            </p>
            <p className="text-small text-warmgray-700">
              Prime time: Monday–Thursday 9 AM–12 PM &amp; 5–8 PM · Friday–Saturday 9 AM–12 PM.
            </p>
            <div>
              <Button variant="outline" href={courtReservationUrl}>
                Member Login to Reserve
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <DemoForm title="Request a court" fields={reserveFields} submitLabel="Request a Court" />
          </div>
        </div>
      </section>
    </>
  );
}
