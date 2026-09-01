import React, { useEffect, useState, useCallback } from "react";

/* Mali hash-router: 6 strana, deep-linkabilne, bez zavisnosti */

export type Route =
  | "/"
  | "/supstrat"
  | "/sadnice"
  | "/o-nama"
  | "/baza-znanja"
  | "/kontakt";

export const ROUTES: Route[] = [
  "/",
  "/supstrat",
  "/sadnice",
  "/o-nama",
  "/baza-znanja",
  "/kontakt",
];

function parseHash(): Route {
  const h = window.location.hash.replace(/^#/, "");
  const path = (h.startsWith("/") ? h : "/" + h).replace(/\/+$/, "") || "/";
  return (ROUTES as string[]).includes(path) ? (path as Route) : "/";
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

export function navigate(to: Route) {
  window.location.hash = "#" + to;
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
  const handle = useCallback(() => {
    onClick?.();
  }, [onClick]);
  return (
    <a href={`#${to}`} className={className} onClick={handle} {...rest}>
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
