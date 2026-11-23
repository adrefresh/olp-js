"use client";

/** Opens the mail app on click without showing a mailto: address in the browser status bar on hover. */
export default function MailButton({ user, domain, subject, children }: { user: string; domain: string; subject?: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="ux-btn d"
      onClick={() => {
        window.location.href = `mailto:${user}@${domain}${subject ? "?subject=" + encodeURIComponent(subject) : ""}`;
      }}
    >
      {children}
    </button>
  );
}
