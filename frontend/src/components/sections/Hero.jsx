import React from 'react';
import PhoneMockup from '../PhoneMockup';
import GlassPill from '../GlassPill';

const Hero = () => {
  return (
    <main className="relative z-10 flex-grow flex flex-col justify-center px-4 md:px-8 lg:px-16 py-10 md:py-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left pt-10 lg:pt-0">
          {/* Badge */}
          <div className="flex justify-center lg:justify-start">
            <GlassPill className="px-4 py-1.5 flex items-center gap-2 animate-fadeIn">
              <span className="text-amber-500 text-sm">🏆</span>
              <span className="text-slate-700 font-semibold text-xs tracking-wide uppercase">#1 Document Reader 2024</span>
            </GlassPill>
          </div>

          {/* Headlines */}
          <div className="space-y-4">
            <h1 className="font-serif font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight text-slate-900 tracking-tight">
              Read, Edit & Understand{' '}
              <span className="text-gradient-blue inline-block relative">
                Every Document
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                </svg>
              </span>{' '}
              with AI
            </h1>
            <p className="text-slate-600 text-sm md:text-base lg:text-[15px] font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              18+ file formats. AI-powered insights. Eye-friendly reading. All in one beautiful app — completely free.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 md:gap-3 py-1.5">
            <GlassPill className="px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <div className="flex text-amber-400 text-sm">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
              </div>
              <span className="font-semibold text-slate-800 text-xs">4.8/5</span>
            </GlassPill>
            <GlassPill className="px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-[18px]">smartphone</span>
              <span className="font-semibold text-slate-800 text-xs">500K+ Downloads</span>
            </GlassPill>
            <GlassPill className="px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <span className="material-symbols-outlined text-green-500 text-[18px]">verified_user</span>
              <span className="font-semibold text-slate-800 text-xs">Privacy-first</span>
            </GlassPill>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
            <button className="bg-gradient-to-r from-primary to-indigo-600 text-white h-11 md:h-12 px-6 md:px-7 rounded-lg md:rounded-xl font-semibold text-sm md:text-base shadow-xl shadow-primary/30 flex items-center justify-center gap-2.5 transition-transform hover:-translate-y-0.5 active:translate-y-0 group">
              <span className="material-symbols-outlined">android</span>
              <span>Download Free</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">arrow_forward</span>
            </button>
            <button className="glass-panel text-slate-800 h-11 md:h-12 px-6 md:px-7 rounded-lg md:rounded-xl font-semibold text-sm md:text-base hover:bg-white/60 transition-all flex items-center justify-center gap-2.5 group">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary text-lg ml-0.5">play_arrow</span>
              </div>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Urgency Text */}
          <p className="text-slate-500 text-[11px] md:text-xs font-medium flex items-center justify-center lg:justify-start gap-1.5">
            <span className="material-symbols-outlined text-green-500 text-sm">check</span>
            No credit card • No account • No ads
          </p>
        </div>

        {/* Right Column: 3D Phone Mockup */}
        <div className="lg:col-span-5 relative perspective-container h-[420px] md:h-[520px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Floating Elements (Back Layer) */}
          <div className="absolute top-[15%] right-[10%] glass-pill p-3 rounded-2xl animate-float-delayed z-0 hidden md:flex items-center gap-2 shadow-lg">
            <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">DOC</div>
            <div className="h-1 w-8 bg-slate-200 rounded-full"></div>
          </div>

          {/* 3D Phone Mockup */}
          <PhoneMockup>
            <div className="w-full h-full bg-[#fdf6e3] relative flex flex-col overflow-hidden">
              {/* Phone Status Bar */}
              <div className="h-6 w-full flex justify-between items-center px-4 pt-2">
                <span className="text-[10px] font-bold text-slate-800">9:41</span>
                <div className="flex gap-1">
                  <span className="material-symbols-outlined text-[10px] text-slate-800">signal_cellular_alt</span>
                  <span className="material-symbols-outlined text-[10px] text-slate-800">wifi</span>
                  <span className="material-symbols-outlined text-[10px] text-slate-800">battery_full</span>
                </div>
              </div>

              {/* App Header */}
              <div className="px-4 py-3 flex justify-between items-center border-b border-amber-900/10">
                <span className="material-symbols-outlined text-amber-900/70">menu</span>
                <span className="font-serif font-bold text-amber-900">The Great Gatsby</span>
                <span className="material-symbols-outlined text-amber-900/70">settings</span>
              </div>

              {/* Document Content (Sepia Mode) */}
              <div className="flex-1 p-5 overflow-hidden relative">
                <h3 className="font-serif text-2xl font-bold text-amber-900 mb-4">Chapter 1</h3>
                <div className="space-y-3">
                  {[100, 95, 90, 100, 85, 92, 100, 88].map((width, i) => (
                    <div key={i} className={`h-2 w-[${width}%] bg-amber-900/10 rounded`} style={{ width: `${width}%` }}></div>
                  ))}
                </div>

                {/* AI Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3 rounded-xl border border-white/60 shadow-lg animate-fadeInUp opacity-0 translate-y-4">
                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white shrink-0">
                      <span className="material-symbols-outlined text-sm">smart_toy</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-slate-500 font-semibold mb-1">AI INSIGHT</p>
                      <p className="text-xs text-slate-800 leading-snug">The narrator introduces himself as Nick Carraway, emphasizing his inclination to reserve judgment...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PhoneMockup>

          {/* Floating Elements (Front Layer) */}
          <div className="absolute top-[20%] left-[-20px] glass-pill p-3 rounded-xl animate-float-slow z-20 shadow-xl border border-white/50 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-red-100 rounded-lg flex items-center justify-center text-red-500">
                <span className="material-symbols-outlined">picture_as_pdf</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Contract.pdf</p>
                <p className="text-[10px] text-slate-500">Signed successfully</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[25%] right-[-10px] glass-pill px-4 py-2 rounded-full animate-float z-20 shadow-xl border border-white/50 hidden lg:block">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-500">light_mode</span>
              <span className="text-xs font-bold text-slate-800">Eye Protection On</span>
            </div>
          </div>

          <div className="absolute bottom-[10%] left-[0] glass-pill p-3 rounded-xl animate-float-delayed z-20 shadow-xl border border-white/50 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">thesis_final.epub</p>
                <p className="text-[10px] text-slate-500">Reading now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-xs font-semibold text-slate-500 tracking-widest uppercase">Scroll</span>
        <div className="glass-pill p-2 rounded-full animate-bounce-slow">
          <span className="material-symbols-outlined text-slate-700">arrow_downward</span>
        </div>
      </div>
    </main>
  );
};

export default Hero;
