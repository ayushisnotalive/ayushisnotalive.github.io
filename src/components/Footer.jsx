import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
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
          
          <div className="footer-socials">
            <a href="https://github.com/ayushisnotalive" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub size={20} />
            </a>
            {/* Add other socials if needed */}
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
