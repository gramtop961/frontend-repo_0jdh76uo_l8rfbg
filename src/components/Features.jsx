import React from 'react';
import { Brain, Shield, HeartPulse, Lock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Brain,
    title: 'Comprensione clinica',
    desc: 'Analisi sintomi e triage preliminare con suggerimenti basati su evidenze.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Certificazioni & Compliance',
    desc: 'Conformità GDPR, ISO/IEC 27001 e best practice di sicurezza.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Lock,
    title: 'Privacy by design',
    desc: 'Crittografia end‑to‑end e controllo dei dati a livello enterprise.',
    color: 'from-fuchsia-400 to-purple-500',
  },
  {
    icon: Globe,
    title: 'Multilingua europeo',
    desc: 'Supporto nativo per le principali lingue dell’UE con adattamento culturale.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: HeartPulse,
    title: 'Monitoraggio paziente',
    desc: 'Integrazione con wearable e cartelle cliniche per insights in tempo reale.',
    color: 'from-rose-400 to-red-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(15,23,42,0)_0%,rgba(34,211,238,0.06)_40%,rgba(15,23,42,0)_80%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Progettato per la Sanità europea
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-slate-300"
          >
            Un set completo di funzionalità per supportare pazienti, cliniche e ospedali con standard professionali.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur-md"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-slate-900 shadow-[0_10px_40px_-10px_rgba(34,211,238,0.5)]`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>

              {/* Animated accent lines */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rotate-45 bg-gradient-to-br from-white/10 to-transparent blur-xl transition-opacity duration-300 group-hover:opacity-70" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
