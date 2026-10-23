"use client";
import { useEffect, useState } from "react";

/** Live Hyderabad time (IST) for the footer. Renders nothing until mounted so the static export stays stable. */
export default function FooterClock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => setT(new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: true }).replace(" ", " "));
    f();
    const id = setInterval(f, 30000);
    return () => clearInterval(id);
  }, []);
  return <>{t ? <> · {t} IST</> : null}</>;
}
