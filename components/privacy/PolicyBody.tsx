type Item = { h?: string; t: string };
type Part = { title: string; p?: string; items?: Item[] };

const INTRO =
  "Welcome to OpsLogic. We are dedicated to protecting your privacy and ensuring that our services are both personalized and valuable to you. This Privacy Policy explains how we gather, utilize, and safeguard your personal information when you engage with our website.";

const PARTS: Part[] = [
  {
    title: "Information We Collect",
    items: [
      { h: "Personal Information", t: "When you fill out forms, subscribe to our newsletter, or contact us, we may collect personal details such as your name, email address, phone number, and company information." },
      { h: "Usage Data", t: "We may also collect data on how you interact with our website. This may include your IP address, browser type, device details, pages viewed, and the duration of your visit on each page." },
    ],
  },
  {
    title: "How We Use Your Information",
    items: [
      { h: "Service Delivery", t: "We use your personal information to deliver the services you request, address your inquiries, and enhance our offerings." },
      { h: "Marketing Communications", t: "With your consent, we may send you updates, newsletters, and marketing materials. You can opt out of receiving these communications at any time." },
      { h: "Website Improvement", t: "The usage data helps us analyze trends, monitor the performance of our website, and enhance your experience." },
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    p: "We use cookies and similar technologies to collect and store information about your usage of our website. Cookies assist us in tailoring your experience and collecting analytical information. You can configure your browser to reject cookies, but this might impact your ability to access certain features on our site.",
  },
  {
    title: "Data Sharing and Disclosure",
    p: "We do not disclose, sell, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website and delivering services, subject to confidentiality agreements.",
  },
  {
    title: "Data Security",
    p: "We implement industry-standard security measures to protect your personal information. However, it's important to note that no data transmission or storage method is completely secure, and we cannot guarantee total security.",
  },
  {
    title: "Your Rights",
    items: [
      { h: "Access and Correction", t: "You have the right to review the personal information we have about you and to request any necessary updates." },
      { h: "Data Deletion", t: "You can request the deletion of your personal information from our records, subject to legal and contractual obligations." },
      { h: "Opt-Out", t: "You can opt out of marketing communications by following the unsubscribe instructions in our emails or contacting us directly." },
    ],
  },
  {
    title: "Third-Party Links",
    p: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any websites you visit.",
  },
  {
    title: "Changes to This Privacy Policy",
    p: "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised date will be updated at the top of the policy. We encourage you to review this policy periodically.",
  },
];

const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const TOC = [...PARTS.map((x) => x.title), "Contact Us"];

/** The policy text. Edit the copy in PARTS above. */
export default function PolicyBody() {
  return (
    <section className="ux-sec t1 pp-sec">
      <div className="ux-wrap pp-grid">
        <aside className="pp-toc ux-r" aria-label="On this page">
          <span className="ux-eyebrow">On this page</span>
          <ol>
            {TOC.map((t, i) => (
              <li key={t}><a href={"#" + slug(t)}><span>{String(i + 1).padStart(2, "0")}</span>{t}</a></li>
            ))}
          </ol>
        </aside>
        <div className="pp">
          <p className="ux-lead pp-intro ux-r">{INTRO}</p>
          {PARTS.map((part, i) => (
            <article className="ux-card pp-card ux-r" id={slug(part.title)} key={part.title}>
              <span className="pp-n">{String(i + 1).padStart(2, "0")}</span>
              <div className="pp-b">
                <h2>{part.title}</h2>
                {part.p ? <p>{part.p}</p> : null}
                {part.items ? (
                  <ul className="pp-list">
                    {part.items.map((x) => (
                      <li key={x.h}><b>{x.h}</b><span>{x.t}</span></li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
          <article className="ux-card pp-card pp-last ux-r" id="contact-us">
            <span className="pp-n">{String(PARTS.length + 1).padStart(2, "0")}</span>
            <div className="pp-b">
              <h2>Contact Us</h2>
              <p>If you have any questions or concerns regarding this Privacy Policy or our data handling practices, please get in touch with us at:</p>
              <p className="pp-contact">
                Email: <a href="mailto:hello@opslogic.team">hello@opslogic.team</a><br />
                Phone: <a href="tel:+914035009631">+91 40 3500 9631</a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
