import { Button } from "@/components/ui/Button";
import { CardRail } from "@/components/ui/CardRail";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hero } from "@/components/ui/Hero";
import { HoursTable } from "@/components/ui/HoursTable";
import { ImageTextSection } from "@/components/ui/ImageTextSection";
import { PullQuote } from "@/components/ui/PullQuote";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatBand } from "@/components/ui/StatBand";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import {
  amenities,
  directionsUrl,
  fullAddress,
  hours,
  memberships,
  site,
  stats,
  testimonials,
} from "@/content/site";

const VISIT_HREF = "/membership#visit";

export default function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <Hero
        title={site.tagline}
        subtitle={site.positioning}
        poster={{
          src: "/images/tennis-courts-dusk-walkway.jpg",
          alt: "Stone Creek's lit tennis courts at dusk, with a walkway leading to the clubhouse",
        }}
        videoId={site.virtualTourVideoId}
        videoTitle="Stone Creek Club & Spa virtual tour (background)"
        cta={{ label: "Schedule a Visit", href: VISIT_HREF }}
        scrollTo="#welcome"
      />

      {/* 2 — Intro */}
      <section id="welcome" className="section-lg scroll-mt-20 bg-stone-50">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <Eyebrow rule>Since 2009 · Covington, Louisiana</Eyebrow>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-8 lg:col-span-8">
            <h2 className="font-display text-h2 font-light text-balance">
              From the moment you turn onto the property, you’ll know you’ve arrived someplace special.
            </h2>
            <div className="grid gap-6 text-body text-warmgray-700 md:grid-cols-2 md:gap-10">
              <p>
                Stone Creek Club &amp; Spa is the Northshore Sports Resort, providing members with a relaxing &amp;
                inviting destination for their fitness, social and lifestyle needs.
              </p>
              <p>
                Stone Creek is surrounded by lush green space bordering on natural wetlands, designed to bring you closer
                to nature in the practice of mind and body fitness.
              </p>
            </div>
            <div>
              <Button variant="text" href="/about">
                Our Story
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — Stat band */}
      <StatBand stats={stats} />

      {/* 4 — Amenities */}
      <section className="section bg-stone-50">
        <div className="container-site">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Amenities" title="Everything under one roof" />
            <Button variant="text" href="/membership">
              Explore Membership
            </Button>
          </div>
          <CardRail cards={amenities} label="Amenities" />
        </div>
      </section>

      {/* 5 — Pillars */}
      <ImageTextSection
        eyebrow="Tennis & Pickleball"
        title="Where Tennis Thrives"
        image={{
          src: "/images/tennis-mixed-doubles-play.jpg",
          alt: "A mixed doubles pair returning a shot on a Stone Creek hard court",
        }}
        cta={{ label: "Explore Tennis", href: "/tennis" }}
      >
        <p>
          Whether you play tennis socially or competitively, Stone Creek has the facilities and programming you’ve been
          looking for. The Stone Creek tennis campus is one of the finest in the state.
        </p>
        <p>
          Fourteen tennis courts — nine clay Hydro-Courts and five hard — plus four pickleball courts and a lighted
          practice court, all brilliantly lit with 12,000 watts per court.
        </p>
      </ImageTextSection>

      <ImageTextSection
        reverse
        tone="muted"
        eyebrow="The Spa"
        title="Escape to The Spa"
        image={{
          src: "/images/spa-guests-robes-champagne.jpg",
          alt: "Four friends in white robes sharing champagne in the spa lounge",
        }}
        cta={{ label: "Escape to The Spa", href: "/spa" }}
      >
        <p>
          Experience personalized pampering in the serene natural beauty of the Northshore. Our full-service spa offers
          a range of luxurious treatments, including massages, facials, body therapies, nail care, and hair removal.
        </p>
        <p>
          As a spa guest, enjoy full access to Stone Creek’s premium fitness facilities for the day, including our
          expansive outdoor pool area, group fitness classes, hot tub, and wet sauna.
        </p>
      </ImageTextSection>

      <ImageTextSection
        eyebrow="Family & Pebble Creek"
        title="Fun and Fitness for the Whole Family"
        image={{
          src: "/images/pebble-creek-ride-on-cars.jpg",
          alt: "A toddler smiling from a ride-on toy car in Pebble Creek",
        }}
        cta={{ label: "Explore Family Offerings", href: "/kids" }}
      >
        <p>
          From engaging youth programs to complimentary childcare, Stone Creek Club and Spa offers something for
          everyone to enjoy.
        </p>
        <p>
          Children ages 6 weeks to 13 years on a Stone Creek membership are welcomed in Pebble Creek for up to two hours
          each day, with a shaded playground, an iWall interactive fitness-gaming system, and staff who are all CPR &amp;
          AED trained.
        </p>
      </ImageTextSection>

      {/* 6 — Virtual tour */}
      <section className="tone-dark section-lg bg-slate-950">
        <div className="container-site flex flex-col gap-12">
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Virtual Tour"
            title="Take a Virtual Tour"
            intro="We invite you to visit Stone Creek Club & Spa today. Once you’re here, you’ll understand why our members call Stone Creek their everyday getaway."
          />
          <Reveal className="mx-auto w-full max-w-5xl">
            <VideoEmbed
              id={site.virtualTourVideoId}
              title="Take a Virtual Tour of Stone Creek Club & Spa"
              poster={{
                src: "/images/pool-deck-wetland-pond.jpg",
                alt: "The pool deck and its blue umbrellas seen across a wetland pond",
              }}
            />
          </Reveal>
        </div>
      </section>

      {/* 7 — Testimonial */}
      <PullQuote quote={testimonials.carla.quote} attribution={testimonials.carla.attribution} />

      {/* 8 — Membership */}
      <section className="section bg-stone-100" aria-labelledby="membership-title">
        <div className="container-site flex flex-col gap-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-6">
              <Eyebrow rule>Membership</Eyebrow>
              <h2 id="membership-title" className="font-display text-h2 text-balance">
                Become a Member
              </h2>
              <p className="text-body-lg text-warmgray-700">
                Every Stone Creek membership is month-to-month, with no term commitment.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-8">
              <Button href={VISIT_HREF}>Schedule a Visit</Button>
              <Button variant="text" href="/membership">
                Membership Details
              </Button>
            </div>
          </div>

          <ul className="grid border-t border-slate-950 md:grid-cols-3">
            {memberships.map((m, i) => (
              <Reveal
                as="li"
                key={m.name}
                delay={i * 100}
                className="flex flex-col gap-5 border-b border-stone-300 py-10 md:border-b-0 md:px-10 md:first:pl-0 md:last:pr-0 md:[&:not(:first-child)]:border-l"
              >
                <h3 className="eyebrow text-slate-600">{m.name}</h3>
                <p className="font-display text-display-lg font-light">
                  {m.rate}
                  <span className="ml-2 font-sans text-small font-normal text-warmgray-700">/ month plus tax</span>
                </p>
                <p className="text-body text-warmgray-700">{m.covers}</p>
                <p className="mt-auto text-small text-slate-600">Enrollment {m.enrollment} (plus tax)</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 9 — Location */}
      <section className="section bg-stone-50" aria-labelledby="visit-title">
        <div className="container-site grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Eyebrow rule>Visit</Eyebrow>
            <h2 id="visit-title" className="font-display text-h2 text-balance">
              Covington, on the Northshore
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4">
            <h3 className="eyebrow text-slate-600">Address</h3>
            <address className="text-body-lg not-italic">{fullAddress}</address>
            <a href={`tel:${site.phones.main.tel}`} className="text-body tabular-nums text-warmgray-700 hover:text-slate-950">
              {site.phones.main.display}
            </a>
            <div className="pt-2">
              <Button variant="text" href={directionsUrl}>
                Get Directions
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-4">
            <HoursTable schedules={hours.filter((h) => h.id === "club")} columns={1} />
          </div>
        </div>
      </section>
    </>
  );
}
