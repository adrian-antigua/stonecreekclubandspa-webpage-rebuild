"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "section" | "li" | "figure";
  className?: string;
  /** Delay in ms, for staggering siblings. */
  delay?: number;
};

/** Fades children up once they scroll into view. CSS lives in globals.css ([data-reveal]). */
export function Reveal({ children, as: Tag = "div", className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error — ref type is shared across the allowed intrinsic elements
      ref={ref}
      data-reveal={visible ? "visible" : "hidden"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
