"use client";

import { useEffect, useRef } from "react";

/**
 * Injects and executes a page's original (unmodified) JavaScript once,
 * after all of that page's section components have mounted.
 *
 * The legacy scripts attach `DOMContentLoaded` / `window load` listeners.
 * Because this runs from a React effect (after the browser's real
 * `DOMContentLoaded`/`load` events have already fired), synthetic versions
 * of those events are dispatched — but only when the real one has already
 * passed — so every listener still fires exactly once, at the right time,
 * with zero changes to the original script content.
 */
export default function ScriptRunner({ script }: { script: string }) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const scriptEl = document.createElement("script");
    scriptEl.textContent = script;
    document.body.appendChild(scriptEl);

    if (document.readyState !== "loading") {
      document.dispatchEvent(
        new Event("DOMContentLoaded", { bubbles: true, cancelable: true })
      );
    }
    if (document.readyState === "complete") {
      window.dispatchEvent(new Event("load"));
    }
  }, [script]);

  return null;
}
