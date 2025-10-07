'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Target, TrendingUp, Calendar, ChevronRight, X, 
  Users, Brain, Trophy, DollarSign, Sparkles, Award,
  BookOpen, Zap, Building2, Globe, BarChart3, Code,
  MessageSquare, Briefcase, GraduationCap, Star,
  ArrowUp, Clock, CheckCircle, Filter, Grid3x3
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function RoadmapSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedQuarter, setSelectedQuarter] = useState<string>('all');

  // High-level quarterly milestones
  const quarterlyMilestones = [
    {
      quarter: 'Q4 2025',
      title: 'Foundation & Validation',
      theme: 'Build the Core',
      icon: Rocket,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-white',
      metrics: {
        users: '5,000',
        retention: '50%',
        revenue: '₹0',
        features: 8
      },
      highlights: [
        'Launch quiz streaks & gamification',
        'Deploy content request system',
        'Run 10 campus championships',
        'Onboard 15 paid creators'
      ],
      funding: {
        status: 'Raising',
        amount: '₹4 Crore',
        type: 'Pre-Seed FFF'
      }
    },
    {
      quarter: 'Q1 2026',
      title: 'AI & Personalization',
      theme: 'Intelligence Layer',
      icon: Brain,
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-white',
      metrics: {
        users: '15,000',
        retention: '58%',
        revenue: '₹0',
        features: 15
      },
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
      icon: DollarSign,
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-white',
      metrics: {
        users: '30,000',
        retention: '65%',
        revenue: '₹6L MRR',
        features: 22
      },
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
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-white',
      metrics: {
        users: '60,000',
        retention: '70%',
        revenue: '₹20L MRR',
        features: 28
      },
      highlights: [
        'CLIP Score algorithm',
        'Creator marketplace',
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
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-white',
      metrics: {
        users: '100,000',
        retention: '75%',
        revenue: '₹40L MRR',
        features: 35
      },
      highlights: [
        'Public CLIP scores',
        'AI interview prep',
        'Employer dashboard',
        'International prep'
      ],
      funding: {
        status: 'Target',
        amount: '₹15-20 Crore',
        type: 'Seed Round'
      }
    },
    {
      quarter: 'Q1 2027',
      title: 'Hiring Platform Alpha',
      theme: 'Ultimate Value',
      icon: Trophy,
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-white',
      metrics: {
        users: '150,000',
        retention: '80%',
        revenue: '₹60L MRR',
        features: 40
      },
      highlights: [
        'Recruiter dashboard live',
        '5 successful placements',
        'International expansion prep',
        'Series A preparation'
      ]
    }
  ];

  // Detailed monthly roadmap data
  const detailedRoadmap = [
    // October 2025
    {
      month: 'Oct 2025',
      quarter: 'Q4 2025',
      features: [
        { name: 'Content Request System', category: 'product', impact: 'VERY HIGH', effort: 'HIGH', status: 'build' },
        { name: 'Quiz Streaks v1', category: 'product', impact: 'VERY HIGH', effort: 'LOW', status: 'build' },
        { name: 'Paid Creator Program', category: 'growth', impact: 'VERY HIGH', effort: 'LOW', status: 'execute' },
        { name: 'Campus Championships (3 colleges)', category: 'growth', impact: 'HIGH', effort: 'LOW', status: 'execute' }
      ]
    },
    {
      month: 'Nov 2025',
      quarter: 'Q4 2025',
      features: [
        { name: 'AI Learning Roadmap v1 - Data', category: 'ai', impact: 'VERY HIGH', effort: 'MEDIUM', status: 'build' },
        { name: 'Creator Dashboard v1', category: 'product', impact: 'HIGH', effort: 'MEDIUM', status: 'build' },
        { name: 'Campus Championships (4 colleges)', category: 'growth', impact: 'HIGH', effort: 'LOW', status: 'execute' }
      ]
    },
    {
      month: 'Dec 2025',
      quarter: 'Q4 2025',
      features: [
        { name: 'AI Learning Roadmap - Algorithm', category: 'ai', impact: 'VERY HIGH', effort: 'HIGH', status: 'build' },
        { name: 'AI Learning Roadmap - Delivery', category: 'ai', impact: 'VERY HIGH', effort: 'MEDIUM', status: 'build' },
        { name: 'Beta Launch AI Roadmap', category: 'ai', impact: 'VERY HIGH', effort: 'LOW', status: 'execute' },
        { name: 'Campus Championships (3 colleges)', category: 'growth', impact: 'HIGH', effort: 'LOW', status: 'execute' }
      ]
    },
    {
      month: 'Jan 2026',
      quarter: 'Q1 2026',
      features: [
        { name: 'AI Learning Roadmap - Full Launch', category: 'ai', impact: 'VERY HIGH', effort: 'LOW', status: 'execute' },
        { name: 'Study Squads v1', category: 'product', impact: 'VERY HIGH', effort: 'HIGH', status: 'build' },
        { name: 'Creator Bootcamp', category: 'growth', impact: 'MEDIUM', effort: 'LOW', status: 'execute' },
        { name: 'Campus Championships (7 colleges)', category: 'growth', impact: 'HIGH', effort: 'LOW', status: 'execute' }
      ]
    },
    {
      month: 'Feb 2026',
      quarter: 'Q1 2026',
      features: [
        { name: 'AI Performance Analytics', category: 'ai', impact: 'HIGH', effort: 'MEDIUM', status: 'build' },
        { name: 'Progress Dashboard', category: 'product', impact: 'HIGH', effort: 'LOW', status: 'build' },
        { name: 'Referral Program', category: 'growth', impact: 'MEDIUM', effort: 'LOW', status: 'build' }
      ]
    },
    {
      month: 'Mar 2026',
      quarter: 'Q1 2026',
      features: [
        { name: 'AI Roadmap v2 - Adaptive', category: 'ai', impact: 'HIGH', effort: 'MEDIUM', status: 'build' },
        { name: 'Study Squads v2', category: 'product', impact: 'MEDIUM', effort: 'LOW', status: 'build' },
        { name: 'Exam Coverage Expansion', category: 'product', impact: 'MEDIUM', effort: 'MEDIUM', status: 'build' }
      ]
    },
    {
      month: 'Apr 2026',
      quarter: 'Q2 2026',
      features: [
        { name: 'Premium Subscription Launch', category: 'revenue', impact: 'VERY HIGH', effort: 'LOW', status: 'build' },
        { name: 'Pricing Beta Test', category: 'revenue', impact: 'VERY HIGH', effort: 'LOW', status: 'execute' },
        { name: 'Communities Beta', category: 'revenue', impact: 'HIGH', effort: 'HIGH', status: 'build' },
        { name: 'Career Guidance v1 - Data', category: 'career', impact: 'VERY HIGH', effort: 'MEDIUM', status: 'build' }
      ]
    },
    {
      month: 'May 2026',
      quarter: 'Q2 2026',
      features: [
        { name: 'Career Guidance - Algorithm', category: 'career', impact: 'VERY HIGH', effort: 'HIGH', status: 'build' },
        { name: 'Communities Pilot', category: 'revenue', impact: 'HIGH', effort: 'LOW', status: 'execute' },
        { name: 'Premium Conversion Push', category: 'revenue', impact: 'VERY HIGH', effort: 'LOW', status: 'execute' }
      ]
    },
    {
      month: 'Jun 2026',
      quarter: 'Q2 2026',
      features: [
        { name: 'Career Guidance Launch', category: 'career', impact: 'VERY HIGH', effort: 'LOW', status: 'execute' },
        { name: 'Paid Quiz Tournaments', category: 'revenue', impact: 'MEDIUM', effort: 'MEDIUM', status: 'build' },
        { name: 'Creator Leaderboard', category: 'product', impact: 'MEDIUM', effort: 'LOW', status: 'build' }
      ]
    },
    {
      month: 'Jul 2026',
      quarter: 'Q3 2026',
      features: [
        { name: 'Creator Marketplace v1', category: 'revenue', impact: 'MEDIUM', effort: 'HIGH', status: 'build' },
        { name: 'CLIP Score - Algorithm Design', category: 'career', impact: 'VERY HIGH', effort: 'MEDIUM', status: 'build' },
        { name: 'Career Guidance Expansion', category: 'career', impact: 'MEDIUM', effort: 'MEDIUM', status: 'build' }
      ]
    },
    {
      month: 'Aug 2026',
      quarter: 'Q3 2026',
      features: [
        { name: 'CLIP Score - Alpha Build', category: 'career', impact: 'VERY HIGH', effort: 'MEDIUM', status: 'build' },
        { name: 'AI Career v2 - Company Prep', category: 'career', impact: 'HIGH', effort: 'MEDIUM', status: 'build' },
        { name: 'Performance Optimization', category: 'product', impact: 'MEDIUM', effort: 'MEDIUM', status: 'build' }
      ]
    },
    {
      month: 'Sep 2026',
      quarter: 'Q3 2026',
      features: [
        { name: 'CLIP Score - Private Beta', category: 'career', impact: 'VERY HIGH', effort: 'LOW', status: 'execute' },
        { name: 'Advanced Analytics for Premium', category: 'revenue', impact: 'MEDIUM', effort: 'MEDIUM', status: 'build' },
        { name: 'Seed Round Prep', category: 'funding', impact: 'CRITICAL', effort: 'LOW', status: 'execute' }
      ]
    }
  ];

  // Category definitions
  const categories = [
    { id: 'all', name: 'All Features', icon: Grid3x3, color: 'gray' },
    { id: 'product', name: 'Product', icon: Code, color: 'blue' },
    { id: 'ai', name: 'AI Features', icon: Brain, color: 'purple' },
    { id: 'growth', name: 'Growth', icon: Users, color: 'green' },
    { id: 'revenue', name: 'Revenue', icon: DollarSign, color: 'yellow' },
    { id: 'career', name: 'Career Platform', icon: Briefcase, color: 'orange' },
    { id: 'funding', name: 'Funding', icon: Rocket, color: 'red' }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Code;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      product: 'bg-blue-100 text-blue-700 border-blue-200',
      ai: 'bg-purple-100 text-purple-700 border-purple-200',
      growth: 'bg-green-100 text-green-700 border-green-200',
      revenue: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      career: 'bg-orange-100 text-orange-700 border-orange-200',
      funding: 'bg-red-100 text-red-700 border-red-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getImpactColor = (impact: string) => {
    if (impact === 'VERY HIGH' || impact === 'CRITICAL') return 'text-red-600';
    if (impact === 'HIGH') return 'text-orange-600';
    if (impact === 'MEDIUM') return 'text-yellow-600';
    return 'text-gray-600';
  };

  // Filter detailed roadmap
  const filteredRoadmap = detailedRoadmap.filter(month => {
    if (selectedQuarter === 'all') return true;
    return month.quarter === selectedQuarter;
  }).map(month => ({
    ...month,
    features: month.features.filter(feature => {
      if (selectedCategory === 'all') return true;
      return feature.category === selectedCategory;
    })
  })).filter(month => month.features.length > 0);

  return (
    <section id="roadmap" className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">18-Month Execution Plan</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">From MVP to</span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Market Leader
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Aggressive but achievable. Every milestone de-risks the next.
          </p>

          {/* View Toggle Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => setShowDetailedView(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <Calendar className="w-5 h-5" />
            View Detailed Month-by-Month Roadmap
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Quarterly Timeline */}
        <div className="relative mb-20">
          {/* Progress Bar */}
          <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 rounded-full hidden lg:block" />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: inView ? '100%' : 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-12 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full hidden lg:block"
          />

          {/* Quarterly Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quarterlyMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.quarter}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="relative"
              >
                {/* Connection Dot */}
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br ${milestone.gradient} hidden lg:flex items-center justify-center shadow-lg`}>
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>

                {/* Card */}
                <div className={`bg-gradient-to-br ${milestone.bgGradient} rounded-2xl p-6 shadow-lg border-2 border-${milestone.color}-200 hover:shadow-xl transition-all`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-10 h-10 bg-gradient-to-br ${milestone.gradient} rounded-lg flex items-center justify-center`}>
                          <milestone.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-bold text-gray-600">{milestone.quarter}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{milestone.title}</h3>
                      <p className={`text-sm font-medium text-${milestone.color}-600`}>{milestone.theme}</p>
                    </div>
                    {milestone.funding && (
                      <div className="text-right">
                        <p className="text-xs font-semibold text-gray-500">{milestone.funding.status}</p>
                        <p className="text-lg font-bold text-orange-600">{milestone.funding.amount}</p>
                      </div>
                    )}
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <p className="text-xs text-gray-600">Users</p>
                      </div>
                      <p className="text-lg font-bold text-gray-800">{milestone.metrics.users}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-gray-400" />
                        <p className="text-xs text-gray-600">Retention</p>
                      </div>
                      <p className="text-lg font-bold text-gray-800">{milestone.metrics.retention}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <p className="text-xs text-gray-600">Revenue</p>
                      </div>
                      <p className="text-lg font-bold text-gray-800">{milestone.metrics.revenue}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="w-4 h-4 text-gray-400" />
                        <p className="text-xs text-gray-600">Features</p>
                      </div>
                      <p className="text-lg font-bold text-gray-800">{milestone.metrics.features}</p>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-600 uppercase">Key Deliverables</p>
                    {milestone.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className={`w-4 h-4 text-${milestone.color}-500 flex-shrink-0 mt-0.5`} />
                        <p className="text-sm text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <ArrowUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">User Growth</p>
                <p className="text-2xl font-bold text-gray-800">300x</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">From 350 to 100K+ in 15 months</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Retention Rate</p>
                <p className="text-2xl font-bold text-gray-800">50% → 75%</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Industry-leading engagement</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600">MRR Target</p>
                <p className="text-2xl font-bold text-gray-800">₹40L</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">By Dec 2026 (Seed round)</p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Milestones, Not Promises
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Every quarter has clear metrics. Every metric has a plan. 
              Every plan has been validated with our early users.
            </p>
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
            className="fixed inset-0 bg-black/50 z-50 overflow-y-auto"
            onClick={() => setShowDetailedView(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="min-h-screen py-10 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white rounded-t-3xl border-b border-gray-200 p-6 z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Detailed Month-by-Month Roadmap</h3>
                      <p className="text-gray-600">October 2025 - February 2027</p>
                    </div>
                    <button
                      onClick={() => setShowDetailedView(false)}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Filters */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-600">Filter by:</span>
                    </div>
                    
                    {/* Quarter Filter */}
                    <select
                      value={selectedQuarter}
                      onChange={(e) => setSelectedQuarter(e.target.value)}
                      className="px-3 py-1 rounded-lg border border-gray-300 text-sm"
                    >
                      <option value="all">All Quarters</option>
                      <option value="Q4 2025">Q4 2025</option>
                      <option value="Q1 2026">Q1 2026</option>
                      <option value="Q2 2026">Q2 2026</option>
                      <option value="Q3 2026">Q3 2026</option>
                    </select>

                    {/* Category Filter */}
                    <div className="flex gap-2 flex-wrap">
                      {categories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                            selectedCategory === cat.id 
                              ? `bg-${cat.color}-100 text-${cat.color}-700 border-2 border-${cat.color}-300`
                              : 'bg-gray-100 text-gray-600 border-2 border-transparent hover:bg-gray-200'
                          }`}
                        >
                          <div className="flex items-center gap-1">
                            <cat.icon className="w-4 h-4" />
                            {cat.name}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Content */}
                <div className="p-6 max-h-[70vh] overflow-y-auto">
                  <div className="space-y-8">
                    {filteredRoadmap.map((month, monthIndex) => (
                      <motion.div
                        key={month.month}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: monthIndex * 0.05 }}
                        className="relative"
                      >
                        {/* Month Header */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                          <h4 className="text-lg font-bold text-gray-800">{month.month}</h4>
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                            {month.quarter}
                          </span>
                        </div>

                        {/* Features Grid */}
                        <div className="ml-7 grid md:grid-cols-2 gap-3">
                          {month.features.map((feature, featureIndex) => {
                            const CategoryIcon = getCategoryIcon(feature.category);
                            return (
                              <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: monthIndex * 0.05 + featureIndex * 0.02 }}
                                className={`bg-white rounded-xl p-4 border ${getCategoryColor(feature.category)}`}
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <CategoryIcon className="w-4 h-4" />
                                    <h5 className="font-semibold text-gray-800">{feature.name}</h5>
                                  </div>
                                  <span className={`text-xs font-bold ${
                                    feature.status === 'build' ? 'text-blue-600' : 'text-green-600'
                                  }`}>
                                    {feature.status.toUpperCase()}
                                  </span>
                                </div>
                                
                                <div className="flex items-center justify-between text-xs">
                                  <span className={`font-medium ${getImpactColor(feature.impact)}`}>
                                    Impact: {feature.impact}
                                  </span>
                                  <span className="text-gray-500">
                                    Effort: {feature.effort}
                                  </span>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent rounded-b-3xl p-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Showing <span className="font-bold">{filteredRoadmap.reduce((acc, m) => acc + m.features.length, 0)}</span> features 
                      across <span className="font-bold">{filteredRoadmap.length}</span> months
                    </div>
                    <button
                      onClick={() => setShowDetailedView(false)}
                      className="px-6 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                    >
                      Close Roadmap
                    </button>
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