import React from 'react';
import GlassCard from '../GlassCard';

const Pricing = () => {
  const features = [
    "Universal Format Support",
    "AI Summaries",
    "OCR Scanner",
    "Dark / E-Ink Mode",
    "Offline Editing",
    "Cloud Sync",
    "No Data Tracking",
    "PDF Annotation",
    "Text-to-Speech",
    "File Compression",
    "Password Protection",
    "Priority Support"
  ];

  return (
    <section id="pricing" className="flex-grow flex flex-col items-center justify-start pt-12 pb-24 px-4 sm:px-6 bg-background-light">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-6">
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">💎 Premium Features</span>
        </div>
        <h1 className="text-slate-900 dark:text-white tracking-tight text-4xl md:text-[56px] font-bold leading-[1.1] mb-6">
          Everything You Need. <br className="hidden md:block"/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-600">Completely Free.</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-[20px] font-normal leading-relaxed max-w-2xl mx-auto">
          No ads. No subscriptions. No hidden fees. Just a powerful app that respects you.
        </p>
      </div>

      {/* Pricing Card */}
      <div className="w-full max-w-[800px] relative group perspective-1000">
        <div className="rounded-[32px] p-[3px] bg-gradient-to-br from-blue-500 via-primary to-purple-600 shadow-2xl shadow-blue-500/20">
          <div className="relative h-full w-full rounded-[29px] bg-white/95 dark:bg-slate-900/95 glass-panel p-8 md:p-16 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <div className="bg-gradient-to-r from-blue-500 to-primary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-blue-500/30 transform rotate-2 hover:rotate-0 transition-transform cursor-default">
                🎉 Launch Special
              </div>
            </div>

            {/* Price */}
            <div className="mb-10 mt-4">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-slate-400 dark:text-slate-500 text-xl font-medium line-through decoration-slate-400">$49.99</span>
                <div className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">100% Off</div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
                $0 <span className="text-2xl md:text-3xl font-bold text-slate-600 dark:text-slate-400 tracking-normal">FOREVER.</span>
              </h2>
              <p className="text-primary font-bold text-sm tracking-widest mt-2 uppercase opacity-80">Seriously.</p>
            </div>

            {/* Features Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 text-left mb-12 max-w-2xl">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <span className="material-symbols-outlined text-emerald-500 shrink-0 select-none">check_circle</span>
                  <span className="text-[17px] font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Area */}
            <div className="flex flex-col items-center gap-4 w-full">
              <button className="relative w-full max-w-sm group overflow-hidden rounded-xl bg-white dark:bg-slate-800 border-2 border-primary text-primary dark:text-primary shadow-xl hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 py-4 px-8 animate-pulse-slow transform hover:-translate-y-1">
                <div className="absolute inset-0 w-full h-full bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <span className="relative z-10 text-xl md:text-2xl font-bold tracking-tight flex items-center justify-center gap-3">
                  DOWNLOAD FREE NOW
                  <span className="material-symbols-outlined text-[28px]">download</span>
                </span>
              </button>
              <p className="text-xs font-medium text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">bolt</span>
                500KB download • Android 8.0+
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ / Trust Section */}
      <div className="max-w-[800px] w-full mt-12 px-4">
        <GlassCard className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:items-start">
            <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-primary">
              <span className="material-symbols-outlined text-3xl">psychology_alt</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Why is it completely free?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We believe knowledge should be accessible to everyone. Our mission is to build the best document experience on Android first. 
                In the future, we plan to introduce optional team collaboration features for enterprises to sustain the project, but the core personal app you download today will remain <strong className="text-slate-900 dark:text-white">free forever</strong> without ads.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default Pricing;
