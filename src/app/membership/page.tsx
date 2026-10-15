import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DemoForm } from "@/components/ui/DemoForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hero } from "@/components/ui/Hero";
import { MembershipRates } from "@/components/ui/MembershipRates";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { visitFormFields } from "@/content/forms";
import {
  memberServicesTeam,
  memberships,
  newMemberBenefits,
  site,
  trainAwayCopy,
  virtualTourUrl,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Individual, Couple and Family memberships at Stone Creek Club & Spa — month-to-month, with no term commitment.",
};

const policyNotes = [
  {
    title: "Membership Holds",
    body: [
      "Memberships may be placed on hold for a minimum of 1 month and a maximum of 3 months per calendar year, with 30 days’ notice.",
      "A $75 monthly hold fee (plus tax) applies. It reserves your membership, so you won’t pay an enrollment fee when you reactivate. Holds for medical reasons are free for up to 3 months with physician documentation.",
    ],
  },
  {
    title: "Youth Access",
    body: [
      "Adult-only hours on the fitness floor, cardio floor and basketball court: Monday–Friday 11:00 AM–1:00 PM and Monday–Thursday 5:30–7:00 PM.",
      "Members 14–17 may enter the club unescorted. Members 13 and under must be checked in and supervised by an adult; ages 11–13 may use the strength and cardio floors during Family Workout Times (Thursday 7 PM–close, Friday 2 PM–close, Saturday & Sunday 1 PM–close) after completing YEP training.",
    ],
  },
  {
    title: "Guests",
    body: [
      "Members may bring up to 4 guests per day per membership, and a guest may visit a maximum of 6 times per calendar year. Guests under 18 require a liability waiver completed by a guardian, guests 16 and older must present a government-issued photo ID, and guests under 14 must be closely supervised by an adult.",
      "Guest fees per calendar day: with a member, $20 (ages 1–13) or $40 (14 and over). With a guest pass, $25 (1–13) or $50 (14 and over). Members of IHRSA affiliate clubs, $40.",
    ],
  },
  {
    title: "Traveling? TrainAway",
    body: [trainAwayCopy],
  },
];

