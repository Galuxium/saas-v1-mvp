"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "This SaaS product has transformed the way we work. Highly recommend!",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1517841905240-4729888e0ee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHRlc3RpbW9uaWFsJTIwYXV0aG9yfGVufDB8fHx8MTY0NjE3NzM4Ng&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: 2,
    text: "An excellent tool that integrates seamlessly into our workflow.",
    author: "Jane Smith",
    image: "https://images.unsplash.com/photo-1502685104226-e9b1c8b4f3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHx0ZXN0aW1vbmlhbCUyMGF1dGhvcnx8MHx8fHwxNjQ2MTc3Mzg2&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    id: 3,
    text: "A game changer for our team. The customer support is outstanding!",
    author: "Alice Johnson",
    image: "https://images.unsplash.com/photo-1502767089020-6861c8c5e0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDMwfHx0ZXN0aW1vbmlhbCUyMGF1dGhvcnx8MHx8fHwxNjQ2MTc3Mzg2&ixlib=rb-1.2.1&q=80&w=400",
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      nextTestimonial();
    } else if (e.key === 'ArrowLeft') {
      prevTestimonial();
    }
  };

  return (
    <div
      role="region"
      aria-label="Testimonials"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}
    >
      <motion.div
        key={testimonials[index].id}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        style={{ margin: '20px 0' }}
      >
        <img
          src={testimonials[index].image}
          alt={`Testimonial from ${testimonials[index].author}`}
          style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover' }}
        />
        <p style={{ fontStyle: 'italic', margin: '10px 0' }}>{testimonials[index].text}</p>
        <p style={{ fontWeight: 'bold' }}>{testimonials[index].author}</p>
      </motion.div>
      <div>
        <button onClick={prevTestimonial} aria-label="Previous testimonial" style={{ marginRight: '10px' }}>Prev</button>
        <button onClick={nextTestimonial} aria-label="Next testimonial">Next</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;