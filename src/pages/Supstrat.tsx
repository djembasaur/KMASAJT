import React, { useState } from "react";
import {
  COIR_VS_PEAT,
  CONTACT,
  CROPS,
  IMG,
  SUBSTRAT_FAQ,
  SUBSTRATE_CERTS,
  SUBSTRATE_ORIGIN,
  SUBSTRATE_SPECS,
  type CropGroup,
} from "../data";
import { CTA, Icons, Kicker, Reveal } from "../lib/ui";
import { Link } from "../lib/router";
import PageHero from "../components/PageHero";
import { FinalCTA } from "./Home";

const useIcon: Record<string, (p: { className?: string }) => React.ReactElement> = {
  berry: Icons.berry,
  drop: Icons.drop,
  leaf: Icons.leaf,
  sun: Icons.sun,
  flower: Icons.flower,
};

function SpecTable() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 grid lg:grid-cols-[1fr_1.4fr] gap-12">
      <div className="lg:sticky lg:top-28 self-start">
        <Reveal>
          <Kicker>Tehnička specifikacija</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
            Brojke koje znače <em className="italic text-rasp-600">stabilnost</em>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink/75">
            100% INSA REMMY kokosov supstrat bez treseta, 2× ispran i puferisan — sa
            stabilnim pH i EC od prvog dana. Prilagođen klimi Srbije: podnosi visoke
            letnje temperature i sušne periode.
          </p>
          <CTA id="cta-supstrat-spec" href="/kontakt" variant="btn-pine" className="mt-8">
            Zatražite kompletnu specifikaciju
          </CTA>
        </Reveal>
      </div>
      <div className="border border-pine-800/15 bg-white">
        {SUBSTRATE_SPECS.map((s, i) => (
          <Reveal
            key={s.k}
            delay={i * 60}
            className={`grid sm:grid-cols-[1fr_1.2fr] ${
              i !== 0 ? "border-t border-pine-800/12" : ""
            }`}
          >
            <div className="px-5 py-4 font-mono text-[12px] uppercase tracking-[0.14em] text-moss-500 bg-sage-100/60 flex items-center">
              {s.k}
            </div>
            <div className="px-5 py-4 text-[15.5px] font-medium text-pine-900 flex items-center">
              {s.v}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Origin() {
  return (
    <section className="bg-paper border-y border-pine-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <Kicker>Poreklo</Kicker>
            <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
              INSA REMMY supstrat sa <em className="italic text-rasp-600">poznatim poreklom</em>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink/75">
              INSA REMMY supstrat nije nepoznata roba — proizvodi ga {SUBSTRATE_ORIGIN.manufacturer},
              porodična kompanija aktivna od {SUBSTRATE_ORIGIN.since}. godine, specijalizovana
              isključivo za preradu kokosovih vlakana u profesionalne supstrate za povrtarsku i
              voćarsku proizvodnju.
            </p>
            <p className="mt-4 font-mono text-[13px] uppercase tracking-[0.12em] text-moss-500">
              Proizvodnja sertifikovana po RHP, MPS-ECAS, SA 8000 i OMRI Listed standardima
            </p>
          </Reveal>
        </div>
        <Reveal variant="rv-right" delay={120}>
          <ul className="space-y-3 bg-white border border-pine-800/15 p-6 sm:p-8">
            {SUBSTRATE_ORIGIN.facts.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-[15.5px] text-ink/85">
                <span className="mt-0.5 w-5 h-5 shrink-0 bg-rasp-600/10 text-rasp-600 flex items-center justify-center">
                  <Icons.check className="w-3.5 h-3.5" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={SUBSTRATE_ORIGIN.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block font-mono text-[12px] uppercase tracking-[0.14em] text-moss-500 hover:text-rasp-600 transition-colors"
          >
            Proizvođač: remmysubstrates.com ↗
          </a>
        </Reveal>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 lg:pb-24">
        <Reveal delay={200}>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-moss-500 mb-4">
            Sertifikati proizvođača
          </p>
          <div className="flex flex-wrap gap-4">
            {SUBSTRATE_CERTS.map((c) => (
              <div
                key={c.id}
                className="bg-white border border-pine-800/15 p-3 flex items-center justify-center"
              >
                <img
                  src={c.img}
                  alt={`${c.name} sertifikat`}
                  className="h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="bg-pine-900 dark-rows text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <Kicker light>Poređenje</Kicker>
          <h2 className="mt-4 font-display font-black tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
            Zašto kokos, <em className="italic text-honey-300">a ne treset?</em>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12 overflow-x-auto">
          <div className="min-w-[640px] border border-cream/15">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-pine-950/60 font-mono text-[11px] uppercase tracking-[0.16em]">
              <div className="px-5 py-4 text-sage-300">Karakteristika</div>
              <div className="px-5 py-4 text-honey-300 flex items-center gap-2">
                <Icons.berry className="w-4 h-4" /> INSA REMMY supstrat
              </div>
              <div className="px-5 py-4 text-sage-300">Treset</div>
            </div>
            {COIR_VS_PEAT.map((r, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1.4fr_1fr_1fr] text-[14.5px] ${
                  i !== 0 ? "border-t border-cream/10" : ""
                } hover:bg-pine-800/50 transition-colors`}
              >
                <div className="px-5 py-4 font-medium">{r.label}</div>
                <div className="px-5 py-4 flex items-start gap-2.5 text-sage-200">
                  <span className="mt-0.5 w-5 h-5 shrink-0 bg-honey-400/15 text-honey-300 flex items-center justify-center">
                    <Icons.check className="w-3.5 h-3.5" />
                  </span>
                  {r.coir}
                </div>
                <div className="px-5 py-4 flex items-start gap-2.5 text-sage-300/80">
                  <span className="mt-0.5 w-5 h-5 shrink-0 bg-rasp-500/15 text-rasp-400 flex items-center justify-center">
                    <Icons.x className="w-3 h-3" />
                  </span>
                  {r.peat}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-sage-300">
            Vek trajanja: <span className="text-honey-300">kokos 3–4 godine</span> · treset 1–2 godine
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Sizes() {
  const bars = [8, 14, 22, 32, 44, 58, 74, 100];
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <Reveal>
          <Kicker>Veličine vreća</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
            Osam dimenzija, od 1.5 L do 80 L
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink/75">
            Od manjih vreća za saksije i kontejnere, do velikih formata za redove u
            plasteničkoj proizvodnji — supstrat stiže spreman za sadnju, u formatu koji
            odgovara vašem sistemu gajenja.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
            Tačnu specifikaciju svih osam dimenzija šaljemo uz ponudu — navedite kulturu
            i sistem gajenja, pa preporučujemo format.
          </p>
          <CTA id="cta-supstrat" href="/kontakt" size="lg" className="mt-8">
            Zatražite ponudu
          </CTA>
        </Reveal>
      </div>
      <Reveal variant="rv-right" delay={120}>
        <div className="bg-white border border-pine-800/15 p-6 sm:p-8">
          <div className="space-y-3">
            {bars.map((w, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="h-7 bg-gradient-to-r from-pine-800 to-moss-500 transition-all duration-700 hover:from-rasp-600 hover:to-rasp-400"
                  style={{ width: `${w}%`, transitionDelay: `${i * 60}ms` }}
                />
                {i === 0 && (
                  <span className="font-mono text-[12px] font-medium text-pine-900 whitespace-nowrap">
                    1.5 L
                  </span>
                )}
                {i === bars.length - 1 && (
                  <span className="font-mono text-[12px] font-medium text-pine-900 whitespace-nowrap">
                    80 L
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-moss-500">
            8 dimenzija · specifikacija uz ponudu
          </p>
        </div>
      </Reveal>
    </section>
  );
}

const CROP_GROUPS: CropGroup[] = ["Bobičasto voće", "Povrće", "Ostalo"];

function PogodneKulture() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
      <Reveal className="max-w-2xl">
        <Kicker>Pogodne kulture</Kicker>
        <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
          Mešavina za <em className="italic text-rasp-600">svaku kulturu</em>
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-ink/75">
          INSA REMMY supstrat je prilagođen potrebama svake kulture — kliknite
          na kulturu da pročitate preporučenu mešavinu i specifikaciju.
        </p>
      </Reveal>

      <div className="mt-12 space-y-10">
        {CROP_GROUPS.map((group, gi) => (
          <div key={group}>
            <Reveal delay={gi * 80}>
              <Kicker className="mb-4">{group}</Kicker>
            </Reveal>
            <div className="flex flex-wrap gap-3">
              {CROPS.filter((c) => c.group === group).map((c, i) => {
                const Ic = useIcon[c.icon] ?? Icons.leaf;
                return (
                  <Reveal key={c.slug} delay={gi * 80 + i * 60}>
                    <Link
                      to={c.to}
                      className="group flex items-center gap-3 bg-cream border border-pine-800/12 pl-5 pr-4 py-3.5 font-display font-bold text-[18px] text-pine-900 hover:border-rasp-500/50 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.97] active:shadow-none transition-all duration-200 ease-out"
                    >
                      <span className="text-moss-500 group-hover:text-rasp-500 transition-colors">
                        <Ic className="w-5.5 h-5.5" />
                      </span>
                      {c.name}
                      <Icons.chevron className="w-4 h-4 -rotate-90 text-pine-800/25 group-hover:text-rasp-500 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Climate() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
      <Reveal variant="rv-left" className="relative order-2 lg:order-1">
        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-rasp-500/35" aria-hidden="true" />
        <div className="relative overflow-hidden bg-pine-800">
          <img
            src={IMG.greenhouse}
            alt="Moderna plastenička proizvodnja u kokosovom supstratu"
            loading="lazy"
            className="w-full aspect-[16/11] object-cover"
          />
        </div>
      </Reveal>
      <div className="order-1 lg:order-2">
        <Reveal>
          <Kicker>Klima Srbije</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
            Prilagođen letu koje <em className="italic text-rasp-600">ne prašta</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 text-[16px] leading-relaxed text-ink/78">
            Visoke letnje temperature i sušni periodi su sastavni deo proizvodnje u
            Srbiji. Vlaknasta struktura kokosa i u tim uslovima zadržava stabilnu
            vlažnost i aeraciju — biljka nema stresne padove, a berba nema prekida.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <ul className="mt-6 space-y-3">
            {[
              "Stabilna struktura i vlažnost i na visokim temperaturama",
              "Odlična aeracija — jači koren, bolji prijem sadnica",
              "Nema sleganja i zbijanja kroz sezone",
              "Idealan za plastenike i sisteme kap-po-kap",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-[15.5px] text-ink/85">
                <span className="mt-0.5 w-5 h-5 shrink-0 bg-rasp-600/10 text-rasp-600 flex items-center justify-center">
                  <Icons.check className="w-3.5 h-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
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
            Najčešća pitanja o INSA REMMY supstratu
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-pine-800/12 border-y border-pine-800/12">
          {SUBSTRAT_FAQ.map((f, i) => (
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
            Niste našli odgovor? Pozovite{" "}
            <a href={CONTACT.phoneHref} className="font-semibold text-rasp-600 hover:underline">
              {CONTACT.phone}
            </a>{" "}
            — savet je deo svake kupovine.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function Supstrat() {
  return (
    <>
      <PageHero
        kicker="INSA REMMY — premium kokosov supstrat"
        title={
          <>
            Stabilna sredina za vaš zasad —{" "}
            <em className="italic text-rasp-600">od prvog dana.</em>
          </>
        }
        text="100% INSA REMMY kokosov supstrat bez treseta, 2× ispran i puferisan — sa stabilnim pH i EC od prvog dana. Prilagođen klimi Srbije: podnosi visoke letnje temperature i sušne periode."
        img={IMG.remmyLineup}
        alt="Svih 8 pakovanja INSA REMMY Activ+ Coconut Coir supstrata, od 1.5 L do 75-80 L"
        note="8 dimenzija · 1.5–80 L"
        chips={[
          { icon: <Icons.flask className="w-4 h-4 text-moss-500" />, label: "pH 5.5–6.5" },
          { icon: <Icons.drop className="w-4 h-4 text-moss-500" />, label: "EC < 0.2 mS/cm" },
          { icon: <Icons.shield className="w-4 h-4 text-moss-500" />, label: "2× ispran i puferisan" },
          { icon: <Icons.leaf className="w-4 h-4 text-moss-500" />, label: "100% bez treseta" },
        ]}
      >
        <CTA id="cta-supstrat-hero" href="/kontakt" size="lg">
          Zatražite ponudu
        </CTA>
        <a href={CONTACT.phoneHref} className="btn btn-ghost px-6 py-4 text-base">
          <Icons.phone className="w-4.5 h-4.5 text-moss-500" />
          {CONTACT.phone}
        </a>
      </PageHero>

      <PogodneKulture />
      <Sizes />
      <Origin />
      <Comparison />
      <Climate />
      <SpecTable />
      <Faq />
      <FinalCTA idPrefix="supstrat" />
    </>
  );
}
