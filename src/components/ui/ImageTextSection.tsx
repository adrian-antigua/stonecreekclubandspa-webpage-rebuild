import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Button } from "./Button";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type ImageTextSectionProps = {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  image: { src: string; alt: string };
  cta?: { label: string; href: string };
  /** Image on the right instead of the left. */
  reverse?: boolean;
  tone?: "light" | "muted";
  headingLevel?: "h2" | "h3";
  id?: string;
};

export function ImageTextSection({
  eyebrow,
  title,
  children,
  image,
  cta,
  reverse = false,
  tone = "light",
  headingLevel: Heading = "h2",
  id,
}: ImageTextSectionProps) {
  return (
    <section id={id} className={cn("section", tone === "muted" ? "bg-stone-100" : "bg-stone-50")}>
      <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal
          className={cn(
            "relative aspect-[4/5] overflow-hidden sm:aspect-[3/2] lg:col-span-7 lg:aspect-[4/5] xl:aspect-[6/5]",
            reverse && "lg:order-2",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal
          delay={120}
          className={cn("flex flex-col gap-6 lg:col-span-5", reverse ? "lg:order-1 lg:pr-6" : "lg:pl-6")}
        >
          <Eyebrow rule>{eyebrow}</Eyebrow>
          <Heading className="font-display text-h2 font-normal text-balance">{title}</Heading>
          <div className="flex flex-col gap-4 text-body text-warmgray-700 text-pretty">{children}</div>
          {cta && (
            <div className="pt-2">
              <Button variant="text" href={cta.href}>
                {cta.label}
              </Button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
