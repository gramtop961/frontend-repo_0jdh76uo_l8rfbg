import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Counter = ({ to, label }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200; // ms
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const current = Math.floor(progress * to);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [to]);
  return (
    <div className="text-center">
      <div className="text-4xl font-semibold text-white">{value}%</div>
      <div className="mt-1 text-sm text-slate-300">{label}</div>
    </div>
  );
};

const LineChart = () => {
  // Simple animated line chart path
  const controls = useAnimation();
  useEffect(() => {
    controls.start({ pathLength: 1, transition: { duration: 2.2, ease: 'easeInOut' } });
  }, [controls]);

  return (
    <svg viewBox="0 0 400 160" className="h-40 w-full">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M10 120 C 60 80, 90 70, 130 90 S 200 130, 250 95 S 330 60, 390 75"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={controls}
        strokeLinecap="round"
      />
      <motion.path
        d="M10 120 C 60 80, 90 70, 130 90 S 200 130, 250 95 S 330 60, 390 75 L 390 160 L 10 160 Z"
        fill="url(#grad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      />
    </svg>
  );
};

const Bars = () => {
  const data = [
    { label: 'IT', value: 62 },
    { label: 'DE', value: 58 },
    { label: 'FR', value: 55 },
    { label: 'ES', value: 60 },
    { label: 'NL', value: 64 },
  ];
  return (
    <div className="grid grid-cols-5 items-end gap-3">
      {data.map((d, i) => (
        <div key={d.label} className="text-center">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${d.value}%` }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: i * 0.05 }}
            className="mx-auto w-8 rounded-t-md bg-gradient-to-t from-cyan-500/30 to-cyan-400"
            style={{ minHeight: '8px' }}
          />
          <div className="mt-2 text-xs text-slate-300">{d.label}</div>
        </div>
      ))}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="relative w-full bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(14,165,233,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight">Adozione dei ChatBot medici in Europa</h3>
            <p className="mt-3 text-slate-300">
              Dati 2024 – Crescente utilizzo in contesti clinici e telemedicina. Trend stimato su fonti pubbliche e
              casi d’uso reali. I benefici includono riduzione dei tempi di triage fino al 35% e aumento della
              soddisfazione paziente del 28% in media.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <LineChart />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Counter to={35} label="Riduzione tempi triage" />
              <Counter to={28} label="Soddisfazione paziente" />
              <Counter to={42} label="Automazione richieste" />
            </div>
          </div>
          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-baseline justify-between">
                <h4 className="text-lg font-medium">Utilizzo per Paese (stima)</h4>
                <span className="text-xs text-slate-300">Fonte: analisi settore e report UE</span>
              </div>
              <div className="mt-6">
                <Bars />
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <li>• Ospedali che adottano AI: ~48%</li>
                <li>• Cliniche private: ~57%</li>
                <li>• Telemedicina: ~63%</li>
                <li>• Assistenza domiciliare: ~36%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
