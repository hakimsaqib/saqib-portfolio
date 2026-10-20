export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy reveal fade-up">
          <span className="eyebrow">
            Currently learning • Building • Improving
          </span>

          <img
            className="developerProfile"
            src="./images/saqib-3.jpg"
            alt="The Developer Picture!"
          />
          <h1>
            Hi, I'm <span>Hakim Saqib</span>
          </h1>

          <p className="title-line">Software & Web Developer</p>
          <p className="lead">
            I build practical applications, explore modern technologies, and
            continuously turn what I learn into real projects.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div
          className="hero-visual reveal fade-up delay-1"
          aria-label="Developer terminal preview"
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <div className="terminal-body">
              <pre>
                <code>
                  {`const developer = {
   name: "Hakim Saqib",
   role: "Software Developer",
   passion: "Building useful things"
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
