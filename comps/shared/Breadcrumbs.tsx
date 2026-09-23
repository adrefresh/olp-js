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
        position: "absolute",
        top: "110px",
        left: 0,
        right: 0,
        zIndex: 5,
        display: "flex",
        flexWrap: "wrap",
        gap: ".4rem",
        padding: "0 5vw",
        fontFamily: "'Museo', sans-serif",
        fontSize: "1rem",
        textTransform: "uppercase",
        letterSpacing: ".04em",
        color: "rgba(255,255,255,.75)",
      }}
    >
      {all.map((item, i) => (
        <span key={item.label} style={{ display: "flex", alignItems: "center", gap: ".4rem" }}>
          {item.href ? (
            <a href={item.href} style={{ color: "rgba(255,255,255,.7)" }}>
              {item.label}
            </a>
          ) : (
            <span style={{ color: "#fff", fontWeight: 700 }}>{item.label}</span>
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
