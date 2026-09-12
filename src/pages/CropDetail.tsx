import React from "react";
import { CROPS, IMG } from "../data";
import { Link, useRoute } from "../lib/router";
import { CTA, Icons, Kicker, Reveal } from "../lib/ui";
import PageHero from "../components/PageHero";

const cropIcon: Record<string, (p: { className?: string }) => React.ReactElement> = {
  berry: Icons.berry,
  drop: Icons.drop,
  leaf: Icons.leaf,
  sun: Icons.sun,
  flower: Icons.flower,
};

export default function CropDetailPage() {
  const route = useRoute();
  const crop = CROPS.find((c) => c.to === route);

  if (!crop) return null;

  const otherCrops = CROPS.filter((c) => c.slug !== crop.slug);
  const firstSentence = crop.intro.split(". ")[0] + ".";

  return (
    <>
      <PageHero
        kicker="INSA REMMY"
        title={
          <>
            Supstrat za <em className="italic text-rasp-600">{crop.nameAcc}</em>
          </>
        }
        text={firstSentence}
        img={IMG.coirBags}
        alt="Profesionalne vreće INSA REMMY kokosovog supstrata"
        note={crop.name}
      >
        <CTA id={`cta-crop-${crop.slug}-hero`} href="/kontakt" size="lg">
          Zatražite ponudu
        </CTA>
      </PageHero>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <Reveal>
          <p className="text-[16.5px] leading-relaxed text-ink/80">{crop.intro}</p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <Kicker>Specifikacija mešavine</Kicker>
          <p className="mt-4 text-[16.5px] leading-relaxed text-ink/80">{crop.spec}</p>
        </Reveal>

        {(crop.extraCta || crop.extraNote) && (
          <Reveal delay={180} className="mt-10">
            <div className="bg-paper border border-pine-800/12 p-6 sm:p-8">
              {crop.extraCta && (
                <>
                  <p className="text-[15.5px] leading-relaxed text-ink/85">
                    {crop.extraCta.text}
                  </p>
                  <CTA
                    id={`cta-crop-${crop.slug}-extra`}
                    href={crop.extraCta.to}
                    variant="btn-pine"
                    className="mt-5"
                  >
                    {crop.extraCta.label}
                  </CTA>
                </>
              )}
              {crop.extraNote && (
                <p className="text-[15.5px] leading-relaxed text-ink/85">{crop.extraNote}</p>
              )}
            </div>
          </Reveal>
        )}
      </section>

      <section className="bg-paper border-y border-pine-800/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-20 text-center">
          <Reveal>
            <Kicker className="justify-center">Pogodna pakovanja</Kicker>
            <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.6rem,3vw,2.2rem)]">
              Ambalaža i veličine vreća
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink/75 max-w-xl mx-auto">
              Sve dostupne veličine i formate pakovanja INSA REMMY supstrata već smo
              opisali na glavnoj strani Supstrat.
            </p>
            <CTA id={`cta-crop-${crop.slug}-pakovanja`} href="/supstrat" variant="btn-pine" className="mt-6">
              Pogledajte dostupna pakovanja
            </CTA>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <Reveal>
          <Kicker>Ostale kulture</Kicker>
          <h2 className="mt-4 font-display font-black text-pine-900 tracking-tight text-[clamp(1.7rem,3vw,2.5rem)] leading-[1.08]">
            Supstrat za druge kulture
          </h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {otherCrops.map((c, i) => {
            const Ic = cropIcon[c.icon] ?? Icons.leaf;
            return (
              <Reveal key={c.slug} delay={i * 50}>
                <Link
                  to={c.to}
                  className="group flex items-center gap-3 bg-cream border border-pine-800/12 pl-5 pr-4 py-3.5 font-display font-bold text-[16px] text-pine-900 hover:border-rasp-500/50 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.97] active:shadow-none transition-all duration-200 ease-out"
                >
                  <span
                    className="text-moss-500 group-hover:text-rasp-500 transition-colors animate-icon-breathe group-hover:[animation-play-state:paused]"
                    style={{ animationDelay: `${i * 220}ms` }}
                  >
                    <Ic className="w-5 h-5" />
                  </span>
                  {c.name}
                  <Icons.chevron className="w-4 h-4 -rotate-90 text-pine-800/25 group-hover:text-rasp-500 group-hover:translate-x-1 transition-all duration-200" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
