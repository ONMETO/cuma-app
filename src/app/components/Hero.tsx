import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import personSmile from '../../assets/person-smile.png';
import runner from '../../assets/runner.jpg';
import appleLogo from '../../assets/apple_logo.svg';

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
          <img src={personSmile} className="w-full h-full object-cover grayscale brightness-150" alt="App Feature" />
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="hidden md:block absolute right-4 lg:right-24 top-64 w-64 h-[22rem] bg-neutral-900 border border-neutral-800 rounded-[2rem] overflow-hidden shadow-2xl opacity-80 mix-blend-screen"
        >
          <img src={runner} className="w-full h-full object-cover grayscale brightness-150" alt="App Preview" />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto space-y-10 mt-16">


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-black tracking-tighter text-white drop-shadow-2xl"
        >
          Your listening rhythm, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-700">
            redefine.
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
          <button className="bg-black border border-neutral-800 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-neutral-900 transition-all group shadow-xl">
            <img src={appleLogo} alt="Apple" className="w-6 h-6" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Download on the</span>
              <span className="text-xl font-semibold -mt-0.5">App Store</span>
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
