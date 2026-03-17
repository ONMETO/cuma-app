import React from 'react';
import { cn } from '../utils/cn';

export const PatternBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black overflow-hidden">
      <style>
        {`
          @keyframes patternMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(32px, 32px); }
          }
          .animate-pattern {
            animation: patternMove 8s linear infinite;
          }
        `}
      </style>
      <div 
        className="absolute inset-0 z-0 animate-pattern opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.5) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          width: 'calc(100% + 32px)',
          height: 'calc(100% + 32px)',
          left: '-32px',
          top: '-32px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />
    </div>
  );
};
