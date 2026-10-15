import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "text";
type Tone = "light" | "dark";

type CommonProps = {
  variant?: Variant;
  /** The background the button sits on. */
  tone?: Tone;
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps & { href: string } & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;
type NativeButtonProps = CommonProps & { href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonProps = LinkProps | NativeButtonProps;

const base =
  "group inline-flex items-center justify-center gap-3 eyebrow transition-colors duration-300 ease-[var(--ease-gentle)] disabled:cursor-not-allowed disabled:opacity-60";

const styles: Record<Variant, Record<Tone, string>> = {
  solid: {
    light: "bg-slate-950 text-stone-50 px-7 py-4 hover:bg-slate-800",
    dark: "bg-stone-50 text-slate-950 px-7 py-4 hover:bg-stone-100",
  },
  outline: {
    light: "border border-slate-950 text-slate-950 px-7 py-4 hover:bg-slate-950 hover:text-stone-50",
    dark: "border border-stone-50 text-stone-50 px-7 py-4 hover:bg-stone-50 hover:text-slate-950",
  },
  text: {
    light: "text-slate-950 py-1",
    dark: "text-stone-50 py-1",
  },
};

function TextLinkInner({ children, tone }: { children: ReactNode; tone: Tone }) {
  return (
    <>
      <span className="relative">
        {children}
        <span
          aria-hidden
          className={cn(
            "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 transition-transform duration-500 ease-[var(--ease-gentle)] group-hover:scale-x-0",
            tone === "dark" ? "bg-sky-300" : "bg-sky-700",
          )}
        />
      </span>
      <span aria-hidden className="transition-transform duration-500 ease-[var(--ease-gentle)] group-hover:translate-x-1">
        →
      </span>
    </>
  );
}

export function Button({ variant = "solid", tone = "light", className, children, ...rest }: ButtonProps) {
  const classes = cn(base, styles[variant][tone], tone === "dark" && "tone-dark", className);
  const inner = variant === "text" ? <TextLinkInner tone={tone}>{children}</TextLinkInner> : children;

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorProps } = rest;
    if (/^(https?:|mailto:|tel:)/.test(href)) {
      const newTab = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...anchorProps}
        >
          {inner}
          {newTab && <span className="sr-only"> (opens in a new tab)</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {inner}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as Omit<NativeButtonProps, keyof CommonProps>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {inner}
    </button>
  );
}
