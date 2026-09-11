import React, { useEffect, useRef, useState } from "react";

/* ── Hookovi ─────────────────────────────────────────────── */

export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

export function useInView<T extends HTMLElement>(threshold = 0.18, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);
  return { ref, inView };
}

/* ── Reveal wrapper ──────────────────────────────────────── */

export function Reveal({
  children,
  className = "",import React, { useEffect, useRef, useState } from "react";

/* ── Hookovi ─────────────────────────────────────────────── */

export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

export function useInView<T extends HTMLElement>(threshold = 0.18, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
      );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);
  return { ref, inView };
}

/* ── Reveal wrapper ──────────────────────────────────────── */

export function Reveal({
  children,
  className = "",
  variant = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "" | "rv-left" | "rv-right" | "rv-scale";
  delay?: number;
  as?: any;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={`rv ${variant} ${inView ? "in" : ""} ${className}`}
      style={{ ["--rv-delay" as any]: `${delay}ms` }}
      >
      {children}
    </Tag>Tag>
    );
}

/* ── Brojač koji raste kad uđe u kadar ───────────────────── */

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1300,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setN(value);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduced]);
  
  return (
    <span ref={ref} className={className}>
      {prefix}
      {n}
      {suffix}
    </span>span>
    );
}

/* ── Oznaka sekcije (mono, sa crticom) ───────────────────── */

export function Kicker({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] flex items-center gap-3 ${
        light ? "text-honey-300" : "text-moss-500"
      } ${className}`}
      >
    <span
      className={`inline-block h-px w-8 ${light ? "bg-honey-300/70" : "bg-moss-500/70"}`}
      />
      {children}
    </p>p>
    );
}

/* ── CTA dugme sa tracking ID-jem ────────────────────────── */

export function CTA({
  id,
  href,
  children,
  variant = "btn-rasp",
  size = "md",
  className = "",
  onClick,
}: {
  id: string;
  href: string;
  children: React.ReactNode;
  variant?: "btn-rasp" | "btn-pine" | "btn-ghost" | "btn-ghostlight";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      id={id}
      href={href}
      onClick={() => {
        try {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({ event: "cta_click", cta_id: id });
        } catch {}
        onClick?.();
      }}
      className={`btn ${variant} ${
        size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-[15px]"
      } ${className}`}
      >
      {children}
    <svg
      className="btn-arrow w-4 h-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      >
    <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>svg>
    </a>a>
    );
}

/* ── Ikone (inline SVG, stroke = currentColor) ───────────── */

type IP = { className?: string };
const S = (p: IP & { d: React.ReactNode }) => (
  <svg
    className={p.className ?? "w-5 h-5"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    >
    {p.d}
  </svg>svg>
  );

export const Icons = {
  berry: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <circle cx="9.2" cy="11" r="3.1" />
        <circle cx="14.8" cy="11" r="3.1" />
        <circle cx="12" cy="15.6" r="3.1" />
        <path d="M12 8V5.5M12 5.5c1.8-1.6 4-1.5 4-1.5s-.4 2.3-2.4 2.9M12 5.5C10.2 3.9 8 4 8 4s.4 2.3 2.4 2.9" />
        </>>
      }
        />
    ),
  leaf: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <path d="M4 20c0-9 6-15 16-16-1 10-7 16-16 16Z" />
        <path d="M4 20c3-5 7-9 12-12" />
        </>>
      }
        />
    ),
  shield: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
        <path d="M9 12l2 2 4-4.5" />
        </>>
      }
        />
    ),
  globe: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.7 2.6 4 5.7 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.7-4-9s1.3-6.4 4-9Z" />
        </>>
      }
        />
    ),
  truck: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <path d="M2 6h12v11H2zM14 9h4l3 3.5V17h-7" />
        <circle cx="6.5" cy="17.5" r="1.8" />
        <circle cx="17" cy="17.5" r="1.8" />
        </>>
      }
        />
    ),
  flask: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <path d="M9.5 3h5M10.5 3v6L5 19a1.5 1.5 0 0 0 1.3 2h11.4A1.5 1.5 0 0 0 19 19L13.5 9V3" />
        <path d="M7.5 15h9" />
        </>>
      }
        />
    ),
  drop: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <path d="M12 3s6.5 6.7 6.5 11a6.5 6.5 0 1 1-13 0C5.5 9.7 12 3 12 3Z" />
        <path d="M9 14a3 3 0 0 0 3 3" />
        </>>
      }
        />
    ),
  sun: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M4.9 4.9L6.7 6.7M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
        </>>
      }
        />
    ),
  root: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <path d="M12 3v9M12 12c0 4-3 4-4 9M12 12c0 4 3 4 4 9M12 12v9M7 5c2 1 3 3 3 3s1-2 3-3" />
        </>>
      }
        />
    ),
  chart: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <path d="M4 20V4M4 20h16" />
        <path d="M8 16v-5M12 16V7M16 16v-8M20 16v-3" />
        </>>
      }
        />
    ),
  flower: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <circle cx="12" cy="10" r="2.5" />
        <path d="M12 7.5V4M14.2 8.7l2.4-2.4M14.5 10H18M14.2 11.3l2.4 2.4M12 12.5V16M9.8 11.3l-2.4 2.4M9.5 10H6M9.8 8.7L7.4 6.3M12 16c-2.5 0-4 1.5-4.5 4h9c-.5-2.5-2-4-4.5-4Z" />
        </>>
      }
        />
    ),
  doc: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <path d="M6 3h8l4 4v14H6V3Z" />
        <path d="M14 3v4h4M9 12h6M9 16h6" />
        </>>
      }
        />
    ),
  phone: (p: IP) => (
    <S
      {...p}
      d={
        <path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a1.5 1.5 0 0 1-1.7 1.5C10 19.7 4.3 14 3.5 5.7A1.5 1.5 0 0 1 5 4Z" />
      }
      />
    ),
  mail: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <path d="m3.5 6.5 8.5 6 8.5-6" />
        </>>
      }
        />
    ),
  insta: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
        </>>
      }
        />
    ),
  check: (p: IP) => (
    <S {...p} d={<path d="m5 12.5 4.5 4.5L19 7.5" />} />
    ),
  x: (p: IP) => <S {...p} d={<path d="M6 6l12 12M18 6L6 18" />} />,
  chevron: (p: IP) => <S {...p} d={<path d="m6 9 6 6 6-6" />} />,
  menu: (p: IP) => <S {...p} d={<path d="M4 7h16M4 12h16M4 17h16" />} />,
  close: (p: IP) => <S {...p} d={<path d="M6 6l12 12M18 6L6 18" />} />,
  arrow: (p: IP) => (
    <S {...p} d={<path d="M5 12h14M13 6l6 6-6 6" />} />
    ),
  pin: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
        </>>
      }
        />
    ),
  clock: (p: IP) => (
    <S
      {...p}
      d={
        <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
        </>>
      }
        />
    ),
};

/* ── Logo: leaf ikonica + tekst ──────────────────────────── */

export function LogoMark({ className = "w-9 h-9" }: IP) {
  return (
    <img
      src="/logo-leaf.png"
      alt="INSA KMA Fields logo"
      className={`${className} object-contain`}
      />
    );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
    <LogoMark className="w-9 h-9 shrink-0" />
    <span className="leading-none">
    <span
      className={`block font-display font-black text-[19px] tracking-tight ${
        light ? "text-cream" : "text-pine-900"
      }`}
      >
    INSA <span className="text-rasp-500">KMA</span>span>
    </span>span>
    <span
      className={`block font-mono text-[9.5px] uppercase tracking-[0.34em] mt-1 ${
        light ? "text-sage-300" : "text-moss-500"
      }`}
      >
    Fields
    </span>span>
    </span>span>
    </span>span>
    );
}
</></></></></></></></></></></></></></></></></Tag>
  variant = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "" | "rv-left" | "rv-right" | "rv-scale";
  delay?: number;
  as?: any;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={`rv ${variant} ${inView ? "in" : ""} ${className}`}
      style={{ ["--rv-delay" as any]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ── Brojač koji raste kad uđe u kadar ───────────────────── */

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1300,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setN(value);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

/* ── Oznaka sekcije (mono, sa crticom) ───────────────────── */

export function Kicker({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] flex items-center gap-3 ${
        light ? "text-honey-300" : "text-moss-500"
      } ${className}`}
    >
      <span
        className={`inline-block h-px w-8 ${light ? "bg-honey-300/70" : "bg-moss-500/70"}`}
      />
      {children}
    </p>
  );
}

