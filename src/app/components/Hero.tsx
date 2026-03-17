import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden z-10">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Parallax Floating Cards */}
        <motion.div 
          style={{ y: y1 }} 
          className="hidden md:block absolute left-4 lg:left-24 top-32 w-56 h-80 bg-neutral-900 border border-neutral-800 rounded-[2rem] overflow-hidden shadow-2xl opacity-60 mix-blend-screen"
        >
          <img src="https://images.unsplash.com/photo-1705254613799-da8cea6925bc?q=80&w=1080&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-150" alt="App Feature" />
        </motion.div>
        <motion.div 
          style={{ y: y2 }} 
          className="hidden md:block absolute right-4 lg:right-24 top-64 w-64 h-[22rem] bg-neutral-900 border border-neutral-800 rounded-[2rem] overflow-hidden shadow-2xl opacity-80 mix-blend-screen"
        >
          <img src="https://images.unsplash.com/photo-1601702645454-3140ab588600?q=80&w=1080&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-150" alt="App Preview" />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto space-y-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 text-sm font-semibold backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          Melo v2.0 is now live
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.9] font-black tracking-tighter text-white drop-shadow-2xl"
        >
          YOUR RHYTHM, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-700">
            REDEFINED.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-neutral-300 max-w-2xl font-medium tracking-tight"
        >
          Immerse yourself in AI-generated covers, precise breathing beats, and nearby discoveries. The ultimate musical companion.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
        >
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Download for iOS
          </button>
          <button className="bg-black/50 border border-neutral-800 text-white backdrop-blur-md px-8 py-4 rounded-full text-lg font-bold hover:bg-neutral-900 transition-colors flex items-center justify-center gap-2">
            View Features
          </button>
        </motion.div>
      </div>
    </div>
  );
};
