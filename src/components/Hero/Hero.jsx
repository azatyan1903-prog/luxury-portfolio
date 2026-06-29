import React from 'react';
import { motion } from 'framer-motion';
import aniVideo from '../../assets/imgs/IMG_8698.MP4';
import './Hero.css';

const Hero = () => {
  return (
    <section className="luxury-hero" id="hero">
      <div className="hero-split-container">
        
        <motion.div
          className="hero-text-side"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="gold-badge">✨ Open to Opportunities</div>
          
          <h1 className="luxury-name">Ani Azatyan</h1>
          
          <h2 className="luxury-tagline">
            Front-End Developer <span className="gold-slash">|</span> Software Engineering Student <span className="gold-slash">|</span> React Specialist
          </h2>
          
          <p className="luxury-lead">
            I'm a 4th-year Information Technology student focusing on building clean, responsive web experiences. Deeply engaged in frontend architectures, writing scalable structures, and bridging aesthetic fidelity with clean logic.
          </p>
          
          <div className="luxury-hero-actions">
            <a href="#projects" className="action-gold-btn">View My Work</a>
            <a href="#about" className="action-outline-btn">More About Me</a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-video-side"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <motion.div 
            className="luxury-portrait-frame-wrapper"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="glowing-gold-halo">
              <video src={aniVideo} autoPlay loop muted playsInline className="luxury-avatar-video" />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;