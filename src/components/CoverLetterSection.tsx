'use client';

import React from 'react';
import { Language, translations } from '@/data/translations';
import { FileText, Sparkles, Printer, Copy, Check } from 'lucide-react';

interface CoverLetterSectionProps {
  currentLang: Language;
}

export const CoverLetterSection: React.FC<CoverLetterSectionProps> = ({ currentLang }) => {
  const [copied, setCopied] = React.useState(false);
  const t = translations[currentLang];

  const handleCopy = () => {
    const textToCopy = `${t.coverGreeting}\n\n${t.coverP1.replace(/<[^>]*>/g, '')}\n\n${t.coverP2.replace(/<[^>]*>/g, '')}\n\n${t.coverP3.replace(/<[^>]*>/g, '')}\n\n${t.coverValediction}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cover" className="py-12 sm:py-16 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5" />
            <span>Professional Letter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t.coverTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.coverSubtitle}
          </p>
        </div>

        {/* Cover Letter Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-2xl relative space-y-6">
          
          {/* Header Controls Inside Card */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-bold">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>{t.coverTagline}</span>
            </div>

            <div className="flex items-center gap-2 no-print">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copiado' : 'Copiar Texto'}</span>
              </button>

              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir PDF</span>
              </button>
            </div>
          </div>

          {/* Letter Body */}
          <div className="space-y-5 text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
            <p className="font-bold text-white text-lg sm:text-xl">
              {t.coverGreeting}
            </p>

            <p dangerouslySetInnerHTML={{ __html: t.coverP1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.coverP2 }} />
            <p dangerouslySetInnerHTML={{ __html: t.coverP3 }} />
          </div>

          {/* Sign-off */}
          <div className="pt-6 border-t border-slate-800/80 space-y-1">
            <p className="text-slate-400 font-semibold text-sm">
              {t.coverValediction.split('\n')[0]}
            </p>
            <p className="text-xl font-bold text-white tracking-tight">
              Alberto Ledesma Ollega
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Senior Full Stack Lead & Frontend Architect
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
