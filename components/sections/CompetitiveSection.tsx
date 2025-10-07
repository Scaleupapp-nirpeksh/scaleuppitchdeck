'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, X, Minus, ChevronDown, ChevronUp, Info, 
  TrendingUp, Users, Brain, Award, Briefcase, 
  Youtube, Sparkles, ChevronLeft, ChevronRight,
  BookOpen, Bot, Building2, Target,Trophy
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function CompetitiveSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [hoveredCell, setHoveredCell] = useState<{ row: string; col: string } | null>(null);
  const [viewMode, setViewMode] = useState<'features' | 'business'>('features');
  const [mobileCardIndex, setMobileCardIndex] = useState(0);

  // Competitor data
  const competitors = [
    {
      id: 'youtube',
      name: 'YouTube',
      icon: Youtube,
      color: 'red',
      description: 'Unlimited content, but no learning structure or verification',
      features: {
        engagingContent: { status: 'yes', detail: 'Infinite variety, algorithm-driven discovery' },
        proofOfLearning: { status: 'no', detail: 'No way to verify if learning happened' },
        aiPersonalization: { status: 'no', detail: 'Entertainment-focused recommendations only' },
        careerOutcomes: { status: 'no', detail: 'Not designed for career progression' },
        retentionRate: { value: null, detail: 'Not applicable - entertainment platform' }
      },
      businessModel: {
        revenue: 'Ads + Premium',
        pricing: 'Free / ₹129/month',
        marketCap: '$200B+',
        userBase: '2.7B users'
      }
    },
    {
      id: 'unacademy',
      name: 'Unacademy / PhysicsWallah',
      icon: BookOpen,
      color: 'purple',
      description: 'Traditional online coaching with celebrity teachers',
      features: {
        engagingContent: { status: 'yes', detail: 'Live classes and recorded lectures' },
        proofOfLearning: { status: 'partial', detail: 'Basic tests, not continuous verification' },
        aiPersonalization: { status: 'no', detail: 'One-size-fits-all approach' },
        careerOutcomes: { status: 'no', detail: 'Focus only on exam cracking' },
        retentionRate: { value: 35, detail: '30-40% average retention' }
      },
      businessModel: {
        revenue: 'Course Sales',
        pricing: '₹3,000-50,000/course',
        marketCap: '$800M (down from $3.4B)',
        userBase: '50M+ learners'
      }
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Building2,
      color: 'blue',
      description: 'Professional network with learning add-on',
      features: {
        engagingContent: { status: 'no', detail: 'Dry, corporate-style courses' },
        proofOfLearning: { status: 'no', detail: 'Certificates without real verification' },
        aiPersonalization: { status: 'no', detail: 'Generic course recommendations' },
        careerOutcomes: { status: 'yes', detail: 'Strong job network and visibility' },
        retentionRate: { value: null, detail: 'Not disclosed for Learning product' }
      },
      businessModel: {
        revenue: 'Subscriptions + Ads',
        pricing: '₹1,500/month',
        marketCap: 'Part of $700B Microsoft',
        userBase: '950M professionals'
      }
    },
    {
      id: 'duolingo',
      name: 'Duolingo',
      icon: Target,
      color: 'green',
      description: 'Gamified language learning with strong engagement',
      features: {
        engagingContent: { status: 'yes', detail: 'Bite-sized, gamified lessons' },
        proofOfLearning: { status: 'yes', detail: 'Continuous assessment and streaks' },
        aiPersonalization: { status: 'yes', detail: 'Adaptive difficulty and pacing' },
        careerOutcomes: { status: 'no', detail: 'Limited career application' },
        retentionRate: { value: 70, detail: 'Industry-leading 70% retention' }
      },
      businessModel: {
        revenue: 'Freemium + Ads',
        pricing: 'Free / ₹500/month',
        marketCap: '$8B',
        userBase: '500M+ users'
      }
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      icon: Bot,
      color: 'teal',
      description: 'AI tutor without structure or verification',
      features: {
        engagingContent: { status: 'no', detail: 'Text-based Q&A, not engaging content' },
        proofOfLearning: { status: 'no', detail: 'No assessment or tracking' },
        aiPersonalization: { status: 'yes', detail: 'Highly personalized responses' },
        careerOutcomes: { status: 'no', detail: 'Tool, not career platform' },
        retentionRate: { value: null, detail: 'Not a learning platform metric' }
      },
      businessModel: {
        revenue: 'Subscriptions',
        pricing: 'Free / ₹1,500/month',
        marketCap: '$90B valuation',
        userBase: '180M+ users'
      }
    },
    {
      id: 'scaleup',
      name: 'ScaleUp',
      icon: Sparkles,
      color: 'orange',
      isHighlighted: true,
      description: 'The only platform that combines everything students need',
      features: {
        engagingContent: { status: 'yes', detail: '10-min peer videos + social learning' },
        proofOfLearning: { status: 'yes', detail: '2-min quizzes with continuous verification' },
        aiPersonalization: { status: 'yes', detail: 'AI roadmaps + weak area targeting' },
        careerOutcomes: { status: 'yes', detail: 'CLIP scores → direct job matching' },
        retentionRate: { value: 55, target: 65, detail: '55% current → 65% target' }
      },
      businessModel: {
        revenue: 'Freemium + B2B + Hiring',
        pricing: 'Free / ₹499/month',
        marketCap: 'Raising ₹4Cr Pre-Seed',
        userBase: '350 → 100K target'
      }
    }
  ];

  // Feature columns
  const featureColumns = [
    {
      id: 'engagingContent',
      name: 'Engaging Content',
      icon: Users,
      tooltip: 'Content that students actually want to consume'
    },
    {
      id: 'proofOfLearning',
      name: 'Proof of Learning',
      icon: Award,
      tooltip: 'Verified evidence that learning occurred'
    },
    {
      id: 'aiPersonalization',
      name: 'AI Personalization',
      icon: Brain,
      tooltip: 'Adaptive learning paths based on individual needs'
    },
    {
      id: 'careerOutcomes',
      name: 'Career Outcomes',
      icon: Briefcase,
      tooltip: 'Direct path from learning to employment'
    },
    {
      id: 'retentionRate',
      name: 'Retention Rate',
      icon: TrendingUp,
      tooltip: 'Percentage of users active after 30 days'
    }
  ];

  // Status rendering
  const renderStatus = (status: string) => {
    switch (status) {
      case 'yes':
        return <Check className="w-5 h-5 text-green-500" />;
      case 'no':
        return <X className="w-5 h-5 text-red-500" />;
      case 'partial':
        return <Minus className="w-5 h-5 text-yellow-500" />;
      default:
        return <span className="text-gray-400 text-sm">N/A</span>;
    }
  };

  // Render retention rate bar
  const renderRetentionBar = (value: number | null, target?: number) => {
    if (value === null) {
      return <span className="text-gray-400 text-sm">N/A</span>;
    }

    return (
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <div className="h-6 bg-gray-100 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: inView ? `${value}%` : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-green-400 to-green-600"
            />
            {target && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 0.5 : 0 }}
                transition={{ delay: 1 }}
                className="absolute top-0 h-full border-r-2 border-dashed border-orange-500"
                style={{ left: `${target}%` }}
              />
            )}
          </div>
        </div>
        <span className="text-sm font-bold text-gray-700">
          {value}%{target && ` → ${target}%`}
        </span>
      </div>
    );
  };

  return (
    <section id="competitive" className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-12"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Target className="w-5 h-5" />
            <span className="font-semibold">Competitive Advantage</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Why</span>{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              ScaleUp Wins
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're not competing with one platform. We're building what they all missed.
          </p>

          {/* View Mode Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('features')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                viewMode === 'features' 
                  ? 'bg-white text-gray-800 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Feature Comparison
            </button>
            <button
              onClick={() => setViewMode('business')}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                viewMode === 'business' 
                  ? 'bg-white text-gray-800 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Business Model
            </button>
          </div>
        </motion.div>

        {/* Desktop Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-700">Platform</th>
                  {viewMode === 'features' ? (
                    featureColumns.map(col => (
                      <th key={col.id} className="text-center p-4 font-semibold text-gray-700">
                        <div className="flex flex-col items-center gap-2">
                          <col.icon className="w-5 h-5 text-gray-500" />
                          <span className="text-sm">{col.name}</span>
                          <div className="group relative">
                            <Info className="w-4 h-4 text-gray-400 cursor-help" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                              {col.tooltip}
                            </div>
                          </div>
                        </div>
                      </th>
                    ))
                  ) : (
                    <>
                      <th className="text-center p-4">Revenue Model</th>
                      <th className="text-center p-4">Pricing</th>
                      <th className="text-center p-4">Valuation</th>
                      <th className="text-center p-4">User Base</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor) => (
                  <React.Fragment key={competitor.id}>
                    <motion.tr
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                      transition={{ delay: 0.4 + competitors.indexOf(competitor) * 0.05 }}
                      className={`border-b transition-all cursor-pointer hover:bg-gray-50 ${
                        competitor.isHighlighted 
                          ? 'bg-gradient-to-r from-orange-50 to-yellow-50 font-medium' 
                          : ''
                      }`}
                      onClick={() => setExpandedRow(expandedRow === competitor.id ? null : competitor.id)}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-${competitor.color}-100 rounded-lg flex items-center justify-center`}>
                            <competitor.icon className={`w-6 h-6 text-${competitor.color}-600`} />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{competitor.name}</p>
                            {competitor.isHighlighted && (
                              <p className="text-xs text-orange-600">Our Solution</p>
                            )}
                          </div>
                          <ChevronDown className={`w-4 h-4 text-gray-400 ml-auto transition-transform ${
                            expandedRow === competitor.id ? 'rotate-180' : ''
                          }`} />
                        </div>
                      </td>
                      
                      {viewMode === 'features' ? (
                        <>
                          <td 
                            className="text-center p-4"
                            onMouseEnter={() => setHoveredCell({ row: competitor.id, col: 'engagingContent' })}
                            onMouseLeave={() => setHoveredCell(null)}
                          >
                            <div className="relative inline-block">
                              {renderStatus(competitor.features.engagingContent.status)}
                              {hoveredCell?.row === competitor.id && hoveredCell?.col === 'engagingContent' && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap z-10">
                                  {competitor.features.engagingContent.detail}
                                </div>
                              )}
                            </div>
                          </td>
                          <td 
                            className="text-center p-4"
                            onMouseEnter={() => setHoveredCell({ row: competitor.id, col: 'proofOfLearning' })}
                            onMouseLeave={() => setHoveredCell(null)}
                          >
                            <div className="relative inline-block">
                              {renderStatus(competitor.features.proofOfLearning.status)}
                              {hoveredCell?.row === competitor.id && hoveredCell?.col === 'proofOfLearning' && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap z-10">
                                  {competitor.features.proofOfLearning.detail}
                                </div>
                              )}
                            </div>
                          </td>
                          <td 
                            className="text-center p-4"
                            onMouseEnter={() => setHoveredCell({ row: competitor.id, col: 'aiPersonalization' })}
                            onMouseLeave={() => setHoveredCell(null)}
                          >
                            <div className="relative inline-block">
                              {renderStatus(competitor.features.aiPersonalization.status)}
                              {hoveredCell?.row === competitor.id && hoveredCell?.col === 'aiPersonalization' && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap z-10">
                                  {competitor.features.aiPersonalization.detail}
                                </div>
                              )}
                            </div>
                          </td>
                          <td 
                            className="text-center p-4"
                            onMouseEnter={() => setHoveredCell({ row: competitor.id, col: 'careerOutcomes' })}
                            onMouseLeave={() => setHoveredCell(null)}
                          >
                            <div className="relative inline-block">
                              {renderStatus(competitor.features.careerOutcomes.status)}
                              {hoveredCell?.row === competitor.id && hoveredCell?.col === 'careerOutcomes' && (
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap z-10">
                                  {competitor.features.careerOutcomes.detail}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="min-w-[120px]">
                              {renderRetentionBar(
                                competitor.features.retentionRate.value,
                                competitor.features.retentionRate.target
                              )}
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="text-center p-4 text-sm">{competitor.businessModel.revenue}</td>
                          <td className="text-center p-4 text-sm">{competitor.businessModel.pricing}</td>
                          <td className="text-center p-4 text-sm font-semibold">{competitor.businessModel.marketCap}</td>
                          <td className="text-center p-4 text-sm">{competitor.businessModel.userBase}</td>
                        </>
                      )}
                    </motion.tr>
                    
                    {/* Expanded Row */}
                    <AnimatePresence>
                      {expandedRow === competitor.id && (
                        <motion.tr
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <td colSpan={viewMode === 'features' ? 6 : 5} className="p-0">
                            <div className={`p-6 bg-gray-50 border-b ${
                              competitor.isHighlighted ? 'bg-gradient-to-r from-orange-50 to-yellow-50' : ''
                            }`}>
                              <p className="text-gray-700 mb-4">{competitor.description}</p>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Strengths</h4>
                                  <ul className="space-y-1 text-sm text-gray-600">
                                    {Object.entries(competitor.features).map(([key, value]) => {
                                      if (value.status === 'yes' || value.status === 'partial') {
                                        return (
                                          <li key={key} className="flex items-center gap-2">
                                            <Check className="w-4 h-4 text-green-500" />
                                            {value.detail}
                                          </li>
                                        );
                                      }
                                      return null;
                                    })}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-2">Limitations</h4>
                                  <ul className="space-y-1 text-sm text-gray-600">
                                    {Object.entries(competitor.features).map(([key, value]) => {
                                      if (value.status === 'no') {
                                        return (
                                          <li key={key} className="flex items-center gap-2">
                                            <X className="w-4 h-4 text-red-500" />
                                            {value.detail}
                                          </li>
                                        );
                                      }
                                      return null;
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile Swipeable Cards */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Card Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileCardIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                {(() => {
                  const competitor = competitors[mobileCardIndex];
                  return (
                    <>
                      {/* Card Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 bg-${competitor.color}-100 rounded-xl flex items-center justify-center`}>
                          <competitor.icon className={`w-7 h-7 text-${competitor.color}-600`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{competitor.name}</h3>
                          {competitor.isHighlighted && (
                            <p className="text-sm text-orange-600 font-semibold">Our Solution</p>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-6">{competitor.description}</p>

                      {/* Features Grid */}
<div className="space-y-4">
  {featureColumns.map(col => {
    const renderFeatureValue = () => {
      if (col.id === 'retentionRate') {
        const retentionData = competitor.features.retentionRate;
        if ('value' in retentionData) {
          return (
            <div className="w-32">
              {renderRetentionBar(
                retentionData.value,
                'target' in retentionData ? retentionData.target : undefined
              )}
            </div>
          );
        }
        return <span className="text-gray-400 text-sm">N/A</span>;
      } else {
        const feature = competitor.features[col.id as 'engagingContent' | 'proofOfLearning' | 'aiPersonalization' | 'careerOutcomes'];
        if (feature && 'status' in feature) {
          return renderStatus(feature.status);
        }
        return <span className="text-gray-400 text-sm">N/A</span>;
      }
    };

    return (
      <div key={col.id} className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <col.icon className="w-5 h-5 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">{col.name}</span>
        </div>
        <div className="flex items-center gap-2">
          {renderFeatureValue()}
        </div>
      </div>
    );
  })}
</div>

                      {/* Business Model (if in business view) */}
                      {viewMode === 'business' && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Revenue Model</p>
                              <p className="font-semibold">{competitor.businessModel.revenue}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Pricing</p>
                              <p className="font-semibold">{competitor.businessModel.pricing}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Valuation</p>
                              <p className="font-semibold">{competitor.businessModel.marketCap}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">User Base</p>
                              <p className="font-semibold">{competitor.businessModel.userBase}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => setMobileCardIndex(Math.max(0, mobileCardIndex - 1))}
                disabled={mobileCardIndex === 0}
                className="p-2 rounded-lg bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {competitors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setMobileCardIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === mobileCardIndex 
                        ? 'bg-orange-500 w-8' 
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setMobileCardIndex(Math.min(competitors.length - 1, mobileCardIndex + 1))}
                disabled={mobileCardIndex === competitors.length - 1}
                className="p-2 rounded-lg bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 text-white text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              The Only Complete Solution
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
              Only platform combining social learning + gamification + AI personalization + verified profiles + career outcomes
            </p>
            
            {/* Key Differentiators */}
            <div className="grid md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Social First</p>
                <p className="text-sm opacity-75">Peers teaching peers</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Verified Skills</p>
                <p className="text-sm opacity-75">Not just certificates</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <Brain className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">AI Powered</p>
                <p className="text-sm opacity-75">Personalized paths</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <Briefcase className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">Job Ready</p>
                <p className="text-sm opacity-75">Direct placements</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}