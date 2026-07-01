import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaTerminal,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaTrash,
} from "react-icons/fa";
import "../styles/Terminal.css";

import resumeFile from "../assets/Raj_Singh_Resume.pdf";

const commands = {
  help: {
    title: "Available Commands",
    lines: [
      "whoami      - Know about Raj",
      "skills      - Show technical skills",
      "experience  - Show professional experience",
      "projects    - Show portfolio projects",
      "resume      - Download resume",
      "github      - Open GitHub profile",
      "linkedin    - Open LinkedIn profile",
      "contact     - Show contact details",
      "clear       - Clear terminal",
    ],
  },
  whoami: {
    title: "Raj Singh",
    lines: [
      "Java Full Stack Developer",
      "1.2+ Years Professional Experience",
      "Spring Boot | React.js | REST APIs | MySQL",
      "Open to Java Full Stack Developer opportunities.",
    ],
  },
  skills: {
    title: "Technical Skills",
    lines: [
      "Backend: Java, Spring Boot, Spring MVC, Spring Security, JWT, Hibernate, JPA",
      "Frontend: React.js, JavaScript, HTML5, CSS3, Axios",
      "Database: MySQL, Oracle, SQL, JDBC",
      "Testing: JUnit 5, Mockito, Postman",
      "Tools: Git, GitHub, Maven, Jira, ServiceNow, Linux, Windows",
    ],
  },
  experience: {
    title: "Professional Experience",
    lines: [
      "MES Engineer | Rein Solutions | June 2026 - Present",
      "Associate Software Engineer | itsWin Technologies | May 2025 - June 2026",
      "Experience in REST APIs, Spring Boot, React.js, SQL, production support and debugging.",
    ],
  },
  projects: {
    title: "Featured Projects",
    lines: [
      "01. Elite Bank - Digital Banking System",
      "02. Employee Management System - Enterprise CRUD App",
      "03. Vilora - Premium E-Commerce Platform",
      "04. Singh Quaantam Labs - AI Career Platform",
      "05. Travique - Travel Discovery Platform",
      "06. CakeBloom - Microservices Ordering Platform",
    ],
  },
  contact: {
    title: "Contact",
    lines: [
      "Email: rajsingh2781979@gmail.com",
      "Phone: +91 8358849865",
      "Location: Bengaluru / Pune, India",
      "Portfolio: raj-portfolio-khaki.vercel.app",
    ],
  },
};

const quickCommands = [
  "help",
  "whoami",
  "skills",
  "experience",
  "projects",
  "resume",
  "github",
  "linkedin",
  "contact",
  "clear",
];

function Terminal() {
  const [history, setHistory] = useState([
    {
      command: "help",
      output: commands.help,
    },
  ]);

  const [input, setInput] = useState("");
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (cmdValue) => {
    const cmd = cmdValue.trim().toLowerCase();

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (cmd === "resume") {
      const link = document.createElement("a");
      link.href = resumeFile;
      link.download = "Raj_Singh_Resume.pdf";
      link.click();

      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: {
            title: "Resume",
            lines: ["Downloading Raj Singh Resume..."],
          },
        },
      ]);

      setInput("");
      return;
    }

    if (cmd === "github") {
      window.open("https://github.com/rajsingh52004", "_blank");

      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: {
            title: "GitHub",
            lines: ["Opening GitHub profile..."],
          },
        },
      ]);

      setInput("");
      return;
    }

    if (cmd === "linkedin") {
      window.open("https://www.linkedin.com/in/rajsingh0105", "_blank");

      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: {
            title: "LinkedIn",
            lines: ["Opening LinkedIn profile..."],
          },
        },
      ]);

      setInput("");
      return;
    }

    if (commands[cmd]) {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: commands[cmd],
        },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          output: {
            title: "Command Not Found",
            lines: [`"${cmd}" is not recognized. Type "help" to see commands.`],
          },
        },
      ]);
    }

    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(input);
  };

  return (
    <section className="terminal-section" id="terminal">
      <motion.div
        className="terminal-heading"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="section-tag">Interactive Console</p>
        <h2>Developer Terminal</h2>
        <p>
          Explore my skills, projects, experience and contact details through a
          command-line style interface.
        </p>
      </motion.div>

      <motion.div
        className="terminal-card"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="terminal-topbar">
          <div className="terminal-dots">
            <span className="dot-red"></span>
            <span className="dot-yellow"></span>
            <span className="dot-green"></span>
          </div>

          <div className="terminal-title">
            <FaTerminal />
            raj@portfolio:~
          </div>

          <button className="terminal-clear" onClick={() => setHistory([])}>
            <FaTrash /> Clear
          </button>
        </div>

        <div className="terminal-body">
          <div className="terminal-output">
            {history.map((item, index) => (
              <div className="terminal-block" key={`${item.command}-${index}`}>
                <p className="terminal-command">
                  <span>raj@portfolio:~$</span> {item.command}
                </p>

                <div className="terminal-result">
                  <h4>{item.output.title}</h4>
                  {item.output.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <form className="terminal-input-line" onSubmit={handleSubmit}>
              <span>raj@portfolio:~$</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type help..."
                autoComplete="off"
              />
              <b></b>
            </form>

            <div ref={terminalEndRef}></div>
          </div>

          <div className="terminal-sidebar">
            <h4>Commands</h4>

            <div className="command-list">
              {quickCommands.map((cmd) => (
                <button key={cmd} onClick={() => runCommand(cmd)}>
                  {cmd === "github" && <FaGithub />}
                  {cmd === "linkedin" && <FaLinkedin />}
                  {cmd === "resume" && <FaDownload />}
                  {!["github", "linkedin", "resume"].includes(cmd) && (
                    <FaTerminal />
                  )}
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Terminal;