/* ── CTA dugme sa tracking ID-jem ────────────────────────── */

export function CTA({
  id,
  href,
  children,
  variant = "btn-rasp",
  size = "md",
  className = "",
  onClick,
}: {
  id: string;
  href: string;
  children: React.ReactNode;
  variant?: "btn-rasp" | "btn-pine" | "btn-ghost" | "btn-ghostlight";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      id={id}
      href={href}
      onClick={() => {
        try {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({ event: "cta_click", cta_id: id });
        } catch {}
        onClick?.();
      }}
      className={`btn ${variant} ${
        size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-[15px]"
      } ${className}`}
    >
      {children}
      <svg
        className="btn-arrow w-4 h-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

/* ── Ikone (inline SVG, stroke = currentColor) ───────────── */

type IP = { className?: string };
const S = (p: IP & { d: React.ReactNode }) => (
  <svg
    className={p.className ?? "w-5 h-5"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {p.d}
  </svg>
);

export const Icons = {
  berry: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <circle cx="9.2" cy="11" r="3.1" />
          <circle cx="14.8" cy="11" r="3.1" />
          <circle cx="12" cy="15.6" r="3.1" />
          <path d="M12 8V5.5M12 5.5c1.8-1.6 4-1.5 4-1.5s-.4 2.3-2.4 2.9M12 5.5C10.2 3.9 8 4 8 4s.4 2.3 2.4 2.9" />
        </>
      }
    />
  ),
  leaf: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <path d="M4 20c0-9 6-15 16-16-1 10-7 16-16 16Z" />
          <path d="M4 20c3-5 7-9 12-12" />
        </>
      }
    />
  ),
  shield: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
          <path d="M9 12l2 2 4-4.5" />
        </>
      }
    />
  ),
  globe: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.7 2.6 4 5.7 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.7-4-9s1.3-6.4 4-9Z" />
        </>
      }
    />
  ),
  truck: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <path d="M2 6h12v11H2zM14 9h4l3 3.5V17h-7" />
          <circle cx="6.5" cy="17.5" r="1.8" />
          <circle cx="17" cy="17.5" r="1.8" />
        </>
      }
    />
  ),
  flask: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <path d="M9.5 3h5M10.5 3v6L5 19a1.5 1.5 0 0 0 1.3 2h11.4A1.5 1.5 0 0 0 19 19L13.5 9V3" />
          <path d="M7.5 15h9" />
        </>
      }
    />
  ),
  drop: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <path d="M12 3s6.5 6.7 6.5 11a6.5 6.5 0 1 1-13 0C5.5 9.7 12 3 12 3Z" />
          <path d="M9 14a3 3 0 0 0 3 3" />
        </>
      }
    />
  ),
  sun: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5V5M12 19v2.5M2.5 12H5M19 12h2.5M4.9 4.9L6.7 6.7M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
        </>
      }
    />
  ),
  root: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <path d="M12 3v9M12 12c0 4-3 4-4 9M12 12c0 4 3 4 4 9M12 12v9M7 5c2 1 3 3 3 3s1-2 3-3" />
        </>
      }
    />
  ),
  chart: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <path d="M4 20V4M4 20h16" />
          <path d="M8 16v-5M12 16V7M16 16v-8M20 16v-3" />
        </>
      }
    />
  ),
  flower: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <circle cx="12" cy="10" r="2.5" />
          <path d="M12 7.5V4M14.2 8.7l2.4-2.4M14.5 10H18M14.2 11.3l2.4 2.4M12 12.5V16M9.8 11.3l-2.4 2.4M9.5 10H6M9.8 8.7L7.4 6.3M12 16c-2.5 0-4 1.5-4.5 4h9c-.5-2.5-2-4-4.5-4Z" />
        </>
      }
    />
  ),
  doc: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <path d="M6 3h8l4 4v14H6V3Z" />
          <path d="M14 3v4h4M9 12h6M9 16h6" />
        </>
      }
    />
  ),
  phone: (p: IP) => (
    <S
      {...p}
      d={
        <path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a1.5 1.5 0 0 1-1.7 1.5C10 19.7 4.3 14 3.5 5.7A1.5 1.5 0 0 1 5 4Z" />
      }
    />
  ),
  mail: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <rect x="3" y="5" width="18" height="14" rx="1.5" />
          <path d="m3.5 6.5 8.5 6 8.5-6" />
        </>
      }
    />
  ),
  insta: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
        </>
      }
    />
  ),
  check: (p: IP) => (
    <S {...p} d={<path d="m5 12.5 4.5 4.5L19 7.5" />} />
  ),
  x: (p: IP) => <S {...p} d={<path d="M6 6l12 12M18 6L6 18" />} />,
  chevron: (p: IP) => <S {...p} d={<path d="m6 9 6 6 6-6" />} />,
  menu: (p: IP) => <S {...p} d={<path d="M4 7h16M4 12h16M4 17h16" />} />,
  close: (p: IP) => <S {...p} d={<path d="M6 6l12 12M18 6L6 18" />} />,
  arrow: (p: IP) => (
    <S {...p} d={<path d="M5 12h14M13 6l6 6-6 6" />} />
  ),
  pin: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      }
    />
  ),
  clock: (p: IP) => (
    <S
      {...p}
      d={
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </>
      }
    />
  ),
};

