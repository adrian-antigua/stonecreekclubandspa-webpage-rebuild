"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { primaryNav, secondaryNav, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button } from "./Button";

const SCROLL_THRESHOLD = 80;
const VISIT_HREF = "/membership#visit";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the overlay on route change (adjusting state during render, not in an effect).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Overlay: scroll lock, Esc to close, focus trap.
  useEffect(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () =>
      Array.from(menu?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header data-scrolled={scrolled} className="site-header fixed inset-x-0 top-0 z-50">
        <div aria-hidden className="nav-gradient pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-slate-950/55 to-transparent" />
        <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-20">
          <Link href="/" className="relative block h-9 w-[150px] shrink-0 lg:h-11 lg:w-[190px]" aria-label={`${site.name} — home`}>
            <Image src="/brand/logo-horizontal-color.png" alt="" fill sizes="190px" className="logo-on-light object-contain object-left" preload />
            <Image src="/brand/logo-horizontal-white.png" alt="" fill sizes="190px" className="logo-on-dark object-contain object-left" preload />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {primaryNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "nav-link eyebrow relative py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-500 hover:after:scale-x-100",
                        active && "after:scale-x-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a href={`tel:${site.phones.main.tel}`} className="hidden text-small tabular-nums xl:block">
              {site.phones.main.display}
            </a>
            <a
              href={site.memberLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-quiet text-small underline-offset-4 hover:underline"
            >
              Member Login<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link href={VISIT_HREF} className="nav-cta eyebrow inline-flex items-center px-5 py-3 transition-colors duration-300">
              Schedule a Visit
            </Link>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 flex items-center gap-3 p-2 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="eyebrow">Menu</span>
            <span aria-hidden className="flex w-6 flex-col gap-1.5">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </button>
        </div>
      </header>

      {/* Keeps content clear of the fixed bar on pages without a hero. */}
      <div aria-hidden className="nav-spacer h-16 lg:h-20" />

      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="tone-dark fixed inset-0 z-[55] flex flex-col overflow-y-auto bg-slate-950 text-stone-50 lg:hidden"
        >
          <div className="container-site flex h-16 shrink-0 items-center justify-between">
            <Link href="/" onClick={closeMenu} className="relative block h-9 w-[150px]" aria-label={`${site.name} — home`}>
              <Image src="/brand/logo-horizontal-white.png" alt="" fill sizes="150px" className="object-contain object-left" />
            </Link>
            <button type="button" onClick={closeMenu} className="-mr-2 flex items-center gap-3 p-2">
              <span className="eyebrow">Close</span>
              <span aria-hidden className="text-xl leading-none">✕</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="container-site flex flex-1 flex-col justify-between gap-10 pb-8 pt-6">
            <ul className="flex flex-col gap-1">
              {[...primaryNav, ...secondaryNav].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="block py-1 font-display text-[2.25rem] font-light leading-tight transition-colors hover:text-sky-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-6 border-t border-slate-800 pt-8">
              <Button href={VISIT_HREF} tone="dark" onClick={closeMenu} className="w-full">
                Schedule a Visit
              </Button>
              <div className="flex items-center justify-between text-small">
                <a href={`tel:${site.phones.main.tel}`} className="tabular-nums">
                  {site.phones.main.display}
                </a>
                <a href={site.memberLoginUrl} target="_blank" rel="noopener noreferrer" className="text-stone-100 underline-offset-4 hover:underline">
                  Member Login<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
