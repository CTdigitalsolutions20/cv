'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeaderHero } from '@/components/HeaderHero';
import { TimelapseSection } from '@/components/TimelapseSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';
import { CoverLetterSection } from '@/components/CoverLetterSection';
import { StackSection } from '@/components/StackSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { PrintDocument } from '@/components/PrintDocument';

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Interactive Web Portfolio (Hidden when printing) */}
      <div className="web-only print:hidden min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
        {/* Top Navbar */}
        <Navbar
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        {/* Main Content Sections */}
        <main className="flex-1 space-y-8 pb-16">
          <HeaderHero onNavigate={scrollToSection} />
          <TimelapseSection />
          <ExperienceSection />
          <EducationSection />
          <CoverLetterSection />
          <StackSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Unified 3-Page Printable Document (Visible only when printing) */}
      <div className="hidden print:block print-only">
        <PrintDocument />
      </div>
    </>
  );
}

