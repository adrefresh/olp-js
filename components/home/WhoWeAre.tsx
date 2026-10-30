export default function WhoWeAre() {
  return (
    <div className="ux">
      <section className="ux-sec t1 ux-who" id="who-we-are">
        <div className="ux-wrap ux-split">
          <div className="ux-r">
            <span className="ux-eyebrow">Who we are</span>
            <h2>
              Three founders. <em>One team</em> you can call.
            </h2>
            <p className="ux-lead">
              OpsLogic is a business operations partner based in Hyderabad, India. Most of the companies we meet aren&apos;t short on ambition. They&apos;re short on hours, so we take on the setup, hiring, payroll and
              IT.
            </p>
            <a className="ux-btn d ux-btn-light" style={{ marginTop: "2rem" }} href="/about/">
              Meet the team <span aria-hidden="true">→</span>
            </a>
          </div>
          <dl className="ux-facts ux-r" style={{ ["--i" as string]: 1 }}>
            <div>
              <dt>Established</dt>
              <dd>2022</dd>
            </div>
            <div>
              <dt>Founders</dt>
              <dd>3</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Hyderabad, India</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
