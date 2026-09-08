'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Heart } from 'lucide-react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-slate-800/80 py-8 no-print bg-slate-950/80 text-center text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 space-y-2">
        <p className="font-semibold text-slate-300">
          © {new Date().getFullYear()} Alberto Ledesma Ollega — Senior Full Stack Lead & Frontend Architect
        </p>
        <p className="flex items-center justify-center gap-1 text-slate-500">
          <span>{t.footerBuiltWith || 'Desarrollado con'}</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          <span>Next.js, React & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};
