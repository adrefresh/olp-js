export default function Statement() {
  return (
  <section className="statement">
    <div className="wrap contact-grid">
      <div className="reveal">
        <span className="eyebrow">Start a conversation</span>
        <div className="contact-note" style={{ marginTop: "1.5rem" }}>
          Tell us what’s moving—or
          <em>stuck.</em>
        </div>
        <p className="muted" style={{ maxWidth: "38ch", marginTop: "2rem" }}>We usually reply within one business day. If you’re not quite sure where to begin, that’s exactly why we’re here.</p>
        <p>
          <strong>hello@opslogic.team</strong>
          <br />
          +91 40 3500 9631
        </p>
      </div>
      <form className="contact-form reveal">
        <div className="field">
          <label>Your name</label>
          <input required placeholder="What should we call you?" />
        </div>
        <div className="field">
          <label>Work email</label>
          <input required type="email" placeholder="you@company.com" />
        </div>
        <div className="field">
          <label>What do you need?</label>
          <select>
            <option>Business Operations</option>
            <option>IT Solutions</option>
            <option>Hiring Services</option>
            <option>Payroll Services</option>
            <option>SAP Services</option>
            <option>Shared Workspaces</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="field">
          <label>Short version</label>
          <textarea placeholder="The opportunity, challenge or deadline…" />
        </div>
        <button className="button" type="submit">Send the signal ↗</button>
      </form>
    </div>
  </section>
  );
}
