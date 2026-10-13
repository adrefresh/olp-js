import Breadcrumbs from "../shared/Breadcrumbs";
import SharedHeader from "../shared/SharedHeader";
import SharedFooter from "../shared/SharedFooter";
import ScriptRunner from "../shared/ScriptRunner";
import { SITE_SCRIPT } from "../shared/siteScript";
import ServiceCard from "./ServiceCard";
import type { Category } from "../shared/servicesData";

/** Shared layout for the three core-service category pages (HR Operations, Business Operations, IT Services). */
export default function CategoryPage({ cat }: { cat: Category }) {
  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: cat.title }]} />
      <section className={`internal-hero themed ${cat.theme}`}>
        <div className="wrap hero-content reveal">
          <span className="eyebrow orange">{cat.eyebrow}</span>
          <h1>{cat.title}</h1>
          <p>{cat.desc}</p>
          <div className="hero-meta">
            <span>{cat.items.length} services</span>
            <span>One connected partner</span>
            <span>Designed to scale</span>
          </div>
        </div>
        <div className="hero-corner">Scroll to explore ↓</div>
      </section>
      <section className="svc-section">
        <div className="wrap">
          <span className="eyebrow reveal">Inside {cat.title}</span>
          <h2 className="svc-h2 reveal">Choose where to start.</h2>
          <div className="svc-grid">
            {cat.items.map((s, i) => (
              <ServiceCard key={s.slug} href={s.href} icon={s.icon} num={String(i + 1).padStart(2, "0")} tag={s.tag} title={s.title} desc={s.desc} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
      <section className="service-cta">
        <div className="wrap">
          <span className="eyebrow">Need help choosing?</span>
          <h2>Tell us where the friction is.</h2>
          <a className="button" href="/contact-us">Let’s talk ↗</a>
        </div>
      </section>
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
