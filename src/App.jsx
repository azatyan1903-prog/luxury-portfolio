import React from 'react';
import { Link } from 'react-scroll';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer'
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
            <Link to="about" spy={true} smooth={true} offset={-90} duration={500} activeClass="active">
              About
            </Link>
            <Link to="skills" spy={true} smooth={true} offset={-90} duration={500} activeClass="active">
              Skills
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-90} duration={500} activeClass="active">
              Projects
            </Link>
          </div>
        </div>
      </nav>

      <div className="luxury-main-layout">
        <div className="full-width-content">
          
          <Hero />
          
          <About />
          
          <section id="skills" className="app-skills-section">
            <Skills />
          </section>
          
          <Projects />
          <Footer/>
          
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