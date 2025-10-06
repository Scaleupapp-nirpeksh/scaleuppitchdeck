// Placeholder sections to complete the pitch deck
// These need to be created as separate files in /components/sections/

// InsightSection.tsx
export const InsightSectionCode = `
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, CheckCircle, XCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function InsightSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="insight" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            The Missing Operating System
          </h2>
          <p className="text-xl text-text-secondary">Knowledge → Verification → Career</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Layer 1: Knowledge Acquisition</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>• Engaging content they'll actually consume</li>
              <li>• Social learning (peers teaching peers)</li>
              <li>• Bite-sized, mobile-first format</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Layer 2: Skill Verification</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>• Proof they learned it (not just watched)</li>
              <li>• Performance tracking across topics</li>
              <li>• Continuous assessment, not final exam</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Layer 3: Career Translation</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>• Learning data → Verified skill profile</li>
              <li>• Skill profile → Job matching</li>
              <li>• Complete loop from study to salary</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl text-center"
        >
          <p className="text-xl font-semibold">
            "No one has built the complete operating system. Everyone built features. We're building infrastructure."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
`;

// SolutionSection.tsx
export const SolutionSectionCode = `
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
              <div className={\`w-16 h-16 bg-gradient-to-br \${module.color} rounded-xl flex items-center justify-center mb-6\`}>
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
      </div>
    </section>
  );
}
`;

// RoadmapSection.tsx
export const RoadmapSectionCode = `
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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (index % 2 === 0 ? -50 : 50) }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={\`flex \${index % 2 === 0 ? 'justify-start' : 'justify-end'}\`}
              >
                <div className={\`w-5/12 \${phase.highlight ? 'bg-gradient-to-br from-orange-50 to-white border-2 border-orange-500' : 'bg-white'} rounded-2xl shadow-lg p-6\`}>
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
`;

// AskSection.tsx
export const AskSectionCode = `
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
              className={\`\${stage.active ? 'bg-gradient-to-br from-orange-50 to-white ring-2 ring-orange-500' : 'bg-white'} rounded-2xl shadow-lg p-8\`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                <stage.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{stage.stage}</h3>
              <p className={\`text-sm font-semibold mb-4 \${stage.active ? 'text-orange-600' : 'text-text-secondary'}\`}>
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
              <span className="font-bold">1. Join Pre-Seed Now:</span> Milestone-based tranches de-risk investment.
            </div>
            <div>
              <span className="font-bold">2. Track for Seed:</span> We'll share quarterly updates.
            </div>
            <div>
              <span className="font-bold">3. Relationship for Series A:</span> Stay connected for 18 months.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`;

// ContactSection.tsx
export const ContactSectionCode = `
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Calendar, Download, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Build India's Learning OS Together
          </h2>
          <p className="text-xl text-text-secondary">Connect with the founders</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Nirpeksh</h3>
            <p className="text-lg text-accent font-semibold mb-4">Co-founder, CEO</p>
            <div className="space-y-3">
              <a href="mailto:nirpeksh@scaleup.in" className="flex items-center text-text-secondary hover:text-primary">
                <Mail className="w-5 h-5 mr-3" />
                nirpeksh@scaleup.in
              </a>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center text-text-secondary hover:text-primary">
                <Phone className="w-5 h-5 mr-3" />
                +91 XXXXXXXXXX
              </a>
              <a href="#" className="flex items-center text-text-secondary hover:text-primary">
                <Linkedin className="w-5 h-5 mr-3" />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Pratiksha</h3>
            <p className="text-lg text-accent font-semibold mb-4">Co-founder</p>
            <div className="space-y-3">
              <a href="mailto:pratiksha@scaleup.in" className="flex items-center text-text-secondary hover:text-primary">
                <Mail className="w-5 h-5 mr-3" />
                pratiksha@scaleup.in
              </a>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center text-text-secondary hover:text-primary">
                <Phone className="w-5 h-5 mr-3" />
                +91 XXXXXXXXXX
              </a>
              <a href="#" className="flex items-center text-text-secondary hover:text-primary">
                <Linkedin className="w-5 h-5 mr-3" />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center text-text-secondary mb-8">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Bengaluru, India</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Meeting
            </button>
            <button className="btn-secondary flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download PDF Deck
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
`;