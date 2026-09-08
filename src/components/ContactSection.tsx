'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, Linkedin, Copy, Check, ExternalLink, Calendar } from 'lucide-react';

interface ContactSectionProps {}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { t } = useLanguage();

  const email = 'ledesma89alberto@gmail.com';
  const phone = '+34622281415';
  const phoneFormatted = '+34 622 281 415';
  const linkedinUrl = 'https://www.linkedin.com/in/alberto-ledesma-ollega-6727a651/';
  const calendarUrl = 'https://calendar.app.google/4wyQLVujeH9ANdTr7';

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.contactBadge || 'Direct Channels'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-100 to-blue-200">
              {t.contactTitle}
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Email Card */}
          <div className="glass-card rounded-3xl p-6 space-y-4 relative overflow-hidden group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 w-fit">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  {t.emailLabel}
                </span>
                <a
                  href={`mailto:${email}`}
                  className="text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors block break-all truncate"
                >
                  {email}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => copyToClipboard(email, 'email')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-blue-500/50 transition-all"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? (t.copiedText || '¡Copiado!') : (t.copyEmail || 'Copiar Correo')}</span>
            </button>
          </div>

          {/* Phone Card */}
          <div className="glass-card rounded-3xl p-6 space-y-4 relative overflow-hidden group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 w-fit">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  {t.phoneLabel}
                </span>
                <a
                  href={`tel:${phone}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors block"
                >
                  {phoneFormatted}
                </a>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href={`tel:${phone}`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.callPhone || 'Llamar'}</span>
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(phoneFormatted, 'phone')}
                className="flex items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                aria-label="Copiar teléfono"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="glass-card rounded-3xl p-6 space-y-4 relative overflow-hidden group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-sky-600/20 border border-sky-500/30 text-sky-400 w-fit">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  {t.linkedinLabel}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white block break-all truncate">
                  linkedin.com/in/alberto-ledesma...
                </span>
              </div>
            </div>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all"
            >
              <span>{t.openProfile || 'Abrir Perfil'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Schedule a Meeting Card (CTA) */}
          <div className="glass-card rounded-3xl p-6 space-y-4 relative overflow-hidden group border border-indigo-500/40 bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-slate-900/80 shadow-xl shadow-indigo-600/15 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-400 w-fit">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block">
                  {t.bookMeetingLabel || 'Agendar Reunión 1-to-1'}
                </span>
                <span className="text-xs font-semibold text-slate-300 block leading-tight">
                  {t.bookMeetingSub || 'Selecciona día y hora en Google Calendar'}
                </span>
              </div>
            </div>
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/25 hover:scale-105"
            >
              <Calendar className="w-4 h-4 text-blue-200" />
              <span>{t.nav.bookMeeting || 'Book a Meeting'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
