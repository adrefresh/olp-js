"use client";
import { useEffect, useRef, useState } from "react";

type P = [number, number];
const UNWRAP_MS = 3200; // how long the paper takes to peel off
const A0 = 0.22; // how far the corner is peeled at rest

/** Clip a polygon (in u,v space) to one side of the line u+v=A. keep = +1 for u+v>=A, -1 for u+v<=A. */
function clip(poly: P[], A: number, keep: 1 | -1): P[] {
  const f = (p: P) => keep * (p[0] + p[1] - A);
  const out: P[] = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length];
    const fa = f(a), fb = f(b);
    if (fa >= 0) out.push(a);
    if ((fa >= 0) !== (fb >= 0)) {
      const t = fa / (fa - fb);
      out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
    }
  }
  return out;
}
const RECT: P[] = [[0, 0], [1, 0], [1, 1], [0, 1]];
const pct = (p: P) => `${((1 - p[0]) * 100).toFixed(2)}% ${(p[1] * 100).toFixed(2)}%`;
const pts = (p: P) => `${((1 - p[0]) * 100).toFixed(2)},${(p[1] * 100).toFixed(2)}`;

/** Founder photo under a sheet of paper that peels away slowly, by itself, when the photo section comes into view.
 *  Plays once per visitor; reduced-motion visitors see the photo directly. */
export default function FounderPhoto({ src, alt, ini, id }: { src: string; alt: string; ini: string; id: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const paper = useRef<HTMLSpanElement>(null);
  const flap = useRef<SVGPolygonElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let seen = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    try { if (localStorage.getItem("opslogic-founder-" + id) === "1") seen = true; } catch { /* storage unavailable */ }
    if (seen) {
      const t = window.setTimeout(() => setDone(true), 0);
      return () => clearTimeout(t);
    }
    let raf = 0, started = false;
    const draw = (A: number) => {
      const paperPoly = clip(RECT, A, 1);
      const folded = clip(RECT, A, -1).map((p): P => [A - p[1], A - p[0]]); // mirror across the fold line
      if (paper.current) paper.current.style.clipPath = paperPoly.length ? `polygon(${paperPoly.map(pct).join(",")})` : "polygon(0 0,0 0,0 0)";
      flap.current?.setAttribute("points", folded.length ? folded.map(pts).join(" ") : "0,0 0,0 0,0");
    };
    const play = () => {
      const t0 = performance.now();
      const step = (t: number) => {
        const k = Math.min(1, (t - t0) / UNWRAP_MS);
        const e = k * k * (3 - 2 * k); // ease in-out
        draw(A0 + (2.4 - A0) * e);
        if (k < 1) raf = requestAnimationFrame(step);
        else {
          try { localStorage.setItem("opslogic-founder-" + id, "1"); } catch { /* storage unavailable */ }
          setDone(true);
        }
      };
      raf = requestAnimationFrame(step);
    };
    // once half of this photo sits inside the middle band of the screen (so it has really arrived, not just peeking in), the unwrap plays by itself, slowly, whatever the scroll speed
    const io = new IntersectionObserver((en) => {
      if (!started && en.some((x) => x.isIntersecting)) { started = true; io.disconnect(); play(); }
    }, { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" });
    if (wrap.current) io.observe(wrap.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [id]);

  return (
    <div className={"ux-fp" + (done ? " done" : "")} ref={wrap}>
      <div className="ux-fp-in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={840} height={920} loading="lazy" draggable={false} />
        {done ? null : (
          <>
            <span className="ux-fp-paper" ref={paper} aria-hidden="true">
              <b>{ini}</b>
              <em>Unwrapping…</em>
            </span>
            <svg className="ux-fp-flap" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id={"fl" + id} x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset=".5" stopColor="#eaf4fc" />
                  <stop offset="1" stopColor="#b9d8ee" />
                </linearGradient>
              </defs>
              <polygon ref={flap} points={`${pts([A0, A0])} ${pts([A0, 0])} ${pts([0, A0])}`} fill={`url(#fl${id})`} />
            </svg>
          </>
        )}
      </div>
    </div>
  );
}
