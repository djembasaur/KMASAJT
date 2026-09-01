import React, { useState } from "react";
import { CONTACT, INTERESTS, KONTAKT_FAQ } from "../data";
import { CTA, Icons, Kicker, Reveal } from "../lib/ui";

type Form = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

const empty: Form = { name: "", phone: "", email: "", interest: INTERESTS[0], message: "" };

function validate(f: Form) {
  const e: Partial<Record<keyof Form, string>> = {};
  if (f.name.trim().length < 2) e.name = "Unesite ime i prezime.";
  if (!/^[+\d][\d\s/\-]{5,}$/.test(f.phone.trim()))
    e.phone = "Unesite ispravan broj telefona (npr. 064 123 4567).";
  if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()))
    e.email = "Email adresa nije ispravna.";
  return e;
}

function ContactForm() {
  const [f, setF] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Form) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setF({ ...f, [k]: ev.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length) return;

    const subject = `Upit sa sajta INSA KMA Fields — ${f.interest}`;
    const body = [
      `Ime i prezime: ${f.name.trim()}`,
      `Telefon: ${f.phone.trim()}`,
      f.email.trim() ? `Email: ${f.email.trim()}` : "",
      `Zainteresovan/a sam za: ${f.interest}`,
      "",
      "Poruka:",
      f.message.trim() || "—",
      "",
      "— poslato preko kontakt forme na sajtu",
    ]
      .filter((l, i) => !(l === "" && i === 2))
      .join("\n");

    try {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "lead",
        cta_id: "cta-kontakt-form",
        lead_interest: f.interest,
      });
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
          <strong className="text-pine-900">{CONTACT.email}</strong> — samo pritisnite
          Send. Ako želite brže, pozovite{" "}
          <a href={CONTACT.phoneHref} className="font-semibold text-rasp-600 hover:underline">
            {CONTACT.phone}
          </a>
          .
        </p>
        <button
          onClick={() => {
            setF(empty);
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
      id="cta-kontakt-form"
      onSubmit={submit}
      noValidate
      className="bg-white border border-pine-800/15 p-6 sm:p-8 shadow-[0_36px_70px_-44px_rgba(12,26,18,0.5)]"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display font-bold text-pine-900 text-[22px] tracking-tight">
          Forma za upit
        </h2>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-moss-500">
          * obavezna polja
        </span>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-[13.5px] font-semibold text-pine-900 mb-1.5">
            Ime i prezime <span className="text-rasp-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={f.name}
            onChange={set("name")}
            placeholder="npr. Marko Marković"
            className={`field ${errors.name ? "err" : ""}`}
          />
          {errors.name && <p className="mt-1.5 text-[12.5px] text-rasp-600 font-medium">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-[13.5px] font-semibold text-pine-900 mb-1.5">
            Telefon <span className="text-rasp-600">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={f.phone}
            onChange={set("phone")}
            placeholder="npr. 064 123 4567"
            className={`field ${errors.phone ? "err" : ""}`}
          />
          {errors.phone && <p className="mt-1.5 text-[12.5px] text-rasp-600 font-medium">{errors.phone}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="block text-[13.5px] font-semibold text-pine-900 mb-1.5">
          Email <span className="text-ink/40 font-normal">(opciono)</span>
        </label>
        <input
          id="email"
          type="email"
          value={f.email}
          onChange={set("email")}
          placeholder="vasa.adresa@primer.rs"
          className={`field ${errors.email ? "err" : ""}`}
        />
        {errors.email && <p className="mt-1.5 text-[12.5px] text-rasp-600 font-medium">{errors.email}</p>}
      </div>

      <div className="mt-4">
        <label htmlFor="interest" className="block text-[13.5px] font-semibold text-pine-900 mb-1.5">
          Zainteresovan/a sam za
        </label>
        <select id="interest" value={f.interest} onChange={set("interest")} className="field cursor-pointer">
          {INTERESTS.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block text-[13.5px] font-semibold text-pine-900 mb-1.5">
          Poruka
        </label>
        <textarea
          id="message"
          rows={4}
          value={f.message}
          onChange={set("message")}
          placeholder="Kultura, približna površina, lokacija, planirani termin sadnje…"
          className="field resize-y"
        />
      </div>

      <button type="submit" className="btn btn-rasp w-full px-6 py-4 text-base mt-6 cursor-pointer">
        Pošaljite upit
        <Icons.arrow className="btn-arrow w-4.5 h-4.5" />
      </button>
      <p className="mt-3.5 text-[12.5px] leading-relaxed text-ink/55 text-center">
        Slanjem se otvara vaš email program sa već popunjenim podacima za{" "}
        <strong className="text-ink/80">{CONTACT.email}</strong>.
      </p>
    </form>
  );
}

function InfoColumn() {
  return (
    <div className="space-y-8">
      <Reveal>
        <Kicker>Kontakt</Kicker>
        <h1 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.04]">
          Recite nam šta planirate —{" "}
          <em className="italic text-rasp-600">ostalo je naša briga.</em>
        </h1>
        <p className="mt-5 text-[16.5px] leading-relaxed text-ink/75 max-w-xl">
          Bilo da podižete novi zasad, proširujete postojeći ili tek istražujete —
          pošaljite upit ili pozovite. Detalje oko dostupnosti sorti, supstrata i
          subvencija dobijate direktno, bez posrednika.
        </p>
      </Reveal>

      <Reveal delay={140} className="grid gap-3">
        <a
          href={CONTACT.phoneHref}
          className="group flex items-center gap-4 bg-white border border-pine-800/12 px-5 py-4 hover:border-rasp-500/50 hover:-translate-y-0.5 transition-all duration-300"
        >
          <span className="w-11 h-11 shrink-0 bg-rasp-600 text-cream flex items-center justify-center">
            <Icons.phone className="w-5 h-5" />
          </span>
          <span>
            <span className="block font-mono text-[10.5px] uppercase tracking-[0.18em] text-moss-500">
              Telefon — najbrže
            </span>
            <span className="font-display font-bold text-[21px] text-pine-900 group-hover:text-rasp-600 transition-colors">
              {CONTACT.phone}
            </span>
          </span>
        </a>
        <a
          href={`mailto:${CONTACT.email}`}
          className="group flex items-center gap-4 bg-white border border-pine-800/12 px-5 py-4 hover:border-rasp-500/50 hover:-translate-y-0.5 transition-all duration-300"
        >
          <span className="w-11 h-11 shrink-0 bg-pine-900 text-honey-300 flex items-center justify-center">
            <Icons.mail className="w-5 h-5" />
          </span>
          <span className="min-w-0">
            <span className="block font-mono text-[10.5px] uppercase tracking-[0.18em] text-moss-500">
              Email
            </span>
            <span className="font-semibold text-[15.5px] text-pine-900 break-all group-hover:text-rasp-600 transition-colors">
              {CONTACT.email}
            </span>
          </span>
        </a>
        <a
          href={CONTACT.instagram}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 bg-white border border-pine-800/12 px-5 py-4 hover:border-rasp-500/50 hover:-translate-y-0.5 transition-all duration-300"
        >
          <span className="w-11 h-11 shrink-0 bg-sage-100 text-pine-800 flex items-center justify-center">
            <Icons.insta className="w-5 h-5" />
          </span>
          <span>
            <span className="block font-mono text-[10.5px] uppercase tracking-[0.18em] text-moss-500">
              Instagram
            </span>
            <span className="font-semibold text-[15.5px] text-pine-900 group-hover:text-rasp-600 transition-colors">
              {CONTACT.instagramLabel}
            </span>
          </span>
        </a>
      </Reveal>

      <Reveal delay={220}>
        <div className="bg-pine-950 dark-rows text-cream p-6">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 shrink-0 bg-rasp-600 font-display font-bold flex items-center justify-center text-[17px]">
              {CONTACT.initials}
            </span>
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-sage-300">
                Vaš kontakt
              </p>
              <p className="font-display font-bold text-[19px]">{CONTACT.person}</p>
            </div>
          </div>
          <ul className="mt-5 space-y-2 text-[14px] text-sage-200/90">
            <li className="flex items-center gap-2.5">
              <Icons.truck className="w-4 h-4 text-honey-300 shrink-0" /> Dostava širom Srbije
            </li>
            <li className="flex items-center gap-2.5">
              <Icons.doc className="w-4 h-4 text-honey-300 shrink-0" /> Savet i podrška uz svaku kupovinu
            </li>
            <li className="flex items-center gap-2.5">
              <Icons.shield className="w-4 h-4 text-honey-300 shrink-0" /> Dokumentacija za subvencije 40–70%
            </li>
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-paper border-t border-pine-800/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <Reveal>
          <Kicker>Pre slanja upita</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.7rem,3vw,2.4rem)]">
            Dobra pitanja, brži odgovori
          </h2>
        </Reveal>
        <div className="mt-8 divide-y divide-pine-800/12 border-y border-pine-800/12">
          {KONTAKT_FAQ.map((f, i) => (
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

export default function Kontakt() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 field-rows opacity-60" aria-hidden="true" />
        <div
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-rasp-100) 75%, transparent) 0%, transparent 65%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <InfoColumn />
          <Reveal variant="rv-right" delay={160}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <Faq />
      <section className="bg-pine-900 dark-rows text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-display font-bold text-[19px] sm:text-[21px]">
            Sezona <span className="text-honey-300">proleće / jesen 2027.</span> se planira sada.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTA id="cta-kontakt-final" href="#/sadnice">
              Rezervišite sadnice
            </CTA>
            <CTA id="cta-kontakt-supstrat" href="#/supstrat" variant="btn-ghostlight">
              Kokosov supstrat
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
