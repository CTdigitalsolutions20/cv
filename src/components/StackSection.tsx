'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Cpu, Search, Layers, Database, Cloud, Wrench, Code2 } from 'lucide-react';

interface StackSectionProps {}

export const StackSection: React.FC<StackSectionProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  const categoryIcons: Record<number, React.ElementType> = {
    0: Code2,
    1: Layers,
    2: Database,
    3: Cloud,
    4: Wrench,
  };

  const filteredCategories = t.stackCategories.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.badge && item.badge.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <section id="stack" className="py-12 sm:py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.stackBadge || 'Full Arsenal (+12 Years)'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-300">
              {t.stackTitle}
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.stackSubtitle}
          </p>
        </div>

        {/* Search Bar & Category Filter Chips */}
        <div className="max-w-xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.stackSearchPlaceholder || 'Buscar herramienta (ej: React, Python, SQL...)'}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm font-medium focus:outline-none focus:border-blue-500 shadow-xl transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white"
              >
                {t.stackClear || 'Limpiar'}
              </button>
            )}
          </div>
        </div>

        {/* Stack Categories Grid */}
        <div className="space-y-8">
          {filteredCategories.map((cat, cIdx) => {
            const Icon = categoryIcons[cIdx] || Cpu;
            return (
              <div key={cIdx} className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {cat.categoryName}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Tech Chips Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.items.map((tech, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900 transition-all flex items-center justify-between group"
                    >
                      <div className="space-y-0.5">
                        <span className="font-bold text-white text-sm block group-hover:text-blue-400 transition-colors">
                          {tech.name}
                        </span>
                        <span className="text-xs text-slate-400 font-medium block">
                          {tech.level}
                        </span>
                      </div>

                      {tech.badge && (
                        <span className="px-2.5 py-1 rounded-full bg-slate-800 text-blue-300 text-[10px] font-extrabold uppercase tracking-wider border border-slate-700">
                          {tech.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
