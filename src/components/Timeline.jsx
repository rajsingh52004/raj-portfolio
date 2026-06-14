import { motion } from "framer-motion";
import "../styles/Timeline.css";

const timeline = [
  {
    year: "2021",
    title: "12th CBSE",
    desc: "Completed PCM from Geetanjali Public School, Rewa.",
  },
  {
    year: "2025",
    title: "B.Tech CSE",
    desc: "Graduated in Computer Science & Engineering from OIST Bhopal.",
  },
  {
    year: "2025",
    title: "Elite Bank",
    desc: "Built a full-stack digital banking system using React and Spring Boot.",
  },
  {
    year: "2026",
    title: "Employee Management System",
    desc: "Created REST APIs and CRUD modules with Spring Boot, Hibernate and MySQL.",
  },
  {
    year: "2026",
    title: "Vilora E-Commerce",
    desc: "Developed React e-commerce platform with cart, wishlist and admin dashboard.",
  },
];

function Timeline() {
  return (
    <section className="timeline-section" id="timeline">
      <div className="timeline-heading">
        <p className="section-tag">Journey</p>
        <h2>Education & Project Timeline</h2>
      </div>

      <div className="timeline-wrapper">
        {timeline.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={`${item.year}-${item.title}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;