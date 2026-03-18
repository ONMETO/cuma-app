import React from 'react';
import ShinyText from './ShinyText';

interface UiverseButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const UiverseButton: React.FC<UiverseButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`uiverse-button group relative flex items-center justify-center ${className}`}
    >
      <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative flex items-center justify-center bg-black leading-none px-8 py-4 rounded-full border border-neutral-800 transition-all duration-200 group-hover:bg-neutral-900">
        <ShinyText 
          text={text} 
          disabled={false} 
          speed={3} 
          className="text-lg font-bold tracking-tight"
          shineColor="#ffffff"
          color="#a1a1aa"
        />
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        .uiverse-button:active {
          transform: scale(0.95);
          transition: transform 0.1s;
        }
      `}} />
    </button>
  );
};

export default UiverseButton;
