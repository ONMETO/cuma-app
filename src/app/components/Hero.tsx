import React, { useRef } from 'react';
import appleLogo from '../../assets/apple_logo.svg';
import UiverseButton from './ui/UiverseButton';
import ScrollReveal from './ui/ScrollReveal';
import { BagelCanvas } from './ui/Bagel3D/BagelCanvas';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden z-10">
      {/* 3D Everything Bagel Canvas Overlay */}
      <BagelCanvas heroRef={containerRef} />

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto space-y-8 mt-36 md:mt-52 pointer-events-auto">
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-black tracking-tighter text-white drop-shadow-2xl">
            Your listening rhythm, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-700">
              redefine.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-lg md:text-2xl text-neutral-300 max-w-2xl font-medium tracking-tight">
            Immerse yourself in AI-generated covers, precise breathing beats, and nearby discoveries. The ultimate musical companion.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3} className="flex flex-col sm:flex-row gap-6 pt-4 w-full sm:w-auto items-center">
          <UiverseButton text="Download for iOS" />

          <button className="bg-black/40 backdrop-blur-md border border-neutral-800 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-neutral-900 transition-all group shadow-xl h-[60px]">
            <img src={appleLogo} alt="Apple" className="w-6 h-6" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Download on the</span>
              <span className="text-xl font-semibold -mt-0.5">App Store</span>
            </div>
          </button>
        </ScrollReveal>
      </div>
    </div>
  );
};
