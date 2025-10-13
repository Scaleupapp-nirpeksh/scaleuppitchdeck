'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DollarSign, Users, Building2, Trophy, ShoppingBag,
  Briefcase, Calendar, TrendingUp, Star,
  Lock, Unlock, BarChart3, Clock, ArrowRight,
  Zap, Target, CheckCircle, Calculator, Info
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

import {
  PieChart, Pie, Cell as PieCell, ResponsiveContainer, Tooltip, Legend,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, ReferenceLine, BarChart, Bar
} from 'recharts';

type EconomicsView = 'overview' | 'revenue' | 'timeline' | 'unitecon';

/** ----------------------------
 * Combined Economics Section
 * ---------------------------- */
export default function EconomicsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });
  const [view, setView] = useState<EconomicsView>('overview');
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handler = () => setShowSticky(window.scrollY > 180);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /** ---------- DATA (from your snippets) ---------- */

  // Distribution pie
  const revenueDistribution = [
    { name: 'B2C Revenue', value: 70, color: '#F97316' }, // orange-500
    { name: 'B2B Revenue', value: 30, color: '#3B82F6' }, // blue-500
  ];

  // B2C streams (70%)
  const b2cStreams = [
    {
      id: 'premium',
      name: 'Premium Subscriptions',
      pricing: '₹499-999/month',
      percentage: 40,
      icon: Star,
      color: 'orange' as const,
      features: ['Unlimited quizzes', 'AI study plans', 'Advanced analytics', 'Ad-free experience'],
      launchQuarter: 'Q2 2026',
      projectedUsers: '10,000',
      projectedRevenue: '₹20L',
    },
    {
      id: 'tournaments',
      name: 'Paid Quiz Tournaments',
      pricing: '₹50-200 entry',
      percentage: 20,
      icon: Trophy,
      color: 'yellow' as const,
      features: ['Weekly competitions', 'Prize pools', 'Platform takes 30%'],
      launchQuarter: 'Q2 2026',
      projectedUsers: '25,000',
      projectedRevenue: '₹10L',
    },
    {
      id: 'marketplace',
      name: 'Creator Marketplace',
      pricing: '10% commission',
      percentage: 10,
      icon: ShoppingBag,
      color: 'purple' as const,
      features: ['Premium LearnLists', '1-on-1 mentorship', 'Expert consultations'],
      launchQuarter: 'Q3 2026',
      projectedUsers: '5,000',
      projectedRevenue: '₹5L',
    },
  ];

  // B2B streams (30%)
  const b2bStreams = [
    {
      id: 'institutions',
      name: 'Institution Subscriptions',
      pricing: '₹1.5-3L/year',
      percentage: 20,
      icon: Building2,
      color: 'blue' as const,
      features: ['Private communities', 'Analytics dashboards', 'Custom content', 'Bulk access'],
      launchQuarter: 'Q2 2026',
      projectedClients: '50',
      projectedRevenue: '₹10L',
    },
    {
      id: 'hiring',
      name: 'Hiring Platform',
      pricing: '₹1,000-3,000/placement',
      percentage: 10,
      icon: Briefcase,
      color: 'green' as const,
      features: ['Verified talent', 'CLIP score filtering', 'Direct placement', 'Bulk hiring'],
      launchQuarter: 'Q4 2026',
      projectedPlacements: '500',
      projectedRevenue: '₹5L',
    },
  ];

  // Launch timeline cards
  const launchTimeline = [
    { quarter: 'Q2 2026', month: 'Apr-Jun', streams: ['Premium Subscriptions', 'Quiz Tournaments', 'Institution Subscriptions'], revenue: '₹6L', color: 'blue' as const },
    { quarter: 'Q3 2026', month: 'Jul-Sep', streams: ['Creator Marketplace'], revenue: '₹15L', color: 'purple' as const },
    { quarter: 'Q4 2026', month: 'Oct-Dec', streams: ['Hiring Platform'], revenue: '₹40L', color: 'green' as const },
    { quarter: 'Q1 2027', month: 'Jan-Mar', streams: ['All streams scaling'], revenue: '₹60L', color: 'orange' as const },
  ];

  // Revenue projection (MRR in ₹L)
  const revenueProjection = [
    { month: 'Apr 26', revenue: 0, streams: 0 },
    { month: 'May 26', revenue: 2, streams: 3 },
    { month: 'Jun 26', revenue: 6, streams: 3 },
    { month: 'Jul 26', revenue: 10, streams: 4 },
    { month: 'Aug 26', revenue: 12, streams: 4 },
    { month: 'Sep 26', revenue: 15, streams: 4 },
    { month: 'Oct 26', revenue: 20, streams: 5 },
    { month: 'Nov 26', revenue: 30, streams: 5 },
    { month: 'Dec 26', revenue: 40, streams: 5 },
    { month: 'Jan 27', revenue: 45, streams: 5 },
    { month: 'Feb 27', revenue: 50, streams: 5 },
    { month: 'Mar 27', revenue: 60, streams: 5 },
  ];

  // Unit economics (from your second component)
  const mainMetrics = [
    {
      id: 'cac', title: 'CAC', value: 200, unit: '₹', suffix: '', subtitle: 'per user',
      comparison: "vs Byju's ₹2,000+", icon: TrendingUp, // (visual only)
      color: 'green' as const, trend: 'good' as const,
      details: {
        breakdown: [
          { label: 'Campus Championships', value: '₹100' },
          { label: 'Referral Rewards', value: '₹50' },
          { label: 'Content Creation', value: '₹30' },
          { label: 'Digital Marketing', value: '₹20' },
        ],
        insight: '10x more efficient than TV ads, 5x better than Google Ads',
      },
    },
    {
      id: 'ltv', title: 'LTV', value: 12000, unit: '₹', suffix: '', subtitle: 'per user',
      comparison: '24-month avg lifespan', icon: DollarSign,
      color: 'blue' as const, trend: 'good' as const,
      details: {
        breakdown: [
          { label: 'Month 1-3', value: '₹1,500' },
          { label: 'Month 4-6', value: '₹1,500' },
          { label: 'Month 7-12', value: '₹3,000' },
          { label: 'Month 13-24', value: '₹6,000' },
        ],
        insight: "Conservative vs Duolingo's 70% retention",
      },
    },
    {
      id: 'ratio', title: 'LTV:CAC', value: 60, unit: '', suffix: ':1', subtitle: 'ratio',
      comparison: 'Payback <1 month', icon: Zap,
      color: 'orange' as const, trend: 'excellent' as const,
      details: {
        breakdown: [
          { label: 'Industry Average', value: '3:1' },
          { label: 'Good SaaS', value: '5:1' },
          { label: 'ScaleUp Target', value: '60:1' },
          { label: 'With Scale', value: '100:1+' },
        ],
        insight: 'World-class unit economics from Day 1',
      },
    },
  ];

  const unitEconomics = [
    { metric: 'CAC', value: '₹200', description: 'Campus championships + referrals', detail: '10x more efficient than TV ads', icon: TrendingUp, color: 'green' as const },
    { metric: 'ARPU', value: '₹500/month', description: 'Premium subscriptions', detail: '₹6,000/year per user', icon: DollarSign, color: 'blue' as const },
    { metric: 'Retention', value: '65% Month-2', description: '40% Month-6', detail: "Conservative vs Duolingo's 70%", icon: Users, color: 'purple' as const },
    { metric: 'Gross Margin', value: '85%+', description: 'High margin SaaS model', detail: 'Low content & infra costs', icon: TrendingUp, color: 'orange' as const },
    { metric: 'Break-even', value: '15,000 users', description: '₹75L MRR', detail: 'Achievable by Q2 2027', icon: Target, color: 'red' as const },
    { metric: 'Timeline', value: 'Month 16-18', description: 'Q2 2027', detail: 'Pre Series B', icon: Clock, color: 'indigo' as const },
  ];

  // Break-even (₹L)
  const breakEvenData = [
    { month: 'Jan 26', revenue: 0, costs: 20, users: 0 },
    { month: 'Mar 26', revenue: 6, costs: 25, users: 1000 },
    { month: 'Jun 26', revenue: 15, costs: 35, users: 3000 },
    { month: 'Sep 26', revenue: 30, costs: 45, users: 6000 },
    { month: 'Dec 26', revenue: 50, costs: 55, users: 10000 },
    { month: 'Mar 27', revenue: 75, costs: 65, users: 15000 },
    { month: 'Jun 27', revenue: 100, costs: 75, users: 20000 },
    { month: 'Sep 27', revenue: 150, costs: 85, users: 30000 },
  ];

  // Sticky mini-tabs
  const StickyTabs = ({ visible }: { visible: boolean }) => (
    <div className={`sticky top-0 z-30 transition-all ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
      <div className="backdrop-blur bg-white/70 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center">
          <TabSwitcher view={view} setView={setView} />
        </div>
      </div>
    </div>
  );

  // Non-sticky switcher
  const tabs: { id: EconomicsView; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'revenue', label: 'Revenue Streams' },
    { id: 'timeline', label: 'Launch Timeline' },
    { id: 'unitecon', label: 'Unit Economics' },
  ];

  const TabSwitcher = ({ view, setView }: { view: EconomicsView; setView: (v: EconomicsView) => void }) => (
    <div className="inline-flex items-center bg-gray-100 rounded-lg p-1" role="tablist" aria-label="Economics view">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={view === t.id}
          onClick={() => setView(t.id)}
          className={`px-4 py-2 rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300
            ${view === t.id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );

  // Safe Tailwind color tokens
  const tone = {
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-400', grad: 'from-orange-400 to-orange-600' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-400', grad: 'from-yellow-400 to-yellow-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-400', grad: 'from-purple-400 to-purple-600' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-400', grad: 'from-blue-400 to-blue-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-400', grad: 'from-green-400 to-green-600' },
    red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-400', grad: 'from-red-400 to-red-600' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-400', grad: 'from-indigo-400 to-indigo-600' },
    gray: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-300', grad: 'from-gray-300 to-gray-500' },
  } as const;

  // Helpers
  const [selectedSegment, setSelectedSegment] = useState<'b2c' | 'b2b' | null>(null);
  const [hoveredStream, setHoveredStream] = useState<string | null>(null);

  const handlePieClick = (d: any) => {
    if (!d?.name) return;
    if (d.name.includes('B2C')) setSelectedSegment(selectedSegment === 'b2c' ? null : 'b2c');
    else setSelectedSegment(selectedSegment === 'b2b' ? null : 'b2b');
  };

  // LTV calc (from your unit econ component)
  const [calc, setCalc] = useState({ cac: 200, arpu: 500, retention6: 40 });
  const computeLTV = () => {
    const monthlyChurn = 1 - Math.pow(calc.retention6 / 100, 1 / 6);
    const avgLifetime = 1 / monthlyChurn;
    return Math.round(calc.arpu * avgLifetime);
  };

  const formatINR = (n: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

  return (
    <section id="economics" className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Sticky tabs */}
      <StickyTabs visible={showSticky} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 26 }}
          className="text-center mb-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-4 py-2 rounded-full mb-5"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ delay: 0.15, type: 'spring' }}
          >
            <DollarSign className="w-5 h-5" />
            <span className="font-semibold">Economics: Revenue + Unit Economics</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Sustainable Growth,</span>{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Multiple Monetization Paths</span>
          </h2>

          {/* Primary (non-sticky) tabs */}
          {!showSticky && <TabSwitcher view={view} setView={setView} />}
        </motion.div>

        {/* ---- OVERVIEW ---- */}
        <AnimatePresence mode="wait">
          {view === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Pie */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h3 className="text-xl font-bold text-center mb-6">Revenue Mix (Target)</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={revenueDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={110}
                        dataKey="value"
                        onClick={handlePieClick}
                        style={{ cursor: 'pointer' }}
                      >
                        {revenueDistribution.map((d, i) => (
                          <PieCell
                            key={i}
                            fill={d.color}
                            stroke={(selectedSegment === 'b2c' && d.name.includes('B2C')) || (selectedSegment === 'b2b' && d.name.includes('B2B')) ? '#111827' : '#fff'}
                            strokeWidth={(selectedSegment === 'b2c' && d.name.includes('B2C')) || (selectedSegment === 'b2b' && d.name.includes('B2B')) ? 2 : 1}
                          />
                        ))}
                      </Pie>
                      <Tooltip formatter={(v: number, name: string) => [`${v}%`, name]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                  <p className="mt-4 text-center text-sm text-gray-600">Click a segment to focus details below.</p>

                  {/* Target MRR card */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Target MRR</p>
                        <p className="text-2xl font-bold text-gray-800">₹50L</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">By</p>
                        <p className="text-lg font-bold text-gray-800">Q1 2027</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* KPI strip */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 16 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h3 className="text-xl font-bold mb-6">Unit Economics Snapshot</h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {mainMetrics.map((m, i) => {
                      const Icon = m.icon;
                      const c = tone[m.color];
                      return (
                        <div key={m.id} className="rounded-xl border-2 border-gray-100 p-5">
                          <div className={`w-12 h-12 ${c.bg} rounded-lg flex items-center justify-center mb-3`}>
                            <Icon className={`w-6 h-6 ${c.text}`} />
                          </div>
                          <p className="text-sm text-gray-600">{m.title}</p>
                          <p className="text-3xl font-bold text-gray-900">
                            {m.unit}
                            {inView && <CountUp end={m.value} duration={1.2} separator="," />}
                            {m.suffix}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{m.subtitle}</p>
                          <div className={`mt-3 p-2 rounded-lg ${c.bg}`}>
                            <p className="text-xs font-medium">{m.comparison}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        <p className="font-semibold">Low CAC • High LTV • Fast Payback</p>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm">Explore details in tabs</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---- REVENUE STREAMS ---- */}
        <AnimatePresence mode="wait">
          {view === 'revenue' && (
            <motion.div
              key="revenue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* B2C */}
              <StreamColumn
                title="B2C Revenue Streams (70%)"
                icon={Users}
                toneKey="orange"
                streams={b2cStreams}
                hoveredStream={hoveredStream}
                setHoveredStream={setHoveredStream}
                tone={tone}
              />
              {/* B2B */}
              <StreamColumn
                title="B2B Revenue Streams (30%)"
                icon={Building2}
                toneKey="blue"
                streams={b2bStreams}
                hoveredStream={hoveredStream}
                setHoveredStream={setHoveredStream}
                tone={tone}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---- LAUNCH TIMELINE ---- */}
        <AnimatePresence mode="wait">
          {view === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Vertical timeline cards */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -16 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-800">Launch Sequence</h3>
                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
                    {launchTimeline.map((p, idx) => {
                      const c = tone[p.color];
                      return (
                        <motion.div
                          key={p.quarter}
                          initial={{ opacity: 0, x: -22 }}
                          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -22 }}
                          transition={{ delay: 0.3 + idx * 0.08 }}
                          className="relative flex items-start gap-4 mb-8"
                        >
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${c.grad} shadow-lg flex items-center justify-center z-10`}>
                            <Calendar className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1 bg-white rounded-xl shadow-md p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-bold text-gray-800">{p.quarter}</h4>
                                <p className="text-sm text-gray-600">{p.month}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold text-green-600">{p.revenue}</p>
                                <p className="text-xs text-gray-500">MRR</p>
                              </div>
                            </div>
                            <div className="space-y-1 mt-3 pt-3 border-t border-gray-200">
                              {p.streams.map((s, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                  <ArrowRight className="w-4 h-4 text-blue-500" />
                                  {s}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Revenue build-up area chart */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 16 }}
                  transition={{ delay: 0.25 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Revenue Build-Up</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={revenueProjection}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(v: any, name: string) => [name === 'revenue' ? `₹${v}L` : v, name === 'revenue' ? 'MRR' : 'Streams']} />
                      <Area type="monotone" dataKey="revenue" stroke="#10B981" fill="#10B981" fillOpacity={0.3} strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>

                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">Starting</p>
                      <p className="text-lg font-bold">₹0</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-600">6 Months</p>
                      <p className="text-lg font-bold">₹15L</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600">12 Months</p>
                      <p className="text-lg font-bold">₹60L</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ---- UNIT ECONOMICS ---- */}
        <AnimatePresence mode="wait">
          {view === 'unitecon' && (
            <motion.div
              key="unitecon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Top cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {mainMetrics.map((m, idx) => {
                  const Icon = m.icon;
                  const c = tone[m.color];
                  return (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }}
                      transition={{ delay: 0.2 + idx * 0.08 }}
                      className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{m.title}</p>
                          <div className="flex items-baseline gap-1 mt-2">
                            <span className="text-4xl font-bold text-gray-800">
                              {m.unit}{inView && <CountUp end={m.value} duration={1.4} separator="," />}{m.suffix}
                            </span>
                          </div>
                          <p className="text-lg text-gray-600 mt-1">{m.subtitle}</p>
                        </div>
                        <div className={`w-14 h-14 ${c.bg} rounded-xl flex items-center justify-center`}>
                          <Icon className={`w-8 h-8 ${c.text}`} />
                        </div>
                      </div>
                      <div className={`p-3 ${c.bg} rounded-lg flex items-center justify-between`}>
                        <p className="text-sm font-medium text-gray-800">{m.comparison}</p>
                        {m.trend === 'excellent' ? <Trophy className="w-5 h-5 text-yellow-500" /> : <CheckCircle className="w-5 h-5 text-green-500" />}
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                        {m.details.breakdown.map((b, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{b.label}</span>
                            <span className="font-semibold text-gray-800">{b.value}</span>
                          </div>
                        ))}
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600">{m.details.insight}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Breakdown grid */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8 mb-12"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Unit Economics Breakdown
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {unitEconomics.map((u, i) => {
                    const c = tone[u.color];
                    const Icon = u.icon;
                    return (
                      <motion.div
                        key={u.metric}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.96 }}
                        transition={{ delay: 0.45 + i * 0.04 }}
                        className="group"
                      >
                        <div className={`bg-gradient-to-br from-white to-white rounded-xl p-6 border-2 ${c.border} hover:shadow-lg transition-all`}>
                          <div className="flex items-start gap-3 mb-3">
                            <div className={`w-12 h-12 ${c.bg} rounded-lg flex items-center justify-center`}>
                              <Icon className={`w-6 h-6 ${c.text}`} />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800 text-lg">{u.metric}</p>
                              <p className="text-2xl font-bold text-gray-900">{u.value}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{u.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{u.detail}</p>

                          <div className="mt-4">
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: inView ? '100%' : 0 }}
                                transition={{ duration: 0.9, delay: 0.6 + i * 0.05 }}
                                className={`h-full bg-gradient-to-r ${c.grad}`}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Summary strip */}
                <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <SummaryPill label="CAC Efficiency" value="10x Better" color="text-green-600" />
                  <SummaryPill label="Avg Lifetime" value="24 Months" color="text-blue-600" />
                  <SummaryPill label="Unit Profit" value="₹11,800" color="text-purple-600" />
                  <SummaryPill label="Payback" value="< 1 Month" color="text-orange-600" />
                </div>
              </motion.div>

              {/* Break-even + LTV Calculator */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Path to Break-even
                </h3>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Chart */}
                  <div>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={breakEvenData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(v: number, name: string) => [`₹${v}L`, name === 'revenue' ? 'Revenue' : 'Costs']} />
                        <ReferenceLine x="Mar 27" stroke="#10B981" strokeDasharray="6 6" label={{ value: 'Break-even', position: 'top' }} />
                        <Area type="monotone" dataKey="revenue" stroke="#10B981" fill="#10B981" fillOpacity={0.3} strokeWidth={2} name="Revenue" />
                        <Area type="monotone" dataKey="costs" stroke="#EF4444" fill="#EF4444" fillOpacity={0.25} strokeWidth={2} name="Costs" />
                      </AreaChart>
                    </ResponsiveContainer>

                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                      <CardStat label="Current Burn" value="₹20L/mo" toneClass="text-red-600" bgClass="bg-red-50" />
                      <CardStat label="Break-even" value="Q2 2027" toneClass="text-yellow-600" bgClass="bg-yellow-50" />
                      <CardStat label="At Profit" value="₹25L/mo" toneClass="text-green-600" bgClass="bg-green-50" />
                    </div>
                  </div>

                  {/* Calculator */}
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border-2 border-purple-200">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      LTV Calculator
                    </h4>

                    <Slider label="CAC (₹)" min={100} max={500} value={calc.cac} onChange={(v) => setCalc({ ...calc, cac: v })} />
                    <Slider label="ARPU (₹/month)" min={200} max={1000} value={calc.arpu} onChange={(v) => setCalc({ ...calc, arpu: v })} />
                    <Slider label="6-Month Retention (%)" min={20} max={80} value={calc.retention6} onChange={(v) => setCalc({ ...calc, retention6: v })} />

                    <div className="mt-6 p-4 bg-white rounded-lg text-center">
                      <p className="text-sm text-gray-600">Calculated LTV</p>
                      <p className="text-3xl font-bold text-purple-600">₹{computeLTV().toLocaleString()}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        LTV:CAC Ratio = {(computeLTV() / calc.cac).toFixed(1)}:1
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.98 }}
          transition={{ delay: 0.2 }}
          className="mt-14 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white text-center"
        >
          <Zap className="w-14 h-14 mx-auto mb-3" />
          <h3 className="text-2xl font-bold mb-2">Sustainable & Scalable</h3>
          <p className="opacity-95 max-w-3xl mx-auto">
            B2C drives volume, B2B drives value. Low CAC, fast payback, and multiple, compounding revenue streams.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/** ----------------------------
 * Small Components
 * ---------------------------- */

function StreamColumn({
  title, icon: Icon, toneKey,
  streams, hoveredStream, setHoveredStream,
  tone,
}: {
  title: string;
  icon: any;
  toneKey: keyof typeof tone;
  streams: Array<any>;
  hoveredStream: string | null;
  setHoveredStream: (v: string | null) => void;
  tone: any;
}) {
  const t = tone[toneKey];
  return (
    <div>
      <h3 className={`text-lg font-bold ${t.text} flex items-center gap-2 mb-4`}>
        <Icon className="w-5 h-5" />
        {title}
      </h3>

      <div className="space-y-4">
        {streams.map((s: any, i: number) => {
          const c = tone[s.color as keyof typeof tone] ?? tone.gray;
          const IconS = s.icon;
          const active = hoveredStream === s.id;
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className={`bg-white rounded-xl p-4 shadow-md border-2 transition-all cursor-pointer ${active ? c.border : 'border-gray-200'}`}
              onMouseEnter={() => setHoveredStream(s.id)}
              onMouseLeave={() => setHoveredStream(null)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${c.bg} rounded-lg flex items-center justify-center`}>
                    <IconS className={`w-6 h-6 ${c.text}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{s.name}</h4>
                    <p className="text-sm text-gray-600">{s.pricing}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-800">{s.percentage}%</p>
                  <p className="text-xs text-gray-500">of revenue</p>
                </div>
              </div>

              <AnimatePresence>
                {active && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3"
                  >
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Features:</p>
                      <div className="space-y-1">
                        {s.features.map((f: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-gray-200">
                      <div>
                        <p className="text-xs text-gray-500">Launch</p>
                        <p className="text-sm font-bold">{s.launchQuarter}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">
                          {'projectedUsers' in s ? 'Users' : ('projectedClients' in s ? 'Clients' : 'Placements')}
                        </p>
                        <p className="text-sm font-bold">
                          {'projectedUsers' in s ? s.projectedUsers : ('projectedClients' in s ? s.projectedClients : s.projectedPlacements)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Revenue</p>
                        <p className="text-sm font-bold">{s.projectedRevenue}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SummaryPill({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className={`text-xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

function CardStat({ label, value, toneClass, bgClass }: { label: string; value: string; toneClass: string; bgClass: string }) {
  return (
    <div className={`${bgClass} rounded-lg p-3`}>
      <p className="text-xs text-gray-600">{label}</p>
      <p className={`text-lg font-bold ${toneClass}`}>{value}</p>
    </div>
  );
}

function Slider({
  label, min, max, value, onChange,
}: {
  label: string; min: number; max: number; value: number; onChange: (v: number) => void;
}) {
  return (
    <div className="mb-4">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full"
      />
      <p className="text-right text-sm font-semibold">{value}</p>
    </div>
  );
}
