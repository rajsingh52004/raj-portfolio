import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <a href="#home" className="nav-logo">
        Raj<span>Singh</span>
      </a>

      <div className={`nav-links ${open ? "active" : ""}`}>
        {links.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </div>

      <div className="nav-icons">
        <a href="https://github.com/rajsingh52004" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/rajsingh0105" target="_blank">
          <FaLinkedin />
        </a>
      </div>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? "✕" : "☰"}
      </button>
    </motion.nav>
  );
}

export default Navbar;