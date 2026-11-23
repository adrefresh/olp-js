"use client";
import { useEffect, useRef, useState } from "react";

import type { Testimonial } from "../../lib/testimonials";

/** Playful card carousel: the active card sits centre, its neighbours tilt behind it. Rotates on its own, pauses on hover. */
export default function Testimonials({ items: all }: { items: Testimonial[] }) {
  const ITEMS = all.filter((t) => t.quote.trim() && t.name.trim());
  const [cur, setCur] = useState(0);
  const [hold, setHold] = useState(false);
  const [ms, setMs] = useState(2000);
  const touch = useRef({ t: 0, paused: false });
  const n = ITEMS.length;
  useEffect(() => {
    const mq = window.matchMedia("(max-width:700px)");
    const f = () => setMs(mq.matches ? 5000 : 2000);
    f();
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);
  useEffect(() => {
    if (hold) return;
    const id = setInterval(() => {
      if (!document.hidden) setCur((c) => (c + 1) % n);
    }, ms);
    return () => clearInterval(id);
  }, [hold, n, ms]);
  // touch: pressing holds the card; a quick tap keeps it held (tap again to resume), a long press resumes on release
  const tDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    touch.current.t = Date.now();
    setHold(true);
  };
  const tUp = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") return;
    const k = touch.current;
    if (Date.now() - k.t > 450) { k.paused = false; setHold(false); }
    else { k.paused = !k.paused; setHold(k.paused); }
  };
  return (
    <div className="ux-tc" onPointerEnter={(e) => { if (e.pointerType === "mouse") setHold(true); }} onPointerLeave={(e) => { if (e.pointerType === "mouse") setHold(false); }} onPointerDown={tDown} onPointerUp={tUp} onPointerCancel={(e) => { if (e.pointerType !== "mouse") setHold(touch.current.paused); }}>
      <div className="ux-tc-stage" role="group" aria-roledescription="carousel" aria-label="Client testimonials">
        {ITEMS.map((t, i) => {
          const d = ((i - cur + n + 1) % n) - 1; // -1 prev, 0 active, 1 next
          return (
            <figure className={"ux-tc-card " + t.tone + " p" + d} key={i} aria-hidden={d !== 0} style={{ margin: 0 }}>
              {t.tag ? <span className="ux-tc-tag">{t.tag}</span> : null}
              <blockquote>{"\u201C" + t.quote + "\u201D"}</blockquote>
              <figcaption>
                <span className="ux-tc-who">
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </span>
                {t.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="ux-tc-logo" src={t.logo} alt={t.company} loading="lazy" />
                ) : (
                  <em className="ux-tc-mark">{t.company}</em>
                )}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
