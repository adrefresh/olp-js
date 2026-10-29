"use client";
import { useEffect, useRef, useState } from "react";

type P = [number, number];
const A0 = 0.22; // how far the corner is peeled at rest
const KEY = "opslogic-founder-";

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

/** Founder photo under a sheet of paper. Drag the peeled top-right corner across the photo to unwrap it for good.
 *  Reduced-motion visitors see the photo directly. */
export default function FounderPhoto({ src, alt, ini, id }: { src: string; alt: string; ini: string; id: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const paper = useRef<HTMLSpanElement>(null);
  const flap = useRef<SVGPolygonElement>(null);
  const [done, setDone] = useState(false);
  const s = useRef({ A: A0, drag: false, anim: 0 });

  useEffect(() => {
    let seen = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    try { if (localStorage.getItem(KEY + id) === "1") seen = true; } catch { /* storage unavailable */ }
    const t = seen ? window.setTimeout(() => setDone(true), 0) : 0;
    const st = s.current;
    return () => { clearTimeout(t); cancelAnimationFrame(st.anim); };
  }, [id]);

  function draw(A: number) {
    s.current.A = A;
    const paperPoly = clip(RECT, A, 1);
    const folded = clip(RECT, A, -1).map((p): P => [A - p[1], A - p[0]]); // mirror across the fold line
    if (paper.current) paper.current.style.clipPath = paperPoly.length ? `polygon(${paperPoly.map(pct).join(",")})` : "polygon(0 0,0 0,0 0)";
    flap.current?.setAttribute("points", folded.map(pts).join(" "));
  }

  function animateTo(target: number, ms: number, then?: () => void) {
    const st = s.current;
    cancelAnimationFrame(st.anim);
    const from = st.A, t0 = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - k, 3);
      draw(from + (target - from) * e);
      if (k < 1) st.anim = requestAnimationFrame(step); else then?.();
    };
    st.anim = requestAnimationFrame(step);
  }
  function finish() {
    animateTo(2.6, 450, () => {
      try { localStorage.setItem(KEY + id, "1"); } catch { /* storage unavailable */ }
      setDone(true);
    });
  }

  /* ---- drag the corner ---- */
  function aFromPointer(e: React.PointerEvent) {
    const b = wrap.current!.getBoundingClientRect();
    const u = 1 - (e.clientX - b.left) / b.width, v = (e.clientY - b.top) / b.height;
    const m = (u + v) / 2;
    return Math.max(A0, A0 + 2 * (m - A0));
  }
  function down(e: React.PointerEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    cancelAnimationFrame(s.current.anim);
    s.current.drag = true;
    wrap.current?.classList.add("drag");
  }
  function dragMove(e: React.PointerEvent<HTMLButtonElement>) {
    if (!s.current.drag) return;
    draw(aFromPointer(e));
  }
  function up() {
    if (!s.current.drag) return;
    s.current.drag = false;
    wrap.current?.classList.remove("drag");
    if (s.current.A >= 1.1) finish(); else animateTo(A0, 350);
  }
  function key(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); finish(); }
  }

  return (
    <div className={"ux-fp" + (done ? " done" : "")} ref={wrap}>
      <div className="ux-fp-in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} width={840} height={920} loading="lazy" draggable={false} />
        {done ? null : (
          <>
            <span className="ux-fp-paper" ref={paper} aria-hidden="true">
              <b>{ini}</b>
              <em>Drag the corner to unwrap</em>
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
            <button
              type="button"
              className="ux-fp-grab"
              aria-label={"Unwrap the photo of " + alt.split(",")[0]}
              onPointerDown={down}
              onPointerMove={dragMove}
              onPointerUp={up}
              onPointerCancel={up}
              onKeyDown={key}
            />
          </>
        )}
      </div>
    </div>
  );
}
