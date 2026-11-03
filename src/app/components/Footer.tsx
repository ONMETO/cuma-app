import React from 'react';
import logoImg from '../../assets/logo.png';

interface FooterProps {
  onNavigate?: (type: 'privacy' | 'terms' | 'contact' | 'partnerships') => void;
  onNavigateHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onNavigateHome }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, type: 'privacy' | 'terms' | 'contact' | 'partnerships') => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(type);
    }
  };

  return (
    <footer className="w-full border-t border-neutral-900 bg-black pt-32 pb-12 relative z-10 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div onClick={onNavigateHome} className="flex items-center gap-3 cursor-pointer">
          <img
            src={logoImg}
            alt="Bagel Muse"
            className="w-6 h-6 rounded object-contain border border-neutral-800"
          />
          <span className="text-white font-semibold text-lg tracking-tight">Bagel Muse</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400">
          <a 
            href="#faq" 
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
              setTimeout(() => {
                const el = document.getElementById('faq');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
            className="hover:text-white transition-colors"
          >
            FAQ
          </a>
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
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
          <a 
            href="#" 
            onClick={(e) => handleNavClick(e, 'partnerships')}
            className="hover:text-white transition-colors"
          >
            Partnerships
          </a>
        </div>
        
        <p className="text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} Bagel Muse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

