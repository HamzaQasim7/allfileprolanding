import React from 'react';
import GlassPill from '../GlassPill';

const FinalCTA = () => {
  const badges = [
    { text: "Free Forever", icon: "check" },
    { text: "No Ads", icon: "check" },
    { text: "No Account", icon: "check" },
    { text: "100% Private", icon: "check" }
  ];

  return (
    <section id="cta" className="relative flex min-h-[800px] w-full flex-col items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#4a8fe3] via-[#8b5cf6] to-[#ec4899] animate-gradient-xy opacity-90"></div>

      {/* Floating Particles */}
      <div className="absolute top-[15%] left-[10%] text-6xl opacity-20 animate-float pointer-events-none select-none">📄</div>
      <div className="absolute bottom-[20%] right-[15%] text-6xl opacity-20 animate-float-delayed pointer-events-none select-none">🤖</div>
      <div className="absolute top-[25%] right-[20%] text-5xl opacity-25 animate-float pointer-events-none select-none">✨</div>
      <div className="absolute bottom-[15%] left-[20%] text-5xl opacity-20 animate-float-delayed pointer-events-none select-none">👁️</div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex w-full max-w-[960px] flex-col items-center justify-center px-4 py-20 text-center">
        {/* Headlines */}
        <div className="flex flex-col gap-6 mb-12 items-center">
          <h1 className="text-white text-5xl md:text-6xl lg:text-[72px] font-black leading-[1.1] tracking-tight max-w-[800px] drop-shadow-lg">
            Ready to Read Smarter?
          </h1>
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-[720px] drop-shadow-sm">
            Join 500,000+ users who read, edit, and learn better with AllFile Pro.
          </p>
        </div>

        {/* CTA Buttons Area */}
        <div className="flex flex-col items-center gap-4 w-full">
          {/* Primary Action Button */}
          <button className="group relative flex h-auto min-h-[80px] w-full max-w-[400px] cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-xl bg-white px-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 animate-pulse-slow">
            <span className="material-symbols-outlined text-[#4a8fe3] !text-[32px]">shop</span>
            <div className="flex flex-col items-start text-left">
              <span className="text-[#4a8fe3] text-xs font-bold uppercase tracking-wider opacity-80">Get it on</span>
              <span className="text-[#4a8fe3] text-2xl md:text-[28px] font-bold leading-none tracking-tight">Google Play</span>
            </div>
            <div className="absolute inset-0 -z-10 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-lg"></div>
          </button>

          {/* Fallback Text / Urgency Text */}
          <p className="text-white/80 text-sm font-medium pt-2 pb-8 flex items-center gap-2">
            <span>⚡</span>
            <span>500KB download</span>
            <span className="opacity-50">•</span>
            <span>Works on Android 8.0+</span>
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 max-w-[800px]">
          {badges.map((badge, index) => (
            <GlassPill key={index} className="flex h-10 items-center justify-center gap-x-2 px-5 py-2 shadow-sm transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-[#4ade80]" style={{ fontSize: '20px', fontWeight: 700 }}>check</span>
              <span className="text-white text-sm md:text-base font-semibold tracking-wide">{badge.text}</span>
            </GlassPill>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
