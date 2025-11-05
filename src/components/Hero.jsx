import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Shield, HeartPulse, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft glow overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_20%,rgba(56,189,248,0.15),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_30%,rgba(14,165,233,0.12),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-3 py-1 text-xs backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-cyan-300" />
          <span className="text-cyan-100">MedBot • AI Medical ChatBot</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-3xl text-left text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Assistenza sanitaria intelligente, sicura e sempre disponibile.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 max-w-2xl text-lg text-slate-200"
        >
          MedBot combina competenza clinica e intelligenza artificiale per fornire risposte affidabili,
          triage preliminare e supporto continuo a pazienti e professionisti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)] transition hover:bg-cyan-400"
          >
            Inizia ora
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <Shield className="h-5 w-5 text-cyan-300" /> Scopri di più
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl bg-cyan-500/20">
              <div className="absolute inset-0 animate-pulse rounded-xl bg-cyan-400/20 blur-md" />
              <HeartPulse className="relative z-10 m-2 h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <p className="text-sm text-slate-300">Affidabilità clinica</p>
              <p className="text-xs text-slate-400">Guidato da linee guida e letteratura</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl bg-emerald-500/20">
              <div className="absolute inset-0 animate-pulse rounded-xl bg-emerald-400/20 blur-md" />
              <Shield className="relative z-10 m-2 h-6 w-6 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm text-slate-300">Sicurezza & privacy</p>
              <p className="text-xs text-slate-400">Crittografia end‑to‑end</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 h-[1px] w-40 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-sm text-slate-400"
        >
          Scorri per esplorare
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
