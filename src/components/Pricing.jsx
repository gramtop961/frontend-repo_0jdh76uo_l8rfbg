import React from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '€39',
    period: '/mese',
    highlight: false,
    features: [
      '100 conversazioni/mese',
      'Triage AI base',
      'Report mensile',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '€99',
    period: '/mese',
    highlight: true,
    badge: 'Più scelto',
    features: [
      'Conversazioni illimitate',
      'Motore clinico avanzato',
      'Integrazioni EHR/EMR',
      'Supporto prioritario',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Contattaci',
    period: '',
    highlight: false,
    features: [
      'SLA dedicato 99.9%',
      'On‑prem o VPC',
      'Addestramento personalizzato',
      'Compliance & audit',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_100%,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Piani trasparenti per crescere in sicurezza
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-3 text-slate-300"
          >
            Scegli il piano adatto al tuo studio, clinica o ospedale. Upgrade e downgrade in qualsiasi momento.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl border ${
                p.highlight ? 'border-cyan-400/40 bg-white/10 shadow-[0_20px_80px_-20px_rgba(34,211,238,0.4)]' : 'border-white/10 bg-white/5'
              } p-6 backdrop-blur-md`}
            >
              {p.highlight && (
                <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                  <Star className="h-4 w-4" /> {p.badge}
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-medium">{p.name}</h3>
                <div className="text-right">
                  <div className="text-3xl font-semibold">{p.price}</div>
                  <div className="text-xs text-slate-300">{p.period}</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm transition ${
                  p.highlight
                    ? 'bg-cyan-500 text-slate-900 hover:bg-cyan-400'
                    : 'border border-white/20 bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {p.highlight ? <Rocket className="h-4 w-4" /> : null}
                {p.highlight ? 'Attiva Pro' : 'Richiedi info'}
              </a>
            </motion.div>
          ))}
        </div>

        <div id="contact" className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-6 text-center backdrop-blur">
          <p className="text-sm text-slate-300">
            Necessiti di una valutazione clinica? Contattaci per una demo personalizzata e una stima del ROI nella tua struttura.
          </p>
          <a
            href="mailto:hello@medbot.ai"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 transition hover:bg-cyan-400"
          >
            Scrivici
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
