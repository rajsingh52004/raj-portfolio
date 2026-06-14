import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FaGithub, FaDownload, FaEnvelope } from "react-icons/fa";
import "../styles/Hero.css";

import profileImage from "../assets/raj_photo.jpeg";
import resumeFile from "../assets/Raj_Singh_Resume.pdf";

const roles = [
  "Java Developer",
  "Spring Boot Developer",
  "React Developer",
  "Full Stack Engineer",
];

function Hero() {
  const heroRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = deleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!deleting && text.length < currentRole.length) {
        setText(currentRole.slice(0, text.length + 1));
      } else if (!deleting && text.length === currentRole.length) {
        setTimeout(() => setDeleting(true), 900);
      } else if (deleting && text.length > 0) {
        setText(currentRole.slice(0, text.length - 1));
      } else if (deleting && text.length === 0) {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-left > *",
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "all",
        }
      );

      gsap.fromTo(
        ".hero-photo-card",
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          delay: 0.4,
          ease: "power3.out",
          clearProps: "all",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" id="home" ref={heroRef}>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-left">
        <p className="hero-tag">Raj Singh | Java Full Stack Developer</p>

        <h1>
          Hi, I'm <span>Raj Singh</span>
        </h1>

        <h2 className="hero-typewriter">
          I&apos;m a <span>{text}</span>
          <b>|</b>
        </h2>

        <p className="hero-desc">
          Java Full Stack Developer skilled in Java, Spring Boot, Hibernate,
          REST API, MySQL and React.js. Passionate about building scalable,
          responsive and modern web applications.
        </p>

        <div className="hero-buttons">
          <a href={resumeFile} download="Raj_Singh_Resume.pdf" className="hero-btn primary">
            <FaDownload /> Download Resume
          </a>

          <a
            href="https://github.com/rajsingh52004"
            target="_blank"
            rel="noreferrer"
            className="hero-btn secondary"
          >
            <FaGithub /> GitHub
          </a>

          <a href="#contact" className="hero-btn outline">
            <FaEnvelope /> Contact
          </a>
        </div>
      </div>

      <motion.div
        className="hero-right"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="hero-photo-card">
          <img src={profileImage} alt="Raj Singh" />
          <div className="photo-badge">Open To Work</div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;