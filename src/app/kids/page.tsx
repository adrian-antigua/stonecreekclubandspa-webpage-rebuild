import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hero } from "@/components/ui/Hero";
import { HoursTable } from "@/components/ui/HoursTable";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { Placeholder } from "@/components/ui/Placeholder";
import { RateTable } from "@/components/ui/RateTable";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  birthdayIncludes,
  birthdayPackages,
  childcareDirector,
  familyWorkoutTimes,
  parentsNightOut,
  pebbleCreekFeatures,
  pebbleCreekFees,
  pebbleCreekReservations,
  swimLessonsUrl,
  youthAccess,
} from "@/content/kids";
import { hours } from "@/content/site";

export const metadata: Metadata = {
  title: "Kids & Family",
  description:
    "Pebble Creek childcare for ages 6 weeks–13 years, Parent's Night Out, birthday parties, youth fitness, junior tennis and swim lessons at Stone Creek Club & Spa.",
};

const pebbleCreekHours = hours.filter((s) => s.id === "pebble-creek");
const linkClass = "text-sky-700 underline underline-offset-4 hover:text-slate-950";

type Program = {
  label: string;
  title: string;
  line: string;
  href: string;
  image?: { src: string; alt: string };
  placeholder?: string;
};

const programs: Program[] = [
  {
    label: "Evenings Out",
    title: "Parent’s Night Out",
    line: "An adult evening for you, a themed night for them.",
    href: "#parents-night-out",
    image: { src: "/images/pebble-creek-ride-on-cars.jpg", alt: "Rows of colorful ride-on toy cars in Pebble Creek" },
  },
  {
    label: "Celebrations",
    title: "Birthday Parties",
    line: "Four party packages, all held after the club closes.",
    href: "#birthday-parties",
    placeholder: "Children gathered around a birthday cake in Pebble Creek",
  },
  {
    label: "Youth Fitness",
    title: "Youth Access",
    line: "What each age can use, and when.",
    href: "#youth-fitness",
    placeholder: "A teen member training on the strength floor during Family Workout Times",
  },
  {
    label: "Tennis",
    title: "Junior Tennis",
    line: "From Quickstart to the Elite Tournament Program.",
    href: "/tennis#junior",
    image: { src: "/images/junior-player-on-court.jpg", alt: "A young player in a white cap swinging on a Stone Creek court" },
  },
  {
    label: "Aquatics",
    title: "Swim Lessons",
    line: "With certified instructors from SafeWater Management.",
    href: "#swim",
    placeholder: "A SafeWater instructor teaching a young swimmer in the lap pool",
  },
];

