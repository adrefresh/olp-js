"use client";

/** Hero scroll arrow: lands the next section exactly 64px from the top of the screen (just under the navbar). */
export default function HeroArrow() {
  const go = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById("who-we-are");
    if (!el) return;
    e.preventDefault();
    const top = () => Math.round(el.getBoundingClientRect().top + window.scrollY - 64);
    window.scrollTo({ top: top(), behavior: "smooth" });
    // layout can settle while scrolling (images, reveal effects), so correct once at the end
    window.setTimeout(() => {
      const d = top() - window.scrollY;
      if (Math.abs(d) > 2) window.scrollTo({ top: top(), behavior: "smooth" });
    }, 900);
  };
  return (
    <a className="hero-down" href="#who-we-are" aria-label="Scroll to the next section" data-cursor="click" onClick={go}>
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14" />
        <path d="M6 13l6 6 6-6" />
      </svg>
    </a>
  );
}