export default function MembershipPage() {
  return (
    <>
      <Hero
        size="page"
        eyebrow="Membership"
        title="Become a Member"
        poster={{
          src: "/images/pool-deck-wetland-pond.jpg",
          alt: "The pool deck and its blue umbrellas seen across a wetland pond",
        }}
        cta={{ label: "Schedule a Visit", href: "#visit" }}
      />

      {/* Intro */}
      <section className="section-lg bg-stone-50">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="flex flex-col gap-6 lg:col-span-5">
            <Eyebrow rule>Membership</Eyebrow>
            <h2 className="font-display text-display-lg font-light">Everyday Getaway</h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-6 text-body-lg text-warmgray-700 lg:col-span-7 lg:pt-12">
            <p>
              Enjoy Northshore living as it was meant to be at Stone Creek Club &amp; Spa. Our spacious natural
              surroundings, genuine hospitality and limited enrollment allow our members the personal service, attention
              and space they deserve. Discover an environment where every detail — from the exquisite facilities,
              state-of-the-art equipment and luxurious amenities to the highly trained and caring staff — is focused on
              fulfilling your unique fitness, social and recreational needs.
            </p>
            <p>
              We invite you to visit Stone Creek Club &amp; Spa today. Once you’re here, you’ll understand why our members
              call Stone Creek their everyday getaway.
            </p>
            <div className="pt-2">
              <Button variant="text" href={virtualTourUrl}>
                Take a Virtual Tour
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Rates */}
      <section className="section bg-stone-100" aria-labelledby="rates-title">
        <div className="container-site flex flex-col gap-14">
          <div className="flex flex-col gap-6">
            <Eyebrow rule>Membership Types &amp; Rates</Eyebrow>
            <h2 id="rates-title" className="max-w-2xl font-display text-h2 text-balance">
              Individual, Couple &amp; Family
            </h2>
          </div>
          <MembershipRates memberships={memberships} />

          <div className="grid gap-10 border-t border-stone-300 pt-12 md:grid-cols-12 md:gap-10">
            <h3 className="font-display text-h3 font-medium md:col-span-4">A Little More About Our Memberships</h3>
            <div className="grid gap-8 text-body text-warmgray-700 sm:grid-cols-2 md:col-span-8">
              <div className="flex flex-col gap-3">
                <p className="eyebrow text-slate-600">Month-to-month</p>
                <p>
                  All Stone Creek Memberships are handled on a month-by-month basis, so there is no requirement that members
                  join for any particular length of time.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="eyebrow text-slate-600">Fair pricing</p>
                <p>
                  It is our goal to protect the value of our memberships and treat our members with respect by ensuring fair
                  and consistent pricing across our membership base.
                </p>
              </div>
              <p className="text-small sm:col-span-2">
                Please note that some facilities, programs and services are age-restricted, details of which are provided
                in the Member Guide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Member Benefits */}
      <section className="tone-dark section bg-slate-950" aria-labelledby="benefits-title">
        <div className="container-site flex flex-col gap-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              tone="dark"
              eyebrow="Welcome"
              title={<span id="benefits-title">New Member Benefits</span>}
              intro="New members will enjoy various New Member Benefits, including an array of complimentary and discounted club services."
            />
            <p className="max-w-xs text-small text-stone-100">
              The service package is doubled for Couple and Family memberships. Benefits expire — use them within 60 days
              of joining.
            </p>
          </div>
          <ol className="grid border-t border-slate-800 sm:grid-cols-2 lg:grid-cols-5">
            {newMemberBenefits.map((benefit, i) => (
              <Reveal
                as="li"
                key={benefit}
                delay={i * 80}
                className="flex flex-col gap-4 border-b border-slate-800 py-8 sm:pr-8 lg:border-b-0 lg:pl-6 lg:[&:not(:first-child)]:border-l lg:first:pl-0"
              >
                <span aria-hidden className="font-display text-h2 font-light text-sky-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-body text-stone-50">{benefit}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Policies */}
      <section className="section bg-stone-50" aria-labelledby="policies-title">
        <div className="container-site flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <Eyebrow rule>From the Member Guide</Eyebrow>
            <h2 id="policies-title" className="font-display text-h2">
              Good to Know
            </h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2 md:gap-10 xl:grid-cols-4">
            {policyNotes.map((note, i) => (
              <Reveal key={note.title} delay={i * 100} className="flex flex-col gap-4 border-t border-slate-950 pt-6">
                <h3 className="font-display text-h3 font-medium">{note.title}</h3>
                {note.body.map((p) => (
                  <p key={p} className="text-body text-warmgray-700">
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
          <p className="text-small text-warmgray-700">
            Questions about any policy? Member Services can help —{" "}
            <a href={`tel:${site.phones.membership.tel}`} className="tabular-nums text-sky-700 underline underline-offset-4">
              {site.phones.membership.display}
            </a>
            .
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-stone-100" aria-labelledby="team-title">
        <div className="container-site flex flex-col gap-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-6">
              <Eyebrow rule>Member Services</Eyebrow>
              <h2 id="team-title" className="font-display text-h2">
                Meet Our Team
              </h2>
            </div>
            <p className="max-w-md text-body text-warmgray-700">
              Meet with our Member Services team to have all your questions answered.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-8 lg:grid-cols-6 lg:gap-x-6">
            {memberServicesTeam.map((person, i) => (
              <Reveal as="li" key={person.email} delay={(i % 6) * 80} className="flex flex-col gap-4">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-300">
                  <Image
                    src={person.photo}
                    alt={`Portrait of ${person.name}`}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 30vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-h3 font-medium leading-tight">{person.name}</h3>
                  <p className="text-small text-slate-600">{person.title}</p>
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-2 w-fit text-small text-sky-700 underline underline-offset-4 hover:text-slate-950"
                  >
                    Contact {person.name.split(" ")[0]}
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="section scroll-mt-20 bg-stone-50" aria-labelledby="visit-title">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Eyebrow rule>Schedule a Visit</Eyebrow>
            <h2 id="visit-title" className="font-display text-h2 text-balance">
              Stop By for a Tour
            </h2>
            <p className="text-body-lg text-warmgray-700">
              We invite you to visit Stone Creek for a tour! Meet with our Member Services team to have all your
              questions answered.
            </p>
            <p className="text-body text-warmgray-700">
              Prefer to call?{" "}
              <a href={`tel:${site.phones.membership.tel}`} className="tabular-nums text-sky-700 underline underline-offset-4">
                {site.phones.membership.display}
              </a>
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <DemoForm title="Schedule a visit" fields={visitFormFields} submitLabel="Request a Tour" />
          </div>
        </div>
      </section>
    </>
  );
}
