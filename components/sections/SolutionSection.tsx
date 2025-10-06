'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Brain, Award, Briefcase, Link2, AlertCircle, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function SolutionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);
  const [brokenLink, setBrokenLink] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      icon: Users,
      title: 'Social Learning Engine',
      description: 'Content creation & consumption',
      features: [
        '10-minute peer-created videos',
        'Dual verification: AI + SME',
        'LearnLists: Curated journeys',
        'Communities (LIVE MVP)',
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      output: 'Engaged Learning',
      breaks: 'No content = No learning = Dead platform'
    },
    {
      id: 2,
      icon: Award,
      title: 'Verification Layer',
      description: 'Proof of actual learning',
      features: [
        '2-minute quizzes after videos',
        'Daily streaks, leaderboards',
        'Continuous performance tracking',
        'AI identifies weak areas',
      ],
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      output: 'Verified Skills',
      breaks: 'No verification = No trust = No value'
    },
    {
      id: 3,
      icon: Brain,
      title: 'Personalization Engine',
      description: 'Adaptive learning paths',
      features: [
        'AI-powered study roadmaps',
        'Adaptive content delivery',
        'Weak area remediation',
        'Career guidance (Q1 2026)',
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      output: 'Optimized Progress',
      breaks: 'No personalization = Generic experience = Low retention'
    },
    {
      id: 4,
      icon: Briefcase,
      title: 'Career Translation',
      description: 'Skills to opportunities',
      features: [
        'Performance → Skill profiles',
        'Skill reputation system (Q3 2026)',
        'Hiring platform (Q4 2026)',
        'Complete the loop',
      ],
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      output: 'Job Opportunities',
      breaks: 'No jobs = No outcome = Why learn?'
    },
  ];

  const connections = [
    { from: 0, to: 1, label: 'Content feeds verification' },
    { from: 1, to: 2, label: 'Performance data trains AI' },
    { from: 2, to: 3, label: 'Personalized paths build profiles' },
    { from: 3, to: 0, label: 'Jobs motivate more learning' },
  ];

  return (
    <section id="solution" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Link2 className="w-5 h-5" />
            <span className="font-semibold">The Unbreakable Loop</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Four Modules. One System.
            <br />
            <span className="text-3xl md:text-4xl text-gray-600 font-normal">
              Break one link, break everything.
            </span>
          </h2>
        </motion.div>

        {/* Interactive Loop Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-5xl mx-auto mb-16"
        >
          <div className="grid grid-cols-2 gap-8 relative">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                onMouseEnter={() => setHoveredModule(index)}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => setBrokenLink(brokenLink === index ? null : index)}
                className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 cursor-pointer transition-all ${
                  brokenLink === index 
                    ? 'border-red-500 bg-red-50' 
                    : hoveredModule === index 
                      ? `border-${module.color}-500` 
                      : 'border-gray-200'
                }`}
              >
                {/* Module Content */}
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${module.gradient} rounded-xl flex items-center justify-center mb-4 ${
                    brokenLink === index ? 'opacity-30' : ''
                  }`}>
                    <module.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${brokenLink === index ? 'text-red-600' : 'text-gray-800'}`}>
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{module.description}</p>
                  
                  {/* Features List */}
                  <ul className="space-y-1 text-sm">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-start ${brokenLink === index ? 'text-gray-400' : 'text-gray-700'}`}>
                        <CheckCircle className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                          brokenLink === index ? 'text-gray-400' : 'text-green-500'
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Output */}
                  <div className={`mt-4 pt-4 border-t ${brokenLink === index ? 'border-red-200' : 'border-gray-200'}`}>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Output</p>
                    <p className={`text-sm font-bold ${brokenLink === index ? 'text-red-600' : `text-${module.color}-600`}`}>
                      → {module.output}
                    </p>
                  </div>

                  {/* Break Warning */}
                  <AnimatePresence>
                    {brokenLink === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute inset-0 bg-red-50 rounded-2xl flex items-center justify-center z-20"
                      >
                        <div className="text-center p-4">
                          <XCircle className="w-12 h-12 text-red-500 mx-auto mb-2" />
                          <p className="text-red-700 font-bold text-sm">{module.breaks}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Connection Line to Next Module */}
                {index < modules.length - 1 && (
                  <div className={`absolute ${
                    index === 0 ? 'right-0 top-1/2 w-8' : 
                    index === 1 ? 'bottom-0 left-1/2 h-8' :
                    index === 2 ? 'left-0 top-1/2 w-8' : ''
                  } ${brokenLink === index ? 'opacity-30' : ''}`}>
                    <ArrowRight className={`w-6 h-6 ${
                      index === 1 ? 'rotate-90' : index === 2 ? 'rotate-180' : ''
                    } text-gray-400`} />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Center Connection Indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ rotate: brokenLink !== null ? 0 : 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`w-24 h-24 rounded-full border-4 border-dashed ${
                  brokenLink !== null ? 'border-red-300' : 'border-gray-300'
                }`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  brokenLink !== null ? 'bg-red-100' : 'bg-white'
                } shadow-lg`}>
                  {brokenLink !== null ? (
                    <AlertCircle className="w-8 h-8 text-red-500" />
                  ) : (
                    <Link2 className="w-8 h-8 text-gray-600" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-sm text-gray-600 mt-8"
          >
            Click any module to see what happens when it breaks
          </motion.p>
        </motion.div>

        {/* The Chain Reaction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.9 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">The Chain Reaction</h3>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-4 text-green-600">When Everything Works:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">1</span>
                    </div>
                    <p className="text-sm">Students create & consume content</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <p className="text-sm">Quizzes verify actual learning</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <p className="text-sm">AI personalizes the journey</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">4</span>
                    </div>
                    <p className="text-sm">Skills translate to jobs</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">∞</span>
                    </div>
                    <p className="text-sm font-bold text-green-600">Loop continues, value compounds</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4 text-red-600">If Any Link Breaks:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    <p className="text-sm"><span className="font-semibold">No content:</span> Platform dies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    <p className="text-sm"><span className="font-semibold">No verification:</span> No trust</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    <p className="text-sm"><span className="font-semibold">No personalization:</span> Users quit</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    <p className="text-sm"><span className="font-semibold">No jobs:</span> Why bother?</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    <p className="text-sm font-bold text-red-600">System collapse</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            This isn't features stacked together.
          </h3>
          <p className="text-xl">
            It's an operating system where each module feeds the next.
            <br />
            <span className="text-lg opacity-90">Every component is critical. Remove one, and the entire system fails.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}