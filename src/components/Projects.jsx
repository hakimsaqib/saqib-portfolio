import { useMemo, useState } from "react";
import { projectFilters, projects } from "../data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading reveal fade-up">
          <span className="section-tag">Projects</span>
          <h2>Selected work and learning projects</h2>
        </div>

        <div className="filter-row reveal fade-up">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={
                filter === activeFilter ? "filter-chip active" : "filter-chip"
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <article
              key={project.id}
              className="project-card reveal fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div
                className={`project-visual ${project.accent}`}
                aria-hidden="true"
              >
                <span>{project.name}</span>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-type">{project.type}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={`${project.id}-${tech}`}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    className="btn btn-secondary small"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="btn btn-primary small"
                    href={project.demo}
                    rel="//https/gethub.com/hakimsaqib/repository/networking"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
