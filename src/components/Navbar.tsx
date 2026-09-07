'use client';

import React, { useState } from 'react';
import { Language, translations } from '@/data/translations';
import { Globe, Download, Menu, X, Briefcase, GraduationCap, FileText, Cpu, Mail } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const navItems = [
    { id: 'experience', label: t.nav.experience, icon: Briefcase },
    { id: 'education', label: t.nav.education, icon: GraduationCap },
    { id: 'cover', label: t.nav.coverLetter, icon: FileText },
    { id: 'stack', label: t.nav.stack, icon: Cpu },
    { id: 'contact', label: t.nav.contact, icon: Mail },
  ];

  const languages: { code: Language; flag: string; name: string }[] = [
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
    { code: 'fr', flag: '🇫🇷', name: 'Français' },
    { code: 'pt', flag: '🇵🇹', name: 'Português' },
    { code: 'nl', flag: '🇳🇱', name: 'Nederlands' },
    { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel no-print transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            AL
          </div>
          <div>
            <span className="font-bold text-white tracking-tight text-lg group-hover:text-blue-400 transition-colors">
              Alberto Ledesma
            </span>
            <span className="block text-xs text-blue-400 font-semibold uppercase tracking-wider">
              Senior Full Stack Lead
            </span>
          </div>
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Language Selector & Actions */}
        <div className="hidden lg:flex items-center gap-3">
          
          {/* Language Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold cursor-pointer hover:border-blue-500/50 transition-colors">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>{languages.find(l => l.code === currentLang)?.flag} {languages.find(l => l.code === currentLang)?.code.toUpperCase()}</span>
            </div>

            <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 shadow-2xl p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    currentLang === lang.code
                      ? 'bg-blue-600/20 text-blue-400 font-bold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Download PDF Button */}
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>{t.nav.downloadPdf.replace('📥 ', '')}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-2xl p-4 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-left transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-5 h-5 text-blue-400" />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">
              Idioma / Language
            </div>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-center gap-1.5 p-2 rounded-xl border text-xs font-semibold ${
                    currentLang === lang.code
                      ? 'border-blue-500 bg-blue-600/20 text-blue-400'
                      : 'border-slate-800 bg-slate-900 text-slate-300'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.code.toUpperCase()}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.print();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/20"
            >
              <Download className="w-4 h-4" />
              <span>{t.nav.downloadPdf}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
