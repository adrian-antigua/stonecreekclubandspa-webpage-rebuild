import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export type CardData = {
  label: string;
  title: string;
  image: { src: string; alt: string };
  href?: string;
};

type CardProps = CardData & {
  ratio?: "portrait" | "landscape";
  className?: string;
  sizes?: string;
};

export function Card({ label, title, image, href, ratio = "portrait", className, sizes = "(min-width: 1024px) 30vw, 80vw" }: CardProps) {
  const body = (
    <>
      <div className={cn("relative overflow-hidden bg-stone-100", ratio === "portrait" ? "aspect-[4/5]" : "aspect-[3/2]")}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-gentle)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col gap-2 pt-5">
        <span className="eyebrow text-slate-600">{label}</span>
        <span className="font-display text-h3 font-medium text-slate-950">{title}</span>
      </div>
    </>
  );

  return (
    <article className={cn("group", className)}>
      {href ? (
        <Link href={href} className="block">
          {body}
        </Link>
      ) : (
        body
      )}
    </article>
  );
}
