x
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        backdropFilter: 'blur(10px)',
        background: 'rgba(255, 255, 255, 0.4)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ marginRight: '10px' }}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="6" x2="12" y2="12" />
          <line x1="12" y1="12" x2="16" y2="12" />
        </svg>
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>SaaS Logo</span>
      </div>
      <div style={{ display: 'none', flexDirection: 'column', alignItems: 'flex-end' }}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}
          >
            {link.name}
          </a>
        ))}
      </div>
      <button
        onClick={toggleMenu}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
        }}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? '✖' : '☰'}
      </button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            zIndex: 1000,
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ margin: '5px 0', textDecoration: 'none', color: '#333' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;