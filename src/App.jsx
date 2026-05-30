import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import './App.css'; 

function App() {
  return (
    <div className="luxury-app-wrapper">
      <div className="ambient-glow-top"></div>
      
      <nav className="luxury-navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            ANI<span>.</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
        </div>
      </nav>

      <div className="luxury-main-layout">
        
        <div className="left-content">
          <Hero />
          <About />
          <Projects />
        </div>

        <div className="right-sticky-sidebar" id="skills">
          <Skills />
        </div>

      </div>

      <footer className="luxury-footer">
        <div className="footer-left">
          <span>Yerevan, Armenia</span> — Designed for High-Impact Development
        </div>
        <div className="footer-right">
          <p>© {new Date().getFullYear()} Ani Azatyan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;