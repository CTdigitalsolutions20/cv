'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-12 sm:py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.eduBadge || 'Academic & Certifications'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-indigo-300">
              {t.eduTitle}
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.eduSubtitle}
          </p>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.education.map((item, idx) => {
            const isDegreeOrMaster = item.type === 'degree' || item.type === 'master';
            const typeLabel = item.type === 'degree'
              ? (t.eduDegreeLabel || 'Titulación Universitaria / Grado')
              : item.type === 'master'
              ? (t.eduMasterLabel || 'Máster de Especialización')
              : (t.eduCertLabel || 'Certificación Regulada / Oficial');

            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${
                  isDegreeOrMaster
                    ? 'border-l-4 border-l-blue-500 hover:border-l-blue-400'
                    : 'border-l-4 border-l-emerald-500 hover:border-l-emerald-400'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {isDegreeOrMaster ? (
                        <BookOpen className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      ) : (
                        <Award className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      )}
                      <span className={`text-xs font-bold uppercase tracking-wider ${
                        isDegreeOrMaster ? 'text-blue-400' : 'text-emerald-400'
                      }`}>
                        {typeLabel}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm font-semibold text-slate-300">
                      {item.school}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{t.eduVerified || 'Titulación verificada y homologada'}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
