'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  FileText,
  Building2,
  Calendar,
  Layers,
  Globe2
} from 'lucide-react';

export const PrintDocument: React.FC = () => {
  const { t, currentLang } = useLanguage();

  const expWilting = t.experiences[0];
  const expAccenture = t.experiences[1];
  const expGft = t.experiences[2];
  const expOmibuJubilame = t.experiences[3];
  const expOmibuConsulting = t.experiences[4];

  const degrees = t.education.filter((item) => item.type === 'degree' || item.type === 'master');
  const certs = t.education.filter((item) => item.type === 'certification');

  const email = 'ledesma89alberto@gmail.com';
  const phone = '+34 622 281 415';
  const location = 'Eindhoven (Brainport), NL • Sevilla, ES';
  const linkedin = 'linkedin.com/in/alberto-ledesma-ollega-6727a651';
  const linkedinUrl = 'https://www.linkedin.com/in/alberto-ledesma-ollega-6727a651/';

  return (
    <div id="pdf-download-content" className="print-document font-sans text-slate-100 bg-[#030712] w-[210mm] mx-auto leading-tight selection:bg-blue-600">
      
      {/* ================================================================================= */}
      {/* PAGE 1: EXECUTIVE SUMMARY, VERIFIED CONTACT & TOP EXPERIENCES                    */}
      {/* ================================================================================= */}
      <section className="print-page w-[210mm] h-[297mm] p-[10mm_12mm] box-border relative flex flex-col justify-between bg-[#030712] text-slate-100 border-b border-slate-800/60">
        <div className="space-y-3">
          
          {/* Executive Header Card */}
          <div className="bg-[#0b1329] border border-slate-800 rounded-2xl p-4 shadow-md relative overflow-hidden flex justify-between items-stretch gap-3">
            <div className="space-y-1.5 flex-1 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[8pt] font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span>{t.hero.subtitle || 'Senior Full Stack Lead & Frontend Architect'}</span>
              </div>
              <h1 className="text-[22pt] font-black tracking-tight text-white leading-none">
                Alberto Ledesma Ollega
              </h1>
              <p className="text-[8.5pt] text-slate-300 leading-normal max-w-[95%] font-normal">
                {t.hero.bio}
              </p>
            </div>

            {/* Verified Contact Details Box */}
            <div className="bg-[#030712]/90 border border-slate-800 rounded-xl p-3 text-[8pt] space-y-1.5 shrink-0 w-[230px] flex flex-col justify-center">
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${email}`} className="font-semibold hover:underline truncate text-blue-300">
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="font-semibold text-emerald-300">{phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="text-[7.5pt] font-medium">{location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 pt-0.5 border-t border-slate-800/80">
                <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[7pt] text-blue-300 hover:underline truncate font-medium">
                  {linkedin}
                </a>
              </div>
            </div>
          </div>

          {/* Key Impact Metrics Grid */}
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-2 text-center">
              <span className="block text-[11pt] font-black text-blue-400">+12 Yrs</span>
              <span className="text-[6.5pt] text-slate-400 font-bold uppercase tracking-wider">{t.hero.metricYears}</span>
            </div>
            <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-2 text-center">
              <span className="block text-[11pt] font-black text-emerald-400">Enterprise</span>
              <span className="text-[6.5pt] text-slate-400 font-bold uppercase tracking-wider">{t.hero.metricConsulting}</span>
            </div>
            <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-2 text-center">
              <span className="block text-[11pt] font-black text-purple-400">Full Stack</span>
              <span className="text-[6.5pt] text-slate-400 font-bold uppercase tracking-wider">{t.hero.metricStack}</span>
            </div>
            <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-2 text-center">
              <span className="block text-[11pt] font-black text-amber-400">6 Languages</span>
              <span className="text-[6.5pt] text-slate-400 font-bold uppercase tracking-wider">{t.hero.metricLanguages}</span>
            </div>
          </div>

          {/* Section: Professional Experience (Part 1) */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-1">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <h2 className="text-[11.5pt] font-extrabold text-white tracking-tight">
                  {t.expTitle}
                </h2>
              </div>
              <span className="text-[7.5pt] font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                Pág. 1 / 2 (Trayectoria Reciente)
              </span>
            </div>

            {/* 1. Wilting Components */}
            {expWilting && (
              <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-3 space-y-1.5 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[10pt] font-black text-white leading-tight">
                      {expWilting.company}
                    </h3>
                    <p className="text-[8.5pt] font-bold text-blue-300 mt-0.5">
                      {expWilting.role}
                    </p>
                  </div>
                  <span className="text-[7.5pt] font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30 shrink-0">
                    {expWilting.date}
                  </span>
                </div>
                <ul className="space-y-1 text-[8pt] text-slate-300 pl-0.5">
                  {expWilting.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1 shrink-0" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-1 flex flex-wrap gap-1 text-[7pt]">
                  <span className="bg-blue-950/80 text-blue-300 border border-blue-800/60 px-2 py-0.5 rounded-md font-semibold">
                    {expWilting.stack.f}
                  </span>
                  <span className="bg-slate-800/90 text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded-md font-semibold">
                    {expWilting.stack.l}
                  </span>
                  <span className="bg-purple-950/80 text-purple-300 border border-purple-800/60 px-2 py-0.5 rounded-md font-semibold">
                    {expWilting.stack.d}
                  </span>
                </div>
              </div>
            )}

            {/* 2. Accenture */}
            {expAccenture && (
              <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-3 space-y-1.5 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[10pt] font-black text-white leading-tight">
                      {expAccenture.company}
                    </h3>
                    <p className="text-[8.5pt] font-bold text-blue-300 mt-0.5">
                      {expAccenture.role}
                    </p>
                  </div>
                  <span className="text-[7.5pt] font-bold text-blue-400 bg-blue-500/15 px-2.5 py-0.5 rounded-full border border-blue-500/30 shrink-0">
                    {expAccenture.date}
                  </span>
                </div>
                <ul className="space-y-1 text-[8pt] text-slate-300 pl-0.5">
                  {expAccenture.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1 shrink-0" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-1 flex flex-wrap gap-1 text-[7pt]">
                  <span className="bg-blue-950/80 text-blue-300 border border-blue-800/60 px-2 py-0.5 rounded-md font-semibold">
                    {expAccenture.stack.f}
                  </span>
                  <span className="bg-slate-800/90 text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded-md font-semibold">
                    {expAccenture.stack.l}
                  </span>
                  <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 px-2 py-0.5 rounded-md font-semibold">
                    {expAccenture.stack.d}
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Page 1 Footer */}
        <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center text-[7.5pt] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Alberto Ledesma Ollega</span>
            <span>•</span>
            <span>Curriculum Vitae ({currentLang.toUpperCase()})</span>
          </div>
          <span className="font-extrabold text-blue-400">Página 1 / 3</span>
        </div>
      </section>

      {/* ================================================================================= */}
      {/* PAGE 2: CAREER HISTORY PART 2, ACADEMIC DEGREES & REGULATED CERTIFICATIONS       */}
      {/* ================================================================================= */}
      <section className="print-page w-[210mm] h-[297mm] p-[10mm_12mm] box-border relative flex flex-col justify-between bg-[#030712] text-slate-100 border-b border-slate-800/60">
        <div className="space-y-3">
          
          {/* Top Mini Header */}
          <div className="flex justify-between items-center border-b border-slate-800 pb-1.5 text-[8.5pt]">
            <div className="flex items-center gap-2">
              <span className="font-black text-white">Alberto Ledesma Ollega</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Trayectoria Senior & Formación Académica</span>
            </div>
            <span className="text-blue-400 font-extrabold uppercase bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">{currentLang.toUpperCase()}</span>
          </div>

          {/* 3. GFT */}
          {expGft && (
            <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-3 space-y-1.5 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[10pt] font-black text-white leading-tight">
                    {expGft.company}
                  </h3>
                  <p className="text-[8.5pt] font-bold text-blue-300 mt-0.5">
                    {expGft.role}
                  </p>
                </div>
                <span className="text-[7.5pt] font-bold text-blue-400 bg-blue-500/15 px-2.5 py-0.5 rounded-full border border-blue-500/30 shrink-0">
                  {expGft.date}
                </span>
              </div>
              <ul className="space-y-1 text-[8pt] text-slate-300 pl-0.5">
                {expGft.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1 shrink-0" />
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-1 flex flex-wrap gap-1 text-[7pt]">
                <span className="bg-purple-950/80 text-purple-300 border border-purple-800/60 px-2 py-0.5 rounded-md font-semibold">
                  {expGft.stack.f}
                </span>
                <span className="bg-slate-800/90 text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded-md font-semibold">
                  {expGft.stack.l}
                </span>
                <span className="bg-blue-950/80 text-blue-300 border border-blue-800/60 px-2 py-0.5 rounded-md font-semibold">
                  {expGft.stack.d}
                </span>
              </div>
            </div>
          )}

          {/* 4. Omibú - Jubilame */}
          {expOmibuJubilame && (
            <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-2.5 space-y-1 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[9.5pt] font-black text-white leading-tight">
                    {expOmibuJubilame.company}
                  </h3>
                  <p className="text-[8pt] font-bold text-blue-300 mt-0.5">
                    {expOmibuJubilame.role}
                  </p>
                </div>
                <span className="text-[7.5pt] font-bold text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700 shrink-0">
                  {expOmibuJubilame.date}
                </span>
              </div>
              <ul className="space-y-0.5 text-[7.5pt] text-slate-300 pl-0.5">
                {expOmibuJubilame.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1 shrink-0" />
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 5. Omibú - Senior Technical Consulting */}
          {expOmibuConsulting && (
            <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-2.5 space-y-1 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[9.5pt] font-black text-amber-300 leading-tight">
                    {expOmibuConsulting.company}
                  </h3>
                  <p className="text-[8pt] font-bold text-slate-300 mt-0.5">
                    {expOmibuConsulting.role}
                  </p>
                </div>
                <span className="text-[7.5pt] font-bold text-amber-300 bg-amber-500/15 px-2.5 py-0.5 rounded-full border border-amber-500/30 shrink-0">
                  {expOmibuConsulting.date}
                </span>
              </div>
              <ul className="space-y-0.5 text-[7.5pt] text-slate-300 pl-0.5">
                {expOmibuConsulting.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                    <span className="leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Academic & Regulated Certifications Section */}
          <div className="space-y-2 pt-1 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <h2 className="text-[11pt] font-extrabold text-white tracking-tight">
                {t.eduTitle}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[8pt]">
              {/* University & Higher Degrees */}
              <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-2.5 space-y-1.5">
                <span className="text-[7pt] font-extrabold uppercase tracking-wider text-emerald-400 block border-b border-slate-800/80 pb-0.5">
                  {t.eduDegreeLabel}
                </span>
                {degrees.map((d, i) => (
                  <div key={i} className="space-y-0.5 border-b border-slate-800/40 last:border-0 pb-1 last:pb-0">
                    <div className="font-bold text-white leading-tight">{d.title}</div>
                    <div className="flex justify-between text-[7pt] text-slate-400">
                      <span>{d.school}</span>
                      <span className="font-bold text-slate-300">{d.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Official Regulated Certifications (2016-2017) */}
              <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-2.5 space-y-1.5">
                <span className="text-[7pt] font-extrabold uppercase tracking-wider text-amber-300 block border-b border-slate-800/80 pb-0.5">
                  {t.eduCertLabel} (2016 - 2017)
                </span>
                {certs.map((c, i) => (
                  <div key={i} className="flex justify-between items-center text-[7.5pt] border-b border-slate-800/40 last:border-0 pb-1 last:pb-0">
                    <span className="font-bold text-slate-200 leading-tight pr-1">• {c.title}</span>
                    <span className="text-[7pt] font-bold text-amber-300 bg-amber-500/15 px-1.5 py-0.5 rounded border border-amber-500/25 shrink-0">
                      {c.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Page 2 Footer */}
        <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center text-[7.5pt] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Alberto Ledesma Ollega</span>
            <span>•</span>
            <span>Curriculum Vitae ({currentLang.toUpperCase()})</span>
          </div>
          <span className="font-extrabold text-blue-400">Página 2 / 3</span>
        </div>
      </section>

      {/* ================================================================================= */}
      {/* PAGE 3: EXECUTIVE COVER LETTER (CARTA DE PRESENTACIÓN)                            */}
      {/* ================================================================================= */}
      <section className="print-page w-[210mm] h-[297mm] p-[10mm_12mm] box-border relative flex flex-col justify-between bg-[#030712] text-slate-100">
        <div className="space-y-3.5">
          
          {/* Executive Letterhead Header */}
          <div className="bg-[#0b1329] border border-slate-800 rounded-2xl p-4 flex justify-between items-stretch gap-4 relative overflow-hidden shadow-md">
            <div className="space-y-1.5 z-10 flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-[7.5pt] font-extrabold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>{t.coverBadge || 'Professional Letter'}</span>
              </div>
              <h1 className="text-[20pt] font-black text-white tracking-tight leading-none">
                {t.coverTitle}
              </h1>
              <p className="text-[8.5pt] text-indigo-300 font-bold">
                {t.coverTagline}
              </p>
            </div>

            {/* Header Contact Column */}
            <div className="bg-[#030712]/90 border border-slate-800 rounded-xl p-3 text-[7.5pt] text-slate-300 space-y-1 shrink-0 w-[230px] flex flex-col justify-center">
              <div className="font-extrabold text-white text-[8.5pt]">Alberto Ledesma Ollega</div>
              <div className="text-blue-400 font-bold text-[7pt] uppercase tracking-wider">Senior Full Stack Lead & Architect</div>
              <div className="pt-1 border-t border-slate-800/80 space-y-0.5">
                <div className="text-slate-200">✉️ <a href={`mailto:${email}`} className="text-blue-300 hover:underline">{email}</a></div>
                <div className="text-slate-200">📞 <span className="text-emerald-300 font-semibold">{phone}</span></div>
                <div className="text-slate-200">🔗 <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">{linkedin}</a></div>
              </div>
            </div>
          </div>

          {/* Letter Content Card */}
          <div className="bg-[#0b1329] border border-slate-800 rounded-2xl p-5 space-y-3 shadow-sm text-[9.5pt] leading-relaxed text-slate-200">
            <p className="font-extrabold text-white text-[10.5pt] border-b border-slate-800 pb-2">
              {t.coverGreeting}
            </p>

            <p dangerouslySetInnerHTML={{ __html: t.coverP1 }} className="text-justify font-normal" />
            <p dangerouslySetInnerHTML={{ __html: t.coverP2 }} className="text-justify font-normal" />
            <p dangerouslySetInnerHTML={{ __html: t.coverP3 }} className="text-justify font-normal" />

            {/* Valediction & Executive Signature */}
            <div className="pt-3 border-t border-slate-800/80 space-y-1">
              <p className="text-slate-400 font-bold text-[8.5pt]">
                {t.coverValediction.split('\n')[0]}
              </p>
              <div className="text-[13pt] font-black text-white tracking-tight pt-1">
                Alberto Ledesma Ollega
              </div>
              <p className="text-[7.5pt] font-extrabold uppercase tracking-widest text-blue-400">
                Senior Full Stack Lead & Frontend Architect
              </p>
            </div>
          </div>

          {/* Bottom Value Proposition Feature Strip */}
          <div className="grid grid-cols-3 gap-2 text-[7.5pt]">
            <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-2.5 text-center">
              <span className="font-extrabold text-blue-400 block text-[8pt]">💡 Versatilidad Técnica</span>
              <span className="text-slate-300 font-medium">Freelance B2B o Contrato Laboral</span>
            </div>
            <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-2.5 text-center">
              <span className="font-extrabold text-purple-400 block text-[8pt]">⚡ Alta Disponibilidad</span>
              <span className="text-slate-300 font-medium">Remoto, Híbrido o Presencial</span>
            </div>
            <div className="bg-[#0b1329] border border-slate-800 rounded-xl p-2.5 text-center">
              <span className="font-extrabold text-emerald-400 block text-[8pt]">🌍 Liderazgo Internacional</span>
              <span className="text-slate-300 font-medium">Soporte en 6 Idiomas</span>
            </div>
          </div>

        </div>

        {/* Page 3 Footer */}
        <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center text-[7.5pt] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Alberto Ledesma Ollega</span>
            <span>•</span>
            <span>Cover Letter / Carta de Presentación ({currentLang.toUpperCase()})</span>
          </div>
          <span className="font-extrabold text-blue-400">Página 3 / 3</span>
        </div>
      </section>

    </div>
  );
};
