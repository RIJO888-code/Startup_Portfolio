// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="about-title"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="about-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          We are a team of creative technologists committed to delivering cutting-edge solutions
          that solve real-world problems. From scalable web apps to smart AI integrations,
          our vision is to innovate with purpose.
        </motion.p>

        <div className="about-cards">
          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2>🚀 Vision</h2>
            <p>To lead in innovative software that empowers people and businesses worldwide.</p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2>🎯 Mission</h2>
            <p>Deliver intelligent, user-focused tech crafted for performance and beauty.</p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2>🛠️ Services</h2>
            <p>Web & App Development, AI Integration, UI/UX Design, Machine Learning, Deep learning.</p>
          </motion.div>

          <motion.div
            className="about-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2>👥 Our Team</h2>
            <p>A powerhouse of developers, designers, and thinkers crafting excellence.</p>
          </motion.div>
          <motion.div
  className="about-card"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <h2>🌐 Technologies</h2>
  <p>
    We work with ASP.NET,React, Flutter, Node.js, Python, TensorFlow & PyTorch.
  </p>
</motion.div>

        </div>
      </motion.div>
      
    </div>

    
  );
  
};

export default AboutPage;
