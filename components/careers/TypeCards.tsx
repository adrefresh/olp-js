"use client";
import { useEffect, useState } from "react";

const CARDS: [string, string][] = [
  ["Careful", "gets it right"],
  ["Curious", "asks why"],
  ["Good with details", "spots the gap"],
];

/** Three cards whose text types itself out one after another, holds, then starts over. Static layout, no moving elements. */
export default function TypeCards() {
  // ticks advance one character at a time across all text, then hold
  const total = CARDS.reduce((n, [a, b]) => n + a.length + b.length, 0);
  const [tick, setTick] = useState(-1);
  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t = still ? total + 99 : 0;
    const id = setInterval(() => {
      if (still) {
        setTick(t);
        clearInterval(id);
        return;
      }
      t += 1;
      if (t > total + 50) t = 0; // ~3s hold at the end, then restart
      setTick(t);
    }, 65);
    return () => clearInterval(id);
  }, [total]);

  // characters typed so far in each field, in reading order (title, then tag, card by card)
  const fields = CARDS.flat();
  const typed = fields.map((f, k) => {
    const before = fields.slice(0, k).reduce((n, x) => n + x.length, 0);
    return Math.min(Math.max(tick - before, 0), f.length);
  });
  const out = CARDS.map((_, i) => [fields[i * 2].slice(0, typed[i * 2]), fields[i * 2 + 1].slice(0, typed[i * 2 + 1])]);
  // caret sits on the first field not finished yet
  const activeField = fields.findIndex((f, k) => typed[k] < f.length);
  const active = activeField < 0 ? -1 : Math.floor(activeField / 2);
  const field = activeField < 0 ? 0 : activeField % 2;
  return (
    <div className="ux-ty ux-pat" aria-hidden="true">
      {out.map(([a, b], i) => (
        <div className={"ux-tyc c" + (i + 1)} key={i}>
          <b>
            {a}
            {active === i && field === 0 ? <i className="caret" /> : null}
          </b>
          <span>
            {b}
            {active === i && field === 1 ? <i className="caret" /> : null}
          </span>
        </div>
      ))}
    </div>
  );
}
