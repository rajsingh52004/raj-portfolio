import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Terminal",
  "Projects",
  "Resume",
  "Contact",
];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      
      <a
        href="#home"
        className="nav-logo"
        onClick={() => setOpen(false)}
      >
        Raj<span>Singh</span>
      </a>

    
      <div className={`nav-links ${open ? "active" : ""}`}>
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>

      
      <div className="nav-icons">
        <a
          href="https://github.com/rajsingh52004"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/rajsingh0105"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? "✕" : "☰"}
      </button>
    </motion.nav>
  );
}

export default Navbar;