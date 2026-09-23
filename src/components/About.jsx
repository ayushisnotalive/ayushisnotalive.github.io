import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <div className="terminal-body">
              <p className="terminal-prompt">
                <span className="prompt-dir">~about</span>
                <span className="prompt-arrow">➜</span>
                <span className="prompt-cmd">Who am i</span>
              </p>
              <h3 className="about-title">Full Stack Developer</h3>
              <p className="about-description">
                I am an engineer focused on building robust, scalable backend architectures and dynamic,
                high-performance frontend applications. With expertise spanning from modern UI frameworks
                like React and Next.js to cloud-native infrastructure with Docker and Kubernetes, I specialize
                in developing end-to-end solutions that solve complex problems efficiently and elegantly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
