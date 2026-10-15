import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type PullQuoteProps = {
  quote: string;
  attribution: string;
  tone?: "light" | "dark";
};

export function PullQuote({ quote, attribution, tone = "light" }: PullQuoteProps) {
  const dark = tone === "dark";
  return (
    <section className={cn("section-lg", dark ? "tone-dark bg-slate-950" : "bg-stone-50")}>
      <Reveal as="figure" className="container-site mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <span aria-hidden className={cn("font-display text-[5rem] leading-none", dark ? "text-sky-300" : "text-sky-500")}>
          “
        </span>
        <blockquote
          className={cn("-mt-10 font-display text-quote italic text-balance", dark ? "text-stone-50" : "text-slate-950")}
        >
          <p>{quote}</p>
        </blockquote>
        <figcaption className={cn("eyebrow", dark ? "text-stone-100" : "text-slate-600")}>— {attribution}</figcaption>
      </Reveal>
    </section>
  );
}
