'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, Users, BookX, Clock, TrendingDown, IndianRupee } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function CondensedProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToSolution = () => {
    const el = document.getElementById('solution');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="problem" className="min-h-screen flex items-center py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Problem We’re Solving
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Students want outcomes, not just content.
          </p>
        </motion.div>

        {/* Who We Serve */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.15 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Our Target Learners</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <div>
                  <p className="font-semibold text-gray-800">The Aspirants</p>
                  <p className="text-sm text-gray-600">Competitive-exam & placement-focused students</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                <div>
                  <p className="font-semibold text-gray-800">The Stuck</p>
                  <p className="text-sm text-gray-600">Tier-2/3 colleges with limited guidance & peers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                <div>
                  <p className="font-semibold text-gray-800">The Strivers</p>
                  <p className="text-sm text-gray-600">Motivated learners seeking affordable, effective paths</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.25 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {/* Cost / Access */}
          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
            <IndianRupee className="w-8 h-8 text-red-600 mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Access is Expensive</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Premium courses and coaching are priced out of reach</li>
              <li>Quality resources are fragmented across platforms</li>
              <li>Affordable options rarely offer accountability</li>
            </ul>
          </div>

          {/* Engagement / Format */}
          <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
            <Clock className="w-8 h-8 text-orange-600 mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Low Engagement Formats</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Long lectures don’t fit short attention cycles</li>
              <li>No clear “next step” after watching content</li>
              <li>Little feedback loop to keep learners consistent</li>
            </ul>
          </div>

          {/* Retention / Drop-off */}
          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
            <TrendingDown className="w-8 h-8 text-purple-600 mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">High Drop-off</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Motivation fades without peers and streaks</li>
              <li>Lack of quick wins → early churn</li>
              <li>No proof of progress → learners disengage</li>
            </ul>
          </div>

          {/* Verification */}
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <BookX className="w-8 h-8 text-blue-700 mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">No Verification</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Watching ≠ learning — no rapid checks</li>
              <li>Hard to measure mastery at each step</li>
              <li>Progress is not portable or shareable</li>
            </ul>
          </div>

          {/* Personalization */}
          <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200">
            <Users className="w-8 h-8 text-emerald-700 mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">One-Size-Fits-None</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Same path for everyone despite different gaps</li>
              <li>No AI-guided remediation on weak areas</li>
              <li>Minimal accountability tailored to the individual</li>
            </ul>
          </div>

          {/* Outcomes */}
          <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
            <XCircle className="w-8 h-8 text-slate-700 mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Learning ≠ Outcomes</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Certificates don’t translate into verified skills</li>
              <li>Hard to showcase capability to employers</li>
              <li>Career connection layer is missing</li>
            </ul>
          </div>
        </motion.div>

        {/* Summary Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: 1 }}
          transition={{ delay: 0.35 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Content isn’t the bottleneck — outcomes are.
            </h3>
            <p className="text-base md:text-lg opacity-95">
              Existing solutions built content libraries. Learners need a social,
              verified, and personalized path that sustains momentum and proves mastery.
            </p>

            <button
              onClick={scrollToSolution}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-red-700 font-semibold px-5 py-2 hover:bg-white/90 transition"
              aria-label="Scroll to the Solution section"
            >
              How we solve this
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
