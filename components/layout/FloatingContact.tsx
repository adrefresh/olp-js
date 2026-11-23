"use client";
import { useEffect, useState } from "react";

/** Floating back-to-top button, bottom right. Appears after the visitor scrolls down. */
export default function FloatingContact() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      type="button"
      className={"fab" + (show ? " show" : "")}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
      <span>Back to top</span>
    </button>
  );
}
