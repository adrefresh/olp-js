import { CATEGORIES } from "../shared/servicesData";
import ServiceCard from "./ServiceCard";

export default function Statement() {
  return (
  <section className="svc-section">
    <div className="wrap">
      <span className="eyebrow reveal">The service map</span>
      <h2 className="svc-h2 reveal">Pick a lane. Then make it move.</h2>
      <div className="svc-grid">
        {CATEGORIES.map((c, i) => (
          <ServiceCard key={c.slug} href={c.href} icon={c.icon} num={String(i + 1).padStart(2, "0")} tag={c.tag} title={c.title} desc={c.blurb} chips={c.items.map((s) => s.title)} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
  );
}
