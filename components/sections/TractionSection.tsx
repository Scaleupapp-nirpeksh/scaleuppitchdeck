'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, Users, TrendingUp, Calendar, Target, Zap, 
  Clock, CheckCircle, ArrowUp, Trophy, Sparkles, 
  School, BookOpen, Timer, Code, Rocket
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

export default function TractionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedMetric, setSelectedMetric] = useState<string | null>(null);

  // Actual validated data
  const actualData = {
    students: 350,
    retention: 55,  // You mentioned it's actually 55%
    quizzes: 50,
    participation: 750,
    avgPerQuiz: 35,
    timeToValidate: 60,  // days
    competitorRetention: 30
  };

  // Growth projection based on actual traction
  const growthData = [
    { month: 'Sep', users: 350, retention: 55, label: 'IIT Launch' },
    { month: 'Oct', users: 500, retention: 55, label: 'Current' },
    { month: 'Dec', users: 1000, retention: 60, label: 'Post-funding' },
    { month: 'Mar', users: 5000, retention: 65, label: 'Q1 2026' },
    { month: 'Jun', users: 15000, retention: 70, label: 'Q2 2026' },
    { month: 'Dec', users: 100000, retention: 75, label: 'Seed Ready' },
  ];

  // Validation milestones
  const milestones = [
    { 
      date: 'Day 1-30', 
      achievement: 'Built MVP',
      detail: 'Quiz platform + Communities',
      icon: Code,
      status: 'completed'
    },
    { 
      date: 'Day 31-60', 
      achievement: 'IIT Bombay Launch',
      detail: '350 students onboarded',
      icon: School,
      status: 'completed'
    },
    { 
      date: 'Day 61-90', 
      achievement: '55% Retention',
      detail: 'Beat industry average',
      icon: Trophy,
      status: 'completed'
    },
    { 
      date: 'Next 90 Days', 
      achievement: 'Scale to 5K',
      detail: 'Multi-campus expansion',
      icon: Rocket,
      status: 'upcoming'
    },
  ];

  // Comparison with competitors
  const retentionComparison = [
    { name: 'ScaleUp', retention: 55, color: '#10B981' },
    { name: 'PhysicsWallah', retention: 40, color: '#6B7280' },
    { name: 'Unacademy', retention: 30, color: '#6B7280' },
    { name: "Byju's", retention: 25, color: '#6B7280' },
  ];

  const keyMetrics = [
    {
      id: 'validation',
      icon: School,
      value: actualData.students,
      label: 'IIT Bombay Students',
      detail: 'Top-tier validation',
      suffix: '+',
      color: 'yellow',
      highlight: "India's #1 engineering students chose us"
    },
    {
      id: 'retention',
      icon: TrendingUp,
      value: actualData.retention,
      label: 'Month-1 Retention',
      detail: `${actualData.retention - actualData.competitorRetention}% above industry`,
      suffix: '%',
      color: 'green',
      highlight: 'Without gamification features yet!'
    },
    {
      id: 'engagement',
      icon: Target,
      value: actualData.participation,
      label: 'Quiz Completions',
      detail: `${actualData.avgPerQuiz} avg per quiz`,
      suffix: '+',
      color: 'blue',
      highlight: '2-min format validated'
    },
    {
      id: 'speed',
      icon: Timer,
      value: actualData.timeToValidate,
      label: 'Days to PMF Signal',
      detail: 'Fastest in EdTech',
      suffix: '',
      color: 'purple',
      highlight: 'Capital efficient validation'
    },
  ];

  return (
    <section id="traction" className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Validated in 60 Days</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-800">Not Promises.</span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Proof.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            While others spent years burning cash, we validated product-market fit in 60 days 
            with India's smartest students.
          </p>
        </motion.div>

        {/* Hero Validation Card - IIT Bombay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-1 rounded-3xl">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <School className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">IIT Bombay Validation</h3>
                      <p className="text-gray-600">September 2024 - Blitz Week</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl font-bold text-gray-800">
                        {inView && <CountUp end={actualData.students} duration={2} />}+
                      </div>
                      <div>
                        <p className="font-semibold">Students Onboarded</p>
                        <p className="text-sm text-gray-600">In first 48 hours</p>
                      </div>
                    </div>
                    
                   
                  </div>
                </div>
                
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative"
                  >
                    <div className="w-64 h-64 mx-auto bg-gradient-to-br from-yellow-100 via-yellow-200 to-orange-100 rounded-full flex items-center justify-center shadow-2xl">
                      <div className="text-center">
                        <div className="text-6xl font-black text-yellow-700">IIT</div>
                        <div className="text-3xl font-bold text-orange-600">BOMBAY</div>
                        <div className="mt-3 px-4 py-1 bg-green-500 text-white text-sm font-bold rounded-full inline-block">
                          VALIDATED
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-2 -right-2"
                    >
                      <Trophy className="w-12 h-12 text-yellow-500" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics - Interactive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              onClick={() => setSelectedMetric(selectedMetric === metric.id ? null : metric.id)}
              className="cursor-pointer"
            >
              <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all hover:shadow-xl ${
                selectedMetric === metric.id ? `border-${metric.color}-500` : 'border-gray-100'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-${metric.color}-100 rounded-xl flex items-center justify-center`}>
                    <metric.icon className={`w-6 h-6 text-${metric.color}-600`} />
                  </div>
                  {metric.id === 'retention' && (
                    <ArrowUp className="w-5 h-5 text-green-500" />
                  )}
                </div>
                
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  {inView && <CountUp end={metric.value} duration={2} suffix={metric.suffix} />}
                </div>
                <p className="font-semibold text-gray-700">{metric.label}</p>
                <p className="text-sm text-gray-600 mt-1">{metric.detail}</p>
                
                <AnimatePresence>
                  {selectedMetric === metric.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200"
                    >
                      <p className="text-xs font-semibold text-gray-700">
                        💡 {metric.highlight}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Retention Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.7 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Retention Bar Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6">We Beat Everyone. Without Features.</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={retentionComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `${value}%`} />
                <Bar dataKey="retention" fill="#8884d8">
                  {retentionComparison.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <span className="font-bold">55% retention</span> with just quizzes & communities.
                Imagine when we add gamification, AI personalization, and job matching.
              </p>
            </div>
          </div>

          {/* Growth Projection */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6">Path to 100K Users</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="users" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-800">Now</p>
                <p className="text-sm text-gray-600">500 users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">Q2 2026</p>
                <p className="text-sm text-gray-600">15K users</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">Q4 2026</p>
                <p className="text-sm text-gray-600">100K users</p>
              </div>
            </div>
          </div>
        </motion.div>

       

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <CheckCircle className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            Product-Market Fit: Early Positive Signals
          </h3>
          <p className="text-xl mb-6 opacity-90">
            55% retention + IIT validation + 60-day execution = Ready to scale
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Raising ₹4 Cr to go from 350 → 50,000 students</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Cell component for bar chart colors
const Cell = ({ fill }: { fill: string }) => null;