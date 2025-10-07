'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, ArrowRight, Sparkles, Target, Users, Award, 
  Brain, Puzzle, Lock, Unlock, Building2, Rocket,
  CheckCircle2, XCircle, ChevronRight, Layers
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function InsightSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // What we've ACTUALLY validated
  const validation = {
    students: 350,
    quizzes: 50,
    participation: 750,
    retention: 55,
    quizTime: 2
  };

  // The insight: Why everyone failed
  const failures = [
    {
      company: "Byju's",
      approach: "Built a content library",
      problem: "No verification → No trust → No jobs",
      icon: XCircle
    },
    {
      company: "Unacademy",
      approach: "Built a creator platform",
      problem: "No quality control → No outcomes → No retention",
      icon: XCircle
    },
    {
      company: "Everyone else",
      approach: "Built isolated features",
      problem: "No connection → No progression → No value",
      icon: XCircle
    }
  ];

  // The ScaleUp OS vision - what we're building
  const osLayers = [
    {
      layer: "Knowledge Layer",
      current: "✅ Validated: 350 IIT students creating content",
      building: "Scale to 50M students across India",
      why: "Peers teach better than professors - we proved it",
      icon: Brain,
      color: "blue"
    },
    {
      layer: "Verification Layer", 
      current: "✅ Validated: 750+ quiz participations, 2-min format works",
      building: "AI + SME verification at scale",
      why: "Learning without proof is just entertainment",
      icon: CheckCircle2,
      color: "green"
    },
    {
      layer: "Career Layer",
      current: "🚧 Next Phase: Building skill profiles from quiz data",
      building: "Direct pipeline to 10K+ companies",
      why: "Companies want verified skills, not certificates",
      icon: Rocket,
      color: "orange"
    }
  ];

  // Why OS > Apps (the strategic insight)
  const whyOS = [
    {
      title: "Network Effects",
      traditional: "More content = more cost",
      scaleUp: "More users = more content = more value",
      
    },
    {
      title: "Data Compounds",
      traditional: "Learning data sits unused",
      scaleUp: "Every quiz builds your skill profile",
      
    },
    {
      title: "Trust Scales",
      traditional: "Certificates mean nothing",
      scaleUp: "Continuous verification = employability",
      
    }
  ];

  return (
    <section id="insight" className="min-h-screen py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: The Insight */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Lightbulb className="w-5 h-5" />
            <span className="font-semibold">The ₹37,000 Cr Insight</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-800">Everyone Built Features.</span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              We're Building an OS.
            </motion.span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            They spent $20B building disconnected apps. We spent 60 days proving that an 
            <span className="font-bold text-gray-800"> integrated Learning Operating System</span> is what 
            50M students actually need.
          </p>
        </motion.div>

        {/* Why Everyone Failed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
         
          
          
        </motion.div>

        {/* The OS Vision - What We're Building */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-2">
            The Learning OS: Three Integrated Layers
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Each layer feeds the next. No gaps. No dead ends. Just continuous value creation.
          </p>
          
          <div className="space-y-6">
            {osLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (index % 2 === 0 ? -30 : 30) }}
                transition={{ delay: 0.6 + index * 0.15 }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                className="cursor-pointer"
              >
                <div className={`bg-white rounded-2xl shadow-lg border-2 transition-all hover:shadow-xl ${
                  expandedCard === index ? 'border-' + layer.color + '-500' : 'border-gray-100'
                }`}>
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 bg-${layer.color}-100 rounded-xl flex items-center justify-center`}>
                          <layer.icon className={`w-7 h-7 text-${layer.color}-600`} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800">
                            Layer {index + 1}: {layer.layer}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{layer.why}</p>
                        </div>
                      </div>
                      <ChevronRight className={`w-6 h-6 text-gray-400 transition-transform ${
                        expandedCard === index ? 'rotate-90' : ''
                      }`} />
                    </div>
                    
                    <AnimatePresence>
                      {expandedCard === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-gray-200 space-y-4"
                        >
                          <div className="bg-green-50 rounded-lg p-4">
                            <p className="text-sm font-semibold text-green-800 mb-1">What We've Proven:</p>
                            <p className="text-sm text-green-700">{layer.current}</p>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-4">
                            <p className="text-sm font-semibold text-blue-800 mb-1">What We're Building:</p>
                            <p className="text-sm text-blue-700">{layer.building}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Connection Line to Next Layer */}
                  {index < osLayers.length - 1 && (
                    <div className="relative h-8">
                      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300" />
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: inView ? '100%' : 0 }}
                        transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
                        className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-${layer.color}-500 to-${osLayers[index + 1].color}-500`}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why OS Beats Apps - The Strategic Moat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Why an OS Creates Unstoppable Network Effects
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {whyOS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h4 className="text-xl font-bold mb-4 text-gray-800">{item.title}</h4>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-red-700">Traditional:</p>
                      <p className="text-sm text-gray-600">{item.traditional}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-green-700">ScaleUp OS:</p>
                      <p className="text-sm text-gray-600">{item.scaleUp}</p>
                    </div>
                  </div>
                </div>
                
                
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Validation Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 rounded-3xl p-1 mb-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-8">
              60 Days. 350 Students. Proof of Concept.
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{validation.students}</div>
                <p className="text-sm text-gray-600">IIT Bombay Students</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{validation.participation}+</div>
                <p className="text-sm text-gray-600">Quiz Participations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">{validation.retention}%</div>
                <p className="text-sm text-gray-600">Month-1 Retention</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{validation.quizTime} min</div>
                <p className="text-sm text-gray-600">Quiz Time</p>
              </div>
            </div>
            
            <p className="text-center text-gray-700 text-lg">
              We didn't build everything. We built <span className="font-bold">proof</span> that the OS model works.
              <br />
              <span className="text-sm text-gray-600 mt-2 block">
                Now we're ready to scale from 350 to 50 million.
              </span>
            </p>
          </div>
        </motion.div>

        {/* The Ask */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 1.3 }}
          className="text-center"
        >
         
        </motion.div>
      </div>
    </section>
  );
}