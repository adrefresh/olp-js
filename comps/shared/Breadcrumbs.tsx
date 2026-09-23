interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
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
    <nav
      aria-label="Breadcrumb"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: ".4rem",
        padding: "1.2rem 0",
        fontFamily: "'Manrope', monospace",
        fontSize: ".76rem",
        color: "var(--muted)",
      }}
    >
      {all.map((item, i) => (
        <span key={item.label} style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
          {item.href ? (
            <a href={item.href} style={{ color: "var(--muted)" }}>
              {item.label}
            </a>
          ) : (
            <span style={{ color: "var(--ink)", fontWeight: 700 }}>{item.label}</span>
          )}
          {i < all.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </nav>
  );
}
