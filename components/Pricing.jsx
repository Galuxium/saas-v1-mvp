"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Starter',
      price: '$19/mo',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      isRecommended: false,
    },
    {
      title: 'Pro',
      price: '$49/mo',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      isRecommended: true,
    },
    {
      title: 'Enterprise',
      price: '$99/mo',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
      isRecommended: false,
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      {pricingPlans.map((plan) => (
        <motion.div
          key={plan.title}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            margin: '10px',
            width: '300px',
            boxShadow: plan.isRecommended ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
            background: plan.isRecommended ? 'linear-gradient(135deg, #ff7e5f, #feb47b)' : '#fff',
            transition: 'transform 0.3s',
          }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 style={{ textAlign: 'center' }}>{plan.title}</h2>
          <p style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>{plan.price}</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {plan.features.map((feature) => (
              <li key={feature} style={{ margin: '10px 0' }}>{feature}</li>
            ))}
          </ul>
          <button
            style={{
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 20px',
              cursor: 'pointer',
              width: '100%',
            }}
            aria-label={`Select ${plan.title} plan`}
          >
            Get Started
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default Pricing;