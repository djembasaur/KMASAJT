import React, { useEffect, useState, useCallback } from "react";

/* Mali router: 6 strana, deep-linkabilne, bez zavisnosti. Koristi
   history.pushState/popstate umesto location.hash da Google indeksira
   svaku stranicu kao poseban URL. */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    mt?: (...args: any[]) => void;
  }
}

export type Route =
  | "/"
  | "/supstrat"
  | "/supstrat/paradajz"
  | "/supstrat/krastavac"
  | "/supstrat/paprika"
  | "/supstrat/plavi-patlidzan"
  | "/supstrat/jagoda"
  | "/supstrat/malina"
  | "/supstrat/kupina"
  | "/supstrat/borovnica"
  | "/supstrat/ruza"
  | "/sadnice"
  | "/subvencije"
  | "/o-nama"
  | "/baza-znanja"
  | "/kontakt";

export const ROUTES: Route[] = [
  "/",
  "/supstrat",
  "/supstrat/paradajz",
  "/supstrat/krastavac",
  "/supstrat/paprika",
  "/supstrat/plavi-patlidzan",
  "/supstrat/jagoda",
  "/supstrat/malina",
  "/supstrat/kupina",
  "/supstrat/borovnica",
  "/supstrat/ruza",
  "/sadnice",
  "/subvencije",
  "/o-nama",
  "/baza-znanja",
  "/kontakt",
];

/* BASE_URL je "./" lokalno (dev/build) ili "/" na GitHub Actions/custom
   domenu — oba slučaja serviraju sajt sa root putanje, pa se "./" svodi
   na "/" da bi računanje putanja (i apsolutnih URL-ova za statične
   resurse poput slika i loga) radilo i lokalno i posle navigacije na
   ne-root rutu (gde bi relativno "./" pogrešno računalo putanju u
   odnosu na trenutnu rutu umesto korena sajta). */
export const BASE = (() => {
  const b = import.meta.env.BASE_URL || "/";
  return b === "./" ? "/" : b;
})();

export function withBase(to: Route): string {
  if (BASE === "/") return to;
  return BASE.replace(/\/$/, "") + to;
}

function stripBase(pathname: string): string {
  if (BASE !== "/" && pathname.startsWith(BASE)) {
    return "/" + pathname.slice(BASE.length);
  }
  return pathname;
}

function parsePath(): Route {
  const raw = stripBase(window.location.pathname);
  const path = raw.replace(/\/+$/, "") || "/";
  return (ROUTES as string[]).includes(path) ? (path as Route) : "/";
}

type Listener = () => void;
const listeners = new Set<Listener>();

function emitChange() {
  listeners.forEach((l) => l());
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(parsePath);

  useEffect(() => {
    const onChange = () => {
      setRoute(parsePath());
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    listeners.add(onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      listeners.delete(onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);

  return route;
}

export function navigate(to: Route) {
  window.history.pushState({}, "", withBase(to));
  emitChange();
}

/* Standardni obrazac (React Router i sl.): pusti pretraživač da
   normalno obradi ctrl/cmd/shift/alt-klik i klik srednjim tasterom
   (koji nikad ne stiže kao button === 0), da otvaranje u novom tabu i
   sl. i dalje rade. */
function shouldInterceptClick(e: React.MouseEvent) {
  return (
    !e.defaultPrevented &&
    e.button === 0 &&
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
  );
}

export function Link({
  to,
  children,
  className,
  onClick,
  ...rest
}: {
  to: Route;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const handle = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.();
      if (shouldInterceptClick(e)) {
        e.preventDefault();
        navigate(to);
      }
    },
    [onClick, to]
  );
  return (
    <a href={withBase(to)} className={className} onClick={handle} {...rest}>
      {children}
    </a>
  );
}

/* GTM-friendly klik: šalje događaj u dataLayer za Meta/Google pixel */
export function trackCTA(id: string) {
  try {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: "cta_click", cta_id: id });
  } catch {
    /* tiho — tracking ne sme da lomi UX */
  }
}
