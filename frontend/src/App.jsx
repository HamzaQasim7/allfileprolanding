import React from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import SocialProof from './components/sections/SocialProof';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import Privacy from './components/sections/Privacy';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 z-0 bg-paper-texture opacity-100 pointer-events-none"></div>
      <div className="fixed inset-0 z-0 hero-gradient pointer-events-none"></div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-12">
          <SocialProof />
        </div>
        <Problem />
        <Solution />
        <Privacy />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
