'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Target, Building2, GraduationCap, Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function TeamSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const founders = [
    {
      name: 'Nirpeksh',
      role: 'Co-founder, CEO',
      expertise: 'Product, Operations',
      experience: '10 years product & engineering',
      companies: ['Target', 'Vodafone', 'GE'],
      achievement: 'Built features used by millions of users globally',
      photoPlaceholder: '/founders/nirpeksh.jpg', // PHOTO PLACEHOLDER
      linkedin: '#', // Add actual LinkedIn URL
    },
    {
      name: 'Pratiksha',
      role: 'Co-founder',
      expertise: 'Marketing, Sales, Strategy',
      experience: '10 years marketing & growth',
      companies: ['Social Beat', 'Anarock'],
      achievement: 'Scaled marketing campaigns across India',
      photoPlaceholder: '/founders/pratiksha.jpg', // PHOTO PLACEHOLDER
      linkedin: '#', // Add actual LinkedIn URL
    },
  ];

  const coreTeam = {
    name: 'Gulshan',
    role: 'Head of Development',
    education: 'IIT Bombay',
    responsibility: 'Leading all product development',
    future: 'Will transition to CTO as team scales',
    photoPlaceholder: '/team/gulshan.jpg', // PHOTO PLACEHOLDER
  };

  const advisors = [
    {
      name: 'Kriti Srivastava',
      role: 'Technical Architecture & AI Strategy',
      title: 'PhD in AI/ML',
      position: 'Professor at DJ Sanghvi College of Engineering',
      photoPlaceholder: '/advisors/kriti.jpg', // PHOTO PLACEHOLDER
    },
    {
      name: 'Akash Srivastava',
      role: 'Strategy, Scale, Go-to-Market Guidance',
      position: 'South Asia Leader, Deloitte',
      photoPlaceholder: '/advisors/akash.jpg', // PHOTO PLACEHOLDER
    },
  ];

  const whyWeWin = [
    { icon: Target, text: 'Complementary skills: Product + Growth fully covered' },
    { icon: GraduationCap, text: 'Domain expertise: We lived the pain, we understand users' },
    { icon: Building2, text: 'Capital discipline: Bootstrapped MVP before raising' },
    { icon: Briefcase, text: 'Execution speed: IIT Bombay validation in 90 days' },
  ];

  return (
    <section id="team" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            The Team Building India's Learning OS
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experienced operators who've built products at scale
          </p>
        </motion.div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (index === 0 ? -50 : 50) }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  {/* PHOTO PLACEHOLDER - Replace with actual photo */}
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white text-3xl font-bold">
                      {founder.name[0]}
                    </div>
                    {/* Uncomment and use this when you have the actual photo:
                    <img 
                      src={founder.photoPlaceholder} 
                      alt={founder.name}
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Linkedin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-primary">{founder.name}</h3>
                    <p className="text-lg text-accent font-semibold mb-1">{founder.role}</p>
                    <p className="text-text-secondary mb-3">{founder.expertise}</p>
                    <p className="text-sm text-text-secondary mb-3">{founder.experience}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {founder.companies.map((company) => (
                        <span key={company} className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                          {company}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-sm text-primary font-medium italic">"{founder.achievement}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Team Member */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-secondary p-1 rounded-2xl mb-16"
        >
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Core Team</h3>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
              {/* PHOTO PLACEHOLDER - Replace with actual photo */}
              <div className="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center text-white text-4xl font-bold">
                G
              </div>
              {/* Uncomment when you have the photo:
              <img 
                src={coreTeam.photoPlaceholder} 
                alt={coreTeam.name}
                className="w-32 h-32 rounded-xl object-cover"
              />
              */}
              
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-text-primary">{coreTeam.name}</h4>
                <p className="text-lg text-accent font-semibold">{coreTeam.role}</p>
                <p className="text-primary font-semibold mt-2">{coreTeam.education}</p>
                <p className="text-text-secondary mt-2">{coreTeam.responsibility}</p>
                <p className="text-sm text-text-secondary mt-2 italic">{coreTeam.future}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why We'll Win */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Why We'll Win</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {whyWeWin.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-text-primary">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advisors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Advisors</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <div className="flex items-center space-x-4">
                  {/* ADVISOR PHOTO PLACEHOLDER */}
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  {/* Uncomment when you have photos:
                  <img 
                    src={advisor.photoPlaceholder} 
                    alt={advisor.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  */}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-text-primary">{advisor.name}</h4>
                    <p className="text-sm text-primary font-medium">{advisor.title || advisor.position}</p>
                    {advisor.title && <p className="text-sm text-text-secondary">{advisor.position}</p>}
                    <p className="text-xs text-accent mt-1">{advisor.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}