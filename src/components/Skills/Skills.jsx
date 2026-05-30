import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import aniVideo from '../../assets/imgs/IMG_8698.MP4'


import { RiReactjsLine } from 'react-icons/ri';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io5';
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
    <div className="sticky-sidebar-inner">
      
      <motion.div 
        className="luxury-portrait-frame-wrapper"
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="glowing-gold-halo">
          <video src={aniVideo} autoPlay loop muted playsInline className="luxury-avatar-video" />
        </div>
      </motion.div>

      <div className="luxury-skills-matrix-panel">
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
      </div>

    </div>
  );
};

export default Skills;