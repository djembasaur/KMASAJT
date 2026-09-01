import React from "react";
import {
  BENEFITS,
  CONTACT,
  IMG,
  OFFERS,
  STATS,
  STEPS,
  VARIETIES,
} from "../data";
import { Link } from "../lib/router";
import { CountUp, CTA, Icons, Kicker, Reveal, useInView } from "../lib/ui";

const iconMap: Record<string, (p: { className?: string }) => React.ReactElement> = {
  sun: Icons.sun,
  root: Icons.root,
  chart: Icons.chart,
  flask: Icons.flask,
  shield: Icons.shield,
  berry: Icons.berry,
};

/* ── Hero ────────────────────────────────────────────────── */
function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <section ref={ref} className={`relative overflow-hidden ${inView ? "in" : ""}`}>
      {/* slojevita pozadina: redovi zasada + mehki zeleni odsjaj */}
      <div className="absolute inset-0 field-rows opacity-70" aria-hidden="true" />
      <div
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-sage-300) 55%, transparent) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -left-52 w-[480px] h-[480px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-rasp-100) 80%, transparent) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 lg:pt-20 lg:pb-24 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Levo — poruka */}
        <div className="lg:col-span-6">
          <Reveal>
            <Kicker>Uvozne sadnice maline · Kokosov supstrat</Kicker>
          </Reveal>

          <h1 className="mt-5 font-display font-black text-pine-900 tracking-tight text-[clamp(2.5rem,6.2vw,4.6rem)] leading-[1.02]">
            <span className="lm">
              <span style={{ ["--lm-delay" as any]: "60ms" }}>Profesionalna</span>
            </span>
            <span className="lm">
              <span style={{ ["--lm-delay" as any]: "160ms" }}>proizvodnja maline</span>
            </span>
            <span className="lm">
              <span style={{ ["--lm-delay" as any]: "260ms" }}>
                počinje od{" "}
                <em className="text-rasp-600 font-display italic font-bold">dobrog</em>
              </span>
            </span>
            <span className="lm">
              <span style={{ ["--lm-delay" as any]: "360ms" }}>
                sadnog materijala<span className="text-rasp-500">.</span>
              </span>
            </span>
          </h1>

          <Reveal delay={380}>
            <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-ink/75">
              EU-sertifikovane sadnice iz vodećih rasadnika Italije i Holandije, premium
              kokosov supstrat prilagođen klimi Srbije i stručna podrška — od planiranja
              do fertirigacije.
            </p>
          </Reveal>

          <Reveal delay={480} className="mt-8 flex flex-wrap items-center gap-4">
            <CTA id="cta-home" href="#/kontakt" size="lg">
              Zatražite ponudu
            </CTA>
            <a
              id="cta-home-call"
              href={CONTACT.phoneHref}
              onClick={() =>
                (window as any).dataLayer?.push?.({ event: "cta_click", cta_id: "cta-home-call" })
              }
              className="btn btn-ghost px-6 py-4 text-base"
            >
              <Icons.phone className="w-4.5 h-4.5 text-moss-500" />
              {CONTACT.phone}
            </a>
          </Reveal>

          <Reveal delay={580} className="mt-9 flex flex-wrap gap-2.5">
            {[
              { i: Icons.shield, t: "EU sertifikat" },
              { i: Icons.globe, t: "Poreklo: Italija & Holandija" },
              { i: Icons.berry, t: "Enrosadira · Easy Rose · Ofelia" },
            ].map((c, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 bg-white/80 border border-pine-800/12 px-3.5 py-2 text-[13px] font-medium text-pine-800 hover:border-moss-500/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <c.i className="w-4 h-4 text-moss-500" />
                {c.t}
              </span>
            ))}
          </Reveal>
        </div>

        {/* Desno — slika sa lebdećim karticama */}
        <div className="lg:col-span-6 relative">
          <Reveal variant="rv-scale" delay={200} className="relative">
            <div
              className="absolute -top-4 -right-4 w-full h-full border-2 border-rasp-500/40"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden bg-pine-800 aspect-[4/5] sm:aspect-[5/5.6] lg:aspect-[4/4.9]">
              <img
                src={IMG.hero}
                alt="Ubrane maline u profesionalnom zasadu INSA KMA Fields"
                className="w-full h-full object-cover animate-kenburns"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-pine-950/45 via-transparent to-transparent"
                aria-hidden="true"
              />
              <p className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/85">
                Dokazan kvalitet · Visok zdravstveni status
              </p>
            </div>

            {/* Lebdeća kartica — sezona */}
            <div className="absolute -left-3 sm:-left-7 top-8 bg-pine-950 text-cream px-5 py-4 shadow-xl animate-float-soft">
              <p className="flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-honey-300">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full bg-honey-300 animate-pulse-dot" />
                  <span className="relative inline-flex w-2 h-2 bg-honey-400" />
                </span>
                Sezona 2027
              </p>
              <p className="mt-1.5 font-display font-bold text-[17px] leading-snug">
                Rezervacije proleće / jesen
                <br />
                su otvorene
              </p>
            </div>

            {/* Lebdeća kartica — spec supstrata */}
            <div className="absolute -bottom-5 right-4 sm:right-8 bg-cream border border-pine-800/12 px-5 py-3.5 shadow-xl">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-moss-500">
                Kokosov supstrat
              </p>
              <p className="mt-1 font-mono text-[13.5px] font-medium text-pine-900">
                pH 5.5–6.5 · EC &lt; 0.2 mS/cm
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Brojke ──────────────────────────────────────────────── */
function Stats() {
  return (
    <section className="bg-pine-900 dark-rows text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-14 grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={i}
            delay={i * 90}
            className={`px-5 py-6 lg:px-8 ${
              i !== 0 ? "border-l border-cream/10 max-lg:[&:nth-child(3)]:border-l-0" : ""
            } ${i >= 2 ? "max-lg:border-t max-lg:border-cream/10" : ""}`}
          >
            <CountUp
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              className="font-display font-black text-[clamp(2.1rem,4vw,3.2rem)] text-honey-300 tracking-tight"
            />
            <p className="mt-2.5 text-[13.5px] leading-snug text-sage-200/90 max-w-[220px]">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Veliki marquee natpis ───────────────────────────────── */
function BigMarquee() {
  const words = [
    "Dokazan kvalitet",
    "Vrhunski prinos",
    "Visok zdravstveni status",
    "Subvencije 40–70%",
  ];
  const row = [...words, ...words];
  return (
    <div className="bg-rasp-600 text-cream overflow-hidden marquee-paused py-4 -rotate-[0.6deg] scale-[1.01]">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-6 pr-6 font-display font-bold text-[22px] sm:text-[26px] tracking-tight whitespace-nowrap"
          >
            {w}
            <Icons.berry className="w-5 h-5 text-honey-300" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Kvalitet odlučuje — sticky dve kolone ───────────────── */
function Quality() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16">
      <div className="lg:sticky lg:top-28 self-start">
        <Reveal>
          <Kicker>Kvalitet odlučuje</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05]">
            Kvalitet sadnice odlučuje o budućem{" "}
            <em className="italic text-rasp-600">zasadu</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <blockquote className="mt-8 border-l-4 border-rasp-500 bg-white/70 p-6 sm:p-7 shadow-sm">
            <p className="font-display italic text-[19px] sm:text-[21px] leading-snug text-pine-900">
              „Profesionalni proizvođači ne žele da rizikuju — kupuju provereno i sigurno.”
            </p>
          </blockquote>
        </Reveal>
      </div>

      <div className="space-y-8">
        <Reveal variant="rv-right">
          <p className="text-[16.5px] leading-relaxed text-ink/80">
            Malina je višegodišnja kultura — zasad koji podižete danas braćete narednih{" "}
            <strong className="text-pine-900">pet do deset godina</strong>. Zato svaka
            karakteristika sadnice, od zdravstvenog statusa do genetske stabilnosti,
            direktno određuje prinos i klasu tokom čitavog veka zasada.
          </p>
        </Reveal>
        <Reveal variant="rv-right" delay={120}>
          <p className="text-[16.5px] leading-relaxed text-ink/80">
            Dve sadnice mogu izgledati identično na dan sadnje, a potpuno različito se
            ponašati već u drugoj godini rodnosti. Razlika najčešće potiče iz porekla:{" "}
            <strong className="text-pine-900">
              matični, sertifikovani materijal
            </strong>{" "}
            ili sadnica iz višegodišnje lokalne reprodukcije, gde se zdravstveni status i
            genetska čistoća postepeno gube.
          </p>
        </Reveal>
        <Reveal variant="rv-scale" delay={200} className="relative">
          <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-moss-500/35" aria-hidden="true" />
          <figure className="relative overflow-hidden bg-pine-800">
            <img
              src={IMG.sadnice}
              alt="Mlade sertifikovane sadnice maline u proizvodnji"
              loading="lazy"
              className="w-full aspect-[16/11] object-cover transition-transform duration-[1400ms] hover:scale-[1.05]"
            />
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-pine-950/70 to-transparent px-4 pt-8 pb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/85">
              Matični materijal · visok zdravstveni status
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={100}>
          <Link
            to="/sadnice"
            className="group inline-flex items-center gap-2.5 font-semibold text-rasp-600 hover:text-rasp-500 transition-colors"
          >
            Pogledajte sertifikovane sadnice
            <Icons.arrow className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Sve na jednom mestu — naizmenične editorial sekcije ─── */
function Offers() {
  return (
    <section className="bg-paper border-y border-pine-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <Reveal className="max-w-2xl">
          <Kicker>Kompletno rešenje</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.08]">
            Sve za moderan zasad — na jednom mestu
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed text-ink/75">
            Sadnica, supstrat i sistem funkcionišu kao jedna celina. Zato uz materijal
            dobijate i znanje potrebno da taj potencijal i ostvarite.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16 lg:space-y-20">
          {OFFERS.map((o, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={o.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center`}
              >
                <Reveal
                  variant={flip ? "rv-right" : "rv-left"}
                  className={flip ? "lg:order-2" : ""}
                >
                  <div className="group relative overflow-hidden bg-pine-800">
                    <img
                      src={o.img}
                      alt={o.alt}
                      loading="lazy"
                      className="w-full aspect-[16/11] object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.07]"
                    />
                    <span className="absolute top-4 left-4 bg-pine-950/85 text-honey-300 font-mono text-[10.5px] uppercase tracking-[0.2em] px-3 py-1.5">
                      {o.tag}
                    </span>
                  </div>
                </Reveal>
                <Reveal variant={flip ? "rv-left" : "rv-right"} delay={120} className={flip ? "lg:order-1" : ""}>
                  <h3 className="font-display font-bold text-pine-900 text-[clamp(1.45rem,2.4vw,2rem)] tracking-tight">
                    {o.title}
                  </h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink/78">{o.text}</p>
                  <ul className="mt-5 space-y-2.5">
                    {o.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[15px] text-ink/85">
                        <span className="mt-0.5 w-5 h-5 shrink-0 bg-moss-500/15 text-moss-500 flex items-center justify-center">
                          <Icons.check className="w-3.5 h-3.5" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={o.to}
                    className="group/link mt-6 inline-flex items-center gap-2.5 font-semibold text-rasp-600 hover:text-rasp-500 transition-colors"
                  >
                    {o.id === "podrska" ? "Dogovorite konsultacije" : "Saznajte više"}
                    <Icons.arrow className="w-4.5 h-4.5 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                  </Link>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Sorte — indeks kartice ──────────────────────────────── */
function Varieties() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <Kicker>Sorte</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.08] max-w-xl">
            Remontantne sorte za intenzivnu proizvodnju
          </h2>
        </Reveal>
        <Reveal delay={150} className="max-w-sm">
          <p className="text-[15px] leading-relaxed text-ink/70">
            Razvijene i selekcionisane za profesionalnu proizvodnju — gde se prinos,
            klasa i ujednačenost mere i planiraju unapred.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {VARIETIES.map((v, i) => (
          <Reveal key={v.id} delay={i * 110}>
            <article className="group relative h-full bg-white border border-pine-800/12 p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_50px_-30px_rgba(12,26,18,0.4)] hover:border-rasp-500/50">
              <span className="absolute top-0 left-0 h-[3px] w-0 bg-rasp-500 transition-all duration-500 group-hover:w-full" />
              <div className="flex items-start justify-between">
                <span className="font-display font-black text-[52px] leading-none text-sage-200 transition-colors duration-500 group-hover:text-rasp-100">
                  {v.no}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-moss-500 border border-moss-500/35 px-2.5 py-1">
                  {v.badge}
                </span>
              </div>
              <h3 className="mt-5 font-display font-bold text-[26px] text-pine-900 tracking-tight">
                {v.name}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink/75">{v.text}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {v.traits.map((t, j) => (
                  <span
                    key={j}
                    className="text-[12px] font-medium bg-sage-100 text-pine-800 px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150}>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-honey-100 border border-honey-400/40 px-6 py-5">
          <p className="text-[15px] leading-relaxed text-pine-900 max-w-2xl">
            <strong>Sadni materijal se prodaje i rezerviše jednom godišnje</strong>, u
            ograničenim količinama — prema planu proizvodnje matičnih rasadnika.
            Dostupnost i termine za vaš zasad proverite na vreme.
          </p>
          <CTA id="cta-home-sorte" href="#/sadnice" variant="btn-pine" className="shrink-0">
            Rezervišite sadnice
          </CTA>
        </div>
      </Reveal>
    </section>
  );
}

/* ── Subvencije — upečatljiva traka ──────────────────────── */
function Subsidies() {
  return (
    <section className="bg-honey-400 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0 30px, var(--color-pine-950) 30px 31px)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 grid lg:grid-cols-[1fr_1.15fr] gap-10 items-center">
        <Reveal variant="rv-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-pine-800">
            Podrška države
          </p>
          <p className="mt-3 font-display font-black text-pine-950 text-[clamp(3.4rem,9vw,6.5rem)] leading-none tracking-tight">
            40–70<span className="text-rasp-600">%</span>
          </p>
          <p className="mt-3 font-display font-bold text-pine-900 text-[20px] sm:text-[22px]">
            Subvencije za sertifikovan sadni materijal
          </p>
          <p className="mt-4 text-[15.5px] leading-relaxed text-pine-900/85 max-w-md">
            Svi poljoprivrednici sa registrovanim poljoprivrednim gazdinstvom (RPG)
            imaju pravo na subvencije za sertifikovan sadni materijal. Pomažemo vam da
            to iskoristite.
          </p>
        </Reveal>
        <Reveal variant="rv-right" delay={120}>
          <ul className="space-y-3.5">
            {[
              ["Pravo na subvencije", "za sve nosioce RPG-a za sertifikovan sadni materijal."],
              ["Dokumentacija obezbeđena", "sertifikati i papirologija idu uz sadnice."],
              ["Pomoć pri pripremi i realizaciji", "zahteva za subvencije."],
              ["Brza i pouzdana saradnja", "uz savet prilagođen vašem gazdinstvu."],
            ].map(([b, r], i) => (
              <li key={i} className="flex items-start gap-3.5 text-[15.5px] text-pine-950">
                <span className="mt-0.5 w-6 h-6 shrink-0 bg-pine-950 text-honey-300 flex items-center justify-center">
                  <Icons.check className="w-4 h-4" />
                </span>
                <span>
                  <strong>{b}</strong> — {r}
                </span>
              </li>
            ))}
          </ul>
          <CTA
            id="cta-home-subvencije"
            href="#/kontakt"
            variant="btn-pine"
            size="lg"
            className="mt-8"
          >
            Proverite svoje pravo na subvenciju
          </CTA>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Rezultati — mreža sa razdelnicima ───────────────────── */
function Results() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
      <Reveal className="max-w-2xl">
        <Kicker>Rezultati</Kicker>
        <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.08]">
          Integrisan sistem daje bolje rezultate
        </h2>
        <p className="mt-5 text-[16.5px] leading-relaxed text-ink/75">
          U poređenju sa klasičnom sadnjom u zemljištu, spoj sertifikovane sadnice i
          puferisanog kokosovog supstrata daje mladoj biljci stabilnu sredinu od prvog
          dana — pa proizvođači prijavljuju znatno bolji prijem sadnica i sigurniji start.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-pine-800/15 border border-pine-800/15">
        {BENEFITS.map((b, i) => {
          const Ic = iconMap[b.icon] ?? Icons.leaf;
          return (
            <Reveal key={i} delay={(i % 3) * 90} className="bg-cream">
              <div className="group h-full p-7 transition-colors duration-300 hover:bg-sage-100">
                <span className="inline-flex items-center justify-center w-11 h-11 bg-pine-900 text-honey-300 transition-colors duration-300 group-hover:bg-rasp-600 group-hover:text-cream">
                  <Ic className="w-5.5 h-5.5" />
                </span>
                <h3 className="mt-4 font-display font-bold text-[19px] text-pine-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink/72">{b.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ── Partnerstvo — tri koraka ────────────────────────────── */
function Partnership() {
  return (
    <section className="bg-pine-950 dark-rows text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <Reveal className="max-w-2xl">
          <Kicker light>Partnerstvo</Kicker>
          <h2 className="mt-4 font-display font-black tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.08]">
            Partner u proizvodnji, <em className="italic text-honey-300">a ne samo dobavljač</em>
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed text-sage-200/90">
            Saradnja se ne završava isporukom robe. Uz sadnice i supstrat dobijate
            savetodavnu podršku prilagođenu vašim uslovima — jer vaš uspešan rod je naša
            najbolja preporuka.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-10 lg:gap-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 130} className="relative">
              <div className="md:border-t md:border-dashed md:border-cream/25 md:pt-8">
                <span className="absolute -top-[9px] left-0 hidden md:block w-4 h-4 bg-honey-400 rotate-45" />
                <p className="font-display font-black text-[44px] leading-none text-honey-300">
                  {s.no}
                </p>
                <h3 className="mt-4 font-display font-bold text-[21px]">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-sage-200/85">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Galerija — marquee iz proizvodnje ───────────────────── */
function Gallery() {
  const items = [
    { src: IMG.plants, alt: "Maline na biljci u zasadu" },
    { src: IMG.berries, alt: "Zreli plodovi maline" },
    { src: IMG.harvest, alt: "Ubrane maline u pakovanju" },
    { src: IMG.handberry, alt: "Plod maline u ruci proizvođača" },
    { src: IMG.crates, alt: "Gajbe ubranih malina" },
    { src: IMG.greenhouse, alt: "Plastenička proizvodnja maline" },
  ];
  const row = [...items, ...items];
  return (
    <section className="py-20 lg:py-24 overflow-hidden">
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6">
        <Kicker>Iz proizvodnje</Kicker>
        <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)]">
          Od sadnice do ploda
        </h2>
      </Reveal>
      <div className="mt-10 marquee-paused">
        <div className="marquee-track gap-5 px-4">
          {row.map((g, i) => (
            <figure key={i} className="group relative w-[240px] sm:w-[300px] shrink-0 overflow-hidden bg-pine-800">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full aspect-[16/11] object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 bg-pine-950/85 text-cream font-mono text-[10.5px] uppercase tracking-[0.16em] px-3 py-2">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Finalni CTA ─────────────────────────────────────────── */
export function FinalCTA({ idPrefix }: { idPrefix: string }) {
  return (
    <section className="bg-pine-900 dark-rows text-cream relative overflow-hidden">
      <div
        className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, var(--color-rasp-500) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <Reveal>
            <Kicker light>Kontakt</Kicker>
            <h2 className="mt-4 font-display font-black tracking-tight text-[clamp(2.1rem,4.4vw,3.6rem)] leading-[1.04]">
              Spremni za <em className="italic text-honey-300">novu sezonu?</em>
            </h2>
            <p className="mt-5 max-w-lg text-[16.5px] leading-relaxed text-sage-200/90">
              Pošaljite upit ili nas pozovite — sve detalje oko poručivanja, dostupnosti
              sorti i subvencija dobijate direktno od nas.
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-8 flex flex-wrap gap-4">
            <CTA id={`cta-${idPrefix}-final`} href="#/kontakt" size="lg">
              Zatražite ponudu
            </CTA>
            <a
              href={CONTACT.phoneHref}
              className="btn btn-ghostlight px-6 py-4 text-base"
            >
              <Icons.phone className="w-4.5 h-4.5" />
              {CONTACT.phone}
            </a>
          </Reveal>
        </div>
        <Reveal variant="rv-right" delay={150}>
          <div className="grid gap-3">
            <a
              href={CONTACT.phoneHref}
              className="group flex items-center gap-4 border border-cream/15 bg-pine-950/40 px-5 py-4 hover:border-honey-300/60 transition-colors"
            >
              <Icons.phone className="w-5 h-5 text-honey-300 shrink-0" />
              <span>
                <span className="block font-mono text-[10.5px] uppercase tracking-[0.18em] text-sage-300">Telefon</span>
                <span className="font-display font-bold text-[19px]">{CONTACT.phone}</span>
              </span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center gap-4 border border-cream/15 bg-pine-950/40 px-5 py-4 hover:border-honey-300/60 transition-colors"
            >
              <Icons.mail className="w-5 h-5 text-honey-300 shrink-0" />
              <span className="min-w-0">
                <span className="block font-mono text-[10.5px] uppercase tracking-[0.18em] text-sage-300">Email</span>
                <span className="font-semibold text-[15.5px] break-all">{CONTACT.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 border border-cream/15 bg-pine-950/40 px-5 py-4">
              <span className="w-10 h-10 shrink-0 bg-rasp-600 text-cream font-display font-bold flex items-center justify-center text-[15px]">
                {CONTACT.initials}
              </span>
              <span>
                <span className="block font-mono text-[10.5px] uppercase tracking-[0.18em] text-sage-300">Vaš kontakt</span>
                <span className="font-semibold text-[15.5px]">{CONTACT.person}</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <BigMarquee />
      <Quality />
      <Offers />
      <Varieties />
      <Subsidies />
      <Results />
      <Partnership />
      <Gallery />
      <FinalCTA idPrefix="home" />
    </>
  );
}
