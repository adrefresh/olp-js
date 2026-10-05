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
      className="absolute top-[110px] left-0 right-0 z-[5] flex flex-wrap gap-[.4rem] px-[5vw] py-0 [font-family:'Jakarta',sans-serif] text-base uppercase tracking-[.04em] text-white/75"
    >
      {all.map((item, i) => (
        <span key={item.label} className="flex items-center gap-[.4rem]">
          {item.href ? (
            <a href={item.href} className="text-white/70">
              {item.label}
            </a>
          ) : (
            <span className="text-white font-bold">{item.label}</span>
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
