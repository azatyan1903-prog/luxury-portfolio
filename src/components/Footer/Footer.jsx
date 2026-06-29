import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTelegramPlane, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="luxury-footer">
      <div className="footer-container">
        
        <div className="footer-copyright-side">
          <p className="copyright-text">© {new Date().getFullYear()} Ani Azatyan. All rights reserved.</p>
          <p className="footer-sub-text">Built with passion & React</p>
        </div>

        <div className="footer-contacts-side">
          <a href="mailto:azatyan1903@icloud.com" className="footer-contact-link">
            <FaEnvelope className="contact-icon" />
            <span>azatyan1903@icloud.com</span>
          </a>
          
          <a href="tel:+37499649466" className="footer-contact-link">
            <FaPhoneAlt className="contact-icon" />
            <span>+374 99 649466</span>
          </a>
        </div>

        <div className="footer-socials-side">
          <a 
            href="https://www.linkedin.com/in/ani-azatyan-85a1043b9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn linkedin-btn"
          >
            <FaLinkedin />
          </a>

          <a 
            href="https://github.com/anie08" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn github-btn"
          >
            <FaGithub />
          </a>

          <a 
            href="https://www.instagram.com/an9__y?igsh=cmw1YW1wNHkwNWhn&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn instagram-btn"
          >
            <FaInstagram />
          </a>

          <a 
            href="https://t.me/AN9_Y" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon-btn telegram-btn"
          >
            <FaTelegramPlane />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;