import FooterClock from "./FooterClock";

/** Site-wide footer: big call-to-action statement + contact + company links. Styles: app/site.css (.fx-*). */
export default function SharedFooter({ showEmail }: { showEmail?: boolean } = {}) {
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
          <a className="fx-badge" href="/contact-us" aria-label="Talk to us">
            <svg className="fx-ring" viewBox="0 0 160 160" aria-hidden="true">
              <defs><path id="fxcirc" d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0" /></defs>
              <text fontSize="12.5" fontWeight="800" fill="currentColor"><textPath href="#fxcirc" textLength="384" lengthAdjust="spacing"> </textPath></text>
            </svg>
            <span className="fx-core">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M8 7h9v9" /></svg>
            </span>
          </a>
        </div>

        <div className="fx-mid">
          <div className="fx-contact">
            <div className="fx-k">Say hello</div>
            <a className="fx-mail" href="mailto:hello@opslogic.team">hello@opslogic.team
              <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M8 7h9v9" /></svg>
            </a>
            <a className="fx-tel" href="tel:+914035009631">+91 40 3500 9631</a>
            <div className="fx-loc"><span className="fx-live" aria-hidden="true" />Hyderabad, India<FooterClock /></div>
          </div>
          <nav className="fx-col" aria-label="Services">
            <div className="fx-k">Services</div>
            <a className="fx-a" href="/services/business-operations"><span>Business Operations</span></a>
            <a className="fx-a" href="/services/hr-payroll"><span>HR &amp; Payroll</span></a>
            <a className="fx-a" href="/services/it-services"><span>IT Services</span></a>
          </nav>
          <nav className="fx-col" aria-label="Company">
            <div className="fx-k">Company</div>
            <a className="fx-a" href="/"><span>Home</span></a>
            <a className="fx-a" href="/about-us"><span>About Us</span></a>
            <a className="fx-a" href="/careers"><span>Careers</span></a>
            <a className="fx-a" href="/contact-us"><span>Contact Us</span></a>
          </nav>
        </div>

        <div className="fx-bot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-light.png" alt="OpsLogic" />
          <span>© 2025–2026 OpsLogic Private Limited. All rights reserved.</span>
          <span className="fx-links"><a href="#">Privacy Policy</a><a className="fx-topbtn" href="#">Back to top <span className="fx-up" aria-hidden="true">↑</span></a></span>
        </div>
      </div>
    </footer>
  );
}
