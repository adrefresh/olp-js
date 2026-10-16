"use client";
import { useEffect, useRef } from "react";

/**
 * Custom cursor, shown across the whole site (native cursor is kept inside form fields). White + mix-blend-mode:difference (see app/site.css) inverts whatever is
 * underneath, so it stays visible on navy, blue, orange and light backgrounds alike.
 */
export default function SiteCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    const d = dot.current, r = ring.current;
    if (!d || !r) return;
    let inHero = true;
    let mx = 0, my = 0, rx = 0, ry = 0, raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      d.style.opacity = r.style.opacity = inHero ? "1" : "0";
      d.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    };
    const over = (e: MouseEvent) => {
      const t = e.target as Element | null;
      inHero = !t?.closest("input,textarea,select");
      document.body.classList.toggle("has-site-cursor", inHero);
      d.style.opacity = r.style.opacity = inHero ? "1" : "0";
      r.classList.toggle("big", !!t?.closest("a,button,summary,input,select,textarea,[role=tab],[data-cursor]"));
    };
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      r.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const leave = () => { d.style.opacity = r.style.opacity = "0"; };
    document.documentElement.addEventListener("mouseleave", leave);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-site-cursor");
    };
  }, []);

  return (
    <>
      <div ref={dot} className="site-cur-dot" aria-hidden="true" />
      <div ref={ring} className="site-cur-ring" aria-hidden="true" />
    </>
  );
}
