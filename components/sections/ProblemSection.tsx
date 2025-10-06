'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Users, Clock, XCircle, AlertTriangle, BookX, BrainCircuit, BarChart2, DollarSign, ArrowUp, ArrowDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell, LineChart, Line, Legend, ReferenceLine } from 'recharts';


const failedUnicorns = [
  {
    name: "Byju's",
    raised: 5.1,
    peak: 22,
    current: 0.2,
    story: "The sales machine that forgot how to teach.",
    problems: ["Forced, top-down selling", "Ignored student engagement", "Unsustainable cash burn"],
  },
  {
    name: 'Unacademy',
    raised: 0.88,
    peak: 3.4,
    current: 0.8,
    story: "The creator bubble burst, leaving students lost.",
    problems: ["Over-reliance on celebrity teachers", "Lack of structured learning paths", "Generic, unverified content"],
  },
  {
    name: 'Vedantu',
    raised: 0.4,
    peak: 1.0,
    current: 0.2,
    story: "Bringing a 2015 model to a 2025 world.",
    problems: ["Outdated live-class model", "No personalization at scale", "Failed to match modern attention spans"],
  },
];

const problemMetrics = [
    { icon: XCircle, value: 70, label: 'Drop-off Rate', description: 'Students leave within 3 weeks due to lack of community.', suffix: '%', color: 'text-red-500' },
    { icon: Clock, value: 90, label: 'Average Lecture', description: 'Monolithic lectures in an era of 15-second content.', suffix: ' min', color: 'text-orange-500' },
    { icon: TrendingDown, value: 12, label: 'Daily Engagement', description: 'Users spend more time on Instagram than learning.', suffix: ' mins', color: 'text-blue-500' },
    { icon: Users, value: 5, label: 'Peer Interaction', description: 'Isolated models ignore the proven power of social learning.', suffix: '%', color: 'text-purple-500' },
];

const behaviorShiftData = [
    { year: '2020', 'Traditional Learning': 55, 'Social & Peer Learning': 45 },
    { year: '2021', 'Traditional Learning': 40, 'Social & Peer Learning': 60 },
    { year: '2022', 'Traditional Learning': 30, 'Social & Peer Learning': 70 },
    { year: '2023', 'Traditional Learning': 20, 'Social & Peer Learning': 80 },
    { year: '2024', 'Traditional Learning': 15, 'Social & Peer Learning': 85 },
];

const engagementData = [
    { name: 'Instagram', 'Time (Hours)': 4.5, fill: '#E1306C' },
    { name: 'YouTube', 'Time (Hours)': 3.8, fill: '#FF0000' },
    { name: 'Gaming', 'Time (Hours)': 3.2, fill: '#9333EA' },
    { name: 'EdTech Apps', 'Time (Hours)': 0.5, fill: '#64748B' },
];


