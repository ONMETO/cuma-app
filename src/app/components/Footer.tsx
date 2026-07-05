import React from 'react';

interface FooterProps {
  onNavigate?: (type: 'privacy' | 'terms') => void;
  onNavigateHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateHome }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, type: 'privacy' | 'terms') => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(type);
    }
  };

  return (
    <footer className="w-full border-t border-neutral-900 bg-black pt-32 pb-12 relative z-10 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div onClick={onNavigateHome} className="flex items-center gap-3 cursor-pointer">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
            <span className="text-black font-bold text-sm leading-none">M</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">Melo</span>
        </div>
        
        <div className="flex gap-6 text-sm text-neutral-400">
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'privacy')}
            className="hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'terms')}
            className="hover:text-white transition-colors"
          >
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <p className="text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} Melo App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

