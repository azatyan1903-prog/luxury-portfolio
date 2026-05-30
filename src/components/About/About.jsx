import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="luxury-about-section">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="luxury-section-title">About Core Narrative</h2>
        
        <div className="about-content-card">
          <p>
            I'm a 3rd-year Information Technology student with a growing passion for building clean, responsive web experiences. 
            Over the past 6 months, I've been deeply focused on Front-End development — sharpening my skills in JavaScript, 
            React.js, HTML5, and CSS3 through hands-on projects.
          </p>
          
          <p>
            My academic foundation spans C++, Object-Oriented Programming (OOP), and graphic design using CorelDRAW, 
            giving me a well-rounded perspective on both structural programming logic and visual asset rendering.
          </p>

          <p className="about-highlight-motto">
            Always learning. Always building. <br />
            <span>Open to junior roles, internships, and collaborations.</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;