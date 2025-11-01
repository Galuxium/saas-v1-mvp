"use client";

import { motion } from 'framer-motion';

const Hero = () => {
  const heroStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1400&auto=format&fit=crop)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
  };

  const leftColumnStyle = {
    zIndex: 1,
    padding: '20px',
    color: 'white',
    maxWidth: '50%',
  };

  const rightColumnStyle = {
    zIndex: 1,
    padding: '20px',
    maxWidth: '50%',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '10px',
  };

  const ctaStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    marginTop: '20px',
  };

  const staggeredTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div style={heroStyle}>
      <div style={overlayStyle} />
      <div style={leftColumnStyle}>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={staggeredTextVariants}
          transition={{ duration: 0.5 }}
        >
          Welcome to Our SaaS Solution
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={staggeredTextVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering developers with tools to enhance productivity.
        </motion.p>
        <a href="#features" style={ctaStyle}>
          Scroll to Features
        </a>
      </div>
      <div style={rightColumnStyle}>
        <motion.img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=400&auto=format&fit=crop"
          alt="Mock product display"
          style={imageStyle}
          initial="hidden"
          animate="visible"
          variants={staggeredTextVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>
    </div>
  );
};

export default Hero;