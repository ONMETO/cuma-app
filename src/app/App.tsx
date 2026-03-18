import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoFeatures } from './components/BentoFeatures';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import Galaxy from './components/ui/Galaxy';
import ClickSpark from './components/ui/ClickSpark';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Galaxy starSpeed={1.2} density={0.6} hueShift={130} />
      <ClickSpark sparkColor="rgba(255, 255, 255, 0.6)" sparkCount={10} sparkRadius={20}>
        <Navbar />
        <main className="w-full relative z-10 flex flex-col">
          <Hero />
          <BentoFeatures />
          <Testimonials />
        </main>
        <Footer />
      </ClickSpark>
    </div>
  );
}
