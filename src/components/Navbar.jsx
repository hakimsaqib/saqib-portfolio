import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-wrap">
        <a className="brand" href="#home" aria-label="Hakim Saqib home">
          Hakim Saqib
        </a>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label="Toggle color theme"
            onClick={onToggleTheme}
          >
            <img
              src="./icons/dark-ight-mode.jpg"
              alt="the them toggle icon"
              className="skill-icon"
            />
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`nav-panel ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="btn btn-primary nav-cta"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
