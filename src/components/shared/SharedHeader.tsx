type NavKey = "about-us" | "services" | "careers" | "success-stories" | "";

const LINKS: { key: NavKey; href: string; label: string }[] = [
  { key: "about-us", href: "/about-us", label: "About" },
  { key: "success-stories", href: "/success-stories", label: "Stories" },
  { key: "services", href: "/services", label: "Services" },
  { key: "careers", href: "/careers", label: "Careers" },
];

/**
 * Note: the original site's `site.js` replaces this header's contents on
 * mount (same markup, same links) to keep every subpage's nav in sync from
 * one shared script. This component is that same static markup, rendered
 * as real JSX instead of a duplicated HTML string per page.
 */
export default function SharedHeader({ active }: { active: NavKey }) {
  return (
  <header className="nav">
    <div className="navin">
      <a className="brand" href="/">
        <span className="mark">
          OL
        </span>
        OpsLogic
      </a>
      <nav className="links">
        {LINKS.map((link) => (
        <a
                key={link.key}
                className={active === link.key ? "active" : undefined}
                href={link.href}
              >
          {link.label}
        </a>
        ))}
      </nav>
      <a className="button" href="/contact-us">
        Let&apos;s talk ↗
      </a>
    </div>
  </header>

  );
}
