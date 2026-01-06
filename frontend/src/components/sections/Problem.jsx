import React from 'react';
import GlassCard from '../GlassCard';

const Problem = () => {
  const problems = [
    {
      emoji: "😩",
      title: "App Overload",
      description: "Switching between PDF readers, Word editors, and Epub viewers kills your flow."
    },
    {
      emoji: "🤯",
      title: "Editing Nightmare",
      description: "Most free readers don't let you highlight or annotate without paying extra."
    },
    {
      emoji: "😓",
      title: "Your Data at Risk",
      description: "Cloud-only editors upload your private contracts and journals to unknown servers."
    }
  ];

  return (
    <section id="problem" className="relative w-full bg-paper px-4 py-20 md:px-10 lg:py-28">
      {/* Decorative gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] h-[500px] w-[500px] rounded-full bg-white/40 blur-3xl"></div>
        <div className="absolute top-[20%] right-[0%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="layout-content-container relative mx-auto flex max-w-[1100px] flex-col items-center">
        {/* Header Group */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="glass-pill mb-6 inline-flex h-8 items-center justify-center gap-x-2 rounded-full px-5 py-1 transition-transform hover:scale-105">
            <p className="text-[#111417] text-sm font-medium leading-normal">😤 The Problem</p>
          </div>
          <h1 className="mb-6 max-w-3xl font-serif text-[42px] font-bold leading-[1.1] tracking-tight text-[#111417] md:text-[56px]">
            Drowning in Different Apps?
          </h1>
          <p className="max-w-2xl text-lg font-normal leading-relaxed text-[#4e5d6d] md:text-[20px]">
            Most people juggle 5-7 apps just to handle their documents. Sound familiar?
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <GlassCard
              key={index}
              className="group relative flex flex-col gap-5 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white/70"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 text-4xl shadow-sm">
                {problem.emoji}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-2xl font-bold leading-tight text-[#111417]">{problem.title}</h3>
                <p className="text-[#647487] text-base font-normal leading-relaxed">
                  {problem.description}
                </p>
              </div>
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/0 transition-colors duration-300 group-hover:border-primary/10 pointer-events-none"></div>
            </GlassCard>
          ))}
        </div>

        {/* Transition / CTA */}
        <div className="mt-20 flex justify-center">
          <button className="group flex flex-col items-center gap-2 transition-opacity hover:opacity-80">
            <span className="text-sm font-bold tracking-[0.05em] text-[#111417] uppercase">Here's the solution</span>
            <div className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-blue-500/30">
              <span className="material-symbols-outlined text-[24px]">arrow_downward</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problem;
