import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Tag = "h2",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("flex flex-col gap-6", centered ? "mx-auto max-w-3xl items-center text-center" : "max-w-2xl", className)}>
      {eyebrow && (
        <Eyebrow rule={!centered} tone={tone}>
          {eyebrow}
        </Eyebrow>
      )}
      <Tag
        className={cn(
          "font-display text-h2 font-normal text-balance",
          tone === "dark" ? "text-stone-50" : "text-slate-950",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <div className={cn("text-body-lg text-pretty", tone === "dark" ? "text-stone-100" : "text-warmgray-700")}>
          {intro}
        </div>
      )}
    </div>
  );
}
