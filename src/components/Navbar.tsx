'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Language, LANGUAGES } from '@/data/translations';
import { useLanguage } from '@/context/LanguageContext';
import { Download, Menu, X, Briefcase, GraduationCap, FileText, Cpu, Mail, Calendar, ChevronDown, Check, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection = 'hero'
}) => {
  const { currentLang, currentLangObj, changeLanguage, t, languages } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'timelapse', href: '#timelapse', label: t.nav.timelapse || 'Timelapse', icon: Sparkles },
    { id: 'experience', href: '#experience', label: t.nav.experience, icon: Briefcase },
    { id: 'education', href: '#education', label: t.nav.education, icon: GraduationCap },
    { id: 'cover', href: '#cover', label: t.nav.coverLetter, icon: FileText },
    { id: 'stack', href: '#stack', label: t.nav.stack, icon: Cpu },
    { id: 'contact', href: '#contact', label: t.nav.contact, icon: Mail },
  ];

  // Dynamic PDF URL based on current language
  const pdfUrl = currentLang === 'es' ? '/CV_Alberto_Ledesma_Espanol.pdf' : '/CV_Alberto_Ledesma_English.pdf';
  const pdfFilename = currentLang === 'es' ? 'CV_Alberto_Ledesma_Espanol.pdf' : 'CV_Alberto_Ledesma_English.pdf';

  const handleSelectLang = (code: Language) => {
    changeLanguage(code);
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handlePdfClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (currentLang !== 'es' && currentLang !== 'en') {
      e.preventDefault();
      window.print();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel no-print transition-all duration-300 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        
        {/* Brand Logo */}
        <a 
          href="#hero"
          className="flex items-center gap-2 group text-left focus:outline-none flex-shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm sm:text-base shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform border border-blue-400/30">
            AL
          </div>
          <div className="hidden sm:block">
            <span className="font-extrabold text-white tracking-tight text-xs lg:text-sm group-hover:text-blue-400 transition-colors block leading-tight">
              Alberto Ledesma
            </span>
            <span className="block text-[9px] text-blue-400 font-bold uppercase tracking-wider leading-none mt-0.5">
              Senior Full Stack Lead
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (MD+) */}
        <nav className="hidden md:flex items-center gap-0.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800/80 shadow-inner">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center gap-1.5 px-2.5 lg:px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions Group (MD+) */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          
          {/* Custom Interactive Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-slate-200 text-xs font-bold shadow-sm transition-all focus:outline-none"
              aria-label="Seleccionar idioma"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
              <span className="text-sm leading-none">{currentLangObj.flag}</span>
              <span className="uppercase tracking-wider font-extrabold">{currentLangObj.label}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180 text-blue-400' : ''}`} />
            </button>

            {/* Custom Dropdown Popover */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl p-1 z-[100] animate-in fade-in duration-150">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-2.5 py-1 border-b border-slate-800">
                  Idioma / Language
                </div>
                <div className="py-1 space-y-0.5">
                  {languages.map((lang) => {
                    const isSelected = currentLang === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => handleSelectLang(lang.code)}
                        className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-bold transition-all text-left ${
                          isSelected
                            ? 'bg-blue-600/30 text-blue-300 font-extrabold border border-blue-500/40'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base leading-none">{lang.flag}</span>
                          <span>{lang.name}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Schedule a Call CTA Button */}
          <a
            href="https://calendar.app.google/4wyQLVujeH9ANdTr7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs shadow-sm shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95 border border-indigo-400/30 whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-blue-200 flex-shrink-0" />
            <span className="hidden xl:inline">{t.nav.bookMeeting || 'Book a Meeting'}</span>
            <span className="xl:hidden">Reunión</span>
          </a>

          {/* Download PDF Direct Button */}
          <a
            href={pdfUrl}
            download={pdfFilename}
            onClick={handlePdfClick}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            title={`Descargar PDF`}
          >
            <Download className="w-3.5 h-3.5 flex-shrink-0" />
            <span>PDF</span>
          </a>
        </div>

        {/* Mobile Controls (<MD) */}
        <div className="flex items-center gap-1.5 md:hidden">
          
          {/* Quick Mobile Flag Pills Bar */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-lg">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelectLang(lang.code)}
                className={`px-1.5 py-0.5 rounded text-xs transition-all ${
                  currentLang === lang.code
                    ? 'bg-blue-600 text-white shadow-xs scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
                title={lang.name}
              >
                {lang.flag}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Overlay (<MD) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/80 bg-slate-950/98 backdrop-blur-2xl p-3.5 space-y-3.5 shadow-2xl">
          
          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold text-left transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Language Selection Grid */}
          <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-1">
              Idioma / Language
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLang(lang.code)}
                  className={`flex items-center justify-center gap-1.5 p-2 rounded-lg border text-xs font-bold transition-all ${
                    currentLang === lang.code
                      ? 'border-blue-500 bg-blue-600/30 text-blue-300 font-extrabold shadow-sm'
                      : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span className="text-sm leading-none">{lang.flag}</span>
                  <span className="font-extrabold text-[11px]">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons (Compact Row) */}
          <div className="pt-1 grid grid-cols-2 gap-2">
            <a
              href="https://calendar.app.google/4wyQLVujeH9ANdTr7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs shadow-md shadow-indigo-600/25"
            >
              <Calendar className="w-3.5 h-3.5 text-blue-200" />
              <span>Reunión</span>
            </a>

            <a
              href={pdfUrl}
              download={pdfFilename}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handlePdfClick(e);
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-600/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
};
