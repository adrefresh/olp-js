"use client";
import { useEffect } from "react";

/** Google Tag Manager container. It loads only after the visitor accepts cookies ("Accept all");
 *  "Essential only" keeps it off. Consent Mode defaults to denied (see app/layout.tsx). */
export const GTM_ID = "GTM-NS26TN3G";
export const CONSENT_KEY = "opslogic-cookie-consent";
export const CONSENT_EVENT = "opslogic-consent";

type Win = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };

function load() {
  const w = window as Win;
  if (document.getElementById("gtm-script")) return;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  w.gtag?.("consent", "update", { ad_storage: "granted", analytics_storage: "granted", ad_user_data: "granted", ad_personalization: "granted" });
  const s = document.createElement("script");
  s.id = "gtm-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

/** Same switch as the deploy workflow: GTM is only included when the build sets NEXT_PUBLIC_ENABLE_GTM=true. */
const ENABLED = process.env.NEXT_PUBLIC_ENABLE_GTM === "true";

export default function GoogleTagManager() {
  useEffect(() => {
    if (!ENABLED) return;
    const check = () => {
      let v: string | null = null;
      try { v = localStorage.getItem(CONSENT_KEY); } catch { /* storage blocked */ }
      if (v === "all") load();
    };
    check();
    window.addEventListener(CONSENT_EVENT, check);
    return () => window.removeEventListener(CONSENT_EVENT, check);
  }, []);
  return null;
}
