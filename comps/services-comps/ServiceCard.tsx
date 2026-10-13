export interface CardProps {
  href: string; icon: string; num: string; tag: string; title: string; desc?: string; chips?: string[]; delay?: number;
}

/** Card used for core services (overview) and sub-services (category pages). Styled in app/services/category.css. */
export default function ServiceCard({ href, icon, num, tag, title, desc, chips, delay = 0 }: CardProps) {
  return (
    <a className="svc-card reveal" href={href} style={{ ["--d" as string]: `${delay}s` }}>
      <span className="svc-top">
        <span className="svc-ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon} /></svg></span>
        <span className="svc-num">{num}</span>
      </span>
      <small className="svc-tag">{tag}</small>
      <h3>{title}</h3>
      {desc && <p>{desc}</p>}
      {chips && (
        <ul className="svc-chips">
          {chips.map((c) => (<li key={c}>{c}</li>))}
        </ul>
      )}
      <span className="svc-go">Explore <i aria-hidden="true">→</i></span>
    </a>
  );
}
