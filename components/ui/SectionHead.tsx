import type { ReactNode } from "react";

export default function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: string }) {
  return (
    <div className="ux-r">
      <span className="ux-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead ? <p className="ux-lead">{lead}</p> : null}
    </div>
  );
}
