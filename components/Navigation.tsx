'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
  totalSections: number;
}

export default function Navigation({ currentSection, totalSections }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownloadPDF = () => {
    // This will be implemented with the PDF generation logic
    window.print();
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'problem', label: 'Problem' },
    { id: 'insight', label: 'Insight' },
    { id: 'solution', label: 'Solution' },
    { id: 'traction', label: 'Traction' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'team', label: 'Team' },
    { id: 'ask', label: 'The Ask' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
          isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - PLACEHOLDER FOR LOGO IMAGE */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="ml-2 text-xl font-bold gradient-text">ScaleUp</span>
              {/* 
                LOGO PLACEHOLDER: Replace the div above with:
                <img src="/logo.png" alt="ScaleUp" className="h-10 w-auto" />
              */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleDownloadPDF}
                className="btn-primary flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-40 md:hidden"
      >
        <div className="pt-20 px-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                x: isMobileMenuOpen ? 0 : 20 
              }}
              transition={{ delay: index * 0.05 }}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left py-3 text-lg font-medium text-text-primary hover:text-primary transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0, 
              y: isMobileMenuOpen ? 0 : 20 
            }}
            transition={{ delay: 0.3 }}
            onClick={handleDownloadPDF}
            className="btn-primary w-full mt-6 flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 no-print">
        <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200">
          <span className="text-sm font-medium text-text-secondary">
            {currentSection} / {totalSections}
          </span>
        </div>
      </div>

      {/* Side Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-3 hidden lg:block no-print">
        {Array.from({ length: totalSections }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              const sections = ['hero', 'problem', 'insight', 'solution', 'journey', 'competitive', 'traction', 'roadmap', 'model', 'economics', 'team', 'ask', 'vision', 'impact', 'contact'];
              scrollToSection(sections[i] || 'hero');
            }}
            className={`progress-dot ${currentSection === i + 1 ? 'active' : ''}`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      {currentSection === 1 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="scroll-indicator text-white no-print"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      )}
    </>
  );
}