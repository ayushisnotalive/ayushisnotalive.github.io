import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", 
  "MongoDB", "Python", "FastAPI", "Machine Learning", "Vue", "Tailwind CSS", "Prisma", "Firebase"
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My <span className="text-red">Skills</span></h2>
          <div className="title-underline"></div>
        </motion.div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-badge glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
