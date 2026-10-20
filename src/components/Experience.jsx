const journey = [
  "Programming Fundamentals",
  "Java & Object-Oriented Programming",
  "Data Structures & Algorithms",
  "HTML & CSS",
  "JavaScript",
  "React",
  "SQL & Databases",
  "Networking & Cisco",
  "Building Real Projects",
  "Continuous Learning",
];

export default function Experience() {
  return (
    <section id="journey" className="section alt-section">
      <div className="container">
        <div className="section-heading reveal fade-up">
          <span className="section-tag">Journey</span>
          <h2>My learning and development journey</h2>
        </div>

        <div className="timeline reveal fade-up">
          {journey.map((step, index) => (
            <div key={step} className="timeline-item">
              <div className="timeline-node" aria-hidden="true" />
              {index < journey.length - 1 && (
                <span className="timeline-arrow">↓</span>
              )}
              <span className="timeline-text">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
