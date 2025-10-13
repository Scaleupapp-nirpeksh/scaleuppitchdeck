'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award, Users, TrendingUp, Calendar, Target, Zap,
  CheckCircle, Sparkles, School, BookOpen, Timer
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell
} from 'recharts';

export default function TractionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  // ---- Actual validated data (as provided) ----
  const actual = {
    students: 350,
    retentionM1: 55,          // Month-1 retention (pilot)
    quizzes: 50,
    participations: 750,      // 750+
    timeToSignalsDays: 60,
    spend: 50000,             // ₹50,000 minimalistic
    industryRetention: 30     // context used previously in your deck
  };

  // Safe Tailwind color map (avoid dynamic class names)
  const colorStyles: Record<
    'yellow' | 'green' | 'blue' | 'purple',
    { bg: string; text: string; border: string }
  > = {
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-500' },
    green:  { bg: 'bg-green-100',  text: 'text-green-700',  border: 'border-green-500' },
    blue:   { bg: 'bg-blue-100',   text: 'text-blue-700',   border: 'border-blue-500' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-500' },
  };

  // Key metrics (only your data; no new claims)
  const keyMetrics = [
    {
      id: 'validation',
      icon: School,
      value: actual.students,
      label: 'Students (Pilot)',
      detail: 'IIT Bombay cohort',
      suffix: '+',
      color: 'yellow' as const,
      highlight: 'Peer-created learning validated at IIT Bombay',
    },
    {
      id: 'retention',
      icon: TrendingUp,
      value: actual.retentionM1,
      label: 'Month-1 Retention',
      detail: `~${actual.retentionM1 - actual.industryRetention}% above typical industry (~${actual.industryRetention}%)`,
      suffix: '%',
      color: 'green' as const,
      highlight: 'Retention with communities + quizzes',
    },
    {
      id: 'engagement',
      icon: Target,
      value: actual.participations,
      label: 'Quiz Participations',
      detail: `${actual.quizzes} quizzes run`,
      suffix: '+',
      color: 'blue' as const,
      highlight: '2-minute verification loop sustained engagement',
    },
    {
      id: 'speed',
      icon: Timer,
      value: actual.timeToSignalsDays,
      label: 'Days to Signals',
      detail: 'Minimalistic spend: ₹50,000',
      suffix: '',
      color: 'purple' as const,
      highlight: 'Capital-efficient validation sprint',
    },
  ];

  // Single safe comparison: ScaleUp vs Industry Avg
  const retentionCompare = useMemo(
    () => [
      { name: 'ScaleUp (Pilot)', retention: actual.retentionM1, color: '#10B981' },
      { name: 'Industry Avg', retention: actual.industryRetention, color: '#9CA3AF' },
    ],
    [actual.retentionM1, actual.industryRetention]
  );

  const formatINR = (n: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

  return (
    <section id="traction" className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
          className="text-center mb-14"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-5"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ delay: 0.15, type: 'spring' }}
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Early Signals (60-day pilot)</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Proof over Promises
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We validated a social + verified learning loop rapidly with a minimalistic spend of {formatINR(actual.spend)}.
          </p>
        </motion.div>

        {/* Validation band */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-800">What’s live and validated</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800">✅ Communities</span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800">✅ Quizzes (2-min)</span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800">✅ Retention 55% M1</span>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800">✅ 350 students</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Metric tiles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
        >
          {keyMetrics.map((m, i) => {
            const cs = colorStyles[m.color];
            const Icon = m.icon;
            const active = selectedMetric === m.id;
            return (
              <motion.button
                key={m.id}
                type="button"
                onClick={() => setSelectedMetric(active ? null : m.id)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }}
                transition={{ delay: 0.35 + i * 0.08 }}
                className={`text-left bg-white rounded-2xl p-6 shadow-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300
                  ${active ? cs.border : 'border-gray-100'} hover:shadow-xl`}
                aria-expanded={active}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${cs.bg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${cs.text}`} />
                  </div>
                </div>

                <div className="text-3xl font-bold text-gray-800 mb-1 tabular-nums">
                  {inView && <CountUp end={m.value} duration={1.4} suffix={m.suffix} />}
                </div>
                <p className="font-semibold text-gray-800">{m.label}</p>
                <p className="text-sm text-gray-600 mt-1">{m.detail}</p>

                <AnimatePresence>
                  {active && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <p className="text-xs font-medium text-gray-700">💡 {m.highlight}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Retention comparison (only ScaleUp vs Industry Avg) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ delay: 0.35 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h3 className="text-xl font-bold mb-6">Retention Signal (Pilot)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={retentionCompare}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis unit="%" />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Bar dataKey="retention">
                {retentionCompare.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <span className="font-semibold">{actual.retentionM1}% Month-1 retention</span> in pilot vs ~{actual.industryRetention}% typical industry. 
              Achieved with communities + 2-minute quizzes and minimal spend.
            </p>
          </div>
        </motion.div>

        {/* Bottom line / CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.98 }}
          transition={{ delay: 0.45 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <CheckCircle className="w-14 h-14 mx-auto mb-5" />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Early Signals to Scale</h3>
          <p className="text-base md:text-lg opacity-95 mb-5">
            350 learners • 750+ quiz participations • 55% M1 retention • {formatINR(actual.spend)} spend (pilot)
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Next: Unit Economics & Roadmap</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