export default function ProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="problem" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-5 font-semibold">
            <AlertTriangle className="w-5 h-5" />
            <span>The Market is Broken</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight">
            A <span className="text-yellow-500">₹37,000 Cr</span> Opportunity¹
            <br />
            Built on <span className="text-red-600">$20B</span> of Mistakes²
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            EdTech 1.0 built digital libraries; we're building a learning society. They lectured at students; we empower them to learn together.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {problemMetrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200/80 text-center"
            >
              <metric.icon className={`w-10 h-10 mx-auto mb-4 ${metric.color}`} />
              <div className={`text-4xl font-bold ${metric.color}`}>
                <CountUp end={metric.value} duration={2.5} suffix={metric.suffix} />
              </div>
              <h4 className="font-semibold text-slate-700 mt-2">{metric.label}</h4>
              <p className="text-xs text-slate-500 mt-1">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ## UPDATE: Removed the line chart and replaced with explicit numerical details ## */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24"
        >
          {failedUnicorns.map((company) => (
            <motion.div
              key={company.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="bg-white flex flex-col p-6 rounded-2xl shadow-lg border border-slate-200/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-slate-800">{company.name}</h3>
                <div className="text-sm font-bold text-red-500 bg-red-100 px-3 py-1 rounded-full">
                  -{Math.round(((company.peak - company.current) / company.peak) * 100)}%
                </div>
              </div>

              {/* New section for numerical details */}
              <div className="grid grid-cols-3 gap-4 text-center my-4">
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Raised</p>
                  <p className="text-lg font-bold text-slate-700">${company.raised}B</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Peak Value</p>
                  <p className="text-lg font-bold text-green-600">${company.peak}B</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Current Value</p>
                  <p className="text-lg font-bold text-red-600">${company.current}B</p>
                </div>
              </div>
              
              <p className="text-sm text-slate-500 italic text-center">"{company.story}"</p>
              
              <div className="space-y-2 text-sm mt-4 pt-4 border-t border-slate-200 flex-grow">
                {company.problems.map((problem) => (
                  <div key={problem} className="flex items-center text-slate-600">
                    <XCircle className="w-4 h-4 mr-2 text-red-300 flex-shrink-0" />
                    <span>{problem}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-24"
        >
            <h3 className="text-4xl font-bold text-center text-slate-800 mb-4">The Unstoppable Shift³</h3>
            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">Students are no longer passive consumers. They are active, social learners who prioritize peer-to-peer knowledge.</p>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200/80 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={behaviorShiftData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="year" stroke="#64748B" />
                        <YAxis stroke="#64748B" unit="%" />
                        <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }} />
                        <Legend verticalAlign="top" height={36}/>
                        <Line type="monotone" dataKey="Traditional Learning" stroke="#94A3B8" strokeWidth={3} name="Top-Down Lectures"/>
                        <Line type="monotone" dataKey="Social & Peer Learning" stroke="#FBBF24" strokeWidth={4} name="Peer-to-Peer Learning" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-24"
        >
          <h3 className="text-4xl font-bold text-center text-slate-800 mb-4">The Battle for Attention⁴</h3>
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">Traditional EdTech isn't just competing with other apps; it's competing with culture itself.</p>
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200/80 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementData} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" stroke="#64748B" unit="h"/>
                <YAxis type="category" dataKey="name" stroke="#64748B" width={80} />
                <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ backgroundColor: 'white', borderRadius: '0.75rem', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="Time (Hours)" background={{ fill: '#f1f5f9' }} barSize={30}>
                  {engagementData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Bar>
                <ReferenceLine x={0.5} stroke="#334155" strokeDasharray="4 4">
                    <Legend payload={[{ value: 'EdTech Avg', type: 'line', color: '#334155' }]} />
                </ReferenceLine>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl"
        >
          <BarChart2 className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h3 className="text-4xl md:text-5xl font-bold mb-4">The Data Doesn't Lie</h3>
          <p className="text-xl md:text-2xl mb-8 text-slate-300">
            The old model is broken. The opportunity is to build for how students <span className="text-yellow-400 font-semibold">actually</span> learn, not how institutions <span className="text-slate-500">used to</span> teach.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <BookX className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <p className="font-semibold">Long lectures are ignored.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <p className="font-semibold">Isolated learning fails.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <BrainCircuit className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <p className="font-semibold">Skills without jobs are pointless.</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-xs text-slate-400 text-center space-y-1">
            <p><sup className='font-bold'>1</sup> Market size for Indian test preparation, HolonIQ, 2024.</p>
            <p><sup className='font-bold'>2</sup> Cumulative valuation loss from peak for major EdTech players, Tracxn & TechCrunch analysis, 2025.</p>
            <p><sup className='font-bold'>3</sup> Internal analysis based on student survey data (N=500), 2025.</p>
            <p><sup className='font-bold'>4</sup> Daily time spent on mobile apps by Gen Z, Data.ai 'State of Mobile' Report, 2024.</p>
        </div>

      </div>
    </section>
  );
}