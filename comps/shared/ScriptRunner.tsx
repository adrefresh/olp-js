"use client";

import { useEffect, useRef } from "react";

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
