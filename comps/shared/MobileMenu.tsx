"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { CATEGORIES } from "./servicesData";

type NavKey = "home" | "about-us" | "careers" | "contact-us" | "services";

const LINKS: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "services", label: "Services", href: "/services" },
  { key: "about-us", label: "About Us", href: "/about-us" },
  { key: "careers", label: "Careers", href: "/careers" },
  { key: "contact-us", label: "Contact", href: "/contact-us" },
];

/** Hamburger + right-side drawer (70% of the screen) shown below 850px. Rendered in a portal so
 *  it is never trapped inside the blurred navbar. */
export default function MobileMenu({ active }: { active: NavKey }) {
  const [open, setOpen] = useState(false);
  const [svc, setSvc] = useState(false);
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
            <img src="/logo.png" alt="OpsLogic" width="130" height="35" />
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
                  <a href="/services" onClick={close} className="md-all">All services <b aria-hidden="true">→</b></a>
                  {CATEGORIES.map((c) => (
                    <div className="md-cat" key={c.slug}>
                      <a href={c.href} onClick={close} className="md-cat-title">{c.title}</a>
                      {c.items.map((s) => (<a href={s.href} key={s.slug} onClick={close}>{s.title}</a>))}
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
          <a href="/contact-us" onClick={close} className="md-cta">Let&apos;s talk <span aria-hidden="true">↗</span></a>
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
