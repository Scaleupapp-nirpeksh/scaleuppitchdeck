'use client';

import React, { useMemo, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, ChevronRight, ChevronDown, X, Users, TrendingUp, DollarSign,
  Sparkles, CheckCircle, Filter, Grid3x3, Brain, DollarSign as Dollar,
  Briefcase, Code, Rocket, Trophy, Target, Zap, ArrowRight, Activity
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function RoadmapSection() {
  const [headerRef, headerInView] = useInView({ triggerOnce: false, threshold: 0 });
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedQuarter, setSelectedQuarter] = useState<string>('all');
  const [hoveredQuarter, setHoveredQuarter] = useState<string | null>(null);
  const [activeQuarter, setActiveQuarter] = useState<string>('Q4 2025');
  const [visibleQuarterIndex, setVisibleQuarterIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Add styles for scrollbar hiding and grid
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const styleId = 'roadmap-custom-styles';
      if (!document.getElementById(styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = styleId;
        styleSheet.textContent = `
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .scroll-smooth {
            scroll-behavior: smooth;
          }
          .snap-x {
            scroll-snap-type: x mandatory;
          }
          .snap-center {
            scroll-snap-align: center;
          }
          .bg-grid-white\\/10 {
            background-image: 
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
        `;
        document.head.appendChild(styleSheet);
      }
    }
  }, []);

  // Track which quarter is visible during horizontal scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const quarter = (entry.target as HTMLElement).dataset.quarter;
            const idx = quarterlyMilestones.findIndex(q => q.quarter === quarter);
            if (idx !== -1) {
              setVisibleQuarterIndex(idx);
            }
          }
        });
      },
      { threshold: 0.5, root: document.querySelector('.timeline-scroll-container') }
    );

    Object.values(quarterRefs.current).forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ---- Color class maps (prevents Tailwind purge issues) ----
  const colorMap = {
    blue: {
      border: 'border-blue-200',
      text: 'text-blue-600',
      chip: 'bg-blue-500',
      bgSoft: 'from-blue-50 to-white',
      gradient: 'from-blue-500 to-blue-600',
      ring: 'ring-blue-200',
      accent: 'text-blue-500',
      hover: 'hover:border-blue-300',
      glow: 'shadow-blue-200/50'
    },
    purple: {
      border: 'border-purple-200',
      text: 'text-purple-600',
      chip: 'bg-purple-500',
      bgSoft: 'from-purple-50 to-white',
      gradient: 'from-purple-500 to-purple-600',
      ring: 'ring-purple-200',
      accent: 'text-purple-500',
      hover: 'hover:border-purple-300',
      glow: 'shadow-purple-200/50'
    },
    green: {
      border: 'border-green-200',
      text: 'text-green-600',
      chip: 'bg-green-500',
      bgSoft: 'from-green-50 to-white',
      gradient: 'from-green-500 to-green-600',
      ring: 'ring-green-200',
      accent: 'text-green-500',
      hover: 'hover:border-green-300',
      glow: 'shadow-green-200/50'
    },
    orange: {
      border: 'border-orange-200',
      text: 'text-orange-600',
      chip: 'bg-orange-500',
      bgSoft: 'from-orange-50 to-white',
      gradient: 'from-orange-500 to-orange-600',
      ring: 'ring-orange-200',
      accent: 'text-orange-500',
      hover: 'hover:border-orange-300',
      glow: 'shadow-orange-200/50'
    },
    red: {
      border: 'border-red-200',
      text: 'text-red-600',
      chip: 'bg-red-500',
      bgSoft: 'from-red-50 to-white',
      gradient: 'from-red-500 to-red-600',
      ring: 'ring-red-200',
      accent: 'text-red-500',
      hover: 'hover:border-red-300',
      glow: 'shadow-red-200/50'
    },
    indigo: {
      border: 'border-indigo-200',
      text: 'text-indigo-600',
      chip: 'bg-indigo-500',
      bgSoft: 'from-indigo-50 to-white',
      gradient: 'from-indigo-500 to-indigo-600',
      ring: 'ring-indigo-200',
      accent: 'text-indigo-500',
      hover: 'hover:border-indigo-300',
      glow: 'shadow-indigo-200/50'
    },
    gray: {
      border: 'border-gray-200',
      text: 'text-gray-600',
      chip: 'bg-gray-500',
      bgSoft: 'from-gray-50 to-white',
      gradient: 'from-gray-400 to-gray-500',
      ring: 'ring-gray-200',
      accent: 'text-gray-500',
      hover: 'hover:border-gray-300',
      glow: 'shadow-gray-200/50'
    }
  } as const;

  // ---- Data (your exact content, unchanged) ----
  const quarterlyMilestones = [
    {
      quarter: 'Q4 2025',
      title: 'Foundation & Validation',
      theme: 'Build the Core',
      icon: Rocket,
      color: 'blue',
      metrics: { users: '5,000', retention: '50%', revenue: '₹0', features: 8 },
      highlights: [
        'Launch quiz streaks & gamification',
        'Content Topic Suggestion system',
        'Run 10 campus championships',
        'Onboard 15 paid creators'
      ],
      funding: { status: 'Raising', amount: '₹4 Crore', type: 'Pre-Seed FFF' }
    },
    {
      quarter: 'Q1 2026',
      title: 'AI & Personalization',
      theme: 'Intelligence Layer',
      icon: Brain,
      color: 'purple',
      metrics: { users: '15,000', retention: '58%', revenue: '₹0', features: 15 },
      highlights: [
        'Launch AI learning roadmaps',
        'Deploy study squads',
        'Performance analytics engine',
        'Expand to 20 campus events'
      ]
    },
    {
      quarter: 'Q2 2026',
      title: 'Monetization Engine',
      theme: 'Revenue Activation',
      icon: Dollar,
      color: 'green',
      metrics: { users: '30,000', retention: '65%', revenue: '₹6L MRR', features: 22 },
      highlights: [
        'Launch ₹499 premium tier',
        'B2B communities for institutions',
        'Career guidance v1',
        'Paid quiz tournaments'
      ]
    },
    {
      quarter: 'Q3 2026',
      title: 'Scale & Network Effects',
      theme: 'Growth Explosion',
      icon: TrendingUp,
      color: 'orange',
      metrics: { users: '60,000', retention: '70%', revenue: '₹20L MRR', features: 28 },
      highlights: [
        'CLIP Score algorithm',
        'Creator Journey Optimisation',
        'Advanced career tools',
        'Performance optimization'
      ]
    },
    {
      quarter: 'Q4 2026',
      title: 'Career Platform',
      theme: 'Complete the Loop',
      icon: Briefcase,
      color: 'red',
      metrics: { users: '100,000', retention: '75%', revenue: '₹40L MRR', features: 35 },
      highlights: [
        'Public CLIP scores',
        'AI interview prep',
        'Recruiter dashboard MVP',
        'International prep'
      ],
      funding: { status: 'Target', amount: '₹15-20 Crore', type: 'Seed Round' }
    },
    {
      quarter: 'Q1 2027',
      title: 'Hiring Platform Alpha',
      theme: 'Ultimate Value',
      icon: Trophy,
      color: 'indigo',
      metrics: { users: '150,000', retention: '80%', revenue: '₹60L MRR', features: 40 },
      highlights: [
        'Recruiter dashboard live',
        '5 successful placements',
        'International expansion prep',
        'Series A preparation'
      ]
    }
  ] as const;

  const detailedRoadmap = [
    { month: 'Oct 2025', quarter: 'Q4 2025', features: [
      { name:'Content Request System', category:'product', impact:'VERY HIGH', effort:'HIGH', status:'build' },
      { name:'Quiz Streaks v1', category:'product', impact:'VERY HIGH', effort:'LOW', status:'build' },
      { name:'Paid Creator Program', category:'growth', impact:'VERY HIGH', effort:'LOW', status:'execute' },
      { name:'Campus Championships (3 colleges)', category:'growth', impact:'HIGH', effort:'LOW', status:'execute' }
    ]},
    { month: 'Nov 2025', quarter: 'Q4 2025', features: [
      { name:'AI Learning Roadmap v1 - Data', category:'ai', impact:'VERY HIGH', effort:'MEDIUM', status:'build' },
      { name:'Creator Dashboard v1', category:'product', impact:'HIGH', effort:'MEDIUM', status:'build' },
      { name:'Campus Championships (4 colleges)', category:'growth', impact:'HIGH', effort:'LOW', status:'execute' }
    ]},
    { month: 'Dec 2025', quarter: 'Q4 2025', features: [
      { name:'AI Learning Roadmap - Algorithm', category:'ai', impact:'VERY HIGH', effort:'HIGH', status:'build' },
      { name:'AI Learning Roadmap - Delivery', category:'ai', impact:'VERY HIGH', effort:'MEDIUM', status:'build' },
      { name:'Beta Launch AI Roadmap', category:'ai', impact:'VERY HIGH', effort:'LOW', status:'execute' },
      { name:'Campus Championships (3 colleges)', category:'growth', impact:'HIGH', effort:'LOW', status:'execute' }
    ]},
    { month: 'Jan 2026', quarter: 'Q1 2026', features: [
      { name:'AI Learning Roadmap - Full Launch', category:'ai', impact:'VERY HIGH', effort:'LOW', status:'execute' },
      { name:'Study Squads v1', category:'product', impact:'VERY HIGH', effort:'HIGH', status:'build' },
      { name:'Creator Bootcamp', category:'growth', impact:'MEDIUM', effort:'LOW', status:'execute' },
      { name:'Campus Championships (7 colleges)', category:'growth', impact:'HIGH', effort:'LOW', status:'execute' }
    ]},
    { month: 'Feb 2026', quarter: 'Q1 2026', features: [
      { name:'AI Performance Analytics', category:'ai', impact:'HIGH', effort:'MEDIUM', status:'build' },
      { name:'Progress Dashboard', category:'product', impact:'HIGH', effort:'LOW', status:'build' },
      { name:'Referral Program', category:'growth', impact:'MEDIUM', effort:'LOW', status:'build' }
    ]},
    { month: 'Mar 2026', quarter: 'Q1 2026', features: [
      { name:'AI Roadmap v2 - Adaptive', category:'ai', impact:'HIGH', effort:'MEDIUM', status:'build' },
      { name:'Study Squads v2', category:'product', impact:'MEDIUM', effort:'LOW', status:'build' },
      { name:'Exam Coverage Expansion', category:'product', impact:'MEDIUM', effort:'MEDIUM', status:'build' }
    ]},
    { month: 'Apr 2026', quarter: 'Q2 2026', features: [
      { name:'Premium Subscription Launch', category:'revenue', impact:'VERY HIGH', effort:'LOW', status:'build' },
      { name:'Pricing Beta Test', category:'revenue', impact:'VERY HIGH', effort:'LOW', status:'execute' },
      { name:'Communities Beta', category:'revenue', impact:'HIGH', effort:'HIGH', status:'build' },
      { name:'Career Guidance v1 - Data', category:'career', impact:'VERY HIGH', effort:'MEDIUM', status:'build' }
    ]},
    { month: 'May 2026', quarter: 'Q2 2026', features: [
      { name:'Career Guidance - Algorithm', category:'career', impact:'VERY HIGH', effort:'HIGH', status:'build' },
      { name:'Communities Pilot', category:'revenue', impact:'HIGH', effort:'LOW', status:'execute' },
      { name:'Premium Conversion Push', category:'revenue', impact:'VERY HIGH', effort:'LOW', status:'execute' }
    ]},
    { month: 'Jun 2026', quarter: 'Q2 2026', features: [
      { name:'Career Guidance Launch', category:'career', impact:'VERY HIGH', effort:'LOW', status:'execute' },
      { name:'Paid Quiz Tournaments', category:'revenue', impact:'MEDIUM', effort:'MEDIUM', status:'build' },
      { name:'Creator Leaderboard', category:'product', impact:'MEDIUM', effort:'LOW', status:'build' }
    ]},
    { month: 'Jul 2026', quarter: 'Q3 2026', features: [
      { name:'Creator Marketplace v1', category:'revenue', impact:'MEDIUM', effort:'HIGH', status:'build' },
      { name:'CLIP Score - Algorithm Design', category:'career', impact:'VERY HIGH', effort:'MEDIUM', status:'build' },
      { name:'Career Guidance Expansion', category:'career', impact:'MEDIUM', effort:'MEDIUM', status:'build' }
    ]},
    { month: 'Aug 2026', quarter: 'Q3 2026', features: [
      { name:'CLIP Score - Alpha Build', category:'career', impact:'VERY HIGH', effort:'MEDIUM', status:'build' },
      { name:'AI Career v2 - Company Prep', category:'career', impact:'HIGH', effort:'MEDIUM', status:'build' },
      { name:'Performance Optimization', category:'product', impact:'MEDIUM', effort:'MEDIUM', status:'build' }
    ]},
    { month: 'Sep 2026', quarter: 'Q3 2026', features: [
      { name:'CLIP Score - Private Beta', category:'career', impact:'VERY HIGH', effort:'LOW', status:'execute' },
      { name:'Advanced Analytics for Premium', category:'revenue', impact:'MEDIUM', effort:'MEDIUM', status:'build' },
      { name:'Seed Round Prep', category:'funding', impact:'CRITICAL', effort:'LOW', status:'execute' }
    ]}
  ];

  const categories = [
    { id: 'all', name: 'All Features', icon: Grid3x3, color: 'gray' },
    { id: 'product', name: 'Product', icon: Code, color: 'blue' },
    { id: 'ai', name: 'AI Features', icon: Brain, color: 'purple' },
    { id: 'growth', name: 'Growth', icon: Users, color: 'green' },
    { id: 'revenue', name: 'Revenue', icon: Dollar, color: 'green' },
    { id: 'career', name: 'Career Platform', icon: Briefcase, color: 'orange' },
    { id: 'funding', name: 'Funding', icon: Rocket, color: 'red' }
  ] as const;

  // ---- Filtering for modal ----
  const filteredRoadmap = useMemo(() => {
    const base = selectedQuarter === 'all'
      ? detailedRoadmap
      : detailedRoadmap.filter(m => m.quarter === selectedQuarter);
    return base.map(m => ({
      ...m,
      features: m.features.filter(f => selectedCategory === 'all' ? true : f.category === selectedCategory)
    })).filter(m => m.features.length > 0);
  }, [selectedQuarter, selectedCategory]);

  // ---- Refs for quarter cards ----
  const quarterRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // ---- Small helpers ----
  const Impact = ({ level }: { level: string }) => {
    const color =
      level === 'VERY HIGH' || level === 'CRITICAL' ? 'text-red-600' :
      level === 'HIGH' ? 'text-orange-600' :
      level === 'MEDIUM' ? 'text-yellow-600' : 'text-gray-600';
    return <span className={`font-semibold ${color}`}>{level}</span>;
  };

  return (
    <section id="roadmap" className="relative min-h-screen py-12 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Compact Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-4 py-2 rounded-full shadow"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.1 }}
            >
              <Calendar className="w-4 h-4" />
              <span className="font-semibold text-sm">18-Month Execution Plan</span>
            </motion.div>

            <motion.button
              onClick={() => setShowDetailedView(true)}
              className="group inline-flex items-center gap-2 px-5 py-2 bg-gray-900 text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-4 h-4" />
              Month-by-Month
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-gray-800">From MVP to </span>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Market Leader
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every milestone de-risks the next.
          </p>
        </motion.div>

        {/* Horizontal Timeline Container */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-bold text-gray-900">Currently in Q4 2025</span>
              </div>
              
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '16.67%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Horizontal Scrollable Timeline */}
          <div className="relative group">
            {/* Horizontal Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 via-orange-200 via-red-200 to-indigo-200" />
            
            {/* Animated Progress Line */}
            <motion.div
              className="absolute top-16 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: '16.67%' }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Scroll Navigation Arrows */}
            <button
              onClick={() => {
                const container = document.querySelector('.timeline-scroll-container');
                if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-gray-200 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 hover:border-indigo-300"
              aria-label="Scroll left"
            >
              <ChevronDown className="w-6 h-6 text-gray-700 rotate-90" />
            </button>
            
            <button
              onClick={() => {
                const container = document.querySelector('.timeline-scroll-container');
                if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-gray-200 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110 hover:border-indigo-300"
              aria-label="Scroll right"
            >
              <ChevronDown className="w-6 h-6 text-gray-700 -rotate-90" />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-x-auto pb-8 hide-scrollbar scroll-smooth snap-x snap-mandatory timeline-scroll-container">
              <div className="inline-flex gap-8 min-w-full px-4">
                {quarterlyMilestones.map((q, idx) => {
                  const c = colorMap[q.color as keyof typeof colorMap];
                  const isHovered = hoveredQuarter === q.quarter;

                  return (
                    <motion.div
                      key={q.quarter}
                      data-quarter={q.quarter}
                      ref={(el) => (quarterRefs.current[q.quarter] = el)}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex-shrink-0 w-80 snap-center"
                      onMouseEnter={() => setHoveredQuarter(q.quarter)}
                      onMouseLeave={() => setHoveredQuarter(null)}
                    >
                      {/* Timeline Node */}
                      <div className="flex flex-col items-center mb-4">
                        <motion.div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.gradient} shadow-lg flex items-center justify-center border-4 border-white mb-2`}
                          animate={{
                            scale: isHovered ? 1.15 : 1,
                            rotate: isHovered ? 5 : 0,
                          }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <q.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <div className={`px-3 py-1 text-xs font-bold rounded-full ${c.text} bg-white border-2 ${c.border} shadow-sm`}>
                          {q.quarter}
                        </div>
                      </div>

                      {/* Compact Card */}
                      <motion.div
                        className={`bg-white border-2 ${c.border} rounded-2xl shadow-lg overflow-hidden transition-all ${c.hover}`}
                        whileHover={{ 
                          y: -8,
                          boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.2)'
                        }}
                      >
                        {/* Card Header */}
                        <div className={`p-4 bg-gradient-to-br ${c.bgSoft} border-b ${c.border}`}>
                          <div className="mb-3">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{q.title}</h3>
                            <span className={`text-xs font-semibold ${c.accent}`}>{q.theme}</span>
                          </div>

                          {/* Compact Metrics */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white rounded-lg p-2 border border-gray-100">
                              <div className="flex items-center gap-1 mb-0.5">
                                <Users className={`w-3 h-3 ${c.accent}`} />
                                <span className="text-xs text-gray-600">Users</span>
                              </div>
                              <p className="text-sm font-bold text-gray-900">{q.metrics.users}</p>
                            </div>
                            <div className="bg-white rounded-lg p-2 border border-gray-100">
                              <div className="flex items-center gap-1 mb-0.5">
                                <TrendingUp className={`w-3 h-3 ${c.accent}`} />
                                <span className="text-xs text-gray-600">Retention</span>
                              </div>
                              <p className="text-sm font-bold text-gray-900">{q.metrics.retention}</p>
                            </div>
                            <div className="bg-white rounded-lg p-2 border border-gray-100">
                              <div className="flex items-center gap-1 mb-0.5">
                                <DollarSign className={`w-3 h-3 ${c.accent}`} />
                                <span className="text-xs text-gray-600">Revenue</span>
                              </div>
                              <p className="text-sm font-bold text-gray-900">{q.metrics.revenue}</p>
                            </div>
                            <div className="bg-white rounded-lg p-2 border border-gray-100">
                              <div className="flex items-center gap-1 mb-0.5">
                                <Sparkles className={`w-3 h-3 ${c.accent}`} />
                                <span className="text-xs text-gray-600">Features</span>
                              </div>
                              <p className="text-sm font-bold text-gray-900">{q.metrics.features}</p>
                            </div>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="p-4 space-y-2">
                          {q.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className={`w-4 h-4 ${c.accent} flex-shrink-0 mt-0.5`} />
                              <p className="text-xs text-gray-700 leading-snug">{h}</p>
                            </div>
                          ))}
                        </div>

                        {/* Funding Badge */}
                        {'funding' in q && q.funding && (
                          <div className="px-4 pb-4">
                            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-50 border border-green-200">
                              <Rocket className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <div className="text-xs">
                                <span className="text-gray-600">{q.funding.status}: </span>
                                <span className="font-bold text-gray-900">{q.funding.amount}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Scroll Indicator Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {quarterlyMilestones.map((q, idx) => (
                <motion.button
                  key={q.quarter}
                  onClick={() => {
                    const container = document.querySelector('.timeline-scroll-container');
                    const cards = container?.querySelectorAll('[data-quarter]');
                    if (cards && cards[idx]) {
                      cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                  }}
                  className={`transition-all ${
                    idx === visibleQuarterIndex
                      ? 'w-8 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full' 
                      : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to ${q.quarter}`}
                />
              ))}
            </div>

            {/* Scroll Hint */}
            <motion.div
              className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <ArrowRight className="w-4 h-4" />
              <span>Scroll or drag to explore the timeline</span>
              <ArrowRight className="w-4 h-4 rotate-180" />
            </motion.div>
          </div>
        </div>

        {/* Compact KPI Summary */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white rounded-xl p-5 border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all group"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">User Growth</p>
                <p className="text-2xl font-bold text-gray-900">300x</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">From 350 to 100K+ in 15 months</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-5 border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all group"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Retention Rate</p>
                <p className="text-2xl font-bold text-gray-900">50% → 75%</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">Industry-leading engagement</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-5 border-2 border-gray-200 shadow-sm hover:shadow-lg transition-all group"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">MRR Target</p>
                <p className="text-2xl font-bold text-gray-900">₹40L</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">By Dec 2026 (Seed)</p>
          </motion.div>
        </motion.div>

        {/* Compact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative z-10 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">Milestones, Not Promises</h3>
              <p className="text-base opacity-95 max-w-xl mx-auto">
                Every quarter has clear metrics. Every metric has a plan. Every plan is validated with early users.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detailed Roadmap Modal */}
      <AnimatePresence>
        {showDetailedView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto"
            onClick={() => setShowDetailedView(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="min-h-screen py-10 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Modal Header with sticky filters */}
                <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-3xl p-8 z-20 shadow-lg">
                  <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Month-by-Month Roadmap</h3>
                      <p className="text-indigo-100">October 2025 – February 2027</p>
                    </div>
                    <motion.button
                      onClick={() => setShowDetailedView(false)}
                      className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
                  </div>

                  {/* Filters */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Filter className="w-5 h-5" /> Filter by:
                    </div>

                    <select
                      value={selectedQuarter}
                      onChange={(e) => setSelectedQuarter(e.target.value)}
                      className="px-4 py-2 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur text-white text-sm font-medium focus:outline-none focus:border-white/40"
                    >
                      <option value="all" className="text-gray-900">All Quarters</option>
                      {quarterlyMilestones.map(q => (
                        <option key={q.quarter} value={q.quarter} className="text-gray-900">{q.quarter}</option>
                      ))}
                    </select>

                    <div className="flex gap-2 flex-wrap">
                      {categories.map(cat => {
                        const is = selectedCategory === cat.id;
                        return (
                          <motion.button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium border-2 transition-all
                              ${is 
                                ? 'bg-white text-indigo-600 border-white shadow-lg' 
                                : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                              }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="flex items-center gap-2">
                              <cat.icon className="w-4 h-4" />
                              {cat.name}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Timeline Content */}
                <div className="p-8 max-h-[70vh] overflow-y-auto bg-gray-50">
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-200" />
                    
                    <div className="space-y-10">
                      {filteredRoadmap.map((month, i) => (
                        <motion.div
                          key={month.month}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="relative"
                        >
                          {/* Month Header */}
                          <div className="flex items-center gap-4 mb-4">
                            <motion.div
                              className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg flex items-center justify-center text-white font-bold z-10"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <Calendar className="w-6 h-6" />
                            </motion.div>
                            <div>
                              <h4 className="text-xl font-bold text-gray-900">{month.month}</h4>
                              <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
                                {month.quarter}
                              </span>
                            </div>
                          </div>

                          {/* Features Grid */}
                          <div className="ml-16 grid md:grid-cols-2 gap-4">
                            {month.features.map((f, idx) => {
                              const catInfo = categories.find(c => c.id === f.category);
                              const catColor = catInfo ? colorMap[catInfo.color as keyof typeof colorMap] : colorMap.gray;
                              
                              return (
                                <motion.div
                                  key={idx}
                                  className="group bg-white rounded-2xl border-2 border-gray-100 p-5 hover:border-indigo-200 hover:shadow-lg transition-all"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.03 }}
                                  whileHover={{ y: -4 }}
                                >
                                  <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                      <p className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                        {f.name}
                                      </p>
                                      <div className="flex items-center gap-2">
                                        {catInfo && <catInfo.icon className={`w-4 h-4 ${catColor.accent}`} />}
                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                          {f.category}
                                        </span>
                                      </div>
                                    </div>
                                    <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                                      f.status === 'build' 
                                        ? 'bg-blue-100 text-blue-700' 
                                        : 'bg-green-100 text-green-700'
                                    }`}>
                                      {f.status.toUpperCase()}
                                    </span>
                                  </div>
                                  
                                  <div className="flex items-center gap-4 text-xs">
                                    <div className="flex items-center gap-1">
                                      <span className="text-gray-500">Effort:</span>
                                      <span className="font-semibold text-gray-700">{f.effort}</span>
                                    </div>
                                    <div className="w-px h-3 bg-gray-200" />
                                    <div className="flex items-center gap-1">
                                      <span className="text-gray-500">Impact:</span>
                                      <Impact level={f.impact} />
                                    </div>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-white border-t-2 border-gray-100 p-6 rounded-b-3xl shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Showing <span className="font-bold text-gray-900">
                        {filteredRoadmap.reduce((acc, m) => acc + m.features.length, 0)}
                      </span>{' '}
                      features across <span className="font-bold text-gray-900">{filteredRoadmap.length}</span> months
                    </div>
                    <motion.button
                      onClick={() => setShowDetailedView(false)}
                      className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
