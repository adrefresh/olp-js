"use client";
import { useState } from "react";

export interface Stage { title: string; blurb: string; items: string[]; icon: string }

export default function EorLifecycle({ stages }: { stages: Stage[] }) {
  const [active, setActive] = useState(0);
  const s = stages[active];
  return (
    <div className="eor-life">
      <div className="eor-life-tabs" role="tablist" aria-label="Employment lifecycle">
        {stages.map((st, i) => (
          <button key={st.title} role="tab" aria-selected={i === active} className={i === active ? "on" : ""} onClick={() => setActive(i)}>
            <span>{String(i + 1).padStart(2, "0")}</span>{st.title}
          </button>
        ))}
        <i className="eor-life-glide" style={{ ["--n" as string]: active }} />
      </div>
      <div className="eor-life-panel" key={active} role="tabpanel">
        <div className="eor-life-copy">
          <span className="eor-ico big"><svg viewBox="0 0 24 24"><path d={s.icon} /></svg></span>
          <h3>{s.title}</h3>
          <p>{s.blurb}</p>
        </div>
        <ul>
          {s.items.map((it, i) => (
            <li key={it} style={{ ["--d" as string]: `${i * 0.05}s` }}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
