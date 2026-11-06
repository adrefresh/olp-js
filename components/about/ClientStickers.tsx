"use client";
import { useEffect, useRef } from "react";

type Stk = { id: string; name: string; src: string; shape: "card" | "round" | "wide" | "strip"; w: number; x: number; y: number; r: number; peel?: boolean; tape?: boolean; pad?: number };

/* positions are % of the stage; r = resting tilt in degrees */
const STICKERS: Stk[] = [
  { id: "chemtrade", name: "Chemtrade", src: "/clients/chemtrade.png", shape: "strip", w: 31.5, x: 0.4, y: 0.7, r: -4, tape: true },
  { id: "adani", name: "Adani", src: "/clients/adani.png", shape: "strip", w: 21.0, x: 38.5, y: 2.8, r: 3 },
  { id: "ambuja", name: "Ambuja Cement", src: "/clients/ambuja-cement.png", shape: "round", w: 23.1, x: 65.5, y: -0.6, r: 4 },
  { id: "pioneer", name: "Pioneer Aluminium Industries", src: "/clients/pioneer.svg", shape: "strip", w: 33.6, x: 0.2, y: 17.7, r: 3 },
  { id: "om", name: "OM Hydropower", src: "/clients/om-hydropower.png", shape: "wide", w: 26.5, x: 37.8, y: 17, r: -4 },
  { id: "vysoft", name: "Vysoft Solutions", src: "/clients/vysoft.png", shape: "strip", w: 24.2, x: 65.4, y: 25.8, r: 5 },
  { id: "audience", name: "Audience Group", src: "/clients/audience-group.png", shape: "card", w: 21.0, x: 0.5, y: 37.5, r: -6 },
  { id: "dfw", name: "DFW Consulting", src: "/clients/dfw.png", shape: "strip", w: 26.2, x: 29.4, y: 37.8, r: 3 },
  { id: "pr", name: "PR Group", src: "/clients/pr-group.png", shape: "card", w: 17.5, x: 70.5, y: 38.5, r: -4 },
  { id: "purple", name: "Client logo", src: "/clients/purple-a.png", shape: "card", w: 18.9, x: 30.6, y: 53.5, r: 5 },
  { id: "rise", name: "RiseIn Cloud", src: "/clients/riseincloud.png", shape: "card", w: 19.9, x: 0.6, y: 60.5, r: -4, peel: true },
  { id: "orbit", name: "Orbit Flight Training Center", src: "/clients/orbit.png", shape: "wide", w: 29.4, x: 57.3, y: 58.6, r: -5 },
  { id: "pennar", name: "Pennar Industries", src: "/clients/pennar.png", shape: "strip", w: 35.7, x: 0.1, y: 83.7, r: 3 },
];

