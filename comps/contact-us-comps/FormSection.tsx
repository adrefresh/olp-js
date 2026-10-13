export default function FormSection() {
  return (
    <section style={{ paddingTop: "2rem" }}>
      <div className="wrap split">
        <div className="reveal">
          <span className="eyebrow">Choose your own adventure</span>
          <h2 style={{ marginTop: "1rem" }}>Tell us what&apos;s moving—or stuck.</h2>
          <p className="muted">
            We usually reply within one business day. If you are not quite sure
            where to begin, that&apos;s exactly why we&apos;re here.
          </p>
          <div
            className="card"
            style={{ background: "#e8f4fd", marginTop: "2rem" }}
          >
            <b>Say hello directly</b>
            <p>
              <a href="mailto:hello@opslogic.team">hello@opslogic.team</a>
              <br />
              <a href="tel:+914035009631">+91 40 3500 9631</a>
            </p>
          </div>
        </div>
        <form className="form contact-form card reveal">
          <label>
            Your name
            <input required placeholder="What should we call you?" />
          </label>
          <label>
            Work email
            <input required type="email" placeholder="you@company.com" />
          </label>
          <label>
            What&apos;s on your mind?
            <select>
              <option>Building a support stack</option>
              <option>Solving an operations problem</option>
              <option>Hiring support</option>
              <option>A career conversation</option>
              <option>Something else entirely</option>
            </select>
          </label>
          <label>
            Give us the short version
            <textarea placeholder="The opportunity, the challenge, the deadline…" />
          </label>
          <button className="button" type="submit">
            Send the signal ↗
          </button>
          <div className="toast">Signal received. We’ll be in touch soon ✦</div>
        </form>
      </div>
    </section>
  );
}
