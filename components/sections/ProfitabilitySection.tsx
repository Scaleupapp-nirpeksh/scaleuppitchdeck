'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingDown, TrendingUp, Zap, Calculator, ChevronDown,
  DollarSign, Users, Target, BarChart3, Clock, CheckCircle,
  AlertCircle, ArrowRight, Sparkles, Trophy, Info
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, BarChart, Bar, Cell, ReferenceLine } from 'recharts';
import CountUp from 'react-countup';

export default function ProfitabilitySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedMetric, setExpandedMetric] = useState<string | null>(null);
  const [calculatorValues, setCalculatorValues] = useState({
    cac: 200,
    arpu: 500,
    retention6: 40,
    retention12: 25
  });

  // Calculate LTV based on calculator inputs
  const calculateLTV = () => {
    const monthlyChurn = 1 - (calculatorValues.retention6 / 100) ** (1/6);
    const avgLifetime = 1 / monthlyChurn;
    return Math.round(calculatorValues.arpu * avgLifetime);
  };

  // Main metrics
  const mainMetrics = [
    {
      id: 'cac',
      title: 'CAC',
      value: 200,
      unit: '₹',
      suffix: '',
      subtitle: 'per user',
      comparison: 'vs Byju\'s ₹2,000+',
      icon: TrendingDown,
      color: 'green',
      trend: 'good',
      details: {
        breakdown: [
          { label: 'Campus Championships', value: '₹100', description: 'Prize money + operations' },
          { label: 'Referral Rewards', value: '₹50', description: '3 friends = 1 month free' },
          { label: 'Content Creation', value: '₹30', description: 'Creator incentives' },
          { label: 'Digital Marketing', value: '₹20', description: 'Social media ads' }
        ],
        insight: '10x more efficient than TV ads, 5x better than Google Ads'
      }
    },
    {
      id: 'ltv',
      title: 'LTV',
      value: 12000,
      unit: '₹',
      suffix: '',
      subtitle: 'per user',
      comparison: '24-month avg lifespan',
      icon: TrendingUp,
      color: 'blue',
      trend: 'good',
      details: {
        breakdown: [
          { label: 'Month 1-3', value: '₹1,500', description: '65% retention' },
          { label: 'Month 4-6', value: '₹1,500', description: '40% retention' },
          { label: 'Month 7-12', value: '₹3,000', description: '25% retention' },
          { label: 'Month 13-24', value: '₹6,000', description: '15% retention' }
        ],
        insight: 'Conservative vs Duolingo\'s 70% retention'
      }
    },
    {
      id: 'ratio',
      title: 'LTV:CAC',
      value: 60,
      unit: '',
      suffix: ':1',
      subtitle: 'ratio',
      comparison: 'Payback <1 month',
      icon: Zap,
      color: 'orange',
      trend: 'excellent',
      details: {
        breakdown: [
          { label: 'Industry Average', value: '3:1', description: 'baseline' },
          { label: 'Good SaaS', value: '5:1', description: 'good' },
          { label: 'ScaleUp Target', value: '60:1', description: 'excellent' },
          { label: 'With Scale', value: '100:1+', description: 'future' }
        ],
        insight: 'World-class unit economics from Day 1'
      }
    }
  ];

  // Break-even projection data
  const breakEvenData = [
    { month: 'Jan 26', revenue: 0, costs: 20, users: 0 },
    { month: 'Mar 26', revenue: 6, costs: 25, users: 1000 },
    { month: 'Jun 26', revenue: 15, costs: 35, users: 3000 },
    { month: 'Sep 26', revenue: 30, costs: 45, users: 6000 },
    { month: 'Dec 26', revenue: 50, costs: 55, users: 10000 },
    { month: 'Mar 27', revenue: 75, costs: 65, users: 15000 },
    { month: 'Jun 27', revenue: 100, costs: 75, users: 20000 },
    { month: 'Sep 27', revenue: 150, costs: 85, users: 30000 }
  ];

  // Unit economics breakdown
  const unitEconomics = [
    {
      metric: 'CAC',
      value: '₹200',
      description: 'Campus championships + referrals',
      detail: '10x more efficient than TV ads',
      icon: TrendingDown,
      color: 'green'
    },
    {
      metric: 'ARPU',
      value: '₹500/month',
      description: 'Premium subscriptions',
      detail: '₹6,000/year per user',
      icon: DollarSign,
      color: 'blue'
    },
    {
      metric: 'Retention',
      value: '65% Month-2',
      description: '40% Month-6',
      detail: 'Conservative vs Duolingo 70%',
      icon: Users,
      color: 'purple'
    },
    {
      metric: 'Gross Margin',
      value: '85%+',
      description: 'High margin SaaS model',
      detail: 'Low content & infra costs',
      icon: TrendingUp,
      color: 'orange'
    },
    {
      metric: 'Break-even',
      value: '15,000 users',
      description: '₹75L MRR',
      detail: 'Achievable by Q2 2027',
      icon: Target,
      color: 'red'
    },
    {
      metric: 'Timeline',
      value: 'Month 16-18',
      description: 'Q2 2027',
      detail: 'Pre Series B',
      icon: Clock,
      color: 'indigo'
    }
  ];

  return (
    <section id="profitability" className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-12"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Target className="w-5 h-5" />
            <span className="font-semibold">Unit Economics</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Path to</span>{' '}
            <span className="bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
              Profitability
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class unit economics with 60:1 LTV:CAC ratio
          </p>
        </motion.div>

        {/* Main Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainMetrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => setExpandedMetric(expandedMetric === metric.id ? null : metric.id)}
              className="cursor-pointer"
            >
              <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border-2 ${
                expandedMetric === metric.id ? `border-${metric.color}-400` : 'border-gray-100'
              }`}>
                {/* Metric Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{metric.title}</p>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-4xl md:text-5xl font-bold text-gray-800">
                        {metric.unit}
                        {inView && (
                          <CountUp
                            end={metric.value}
                            duration={2}
                            separator=","
                          />
                        )}
                        {metric.suffix}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 mt-1">{metric.subtitle}</p>
                  </div>
                  <div className={`w-14 h-14 bg-${metric.color}-100 rounded-xl flex items-center justify-center`}>
                    <metric.icon className={`w-8 h-8 text-${metric.color}-600`} />
                  </div>
                </div>

                {/* Comparison */}
                <div className={`p-3 bg-${metric.color}-50 rounded-lg flex items-center justify-between`}>
                  <p className="text-sm font-medium text-gray-700">{metric.comparison}</p>
                  {metric.trend === 'excellent' && <Sparkles className="w-5 h-5 text-yellow-500" />}
                  {metric.trend === 'good' && <CheckCircle className="w-5 h-5 text-green-500" />}
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedMetric === metric.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-gray-200"
                    >
                      <div className="space-y-3">
                        {metric.details.breakdown.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">
                              {item.label}
                            </span>
                            <span className="font-semibold text-gray-800">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">{metric.details.insight}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unit Economics Breakdown - Full Width Horizontal Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Unit Economics Breakdown
          </h3>
          
          {/* Horizontal Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unitEconomics.map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="group"
              >
                <div className={`bg-gradient-to-br from-${item.color}-50 to-white rounded-xl p-6 border-2 border-${item.color}-100 hover:border-${item.color}-300 transition-all hover:shadow-lg`}>
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">{item.metric}</p>
                        <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description and Details */}
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="text-xs text-gray-500 font-medium">{item.detail}</p>
                  </div>
                  
                  {/* Progress Bar (visual representation) */}
                  <div className="mt-4">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: inView ? '100%' : 0 }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-600`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600">CAC Efficiency</p>
              <p className="text-xl font-bold text-green-600">10x Better</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg Lifetime</p>
              <p className="text-xl font-bold text-blue-600">24 Months</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Unit Profit</p>
              <p className="text-xl font-bold text-purple-600">₹11,800</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Payback</p>
              <p className="text-xl font-bold text-orange-600">&lt;1 Month</p>
            </div>
          </div>
        </motion.div>

        {/* Break-even Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Path to Break-even
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Break-even Chart */}
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={breakEvenData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: 'Amount (₹L)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => `₹${value}L`} />
                  <ReferenceLine 
                    x="Mar 27" 
                    stroke="#10B981" 
                    strokeDasharray="5 5"
                    label={{ value: "Break-even", position: "top" }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#10B981" 
                    fill="#10B981" 
                    fillOpacity={0.3}
                    strokeWidth={2}
                    name="Revenue"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="costs" 
                    stroke="#EF4444" 
                    fill="#EF4444" 
                    fillOpacity={0.3}
                    strokeWidth={2}
                    name="Costs"
                  />
                </AreaChart>
              </ResponsiveContainer>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="text-xs text-gray-600">Current Burn</p>
                  <p className="text-lg font-bold text-red-600">₹20L/mo</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-xs text-gray-600">Break-even</p>
                  <p className="text-lg font-bold text-yellow-600">Q2 2027</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-xs text-gray-600">At Profit</p>
                  <p className="text-lg font-bold text-green-600">₹25L/mo</p>
                </div>
              </div>
            </div>

            {/* LTV Calculator */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border-2 border-purple-200">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                LTV Calculator
              </h4>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600">CAC (₹)</label>
                  <input
                    type="range"
                    min="100"
                    max="500"
                    value={calculatorValues.cac}
                    onChange={(e) => setCalculatorValues({...calculatorValues, cac: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <p className="text-right text-sm font-semibold">₹{calculatorValues.cac}</p>
                </div>
                
                <div>
                  <label className="text-sm text-gray-600">ARPU (₹/month)</label>
                  <input
                    type="range"
                    min="200"
                    max="1000"
                    value={calculatorValues.arpu}
                    onChange={(e) => setCalculatorValues({...calculatorValues, arpu: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <p className="text-right text-sm font-semibold">₹{calculatorValues.arpu}</p>
                </div>
                
                <div>
                  <label className="text-sm text-gray-600">6-Month Retention (%)</label>
                  <input
                    type="range"
                    min="20"
                    max="80"
                    value={calculatorValues.retention6}
                    onChange={(e) => setCalculatorValues({...calculatorValues, retention6: parseInt(e.target.value)})}
                    className="w-full"
                  />
                  <p className="text-right text-sm font-semibold">{calculatorValues.retention6}%</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg text-center">
                <p className="text-sm text-gray-600">Calculated LTV</p>
                <p className="text-3xl font-bold text-purple-600">₹{calculateLTV().toLocaleString()}</p>
                <p className="text-sm text-gray-600 mt-1">
                  LTV:CAC Ratio = {(calculateLTV() / calculatorValues.cac).toFixed(1)}:1
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Benchmarks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 1 }}
          className="grid md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Gross Margin', value: '85%+', benchmark: 'SaaS: 70-80%', status: 'above' },
            { label: 'Payback Period', value: '<1 month', benchmark: 'Good: 12-18 mo', status: 'excellent' },
            { label: 'Burn Multiple', value: '0.5x', benchmark: 'Good: <2x', status: 'excellent' },
            { label: 'Growth Efficiency', value: '1.5x', benchmark: 'Good: >1x', status: 'above' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
              transition={{ delay: 1.1 + index * 0.05 }}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <p className="text-sm text-gray-600">{item.label}</p>
                {item.status === 'excellent' && <Sparkles className="w-4 h-4 text-yellow-500" />}
                {item.status === 'above' && <TrendingUp className="w-4 h-4 text-green-500" />}
              </div>
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
              <p className="text-xs text-gray-500 mt-1">{item.benchmark}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-purple-600 to-green-600 rounded-3xl p-8 text-white text-center"
        >
          <Trophy className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            Built for Capital Efficiency
          </h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
            Will raise Series B before break-even for international expansion capital
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Fast Payback</p>
              <p className="text-sm opacity-75">Under 1 month</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Low Burn</p>
              <p className="text-sm opacity-75">₹20L/month</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <Target className="w-8 h-8 mx-auto mb-2" />
              <p className="font-semibold">Clear Path</p>
              <p className="text-sm opacity-75">15K users to profit</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}