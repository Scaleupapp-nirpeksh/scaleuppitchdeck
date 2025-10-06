'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Brain, Award, Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function SolutionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const modules = [
    {
      icon: Users,
      title: 'Social Learning Engine',
      features: [
        '10-minute peer-created videos',
        'Dual verification: AI + SME',
        'LearnLists: Curated journeys',
        'Communities (LIVE MVP)',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      title: 'Verification Layer',
      features: [
        '2-minute quizzes after videos',
        'Daily streaks, leaderboards',
        'Continuous performance tracking',
        'AI identifies weak areas',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Brain,
      title: 'Personalization Engine',
      features: [
        'AI-powered study roadmaps',
        'Adaptive content delivery',
        'Weak area remediation',
        'Career guidance (Q1 2026)',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Briefcase,
      title: 'Career Translation',
      features: [
        'Performance → Skill profiles',
        'Skill reputation system (Q3 2026)',
        'Hiring platform (Q4 2026)',
        'Complete the loop',
      ],
      color: 'from-orange-500 to-orange-600',
    },
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            The Complete Learning Operating System
          </h2>
          <p className="text-xl text-text-secondary">Four Integrated Modules</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-6`}>
                <module.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{module.title}</h3>
              <ul className="space-y-2">
                {module.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl text-center"
        >
          <p className="text-xl font-semibold">
            "This isn't features stacked together. It's an operating system where each module feeds the next."
          </p>
        </motion.div>
      </div>
    </section>
  );
}