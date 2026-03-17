import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoFeatures } from './components/BentoFeatures';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { PatternBackground } from './components/PatternBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <PatternBackground />
      <main className="w-full relative z-10 flex flex-col">
        <Hero />
        <BentoFeatures />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
