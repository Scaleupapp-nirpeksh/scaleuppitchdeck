'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Linkedin, Target, Building2, GraduationCap,
  Award, Rocket, Users, TrendingUp, Star, CheckCircle
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

type ColorKey = 'red' | 'blue' | 'orange' | 'green' | 'purple' | 'teal';

const companyPillColor: Record<ColorKey, { bg: string; text: string }> = {
  red: { bg: 'bg-red-50', text: 'text-red-700' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700' },
  green: { bg: 'bg-green-50', text: 'text-green-700' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-700' },
};

const strengthColorBG: Record<ColorKey, string> = {
  blue: 'bg-blue-100',
  purple: 'bg-purple-100',
  orange: 'bg-orange-100',
  green: 'bg-green-100',
  red: 'bg-red-100',
  teal: 'bg-teal-100',
};

const strengthColorText: Record<ColorKey, string> = {
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  orange: 'text-orange-600',
  green: 'text-green-600',
  red: 'text-red-600',
  teal: 'text-teal-600',
};

export default function TeamSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [selectedFounder, setSelectedFounder] = useState<number>(0);

  // Three leaders in one collection (CEO, CMO, Head of Development)
  const leaders = [
    {
      id: 'nirpeksh',
      name: 'Nirpeksh Nandan',
      role: 'Co-founder & CEO',
      expertise: 'Product , Operations & Strategy',
      experience: '10+ years',
      companies: [
        { name: 'Target', color: 'red' as ColorKey },
        { name: 'Vodafone', color: 'red' as ColorKey },
        { name: 'GE', color: 'blue' as ColorKey }
      ],
      achievements: [
        'Built features used by millions globally',
        'Led cross-functional teams of 20+ engineers',
        'Scaled products from 0 to 1M+ users'
      ],
      skills: ['Product Strategy', 'Strategy', 'Team Building', 'Fundraising', 'Operations'],
      photo: '/team/nirpeksh.jpg',
      linkedin: 'https://linkedin.com/in/nirpeksh',
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      id: 'pratiksha',
      name: 'Pratiksha Sinha',
      role: 'Co-founder & CMO',
      expertise: 'Marketing, Growth & Strategy',
      experience: '10+ years',
      companies: [
        { name: 'Social Beat', color: 'orange' as ColorKey },
        { name: 'Anarock', color: 'blue' as ColorKey },
        { name: 'Hubtown', color: 'green' as ColorKey }
      ],
      achievements: [
        'Scaled campaigns across India',
        'Managed ₹10Cr+ marketing budgets',
        'Built growth engines for 5 startups'
      ],
      skills: ['Growth Marketing', 'Strategy', 'Sales', 'User Acquisition', 'Fundraising'],
      photo: '/team/pratiksha.jpg',
      linkedin: 'https://linkedin.com/in/pratiksha',
      gradient: 'from-pink-600 to-orange-600'
    },
    {
      id: 'gulshan',
      name: 'Gulshan Kumar',
      role: 'Head of Development',
      expertise: 'Full-Stack Development',
      experience: 'IIT Bombay',
      companies: [
        { name: 'IIT Bombay', color: 'teal' as ColorKey }
      ],
      achievements: [
        'Built ScaleUp MVP in 60 days',
        'Architected scalable microservices',
        'Implemented AI quiz system'
      ],
      skills: ['Node.js', 'React Native', 'Architecture', 'DevOps'],
      photo: '/team/gulshan.jpg',
      linkedin: 'https://www.linkedin.com/in/gulshan-kumar-69b54b25b/',
      gradient: 'from-green-600 to-teal-600'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Kriti Srivastava',
      role: 'AI & Technical Architecture',
      title: 'PhD in AI/ML',
      position: 'Professor, DJ Sanghvi College',
      expertise: ['Machine Learning', 'NLP', 'EdTech'],
      impact: 'Guiding AI roadmap & personalization engine'
    },
    {
      name: 'Akash Srivastava',
      role: 'Strategy & Scale',
      position: 'South Asia Leader, Deloitte',
      expertise: ['Market Entry', 'B2B Sales', 'Fundraising'],
      impact: 'Strategic advisor for Series A preparation'
    }
  ];

  const teamStrengths = [
    {
      icon: Target,
      title: 'Complementary Skills',
      description: 'Product + Growth + Tech perfectly balanced',
      color: 'blue' as ColorKey
    },
    {
      icon: GraduationCap,
      title: 'Domain Expertise',
      description: 'We lived the student journey ourselves',
      color: 'purple' as ColorKey
    },
    {
      icon: Rocket,
      title: 'Execution Speed',
      description: 'IIT Bombay validation in 90 days',
      color: 'orange' as ColorKey
    },
    {
      icon: Building2,
      title: 'Capital Discipline',
      description: 'Bootstrapped to 350 users before raising',
      color: 'green' as ColorKey
    }
  ];

  return (
    <section id="team" className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <Users className="w-5 h-5" />
            <span className="font-semibold">The Team</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Building India's</span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Learning OS
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced operators who've built products at scale, now solving education
          </p>
        </motion.div>

        {/* Leadership (3 in one row on desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">
            Leadership
          </h3>

          {/* Desktop / Tablet */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {leaders.map((person, index) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (index === 0 ? -50 : index === 2 ? 50 : 0) }}
                transition={{ delay: 0.4 + index * 0.1 }}
                onMouseEnter={() => setHoveredMember(person.id)}
                onMouseLeave={() => setHoveredMember(null)}
                className="relative"
              >
                <div
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-all ${
                    hoveredMember === person.id
                      ? 'border-indigo-400 shadow-2xl transform -translate-y-2'
                      : 'border-gray-100'
                  }`}
                >
                  {/* Gradient Header */}
                  <div className={`h-32 bg-gradient-to-r ${person.gradient}`} />

                  {/* Content */}
                  <div className="relative px-8 pb-8">
                    {/* Profile Image */}
                    <div className="relative -mt-20 mb-6">
                      <div className="w-32 h-32 mx-auto relative">
                        <div className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
                          <Image
                            src={person.photo}
                            alt={person.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* LinkedIn Badge */}
                        {person.linkedin && (
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                            aria-label={`${person.name} LinkedIn`}
                          >
                            <Linkedin className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800">{person.name}</h3>
                      <p className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {person.role}
                      </p>
                      <p className="text-gray-600 mt-1">{person.expertise}</p>
                    </div>

                    {/* Experience / Companies */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {person.companies.map((company) => {
                        const colors = companyPillColor[company.color] ?? companyPillColor.blue;
                        return (
                          <span
                            key={company.name}
                            className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}
                          >
                            {company.name}
                          </span>
                        );
                      })}
                      {person.experience && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {person.experience}
                        </span>
                      )}
                    </div>

                    {/* Achievements (on hover) */}
                    <AnimatePresence>
                      {hoveredMember === person.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-3"
                        >
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-sm font-semibold text-gray-600 mb-3">Key Achievements</p>
                            {person.achievements.map((achievement: string, idx: number) => (
                              <div key={idx} className="flex items-start gap-2 mb-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-gray-600">{achievement}</p>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {person.skills?.map((skill: string) => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile / Small screens - Swipeable */}
          <div className="lg:hidden">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFounder}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  {(() => {
                    const person = leaders[selectedFounder];
                    return (
                      <>
                        <div className={`h-24 bg-gradient-to-r ${person.gradient}`} />
                        <div className="relative px-6 pb-6">
                          <div className="relative -mt-16 mb-4">
                            <div className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
                              <Image
                                src={person.photo}
                                alt={person.name}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
                            <p className="text-indigo-600 font-semibold">{person.role}</p>
                            <p className="text-gray-600 text-sm mt-2">{person.expertise}</p>
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                              {person.companies.map((company) => (
                                <span key={company.name} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                                  {company.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {leaders.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFounder(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      selectedFounder === index ? 'bg-indigo-600 w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Show leader ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">
            Why We'll Win
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStrengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition-all hover:-translate-y-1">
                  <div
                    className={`w-12 h-12 ${strengthColorBG[strength.color]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <strength.icon className={`w-6 h-6 ${strengthColorText[strength.color]}`} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{strength.title}</h4>
                  <p className="text-sm text-gray-600">{strength.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advisors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">
            Advisors
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800">{advisor.name}</h4>
                    <p className="text-sm text-indigo-600 font-semibold">{advisor.position}</p>
                    <p className="text-xs text-gray-600 mt-1">{advisor.role}</p>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {advisor.expertise.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm text-gray-700 mt-3 italic">
                      "{advisor.impact}"
                    </p>
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
