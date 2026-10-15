"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";

// Stream the background video on every screen size, as long as motion is welcome and data isn't constrained.
const QUERY = "(prefers-reduced-motion: no-preference)";
const YT_ORIGIN = "https://www.youtube.com";
const PLAYING = 1;
// YouTube flashes its own controls for a few seconds when playback starts (mobile especially); hold the poster until they fade.
const REVEAL_DELAY_MS = 4500;

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function shouldPlay() {
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  return window.matchMedia(QUERY).matches && !saveData;
}

/**
 * Muted, looping YouTube background. The poster stays up until YouTube reports the video is
 * actually playing — so if a phone blocks autoplay (e.g. iOS Low Power Mode), visitors keep
 * the still image instead of seeing YouTube's play button.
 */
export function HeroVideo({ id, title }: { id: string; title: string }) {
  const enabled = useSyncExternalStore(subscribe, shouldPlay, () => false);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  // Listen for the IFrame API's state updates (enabled by enablejsapi=1 + the "listening" handshake).
  useEffect(() => {
    if (!enabled) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== YT_ORIGIN || e.source !== frameRef.current?.contentWindow) return;
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        const state = data?.info?.playerState ?? (data?.event === "onStateChange" ? data.info : undefined);
        if (state === PLAYING && !timer) timer = setTimeout(() => setVisible(true), REVEAL_DELAY_MS);
      } catch {
        // Not a player message.
      }
    };
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      clearTimeout(timer);
    };
  }, [enabled]);

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

  function post(message: object) {
    frameRef.current?.contentWindow?.postMessage(JSON.stringify(message), YT_ORIGIN);
  }

  function togglePlayback() {
    const next = !paused;
    post({ event: "command", func: next ? "pauseVideo" : "playVideo", args: [] });
    setPaused(next);
  }

  return (
    <>
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <iframe
          ref={frameRef}
          src={`${YT_ORIGIN}/embed/${id}?${params}`}
          title={title}
          tabIndex={-1}
          allow="autoplay; encrypted-media"
          onLoad={() => post({ event: "listening", id: 1, channel: "widget" })}
          // 16:9 cover crop for any container shape, portrait phones included.
          className={cn(
            "absolute left-1/2 top-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78vh)] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-[1500ms]",
            visible ? "opacity-100" : "opacity-0",
          )}
        />
      </div>
      {visible && (
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
      )}
    </>
  );
}
