x
"use client";

import Navbar from './Navbar';
import Footer from './Footer';

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <title>Saas v1 MVP</title>
        <meta name="description" content="Generate a website for my saas business" />
        <style>{`
          @media (max-width: 768px) {
            body {
              padding: 0 10px;
            }
          }
        `}</style>
      </head>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(240, 240, 240, 1))',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.5), rgba(240, 240, 240, 0.8))'
      }}>
        <Navbar />
        <main style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}