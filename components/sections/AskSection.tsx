'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Target, TrendingUp, Calendar, ChevronRight, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function AskSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);
  const [selectedEngagement, setSelectedEngagement] = useState<number | null>(null);

  const fundingStages = [
    {
      stage: 'NOW - Pre-Seed FFF',
      status: 'Currently Raising',
      amount: '₹4 Crore',
      timeline: 'Q4 2025',
      metrics: '5,000 users, 50% retention',
      icon: Rocket,
      active: true,
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      stage: 'Seed Round',
      status: 'Planned',
      amount: '₹15-20 Crore',
      timeline: 'Dec 2026',
      metrics: '100,000 users, ₹40L MRR',
      icon: Target,
      color: 'blue',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      stage: 'Series A',
      status: 'Planned',
      amount: '₹30-40 Crore',
      timeline: 'Q2-Q3 2027',
      metrics: '250,000 users, ₹1 Cr MRR',
      icon: TrendingUp,
      color: 'green',
      gradient: 'from-green-500 to-teal-500'
    },
  ];

  const engagementOptions = [
    {
      title: 'Join Pre-Seed Now',
      description: 'Milestone-based tranches de-risk investment. Quarterly proof points.',
      icon: Rocket,
      highlight: 'Lowest entry valuation'
    },
    {
      title: 'Track for Seed',
      description: "We'll share quarterly updates. If we hit milestones by Dec 2026, let's talk.",
      icon: Target,
      highlight: 'Watch our execution'
    },
    {
      title: 'Relationship for Series A',
      description: 'Stay connected for 18 months. Watch us execute.',
      icon: TrendingUp,
      highlight: '18-month journey'
    }
  ];

  return (
    <section id="ask" className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white">
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
            <Rocket className="w-5 h-5" />
            <span className="font-semibold">The Ask</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Our Funding</span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pre-Seed → Seed → Series A
          </p>
        </motion.div>

        {/* Funding Timeline Visual */}
        <div className="relative mb-20">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
            <div className="w-full h-1 bg-gray-200 rounded"></div>
            <motion.div 
              className="h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 rounded"
              initial={{ width: 0 }}
              animate={{ width: inView ? '100%' : 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          {/* Stage Cards */}
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {fundingStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                onMouseEnter={() => setHoveredStage(index)}
                onMouseLeave={() => setHoveredStage(null)}
                className="relative"
              >
                {/* Timeline Node - Desktop */}
                <motion.div 
                  className={`hidden lg:flex absolute -top-12 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full ${
                    stage.active ? 'bg-orange-500' : 'bg-gray-300'
                  } items-center justify-center z-10`}
                  animate={{
                    scale: hoveredStage === index ? 1.3 : 1
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-4 h-4 bg-white rounded-full ${stage.active ? 'animate-pulse' : ''}`} />
                </motion.div>

                {/* Card */}
                <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all ${
                  stage.active 
                    ? 'ring-2 ring-orange-500 shadow-xl' 
                    : hoveredStage === index 
                    ? 'shadow-xl transform -translate-y-2' 
                    : ''
                }`}>
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${stage.gradient}`} />
                  
                  <div className="p-8">
                    {/* Icon and Status */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${stage.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <stage.icon className="w-7 h-7 text-white" />
                      </div>
                      {stage.active && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold animate-pulse">
                          Live Now
                        </span>
                      )}
                    </div>

                    {/* Stage Info */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{stage.stage}</h3>
                    <p className={`text-sm font-semibold mb-4 ${
                      stage.active ? 'text-orange-600' : 'text-gray-500'
                    }`}>
                      {stage.status}
                    </p>

                    {/* Amount */}
                    <div className="mb-6">
                      <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {stage.amount}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <p className="text-sm text-gray-600">{stage.timeline}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <p className="text-sm text-gray-600">{stage.metrics}</p>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <AnimatePresence>
                      {hoveredStage === index && !stage.active && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-gray-200"
                        >
                          <p className="text-xs text-gray-500">
                            {index === 1 ? 'Target: 12 months' : 'Target: 18 months'}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Three Ways to Engage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">
            Three Ways to Engage
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                onClick={() => setSelectedEngagement(selectedEngagement === index ? null : index)}
                className="cursor-pointer"
              >
                <div className={`bg-white rounded-xl shadow-lg p-6 h-full transition-all hover:shadow-xl ${
                  selectedEngagement === index ? 'ring-2 ring-indigo-500 transform scale-105' : ''
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      index === 0 ? 'bg-orange-500' :
                      index === 1 ? 'bg-blue-500' :
                      'bg-green-500'
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                        {index + 1}. {option.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                      <p className="text-xs font-semibold text-indigo-600">
                        {option.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

       
      </div>
    </section>
  );
}