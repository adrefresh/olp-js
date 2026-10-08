"use client";
import { useEffect, useRef } from "react";

/** Custom cursor that flips colour to stay visible on light, dark and orange backgrounds. */
function bgLuma(el: Element | null): number {
  while (el) {
    const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g);
    if (m && (m.length < 4 || parseFloat(m[3]) > 0.5)) {
      const [r, g, b] = m.map(Number);
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }
    el = el.parentElement;
  }
  return 1;
}

export default function EorCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    const d = dot.current, r = ring.current;
    if (!d || !r) return;
    document.body.classList.add("eor-nocursor");
    let mx = 0, my = 0, rx = 0, ry = 0, raf = 0, last = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      d.style.opacity = r.style.opacity = "1";
      d.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      const now = performance.now();
      if (now - last > 60) {
        last = now;
        const el = document.elementFromPoint(mx, my);
        const luma = bgLuma(el);
        const tone = luma < 0.45 ? "dark" : luma < 0.72 && el?.closest(".eor-cta,.eor-btn.primary") ? "accent" : "light";
        d.dataset.tone = r.dataset.tone = tone;
        r.classList.toggle("big", !!el?.closest("a,button,summary,[role=tab]"));
      }
    };
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      r.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.body.classList.remove("eor-nocursor");
    };
  }, []);

  return (<><div ref={dot} className="eor-cur-dot" aria-hidden="true" /><div ref={ring} className="eor-cur-ring" aria-hidden="true" /></>);
}
