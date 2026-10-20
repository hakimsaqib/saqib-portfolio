import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500);
    const onPointerMove = (event) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${event.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${event.clientY}px`,
      );
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("pointermove", onPointerMove);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />

      <header>
        <Navbar
          theme={theme}
          onToggleTheme={() =>
            setTheme((current) => (current === "dark" ? "light" : "dark"))
          }
        />
        <Hero />
      </header>

      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />

        <section className="section github-banner">
          <div className="container github-wrap reveal fade-up">
            <div>
              <span className="section-tag">GitHub</span>
              <h2>Code, Learn, Build.</h2>
            </div>
            <p>
              Most of my learning happens through building projects. Explore my
              repositories to see what I&apos;m working on.
            </p>
            <a
              className="btn btn-primary"
              href="https://github.com/hakimsaqib"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub
            </a>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {showBackToTop && (
        <button
          type="button"
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
