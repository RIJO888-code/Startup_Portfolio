// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // 👈 Import useNavigate
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate(); // 👈 Initialize navigate function

  return (
    <div className="hero-container">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Innovating Solutions. Empowering Ideas.</h1>
        <p className="hero-subtitle">Delivering smart, scalable, and client-focused tech solutions.</p>
        
        <div className="hero-buttons">
          {/* ABOUT US button with routing */}
          <motion.button
            className="hero-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/about')} // 👈 Redirect to /about
          >
            ABOUT US
          </motion.button>
 <motion.button
            className="hero-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/Project')} // 👈 Redirect to /about
          >
             PROJECTS
          </motion.button>

          {/* Other button */}
          <motion.button
            className="hero-btn outline"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/Contact')}
          >
            Let's Work Together
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
