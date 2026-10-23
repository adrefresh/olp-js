export default function ContactForm() {
  return (
    <form className="ux-card ux-form contact-form ux-r">
      <input required name="name" placeholder="Name" autoComplete="name" />
      <input required type="email" name="email" placeholder="Work email" autoComplete="email" />
      <input name="company" placeholder="Company" autoComplete="organization" />
      <select name="topic" defaultValue="Business Operations" aria-label="What do you need?">
        <option>Business Operations</option>
        <option>HR &amp; Payroll</option>
        <option>IT Services</option>
        <option>Something else</option>
      </select>
      <textarea name="message" rows={4} placeholder="A few words about what you need" />
      <button className="ux-btn o" type="submit">
        Send message
      </button>
    </form>
  );
}
