import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="luxury-hero">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="gold-badge">✨ Open to Opportunities</div>
        
        <h1 className="luxury-name">Ani Azatyan</h1>
        
        <h2 className="luxury-tagline">
          Front-End Developer in Training <span className="gold-slash">|</span> IT Student <span className="gold-slash">|</span> React Enthusiast
        </h2>
        
        <p className="luxury-lead">
          I'm a 3rd-year Information Technology student with a growing passion for building clean, responsive web experiences. Deeply focused on frontend architectures, writing scalable structures, and bridging aesthetic fidelity with clean logic.
        </p>
        
        <div className="luxury-hero-actions">
          <a href="#projects" className="action-gold-btn">View My Work</a>
          <a href="#about" className="action-outline-btn">More About Me</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;