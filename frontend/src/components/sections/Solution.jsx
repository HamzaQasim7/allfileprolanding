import React from 'react';
import GlassCard from '../GlassCard';
import PhoneMockup from '../PhoneMockup';

const Solution = () => {
  const features = [
    {
      title: "Universal Format Support",
      icon: "description",
      description: "Stop switching apps. Open PDFs, EPUBs, MOBIs, Docs, and over 18 other formats instantly in a unified, clutter-free interface.",
      formats: ["PDF", "DOCX", "EPUB", "XLSX", "+14 More"],
      imageLeft: true
    },
    {
      title: "Powerful Editing",
      icon: "edit_document",
      description: "Mark up your readings just like paper. Highlight, underline, scribble notes, or fill out forms without missing a beat.",
      features: ["Precision Highlighting & Underlining", "Handwritten Annotations", "PDF Form Filling & Signing"],
      imageLeft: false
    },
    {
      title: "AI Reading Assistant",
      icon: "psychology",
      description: "Don't just read—understand. Our built-in local AI helps you summarize chapters, explain complex jargon, and translate text instantly.",
      capabilities: [
        { icon: "summarize", title: "Instant Summaries", desc: "Get the gist in seconds." },
        { icon: "translate", title: "Smart Translation", desc: "Read in any language." },
        { icon: "help", title: "Contextual Help", desc: "Ask questions about the text." },
        { icon: "record_voice_over", title: "Text-to-Speech", desc: "Listen on the go." }
      ],
      imageLeft: true
    },
    {
      title: "Active Reading Coach",
      icon: "fitness_center",
      description: "Build better habits. Track your reading speed, set daily goals, and visualize your progress with beautiful, motivating charts.",
      stats: ["Reading Timer", "WPM Calculator", "Monthly Challenges"],
      imageLeft: false
    },
    {
      title: "Eye-Friendly Reading",
      icon: "visibility",
      description: "Read for hours without fatigue. Switch between specialized modes designed to protect your vision day or night.",
      modes: [
        { icon: "dark_mode", title: "OLED Dark Mode", desc: "True black for battery saving and comfort." },
        { icon: "texture", title: "Paper Texture", desc: "Warm tint with subtle grain." }
      ],
      imageLeft: true
    }
  ];

  return (
    <section id="solution" className="relative flex h-auto min-h-screen w-full flex-col bg-white font-display overflow-x-hidden text-[#111417]">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Decorative Background Blobs */}
        <div className="bg-blob bg-blue-200 w-96 h-96 top-20 left-0 absolute opacity-40 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="bg-blob bg-purple-200 w-96 h-96 top-40 right-0 absolute opacity-40 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="relative z-10 flex flex-col items-center text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6 animate-float">
            <span className="text-sm font-semibold text-gray-800">✨ The Solution</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Everything You Need, <br/>
            <span className="text-gradient-blue italic pr-2">In One Beautiful App</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            AllFile Pro handles 18+ formats, edits documents, and uses AI to help you understand everything — all offline.
          </p>
        </div>

        {/* Features Layout */}
        <div className="flex flex-col gap-32 relative z-10">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col lg:flex-row${feature.imageLeft ? '' : '-reverse'} items-center gap-12 lg:gap-20`}>
              {/* Phone Mockup */}
              <div className={`w-full lg:w-1/2 flex justify-center ${feature.imageLeft ? 'phone-mockup-container' : 'phone-mockup-right-container'}`}>
                <PhoneMockup>
                  <div className="absolute inset-0 bg-white">
                    <div className="h-full w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                      <div className="text-center p-8">
                        <span className="material-symbols-outlined text-6xl text-primary opacity-50">{feature.icon}</span>
                        <p className="text-sm text-gray-500 mt-4">{feature.title}</p>
                      </div>
                    </div>
                  </div>
                </PhoneMockup>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <GlassCard className="p-8">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 shadow-sm border border-white`}>
                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">{feature.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{feature.description}</p>

                  {/* Format badges */}
                  {feature.formats && (
                    <div className="flex flex-wrap gap-3">
                      {feature.formats.map((format, i) => (
                        <span key={i} className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium text-sm flex items-center gap-2 border border-blue-200">
                          <span className="material-symbols-outlined text-lg">description</span> {format}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Feature list */}
                  {feature.features && (
                    <div className="space-y-4">
                      {feature.features.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group/item">
                          <div className="flex items-center justify-center size-8 rounded-full bg-green-100 text-green-600 transition-colors group-hover/item:bg-green-500 group-hover/item:text-white">
                            <span className="material-symbols-outlined text-sm">check</span>
                          </div>
                          <span className="text-gray-700 font-medium text-lg">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Capabilities grid */}
                  {feature.capabilities && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {feature.capabilities.map((cap, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/50 border border-white/60 hover:shadow-sm transition-shadow">
                          <span className={`material-symbols-outlined text-primary mb-2`}>{cap.icon}</span>
                          <h4 className="font-semibold text-gray-900">{cap.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{cap.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stats */}
                  {feature.stats && (
                    <div className="flex flex-col gap-3">
                      {feature.stats.map((stat, i) => (
                        <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/50 border border-white/60">
                          <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-orange-500">timer</span>
                            <span className="font-medium text-gray-800">{stat}</span>
                          </div>
                          <span className="text-sm font-bold text-gray-500">Track Sessions</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Modes */}
                  {feature.modes && (
                    <div className="grid grid-cols-1 gap-4">
                      {feature.modes.map((mode, i) => (
                        <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${i === 0 ? 'bg-gray-900 text-white' : 'bg-[#fbf0d9] text-[#5f4b32]'} shadow-lg transform transition-transform hover:-translate-y-1`}>
                          <span className="material-symbols-outlined mt-1">{mode.icon}</span>
                          <div>
                            <h5 className="font-bold">{mode.title}</h5>
                            <p className={`text-sm ${i === 0 ? 'text-gray-400' : 'opacity-80'}`}>{mode.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Solution;
