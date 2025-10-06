'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function RoadmapSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const phases = [
    {
      quarter: 'Q4 2025',
      title: 'Pre-Seed FFF',
      focus: 'Engagement Foundation',
      metrics: '5,000 users, 50% retention',
      funding: 'Raising ₹4 Cr',
      highlight: true,
    },
    {
      quarter: 'Q1 2026',
      title: 'AI Personalization',
      focus: 'AI roadmaps, analytics',
      metrics: '15,000 users, 58% retention',
    },
    {
      quarter: 'Q2 2026',
      title: 'Monetization',
      focus: 'Premium ₹499/m',
      metrics: '30,000 users, ₹6L MRR',
    },
    {
      quarter: 'Q4 2026',
      title: 'Seed Round',
      focus: 'Career Translation',
      metrics: '100,000 users, ₹40L MRR',
      funding: '₹15-20 Cr',
      highlight: true,
    },
  ];

  return (
    <section id="roadmap" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            24-Month Execution Plan
          </h2>
          <p className="text-xl text-text-secondary">Pre-Seed → Seed → Series A</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 hidden md:block"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (index % 2 === 0 ? -50 : 50) }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`flex ${index % 2 === 0 ? 'md:justify-start justify-center' : 'md:justify-end justify-center'}`}
              >
                <div className={`w-full md:w-5/12 ${phase.highlight ? 'bg-gradient-to-br from-orange-50 to-white border-2 border-orange-500' : 'bg-white'} rounded-2xl shadow-lg p-6`}>
                  <div className="text-sm font-semibold text-accent mb-2">{phase.quarter}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-text-secondary mb-2">{phase.focus}</p>
                  <p className="text-sm font-semibold text-primary">{phase.metrics}</p>
                  {phase.funding && (
                    <p className="text-sm font-bold text-orange-600 mt-2">{phase.funding}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}