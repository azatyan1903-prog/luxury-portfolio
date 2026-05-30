import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const project = {
    title: "Belor Cosmetics — E-Commerce Platform",
    url: "belordesign.am",
    desc: "Designed and developed a full-featured e-commerce web application for Belor Cosmetics, an online store specializing in high-quality Belarusian cosmetics for the Armenian market. The platform enables customers to browse and purchase beauty items with a seamless shopping experience optimized for fast delivery and secure interactions.",
    highlights: [
      "Built a responsive online store tailored for Armenian-speaking customers",
      "Implemented seamless product catalog navigation, cart caching, and checkouts",
      "Optimized for SEO with localized Armenian metadata and Open Graph social integration",
      "Designed with a branded visual identity fully aligned with the cosmetics niche"
    ],
    tech: ["React.js", "CSS Grid", "SEO Engine", "Responsive Design"],
    link: "https://www.belordesign.am/"
  };

  return (
    <section id="projects" className="luxury-projects-section">
      <h2 className="luxury-section-title">Selected Productions</h2>
      
      <motion.div 
        className="luxury-project-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="project-card-header">
          <h3>{project.title}</h3>
          <span className="project-badge-url">{project.url}</span>
        </div>
        
        <p className="project-card-desc">{project.desc}</p>
        
        <ul className="project-bullet-highlights">
          {project.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>

        <div className="project-tech-tags-row">
          {project.tech.map((tech, i) => (
            <span key={i} className="luxury-tech-tag">{tech}</span>
          ))}
        </div>

        <a href={project.link} target="_blank" rel="noreferrer" className="luxury-live-redirect">
          Visit Production Site <span className="redirect-arrow">→</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;