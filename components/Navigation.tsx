'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
  totalSections: number;
}

// Define the navigation items in a single place for consistency.
const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'problem', label: 'Problem' },
    { id: 'insight', label: 'Insight' },
    { id: 'solution', label: 'Solution' },
    { id: 'user-journey', label: 'Journey' },
    { id: 'traction', label: 'Traction' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'competitive', label: 'Our Edge' },
    { id: 'revenue', label: 'Revenue Model' },
    { id: 'profitability', label: 'Profitability' },
    { id: 'team', label: 'Team' },
    { id: 'ask', label: 'The Ask' },
    { id: 'contact', label: 'Contact' },
];

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
    window.print();
  };
  
  // Determine the active section ID based on the current index
  const activeSectionId = navItems[currentSection - 1]?.id;

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => scrollToSection('hero')}
            >
              <span className={`text-2xl font-bold tracking-tight transition-colors duration-200 ${
                isScrolled 
                  ? 'text-slate-800' 
                  : 'text-white'
              }`}>
                scale<span className="text-yellow-400">U</span>p
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {navItems.map((item) => {
                const isActive = activeSectionId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isScrolled 
                        ? (isActive ? 'bg-slate-200 text-slate-900' : 'text-slate-700 hover:text-slate-900')
                        : (isActive ? 'bg-white/20 text-white' : 'text-slate-200 hover:text-white')
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}
              <button
                onClick={handleDownloadPDF}
                className="ml-4 flex items-center space-x-2 bg-yellow-400 text-slate-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>

            {/* Mobile Menu Toggle with Accessibility Attributes */}
            <button
              className={`md:hidden transition-colors duration-200 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
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
              className="block w-full text-left py-3 text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors"
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
            transition={{ delay: navItems.length * 0.05 }}
            onClick={handleDownloadPDF}
            className="w-full mt-6 flex items-center justify-center space-x-2 bg-yellow-400 text-slate-900 font-semibold px-4 py-3 rounded-md hover:bg-yellow-500 transition-colors shadow-sm"
          >
            <Download className="w-5 h-5" />
            <span>Download PDF</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Progress Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 no-print">
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-slate-200/80">
          <span className="text-sm font-medium text-slate-600">
            {currentSection} / {totalSections}
          </span>
        </div>
      </div>

      {/* Side Navigation Dots - Now dynamically generated */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-3 hidden lg:block no-print">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSection === index + 1 ? 'bg-yellow-400 scale-150' : 'bg-slate-400 hover:bg-slate-600'}`}
            aria-label={`Go to ${item.label} section`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      {currentSection === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white no-print hidden md:block"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      )}
    </>
  );
}
