/** Social icons for the "Get in touch directly" card. Each lifts and fills with its brand colour on hover. */
export default function SocialLinks() {
  return (
    <div className="ux-soc" aria-label="Social media">
      <a className="ux-soc-linkedin" href="https://www.linkedin.com/company/opslogic-team/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.84v1.54h.06c.53-.96 1.84-1.97 3.78-1.97 4.04 0 4.82 2.55 4.82 5.87V21h-4v-5.07c0-1.21-.02-2.77-1.74-2.77-1.74 0-2 1.31-2 2.68V21h-4V9.75Z" /></svg></a>
      <a className="ux-soc-instagram" href="https://www.instagram.com/opslogicteam/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" /></svg></a>
      <a className="ux-soc-x" href="https://x.com/opslogicteam" target="_blank" rel="noopener noreferrer" aria-label="X"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.57l11.1 14.43Z" /></svg></a>
      <a className="ux-soc-facebook" href="https://www.facebook.com/OpsLogicPrivateLimited" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.5-3.2h-3.2V7.9c0-.9.4-1.7 1.8-1.7h1.5V3.4c-.3 0-1.3-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.2v2.4H7.6V13h2.8v8h3.1Z" /></svg></a>
    </div>
  );
}
