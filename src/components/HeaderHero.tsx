'use client';

import React from 'react';
import Image from 'next/image';
import { Language, translations } from '@/data/translations';
import { Mail, Phone, Linkedin, ArrowRight, FileText, CheckCircle2, Sparkles } from 'lucide-react';

interface HeaderHeroProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
}

export const HeaderHero: React.FC<HeaderHeroProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <section id="hero" className="relative py-12 md:py-16 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Profile Photo */}
            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:scale-105" />
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-blue-500/50 bg-slate-900 shadow-2xl">
                <Image
                  src="/foto.jpg"
                  alt="Alberto Ledesma Ollega"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Profile Information */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>{t.hero.status}</span>
              </div>

              {/* Title & Name */}
              <div className="space-y-1">
                <p className="text-sm font-extrabold uppercase tracking-widest text-blue-400">
                  {t.hero.subtitle}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  Alberto Ledesma Ollega
                </h1>
              </div>

              {/* Bio Summary */}
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                {t.hero.bio}
              </p>

              {/* Quick Contact Bar */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm">
                <a
                  href="mailto:ledesma89alberto@gmail.com"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-white hover:border-blue-500/50 transition-all"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold">ledesma89alberto@gmail.com</span>
                </a>

                <a
                  href="tel:+34622281415"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-white hover:border-blue-500/50 transition-all"
                >
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold">+34 622 281 415</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/alberto-ledesma-ollega-6727a651/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all font-semibold"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/alberto-ledesma-ollega-6727a651/</span>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
                >
                  <span>{t.hero.contactBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('cover')}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 font-bold text-sm transition-all hover:scale-105"
                >
                  <FileText className="w-4 h-4" />
                  <span>{t.hero.viewCoverBtn}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Quick Metrics */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <span className="block text-2xl font-black text-blue-400">+12</span>
              <span className="text-xs text-slate-400 font-medium">Años de Experiencia</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <span className="block text-2xl font-black text-purple-400">Freelance & B2B</span>
              <span className="text-xs text-slate-400 font-medium">Consultoría & Empresa</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <span className="block text-2xl font-black text-emerald-400">Full Stack</span>
              <span className="text-xs text-slate-400 font-medium">Frontend & Backend</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/50">
              <span className="block text-2xl font-black text-indigo-400">6 Idiomas</span>
              <span className="text-xs text-slate-400 font-medium">Soporte Multilingüe</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