/* ── Logo: malina od zrna + list ─────────────────────────── */

export function LogoMark({ className = "w-9 h-9" }: IP) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 4c6.5 0 11.5 5 11.5 5S30.5 14 24 14 12.5 9 12.5 9 17.5 4 24 4Z"
        fill="var(--color-moss-500)"
      />
      <circle cx="17.5" cy="24" r="7" fill="var(--color-rasp-500)" />
      <circle cx="30.5" cy="24" r="7" fill="var(--color-rasp-700)" />
      <circle cx="24" cy="34" r="7" fill="var(--color-rasp-600)" />
      <circle cx="24" cy="17" r="5" fill="var(--color-rasp-400)" />
      <circle cx="15.4" cy="21.8" r="1.6" fill="rgba(251,249,242,.55)" />
      <circle cx="22" cy="32" r="1.6" fill="rgba(251,249,242,.4)" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="w-9 h-9 shrink-0" />
      <span className="leading-none">
        <span
          className={`block font-display font-black text-[19px] tracking-tight ${
            light ? "text-cream" : "text-pine-900"
          }`}
        >
          INSA <span className="text-rasp-500">KMA</span>
        </span>
        <span
          className={`block font-mono text-[9.5px] uppercase tracking-[0.34em] mt-1 ${
            light ? "text-sage-300" : "text-moss-500"
          }`}
        >
          Fields
        </span>
      </span>
    </span>
  );
}
