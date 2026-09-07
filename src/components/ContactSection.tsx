'use client';

import React, { useState } from 'react';
import { Language, translations } from '@/data/translations';
import { Mail, Phone, Linkedin, Copy, Check, ExternalLink, Download, QrCode } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const t = translations[currentLang];

  const email = 'ledesma89alberto@gmail.com';
  const phone = '+34622281415';
  const phoneFormatted = '+34 622 281 415';
  const linkedinUrl = 'https://www.linkedin.com/in/alberto-ledesma-ollega-6727a651/';
  const portfolioUrl = 'https://mi-portfolio-hazel.vercel.app/es';

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
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Email Card */}
          <div className="glass-card rounded-3xl p-6 space-y-4 relative overflow-hidden group">
            <div className="p-3.5 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 w-fit">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                {t.emailLabel}
              </span>
              <a
                href={`mailto:${email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-blue-400 transition-colors block break-all"
              >
                {email}
              </a>
            </div>
            <button
              onClick={() => copyToClipboard(email, 'email')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-blue-500/50 transition-all"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Copiado al Portapapeles' : 'Copiar Correo'}</span>
            </button>
          </div>

          {/* Phone Card */}
          <div className="glass-card rounded-3xl p-6 space-y-4 relative overflow-hidden group">
            <div className="p-3.5 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 w-fit">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                {t.phoneLabel}
              </span>
              <a
                href={`tel:${phone}`}
                className="text-lg font-bold text-white hover:text-emerald-400 transition-colors block"
              >
                {phoneFormatted}
              </a>
            </div>
            <div className="flex gap-2">
              <a
                href={`tel:${phone}`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Llamar</span>
              </a>
              <button
                onClick={() => copyToClipboard(phoneFormatted, 'phone')}
                className="flex items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="glass-card rounded-3xl p-6 space-y-4 relative overflow-hidden group">
            <div className="p-3.5 rounded-2xl bg-sky-600/20 border border-sky-500/30 text-sky-400 w-fit">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                {t.linkedinLabel}
              </span>
              <span className="text-sm font-bold text-white block break-all truncate">
                linkedin.com/in/alberto-ledesma-ollega-6727a651/
              </span>
            </div>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all"
            >
              <span>Abrir Perfil LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* QR Section & PDF Download */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
              <QrCode className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-tight">
                Códigos QR & Accesos Directos
              </h4>
              <p className="text-xs text-slate-400 font-medium">
                Escanea o accede directamente a LinkedIn y Portfolio Web desde el documento en PDF
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-bold hover:border-blue-500 transition-colors"
            >
              <span>🌐 Portfolio Web</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>{t.nav.downloadPdf}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
