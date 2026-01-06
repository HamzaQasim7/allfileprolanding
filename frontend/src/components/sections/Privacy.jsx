import React from 'react';
import GlassCard from '../GlassCard';
import GlassPill from '../GlassPill';

const Privacy = () => {
  const features = [
    {
      emoji: "🔒",
      title: "Fully Offline",
      description: "No internet connection required for viewing or editing your important files."
    },
    {
      emoji: "📱",
      title: "Your Device Only",
      description: "Sandbox environment ensures total isolation from other apps and trackers."
    },
    {
      emoji: "⚡",
      title: "Lightning Fast",
      description: "No upload/download times. Instant file opening directly from storage."
    },
    {
      emoji: "🚫",
      title: "Zero Sign-ups",
      description: "No account needed. Just download, open, and start reading immediately."
    }
  ];

  return (
    <section id="privacy" className="relative flex w-full flex-col overflow-hidden bg-[#1A1A1A] text-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] to-[#2C2C2C] z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 layout-container flex h-full grow flex-col px-4 md:px-10 lg:px-40 py-20">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 items-center">
            {/* Header Section */}
            <div className="flex flex-col items-center gap-6 text-center max-w-[800px] mb-16">
              <GlassPill className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/30 bg-green-500/10 backdrop-blur-sm">
                <span className="material-symbols-outlined text-green-500 text-[18px]">lock</span>
                <span className="text-green-500 text-sm font-semibold tracking-wide uppercase">Privacy First</span>
              </GlassPill>
              <h2 className="text-4xl md:text-[56px] font-black leading-[1.1] tracking-tight text-white">
                Your Documents <br className="hidden md:block"/>
                <span className="text-gradient-green">Stay With You</span>
              </h2>
              <p className="text-white/80 text-lg md:text-[20px] font-normal leading-relaxed max-w-[600px]">
                100% offline processing. Zero servers. Your files never leave your device's secure sandbox.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-24">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 flex flex-col gap-6 h-full hover:border-green-500/30 transition-all">
                  <div className="text-4xl">{feature.emoji}</div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">{feature.title}</h3>
                    <p className="text-white/70 text-base font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="w-full max-w-[960px] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-1">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-6 text-white text-lg font-bold w-1/2">Feature Comparison</th>
                      <th className="px-6 py-6 text-center w-1/4">
                        <div className="flex flex-col items-center gap-1">
                          <span className="text-primary font-bold text-lg">AllFile Pro</span>
                          <span className="text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded-full">Your App</span>
                        </div>
                      </th>
                      <th className="px-6 py-6 text-center text-white/60 text-lg font-medium w-1/4">Cloud Editors</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 text-base font-medium">Privacy Level</td>
                      <td className="px-6 py-5 text-center">
                        <div className="flex items-center justify-center gap-2 text-green-500 font-semibold">
                          <span className="material-symbols-outlined">shield_lock</span>
                          Device-Only
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center text-white/50">Shared Server</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 text-base font-medium">Processing Speed</td>
                      <td className="px-6 py-5 text-center">
                        <div className="flex items-center justify-center gap-2 text-green-500 font-semibold">
                          <span className="material-symbols-outlined">bolt</span>
                          Instant
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center text-white/50">Network Dependent</td>
                    </tr>
                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 text-base font-medium">Offline Access</td>
                      <td className="px-6 py-5 text-center">
                        <div className="flex items-center justify-center">
                          <span className="material-symbols-outlined text-green-500 text-[28px]">check_circle</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <div className="flex items-center justify-center">
                          <span className="material-symbols-outlined text-red-400/70 text-[28px]">cancel</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5 text-base font-medium">Monthly Cost</td>
                      <td className="px-6 py-5 text-center">
                        <div className="flex items-center justify-center gap-2 text-white font-bold text-lg">
                          $0.00
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center text-white/50">$10 - $30 / mo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-white/40 text-sm">Security architecture verified by internal audit • Last updated 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
