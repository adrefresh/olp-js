interface Crumb {
  label: string;
  href?: string;
}

/** Vertical breadcrumb rail, shown at the left of every inner-page hero. Styled in app/site.css. */
export default function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://www.opslogic.team${item.href}` } : {}),
    })),
  };

  return (
    <nav className={`crumbs${tone === "light" ? " crumbs-light" : ""}`} aria-label="Breadcrumb">
      {all.map((item, i) => (
        <span className="crumb" key={`${item.label}-${i}`}>
          {item.href ? <a href={item.href}>{item.label}</a> : <b aria-current="page">{item.label}</b>}
          {i < all.length - 1 && <i aria-hidden="true" className="chev" />}
        </span>
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </nav>
  );
}
