"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MapEmbed = () => {
    return (
        <motion.div 
            style={{
                width: '100%',
                height: '400px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            role="figure"
            aria-labelledby="map-title"
        >
            <h2 id="map-title" style={{ position: 'absolute', top: '-9999px' }}>Map Location</h2>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099993!2d144.95373531531683!3d-37.8162799797514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11b7c3%3A0x5045675218ceed30!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1612345678901!5m2!1sen!2sus"
                style={{
                    width: '100%',
                    height: '100%',
                    border: '0',
                    borderRadius: '8px',
                }}
                allowFullScreen
                loading="lazy"
                title="Map Location"
                aria-label="Map showing location in Melbourne CBD, Victoria, Australia"
            />
        </motion.div>
    );
};

export default MapEmbed;