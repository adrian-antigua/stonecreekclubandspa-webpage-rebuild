import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { HeroVideo } from "./HeroVideo";

type HeroProps = {
  title: ReactNode;
  /** Short line under the headline. */
  subtitle?: ReactNode;
  /** Small tracked label above the headline. */
  eyebrow?: ReactNode;
  poster: { src: string; alt: string };
  /** YouTube ID for a muted background loop; the poster shows until it plays (and on mobile). */
  videoId?: string;
  videoTitle?: string;
  cta?: { label: string; href: string };
  /** Anchor the scroll cue points to. */
  scrollTo?: string;
  /** "full" fills the viewport (home); "page" is a shorter hero for inner pages. */
  size?: "full" | "page";
};

/** Full-bleed cinematic hero. Marks itself as [data-nav-hero] so the nav starts transparent. */
export function Hero({ title, subtitle, eyebrow, poster, videoId, videoTitle, cta, scrollTo, size = "full" }: HeroProps) {
  return (
    <section
      data-nav-hero
      className={cn(
        "tone-dark relative flex items-end overflow-hidden bg-slate-950 text-stone-50",
        size === "full" ? "min-h-[100svh]" : "min-h-[72svh] md:min-h-[78svh]",
      )}
    >
      <Image src={poster.src} alt={poster.alt} fill preload sizes="100vw" className="animate-slow-zoom object-cover" />
      {videoId && <HeroVideo id={videoId} title={videoTitle ?? "Background video"} />}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-slate-950/45"
      />
      <div className="container-site relative flex flex-col items-center gap-7 pb-20 text-center md:pb-24">
        {eyebrow && <p className="eyebrow text-stone-100">{eyebrow}</p>}
        <h1 className="font-display text-display-xl font-light uppercase text-balance">{title}</h1>
        {subtitle && <p className="font-display text-h3 font-light italic text-stone-100">{subtitle}</p>}
        {cta && (
          <Button href={cta.href} tone="dark" className="mt-2">
            {cta.label}
          </Button>
        )}
        {scrollTo && (
          <a href={scrollTo} className="eyebrow mt-6 flex flex-col items-center gap-3 text-stone-100">
            Scroll
            <span aria-hidden className="h-10 w-px bg-sky-300" />
          </a>
        )}
      </div>
    </section>
  );
}
