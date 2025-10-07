'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DollarSign, Users, Building2, Trophy, ShoppingBag, 
  Briefcase, Calendar, ChevronRight, TrendingUp, 
  Play, Lock, Unlock, Star, Award, BarChart3,
  Clock, ArrowRight, Zap, Target, CheckCircle
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid, Area, AreaChart } from 'recharts';

export default function RevenueSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedSegment, setSelectedSegment] = useState<'b2c' | 'b2b' | null>(null);
  const [viewMode, setViewMode] = useState<'revenue' | 'timeline'>('revenue');
  const [hoveredStream, setHoveredStream] = useState<string | null>(null);

  // Pie chart data
  const revenueDistribution = [
    { name: 'B2C Revenue', value: 70, color: '#F97316' },
    { name: 'B2B Revenue', value: 30, color: '#3B82F6' }
  ];

  // B2C Revenue Streams (70% of total)
  const b2cStreams = [
    {
      id: 'premium',
      name: 'Premium Subscriptions',
      pricing: '₹499-999/month',
      percentage: 40, // 40% of total revenue
      icon: Star,
      color: 'orange',
      features: [
        'Unlimited quizzes',
        'AI study plans',
        'Advanced analytics',
        'Ad-free experience'
      ],
      launchQuarter: 'Q2 2026',
      projectedUsers: '10,000',
      projectedRevenue: '₹20L'
    },
    {
      id: 'tournaments',
      name: 'Paid Quiz Tournaments',
      pricing: '₹50-200 entry',
      percentage: 20, // 20% of total revenue
      icon: Trophy,
      color: 'yellow',
      features: [
        'Weekly competitions',
        'Prize pools',
        'Platform takes 30%'
      ],
      launchQuarter: 'Q2 2026',
      projectedUsers: '25,000',
      projectedRevenue: '₹10L'
    },
    {
      id: 'marketplace',
      name: 'Creator Marketplace',
      pricing: '10% commission',
      percentage: 10, // 10% of total revenue
      icon: ShoppingBag,
      color: 'purple',
      features: [
        'Premium LearnLists',
        '1-on-1 mentorship',
        'Expert consultations'
      ],
      launchQuarter: 'Q3 2026',
      projectedUsers: '5,000',
      projectedRevenue: '₹5L'
    }
  ];

  // B2B Revenue Streams (30% of total)
  const b2bStreams = [
    {
      id: 'institutions',
      name: 'Institution Subscriptions',
      pricing: '₹1.5-3L/year',
      percentage: 20, // 20% of total revenue
      icon: Building2,
      color: 'blue',
      features: [
        'Private communities',
        'Analytics dashboards',
        'Custom content',
        'Bulk student access'
      ],
      launchQuarter: 'Q2 2026',
      projectedClients: '50',
      projectedRevenue: '₹10L'
    },
    {
      id: 'hiring',
      name: 'Hiring Platform',
      pricing: '₹1,000-3,000/placement',
      percentage: 10, // 10% of total revenue
      icon: Briefcase,
      color: 'green',
      features: [
        'Verified talent access',
        'CLIP score filtering',
        'Direct placement',
        'Bulk hiring'
      ],
      launchQuarter: 'Q4 2026',
      projectedPlacements: '500',
      projectedRevenue: '₹5L'
    }
  ];

  // Launch timeline data
  const launchTimeline = [
    {
      quarter: 'Q2 2026',
      month: 'Apr-Jun',
      streams: ['Premium Subscriptions', 'Quiz Tournaments', 'Institution Subscriptions'],
      revenue: '₹6L',
      color: 'blue'
    },
    {
      quarter: 'Q3 2026',
      month: 'Jul-Sep',
      streams: ['Creator Marketplace'],
      revenue: '₹15L',
      color: 'purple'
    },
    {
      quarter: 'Q4 2026',
      month: 'Oct-Dec',
      streams: ['Hiring Platform'],
      revenue: '₹40L',
      color: 'green'
    },
    {
      quarter: 'Q1 2027',
      month: 'Jan-Mar',
      streams: ['All streams scaling'],
      revenue: '₹60L',
      color: 'orange'
    }
  ];

  // Revenue projection data
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
    { month: 'Mar 27', revenue: 60, streams: 5 }
  ];

  // Custom tooltip for pie chart
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-2xl font-bold">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  // Custom label for pie chart
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="font-bold text-lg">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const handlePieClick = (data: any) => {
    if (data.name === 'B2C Revenue') {
      setSelectedSegment(selectedSegment === 'b2c' ? null : 'b2c');
    } else {
      setSelectedSegment(selectedSegment === 'b2b' ? null : 'b2b');
    }
  };

  return (
    <section id="revenue" className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-12"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <DollarSign className="w-5 h-5" />
            <span className="font-semibold">Revenue Model</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Multiple</span>{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Revenue Streams
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Diversified revenue model with 5 streams across B2C and B2B segments
          </p>

          {/* View Mode Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('revenue')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                viewMode === 'revenue' 
                  ? 'bg-white text-gray-800 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Revenue Streams
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                viewMode === 'timeline' 
                  ? 'bg-white text-gray-800 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Launch Timeline
            </button>
          </div>
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {viewMode === 'revenue' ? (
            <motion.div
              key="revenue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* Pie Chart */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Revenue Distribution</h3>
                
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={revenueDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      onClick={handlePieClick}
                      style={{ cursor: 'pointer' }}
                    >
                      {revenueDistribution.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          stroke={selectedSegment === (entry.name.includes('B2C') ? 'b2c' : 'b2b') ? '#000' : 'none'}
                          strokeWidth={selectedSegment === (entry.name.includes('B2C') ? 'b2c' : 'b2b') ? 2 : 0}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>

                <div className="mt-6 text-center text-sm text-gray-600">
                  Click on segments to see detailed breakdown
                </div>

                {/* Revenue Target */}
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

              {/* Revenue Streams Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                {/* B2C Streams */}
                <AnimatePresence>
                  {(!selectedSegment || selectedSegment === 'b2c') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-bold text-orange-600 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        B2C Revenue Streams (70%)
                      </h3>
                      
                      {b2cStreams.map((stream, index) => (
                        <motion.div
                          key={stream.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`bg-white rounded-xl p-4 shadow-md border-2 transition-all cursor-pointer ${
                            hoveredStream === stream.id ? `border-${stream.color}-400` : 'border-gray-200'
                          }`}
                          onMouseEnter={() => setHoveredStream(stream.id)}
                          onMouseLeave={() => setHoveredStream(null)}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 bg-${stream.color}-100 rounded-lg flex items-center justify-center`}>
                                <stream.icon className={`w-6 h-6 text-${stream.color}-600`} />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800">{stream.name}</h4>
                                <p className="text-sm text-gray-600">{stream.pricing}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-gray-800">{stream.percentage}%</p>
                              <p className="text-xs text-gray-500">of revenue</p>
                            </div>
                          </div>
                          
                          <AnimatePresence>
                            {hoveredStream === stream.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-3"
                              >
                                <div className="pt-3 border-t border-gray-200">
                                  <p className="text-xs font-semibold text-gray-600 mb-2">Features:</p>
                                  <div className="space-y-1">
                                    {stream.features.map((feature, idx) => (
                                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        {feature}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-gray-200">
                                  <div>
                                    <p className="text-xs text-gray-500">Launch</p>
                                    <p className="text-sm font-bold">{stream.launchQuarter}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">Users</p>
                                    <p className="text-sm font-bold">{stream.projectedUsers}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">Revenue</p>
                                    <p className="text-sm font-bold">{stream.projectedRevenue}</p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* B2B Streams */}
                <AnimatePresence>
                  {(!selectedSegment || selectedSegment === 'b2b') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-bold text-blue-600 flex items-center gap-2">
                        <Building2 className="w-5 h-5" />
                        B2B Revenue Streams (30%)
                      </h3>
                      
                      {b2bStreams.map((stream, index) => (
                        <motion.div
                          key={stream.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`bg-white rounded-xl p-4 shadow-md border-2 transition-all cursor-pointer ${
                            hoveredStream === stream.id ? `border-${stream.color}-400` : 'border-gray-200'
                          }`}
                          onMouseEnter={() => setHoveredStream(stream.id)}
                          onMouseLeave={() => setHoveredStream(null)}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 bg-${stream.color}-100 rounded-lg flex items-center justify-center`}>
                                <stream.icon className={`w-6 h-6 text-${stream.color}-600`} />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800">{stream.name}</h4>
                                <p className="text-sm text-gray-600">{stream.pricing}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-gray-800">{stream.percentage}%</p>
                              <p className="text-xs text-gray-500">of revenue</p>
                            </div>
                          </div>
                          
                          <AnimatePresence>
                            {hoveredStream === stream.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-3"
                              >
                                <div className="pt-3 border-t border-gray-200">
                                  <p className="text-xs font-semibold text-gray-600 mb-2">Features:</p>
                                  <div className="space-y-1">
                                    {stream.features.map((feature, idx) => (
                                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        {feature}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-gray-200">
                                  <div>
                                    <p className="text-xs text-gray-500">Launch</p>
                                    <p className="text-sm font-bold">{stream.launchQuarter}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">
                                      {stream.id === 'institutions' ? 'Clients' : 'Placements'}
                                    </p>
                                    <p className="text-sm font-bold">
                                      {stream.id === 'institutions' ? stream.projectedClients : stream.projectedPlacements}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">Revenue</p>
                                    <p className="text-sm font-bold">{stream.projectedRevenue}</p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Timeline View */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Launch Timeline */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-gray-800">Launch Sequence</h3>
                  
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                    
                    {launchTimeline.map((phase, index) => (
                      <motion.div
                        key={phase.quarter}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="relative flex items-start gap-4 mb-8"
                      >
                        {/* Timeline Node */}
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${phase.color}-400 to-${phase.color}-600 shadow-lg flex items-center justify-center z-10`}>
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Content Card */}
                        <div className="flex-1 bg-white rounded-xl shadow-md p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-bold text-gray-800">{phase.quarter}</h4>
                              <p className="text-sm text-gray-600">{phase.month}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-green-600">{phase.revenue}</p>
                              <p className="text-xs text-gray-500">MRR</p>
                            </div>
                          </div>
                          
                          <div className="space-y-1 mt-3 pt-3 border-t border-gray-200">
                            {phase.streams.map((stream, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                <ArrowRight className="w-4 h-4 text-blue-500" />
                                {stream}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Revenue Projection Chart */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Revenue Build-Up</h3>
                  
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={revenueProjection}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip 
                        formatter={(value: any, name: string) => [
                          name === 'revenue' ? `₹${value}L` : `${value} streams`,
                          name === 'revenue' ? 'MRR' : 'Active Streams'
                        ]}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#10B981" 
                        fill="#10B981" 
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
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

              {/* Key Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                transition={{ delay: 0.6 }}
                className="mt-12 grid md:grid-cols-4 gap-6"
              >
                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-2 border-orange-200">
                  <Users className="w-8 h-8 text-orange-600 mb-3" />
                  <p className="text-sm text-gray-600">B2C Users</p>
                  <p className="text-2xl font-bold text-gray-800">40,000</p>
                  <p className="text-xs text-gray-500">by Q4 2026</p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-200">
                  <Building2 className="w-8 h-8 text-blue-600 mb-3" />
                  <p className="text-sm text-gray-600">B2B Clients</p>
                  <p className="text-2xl font-bold text-gray-800">50+</p>
                  <p className="text-xs text-gray-500">Institutions</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200">
                  <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                  <p className="text-sm text-gray-600">Total MRR</p>
                  <p className="text-2xl font-bold text-gray-800">₹60L</p>
                  <p className="text-xs text-gray-500">by Q1 2027</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border-2 border-purple-200">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                  <p className="text-sm text-gray-600">Growth Rate</p>
                  <p className="text-2xl font-bold text-gray-800">25%</p>
                  <p className="text-xs text-gray-500">Month-on-month</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white text-center"
        >
          <Zap className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            Sustainable & Scalable
          </h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Multiple revenue streams ensure stability. B2C drives volume, B2B drives value.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <Target className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Low CAC</p>
              <p className="text-sm opacity-75">₹250 per user</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Quick Payback</p>
              <p className="text-sm opacity-75">6 months</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <BarChart3 className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">High LTV</p>
              <p className="text-sm opacity-75">₹6,000 per user</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}