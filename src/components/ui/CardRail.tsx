"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Card, type CardData } from "./Card";

type CardRailProps = {
  cards: CardData[];
  /** Accessible name for the scrollable region. */
  label: string;
};

export function CardRail({ cards, label }: CardRailProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    const first = el?.querySelector("li");
    if (!el || !first) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (first.getBoundingClientRect().width + gap), behavior: "smooth" });
  };

  const arrow =
    "flex size-12 items-center justify-center border border-slate-950 text-slate-950 transition-colors hover:bg-slate-950 hover:text-stone-50 disabled:pointer-events-none disabled:opacity-30";

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 md:-mx-10 md:scroll-px-10 md:px-10 lg:gap-8 xl:-mx-16 xl:scroll-px-16 xl:px-16"
      >
        {cards.map((card) => (
          <li key={card.title} className="w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-[calc((100%-4rem)/3.4)]">
            <Card {...card} />
          </li>
        ))}
      </ul>
      <div className="mt-8 hidden justify-end gap-3 md:flex">
        <button type="button" className={arrow} onClick={() => scrollByCard(-1)} disabled={atStart} aria-label="Previous">
          <span aria-hidden>←</span>
        </button>
        <button type="button" className={arrow} onClick={() => scrollByCard(1)} disabled={atEnd} aria-label="Next">
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}
