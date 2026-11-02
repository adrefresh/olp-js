import SocialLinks from "./SocialLinks";

/** "Get in touch directly": email and phone, then the social icons. */
export default function TouchCard() {
  return (
    <div className="ux-card ux-touch">
      <h3>Get in touch directly</h3>
      <p className="ux-touch-lines">
        <a href="mailto:hello@opslogic.team">hello@opslogic.team</a>
        <a href="tel:+914035009631">+91 40 3500 9631</a>
      </p>
      <SocialLinks />
    </div>
  );
}
