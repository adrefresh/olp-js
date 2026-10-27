"use client";
import { useState, useSyncExternalStore } from "react";

const KEY = "opslogic-cookie-consent";
const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
const noop = () => () => {};

/** Cookie notice shown until the visitor chooses. The choice is remembered in localStorage. */
export default function CookieBanner() {
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  const [done, setDone] = useState(false);
  if (!mounted || done || read()) return null;
  const choose = (v: "all" | "essential") => {
    try { localStorage.setItem(KEY, v); } catch { /* storage blocked: the notice just won't be remembered */ }
    window.dispatchEvent(new Event("opslogic-consent"));
    setDone(true);
  };
  return (
    <div className="ck" role="dialog" aria-labelledby="ck-t" aria-describedby="ck-d">
      <div className="ck-top">
        <span className="ck-ico" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.2A9 9 0 1 1 11.8 3a4.5 4.5 0 0 0 5 5 4.5 4.5 0 0 0 4.2 4.2z" /><path d="M8.5 11.5h.01M12 16h.01M15.5 13h.01M9 15.5h.01" /></svg>
        </span>
        <h2 id="ck-t">Cookies, kept simple.</h2>
      </div>
      <p id="ck-d">
        We use a few cookies to keep the site working and to see what&apos;s useful. Nothing creepy. Details in our <a href="/privacy-policy">Privacy Policy</a>.
      </p>
      <div className="ck-btns">
        <button type="button" className="ck-b ck-no" onClick={() => choose("essential")}>Decline</button>
        <button type="button" className="ck-b ck-yes" onClick={() => choose("all")}>Accept all</button>
      </div>
    </div>
  );
}
