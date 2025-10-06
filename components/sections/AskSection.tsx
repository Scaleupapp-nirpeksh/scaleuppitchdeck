'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, TrendingUp, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function AskSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fundingStages = [
    {
      stage: 'NOW - Pre-Seed FFF',
      status: 'Currently Raising',
      amount: '₹4 Crore',
      timeline: 'Q4 2025',
      metrics: '5,000 users, 50% retention',
      icon: Rocket,
      active: true,
    },
    {
      stage: 'Seed Round',
      status: 'Planned',
      amount: '₹15-20 Crore',
      timeline: 'Dec 2026',
      metrics: '100,000 users, ₹40L MRR',
      icon: Target,
    },
    {
      stage: 'Series A',
      status: 'Planned',
      amount: '₹30-40 Crore',
      timeline: 'Q2-Q3 2027',
      metrics: '250,000 users, ₹1 Cr MRR',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="ask" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Our Funding Journey
          </h2>
          <p className="text-xl text-text-secondary">Pre-Seed → Seed → Series A</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {fundingStages.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`${stage.active ? 'bg-gradient-to-br from-orange-50 to-white ring-2 ring-orange-500' : 'bg-white'} rounded-2xl shadow-lg p-8`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                <stage.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{stage.stage}</h3>
              <p className={`text-sm font-semibold mb-4 ${stage.active ? 'text-orange-600' : 'text-text-secondary'}`}>
                {stage.status}
              </p>
              <p className="text-2xl font-bold text-primary mb-2">{stage.amount}</p>
              <p className="text-sm text-text-secondary mb-2">{stage.timeline}</p>
              <p className="text-sm text-text-secondary">{stage.metrics}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">Three Ways to Engage</h3>
          <div className="space-y-4">
            <div>
              <span className="font-bold">1. Join Pre-Seed Now:</span> Milestone-based tranches de-risk investment. Quarterly proof points.
            </div>
            <div>
              <span className="font-bold">2. Track for Seed:</span> We'll share quarterly updates. If we hit milestones by Dec 2026, let's talk.
            </div>
            <div>
              <span className="font-bold">3. Relationship for Series A:</span> Stay connected for 18 months. Watch us execute.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}