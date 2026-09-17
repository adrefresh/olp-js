export default function SharedFooter({ showEmail = false }: { showEmail?: boolean }) {
  return (
  <footer className="footer">
    <div className="wrap footer-grid">
      <div>
        <a className="brand">
          <span className="mark">
            OL
          </span>
          OpsLogic
        </a>
        <p>
          Let&apos;s make business move.
        </p>
      </div>
      <p>
        © 2026 OpsLogic {showEmail ? (
        <>
          {" "} ·
          <a href="/contact-us">
            hello@opslogic.team
          </a>
        </>
        ) : null}
      </p>
    </div>
  </footer>

  );
}
