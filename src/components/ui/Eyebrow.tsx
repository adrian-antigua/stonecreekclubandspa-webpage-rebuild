import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  /** Short leading hairline in the accent color. */
  rule?: boolean;
  tone?: "light" | "dark";
  as?: "p" | "span" | "div";
  className?: string;
};

export function Eyebrow({ children, rule = false, tone = "light", as: Tag = "p", className }: EyebrowProps) {
  return (
    <Tag
      className={cn(
        "eyebrow flex items-center gap-4",
        tone === "dark" ? "text-stone-100" : "text-slate-600",
        className,
      )}
    >
      {rule && (
        <span aria-hidden className={cn("h-px w-10 shrink-0", tone === "dark" ? "bg-sky-300" : "bg-sky-500")} />
      )}
      {children}
    </Tag>
  );
}
