import React from "react";
import { Kicker, Reveal } from "../lib/ui";

export default function PageHero({
  kicker,
  title,
  text,
  img,
  alt,
  chips = [],
  children,
  note,
}: {
  kicker: string;
  title: React.ReactNode;
  text: string;
  img: string;
  alt: string;
  chips?: { icon: React.ReactElement; label: string }[];
  children?: React.ReactNode;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 field-rows opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-sage-300) 50%, transparent) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 lg:pt-20 lg:pb-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <Kicker>{kicker}</Kicker>
          </Reveal>
          <h1 className="mt-5 font-display font-black text-pine-900 tracking-tight text-[clamp(2.2rem,5.4vw,3.9rem)] leading-[1.04]">
            {title}
          </h1>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-ink/75">{text}</p>
          </Reveal>
          <Reveal delay={300} className="mt-8 flex flex-wrap items-center gap-4">
            {children}
          </Reveal>
          {chips.length > 0 && (
            <Reveal delay={400} className="mt-8 flex flex-wrap gap-2.5">
              {chips.map((c, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-white/80 border border-pine-800/12 px-3.5 py-2 text-[13px] font-medium text-pine-800 hover:border-moss-500/50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {c.icon}
                  {c.label}
                </span>
              ))}
            </Reveal>
          )}
        </div>
        <div className="lg:col-span-6 relative">
          <Reveal variant="rv-scale" delay={180} className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-moss-500/40" aria-hidden="true" />
            <div className="relative overflow-hidden bg-pine-800 aspect-[4/3]">
              <img src={img} alt={alt} className="w-full h-full object-cover animate-kenburns" />
              {note && (
                <p className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/85 bg-pine-950/60 px-3 py-1.5">
                  {note}
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
