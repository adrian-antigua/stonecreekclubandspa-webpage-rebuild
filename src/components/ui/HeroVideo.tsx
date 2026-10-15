"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";

// Only stream the background video on wider screens, when motion is welcome and data isn't constrained.
const QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function shouldPlay() {
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  return window.matchMedia(QUERY).matches && !saveData;
}

/** Muted, looping YouTube background that fades in over the poster once it starts. */
export function HeroVideo({ id, title }: { id: string; title: string }) {
  const enabled = useSyncExternalStore(subscribe, shouldPlay, () => false);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  if (!enabled) return null;

  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: id,
    controls: "0",
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
    disablekb: "1",
    enablejsapi: "1",
  });

  function togglePlayback() {
    const next = !paused;
    frameRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: next ? "pauseVideo" : "playVideo", args: [] }),
      "https://www.youtube.com",
    );
    setPaused(next);
  }

  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <iframe
          ref={frameRef}
          src={`https://www.youtube.com/embed/${id}?${params}`}
          title={title}
          tabIndex={-1}
          allow="autoplay; encrypted-media"
          // Hold the poster until YouTube's own loading chrome has cleared.
          onLoad={() => setTimeout(() => setVisible(true), 1800)}
          className={cn(
            "absolute left-1/2 top-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78vh)] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-[1500ms]",
            visible ? "opacity-100" : "opacity-0",
          )}
        />
      </div>
      <button
        type="button"
        onClick={togglePlayback}
        className="eyebrow absolute bottom-6 right-5 z-10 flex items-center gap-2 text-stone-100 transition-colors hover:text-sky-300 md:right-10 xl:right-16"
      >
        <span aria-hidden className="text-base leading-none">
          {paused ? "▶" : "❚❚"}
        </span>
        {paused ? "Play video" : "Pause video"}
      </button>
    </>
  );
}
