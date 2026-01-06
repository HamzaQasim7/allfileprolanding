import React, { useState } from 'react';
import GlassCard from '../GlassCard';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is AllFile Pro really 100% free?",
      answer: "Yes! AllFile Pro is completely free to download and use. We believe in accessible tools for everyone. While we may introduce optional premium themes or cloud sync features in the future, the core reading, AI assistance, and editing capabilities will always remain free."
    },
    {
      question: "Does the AI assistant work offline?",
      answer: "Absolutely. We utilize an on-device lightweight language model that processes your text directly on your phone. This ensures you get smart summaries and reading assistance even when you're on a plane or completely disconnected from the internet."
    },
    {
      question: "Can I edit text inside PDF files?",
      answer: "Yes, basic text editing and advanced annotation tools are built right in. You can highlight, underline, add sticky notes, and even modify existing text in unlocked PDF documents without needing a secondary app."
    },
    {
      question: "Which Android versions are supported?",
      answer: "AllFile Pro is optimized for Android 10 and newer to take advantage of the latest system privacy features and UI smoothness. However, a 'Lite' version with core reading features is available for devices running Android 8.0 and up."
    },
    {
      question: "How much storage space does the app need?",
      answer: "We pride ourselves on efficiency. The base app is under 45MB. If you choose to download the offline AI models for enhanced summarization, it may require an additional 150MB, but this is optional and can be managed in settings."
    },
    {
      question: "Is my document data kept private?",
      answer: "Privacy is our first priority. AllFile Pro operates locally. We do not upload your documents to any cloud servers unless you explicitly use a cloud backup integration (like Google Drive or Dropbox). Your reading habits and file contents stay on your device."
    },
    {
      question: "Can I use the app completely offline?",
      answer: "Yes! AllFile Pro is designed to work completely offline. The only time you need internet is to import files from cloud services like Google Drive."
    },
    {
      question: "Will the app stay free forever?",
      answer: "The current feature set you enjoy today will remain free forever. We support development through optional, non-intrusive donations and potential future premium themes for power users who want extensive customization."
    }
  ];

  return (
    <section id="faq" className="relative flex min-h-screen w-full flex-col overflow-hidden bg-paper font-display text-[#111417] dark:text-white antialiased transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 mix-blend-multiply dark:mix-blend-overlay">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-amber-100 dark:bg-blue-900/20 blur-[120px]"></div>
      </div>

      <div className="layout-container relative z-10 flex h-full grow flex-col px-4 md:px-6 lg:px-8 py-12 md:py-20">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center w-full max-w-[960px] mx-auto mb-12">
          <div className="inline-flex items-center justify-center bg-primary/10 dark:bg-primary/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm border border-primary/5">
            <span className="text-primary dark:text-blue-300 text-sm font-bold leading-normal tracking-[0.015em]">❓ Questions?</span>
          </div>
          <h1 className="text-[#111417] dark:text-white tracking-tight text-4xl md:text-[56px] font-bold leading-[1.1] text-center max-w-3xl">
            Everything You Need to Know
          </h1>
          <p className="mt-4 text-[#647487] dark:text-slate-400 text-center text-lg max-w-2xl font-medium">
            Common questions about AllFile Pro's features, privacy, and compatibility.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="w-full max-w-[900px] mx-auto">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                open={openIndex === index}
                className="glass-card group flex flex-col rounded-2xl border-2 border-black/5 dark:border-white/10 px-6 py-4 md:px-8 md:py-6 cursor-pointer transition-all hover:border-primary/20 dark:hover:border-primary/40"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <summary className="flex items-center justify-between gap-6 w-full select-none list-none">
                  <h3 className="text-[#111417] dark:text-white text-lg font-semibold leading-normal">{faq.question}</h3>
                  <span className={`material-symbols-outlined text-primary transition-transform duration-300 bg-primary/10 rounded-full p-1 ${openIndex === index ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </summary>
                <div className="pt-4 pr-4">
                  <p className="text-[#4b5563] dark:text-slate-300 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Bottom Graphic Element */}
        <div className="mt-16 flex justify-center opacity-80">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/40 dark:bg-black/20 rounded-full border border-black/5 dark:border-white/5 backdrop-blur-sm">
            <span className="material-symbols-outlined text-primary text-sm">mail</span>
            <span className="text-sm text-[#647487] dark:text-slate-400 font-medium">Still have questions? Contact support@allfilepro.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
