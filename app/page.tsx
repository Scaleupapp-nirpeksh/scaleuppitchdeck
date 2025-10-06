'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import TeamSection from '@/components/sections/TeamSection';
import ProblemSection from '@/components/sections/ProblemSection';
import InsightSection from '@/components/sections/InsightSection';
import SolutionSection from '@/components/sections/SolutionSection';
import TractionSection from '@/components/sections/TractionSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import AskSection from '@/components/sections/AskSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 15;

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(index + 1);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // PDF Generation Handler
  useEffect(() => {
    // Add print styles for PDF generation
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body { 
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
        .no-print { display: none !important; }
        section { page-break-after: always; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Navigation currentSection={currentSection} totalSections={totalSections} />
      
      <main className="relative">
        <HeroSection />
        <ProblemSection />
        <InsightSection />
        <SolutionSection />
        <TractionSection />
        <RoadmapSection />
        <TeamSection />
        <AskSection />
        <ContactSection />
        
        {/* Additional sections will be added here */}
        {/* <JourneySection /> */}
        {/* <CompetitiveSection /> */}
        {/* <BusinessModelSection /> */}
        {/* <EconomicsSection /> */}
        {/* <VisionSection /> */}
        {/* <ImpactSection /> */}
      </main>
    </>
  );
}
