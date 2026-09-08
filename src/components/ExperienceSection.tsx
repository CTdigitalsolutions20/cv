'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-12 sm:py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.expBadge || 'Career Journey'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-300">
              {t.expTitle}
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.expSubtitle}
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-slate-800/80 before:hidden sm:before:block">
          {t.experiences.map((exp, idx) => (
            <div key={idx} className="relative flex flex-col sm:flex-row items-start group">
              
              {/* Timeline Center Dot */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-125 group-hover:bg-blue-600 transition-all z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 group-hover:bg-white" />
              </div>

              {/* Experience Card */}
              <div className="w-full glass-card rounded-3xl p-6 sm:p-8 space-y-4 hover:border-blue-500/40 transition-all duration-300">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.company}
                      </h3>
                      {exp.highlight && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-500/10 border border-amber-500/30 text-amber-400">
                          {t.expHighlight || 'Consultoría Freelance'}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-blue-400 block mt-0.5">
                      {exp.role}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold w-fit">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm font-medium leading-relaxed">
                  {exp.desc}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 pt-1">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technical Stack Pills */}
                {exp.stack && (
                  <div className="pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-extrabold uppercase tracking-wider text-slate-400">
                      {t.expStackFeatured || 'Stack Destacado:'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-800/50 text-blue-300 font-semibold">
                        {exp.stack.f}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-800/50 text-purple-300 font-semibold">
                        {exp.stack.l}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-semibold">
                        {exp.stack.d}
                      </span>
                    </div>
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
