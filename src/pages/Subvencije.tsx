import React, { useState } from "react";
import {
  CONTACT,
  IMG,
  SUBSIDY_DOCS,
  SUBSIDY_ELIGIBILITY,
  SUBSIDY_MAX_AMOUNTS,
  SUBSIDY_STEPS,
  SUBVENCIJE_FAQ,
} from "../data";
import { CTA, Icons, Kicker, Reveal } from "../lib/ui";
import PageHero from "../components/PageHero";
import { FinalCTA } from "./Home";

const iconMap: Record<string, (p: { className?: string }) => React.ReactElement> = {
  shield: Icons.shield,
  doc: Icons.doc,
  check: Icons.check,
  globe: Icons.globe,
  leaf: Icons.leaf,
  chart: Icons.chart,
  berry: Icons.berry,
};

/* ── Ponovljen poziv na akciju odmah posle uvoda ─────────── */
function IntroCTA() {
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-12 flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
        <Reveal variant="rv-left" className="max-w-2xl">
          <p className="font-display font-bold text-pine-950 text-[19px] sm:text-[21px] leading-snug">
            Ostavite podatke i ostvarite besplatne konsultacije sa našim timom eksperata
          </p>
          <p className="mt-2 text-[14.5px] text-pine-900/80 leading-relaxed">
            Pre nego što pređete na proceduru, proverite sa nama da li vaš zasad ispunjava
            uslove — i kako da uz to poručite tačno ono što je pokriveno subvencijom.
          </p>
        </Reveal>
        <Reveal variant="rv-right" delay={120} className="shrink-0">
          <CTA id="cta-subvencije-intro" href="#subvencije-formular" variant="btn-pine">
            Zakažite besplatne konsultacije
          </CTA>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Sekcija 2 — Ko ima pravo ─────────────────────────────── */
function Eligibility() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
      <Reveal className="max-w-2xl">
        <Kicker>Ko ima pravo</Kicker>
        <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
          Uslovi za ostvarivanje prava na subvenciju
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-ink/75">
          Prema važećem pravilniku, pravo na podsticaj proveravaju se i status podnosioca i
          parametri samog zasada. Evo šta se konkretno traži.
        </p>
      </Reveal>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-pine-800/15 border border-pine-800/15">
        {SUBSIDY_ELIGIBILITY.map((f, i) => {
          const Ic = iconMap[f.icon] ?? Icons.leaf;
          return (
            <Reveal key={i} delay={(i % 3) * 90} className="bg-cream">
              <div className="group h-full p-7 transition-colors duration-300 hover:bg-sage-100">
                <span className="inline-flex items-center justify-center w-11 h-11 bg-pine-900 text-honey-300 transition-colors duration-300 group-hover:bg-rasp-600 group-hover:text-cream">
                  <Ic className="w-5.5 h-5.5" />
                </span>
                <h3 className="mt-4 font-display font-bold text-[18px] text-pine-900">{f.t}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink/72">{f.d}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ── Sekcija 3 — Koliko iznosi subvencija ─────────────────── */
function Amounts() {
  return (
    <section className="bg-paper border-y border-pine-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          <Kicker>Koliko iznosi subvencija</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
            Procenat od propisanih troškova, <em className="italic text-rasp-600">ne od svake cene</em>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink/78">
            Zavisno od područja gazdinstva i aktuelnog javnog poziva, subvencija za kupovinu
            sertifikovanog sadnog materijala može iznositi od 40% do 70% od vrednosti
            prihvatljive investicije (do propisanog maksimuma po sadnici/hektaru). Tačan
            procenat za tekuću sezonu utvrđuje se godišnjom Uredbom Vlade Srbije i objavljuje
            se uz svaki javni poziv.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
            Drugim rečima: mehanizam nije prost procenat od stvarno fakturisane cene — obračun
            ide od propisanih maksimalnih „prihvatljivih tržišnih troškova” po sadnici,
            odnosno hektaru. Ako platite više od tablice, razlika se ne subvencioniše.
          </p>
        </Reveal>

        <Reveal delay={160} className="mt-10">
          <h3 className="font-display font-bold text-pine-900 text-[19px]">
            Maksimalni iznosi po korisniku — ažurirano za 2026.
          </h3>
          <p className="mt-2 text-[14px] text-ink/60">
            Izmena pravilnika (121/2025) podiže plafone od 1.1.2026 — veći dozvoljeni iznos
            znači i veći mogući podsticaj.
          </p>
          <div className="mt-5 overflow-x-auto bg-white border border-pine-800/12">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-pine-800/15">
                  <th className="py-3 px-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-moss-500">
                    Vrsta podsticaja
                  </th>
                  <th className="py-3 px-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-moss-500">
                    Do 2025.
                  </th>
                  <th className="py-3 px-4 font-mono text-[10.5px] uppercase tracking-[0.14em] text-moss-500">
                    Od 2026.
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pine-800/10">
                {SUBSIDY_MAX_AMOUNTS.map((r, i) => (
                  <tr key={r.k} className={i === SUBSIDY_MAX_AMOUNTS.length - 1 ? "border-t-2 border-pine-800/25" : ""}>
                    <td className={`py-3 px-4 text-[14px] ${i === SUBSIDY_MAX_AMOUNTS.length - 1 ? "font-bold text-pine-900" : "font-medium text-pine-900"}`}>
                      {r.k}
                    </td>
                    <td className="py-3 px-4 text-[13.5px] text-ink/45 line-through decoration-ink/30">
                      {r.old} din
                    </td>
                    <td className="py-3 px-4 text-[14px] font-bold text-moss-500">{r.new} din</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-10 bg-white border border-pine-800/12 p-6 sm:p-7 max-w-3xl">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-moss-500">
            Domaće/odomaćene sorte
          </p>
          <p className="mt-3 text-[14.5px] leading-relaxed text-ink/75">
            Za sadnice maline domaćih sorti (Gradina, Krupna dvorodna) i kupine (Čačanska
            bestrna), upisane u Registar sorti, podsticaj za nabavku sadnica uvećava se za
            dodatnih 100.000 dinara po hektaru podignutog zasada. Uvozne sorte koje nudi INSA
            KMA Fields (Enrosadira®, Easy Rose®, Ofelia®) nisu domaće/odomaćene sorte, pa ovaj
            dodatni podsticaj po pravilu ne važi za njih — osnovni podsticaj od 40–70% i dalje
            važi.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Sekcija 4 — Kako se prijaviti ─────────────────────────── */
function Steps() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
      <Reveal className="max-w-2xl">
        <Kicker>Postupak</Kicker>
        <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
          Kako se prijaviti — korak po korak
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-ink/75">
          Kompletna dokumentacija se prilaže elektronski, kroz softversko rešenje eAgrar — bez
          slanja papira poštom.
        </p>
      </Reveal>

      <div className="mt-12 space-y-0 divide-y divide-pine-800/12 border-y border-pine-800/12">
        {SUBSIDY_STEPS.map((s, i) => (
          <Reveal key={s.no} delay={i * 70}>
            <div className="grid sm:grid-cols-[70px_1fr] gap-4 sm:gap-8 py-6">
              <p className="font-display font-black text-[36px] leading-none text-sage-300">{s.no}</p>
              <div>
                <h3 className="font-display font-bold text-[18.5px] text-pine-900">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink/72 max-w-2xl">{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-10 grid lg:grid-cols-2 gap-6">
        <div className="bg-honey-100 border border-honey-400/40 p-6 sm:p-7">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[#8a5e12]">
            2026 — prelazna odredba
          </p>
          <p className="mt-3 text-[14.5px] leading-relaxed text-pine-900">
            Za 2026. godinu, izmena pravilnika dozvoljava prijavu i za investicije u potpunosti
            realizovane od 1. januara 2024. do 31. decembra 2025, kao i za nove zasade podignute
            u 4. kvartalu 2024. ili 1./2. kvartalu 2025 (odnosno u 3. kvartalu 2025. za jagodu).
            Ko je već kupio i zasadio, ne mora da čeka novu sadnju.
          </p>
        </div>
        <div className="bg-sage-100 border border-moss-500/25 p-6 sm:p-7">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-moss-500">
            Potrebna dokumentacija
          </p>
          <ul className="mt-3 space-y-2">
            {SUBSIDY_DOCS.map((d, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-pine-900/85">
                <span className="mt-1 w-1.5 h-1.5 shrink-0 bg-moss-500 rotate-45" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={160} className="mt-8">
        <p className="text-[14.5px] leading-relaxed text-ink/65 max-w-3xl">
          INSA KMA Fields ne sprovodi proceduru umesto klijenta niti garantuje odobrenje —
          pomažemo sa savetima i dokumentacijom vezanom za kupovinu sadnica i supstrata
          (fakture, specifikacije, sertifikat supstrata) i usmeravamo vas ka pravim koracima.
          Odluku o odobravanju uvek donosi Uprava za agrarna plaćanja, na osnovu administrativne
          i terenske provere.
        </p>
      </Reveal>
    </section>
  );
}

/* ── Sekcija 5 — Zašto INSA REMMY / INSA KMA Fields ────────── */
function WhyInsaKma() {
  return (
    <section className="bg-pine-950 dark-rows text-cream relative overflow-hidden">
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, var(--color-rasp-500) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <Reveal className="max-w-2xl">
          <Kicker light>Zašto naše sadnice i supstrat ispunjavaju uslov</Kicker>
          <h2 className="mt-4 font-display font-black tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
            Subvencija je razlog zašto ste ovde — <em className="italic text-honey-300">proizvod je razlog zašto ostajete</em>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-sage-200/90">
            Subvencija važi isključivo za sertifikovan sadni materijal. Sadnice malina koje INSA
            KMA Fields uvozi iz Holandije i Italije su vrhunske, dokumentovane sorte
            (Enrosadira®, Easy Rose®, Ofelia®), a INSA REMMY kokosov supstrat je prihvatljiv
            trošak u okviru pripreme zemljišta.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Reveal variant="rv-left" delay={100}>
            <div className="group relative overflow-hidden bg-pine-900/50 border border-cream/12 h-full flex flex-col transition-all duration-400 hover:border-honey-300/50 hover:bg-pine-900">
              <div className="relative overflow-hidden bg-pine-800">
                <img
                  src={IMG.nursery}
                  alt="Sertifikovane sadnice maline INSA KMA Fields"
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="font-display font-bold text-[21px]">Sadnice malina</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-sage-200/85 flex-1">
                  EU-sertifikovane, dokumentovanog porekla — spremne za zahtev za subvenciju bez
                  dodatnog usklađivanja dokumentacije.
                </p>
                <CTA id="cta-subvencije-sadnice" href="/sadnice" variant="btn-pine" className="mt-6 self-start">
                  Pogledajte sadnice malina
                </CTA>
              </div>
            </div>
          </Reveal>
          <Reveal variant="rv-right" delay={160}>
            <div className="group relative overflow-hidden bg-pine-900/50 border border-cream/12 h-full flex flex-col transition-all duration-400 hover:border-honey-300/50 hover:bg-pine-900">
              <div className="relative overflow-hidden bg-pine-800">
                <img
                  src={IMG.remmyLineup}
                  alt="INSA REMMY kokosov supstrat u svih osam veličina pakovanja"
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="font-display font-bold text-[21px]">Kokosov supstrat</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-sage-200/85 flex-1">
                  Nabavka supstrata sa sertifikatom je prihvatljiv trošak pripreme zemljišta za
                  zasade u saksijama/vrećama.
                </p>
                <CTA id="cta-subvencije-supstrat" href="/supstrat" variant="btn-pine" className="mt-6 self-start">
                  Pogledajte kokosov supstrat
                </CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Sekcija 6 — FAQ (+ FAQPage schema) ────────────────────── */
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SUBVENCIJE_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="bg-paper border-t border-pine-800/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        <Reveal>
          <Kicker>Pitanja i odgovori</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,2.8rem)]">
            Pre nego što pošaljete zahtev
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-pine-800/12 border-y border-pine-800/12">
          {SUBVENCIJE_FAQ.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <button
                className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-display font-bold text-[17px] sm:text-[18.5px] text-pine-900 group-hover:text-rasp-600 transition-colors">
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
                  <p className="pb-6 pr-10 text-[15px] leading-relaxed text-ink/75">{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Povezujući pasus pre formulara ────────────────────────── */
function Bridge() {
  return (
    <div className="bg-paper border-t border-pine-800/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-14 lg:pb-16 text-center">
        <Reveal>
          <p className="text-[16px] leading-relaxed text-ink/78 max-w-2xl mx-auto">
            Bez obzira u kojoj ste fazi procedure, prvi i najvažniji korak je da imate
            sertifikovan sadni materijal spreman za kupovinu — tu vam mi pomažemo.
          </p>
        </Reveal>
      </div>
    </div>
  );
}

/* ── Sekcija 7 — Formular (lead gen) ───────────────────────── */
/* Polja su namerno definisana kao konfiguracija — Željko šalje
   tačna Mautic polja naknadno, pa se lista dole lako proširuje
   bez diranja logike forme. Do tada slanje ide preko mailto,
   isti obrazac kao kontakt forma na /kontakt. */
type SubForm = { name: string; phone: string; email: string };
const SUB_FORM_FIELDS: {
  id: keyof SubForm;
  label: string;
  type: "text" | "tel" | "email";
  placeholder: string;
  required?: boolean;
}[] = [
  { id: "name", label: "Ime i prezime", type: "text", placeholder: "npr. Marko Marković", required: true },
  { id: "phone", label: "Telefon", type: "tel", placeholder: "npr. 064 123 4567", required: true },
  { id: "email", label: "Email", type: "email", placeholder: "vasa.adresa@primer.rs" },
];
const subFormEmpty: SubForm = { name: "", phone: "", email: "" };

function validateSubForm(f: SubForm) {
  const e: Partial<Record<keyof SubForm, string>> = {};
  if (f.name.trim().length < 2) e.name = "Unesite ime i prezime.";
  if (!/^[+\d][\d\s/\-]{5,}$/.test(f.phone.trim()))
    e.phone = "Unesite ispravan broj telefona (npr. 064 123 4567).";
  if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()))
    e.email = "Email adresa nije ispravna.";
  return e;
}

function SubvencijeForm() {
  const [f, setF] = useState<SubForm>(subFormEmpty);
  const [errors, setErrors] = useState<Partial<Record<keyof SubForm, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof SubForm) => (ev: React.ChangeEvent<HTMLInputElement>) => {
    setF({ ...f, [k]: ev.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validateSubForm(f);
    setErrors(e);
    if (Object.keys(e).length) return;

    const subject = "Upit sa sajta INSA KMA Fields — Subvencije";
    const body = [
      `Ime i prezime: ${f.name.trim()}`,
      `Telefon: ${f.phone.trim()}`,
      f.email.trim() ? `Email: ${f.email.trim()}` : "",
      "",
      "Zainteresovan/a sam za besplatne konsultacije o subvenciji za sadni materijal.",
      "",
      "— poslato preko forme na stranici /subvencije",
    ]
      .filter((l, i) => !(l === "" && i === 2))
      .join("\n");

    try {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: "lead", cta_id: "cta-subvencije-form" });
    } catch {}

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-white border border-moss-500/40 p-8 sm:p-10 text-center shadow-[0_30px_60px_-38px_rgba(12,26,18,0.4)]">
        <span className="mx-auto flex w-16 h-16 items-center justify-center bg-moss-500/15 text-moss-500">
          <Icons.check className="w-8 h-8" />
        </span>
        <h3 className="mt-6 font-display font-black text-pine-900 text-[26px] tracking-tight">
          Hvala na upitu!
        </h3>
        <p className="mt-3 text-[15.5px] leading-relaxed text-ink/75 max-w-md mx-auto">
          Otvorili smo vaš email program sa već popunjenim podacima za{" "}
          <strong className="text-pine-900">{CONTACT.email}</strong> — samo pritisnite Send.
          Ako želite brže, pozovite{" "}
          <a href={CONTACT.phoneHref} className="font-semibold text-rasp-600 hover:underline">
            {CONTACT.phone}
          </a>
          .
        </p>
        <button
          onClick={() => {
            setF(subFormEmpty);
            setSent(false);
          }}
          className="btn btn-ghost px-5 py-3 mt-7 cursor-pointer"
        >
          Pošaljite novi upit
        </button>
      </div>
    );
  }

  return (
    <form
      id="cta-subvencije-form"
      onSubmit={submit}
      noValidate
      className="bg-white border border-pine-800/15 p-6 sm:p-8 shadow-[0_36px_70px_-44px_rgba(12,26,18,0.5)]"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-display font-bold text-pine-900 text-[22px] tracking-tight">
          Forma za konsultacije
        </h3>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-moss-500">
          * obavezna polja
        </span>
      </div>

      <div className="mt-6 space-y-4">
        {SUB_FORM_FIELDS.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-[13.5px] font-semibold text-pine-900 mb-1.5">
              {field.label} {field.required && <span className="text-rasp-600">*</span>}
              {!field.required && (
                <span className="text-ink/40 font-normal">(opciono)</span>
              )}
            </label>
            <input
              id={field.id}
              type={field.type}
              value={f[field.id]}
              onChange={set(field.id)}
              placeholder={field.placeholder}
              className={`field ${errors[field.id] ? "err" : ""}`}
            />
            {errors[field.id] && (
              <p className="mt-1.5 text-[12.5px] text-rasp-600 font-medium">{errors[field.id]}</p>
            )}
          </div>
        ))}
      </div>

      <button type="submit" className="btn btn-rasp w-full px-6 py-4 text-base mt-6 cursor-pointer">
        Zakažite besplatne konsultacije
        <Icons.arrow className="btn-arrow w-4.5 h-4.5" />
      </button>
      <p className="mt-3.5 text-[12.5px] leading-relaxed text-ink/55 text-center">
        Slanjem se otvara vaš email program sa već popunjenim podacima za{" "}
        <strong className="text-ink/80">{CONTACT.email}</strong>.
      </p>
    </form>
  );
}

function Formular() {
  return (
    <section id="subvencije-formular" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 pb-20 lg:pb-24">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
        <Reveal>
          <Kicker>Besplatne konsultacije</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.06]">
            Ostavite podatke i ostvarite besplatne konsultacije sa našim timom eksperata
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink/75 max-w-lg">
            Javljamo vam se lično — proveravamo uslove za vaš zasad, predlažemo sertifikovan
            sadni materijal koji tačno odgovara subvenciji i vodimo vas kroz dalje korake.
          </p>
          <div className="mt-7 flex items-center gap-4">
            <span className="w-12 h-12 shrink-0 bg-rasp-600 text-cream font-display font-bold flex items-center justify-center text-[15px]">
              {CONTACT.initials}
            </span>
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-moss-500">Vaš kontakt</p>
              <p className="font-display font-bold text-[17px] text-pine-900">{CONTACT.person}</p>
            </div>
          </div>
        </Reveal>
        <Reveal variant="rv-right" delay={140}>
          <SubvencijeForm />
        </Reveal>
      </div>
    </section>
  );
}

/* ── Sekcija 8 — Napomena za proizvođače sadnog materijala ─── */
function ProducersNote() {
  return (
    <div className="bg-paper border-t border-pine-800/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Reveal>
          <p className="text-[13.5px] leading-relaxed text-ink/55">
            Napomena: postoji i poseban pravilnik za proizvođače/rasadnike sertifikovanog
            sadnog materijala, sa isplatom po komadu sadnice, a ne po proceduri opisanoj
            iznad. Ovo je relevantno samo ako sami proizvodite sadni materijal, ne za tipičnog
            kupca-poljoprivrednika — to je odvojen mehanizam podrške.
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export default function Subvencije() {
  return (
    <>
      <PageHero
        kicker="Do 70% povraćaja investicije"
        title={
          <>
            Subvencije za sadni materijal — <em className="italic text-rasp-600">vodič za poljoprivrednike</em>
          </>
        }
        text="Nosioci registrovanog poljoprivrednog gazdinstva (RPG) imaju pravo na državnu subvenciju za kupovinu sertifikovanog sadnog materijala — uključujući malinu u saksijama/vrećama sa supstratom. INSA KMA Fields prodaje tačno ono što je pokriveno subvencijom i pomaže vam kroz ceo proces."
        img={IMG.sadnice}
        alt="Sertifikovane sadnice maline spremne za sadnju uz subvenciju"
        note="RPG status · sve elektronski, kroz eAgrar"
        chips={[
          { icon: <Icons.shield className="w-4 h-4 text-moss-500" />, label: "Za nosioce RPG statusa" },
          { icon: <Icons.doc className="w-4 h-4 text-moss-500" />, label: "Prijava preko eAgrar" },
          { icon: <Icons.berry className="w-4 h-4 text-moss-500" />, label: "Malina, borovnica, jagoda" },
        ]}
      >
        <CTA id="cta-subvencije-hero" href="#subvencije-formular" size="lg">
          Zakažite besplatne konsultacije
        </CTA>
        <a href={CONTACT.phoneHref} className="btn btn-ghost px-6 py-4 text-base">
          <Icons.phone className="w-4.5 h-4.5 text-moss-500" />
          {CONTACT.phone}
        </a>
      </PageHero>

      <IntroCTA />
      <Eligibility />
      <Amounts />
      <Steps />
      <WhyInsaKma />
      <Faq />
      <Bridge />
      <Formular />
      <ProducersNote />
      <FinalCTA idPrefix="subvencije" />
    </>
  );
}
