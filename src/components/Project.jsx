import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OurProjectsPage = () => {
  const projects = [
    {
      title: 'ASSET+ : Warehouse Management System',
      description: `Developed for a prominent client in the UAE, ASSET+ is an advanced Warehouse Management
      System that optimizes inventory handling, storage, dispatching, and reporting.
      Built using ASP.NET, integrated with powerful SQL databases, and enhanced by RDLC reports for seamless data visualization.
      Backend logic and system control were architected using modern enterprise-grade techniques for scalability and security.`,
      link: 'https://wms.pescodc.com:7878',
    },
    {
  title: 'BUDDY: Pet Care Platform',
  description: `BUDDY is an intuitive and compassionate Pet Care & Adoption Platform built for modern pet owners. Designed using cutting-edge technologies like React, Tailwind CSS, and Framer Motion, it offers a seamless and delightful experience to users.

Whether you're stepping out of town or need a helping hand, BUDDY connects pet owners with trusted caregivers in their area. From scheduling feeding visits to pet-sitting arrangements, the platform ensures your furry friends are always loved and looked after. It's more than just tech—it's care made smarter.`,
  link: 'https://pet-care-rouge-ten.vercel.app/'
}
,
    {
  title: 'AI-Enhanced Trip Planner',
  description: `An intelligent and personalized travel companion, this AI-Enhanced Trip Planner crafts detailed itineraries based on user preferences, budget, and time frame — within seconds.

Built using robust technologies like ASP.NET, SQL, and seamlessly integrated with Gemini AI APIs, it provides location-aware suggestions, optimal routes, and curated experiences. Whether it’s a weekend getaway or a long vacation, users receive tailor-made plans powered by smart automation and dynamic decision-making.`,
  link: '#'
}
,
    {
  title: 'Fruit Basket: Online Fresh Fruit Store',
  description: `Fruit Basket is a modern e-commerce platform dedicated to delivering the freshest fruits directly to your doorstep. With a vibrant interface built using React, Tailwind CSS, and Framer Motion, the platform ensures a delightful and intuitive shopping experience.

Users can browse seasonal fruits, get nutritional insights, and place orders with ease. Designed for efficiency and freshness, the platform bridges the gap between farms and homes — making healthy living just a click away.`,
  link: 'https://fruit-storee.netlify.app/',
}
,
    {
  title: 'SkinVision: Deep Learning-Based Skin Cancer Detection',
  description: `SkinVision is an advanced medical diagnostic tool that leverages deep learning to classify and detect skin cancer with an impressive accuracy of 90%. Built using Python, TensorFlow, and powerful image processing techniques, the system is capable of analyzing skin lesion images and predicting the presence of melanoma and other skin abnormalities.

The model is trained on a large dataset of dermatological images and employs convolutional neural networks (CNNs) to deliver fast, reliable, and scalable predictions — helping bridge the gap between early diagnosis and patient care.`,
  link: '#',
}
,{
  title: 'HRM System: Smart HR & Employee Management',
  description: `A robust and scalable HR Management System designed to streamline company workforce operations. This system enables effortless tracking of employee attendance, leave records, team structures, and department-level reporting. 

Built using ASP.NET and SQL, it provides secure role-based access for admins, HR executives, and employees. It simplifies administrative tasks while ensuring transparency and accuracy across HR functions — from onboarding to exit.`,
  link: '#',
},
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const handleNext = () => setCurrent((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  const containerStyle = {
    width: '100vw',
    minHeight: '100vh',
    background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%)',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 20px',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const headingStyle = {
    fontSize: '4rem',
    fontWeight: '900',
    letterSpacing: '4px',
    color: '#f1c40f',
    textShadow: '0 0 20px #f1c40f, 0 0 40px #f39c12',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '80px',
  };

  const projectBlockStyle = {
    position: 'relative',
    maxWidth: '900px',
    padding: '40px',
    borderRadius: '20px',
    background: 'linear-gradient(145deg, #1f1f1f, #0a0a0a)',
    boxShadow: '0 0 40px rgba(241, 196, 15, 0.2), 0 0 60px rgba(241, 196, 15, 0.15)',
    marginBottom: '40px',
    overflow: 'hidden',
  };

  const titleStyle = {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    color: '#f1c40f',
    marginBottom: '20px',
    textShadow: '0 0 10px #f1c40f',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#cccccc',
    textAlign: 'justify',
    marginBottom: '30px',
  };

  const linkStyle = {
    fontSize: '1rem',
    textAlign: 'right',
    color: '#f1c40f',
    textDecoration: 'underline',
    cursor: 'pointer',
    display: 'inline-block',
    marginTop: '10px',
  };

  const navBtnStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(241,196,15,0.1)',
    color: '#f1c40f',
    fontSize: '2rem',
    border: 'none',
    cursor: 'pointer',
    zIndex: 10,
    padding: '10px 15px',
    borderRadius: '50%',
    transition: 'background 0.3s',
  };

  return (
    <div style={containerStyle}>
      <motion.h1
        style={headingStyle}
        initial={{ opacity: 0, scale: 0.7, rotateX: -30 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        whileHover={{ scale: 1.05, rotateY: 5 }}
      >
        Our Projects
      </motion.h1>

      <div style={{ position: 'relative' }}>
        <button onClick={handlePrev} style={{ ...navBtnStyle, left: '-50px' }}>{'‹'}</button>
        <button onClick={handleNext} style={{ ...navBtnStyle, right: '-50px' }}>{'›'}</button>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            style={projectBlockStyle}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              style={titleStyle}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              {projects[current].title}
            </motion.h2>

            <motion.p
              style={descriptionStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {projects[current].description}
            </motion.p>

            <motion.a
              href={projects[current].link}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              View more about this project →
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OurProjectsPage;
