"use client";

import Image from "next/image";
import { useState } from "react";

type VideoEmbedProps = {
  /** YouTube video ID. */
  id: string;
  /** Accessible title for the iframe. */
  title: string;
  /** Optional poster; when set, the iframe loads only after the visitor presses play. */
  poster?: { src: string; alt: string };
};

export function VideoEmbed({ id, title, poster }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(!poster);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
      {playing ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube.com/embed/${id}${poster ? "?autoplay=1" : ""}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="tone-dark group absolute inset-0 size-full"
          aria-label={`Play video: ${title}`}
        >
          <Image src={poster!.src} alt={poster!.alt} fill sizes="(min-width: 1024px) 80vw, 100vw" className="object-cover" />
          <span aria-hidden className="absolute inset-0 bg-slate-950/35 transition-colors duration-500 group-hover:bg-slate-950/20" />
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-stone-50/80 bg-slate-950/45 text-stone-50 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105 md:size-24"
          >
            <svg viewBox="0 0 24 24" className="ml-1 size-7 fill-sky-300" aria-hidden>
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
