const values = [
  {
    title: "Learn",
    text: "Continuously learning programming, software engineering, and modern technologies.",
  },
  {
    title: "Build",
    text: "Turning concepts into practical applications and projects.",
  },
  {
    title: "Improve",
    text: "Analyzing mistakes, debugging problems, and improving my code.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading reveal fade-up">
          <span className="section-tag">About</span>
          <h2>Building with curiosity and consistency</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy reveal fade-up">
            <p>
              I enjoy learning how software works from the fundamentals to
              real-world applications. My learning journey has included frontend
              development, Java programming, databases, networking, algorithms,
              and modern development tools.
            </p>
            <p>
              I enjoy learning by building projects rather than only studying
              theory. Every project becomes a way to understand systems more
              deeply, improve my problem-solving, and create something useful.
            </p>
          </div>

          <div className="value-grid reveal fade-up delay-1">
            {values.map((item) => (
              <article key={item.title} className="info-card">
                <span className="mini-badge">{item.title}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
