import { mkdirSync, copyFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

/*
 * GitHub Pages je čisto statičko hostovanje — nema server-side rewrite
 * pravila. Naš 404.html trik (spa-github-pages pattern) rešava problem za
 * ljude u browseru (JS presretne 404 i preusmeri na pravu rutu), ALI HTTP
 * status kod koji GitHub Pages vrati za /sadnice, /supstrat itd. ostaje 404.
 *
 * Google (i drugi crawleri) odbijaju da indeksiraju stranicu čim vide 404
 * status kod, PRE nego što uopšte izvrše JavaScript — bez obzira što bi
 * sadržaj posle JS redirekcije bio ispravan. Rezultat: routing radi za
 * korisnike, ali Google Search Console javlja "Not Found (404)" i odbija
 * indeksiranje.
 *
 * Rešenje: posle `vite build`, kopiramo dist/index.html u dist/<ruta>/index.html
 * za svaku poznatu rutu. GitHub Pages tada servira TAJ fajl direktno kao
 * pravi 200 OK odgovor (nema fallback-a na 404.html), React app se normalno
 * pokrene, pročita window.location.pathname i renderuje ispravnu stranicu —
 * uključujući dinamički title/meta description/canonical za tu rutu.
 *
 * VAŽNO: ova lista MORA da odgovara ROUTES nizu u src/lib/router.tsx. Ako se
 * doda nova ruta tamo, dodaj je i ovde.
 */
const routes = ["/supstrat", "/sadnice", "/o-nama", "/baza-znanja", "/kontakt"];

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");
const indexPath = join(distDir, "index.html");

if (!existsSync(indexPath)) {
  console.error("copy-routes: dist/index.html ne postoji — da li je `vite build` prošao pre ovoga?");
  process.exit(1);
}

for (const route of routes) {
  const dir = join(distDir, route.slice(1));
  mkdirSync(dir, { recursive: true });
  copyFileSync(indexPath, join(dir, "index.html"));
  console.log(`copy-routes: dist${route}/index.html kreiran`);
}
