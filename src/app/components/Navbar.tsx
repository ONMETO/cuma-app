import React from 'react';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <span className="text-black font-bold text-xl leading-none">M</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Melo</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-200">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-flex bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors">
            Get the App
          </button>
          <button className="md:hidden text-white p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};
