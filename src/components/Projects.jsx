import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Link-Forge',
    description: 'A powerful tool to create, manage, and track shortened links with advanced analytics.',
    repo: 'https://github.com/ayushisnotalive/Link-Forge',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind']
  },
  {
    title: 'DineSlot',
    description: 'Modern restaurant reservation and management system offering seamless booking experiences.',
    repo: 'https://github.com/ayushisnotalive/DineSlot',
    tech: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    title: 'align',
    description: 'A productivity and task alignment tool designed to keep teams focused on their primary goals.',
    repo: 'https://github.com/ayushisnotalive/align',
    tech: ['Vue', 'Firebase', 'Vuex']
  },
  {
    title: 'Movies Recommender',
    description: 'Full-stack movies recommender system powered by machine learning and a fast backend API.',
    repo: 'https://github.com/ayushisnotalive/Movies_Recommender_FastAPI_Full_Stack',
    tech: ['FastAPI', 'Python', 'React', 'Machine Learning']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured <span className="text-red">Projects</span></h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card glass-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="card-content">
                <div className="card-header">
                  <h3>{project.title}</h3>
                  <div className="card-links">
                    <a href={project.repo} target="_blank" rel="noreferrer" className="icon-link">
                      <FaGithub size={22} />
                    </a>
                  </div>
                </div>
                
                <p className="card-description">{project.description}</p>
                
                <div className="card-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="card-glow-overlay"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
