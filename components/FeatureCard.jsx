"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      style={{
        border: '2px solid transparent',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(white, white), linear-gradient(to right, #6a11cb, #2575fc)',
        backgroundClip: 'padding-box, border-box',
        padding: '20px',
        position: 'relative',
        transition: 'transform 0.3s',
      }}
      whileHover={{ scale: 1.05 }}
      aria-labelledby={title}
      role="article"
    >
      <img src={icon} alt={`${title} icon`} style={{ width: '50px', height: '50px' }} />
      <h3 id={title} style={{ margin: '10px 0', fontSize: '1.5rem' }}>{title}</h3>
      <p style={{ fontSize: '1rem', color: '#555' }}>{description}</p>
    </motion.div>
  );
};

export default FeatureCard;