'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Users, Target, Layers, ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';

export default function MarketOpportunitySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="opportunity"
      className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white"
      aria-label="Market Opportunity"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-5">
            <Layers className="w-4 h-4" />
            <span className="text-sm font-semibold">The Opportunity</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A large, underserved space for social, verified learning
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Content is abundant. Outcomes are scarce. The gap is a platform that
            makes learning social, verifies progress in minutes, and translates skills into opportunity.
          </p>
        </motion.div>

        {/* Core Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-6 mb-12"
          aria-label="Core market stats"
        >
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded-full">
                Market Size (India)
              </span>
            </div>
            <div className="text-4xl font-extrabold text-gray-900 tracking-tight tabular-nums">
              {inView ? <CountUp end={37000} duration={1.4} /> : '0'}
              <span className="text-blue-600"> Cr</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Online learning & skill-building
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-green-600" />
              <span className="text-sm font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full">
                Addressable Learners
              </span>
            </div>
            <div className="text-4xl font-extrabold text-gray-900 tracking-tight tabular-nums">
              {inView ? <CountUp end={50} duration={1.2} /> : '0'}
              <span className="text-green-600"> M</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Students & early professionals
            </p>
          </div>
        </motion.div>

        {/* Whitespace: where we play */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl p-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 mb-12"
        >
          <div className="rounded-3xl bg-white p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
              The whitespace: social + verified + personalized
            </h3>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
              Most products stop at content delivery. The opportunity is a loop that sustains motivation,
              verifies mastery in minutes, and builds portable skill profiles.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h4 className="font-semibold text-gray-800 mb-2">Social Learning</h4>
                <p className="text-sm text-gray-600">
                  Peer-created 10-minute lessons and communities that keep learners engaged.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h4 className="font-semibold text-gray-800 mb-2">Verification</h4>
                <p className="text-sm text-gray-600">
                  2-minute quizzes and feedback loops to prove progress continuously.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <h4 className="font-semibold text-gray-800 mb-2">Personalization & Careers</h4>
                <p className="text-sm text-gray-600">
                  AI-guided paths and verified skill profiles that translate into opportunities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Who within the 50M (no extra numbers, just clarity) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 12 }}
          transition={{ delay: 0.25 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <Target className="w-6 h-6 text-indigo-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-1">The Aspirants</h4>
            <p className="text-sm text-gray-600">
              Competitive exams & placement-focused learners seeking affordable, effective prep.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <Target className="w-6 h-6 text-indigo-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-1">The Stuck</h4>
            <p className="text-sm text-gray-600">
              Tier-2/3 college students who lack guidance, peers, and a path to outcomes.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <Target className="w-6 h-6 text-indigo-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-1">The Strivers</h4>
            <p className="text-sm text-gray-600">
              Motivated learners who prefer short, social learning and quick verification.
            </p>
          </div>
        </motion.div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h3 className="text-lg md:text-xl font-bold mb-1">Ready to see how we stand out?</h3>
            <p className="text-sm md:text-base opacity-95">
              Next: a crisp comparison vs. existing players.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => scrollTo('competition')}
                className="inline-flex items-center justify-center rounded-full bg-white text-purple-700 font-semibold px-5 py-2 hover:bg-white/90 transition"
                aria-label="Go to Competition section"
              >
                View Competition
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('solution')}
                className="inline-flex items-center justify-center rounded-full border border-white/40 text-white font-semibold px-5 py-2 hover:bg-white/10 transition"
                aria-label="Back to Solution section"
              >
                Back to Solution
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
