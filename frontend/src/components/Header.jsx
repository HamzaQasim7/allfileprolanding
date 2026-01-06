import React from 'react';

const Header = () => {
  return (
    <header className="relative z-50 pointer-events-none">
      {/* Floating, fully rounded nav container */}
      <div className="sticky top-4 md:top-5 flex justify-center px-3 md:px-6 lg:px-8">
        <div className="pointer-events-auto max-w-5xl w-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-white/40 dark:border-slate-700 shadow-lg shadow-slate-900/10 rounded-full px-3 py-2 md:px-5 md:py-2.5 flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center justify-center">
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
            <a className="text-slate-600 hover:text-primary font-medium transition-colors" href="#features">
              Features
            </a>
            <a className="text-slate-600 hover:text-primary font-medium transition-colors" href="#pricing">
              Pricing
            </a>
            <a className="text-slate-600 hover:text-primary font-medium transition-colors" href="#about">
              About
            </a>
            <a className="text-slate-600 hover:text-primary font-medium transition-colors" href="#support">
              Support
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5 lg:gap-3">
            <a
              className="hidden sm:inline-flex text-[11px] text-slate-600 font-medium hover:text-primary"
              href="#signin"
            >
              Sign in
            </a>
            <button className="bg-primary hover:bg-blue-600 text-white px-3.5 md:px-4 py-1.5 rounded-full text-[11px] md:text-xs font-semibold shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap">
              Download Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
