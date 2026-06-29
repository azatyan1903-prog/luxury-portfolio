import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

import { RiReactjsLine } from 'react-icons/ri';
import { IoLogoJavascript, IoLogoHtml5 } from 'react-icons/io5';
import { SiTypescript, SiRedux, SiFormik, SiCplusplus, SiFigma, SiCoreldraw } from 'react-icons/si';

const Skills = () => {
  const skillSymbols = [
    { name: "React.js", icon: <RiReactjsLine />, color: "#61DAFB" },
    { name: "JavaScript", icon: <IoLogoJavascript />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Redux.js", icon: <SiRedux />, color: "#764ABC" },
    { name: "C++ Core", icon: <SiCplusplus />, color: "#00599C" },
    { name: "OOP Logic", icon: <SiCplusplus />, color: "#5E97F6" }, 
    { name: "Formik Forms", icon: <SiFormik />, color: "#FF5447" },
    { name: "Figma App", icon: <SiFigma />, color: "#F24E1E" },
    { name: "HTML5", icon: <IoLogoHtml5 />, color: "#E34F26" },
    { name: "CorelDRAW", icon: <SiCoreldraw />, color: "#00A859" }
  ];

  return (
    <div className="skills-split-container">
      
      <motion.div 
        className="skills-info-side"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="skills-small-title">MY TECH STACK</div>
        <h2 className="skills-main-heading">Architecting Clean & Scalable Solutions</h2>
        <p className="skills-description-text">
          My development process focuses on combining clean core programming logic with modern frontend structures. 
          From object-oriented architecture to state management, I aim to build secure, user-first applications.
        </p>

        <div className="skills-stats-grid">
          <div className="stat-node">
            <span className="stat-number">04</span>
            <span className="stat-label">University Year</span>
          </div>
          <div className="stat-node">
            <span className="stat-number">10+</span>
            <span className="stat-label">Tech Tools Mastered</span>
          </div>
          <div className="stat-node">
            <span className="stat-number">A+</span>
            <span className="stat-label">OOP & UI Focus</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="luxury-skills-matrix-panel"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="matrix-panel-header">
          <h3>Technical Skills Matrix</h3>
        </div>
        
        <div className="skills-neon-symbols-grid">
          {skillSymbols.map((skill, index) => (
            <motion.div 
              className="neon-matrix-node"
              key={index}
              whileHover={{ 
                y: -5, 
                borderColor: skill.color, 
                boxShadow: `0 0 15px ${skill.color}20` 
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="node-icon-sphere" style={{ '--icon-color': skill.color }}>
                {skill.icon}
              </div>
              <span className="node-label-text">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
};

export default Skills;