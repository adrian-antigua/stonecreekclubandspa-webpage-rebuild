import type { Stat } from "@/content/site";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type StatBandProps = {
  stats: Stat[];
  /** Accessible name for the region. */
  title?: string;
};

export function StatBand({ stats, title = "Stone Creek by the numbers" }: StatBandProps) {
  return (
    <section aria-label={title} className="section bg-stone-100">
      <div className="container-site">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              as="li"
              key={stat.label}
              delay={i * 100}
              className={cn(
                "flex flex-col gap-5 border-stone-300 py-10 sm:px-8 lg:py-2",
                i > 0 && "border-t sm:border-t-0",
                i % 2 === 1 && "sm:border-l",
                i >= 2 && "sm:border-t lg:border-t-0",
                i > 0 && "lg:border-l",
                i % 2 === 0 && "sm:pl-0 lg:pl-8",
                i === 0 && "lg:pl-0",
              )}
            >
              <p className="font-display text-display-lg font-light text-slate-950">
                {stat.labelFirst ? (
                  <>
                    <span className="text-h2 italic">{stat.label}</span> {stat.value}
                  </>
                ) : (
                  <>
                    {stat.value} <span className="text-h2">{stat.label}</span>
                  </>
                )}
              </p>
              <span aria-hidden className="block h-px w-10 bg-sky-500" />
              <p className="max-w-xs text-small text-warmgray-700">{stat.detail}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
