import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-900 bg-black py-12 relative z-10 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
            <span className="text-black font-bold text-sm leading-none">M</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">Melo</span>
        </div>
        
        <div className="flex gap-6 text-sm text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <p className="text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} Melo App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
