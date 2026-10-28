"use client";
import { useEffect, useState } from "react";

import type { Testimonial } from "../../lib/testimonials";

/** Playful card carousel: the active card sits centre, its neighbours tilt behind it. Rotates on its own, pauses on hover. */
export default function Testimonials({ items: ITEMS }: { items: Testimonial[] }) {
  const [cur, setCur] = useState(0);
  const [hold, setHold] = useState(false);
  const n = ITEMS.length;
  useEffect(() => {
    if (hold) return;
    const id = setInterval(() => {
      if (!document.hidden) setCur((c) => (c + 1) % n);
    }, 2000);
    return () => clearInterval(id);
  }, [hold, n]);
  return (
    <div className="ux-tc" onPointerEnter={(e) => setHold(e.pointerType === "mouse")} onPointerLeave={() => setHold(false)}>
      <div className="ux-tc-stage" role="group" aria-roledescription="carousel" aria-label="Client testimonials">
        {ITEMS.map((t, i) => {
          const d = ((i - cur + n + 1) % n) - 1; // -1 prev, 0 active, 1 next
          return (
            <figure className={"ux-tc-card " + t.tone + " p" + d} key={i} aria-hidden={d !== 0} style={{ margin: 0 }}>
              {t.tag ? <span className="ux-tc-tag">{t.tag}</span> : null}
              <blockquote>{"\u201C" + t.quote + "\u201D"}</blockquote>
              <figcaption>
                <i aria-hidden="true">{t.name.trim().charAt(0).toUpperCase()}</i>
                <span>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                  <em>{t.company}</em>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
