import React, { useMemo, useState } from "react";
import { ARTICLES, CONTACT, type Article } from "../data";
import { CTA, Icons, Kicker, Reveal } from "../lib/ui";
import { FinalCTA } from "./Home";

const CATS = ["Sve", "Sadnice", "Supstrat", "Fertirigacija", "Zasadi", "Subvencije"] as const;
type Cat = (typeof CATS)[number];

const catColor: Record<Article["cat"], string> = {
  Sadnice: "bg-rasp-100 text-rasp-700",
  Supstrat: "bg-sage-100 text-pine-700",
  Fertirigacija: "bg-honey-100 text-[#8a5e12]",
  Zasadi: "bg-pine-900 text-sage-200",
  Subvencije: "bg-honey-400 text-pine-950",
};

function ArticleCard({ a, i }: { a: Article; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={(i % 2) * 100}>
      <article
        className={`group h-full flex flex-col bg-white border transition-all duration-400 ${
          open
            ? "border-rasp-500/60 shadow-[0_26px_54px_-30px_rgba(194,34,73,0.35)]"
            : "border-pine-800/12 hover:border-moss-500/50 hover:-translate-y-1 hover:shadow-[0_24px_48px_-30px_rgba(12,26,18,0.35)]"
        }`}
      >
        <button
          className="text-left p-6 sm:p-7 cursor-pointer flex-1"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <div className="flex items-center justify-between gap-4">
            <span
              className={`font-mono text-[10.5px] uppercase tracking-[0.16em] px-2.5 py-1 ${catColor[a.cat]}`}
            >
              {a.cat}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-ink/50">
              <Icons.clock className="w-3.5 h-3.5" />
              {a.mins} min
            </span>
          </div>
          <h2 className="mt-4 font-display font-bold text-[19.5px] sm:text-[21px] leading-snug text-pine-900 group-hover:text-rasp-600 transition-colors">
            {a.title}
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-ink/70">{a.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-moss-500">
            {open ? "Zatvori tekst" : "Pročitaj ceo tekst"}
            <span
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            >
              <Icons.chevron className="w-3.5 h-3.5" />
            </span>
          </span>
        </button>
        <div className={`acc-body ${open ? "open" : ""}`}>
          <div>
            <div className="px-6 sm:px-7 pb-7 space-y-3.5 border-t border-pine-800/10 pt-5">
              {a.body.map((p, j) => (
                <p key={j} className="text-[14.5px] leading-relaxed text-ink/78">
                  {p}
                </p>
              ))}
              <a
                href="#/kontakt"
                className="inline-flex items-center gap-2 font-semibold text-rasp-600 hover:text-rasp-500 transition-colors pt-1"
              >
                Postavite pitanje stručnjaku
                <Icons.arrow className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function BazaZnanja() {
  const [cat, setCat] = useState<Cat>("Sve");
  const list = useMemo(
    () => (cat === "Sve" ? ARTICLES : ARTICLES.filter((a) => a.cat === cat)),
    [cat]
  );

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 field-rows opacity-60" aria-hidden="true" />
        <div
          className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-sage-300) 55%, transparent) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-12 lg:pt-20">
          <Reveal>
            <Kicker>Baza znanja</Kicker>
            <h1 className="mt-5 font-display font-black text-pine-900 tracking-tight text-[clamp(2.2rem,5.4vw,3.9rem)] leading-[1.04] max-w-3xl">
              Znanje koje se meri <em className="italic text-rasp-600">u rodu</em>
            </h1>
            <p className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-ink/75">
              Kratki, praktični tekstovi o sadnicama, supstratu, fertirigaciji i
              subvencijama — isto ono što govorimo proizvođačima uživo, samo zapisano.
              {""} Nema prodaje u tekstu; ima razloga da odlučite informisano.
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-9 flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 font-mono text-[12px] uppercase tracking-[0.14em] border cursor-pointer transition-all duration-300 ${
                  cat === c
                    ? "bg-pine-900 text-honey-300 border-pine-900"
                    : "bg-white/70 text-pine-900 border-pine-800/20 hover:border-moss-500/60 hover:-translate-y-0.5"
                }`}
              >
                {c}
              </button>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 lg:pb-24">
        <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-moss-500 mb-6">
          {list.length} {list.length === 1 ? "tekst" : "tekstova"}
          {cat !== "Sve" ? ` · ${cat}` : ""}
        </p>
        <div className="grid md:grid-cols-2 gap-6" key={cat}>
          {list.map((a, i) => (
            <ArticleCard key={a.title} a={a} i={i} />
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-14 bg-pine-950 dark-rows text-cream px-6 sm:px-10 py-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="font-display font-bold text-[clamp(1.5rem,2.8vw,2.1rem)] tracking-tight leading-snug">
                Imate konkretno pitanje za <em className="italic text-honey-300">vaš zasad?</em>
              </h2>
              <p className="mt-3 text-[15px] text-sage-200/85 max-w-xl">
                Svaki zasad je drugačiji — pošaljite nam kulturu, površinu i lokaciju, pa
                odgovaramo konkretno, ne uopšteno.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <CTA id="cta-baza" href="#/kontakt" size="lg">
                Postavite pitanje
              </CTA>
              <a href={CONTACT.phoneHref} className="btn btn-ghostlight px-6 py-4 text-base">
                <Icons.phone className="w-4.5 h-4.5" />
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <FinalCTA idPrefix="baza" />
    </>
  );
}
