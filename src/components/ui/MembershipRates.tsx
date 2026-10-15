import type { Membership } from "@/content/site";
import { Reveal } from "./Reveal";

type MembershipRatesProps = {
  memberships: Membership[];
  /** Heading level for each tier name. */
  headingLevel?: "h2" | "h3";
};

/** The three membership tiers as divided editorial columns — deliberately not a pricing table. */
export function MembershipRates({ memberships, headingLevel: Heading = "h3" }: MembershipRatesProps) {
  return (
    <ul className="grid border-t border-slate-950 md:grid-cols-3">
      {memberships.map((m, i) => (
        <Reveal
          as="li"
          key={m.name}
          delay={i * 100}
          className="flex flex-col gap-5 border-b border-stone-300 py-10 md:border-b-0 md:px-10 md:first:pl-0 md:last:pr-0 md:[&:not(:first-child)]:border-l"
        >
          <Heading className="eyebrow text-slate-600">{m.name}</Heading>
          <p className="font-display text-display-lg font-light">
            {m.rate}
            <span className="ml-2 font-sans text-small font-normal text-warmgray-700">/ month plus tax</span>
          </p>
          <p className="text-body text-warmgray-700">{m.covers}</p>
          <p className="mt-auto text-small text-slate-600">Enrollment {m.enrollment} (plus tax)</p>
        </Reveal>
      ))}
    </ul>
  );
}
