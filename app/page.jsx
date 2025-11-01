x
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonialsData = [
  { id: 1, text: "This service changed my life!", author: "Alice" },
  { id: 2, text: "Incredible experience and support.", author: "Bob" },
  { id: 3, text: "Highly recommend to everyone!", author: "Charlie" },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <div>
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <img 
          src="https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1400&auto=format&fit=crop" 
          alt="Hero Background" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} 
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>Welcome to Our SaaS Solution</h1>
          <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>Your journey to success starts here.</p>
          <div>
            <button style={{ margin: '10px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>Get Started</button>
            <button style={{ margin: '10px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', backgroundColor: 'transparent', color: 'white', border: '1px solid white', borderRadius: '5px' }}>Learn More</button>
          </div>
        </div>
      </section>

      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem' }}>Features</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {['🚀 Fast', '🔒 Secure', '📈 Scalable'].map((feature, index) => (
            <div key={index} style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', width: '250px' }}>
              <h3>{feature}</h3>
              <p>Feature description goes here.</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem' }}>Gallery</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {['https://via.placeholder.com/300', 'https://via.placeholder.com/300', 'https://via.placeholder.com/300'].map((img, index) => (
            <div key={index} style={{ margin: '20px', width: '300px' }}>
              <img src={img} alt={`Gallery Image ${index + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem' }}>Testimonials</h2>
        <motion.div 
          key={currentTestimonial} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 0.5 }} 
          style={{ margin: '20px', fontSize: '1.5rem' }}>
          <p>"{testimonialsData[currentTestimonial].text}"</p>
          <p>- {testimonialsData[currentTestimonial].author}</p>
        </motion.div>
        <button onClick={nextTestimonial} style={{ margin: '10px', padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}>Next Testimonial</button>
      </section>

      <section style={{ padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem' }}>Pricing</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {['Basic', 'Pro', 'Enterprise'].map((plan, index) => (
            <div key={index} style={{ margin: '20px', padding: '20px', border: index === 1 ? '2px solid #0070f3' : '1px solid #ccc', borderRadius: '10px', width: '250px' }}>
              <h3>{plan}</h3>
              <p>Plan description goes here.</p>
              <button style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f1f1f1' }}>
        <h2>Subscribe to our Newsletter</h2>
        <input type="email" placeholder="Enter your email" style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <button style={{ marginLeft: '10px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>Subscribe</button>
        <div style={{ marginTop: '20px' }}>
          <a href="#" style={{ margin: '10px' }}>Privacy Policy</a>
          <a href="#" style={{ margin: '10px' }}>Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}