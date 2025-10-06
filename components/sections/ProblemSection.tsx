'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Users, Clock, XCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export default function ProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const marketData = [
    { name: 'JEE/NEET Coaching', value: 18000, percentage: 48, color: '#1E40AF' },
    { name: 'Government Exams', value: 12000, percentage: 32, color: '#0891B2' },
    { name: 'CAT/MBA Prep', value: 4000, percentage: 11, color: '#F97316' },
    { name: 'Other Exams', value: 3000, percentage: 9, color: '#64748B' },
  ];

  const failedUnicorns = [
    { name: "Byju's", raised: 5.1, peak: 22, current: 0.5 },
    { name: 'Unacademy', raised: 0.88, peak: 3.4, current: 0.8 },
    { name: 'Vedantu', raised: 0.4, peak: 1.0, current: 0.2 },
  ];

  const engagementData = [
    { platform: 'Instagram', hours: 4.5 },
    { platform: 'YouTube', hours: 3.8 },
    { platform: 'Traditional EdTech', hours: 0.5 },
  ];

  return (
    <section id="problem" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="gradient-text">₹37,000 Crore</span> Paradox
          </h2>
          <p className="text-xl text-text-secondary">Massive Market, Broken Model</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Market Size Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Market Size & Breakdown</h3>
            
            <div className="mb-6">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={marketData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ percentage }) => `${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {marketData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `₹${value} Cr`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Total Market</span>
                <span className="font-bold text-2xl">
                  ₹{inView && <CountUp end={37000} duration={2} separator="," />} Cr
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Students Annually</span>
                <span className="font-bold text-xl">
                  {inView && <CountUp end={50} duration={2} />} Million
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Market Growth (CAGR)</span>
                <span className="font-bold text-xl text-green-600">
                  {inView && <CountUp end={14} duration={2} />}%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Failed Unicorns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-red-900">The Spectacular Failures</h3>
            
            <div className="space-y-6">
              {failedUnicorns.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="border-l-4 border-red-500 pl-4"
                >
                  <h4 className="font-bold text-lg">{company.name}</h4>
                  <div className="text-sm text-text-secondary mt-1">
                    <span>Raised: ${company.raised}B</span>
                    <span className="mx-2">→</span>
                    <span>Peak: ${company.peak}B</span>
                    <span className="mx-2">→</span>
                    <span className="text-red-600 font-bold">Now: ${company.current}B</span>
                  </div>
                </motion.div>
              ))}
              
              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">
                    ${inView && <CountUp end={20} duration={2} />}B+
                  </div>
                  <div className="text-sm text-red-700 mt-1">Total Value Destroyed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Traditional EdTech Failed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-secondary p-1 rounded-2xl mb-16"
        >
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Why Traditional EdTech Failed</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: inView ? 1 : 0.9 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-10 h-10 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-red-600">
                  {inView && <CountUp end={70} duration={2} suffix="%" />}
                </div>
                <div className="text-sm text-text-secondary mt-2">Dropout Rate</div>
                <div className="text-xs text-text-secondary mt-1">Students quit after 2-3 weeks</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: inView ? 1 : 0.9 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-10 h-10 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600">90</div>
                <div className="text-sm text-text-secondary mt-2">Minute Lectures</div>
                <div className="text-xs text-text-secondary mt-1">In a TikTok world</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: inView ? 1 : 0.9 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingDown className="w-10 h-10 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600">Zero</div>
                <div className="text-sm text-text-secondary mt-2">Engagement</div>
                <div className="text-xs text-text-secondary mt-1">No gamification or social</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: inView ? 1 : 0.9 }}
                transition={{ delay: 0.9, duration: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-gray-600" />
                </div>
                <div className="text-3xl font-bold text-gray-600">No</div>
                <div className="text-sm text-text-secondary mt-2">Career Outcomes</div>
                <div className="text-xs text-text-secondary mt-1">Learning ≠ Hiring</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Behavioral Gap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">The Behavioral Gap</h3>
          
          <div className="max-w-3xl mx-auto">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" />
                <YAxis label={{ value: 'Hours per Day', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="hours" fill="#F97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {inView && <CountUp end={78} duration={2} suffix="%" />}
              </div>
              <p className="text-text-secondary">Prefer peer explanations over teacher lectures</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-secondary mb-2">
                {inView && <CountUp end={83} duration={2} suffix="%" />}
              </div>
              <p className="text-text-secondary">Want learning connected to job opportunities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}