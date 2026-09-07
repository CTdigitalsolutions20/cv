'use client';

import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800/80 py-8 no-print bg-slate-950/80 text-center text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 space-y-2">
        <p className="font-semibold text-slate-300">
          © {new Date().getFullYear()} Alberto Ledesma Ollega — Senior Full Stack Lead & Frontend Architect
        </p>
        <p className="flex items-center justify-center gap-1 text-slate-500">
          Desarrollado con <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> en Next.js, React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};
