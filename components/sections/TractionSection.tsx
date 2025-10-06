'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Calendar, Target, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function TractionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const growthData = [
    { month: 'Aug', users: 0, retention: 0 },
    { month: 'Sep', users: 350, retention: 45 },
    { month: 'Oct', users: 200, retention: 45 },
    { month: 'Nov', users: 500, retention: 50 },
    { month: 'Dec', users: 1000, retention: 55 },
    { month: 'Jan', users: 2000, retention: 60 },
  ];

  const metrics = [
    {
      icon: Users,
      value: 200,
      label: 'Users',
      subtext: 'Growing daily',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      value: 45,
      label: 'Month-1 Retention',
      subtext: 'vs Industry 30%',
      suffix: '%',
      color: 'from-green-500 to-green-600',
      highlight: true,
    },
    {
      icon: Target,
      value: 750,
      label: 'Quiz Participations',
      subtext: 'Avg 35 per quiz',
      suffix: '+',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Zap,
      value: 4,
      label: 'Raising (Pre-Seed)',
      subtext: 'Quarterly tranches',
      prefix: '₹',
      suffix: ' Cr',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="traction" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Proof of Concept
          </h2>
          <p className="text-xl text-text-secondary">60 Days + IIT Bombay Validation</p>
        </motion.div>

        {/* IIT Bombay Highlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-secondary p-1 rounded-2xl mb-12"
        >
          <div className="bg-white rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold">IIT Bombay Validation</h3>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {inView && <CountUp end={350} duration={2} suffix="+" />}
                </div>
                <p className="text-lg font-semibold text-text-primary">ScaleUp Blitz Week</p>
                <p className="text-text-secondary">September 2025</p>
                <p className="text-sm text-text-secondary mt-2">Quiz Competition + Hackathon</p>
                <p className="text-sm font-semibold text-accent mt-2">Building dedicated IIT Bombay community</p>
              </div>
              
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-yellow-600">IIT</div>
                    <div className="text-2xl font-semibold text-yellow-700">Bombay</div>
                    <div className="text-sm font-medium text-yellow-600 mt-2">Validated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className={`metric-card ${metric.highlight ? 'ring-2 ring-green-500' : ''}`}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center mb-4`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-text-primary mb-2">
                {metric.prefix}
                {inView && <CountUp end={metric.value} duration={2} />}
                {metric.suffix}
              </div>
              <div className="text-lg font-semibold text-text-primary">{metric.label}</div>
              <div className="text-sm text-text-secondary mt-1">{metric.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-12"
        >
          <h3 className="text-2xl font-bold mb-6">Projected Growth Trajectory</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-center">User Growth</h4>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="users" stroke="#1E40AF" fill="#3B82F6" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-center">Retention Rate</h4>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Line type="monotone" dataKey="retention" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Why This Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6">Why This Matters</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <span className="font-semibold">Retention Signal:</span> 45% Month-1 retention beats Unacademy (30%) and PhysicsWallah (40%) with ZERO gamification features yet. When we add streaks, squads, leaderboards in Q1 2026, we're projecting 65% Month-2 retention.
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <span className="font-semibold">Top-tier Validation:</span> 350+ IIT Bombay students participated in our Blitz Week (Sept 2025) - quiz competitions and hackathons. They're now building a dedicated community on our platform. Even India's top students want social, engaging learning.
              </div>
            </div>
            
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1, duration: 0.3 }}
              className="mt-6 p-4 bg-green-100 rounded-lg text-center"
            >
              <p className="text-green-800 font-semibold">
                Product-Market Fit Signal: High retention + IIT validation = Ready to scale
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}