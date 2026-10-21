"use client";
import { useEffect } from "react";

/** Global motion helper: reveals .ux-r / .ux-steps on scroll and drives the card cursor spotlight. */
export default function UxMotion() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.01, rootMargin: "0px 0px -8% 0px" }
    );
    const scan = () => document.querySelectorAll(".ux-r:not(.in),.ux-steps:not(.in),.ux-vsteps:not(.in),.ux-hire:not(.in)").forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    const move = (ev: PointerEvent) => {
      const t = (ev.target as HTMLElement | null)?.closest?.(".ux-card") as HTMLElement | null;
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", ev.clientX - r.left + "px");
      t.style.setProperty("--my", ev.clientY - r.top + "px");
    };
    document.addEventListener("pointermove", move, { passive: true });
    const bar = document.createElement("div");
    bar.className = "ux-prog";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    const prog = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`;
    };
    prog();
    window.addEventListener("scroll", prog, { passive: true });
    return () => { io.disconnect(); mo.disconnect(); document.removeEventListener("pointermove", move); window.removeEventListener("scroll", prog); bar.remove(); };
  }, []);
  return null;
}
