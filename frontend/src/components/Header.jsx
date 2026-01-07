import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3">
      {/* Floating, fully rounded nav container */}
      <div className="sticky top-4 md:top-5 flex justify-center px-3 md:px-6 lg:px-8">
        <div className="pointer-events-auto max-w-5xl w-full bg-white/60 backdrop-blur-2xl border border-white/30 shadow-lg shadow-slate-900/10 rounded-full px-3 py-2 md:px-5 md:py-2.5 flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-2 md:gap-3">
            <div 
              className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              onClick={scrollToTop}
            >
              <img
                src="/all-read-transparent.png"
                alt="AllFile Pro logo"
                className="w-7 h-7 md:w-8 md:h-8 rounded-[14px]"
              />
            </div>
            <h1 className="text-xs md:text-sm lg:text-base font-semibold tracking-tight text-slate-900">
              AllFile Pro
            </h1>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-[11px] lg:text-xs">
            <button 
              className="text-slate-600 hover:text-primary font-medium transition-colors" 
              onClick={() => scrollToSection('solution')}
            >
              Solutions
            </button>
            <button 
              className="text-slate-600 hover:text-primary font-medium transition-colors" 
              onClick={() => scrollToSection('pricing')}
            >
              Pricing
            </button>
            <button 
              className="text-slate-600 hover:text-primary font-medium transition-colors" 
              onClick={() => scrollToSection('testimonials')}
            >
              Social Proof
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5 lg:gap-3">
            {/* Mobile nav - show all links on mobile */}
            <nav className="md:hidden flex items-center gap-3 text-[11px]">
              <button 
                className="text-slate-600 hover:text-primary font-medium transition-colors" 
                onClick={() => scrollToSection('solution')}
              >
                Features
              </button>
              <button 
                className="text-slate-600 hover:text-primary font-medium transition-colors" 
                onClick={() => scrollToSection('pricing')}
              >
                Pricing
              </button>
              <button 
                className="text-slate-600 hover:text-primary font-medium transition-colors" 
                onClick={() => scrollToSection('testimonials')}
              >
                Social Proof
              </button>
            </nav>
            
            {/* Download button - icon on mobile, text on desktop */}
            <a 
              href="https://urldra.cloud.huawei.com/yIJ6p2uE9y"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-blue-600 text-white px-3.5 md:px-4 py-1.5 rounded-full text-[11px] md:text-xs font-semibold shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap flex items-center justify-center"
            >
              <span className="hidden md:inline">Download Free</span>
              <span className="material-symbols-outlined md:hidden text-base">
                download
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
