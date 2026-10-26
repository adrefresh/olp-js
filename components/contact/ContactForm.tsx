"use client";
import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

/** Posts the enquiry as JSON to /contactform.php (public/contactform.php), which mails it to the team. */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const f = e.currentTarget;
    const v = (n: string) => ((f.elements.namedItem(n) as HTMLInputElement | null)?.value ?? "").trim();
    const topic = v("topic");
    const payload = {
      name: v("name"),
      email: v("email"),
      phone: v("phone"),
      company: v("company"),
      subject: `${topic} enquiry`,
      message: v("message"),
      website_url: v("website_url"), // honeypot, left empty by real visitors
    };
    setStatus("sending");
    setError("");
    try {
      const [res] = await Promise.all([
        fetch("/contactform.php", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }),
        new Promise((r) => setTimeout(r, 1200)), // keeps "Processing" on screen long enough to read
      ]);
      const out = await res.json().catch(() => ({}));
      if (!res.ok || out.error) throw new Error(out.details?.[0] || "");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : "Something went wrong. Please try again, or email hello@opslogic.team.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div id="contact-form" className="ux-card ux-form ux-thanks ux-r" role="status">
        <span className="ux-thanks-ic" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        </span>
        <h3>Thank you!</h3>
        <p>We have received your message. Our team will reach out to you shortly.</p>
      </div>
    );
  }

  return (
    <form id="contact-form" className="ux-card ux-form ux-r" onSubmit={onSubmit}>
      <input required name="name" placeholder="Name" autoComplete="name" />
      <input required type="email" name="email" placeholder="Work email" autoComplete="email" />
      <input required type="tel" name="phone" placeholder="Phone number" autoComplete="tel" minLength={6} />
      <input name="company" placeholder="Company" autoComplete="organization" />
      <select name="topic" defaultValue="Business Operations" aria-label="What do you need?">
        <option>Business Operations</option>
        <option>HR &amp; Payroll</option>
        <option>IT Services</option>
        <option>Something else</option>
      </select>
      <textarea required name="message" rows={4} placeholder="A few words about what you need" />
      <input className="ux-hp" name="website_url" tabIndex={-1} autoComplete="off" aria-hidden="true" placeholder="Leave this empty" />
      <button className={"ux-btn o" + (status === "sending" ? " is-sending" : "")} type="submit" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <i className="ux-spin" aria-hidden="true" /> Processing…
          </>
        ) : (
          "Send message"
        )}
      </button>
      {status === "error" ? <p className="ux-form-err" role="alert">{error}</p> : null}
    </form>
  );
}
