import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth <= 768;
  const isSmallMobile = screenWidth <= 480;

  const containerStyle = {
    width: '100vw',
    minHeight: '100vh',
    background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%)',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: isSmallMobile ? '40px 15px' : isMobile ? '50px 20px' : '60px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: isSmallMobile ? '2.2rem' : isMobile ? '3rem' : '4rem',
    fontWeight: '900',
    letterSpacing: '4px',
    color: '#f1c40f',
    textShadow: '0 0 20px #f1c40f, 0 0 40px #f39c12',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '40px',
  };

  const sectionStyle = {
    maxWidth: '900px',
    width: '100%',
    padding: isSmallMobile ? '25px' : '40px',
    borderRadius: '20px',
    background: 'linear-gradient(145deg, #1f1f1f, #0a0a0a)',
    boxShadow: '0 0 40px rgba(241, 196, 15, 0.2), 0 0 60px rgba(241, 196, 15, 0.15)',
    marginBottom: '30px',
    textAlign: 'center',
  };

  const textStyle = {
    fontSize: isSmallMobile ? '1rem' : isMobile ? '1.1rem' : '1.2rem',
    lineHeight: '1.8',
    color: '#cccccc',
    marginBottom: '20px',
  };

  const contactInfoStyle = {
    fontSize: isSmallMobile ? '0.95rem' : isMobile ? '1rem' : '1.1rem',
    color: '#f1c40f',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  return (
    <div style={containerStyle}>
      <motion.h1
        style={headingStyle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        Contact Us
      </motion.h1>

      <motion.div
        style={sectionStyle}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <motion.p
          style={textStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We are a passionate team of developers and designers delivering smart tech solutions across industries.
          From enterprise software to AI-driven innovations, we believe in solving real-world problems with creativity and code.
        </motion.p>

        <motion.p style={contactInfoStyle}>
          📞 Phone: +91 73067 75440 , +91 94002 06317
        </motion.p>
        <motion.p style={contactInfoStyle}>
          📧 Email: protekka@gmail.com
        </motion.p>
        <motion.p style={contactInfoStyle}>
          📍 Location: Kollam , Kerala, India
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ContactPage;
