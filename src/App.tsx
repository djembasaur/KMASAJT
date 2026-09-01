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
  "/supstrat": "Kokosov supstrat — pH 5.5–6.5, EC < 0.2 | INSA KMA Fields",
  "/sadnice": "Sadnice maline — Enrosadira, Easy Rose, Ofelia | INSA KMA Fields",
  "/o-nama": "O nama — Partner u proizvodnji | INSA KMA Fields",
  "/baza-znanja": "Baza znanja — Sadnice, supstrat, subvencije | INSA KMA Fields",
  "/kontakt": "Kontakt — Zatražite ponudu | INSA KMA Fields",
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
