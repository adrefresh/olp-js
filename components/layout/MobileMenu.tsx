"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { NavCategory } from "../../lib/nav";

type NavKey = "home" | "about" | "careers" | "contact" | "services" | "none";

const LINKS: { key: NavKey; label: string; href: string }[] = [
  { key: "services", label: "Services", href: "/services/" },
  { key: "about", label: "About", href: "/about/" },
  { key: "careers", label: "Careers", href: "/careers/" },
  { key: "contact", label: "Contact", href: "/contact/" },
];

/** Hamburger + right-side drawer (70% of the screen) shown below 850px. Rendered in a portal so
 *  it is never trapped inside the blurred navbar. */
export default function MobileMenu({ active, categories }: { active: NavKey; categories: NavCategory[] }) {
  const [open, setOpen] = useState(false);
  const [svc, setSvc] = useState(false);
  const [cat, setCat] = useState<string | null>(null);
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.documentElement.style.overflow = ""; };
  }, [open]);
  const close = () => setOpen(false);

  const drawer = (
    <div className={"md-root" + (open ? " open" : "")} aria-hidden={!open}>
      <div className="md-backdrop" onClick={close} />
      <aside className="md-drawer" role="dialog" aria-modal="true" aria-label="Site menu">
        <div className="md-head">
          <a href="/" onClick={close} aria-label="OpsLogic home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/opslogic-logo-color.png" alt="OpsLogic" width="130" height="35" />
          </a>
          <button type="button" className="md-close" aria-label="Close menu" onClick={close}>
            <span /><span />
          </button>
        </div>

        <nav className="md-nav">
          {LINKS.map((l, i) =>
            l.key === "services" ? (
              <div className={"md-item" + (svc ? " open" : "")} key={l.key} style={{ ["--i" as string]: i }}>
                <button type="button" className={"md-link" + (active === "services" ? " active" : "")} aria-expanded={svc} onClick={() => setSvc((s) => !s)}>
                  <em>0{i + 1}</em><span>{l.label}</span><i aria-hidden="true" />
                </button>
                <div className="md-sub"><div className="md-sub-in">
                  <a href="/services/" onClick={close} className="md-all">All services <b aria-hidden="true">→</b></a>
                  {categories.map((c) => (
                    <div className={"md-cat" + (cat === c.slug ? " open" : "")} key={c.slug}>
                      <button type="button" className="md-cat-btn" aria-expanded={cat === c.slug} onClick={() => setCat(cat === c.slug ? null : c.slug)}>
                        <span>{c.title}</span><i aria-hidden="true" />
                      </button>
                      <div className="md-cat-list"><div>
                        <a href={c.href} onClick={close} className="md-cat-all">All {c.title}</a>
                        {c.items.map((s) => (<a href={s.href} key={s.slug} onClick={close}>{s.title}</a>))}
                      </div></div>
                    </div>
                  ))}
                </div></div>
              </div>
            ) : (
              <div className="md-item" key={l.key} style={{ ["--i" as string]: i }}>
                <a href={l.href} onClick={close} className={"md-link" + (active === l.key ? " active" : "")}>
                  <em>0{i + 1}</em><span>{l.label}</span><b aria-hidden="true">↗</b>
                </a>
              </div>
            )
          )}
        </nav>

        <div className="md-foot">
          <a href="/contact/" onClick={close} className="md-cta">Let&apos;s talk <span aria-hidden="true">↗</span></a>
          <p>hello@opslogic.team<br />+91 40 3500 9631</p>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className={"m-burger" + (open ? " open" : "")}
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span /><span /><span />
      </button>
      {mounted ? createPortal(drawer, document.body) : null}
    </>
  );
}
