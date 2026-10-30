import IndiaMap from "./IndiaMap";

/** "Get in touch directly": contact details on the left, India map with the Hyderabad pin on the right. */
export default function TouchCard() {
  return (
    <div className="ux-card ux-touch">
      <div className="ux-touch-txt">
        <h3>Get in touch directly</h3>
        <p>
          <a href="mailto:hello@opslogic.team">hello@opslogic.team</a>
          <br />
          <a href="tel:+914035009631">+91 40 3500 9631</a>
        </p>
        <p>Hyderabad, India</p>
      </div>
      <IndiaMap />
    </div>
  );
}
