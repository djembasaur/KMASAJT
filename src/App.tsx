import React, { useEffect } from "react";
import { useRoute, type Route } from "./lib/router";
import { Footer, FloatCTA, Header } from "./components/Chrome";
import Home from "./pages/Home";
import Supstrat from "./pages/Supstrat";
import Sadnice from "./pages/Sadnice";
import ONama from "./pages/ONama";
import BazaZnanja from "./pages/BazaZnanja";
import Kontakt from "./pages/Kontakt";

const TITLES: Record<Route, string> = {
  "/": "INSA KMA Fields — Sertifikovane sadnice maline i kokosov supstrat",
  "/supstrat": "INSA KMA Fields — Kokosov supstrat (pH 5.5–6.5, EC < 0.2)",
  "/sadnice": "INSA KMA Fields — Sadnice maline (Enrosadira, Easy Rose, Ofelia)",
  "/o-nama": "INSA KMA Fields — O nama, partner u proizvodnji",
  "/baza-znanja": "INSA KMA Fields — Baza znanja: sadnice, supstrat, subvencije",
  "/kontakt": "INSA KMA Fields — Kontakt, zatražite ponudu",
};

const DESCRIPTIONS: Record<Route, string> = {
  "/": "EU-sertifikovane sadnice maline (Enrosadira, Easy Rose, Ofelia) iz Italije i Holandije i kokosov supstrat za klimu Srbije. Subvencije 40–70%, dostava Srbijom.",
  "/supstrat": "Premium kokosov supstrat za malinu — 100% kokos bez treseta, ispran i puferisan, pH 5.5–6.5 i EC < 0.2 mS/cm. Vek 3–4 godine, vreće od 1.5 do 80 litara.",
  "/sadnice": "EU-sertifikovane sadnice maline Enrosadira, Easy Rose i Ofelia iz rasadnika Italije i Holandije — dokumentovano poreklo i ograničene godišnje rezervacije.",
  "/o-nama": "INSA KMA Fields — partner u proizvodnji maline: uvoz sertifikovanih sadnica i kokosovog supstrata uz stručnu podršku od planiranja zasada do berbe i subvencija.",
  "/baza-znanja": "Praktični vodič za proizvođače maline: gustina sadnje, fertirigacija, izbor supstrata i postupak za subvencije 40–70% za sertifikovan sadni materijal.",
  "/kontakt": "Zatražite ponudu za sadnice maline i kokosov supstrat — pozovite 064 8648 522 ili pišite na sandra.capin@insakma.com. Dostava širom Srbije, stručna podrška.",
};

const PAGES: Record<Route, React.ComponentType> = {
  "/": Home,
  "/supstrat": Supstrat,
  "/sadnice": Sadnice,
  "/o-nama": ONama,
  "/baza-znanja": BazaZnanja,
  "/kontakt": Kontakt,
};

export default function App() {
  const route = useRoute();
  const Page = PAGES[route];

  useEffect(() => {
    document.title = TITLES[route];

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", DESCRIPTIONS[route]);

    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", `https://www.insakma.com${route === "/" ? "" : route}`);
  }, [route]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header route={route} />
      <main key={route} className="flex-1 animate-fade-page">
        <Page />
      </main>
      <Footer />
      <FloatCTA route={route} />
    </div>
  );
}
