import React from 'react';

const Solution = () => {

  return (
    <section id="solution" className="relative flex h-auto min-h-screen w-full flex-col bg-white font-display overflow-x-hidden text-[#111417]">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Decorative Background Blobs */}
        <div className="bg-blob bg-blue-200 w-96 h-96 top-20 left-0 absolute opacity-40 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="bg-blob bg-purple-200 w-96 h-96 top-40 right-0 absolute opacity-40 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="bg-blob bg-pink-100 w-80 h-80 top-[800px] left-20 absolute opacity-40 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="bg-blob bg-blue-100 w-80 h-80 top-[1400px] right-20 absolute opacity-40 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Section Header */}
        <div className="relative z-10 flex flex-col items-center text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6 animate-float">
            <span className="text-sm font-semibold text-gray-800">✨ The Solution</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Everything You Need, <br/>
            <span className="gradient-text italic pr-2">In One Beautiful App</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            AllFile Pro handles 18+ formats, edits documents, and uses AI to help you understand everything — all offline.
          </p>
        </div>

        {/* Features Layout */}
        <div className="flex flex-col gap-32 relative z-10">
          {/* Feature 1: Universal Format Support */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 group">
            {/* Phone (Left) */}
            <div className="w-full lg:w-1/2 flex justify-center phone-mockup-container">
              <div className="relative w-[300px] sm:w-[340px] h-[600px] bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-phone phone-mockup">
                <div className="absolute inset-0 bg-white">
                  {/* Screen Content */}
                  <div 
                    className="h-full w-full bg-cover bg-top" 
                    style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcrh0JU9eWp1YRuXcilaeHpr5BF2TnhXt8wsdVZRnMu307oWjqYAGpnDmPqTr3k2zXPx0yETr9Ry6jGoq7mq-kE1rusi2JbkWUBBdE0YFXp1D5iK1QjJ_aDtKI1OHQkxXtWPd97dbntMJdty-z_6m3bBQfJ-OBsg35-mt2ayUmHT_Tn8Fzj2leQNq4-Ch_R_eCFUeGTB0Ro5M9689l4NWk9VkdqSFLGEC9uytlSUSdUMOurBYz6vmcknhLnaa7MaB8liGBUwaPzU8')"}}
                    data-alt="Grid of colorful document icons on a phone screen representing various file formats like PDF, DOCX, and EPUB"
                  ></div>
                  {/* Overlay UI elements for the mockup */}
                  <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-white via-white/90 to-transparent pt-12">
                    <div className="flex justify-around">
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-gray-400">home</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-primary">folder</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-gray-400">settings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="w-full lg:w-1/2">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6 shadow-sm border border-white">
                  <span className="material-symbols-outlined text-3xl">description</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Universal Format Support</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Stop switching apps. Open PDFs, EPUBs, MOBIs, Docs, and over 18 other formats instantly in a unified, clutter-free interface.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-lg bg-red-100 text-red-700 font-medium text-sm flex items-center gap-2 border border-red-200">
                    <span className="material-symbols-outlined text-lg">picture_as_pdf</span> PDF
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-medium text-sm flex items-center gap-2 border border-blue-200">
                    <span className="material-symbols-outlined text-lg">article</span> DOCX
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-orange-100 text-orange-700 font-medium text-sm flex items-center gap-2 border border-orange-200">
                    <span className="material-symbols-outlined text-lg">book_2</span> EPUB
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-green-100 text-green-700 font-medium text-sm flex items-center gap-2 border border-green-200">
                    <span className="material-symbols-outlined text-lg">table_view</span> XLSX
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 font-medium text-sm flex items-center gap-2 border border-gray-200">
                    +14 More
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Powerful Editing */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            {/* Phone (Right) */}
            <div className="w-full lg:w-1/2 flex justify-center phone-mockup-right-container">
              <div className="relative w-[300px] sm:w-[340px] h-[600px] bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-phone phone-mockup">
                <div className="absolute inset-0 bg-white">
                  <div 
                    className="h-full w-full bg-cover bg-center" 
                    style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBd5oXT9qdDuonuap-3jY7Udtlcy4hTRiUW5u2AYl6XM_LrSEatXKV-vSSZWP2cNP1Ld6Li0sXvHrmE2Zvv9Q1d4TU4h_MSm-FIQMJIIf86uGina_H02Te98EvKHABdMoroPx7uEEggHPr6Re23VJ1B5_x2ddnxO3soRascQVn6BjlwMq6XDdQ2vTzU1BD__wubvSpCDX37L8LSD4dJd0gGMEQiNHK2Qv4d7tsOj8I2et_mRqKOUPh9sXpI5cfoiE_YHvzedgLWiL8')"}}
                    data-alt="Close up of a phone screen displaying a document with text highlighted in yellow and handwritten notes in the margins"
                  ></div>
                  {/* Floating UI Element */}
                  <div className="absolute top-24 right-4 bg-white rounded-lg shadow-lg p-2 flex flex-col gap-3 border border-gray-100">
                    <span className="w-6 h-6 rounded-full bg-yellow-300 block border border-gray-200"></span>
                    <span className="w-6 h-6 rounded-full bg-green-300 block border border-gray-200"></span>
                    <span className="w-6 h-6 rounded-full bg-pink-300 block border border-gray-200"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content (Left) */}
            <div className="w-full lg:w-1/2">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-100 text-purple-600 mb-6 shadow-sm border border-white">
                  <span className="material-symbols-outlined text-3xl">edit_document</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Powerful Editing</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Mark up your readings just like paper. Highlight, underline, scribble notes, or fill out forms without missing a beat.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group/item">
                    <div className="flex items-center justify-center size-8 rounded-full bg-green-100 text-green-600 transition-colors group-hover/item:bg-green-500 group-hover/item:text-white">
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Precision Highlighting & Underlining</span>
                  </div>
                  <div className="flex items-center gap-4 group/item">
                    <div className="flex items-center justify-center size-8 rounded-full bg-green-100 text-green-600 transition-colors group-hover/item:bg-green-500 group-hover/item:text-white">
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                    <span className="text-gray-700 font-medium text-lg">Handwritten Annotations</span>
                  </div>
                  <div className="flex items-center gap-4 group/item">
                    <div className="flex items-center justify-center size-8 rounded-full bg-green-100 text-green-600 transition-colors group-hover/item:bg-green-500 group-hover/item:text-white">
                      <span className="material-symbols-outlined text-sm">check</span>
                    </div>
                    <span className="text-gray-700 font-medium text-lg">PDF Form Filling & Signing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: AI Reading Assistant */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Phone (Left) */}
            <div className="w-full lg:w-1/2 flex justify-center phone-mockup-container">
              <div className="relative w-[300px] sm:w-[340px] h-[600px] bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-phone phone-mockup">
                <div className="absolute inset-0 bg-white">
                  <div 
                    className="h-full w-full bg-cover bg-center opacity-80" 
                    style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkETpkU1TQx0kTNRSMxnMRxN6mylXHl4OPXMk3AQibwvDwB1Ep8Dl2sr1vXnOntMotnYqATkOWM5QC2ZHjrIFgztKUVArTnP-zQ-nscf3N1qPQlT7No4nN5epWNiG7RTwuANZT0DUdDkCvcNmERCLg2133j1GAmFghNxFB_LINHRnJmy7iEG3vAMETCw5NxSmgA3ikIxlO1pCID_K_vaFNSa5HkaFNFGWNooWNmJ8rKODtOnHK5_Z0ugFnZe5kLOa2ydt3irOgnxo')"}}
                    data-alt="Phone screen showing a book page with a sleek AI chat interface overlay at the bottom summarizing the text"
                  ></div>
                  {/* AI Overlay */}
                  <div className="absolute bottom-0 inset-x-0 h-1/2 bg-white/95 backdrop-blur-sm rounded-t-3xl p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                    <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
                    <div className="flex gap-3 mb-4">
                      <div className="size-8 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-sm">auto_awesome</span>
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-2xl rounded-tl-none p-3 text-sm text-gray-700">
                        Here is a summary of Chapter 4: The protagonist discovers the hidden map inside the old clock...
                      </div>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      <button className="px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-600 whitespace-nowrap hover:bg-gray-50">Explain Key Terms</button>
                      <button className="px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-600 whitespace-nowrap hover:bg-gray-50">Translate Page</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="w-full lg:w-1/2">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 text-primary mb-6 shadow-sm border border-white">
                  <span className="material-symbols-outlined text-3xl">psychology</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">AI Reading Assistant</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Don't just read—understand. Our built-in local AI helps you summarize chapters, explain complex jargon, and translate text instantly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/50 border border-white/60 hover:shadow-sm transition-shadow">
                    <span className="material-symbols-outlined text-primary mb-2">summarize</span>
                    <h4 className="font-semibold text-gray-900">Instant Summaries</h4>
                    <p className="text-sm text-gray-500 mt-1">Get the gist in seconds.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/50 border border-white/60 hover:shadow-sm transition-shadow">
                    <span className="material-symbols-outlined text-purple-600 mb-2">translate</span>
                    <h4 className="font-semibold text-gray-900">Smart Translation</h4>
                    <p className="text-sm text-gray-500 mt-1">Read in any language.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/50 border border-white/60 hover:shadow-sm transition-shadow">
                    <span className="material-symbols-outlined text-orange-500 mb-2">help</span>
                    <h4 className="font-semibold text-gray-900">Contextual Help</h4>
                    <p className="text-sm text-gray-500 mt-1">Ask questions about the text.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/50 border border-white/60 hover:shadow-sm transition-shadow">
                    <span className="material-symbols-outlined text-green-500 mb-2">record_voice_over</span>
                    <h4 className="font-semibold text-gray-900">Text-to-Speech</h4>
                    <p className="text-sm text-gray-500 mt-1">Listen on the go.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Active Reading Coach */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            {/* Phone (Right) */}
            <div className="w-full lg:w-1/2 flex justify-center phone-mockup-right-container">
              <div className="relative w-[300px] sm:w-[340px] h-[600px] bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-phone phone-mockup">
                <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center p-6">
                  {/* Stats Abstract Visualization */}
                  <div className="w-full bg-white rounded-2xl p-6 shadow-sm mb-6">
                    <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Reading Habit</h4>
                    <div className="flex items-end gap-2 h-32 w-full justify-between">
                      <div className="w-1/6 bg-primary/20 rounded-t-lg h-[40%]"></div>
                      <div className="w-1/6 bg-primary/20 rounded-t-lg h-[60%]"></div>
                      <div className="w-1/6 bg-primary/20 rounded-t-lg h-[30%]"></div>
                      <div className="w-1/6 bg-primary rounded-t-lg h-[80%] relative group">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">45m</div>
                      </div>
                      <div className="w-1/6 bg-primary/20 rounded-t-lg h-[50%]"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-white p-4 rounded-2xl shadow-sm text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                      <div className="text-xs text-gray-500 font-medium">Books Finished</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-sm text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-1">240</div>
                      <div className="text-xs text-gray-500 font-medium">WPM Speed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content (Left) */}
            <div className="w-full lg:w-1/2">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-orange-100 text-orange-600 mb-6 shadow-sm border border-white">
                  <span className="material-symbols-outlined text-3xl">fitness_center</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Active Reading Coach</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Build better habits. Track your reading speed, set daily goals, and visualize your progress with beautiful, motivating charts.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/50 border border-white/60">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-orange-500">timer</span>
                      <span className="font-medium text-gray-800">Reading Timer</span>
                    </div>
                    <span className="text-sm font-bold text-gray-500">Track Sessions</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/50 border border-white/60">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-orange-500">speed</span>
                      <span className="font-medium text-gray-800">WPM Calculator</span>
                    </div>
                    <span className="text-sm font-bold text-gray-500">Improve Speed</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/50 border border-white/60">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-orange-500">emoji_events</span>
                      <span className="font-medium text-gray-800">Monthly Challenges</span>
                    </div>
                    <span className="text-sm font-bold text-gray-500">Stay Motivated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5: Eye-Friendly Reading */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pb-20">
            {/* Phone (Left) */}
            <div className="w-full lg:w-1/2 flex justify-center phone-mockup-container">
              <div className="relative w-[300px] sm:w-[340px] h-[600px] bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-phone phone-mockup">
                <div className="absolute inset-0 bg-[#fbf0d9] flex flex-col">
                  {/* Sepia Mode Content */}
                  <div className="p-8 pt-16 font-serif text-[#5f4b32] leading-relaxed text-lg h-full overflow-hidden relative">
                    <h2 className="text-2xl font-bold mb-4">Chapter 1</h2>
                    <p className="mb-4">The night was warm and the air smelled of salt and jasmine. He stood on the balcony, watching the lights of the city flicker below like distant stars caught in a net.</p>
                    <p>This mode is designed to reduce eye strain during long reading sessions, mimicking the feel of real paper.</p>
                    {/* Mode Switcher Animation Simulation */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 bg-[#5f4b32]/10 p-2 rounded-full backdrop-blur-sm">
                      <div className="size-10 rounded-full bg-white shadow-sm flex items-center justify-center cursor-pointer">
                        <span className="material-symbols-outlined text-gray-800 text-sm">light_mode</span>
                      </div>
                      <div className="size-10 rounded-full bg-[#fbf0d9] border border-[#5f4b32]/20 flex items-center justify-center cursor-pointer ring-2 ring-primary">
                        <span className="material-symbols-outlined text-[#5f4b32] text-sm">texture</span>
                      </div>
                      <div className="size-10 rounded-full bg-gray-900 flex items-center justify-center cursor-pointer">
                        <span className="material-symbols-outlined text-gray-400 text-sm">dark_mode</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content (Right) */}
            <div className="w-full lg:w-1/2">
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-teal-100 text-teal-600 mb-6 shadow-sm border border-white">
                  <span className="material-symbols-outlined text-3xl">visibility</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Eye-Friendly Reading</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Read for hours without fatigue. Switch between specialized modes designed to protect your vision day or night.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-900 text-white shadow-lg transform transition-transform hover:-translate-y-1">
                    <span className="material-symbols-outlined mt-1">dark_mode</span>
                    <div>
                      <h5 className="font-bold">OLED Dark Mode</h5>
                      <p className="text-sm text-gray-400">True black for battery saving and comfort.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#fbf0d9] text-[#5f4b32] shadow-sm border border-[#eaddc5] transform transition-transform hover:-translate-y-1">
                    <span className="material-symbols-outlined mt-1">texture</span>
                    <div>
                      <h5 className="font-bold">Paper Texture</h5>
                      <p className="text-sm opacity-80">Warm tint with subtle grain.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Solution;
