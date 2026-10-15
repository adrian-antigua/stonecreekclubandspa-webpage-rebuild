import Image from "next/image";
import Link from "next/link";
import { awardsLine, fullAddress, hours, primaryNav, secondaryNav, site, social } from "@/content/site";
import { HoursTable } from "./HoursTable";

// Static on purpose: Cache Components disallows `new Date()` in a prerendered shell.
const COPYRIGHT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="tone-dark bg-slate-950 text-stone-100">
      <div className="container-site grid gap-14 pb-12 pt-20 md:grid-cols-2 md:pt-28 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-8 lg:col-span-4">
          <Link href="/" className="relative block h-12 w-[200px]" aria-label={`${site.name} — home`}>
            <Image src="/brand/logo-horizontal-white.png" alt="" fill sizes="200px" className="object-contain object-left" />
          </Link>
          <p className="font-display text-h3 font-light italic text-stone-50">{site.tagline}</p>
          <address className="flex flex-col gap-1 text-small not-italic">
            <span>{fullAddress}</span>
            <a href={`tel:${site.phones.main.tel}`} className="tabular-nums transition-colors hover:text-sky-300">
              {site.phones.main.display}
            </a>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-sky-300">
              {site.email}
            </a>
          </address>
        </div>

        <div className="lg:col-span-4">
          <h2 className="eyebrow mb-6 text-stone-50">Hours</h2>
          <HoursTable schedules={hours} variant="condensed" tone="dark" />
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 lg:col-span-4">
          <div>
            <h2 className="eyebrow mb-6 text-stone-50">Explore</h2>
            <ul className="flex flex-col gap-3 text-small">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-sky-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-6 text-stone-50">The Club</h2>
            <ul className="flex flex-col gap-3 text-small">
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-sky-300">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={site.memberLoginUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sky-300">
                  Member Login<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              {social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sky-300">
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="container-site flex flex-col gap-6 border-t border-slate-800 py-10 text-small">
        <p className="max-w-4xl">{awardsLine}</p>
        <div className="flex flex-col gap-2 text-stone-100 md:flex-row md:justify-between">
          <p>
            © {COPYRIGHT_YEAR} {site.name}. All rights reserved.
          </p>
          <p>Demo — proof-of-concept redesign. Not the official website.</p>
        </div>
      </div>
    </footer>
  );
}