/** "Brands that bet on us": client logos as die-cut stickers on grid paper. Drag to toss them around, hover to wobble. */
export default function ClientStickers() {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = root.current, st = stage.current;
    if (!host || !st) return;
    const io = new IntersectionObserver((en) => { if (en.some((e) => e.isIntersecting)) { host.classList.add("in"); io.disconnect(); } }, { threshold: 0.25 });
    io.observe(host);

    type S = { x: number; y: number; vx: number; vy: number; raf: number };
    const state = new Map<HTMLElement, S>();
    st.querySelectorAll<HTMLElement>(".cs-stk").forEach((e) => state.set(e, { x: 0, y: 0, vx: 0, vy: 0, raf: 0 }));
    let z = 10, moved = false;
    let drag: { el: HTMLElement; px: number; py: number; sx: number; sy: number; t: number; lx: number; ly: number } | null = null;

    const put = (el: HTMLElement, s: S) => { el.style.setProperty("--x", s.x.toFixed(1) + "px"); el.style.setProperty("--y", s.y.toFixed(1) + "px"); };
    const tilt = (el: HTMLElement, v: number) => el.style.setProperty("--t", Math.max(-14, Math.min(14, v * 1.1)).toFixed(1) + "deg");
    /** how far the sticker can travel before leaving the stage */
    const limits = (el: HTMLElement, s: S) => {
      const a = st.getBoundingClientRect(), r = el.getBoundingClientRect();
      const bl = r.left - s.x, bt = r.top - s.y;
      return { minX: a.left - bl, maxX: a.right - (bl + r.width), minY: a.top - bt, maxY: a.bottom - (bt + r.height) };
    };

    const glide = (el: HTMLElement, s: S) => {
      cancelAnimationFrame(s.raf);
      const step = () => {
        const L = limits(el, s);
        s.x += s.vx; s.y += s.vy;
        if (s.x < L.minX) { s.x = L.minX; s.vx *= -0.5; } else if (s.x > L.maxX) { s.x = L.maxX; s.vx *= -0.5; }
        if (s.y < L.minY) { s.y = L.minY; s.vy *= -0.5; } else if (s.y > L.maxY) { s.y = L.maxY; s.vy *= -0.5; }
        s.vx *= 0.92; s.vy *= 0.92;
        put(el, s); tilt(el, s.vx);
        if (Math.abs(s.vx) > 0.3 || Math.abs(s.vy) > 0.3) s.raf = requestAnimationFrame(step);
        else tilt(el, 0);
      };
      s.raf = requestAnimationFrame(step);
    };

    const down = (e: PointerEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>(".cs-stk");
      if (!el || !state.has(el)) return;
      const s = state.get(el)!;
      cancelAnimationFrame(s.raf);
      el.setPointerCapture(e.pointerId);
      el.classList.add("drag");
      el.style.zIndex = String(++z);
      moved = false;
      drag = { el, px: e.clientX, py: e.clientY, sx: s.x, sy: s.y, t: performance.now(), lx: e.clientX, ly: e.clientY };
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const { el } = drag, s = state.get(el)!;
      const L = limits(el, s);
      s.x = Math.max(L.minX, Math.min(L.maxX, drag.sx + e.clientX - drag.px));
      s.y = Math.max(L.minY, Math.min(L.maxY, drag.sy + e.clientY - drag.py));
      const now = performance.now(), dt = Math.max(8, now - drag.t);
      s.vx = s.vx * 0.5 + ((e.clientX - drag.lx) / dt) * 16 * 0.5;
      s.vy = s.vy * 0.5 + ((e.clientY - drag.ly) / dt) * 16 * 0.5;
      drag.t = now; drag.lx = e.clientX; drag.ly = e.clientY;
      if (Math.abs(e.clientX - drag.px) + Math.abs(e.clientY - drag.py) > 5) moved = true;
      put(el, s); tilt(el, s.vx);
    };
    const up = () => {
      if (!drag) return;
      const { el } = drag, s = state.get(el)!;
      el.classList.remove("drag");
      drag = null;
      glide(el, s);
    };
    // a drag that ends on the "Your logo next?" link must not follow the link
    const click = (e: MouseEvent) => { if (moved) { e.preventDefault(); moved = false; } };

    // hovering starts one wobble on the inner sticker; it cannot retrigger until that wobble has ended
    const over = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const el = (e.target as HTMLElement).closest<HTMLElement>(".cs-stk");
      if (el && !drag && !el.classList.contains("wob")) el.classList.add("wob");
    };
    const wobEnd = (e: AnimationEvent) => { if (e.animationName === "csWob") (e.target as HTMLElement).closest(".cs-stk")?.classList.remove("wob"); };
    st.addEventListener("pointerenter", over, true);
    st.addEventListener("animationend", wobEnd);
    st.addEventListener("pointerdown", down);
    st.addEventListener("pointermove", move);
    st.addEventListener("pointerup", up);
    st.addEventListener("pointercancel", up);
    st.addEventListener("click", click, true);
    return () => {
      io.disconnect();
      state.forEach((s) => cancelAnimationFrame(s.raf));
      st.removeEventListener("pointerenter", over, true);
      st.removeEventListener("animationend", wobEnd);
      st.removeEventListener("pointerdown", down);
      st.removeEventListener("pointermove", move);
      st.removeEventListener("pointerup", up);
      st.removeEventListener("pointercancel", up);
      st.removeEventListener("click", click, true);
    };
  }, []);

  const style = (k: number, w: number, x: number, y: number, r: number) =>
    ({ "--k": k, "--w": w + "%", "--l": x + "%", "--tp": y + "%", "--r": r + "deg" }) as React.CSSProperties;

  return (
    <section className="ux-sec t0 cs-sec" id="clients" aria-labelledby="cs-t">
      <div className="ux-wrap">
        <div className="cs" ref={root}>
          <div className="cs-copy">
            <span className="ux-eyebrow">Trusted by</span>
            <h2 id="cs-t">
              Clients
              <br />
              that <em>bet</em>
              <br />
              on us<i>.</i>
            </h2>
            <span className="cs-rule" aria-hidden="true" />
            <p className="cs-note" aria-hidden="true">
              <span>real clients, real ops</span>
              <svg viewBox="0 0 220 80" width="220" height="80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path className="cs-arrow" d="M6 62 C 60 74, 130 70, 196 34" />
                <path className="cs-head" d="M170 30 L198 32 L190 58" />
              </svg>
            </p>
          </div>

          <div className="cs-stage" ref={stage} role="group" aria-label="Logos of companies we work with. Drag them around.">
            <svg className="cs-spark a" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 0 C21 12 28 19 40 20 C28 21 21 28 20 40 C19 28 12 21 0 20 C12 19 19 12 20 0Z" fill="currentColor" /></svg>
            <svg className="cs-spark b" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 0 C21 12 28 19 40 20 C28 21 21 28 20 40 C19 28 12 21 0 20 C12 19 19 12 20 0Z" fill="currentColor" /></svg>

            {STICKERS.map((s, i) => (
              <div className={"cs-stk " + s.shape + (s.peel ? " peel" : "") + (s.tape ? " tape" : "")} style={style(i, s.w, s.x, s.y, s.r)} key={s.id}>
                <span className="cs-in">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={s.name} draggable={false} loading="lazy" />
                </span>
              </div>
            ))}
            <a className="cs-stk cta" href="/contact/" style={style(STICKERS.length, 20, 67, 77, 8)} draggable={false}>
              <span className="cs-in">Your logo next?</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
