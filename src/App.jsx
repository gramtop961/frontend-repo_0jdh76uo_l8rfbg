import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-slate-300">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm">© {new Date().getFullYear()} MedBot • Innovazione per la salute</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
