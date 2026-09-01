import React from "react";
import { CONTACT, IMG } from "../data";
import { CTA, Icons, Kicker, Reveal } from "../lib/ui";
import PageHero from "../components/PageHero";
import { FinalCTA } from "./Home";

function Story() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
      <Reveal variant="rv-left" className="relative">
        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-rasp-500/35" aria-hidden="true" />
        <div className="relative overflow-hidden bg-pine-800">
          <img
            src={IMG.crates}
            alt="Gajbe ubranih malina iz profesionalnog zasada"
            loading="lazy"
            className="w-full aspect-[16/12] object-cover transition-transform duration-[1500ms] hover:scale-[1.05]"
          />
          <p className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/85 bg-pine-950/60 px-3 py-1.5">
            Rod koji preporučuje
          </p>
        </div>
      </Reveal>
      <div>
        <Reveal>
          <Kicker>Naša priča</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
            Nastali smo iz potrebe proizvođača, <em className="italic text-rasp-600">ne iz ponude</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-ink/78">
            <p>
              INSA KMA Fields postoji zato što profesionalna proizvodnja maline u Srbiji
              zaslužuje bolji start: sadni materijal čije se poreklo ne prepričava, već{" "}
              <strong className="text-pine-900">dokumentuje</strong>. Uvozimo isključivo
              EU-sertifikovane sadnice iz vodećih rasadnika Italije i Holandije i
              premium kokosov supstrat prilagođen klimi Srbije.
            </p>
            <p>
              Radimo planski i pošteno: sadni materijal se prodaje i rezerviše{" "}
              <strong className="text-pine-900">jednom godišnje, u ograničenim količinama</strong>{" "}
              — prema planu proizvodnje matičnih rasadnika, nikad na štetu kvaliteta.
            </p>
            <p>
              I ne stajemo na isporuci. Pomažemo u planiranju proizvodnje, izboru sistema
              gajenja, gustini sadnje i fertirigaciji — kroz celu sezonu. Jer vaš uspešan
              rod je naša najbolja preporuka.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pillars() {
  const rows = [
    {
      n: "I",
      t: "Uvoz sertifikovanih sadnica",
      d: "Enrosadira®, Easy Rose® i Ofelia® — originalne linije iz renomiranih rasadnika, sa EU sertifikatom i sledljivošću.",
      to: "/sadnice" as const,
      link: "Pogledajte sadnice",
    },
    {
      n: "II",
      t: "Kokosov supstrat za Srbiju",
      d: "100% kokos bez treseta, 2× ispran i puferisan — stabilan pH i EC od prvog dana i vek od 3–4 godine.",
      to: "/supstrat" as const,
      link: "Pogledajte supstrat",
    },
    {
      n: "III",
      t: "Znanje uz robu",
      d: "Planiranje zasada, gustina sadnje, program fertirigacije i pomoć oko subvencija 40–70% — uz svaku kupovinu.",
      to: "/baza-znanja" as const,
      link: "Otvorite bazu znanja",
    },
  ];
  return (
    <section className="bg-pine-900 dark-rows text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <Kicker light>Čime se bavimo</Kicker>
          <h2 className="mt-4 font-display font-black tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
            Tri stuba, <em className="italic text-honey-300">jedan cilj — vaš rod</em>
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-cream/12 border-y border-cream/12">
          {rows.map((r, i) => (
            <Reveal key={r.n} delay={i * 100}>
              <a
                href={`#${r.to}`}
                className="group grid md:grid-cols-[90px_1fr_auto] gap-5 items-center py-7 transition-colors hover:bg-pine-800/40 px-2 -mx-2"
              >
                <span className="font-display font-black text-[40px] leading-none text-pine-700 group-hover:text-rasp-500 transition-colors">
                  {r.n}
                </span>
                <span>
                  <span className="block font-display font-bold text-[21px] sm:text-[24px]">{r.t}</span>
                  <span className="block mt-2 text-[15px] leading-relaxed text-sage-200/85 max-w-2xl">
                    {r.d}
                  </span>
                </span>
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-honey-300 whitespace-nowrap">
                  {r.link}
                  <Icons.arrow className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const items = [
    {
      icon: Icons.shield,
      t: "Provereno poreklo",
      d: "Samo matični, sertifikovan materijal — zdravstveni status i genetska čistoća se ne pregovaraju.",
    },
    {
      icon: Icons.berry,
      t: "Kompletno rešenje",
      d: "Sadnica, supstrat i znanje funkcionišu kao celina — zato ih isporučujemo zajedno.",
    },
    {
      icon: Icons.doc,
      t: "Transparentna dokumentacija",
      d: "Sertifikati i papirologija uz svaku isporuku, spremni i za zahtev za subvencije.",
    },
    {
      icon: Icons.root,
      t: "Dugoročno partnerstvo",
      d: "Zasad se podiže na 5–10 godina — i naša podrška traje koliko i on.",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
      <Reveal className="max-w-2xl">
        <Kicker>Principi</Kicker>
        <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
          Po čemu nas prepoznajete
        </h2>
      </Reveal>
      <div className="mt-12 grid sm:grid-cols-2 gap-px bg-pine-800/15 border border-pine-800/15">
        {items.map((it, i) => (
          <Reveal key={i} delay={(i % 2) * 100} className="bg-cream">
            <div className="group h-full p-8 transition-colors duration-300 hover:bg-sage-100">
              <span className="inline-flex w-12 h-12 items-center justify-center bg-pine-900 text-honey-300 transition-colors duration-300 group-hover:bg-rasp-600 group-hover:text-cream">
                <it.icon className="w-6 h-6" />
              </span>
              <h3 className="mt-5 font-display font-bold text-[20px] text-pine-900">{it.t}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink/72">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactPerson() {
  return (
    <section className="bg-paper border-y border-pine-800/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 lg:py-20 grid lg:grid-cols-[auto_1fr_auto] gap-8 items-center">
        <Reveal variant="rv-left">
          <span className="flex w-24 h-24 items-center justify-center bg-rasp-600 text-cream font-display font-black text-[34px] shadow-xl shadow-rasp-600/30">
            {CONTACT.initials}
          </span>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-moss-500">
            Vaš kontakt
          </p>
          <h2 className="mt-2 font-display font-black text-pine-900 text-[clamp(1.6rem,3vw,2.4rem)] tracking-tight">
            {CONTACT.person}
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-ink/72 max-w-xl">
            Jedna osoba, direktna linija — od prvog upita do berbe. Bez call centara i
            posrednika: pitanje postavljate onome ko poznaje i sadnice i supstrat.
          </p>
        </Reveal>
        <Reveal variant="rv-right" delay={200}>
          <div className="flex flex-col gap-3">
            <CTA id="cta-o-nama" href="#/kontakt">
              Zatražite ponudu
            </CTA>
            <a href={CONTACT.phoneHref} className="btn btn-ghost px-5 py-3 text-[15px]">
              <Icons.phone className="w-4 h-4 text-moss-500" />
              {CONTACT.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ONama() {
  return (
    <>
      <PageHero
        kicker="O nama"
        title={
          <>
            Partner u proizvodnji, <em className="italic text-rasp-600">a ne samo dobavljač</em>
          </>
        }
        text="INSA KMA Fields spaja uvoz EU-sertifikovanih sadnica maline iz Italije i Holandije, premium kokosov supstrat prilagođen klimi Srbije i stručnu podršku — od planiranja zasada do fertirigacije."
        img={IMG.handberry}
        alt="Plod maline u ruci proizvođača"
        note="Kvalitet koji se vidi i meri"
        chips={[
          { icon: <Icons.globe className="w-4 h-4 text-moss-500" />, label: "Uvoz iz EU rasadnika" },
          { icon: <Icons.flask className="w-4 h-4 text-moss-500" />, label: "Supstrat po meri klime" },
          { icon: <Icons.doc className="w-4 h-4 text-moss-500" />, label: "Podrška do berbe" },
        ]}
      >
        <CTA id="cta-o-nama-hero" href="#/kontakt" size="lg">
          Zatražite ponudu
        </CTA>
        <a href={CONTACT.phoneHref} className="btn btn-ghost px-6 py-4 text-base">
          <Icons.phone className="w-4.5 h-4.5 text-moss-500" />
          {CONTACT.phone}
        </a>
      </PageHero>

      <Story />
      <Pillars />
      <Principles />
      <ContactPerson />
      <FinalCTA idPrefix="o-nama" />
    </>
  );
}
