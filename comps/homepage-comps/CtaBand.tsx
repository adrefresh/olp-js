export default function CtaBand() {
  return (
    <section id="contact" style={{ padding: "0" }}>
      <div className="cta-band">
        <div
          className="blob"
          style={{
            width: "280px",
            height: "280px",
            background: "var(--blue-wash)",
            top: "-90px",
            left: "-70px",
          }}
        />
        <div
          className="blob"
          style={{
            width: "220px",
            height: "220px",
            background: "var(--orange-wash)",
            bottom: "-80px",
            right: "-40px",
            animationDelay: "1s",
          }}
        />
        <div className="cta-band-grid">
          <div className="cta-copy reveal">
            <span className="eyebrow orange">Ready when you are</span>
            <h2>Let&apos;s build what&apos;s next.</h2>
            <p>
              Book a free consultation — no obligations, just a conversation
              about your next move in India.
            </p>
            <a
              href="mailto:hello@opslogic.team"
              className="btn-primary magnetic"
              data-cursor="click"
            >
              hello@opslogic.team →
            </a>
            <p className="sticker-caption" id="stickerCaption">
              Hover a sticker to see what we handle for you →
            </p>
          </div>
          <div className="illustration-stage reveal" id="illustrationStage">
            <svg viewBox="0 0 560 420" aria-hidden="true">
              <ellipse
                cx="280"
                cy="378"
                rx="200"
                ry="16"
                fill="rgba(11,12,16,0.06)"
              />
              <rect
                x="150"
                y="278"
                width="260"
                height="18"
                rx="9"
                fill="#ffffff"
                stroke="#0b0c10"
                strokeWidth="3"
              />
              <rect x="168" y="296" width="12" height="56" fill="#0b0c10" />
              <rect x="380" y="296" width="12" height="56" fill="#0b0c10" />
              <g className="scene-bob delay1">
                <rect
                  x="243"
                  y="236"
                  width="74"
                  height="48"
                  rx="6"
                  fill="#0b0c10"
                />
                <rect
                  x="249"
                  y="242"
                  width="62"
                  height="34"
                  rx="3"
                  fill="#1ca7e0"
                />
                <path
                  d="M258 258 l10 10 20 -20"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="235"
                  y="278"
                  width="90"
                  height="8"
                  rx="3"
                  fill="#0b0c10"
                />
              </g>
              <g className="scene-bob">
                <rect
                  x="155"
                  y="206"
                  width="72"
                  height="72"
                  rx="30"
                  fill="#1ca7e0"
                />
                <circle cx="191" cy="180" r="30" fill="#ffe0bf" />
                <path
                  d="M161 180 a30 30 0 0 1 60 0 v-6 a30 26 0 0 0 -60 0 Z"
                  fill="#0b0c10"
                />
              </g>
              <g className="scene-bob delay2">
                <rect
                  x="333"
                  y="206"
                  width="72"
                  height="72"
                  rx="30"
                  fill="#ff8a1e"
                />
                <circle cx="369" cy="180" r="30" fill="#ffe0bf" />
                <path
                  d="M339 180 a30 30 0 0 1 60 0 v-6 a30 26 0 0 0 -60 0 Z"
                  fill="#0b0c10"
                />
              </g>
              <g className="scene-bob" transform="translate(280,96)">
                <rect
                  x="-56"
                  y="-30"
                  width="112"
                  height="54"
                  rx="18"
                  fill="#ffffff"
                  stroke="#0b0c10"
                  strokeWidth="3"
                />
                <path
                  d="M-8 24 L2 42 L16 24 Z"
                  fill="#ffffff"
                  stroke="#0b0c10"
                  strokeWidth="3"
                />
                <circle
                  className="chat-dot d1"
                  cx="-22"
                  cy="-3"
                  r="6"
                  fill="#1ca7e0"
                />
                <circle
                  className="chat-dot d2"
                  cx="2"
                  cy="-3"
                  r="6"
                  fill="#ff8a1e"
                />
                <circle
                  className="chat-dot d3"
                  cx="26"
                  cy="-3"
                  r="6"
                  fill="#0b0c10"
                />
              </g>
              <g className="scene-bob delay2">
                <circle
                  cx="90"
                  cy="120"
                  r="20"
                  fill="#ffffff"
                  stroke="#0b0c10"
                  strokeWidth="3"
                />
                <path
                  d="M82 120 l6 6 12 -12"
                  fill="none"
                  stroke="#1ca7e0"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g className="scene-bob delay1">
                <circle cx="470" cy="150" r="18" fill="#ff8a1e" />
                <path
                  d="M462 150 h16 M470 142 v16"
                  stroke="#0b0c10"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            </svg>
            <div
              className="stage-sticker"
              style={{
                top: "2%",
                left: "0%",
                "--rot": "-6deg",
                animationDelay: "0s",
              } as React.CSSProperties}
              data-desc="Hire and manage employees in India, fully compliant."
            >
              <span className="dot" />
              EOR
            </div>
            <div
              className="stage-sticker"
              style={{
                top: "10%",
                right: "0%",
                "--rot": "5deg",
                animationDelay: ".6s",
              } as React.CSSProperties}
              data-desc="Recruitment, onboarding, payroll and employee support."
            >
              <span className="dot" />
              HR Services
            </div>
            <div
              className="stage-sticker"
              style={{
                top: "44%",
                left: "-6%",
                "--rot": "4deg",
                animationDelay: "1.1s",
              } as React.CSSProperties}
              data-desc="From initial setup to ongoing business support."
            >
              <span className="dot" />
              Business Setup
            </div>
            <div
              className="stage-sticker"
              style={{
                bottom: "20%",
                right: "-4%",
                "--rot": "-4deg",
                animationDelay: "1.6s",
              } as React.CSSProperties}
              data-desc="Infrastructure, support and technology solutions."
            >
              <span className="dot" />
              IT Services
            </div>
            <div
              className="stage-sticker"
              style={{
                bottom: "2%",
                left: "6%",
                "--rot": "6deg",
                animationDelay: "2s",
              } as React.CSSProperties}
              data-desc="Statutory filings, employment law and reporting, handled."
            >
              <span className="dot" />
              Compliance
            </div>
            <div
              className="stage-sticker"
              style={{
                bottom: "-4%",
                right: "24%",
                "--rot": "-3deg",
                animationDelay: "2.4s",
              } as React.CSSProperties}
              data-desc="Accurate, on-time salaries and statutory payments."
            >
              <span className="dot" />
              Payroll
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
