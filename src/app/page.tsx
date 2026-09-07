'use client';

import React, { useState } from 'react';
import { Language } from '@/data/translations';
import { Navbar } from '@/components/Navbar';
import { HeaderHero } from '@/components/HeaderHero';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';
import { CoverLetterSection } from '@/components/CoverLetterSection';
import { StackSection } from '@/components/StackSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('es');
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1 space-y-8 pb-16">
        <HeaderHero currentLang={currentLang} onNavigate={scrollToSection} />
        <ExperienceSection currentLang={currentLang} />
        <EducationSection currentLang={currentLang} />
        <CoverLetterSection currentLang={currentLang} />
        <StackSection currentLang={currentLang} />
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
