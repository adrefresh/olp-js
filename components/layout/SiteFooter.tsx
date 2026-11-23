/** Site-wide footer: big call-to-action statement + contact + company links. Styles: app/site.css (.fx-*). */
export default function SiteFooter({ showEmail }: { showEmail?: boolean } = {}) {
  void showEmail;
  return (
    <footer className="fx" id="site-footer">
      <div className="fx-glow" aria-hidden="true" />
      <div className="fx-wrap">
        <div className="fx-top">
          <div>
            <h2 className="fx-big" aria-label="Let's make business move.">
              <span className="fx-line">Let&apos;s make </span>
              <span className="fx-line">business <span className="fx-aq">move<span className="fx-o">.</span></span></span>
            </h2>
            <p className="fx-sub">Book a free consultation. No pitch deck, no pressure. Just a conversation about what&apos;s slowing you down.</p>
          </div>
          <a className="fx-badge" href="/contact/" aria-label="Talk to us">
            <svg className="fx-ring" viewBox="0 0 160 160" aria-hidden="true">
              <defs><path id="fxcirc" d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0" /></defs>
              <text fontSize="12.5" fontWeight="800" fill="currentColor"><textPath href="#fxcirc" textLength="384" lengthAdjust="spacing">TALK TO US • BOOK A FREE CALL • </textPath></text>
            </svg>
            <span className="fx-core">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M8 7h9v9" /></svg>
            </span>
          </a>
        </div>

        <div className="fx-mid">
          <div className="fx-contact">
            <div className="fx-k">Contact</div>
            <a className="fx-mail" href="mailto:hello@opslogic.team">hello@opslogic.team
              <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M8 7h9v9" /></svg>
            </a>
            <a className="fx-tel" href="tel:+914035009631">+91 40 3500 9631</a>
            <div className="fx-soc" aria-label="Social media">
              <a href="https://www.linkedin.com/company/opslogic-team/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.84v1.54h.06c.53-.96 1.84-1.97 3.78-1.97 4.04 0 4.82 2.55 4.82 5.87V21h-4v-5.07c0-1.21-.02-2.77-1.74-2.77-1.74 0-2 1.31-2 2.68V21h-4V9.75Z" /></svg></a>
              <a href="https://www.instagram.com/opslogicteam/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" /></svg></a>
              <a href="https://x.com/opslogicteam" target="_blank" rel="noopener noreferrer" aria-label="X"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.57l11.1 14.43Z" /></svg></a>
              <a href="https://www.facebook.com/OpsLogicPrivateLimited" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.5-3.2h-3.2V7.9c0-.9.4-1.7 1.8-1.7h1.5V3.4c-.3 0-1.3-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.2v2.4H7.6V13h2.8v8h3.1Z" /></svg></a>
            </div>
          </div>
          <nav className="fx-col" aria-label="Services">
            <div className="fx-k">Services</div>
            <a className="fx-a" href="/services/business-operations/"><span>Business Operations</span></a>
            <a className="fx-a" href="/services/hr-payroll/"><span>HR &amp; Payroll</span></a>
            <a className="fx-a" href="/services/it-services/"><span>IT Services</span></a>
          </nav>
          <nav className="fx-col fx-company" aria-label="Company">
            <div className="fx-k">Company</div>
            <a className="fx-a" href="/"><span>Home</span></a>
            <a className="fx-a" href="/about/"><span>About</span></a>
            <a className="fx-a" href="/careers/"><span>Careers</span></a>
            <a className="fx-a" href="/contact/"><span>Contact</span></a>
          </nav>
        </div>

        <div className="fx-bot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/opslogic-logo-ondark.png" alt="OpsLogic" />
          <span>© 2026 OpsLogic Private Limited. All rights reserved.</span>
          <span className="fx-links"><a href="/privacy-policy/">Privacy Policy</a></span>
        </div>
      </div>
    </footer>
  );
}
