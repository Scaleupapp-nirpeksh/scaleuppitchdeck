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