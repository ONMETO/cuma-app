import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: 'landing' | 'region-select' | 'doc-viewer';
  onNavigateHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigateHome }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileOpen(false);
    if (currentView !== 'landing') {
      onNavigateHome();
      // Let the natural hash navigation happen by waiting slightly
      setTimeout(() => {
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    setIsMobileOpen(false);
    onNavigateHome();
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <span className="text-black font-bold text-xl leading-none">M</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Melo</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-200">
          <a 
            href="#features" 
            onClick={(e) => handleAnchorClick(e, '#features')}
            className="hover:text-white transition-colors"
          >
            Features
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleAnchorClick(e, '#about')}
            className="hover:text-white transition-colors"
          >
            About
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={handleLogoClick}
            className="hidden sm:inline-flex bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Get the App
          </button>
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white p-2 cursor-pointer hover:bg-neutral-900 rounded transition-colors"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-neutral-800 absolute top-16 left-0 right-0 py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
          <a 
            href="#features" 
            onClick={(e) => handleAnchorClick(e, '#features')}
            className="text-lg font-medium text-neutral-200 hover:text-white py-2 border-b border-neutral-900"
          >
            Features
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleAnchorClick(e, '#about')}
            className="text-lg font-medium text-neutral-200 hover:text-white py-2 border-b border-neutral-900"
          >
            About
          </a>
          <button 
            onClick={() => {
              setIsMobileOpen(false);
              handleLogoClick();
            }}
            className="w-full bg-white text-black py-3 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors cursor-pointer mt-2"
          >
            Get the App
          </button>
        </div>
      )}
    </nav>
  );
};

