"use client";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '20px' }}
      >
        <img 
          src="https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1400&auto=format&fit=crop" 
          alt="Brand Logo" 
          style={{ width: '100px', height: 'auto' }} 
        />
      </motion.div>
      <div style={{ marginBottom: '20px' }}>
        <a href="#" aria-label="Facebook" style={{ margin: '0 10px' }}>
          <svg width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.12 8.44 9.88v-6.98h-2.54v-2.9h2.54v-2.23c0-2.5 1.48-3.88 3.73-3.88 1.08 0 2.22.19 2.22.19v2.43h-1.25c-1.23 0-1.61.76-1.61 1.55v1.85h2.73l-.44 2.9h-2.29v6.98c4.78-.76 8.44-4.89 8.44-9.88 0-5.52-4.48-10-10-10z" />
          </svg>
        </a>
        <a href="#" aria-label="Twitter" style={{ margin: '0 10px' }}>
          <svg width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M23.95 4.57c-.885.39-1.83.65-2.83.77a4.93 4.93 0 0 0 2.16-2.72 9.87 9.87 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.49A13.95 13.95 0 0 1 1.64 3.15a4.92 4.92 0 0 0 1.52 6.57 4.92 4.92 0 0 1-2.23-.62v.06a4.93 4.93 0 0 0 3.95 4.83 4.93 4.93 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.86 9.86 0 0 1 0 19.54a13.93 13.93 0 0 0 7.55 2.21c9.06 0 14.01-7.5 14.01-14 0-.21 0-.42-.02-.63A10.01 10.01 0 0 0 24 4.59a9.83 9.83 0 0 1-2.05.56 4.93 4.93 0 0 0 2.16-2.72z" />
          </svg>
        </a>
      </div>
      <form style={{ marginBottom: '20px' }}>
        <input 
          type="email" 
          placeholder="Subscribe to our newsletter" 
          aria-label="Newsletter subscription" 
          style={{ padding: '10px', width: '200px', border: '1px solid #ced4da', borderRadius: '4px' }} 
        />
        <button 
          type="submit" 
          style={{ padding: '10px 15px', marginLeft: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          Subscribe
        </button>
      </form>
      <div style={{ fontSize: '14px', color: '#6c757d' }}>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;