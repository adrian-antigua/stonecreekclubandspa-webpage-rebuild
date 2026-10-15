import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hero } from "@/components/ui/Hero";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { RateTable } from "@/components/ui/RateTable";
import { Reveal } from "@/components/ui/Reveal";
import { ScheduleTable } from "@/components/ui/ScheduleTable";
import { SectionHeading } from "@/components/ui/SectionHeading";
import schedule from "@/data/schedule.json";
import {
  adultOnlyHours,
  classFormats,
  fitnessDirector,
  floors,
  fstRates,
  heatedClasses,
  pilatesCoordinator,
  pilatesRates,
  reformerClasses,
  studios,
  trainers,
  trainingPillars,
  trainingRates,
} from "@/content/fitness";

export const metadata: Metadata = {
  title: "Fitness",
  description:
    "Two floors of strength and cardio, 75+ complimentary weekly classes across four studios, FITCORE & Pilates Reformer, Fascial Stretch Therapy and personal training at Stone Creek Club & Spa.",
};

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const CATEGORIES = ["Strength", "Cardio", "Cycling", "Mind Body", "Aquatics"];

const linkClass = "text-sky-700 underline underline-offset-4 hover:text-slate-950";

export default function FitnessPage() {
  return (
    <>
      <Hero
        size="page"
        eyebrow="Fitness"
        title="Fitness and Beyond"
        poster={{
          src: "/images/group-fitness-barbell-class.jpg",
          alt: "A packed group strength class lifting barbells in a studio with floor-to-ceiling windows",
        }}
        cta={{ label: "See the Schedule", href: "#schedule" }}
      />

      {/* Intro + floors */}
      <section className="section-lg bg-stone-50">
        <div className="container-site flex flex-col gap-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="flex flex-col gap-6 lg:col-span-5">
              <Eyebrow rule>The Fitness Floor</Eyebrow>
              <h2 className="font-display text-display-lg font-light text-balance">Experience Fitness at Its Best</h2>
            </Reveal>
            <Reveal delay={120} className="flex flex-col gap-6 text-body-lg text-warmgray-700 lg:col-span-7 lg:pt-12">
              <p>
                Abundant natural light, two-story windows, tall pine ceilings and beautiful views. Stone Creek combines the
                intimate, personalized feel of boutique studios with the expansive variety and amenities of a premier
                health club.
              </p>
              <p className="text-body">
                More than 120 pieces of strength and cardio equipment, 75+ complimentary group classes a week across four
                studios, and private and small group training.
              </p>
            </Reveal>
          </div>

          <ul className="grid border-t border-slate-950 md:grid-cols-2">
            {floors.map((floor, i) => (
              <Reveal
                as="li"
                key={floor.level}
                delay={i * 120}
                className="flex flex-col gap-6 border-b border-stone-300 py-10 md:border-b-0 md:px-10 md:first:pl-0 md:last:border-l md:last:pr-0"
              >
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-h2 font-light">{floor.title}</h3>
                  <p className="eyebrow text-slate-600">{floor.level}</p>
                </div>
                <ul className="flex flex-wrap gap-x-3 gap-y-2 text-body text-warmgray-700">
                  {floor.items.map((item, j) => (
                    <li key={item} className="flex items-center gap-3">
                      {j > 0 && (
                        <span aria-hidden className="text-sky-500">
                          ·
                        </span>
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Adult-only hours */}
      <section className="tone-dark bg-slate-950 py-14 md:py-16" aria-labelledby="adult-hours-title">
        <div className="container-site flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-16">
          <h2 id="adult-hours-title" className="eyebrow shrink-0 text-sky-300">
            Adult-only hours (18+)
          </h2>
          <p className="font-display text-h3 font-light text-stone-50 md:text-right">
            Fitness floor, cardio deck &amp; basketball court — {adultOnlyHours}
          </p>
        </div>
      </section>

      {/* Group fitness */}
      <section id="group-fitness" className="section scroll-mt-20 bg-stone-100" aria-labelledby="gf-title">
        <div className="container-site flex flex-col gap-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <SectionHeading
              className="lg:col-span-6"
              eyebrow="Group Fitness"
              title={<span id="gf-title">Unlimited Classes – Unlimited Results</span>}
              intro="75+ complimentary classes each week across four studios — complimentary for members 14 and older."
            />
            <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-6 lg:pt-10">
              <div className="flex flex-col gap-3 border-t border-slate-950 pt-5">
                <dt className="eyebrow text-slate-600">Four studios</dt>
                <dd>
                  <ul className="flex flex-col gap-1 text-body text-slate-950">
                    {studios.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="flex flex-col gap-3 border-t border-slate-950 pt-5">
                <dt className="eyebrow text-slate-600">Heated yoga program</dt>
                <dd className="flex flex-col gap-3 text-small text-warmgray-700">
                  <p>
                    Infrared heat: hot classes run 95–105°, warm classes 83–93°. Bring a mat.
                  </p>
                  <p className="text-slate-950">{heatedClasses.join(" · ")}</p>
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="eyebrow text-slate-600">Class formats</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 font-display text-h3 font-light text-slate-950">
              {classFormats.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="text-small text-warmgray-700">
              Peak Performance is a HYROX-style class and requires registration.
            </p>
          </div>

          <aside className="flex flex-col gap-3 border-l-2 border-sky-500 bg-stone-50 px-6 py-5 md:flex-row md:items-baseline md:gap-8">
            <p className="eyebrow shrink-0 text-sky-700">New — SHIFT Studio</p>
            <p className="text-body text-warmgray-700">
              A dual-purpose cycling and small group training studio with enhanced audio, updated lighting and a refreshed
              layout. Closed for construction from Monday, October 26, with a target reopening the week of November 2.
              Bikes are reserved in the Stages Studio+ app, opening 1 hour before class.
            </p>
          </aside>

          <div id="schedule" className="flex scroll-mt-28 flex-col gap-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h3 className="font-display text-h2 font-light">Class Schedule</h3>
              <p className="max-w-md text-small text-warmgray-700">
                <span className="eyebrow mr-2 bg-slate-950 px-2 py-1 text-stone-50">Sample data</span>
                Real class names and studios, illustrative times. The club’s Fall 2026 Group Fitness Schedule took effect
                August 3, 2026.
              </p>
            </div>
            <ScheduleTable classes={schedule.classes} days={DAYS} categories={CATEGORIES} />
          </div>
        </div>
      </section>

      {/* FITCORE / Pilates */}
      <ImageTextSection
        id="pilates"
        eyebrow="FITCORE & Pilates"
        title="The Reformer Studio"
        image={{
          src: "/images/pilates-reformer-studio.jpg",
          alt: "Three women working out on Pilates reformers by tall windows",
        }}
      >
        <p>
          Private sessions or small groups of up to four on the reformer, led by classically trained instructors who have
          completed more than 215 hours of training.
        </p>
        <RateTable
          caption="Reformer classes (members)"
          columns={["Per class"]}
          rows={reformerClasses.map((r) => ({ label: r.label, values: [r.member] }))}
        />
        <RateTable
          caption="Training rates"
          columns={["Member", "Non-member"]}
          rows={pilatesRates.map((r) => ({ label: r.label, values: [r.member, r.nonMember] }))}
        />
        <p className="text-small">
          Questions? {pilatesCoordinator.name}, {pilatesCoordinator.title} —{" "}
          <a href={`mailto:${pilatesCoordinator.email}`} className={linkClass}>
            {pilatesCoordinator.email}
          </a>
        </p>
      </ImageTextSection>

      {/* FST */}
      <ImageTextSection
        id="fst"
        reverse
        tone="muted"
        eyebrow="Fascial Stretch Therapy"
        title="The Art of Manual Therapy and Movement, Merged with Science"
        image={{
          src: "/images/fst-stretch-studio.jpg",
          alt: "Stretch therapy tables in a bright studio with floor-to-ceiling windows overlooking the pines",
        }}
      >
        <p>
          Table-based assisted stretching for faster recovery, decreased stress and improved posture — with at least 50%
          better results than traditional stretching. Cupping can be added to any session.
        </p>
        <RateTable
          caption="Rates effective November 2025"
          columns={["Member", "Non-member"]}
          rows={fstRates.map((r) => ({ label: r.label, values: [r.member, r.nonMember] }))}
        />
        <p className="text-small">
          Book with{" "}
          <a href={`mailto:${fitnessDirector.email}`} className={linkClass}>
            {fitnessDirector.email}
          </a>
          .
        </p>
      </ImageTextSection>

      {/* Personal training */}
      <section id="training" className="tone-dark section scroll-mt-20 bg-slate-950" aria-labelledby="pt-title">
        <div className="container-site flex flex-col gap-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col gap-8 lg:col-span-6">
              <SectionHeading
                tone="dark"
                eyebrow="Personal Training"
                title={<span id="pt-title">Meet Our Lifestyle Professional Trainers</span>}
                intro="Each of our trainers holds at least one nationally accredited certification, completes yearly continuing education and is experienced in developing safe & effective workout programs."
              />
              <ul className="flex flex-wrap gap-x-6 gap-y-2 font-display text-h3 font-light italic text-sky-300">
                {trainingPillars.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 lg:col-span-5 lg:col-start-8 lg:pt-10">
              <RateTable
                tone="dark"
                caption="Session rates"
                columns={["60 min", "30 min & semi-private"]}
                rows={trainingRates.map((r) => ({ label: r.level, values: [r.sixty, r.thirty] }))}
              />
              <p className="text-small text-stone-100">
                24-hour cancellation policy on personal training and Pilates Reformer; late cancellations and no-shows are
                charged in full.
              </p>
            </div>
          </div>

          <ul className="grid border-t border-slate-800 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
            {trainers.map((t, i) => (
              <Reveal as="li" key={t.name} delay={(i % 3) * 80} className="flex flex-col gap-2 border-b border-slate-800 py-7">
                <h3 className="font-display text-h3 font-medium text-stone-50">{t.name}</h3>
                <p className="text-small text-stone-100">{t.credentials}</p>
                <p className="eyebrow mt-1 text-sky-300">{t.focus}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="section bg-stone-50" aria-labelledby="fitness-contact-title">
        <div className="container-site flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <Eyebrow rule>Get Started</Eyebrow>
            <h2 id="fitness-contact-title" className="max-w-2xl font-display text-h2 text-balance">
              New members receive two one-hour personal training sessions or a FITCORE class.
            </h2>
            <p className="text-body text-warmgray-700">
              {fitnessDirector.name}, {fitnessDirector.title} —{" "}
              <a href={`mailto:${fitnessDirector.email}`} className={linkClass}>
                {fitnessDirector.email}
              </a>
            </p>
          </div>
          <Button href="/membership#visit">Schedule a Visit</Button>
        </div>
      </section>
    </>
  );
}
