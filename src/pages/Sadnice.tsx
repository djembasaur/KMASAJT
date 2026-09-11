import React, { useState } from "react";
import { CONTACT, IMG, SADNICE_FAQ, VARIETIES } from "../data";
import { CTA, Icons, Kicker, Reveal } from "../lib/ui";
import PageHero from "../components/PageHero";
import { FinalCTA } from "./Home";

function HealthStatus() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-start">
      <div className="lg:sticky lg:top-28 self-start">
        <Reveal>
          <Kicker>Zdravstveni status i poreklo</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
            Provereno poreklo, <em className="italic text-rasp-600">dokumentovano</em>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink/75">
            Zasad koji podižete danas braćete narednih pet do deset godina. Zato
            uvozimo isključivo originalan, EU-sertifikovan sadni materijal iz renomiranih
            matičnih rasadnika Italije i Holandije.
          </p>
        </Reveal>
        <Reveal variant="rv-scale" delay={150} className="mt-8 relative">
          <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-moss-500/35" aria-hidden="true" />
          <figure className="relative overflow-hidden bg-pine-800">
            <img
              src={IMG.sadnice}
              alt="Mlade sertifikovane sadnice maline u proizvodnji"
              loading="lazy"
              className="w-full aspect-[16/11] object-cover transition-transform duration-[1400ms] hover:scale-[1.05]"
            />
          </figure>
        </Reveal>
      </div>
      <div className="space-y-4">
        {[
          {
            icon: Icons.shield,
            t: "EU sertifikat i sledljivost porekla",
            d: "Svaka partija ima dokumentovano poreklo i prateću sertifikaciju — bez izuzetaka.",
          },
          {
            icon: Icons.leaf,
            t: "Matične linije vrhunskog kvaliteta",
            d: "Sadnice potiču iz matičnog materijala, bez višegodišnje lokalne reprodukcije koja postepeno gubi zdravstveni status.",
          },
          {
            icon: Icons.globe,
            t: "Renomirani rasadnici Italije i Holandije",
            d: "Radimo sa rasadnicima čiji se programi selekcije mere decenijama profesionalne proizvodnje.",
          },
          {
            icon: Icons.doc,
            t: "Dokumentacija za subvencije",
            d: "Sertifikati i papirologija idu uz sadnice — spremno za zahtev za subvencije od 40–70%.",
          },
        ].map((f, i) => (
          <Reveal key={i} variant="rv-right" delay={i * 90}>
            <div className="group flex gap-5 bg-white border border-pine-800/12 p-6 transition-all duration-300 hover:border-rasp-500/40 hover:shadow-[0_20px_44px_-28px_rgba(12,26,18,0.45)]">
              <span className="w-12 h-12 shrink-0 bg-pine-900 text-honey-300 flex items-center justify-center transition-colors duration-300 group-hover:bg-rasp-600 group-hover:text-cream">
                <f.icon className="w-6 h-6" />
              </span>
              <div>
                <h3 className="font-display font-bold text-[18.5px] text-pine-900">{f.t}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink/72">{f.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function VarietyDetails() {
  return (
    <section className="bg-pine-950 dark-rows text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <Kicker light>Sorte u ponudi</Kicker>
          <h2 className="mt-4 font-display font-black tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
            Tri remontantne sorte, <em className="italic text-honey-300">tri tržišna profila</em>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-sage-200/85">
            Sorte razvijene i selekcionisane za profesionalnu, intenzivnu proizvodnju —
            gde se prinos, klasa i ujednačenost mere i planiraju unapred.
          </p>
        </Reveal>

        <div className="mt-14 space-y-6">
          {VARIETIES.map((v, i) => (
            <Reveal key={v.id} delay={i * 100}>
              <article className="group grid md:grid-cols-[110px_1fr_auto] gap-6 items-center border border-cream/12 bg-pine-900/50 p-6 sm:p-8 transition-all duration-400 hover:border-honey-300/50 hover:bg-pine-900">
                <span className="font-display font-black text-[56px] sm:text-[64px] leading-none text-pine-700 transition-colors duration-400 group-hover:text-rasp-500">
                  {v.no}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display font-bold text-[26px] sm:text-[30px] tracking-tight">
                      {v.name}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-honey-300 border border-honey-300/40 px-2.5 py-1">
                      {v.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-sage-200/85 max-w-2xl">
                    {v.text}
                  </p>
                </div>
                <ul className="md:text-right space-y-1.5">
                  {v.traits.map((t, j) => (
                    <li
                      key={j}
                      className="inline-flex md:flex items-center gap-2 text-[13px] font-mono uppercase tracking-[0.1em] text-sage-300 mr-3 md:mr-0"
                    >
                      <span className="w-1.5 h-1.5 bg-rasp-400 rotate-45 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150} className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5 justify-between bg-rasp-600 px-6 sm:px-8 py-6">
          <p className="font-display font-bold text-[19px] sm:text-[21px] leading-snug max-w-xl">
            Sadni materijal se prodaje i rezerviše jednom godišnje, u ograničenim
            količinama.
          </p>
          <CTA id="cta-sadnice" href="/kontakt" variant="btn-pine" size="lg" className="shrink-0 bg-pine-950 hover:bg-pine-900">
            Rezervišite sadnice
          </CTA>
        </Reveal>
      </div>
    </section>
  );
}

function Reservation() {
  const steps = [
    {
      t: "Upit i dostupnost",
      d: "Šaljete upit sa kulturom, površinom i lokacijom — proveravamo dostupnost sorti za sezonu 2027.",
    },
    {
      t: "Ponuda i rezervacija",
      d: "Dobijate ponudu sa količinama, kalkulacijom subvencija i terminom. Rezervacija se potvrđuje po planu matičnih rasadnika.",
    },
    {
      t: "Isporuka i dokumentacija",
      d: "Dostava širom Srbije, uz EU sertifikate i svu dokumentaciju potrebnu za subvencije.",
    },
    {
      t: "Podrška pri sadnji",
      d: "Gustina sadnje, sistem gajenja i program fertirigacije — stojimo uz vas do berbe.",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
      <Reveal className="max-w-2xl">
        <Kicker>Rezervacije 2027</Kicker>
        <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
          Kako funkcioniše rezervacija
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-ink/75">
          Ograničene količine znače da se planira unapred — evo kako izgleda put od
          upita do zasada.
        </p>
      </Reveal>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 110} className="relative">
            <div className="lg:border-t lg:border-dashed lg:border-pine-800/30 lg:pt-7">
              <span className="absolute -top-[7px] left-0 hidden lg:block w-3.5 h-3.5 bg-rasp-500 rotate-45" />
              <p className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-rasp-600">
                Korak {i + 1}
              </p>
              <h3 className="mt-3 font-display font-bold text-[19px] text-pine-900">{s.t}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink/72">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Density() {
  return (
    <section className="bg-honey-400 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(65deg, transparent 0 26px, var(--color-pine-950) 26px 27px)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-18 grid lg:grid-cols-[auto_1fr_auto] gap-10 items-center">
        <Reveal variant="rv-left">
          <p className="font-display font-black text-pine-950 text-[clamp(3.2rem,8vw,5.6rem)] leading-none tracking-tight">
            4–6
          </p>
          <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-pine-900 mt-2">
            biljaka / m²
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display font-bold text-pine-950 text-[clamp(1.4rem,2.6vw,2rem)] leading-snug max-w-xl">
            Gustina sadnje se ne pogađa — izvodi se iz sorte, sistema gajenja i vaših
            uslova. Zajedno određujemo optimalnu meru za vaš zasad.
          </h2>
        </Reveal>
        <Reveal variant="rv-right" delay={200}>
          <CTA id="cta-sadnice-gustina" href="/kontakt" variant="btn-pine">
            Dogovorite planiranje
          </CTA>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-paper border-t border-pine-800/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <Reveal>
          <Kicker>Pitanja i odgovori</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,2.8rem)]">
            Pre nego što rezervišete
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-pine-800/12 border-y border-pine-800/12">
          {SADNICE_FAQ.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <button
                className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-display font-bold text-[17.5px] sm:text-[19px] text-pine-900 group-hover:text-rasp-600 transition-colors">
                  {f.q}
                </span>
                <span
                  className={`w-8 h-8 shrink-0 border flex items-center justify-center transition-all duration-300 ${
                    open === i
                      ? "bg-rasp-600 border-rasp-600 text-cream rotate-180"
                      : "border-pine-800/25 text-pine-900"
                  }`}
                >
                  <Icons.chevron className="w-4 h-4" />
                </span>
              </button>
              <div className={`acc-body ${open === i ? "open" : ""}`}>
                <div>
                  <p className="pb-6 pr-10 text-[15.5px] leading-relaxed text-ink/75">{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150} className="mt-8 text-center">
          <p className="text-[15px] text-ink/70">
            Sezona 2027 se planira sada — pošaljite upit na{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold text-rasp-600 hover:underline break-all">
              {CONTACT.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function Sadnice() {
  return (
    <>
      <PageHero
        kicker="Uvozne sadnice maline"
        title={
          <>
            Sertifikovane sadnice maline iz{" "}
            <em className="italic text-rasp-600">Italije i Holandije</em>
          </>
        }
        text="Originalne, EU-sertifikovane sadnice iz vodećih rasadnika — matični materijal vrhunskog kvaliteta, sa dokumentovanim poreklom i visokim zdravstvenim statusom. Tri remontantne sorte za intenzivnu proizvodnju."
        img={IMG.nursery}
        alt="Sertifikovane sadnice maline"
        note="Sezona proleće / jesen 2027."
        chips={[
          { icon: <Icons.shield className="w-4 h-4 text-moss-500" />, label: "EU sertifikat" },
          { icon: <Icons.globe className="w-4 h-4 text-moss-500" />, label: "Italija & Holandija" },
          { icon: <Icons.berry className="w-4 h-4 text-moss-500" />, label: "3 remontantne sorte" },
        ]}
      >
        <CTA id="cta-sadnice-hero" href="/kontakt" size="lg">
          Rezervišite sadnice
        </CTA>
        <a href={CONTACT.phoneHref} className="btn btn-ghost px-6 py-4 text-base">
          <Icons.phone className="w-4.5 h-4.5 text-moss-500" />
          {CONTACT.phone}
        </a>
      </PageHero>

      <HealthStatus />
      <VarietyDetails />
      <Reservation />
      <Density />
      <Faq />
      <FinalCTA idPrefix="sadnice" />
    </>
  );
}
