import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-logo">
            <span className="text-white">Ayush</span>
            <span className="text-red">.</span>
          </div>
          
          <div className="footer-contact-info">
            <a href="mailto:theayushchakraborty@gmail.com" className="contact-text">
              <FaEnvelope /> theayushchakraborty@gmail.com
            </a>
            <a href="tel:+919147088780" className="contact-text">
              <FaPhone /> +91 9147088780
            </a>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/ayushisnotalive" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ayushzdevs" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-link">
              <FaInstagram size={20} />
            </a>
          </div>
          
          <div className="footer-bottom">
            <p>
              Built with <Heart size={14} className="heart-icon" /> by Ayush Chakraborty
            </p>
            <p className="footer-year">© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
