"use client";
import { useEffect, useState } from "react";

const ITEMS = [0, 1, 2].map((i) => ({ quote: "Client quote", who: "Name, role, company", tone: ["b", "o", "a"][i] }));

/** Playful card carousel: the active card sits centre, its neighbours tilt behind it. Auto-plays, pauses on hover. */
export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const [hold, setHold] = useState(false);
  const n = ITEMS.length;
  useEffect(() => {
    if (hold || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setCur((c) => (c + 1) % n), 5200);
    return () => clearInterval(id);
  }, [hold, n]);
  const go = (d: number) => setCur((c) => (c + d + n) % n);
  return (
    <div className="ux-tc" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
      <div className="ux-tc-stage" role="group" aria-roledescription="carousel" aria-label="Client testimonials">
        {ITEMS.map((t, i) => {
          const d = ((i - cur + n + 1) % n) - 1; // -1 prev, 0 active, 1 next
          return (
            <figure className={"ux-tc-card " + t.tone + " p" + d} key={i} aria-hidden={d !== 0} style={{ margin: 0 }}>
              <span className="ux-tc-q" aria-hidden="true">“</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption><i aria-hidden="true" />{t.who}</figcaption>
            </figure>
          );
        })}
      </div>
      <div className="ux-tc-nav">
        <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial">←</button>
        <div className="ux-tc-dots">
          {ITEMS.map((_, i) => (<button type="button" key={i} className={i === cur ? "on" : ""} onClick={() => setCur(i)} aria-label={"Show testimonial " + (i + 1)} />))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next testimonial">→</button>
      </div>
    </div>
  );
}
