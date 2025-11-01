x
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: 'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1400&auto=format&fit=crop', alt: 'Hero Image 1' },
  { src: 'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1400&auto=format&fit=crop', alt: 'Hero Image 2' },
  { src: 'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1400&auto=format&fit=crop', alt: 'Hero Image 3' },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
  };

  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '16px',
        padding: '16px'
      }}>
        {images.map((image, index) => (
          <div key={index} onClick={() => openModal(image.src)} style={{
            cursor: 'pointer',
            border: '2px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <img src={image.src} alt={image.alt} style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }} />
          </div>
        ))}
      </div>

      {isOpen && (
        <motion.div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.img 
            src={selectedImage} 
            alt="Enlarged view" 
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '8px'
            }} 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;