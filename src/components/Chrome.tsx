import React, { useEffect, useState } from "react";
import { CONTACT, NAV, TICKER } from "../data";
import { Link, type Route } from "../lib/router";
import { CTA, Icons, Logo } from "../lib/ui";

/* ── Traka sa ključnim porukama (marquee) ────────────────── */
function TickerBar() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="bg-pine-950 text-sage-200 overflow-hidden marquee-paused">
      <div className="marquee-track py-2">
        {items.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 pr-3 font-mono text-[11px] uppercase tracking-[0.14em] whitespace-nowrap"
          >
            <span className="text-rasp-400">●</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Header ──────────────────────────────────────────────── */
export function Header({ route }: { route: Route }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [route]);

  return (
    <>
      <TickerBar />
      <header
        className={`sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-pine-800/10 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_-18px_rgba(12,26,18,0.45)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 lg:h-[76px] flex items-center justify-between gap-4">
          <Link to="/" aria-label="INSA KMA Fields — početna" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Glavna navigacija">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`relative px-3.5 py-2 text-[14.5px] font-medium transition-colors duration-200 ${
                  route === n.to
                    ? "text-rasp-600"
                    : "text-pine-900 hover:text-rasp-600"
                } after:absolute after:left-3.5 after:right-3.5 after:-bottom-0.5 after:h-[2px] after:origin-left after:transition-transform after:duration-300 ${
                  route === n.to ? "after:bg-rasp-500 after:scale-x-100" : "after:bg-rasp-500/60 after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 font-mono text-sm font-medium text-pine-900 hover:text-rasp-600 transition-colors"
            >
              <Icons.phone className="w-4 h-4 text-moss-500" />
              {CONTACT.phone}
            </a>
            <CTA id="cta-header" href="/kontakt" size="md">
              Zatražite ponudu
            </CTA>
          </div>

          <button
            className="lg:hidden btn btn-ghost px-3 py-2.5"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
          >
            {open ? <Icons.close className="w-6 h-6" /> : <Icons.menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobilni meni — preko celog ekrana */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-400 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-pine-950 dark-rows" />
        <div className="relative h-full flex flex-col px-6 pt-5 pb-8 overflow-y-auto">
          <div className="flex items-center justify-between">
            <Logo light />
            <button
              className="btn btn-ghostlight px-3 py-2.5"
              onClick={() => setOpen(false)}
              aria-label="Zatvori meni"
            >
              <Icons.close className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-1" aria-label="Mobilna navigacija">
            {NAV.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between border-b border-cream/10 py-4 transition-transform duration-500 ${
                  open ? "translate-x-0" : "translate-x-6"
                }`}
                style={{ transitionDelay: `${120 + i * 55}ms` }}
              >
                <span
                  className={`font-display text-[26px] font-bold tracking-tight ${
                    route === n.to ? "text-honey-300" : "text-cream group-hover:text-honey-300"
                  }`}
                >
                  {n.label}
                </span>
                <Icons.arrow className="w-5 h-5 text-rasp-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8 space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-sage-300">
              Direktno do ponude
            </p>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-3 text-cream font-display text-2xl font-bold"
            >
              <Icons.phone className="w-5 h-5 text-honey-300" />
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-sage-200 text-sm break-all"
            >
              <Icons.mail className="w-5 h-5 text-honey-300 shrink-0" />
              {CONTACT.email}
            </a>
            <CTA
              id="cta-mobile-menu"
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              Zatražite ponudu
            </CTA>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Footer ──────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="bg-pine-950 text-sage-200 dark-rows">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-5 text-[15px] leading-relaxed text-sage-300 max-w-sm">
            Uvozne, EU-sertifikovane sadnice maline iz Italije i Holandije i premium
            kokosov supstrat prilagođen klimi Srbije — uz stručnu podršku od
            planiranja do fertirigacije.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-honey-300">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full bg-honey-300 animate-pulse-dot" />
              <span className="relative inline-flex w-2 h-2 bg-honey-400" />
            </span>
            Rezervacije proleće / jesen 2027. otvorene
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream mb-4">
            Strane
          </p>
          <ul className="space-y-2.5">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-[15px] text-sage-300 hover:text-honey-300 transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream mb-4">
            Ponuda
          </p>
          <ul className="space-y-2.5 text-[15px]">
            <li>
              <Link to="/sadnice" className="text-sage-300 hover:text-honey-300 transition-colors">
                Enrosadira® · Easy Rose® · Ofelia®
              </Link>
            </li>
            <li>
              <Link to="/supstrat" className="text-sage-300 hover:text-honey-300 transition-colors">
                Kokosov supstrat 1.5–80 L
              </Link>
            </li>
            <li>
              <Link to="/baza-znanja" className="text-sage-300 hover:text-honey-300 transition-colors">
                Subvencije 40–70%
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="text-sage-300 hover:text-honey-300 transition-colors">
                Stručna podrška
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream mb-4">
            Kontakt
          </p>
          <div className="space-y-3 text-[15px]">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2.5 text-cream font-semibold hover:text-honey-300 transition-colors"
            >
              <Icons.phone className="w-4 h-4 text-rasp-400" /> {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2.5 text-sage-300 hover:text-honey-300 transition-colors break-all"
            >
              <Icons.mail className="w-4 h-4 text-rasp-400 shrink-0" /> {CONTACT.email}
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-sage-300 hover:text-honey-300 transition-colors"
            >
              <Icons.insta className="w-4 h-4 text-rasp-400 shrink-0" /> {CONTACT.instagramLabel}
            </a>
            <p className="flex items-center gap-2.5 text-sage-300">
              <Icons.pin className="w-4 h-4 text-rasp-400 shrink-0" /> Dostava širom Srbije
            </p>
          </div>
          <CTA id="cta-footer" href="/kontakt" className="mt-6">
            Zatražite ponudu
          </CTA>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-sage-300/70">
          <p>© {new Date().getFullYear()} INSA KMA Fields</p>
          <p>Sertifikovan sadni materijal · Kokosov supstrat · Podrška do berbe</p>
        </div>
      </div>
    </footer>
  );
}

/* ── Plutajuća CTA traka (mobilni) ───────────────────────── */
export function FloatCTA({ route }: { route: Route }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (route === "/kontakt") return null;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 lg:hidden transition-transform duration-500 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-2 gap-px bg-pine-950/20 border-t border-pine-950/20 shadow-[0_-14px_36px_-18px_rgba(12,26,18,0.5)]">
        <a
          id="cta-float-call"
          href={CONTACT.phoneHref}
          onClick={() =>
            (window as any).dataLayer?.push?.({ event: "cta_click", cta_id: "cta-float-call" })
          }
          className="flex items-center justify-center gap-2 bg-pine-900 text-cream font-semibold py-4 text-[15px]"
        >
          <Icons.phone className="w-4.5 h-4.5" />
          Pozovite nas
        </a>
        <Link
          to="/kontakt"
          className="flex items-center justify-center gap-2 bg-rasp-600 text-cream font-semibold py-4 text-[15px]"
          onClick={() =>
            (window as any).dataLayer?.push?.({ event: "cta_click", cta_id: "cta-float-offer" })
          }
        >
          Zatražite ponudu
          <Icons.arrow className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
