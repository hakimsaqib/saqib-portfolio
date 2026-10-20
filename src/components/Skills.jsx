import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section alt-section">
      <div className="container">
        <div className="section-heading reveal fade-up">
          <span className="section-tag">Skills</span>
          <h2>Tools, languages, and systems I&apos;m learning and using</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group reveal fade-up">
              <div className="skill-group-header">
                <span className="group-icon">
                  <img
                    src={`
                      ${group.icon}`}
                    alt="the skill icon"
                    className="skill-icon"
                  />
                </span>
                <h3>{group.title}</h3>
              </div>

              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