export default function KidsPage() {
  return (
    <>
      <Hero
        size="page"
        eyebrow="Kids & Family"
        title="For the Whole Family"
        poster={{
          src: "/images/resort-pool-splash-zone.jpg",
          alt: "Resort pool splash zone with spray features under blue umbrellas and tall pines",
        }}
        cta={{ label: "Explore Pebble Creek", href: "#pebble-creek" }}
      />

      {/* Intro */}
      <section className="section-lg bg-stone-50">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow rule>Kids &amp; Family</Eyebrow>
            <h2 className="font-display text-display-lg font-light text-balance">Fun and Fitness for the Whole Family</h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-6 text-body-lg text-warmgray-700 lg:col-span-7 lg:pt-12">
            <p>
              Childcare for ages 6 weeks to 13 years, a resort-style saltwater pool with a zero-entry beach and spray
              features, junior tennis, swim lessons, and evenings designed just for kids — so the whole family can make a
              day of it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pebble Creek */}
      <ImageTextSection
        id="pebble-creek"
        tone="muted"
        eyebrow="Pebble Creek Childcare"
        title="Ages 6 Weeks to 13 Years"
        image={{
          src: "/images/pebble-creek-movie-area.jpg",
          alt: "Colorful kid-sized seating in the Pebble Creek movie area",
        }}
      >
        <p>
          Up to 2 hours of childcare a day is included with membership while parents are in the club or spa. Every member
          of the Pebble Creek staff is CPR &amp; AED trained.
        </p>
        <ul className="flex flex-col divide-y divide-stone-300 border-y border-stone-300">
          {pebbleCreekFeatures.map((f) => (
            <li key={f} className="py-3 text-slate-950">
              {f}
            </li>
          ))}
        </ul>
        <p className="text-small">
          Reservations are required, up to 5 days in advance — in the Stone Creek Members app, the member portal, or at{" "}
          <a href={`tel:${pebbleCreekReservations.tel}`} className={`tabular-nums ${linkClass}`}>
            {pebbleCreekReservations.display}
          </a>
          .
        </p>
      </ImageTextSection>

      {/* Hours, fees, director */}
      <section className="section bg-stone-50" aria-labelledby="pc-details-title">
        <h2 id="pc-details-title" className="sr-only">
          Pebble Creek hours and fees
        </h2>
        <div className="container-site grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <HoursTable schedules={pebbleCreekHours} columns={1} />
          <div className="flex flex-col gap-8">
            <RateTable
              caption="Guest childcare"
              columns={["Fee"]}
              rows={pebbleCreekFees.guest.map((r) => ({ label: r.label, values: [r.value] }))}
            />
            <RateTable
              caption="Member extended care"
              columns={["Fee"]}
              rows={pebbleCreekFees.extended.map((r) => ({ label: r.label, values: [r.value] }))}
            />
            <p className="text-small text-warmgray-700">
              Total stay may not exceed 3 hours; there is a 5-minute late grace period.
            </p>
          </div>
          <div className="flex flex-col gap-4 border-t border-slate-950 pt-6 md:col-span-2 lg:col-span-1">
            <p className="eyebrow text-slate-600">{childcareDirector.title}</p>
            <p className="font-display text-h2 font-light">{childcareDirector.name}</p>
            <p className="flex flex-col gap-1 text-body">
              <a href={`tel:${childcareDirector.phone.tel}`} className={`w-fit tabular-nums ${linkClass}`}>
                {childcareDirector.phone.display}
              </a>
              <a href={`mailto:${childcareDirector.email}`} className={`w-fit break-all ${linkClass}`}>
                {childcareDirector.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section bg-stone-100" aria-labelledby="programs-title">
        <div className="container-site flex flex-col gap-14">
          <SectionHeading eyebrow="Programs" title={<span id="programs-title">Something for Every Age</span>} />
          <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-5">
            {programs.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 80}>
                <Link href={p.href} className="group flex h-full flex-col">
                  {p.image ? (
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone-300">
                      <Image
                        src={p.image.src}
                        alt={p.image.alt}
                        fill
                        sizes="(min-width: 1024px) 18vw, 45vw"
                        className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-gentle)] group-hover:scale-[1.04]"
                      />
                    </div>
                  ) : (
                    <Placeholder label={p.title} description={p.placeholder!} compact />
                  )}
                  <span className="eyebrow pt-5 text-slate-600">{p.label}</span>
                  <span className="pt-2 font-display text-h3 font-medium text-slate-950 underline-offset-4 group-hover:underline">
                    {p.title}
                  </span>
                  <span className="pt-2 text-small text-warmgray-700">{p.line}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Parent's Night Out */}
      <section id="parents-night-out" className="tone-dark section scroll-mt-20 bg-slate-950" aria-labelledby="pno-title">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="Parent’s Night Out"
              title={<span id="pno-title">Enjoy an Adult Evening</span>}
              intro="Sign up for a Parents’ Night Out to enjoy a much-deserved adult evening while we entertain the kids!"
            />
            <dl className="grid grid-cols-2 gap-6 border-t border-slate-800 pt-6">
              <div className="flex flex-col gap-1">
                <dt className="eyebrow text-sky-300">Time</dt>
                <dd className="text-body text-stone-50">{parentsNightOut.time}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="eyebrow text-sky-300">Price</dt>
                <dd className="text-body text-stone-50">{parentsNightOut.price}</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-6 lg:col-start-7 lg:pt-10">
            <h3 className="eyebrow text-stone-100">Fall 2026</h3>
            <ol className="border-t border-stone-100">
              {parentsNightOut.dates.map((d) => (
                <li key={d.name} className="flex items-baseline gap-6 border-b border-slate-800 py-6">
                  <span className="w-24 shrink-0 font-display text-h3 font-light tabular-nums text-sky-300">{d.date}</span>
                  <span className="flex flex-col gap-1">
                    <span className="font-display text-h3 text-stone-50">{d.name}</span>
                    {d.detail && <span className="text-small text-stone-100">{d.detail}</span>}
                  </span>
                </li>
              ))}
            </ol>
            <p className="text-small text-stone-100">
              Reserve with {childcareDirector.name} at{" "}
              <a href={`tel:${childcareDirector.phone.tel}`} className="tabular-nums text-sky-300 underline underline-offset-4">
                {childcareDirector.phone.display}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Birthday parties */}
      <section id="birthday-parties" className="section scroll-mt-20 bg-stone-50" aria-labelledby="birthday-title">
        <div className="container-site flex flex-col gap-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <SectionHeading
              className="lg:col-span-6"
              eyebrow="Birthday Parties"
              title={<span id="birthday-title">Parties After Hours</span>}
              intro="All parties are held after the club closes. Every package includes:"
            />
            <ul className="flex flex-col divide-y divide-stone-300 border-y border-stone-300 lg:col-span-5 lg:col-start-8 lg:mt-10">
              {birthdayIncludes.map((item) => (
                <li key={item} className="py-3 text-body text-slate-950">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {birthdayPackages.map((pkg, i) => (
              <Reveal
                as="li"
                key={pkg.name}
                delay={i * 80}
                className="flex flex-col gap-4 border-t border-slate-950 pt-6"
              >
                <span aria-hidden className="font-display text-h2 font-light text-sky-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-h3 font-medium">{pkg.name}</h3>
                <p className="text-small text-warmgray-700">
                  {[pkg.ages, pkg.when].filter(Boolean).join(" · ")}
                  {pkg.note && (
                    <>
                      <br />
                      {pkg.note}
                    </>
                  )}
                </p>
                <p className="mt-auto pt-2 font-display text-h2 font-light tabular-nums">
                  {pkg.price}
                  <span className="ml-2 font-sans text-small font-normal text-warmgray-700">for 15 children</span>
                </p>
                <p className="text-small text-slate-600">{pkg.extra} each additional child</p>
              </Reveal>
            ))}
          </ul>
          <p className="text-body text-warmgray-700">
            Book with {childcareDirector.name} —{" "}
            <a href={`tel:${childcareDirector.phone.tel}`} className={`tabular-nums ${linkClass}`}>
              {childcareDirector.phone.display}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Youth access */}
      <section id="youth-fitness" className="section scroll-mt-20 bg-stone-100" aria-labelledby="youth-title">
        <div className="container-site flex flex-col gap-14">
          <SectionHeading eyebrow="Youth Fitness" title={<span id="youth-title">Youth Access Policy</span>} />
          <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
            {youthAccess.map((y, i) => (
              <Reveal as="li" key={y.ages} delay={i * 100} className="flex flex-col gap-4 border-t border-slate-950 pt-6">
                <h3 className="font-display text-h2 font-light">
                  Ages {y.ages}
                </h3>
                <p className="text-body text-warmgray-700">{y.body}</p>
              </Reveal>
            ))}
          </ul>
          <div className="flex flex-col gap-2 border-l-2 border-sky-500 bg-stone-50 px-6 py-5 md:flex-row md:items-baseline md:gap-8">
            <p className="eyebrow shrink-0 text-sky-700">Family Workout Times</p>
            <p className="text-body text-slate-950">{familyWorkoutTimes}</p>
          </div>
        </div>
      </section>

      {/* Swim */}
      <ImageTextSection
        id="swim"
        reverse
        eyebrow="Swim Lessons"
        title="Swim Lessons with SafeWater"
        image={{
          src: "/images/lap-pool-swimmer.jpg",
          alt: "A swimmer doing laps in the six-lane saltwater lap pool",
        }}
        cta={{ label: "Swim Lesson Details", href: swimLessonsUrl }}
      >
        <p>
          Stone Creek offers swim lessons in partnership with SafeWater Management and its certified instructors.
        </p>
        <p>
          The resort-style pool has a zero-entry beach and spray features, with lifeguards from just before Memorial Day
          through Labor Day. Children under 14 take a lifeguard rest period 10 minutes before each hour.
        </p>
      </ImageTextSection>
    </>
  );
}
