const contactLinks = [
  { label: "GitHub", value: "GitHub", href: "https://github.com/hakimsaqib" },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/search/results/all/?keywords=Hakim%20Saqib",
  },
  {
    label: "Facebook",
    value: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100093153500293",
  },
  { label: "Email", value: "Email", href: "#" },
];

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy reveal fade-up">
          <span className="section-tag">Contact</span>
          <h2>Let&apos;s Build Something</h2>
          <p>
            Have a project idea, collaboration opportunity, or just want to talk
            about development? Feel free to reach out.
          </p>

          <div className="contact-list">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                className="contact-item"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.label}</span>
                {/* <strong>{item.value}</strong> */}
              </a>
            ))}
          </div>
        </div>

        <form
          className="contact-form reveal fade-up delay-1"
          onSubmit={handleSubmit}
        >
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" />
          </label>

          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="your@email.com" />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
            />
          </label>

          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
