"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SectionHead from "../ui/SectionHead";

const ITEMS = [
  {
    word: "Startups",
    lead: "Growing without the operational burden?",
    text: "Business setup, compliance and accounting support to keep your business running smoothly.",
    tags: ["Business Setup", "Compliance", "Accounting"],
    href: "/services/business-operations/",
  },
  {
    word: "Scale-ups",
    lead: "Building a team without building an HR department?",
    text: "From hiring to payroll, we help you manage your people and processes with ease.",
    tags: ["Hire Talent", "Payroll", "EOR"],
    href: "/services/hr-payroll/",
  },
  {
    word: "Enterprises",
    lead: "Need reliable IT without the complexity?",
    text: "From managed IT support to web development, we keep your business connected and productive.",
    tags: ["IT Support", "Web Development", "Integrations"],
    href: "/services/it-services/",
  },
];

const DELAY = 5000;

export default function WhoWeWorkWith() {
  const [cur, setCur] = useState(0);
  const [tick, setTick] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (paused.current) setTick((n) => n + 1);
      else setCur((c) => (c + 1) % ITEMS.length);
    }, DELAY);
    return () => clearTimeout(t);
  }, [cur, tick]);

  const pick = (i: number) => {
    setCur(i);
    setTick((n) => n + 1);
  };

  return (
    <section className="ux-sec t1 ux-ww" id="who-we-work-with">
      <div className="ux-wrap">
        <SectionHead eyebrow="Who we work with" title="Built for lean, growing teams." />
        <div
          className="ux-ww-grid ux-r"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div className="ux-ww-list">
            {ITEMS.map((it, i) => (
              <button
                type="button"
                key={it.word}
                className={"ux-ww-it" + (i === cur ? " on" : "")}
                onMouseEnter={() => pick(i)}
                onFocus={() => pick(i)}
                onClick={() => pick(i)}
                aria-pressed={i === cur}
              >
                <span className="ux-ww-n">0{i + 1}</span>
                <span className="ux-ww-w">{it.word}</span>
                <span className="ux-ww-ar" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
          <div className="ux-ww-spot">
            <span className={"ux-ww-blob s" + cur} aria-hidden="true" />
            {ITEMS.map((it, i) => (
              <div className={"ux-ww-pane" + (i === cur ? " on" : "")} key={it.word} aria-hidden={i !== cur}>
                <span className="ux-ww-k">0{i + 1} / 03 · {it.word}</span>
                <h3>{it.lead}</h3>
                <p>{it.text}</p>
                <span className="ux-ww-tags">
                  {it.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </span>
                <Link href={it.href} className="ux-ww-go" tabIndex={i === cur ? 0 : -1}>
                  Explore services <span aria-hidden="true">↗</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
