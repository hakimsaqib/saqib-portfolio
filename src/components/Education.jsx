const learningItems = [
  {
    learnning: "Advanced React",
    icon: "./icons/react.svg",
  },
  {
    learnning: "React Hooks",
    icon: "./icons/ReactGlowing.png",
  },
  {
    learnning: "useRef",
    icon: "./icons/react.svg",
  },
  {
    learnning: "useEffect",
    icon: "./icons/react.svg",
  },
  {
    learnning: "Custom Hooks",
    icon: "./icons/react.svg",
  },
  {
    learnning: "Data Structures & Algorithms",
    icon: "./icons/DSA.png",
  },
  {
    learnning: "JavaScript",
    icon: "./icons/JS.png",
  },
  {
    learnning: "Software Development",
    icon: "./icons/DevOps.png",
  },
  {
    learnning: "SQL",
    icon: "./icons/SQL.png",
  },
  {
    learnning: "APIs",
    icon: "./icons/API.png",
  },
  {
    learnning: "Modern AI development tools",
    icon: "./icons/AI-tools.png",
  },
];

export default function Education() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading reveal fade-up">
          <span className="section-tag">Learning</span>
          <h2>What I'm learning now</h2>
        </div>

        <div className="learning-grid">
          {learningItems.map((item) => (
            <div key={item} className="learning-card reveal fade-up">
              <span className="learning-icon">
                <img src={`${item.icon}`} alt="" className="skill-icon" />
              </span>
              <p>{item.learnning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
