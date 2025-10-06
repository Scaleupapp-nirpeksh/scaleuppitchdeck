'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, BookOpen, Award, Brain, Briefcase, 
  ChevronRight, Star, Clock, TrendingUp, 
  Users, Target, Sparkles, CheckCircle,
  ArrowRight, Smartphone, Heart, MapPin,
  School, DollarSign, Trophy, Zap
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function UserJourneySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedPath, setSelectedPath] = useState<'path1' | 'path2'>('path1');

  // Priya's Journey - The 99% student story
  const journeyPath1 = [
    {
      stage: 'The Reality',
      pillar: 'Starting Point',
      icon: User,
      color: 'gray',
      time: 'Class 11',
      situation: {
        before: "Priya from Patna, studying in local school",
        problem: "Father is auto driver (₹15K/month), mother is homemaker. Can't afford ₹2 Lakh coaching.",
        emotion: "😟 Determined but lost"
      },
      action: "Discovers ScaleUp through school friend's WhatsApp",
      outcome: "Free access to IIT toppers' content. Same quality as Kota, zero cost.",
      benefits: [
        "Free peer-created content",
        "10-min videos in Hindi & English",
        "No need to move to Kota",
        "Studies from ₹2000 smartphone"
      ],
      stats: {
        saved: '₹2 Lakh',
        hoursDaily: '4 hrs',
        topics: '50+'
      }
    },
    {
      stage: 'The Preparation',
      pillar: 'Learn + Verify',
      icon: BookOpen,
      color: 'blue',
      time: 'Class 12',
      situation: {
        before: "Preparing for JEE with ScaleUp",
        problem: "Peers from IIT/NIT creating content, explaining in relatable way",
        emotion: "💪 Confident"
      },
      action: "Completes 500+ quizzes, builds verified skill profile",
      outcome: "Cracks JEE Mains with 92 percentile, gets NIT admission",
      benefits: [
        "Daily 2-min quizzes keep her on track",
        "Weak area identification by AI",
        "Peer mentorship from IITians",
        "Part-time tutoring opportunity"
      ],
      stats: {
        rank: '92 %ile',
        earned: '₹5K/mo',
        mentors: '10+'
      }
    },
    {
      stage: 'College + Earning',
      pillar: 'Grow + Earn',
      icon: DollarSign,
      color: 'green',
      time: 'Year 1-2',
      situation: {
        before: "At NIT, but family still struggling financially",
        problem: "Needs to support family while studying",
        emotion: "🎯 Multitasking"
      },
      action: "Creates content on ScaleUp, earns ₹10K/month teaching JEE aspirants",
      outcome: "Supports family + builds teaching reputation + maintains 8.5 CGPA",
      benefits: [
        "Earns by teaching what she learned",
        "Flexible hours around classes",
        "Building verified teaching profile",
        "Network with other creators"
      ],
      stats: {
        earnings: '₹10K/mo',
        students: '500+',
        cgpa: '8.5'
      }
    },
    {
      stage: 'Skill Building',
      pillar: 'Personalized Growth',
      icon: Brain,
      color: 'purple',
      time: 'Year 3',
      situation: {
        before: "Wants to crack product companies but lacks guidance",
        problem: "No seniors in family, doesn't know roadmap",
        emotion: "🚀 Learning fast"
      },
      action: "AI creates personalized roadmap: DSA → System Design → Projects",
      outcome: "Masters 40+ topics with verification, builds 5 projects",
      benefits: [
        "Clear roadmap to FAANG",
        "Peer code reviews",
        "Mock interviews with placed seniors",
        "Continued earning through teaching"
      ],
      stats: {
        skills: '40+',
        projects: '5',
        mockInterviews: '20+'
      }
    },
    {
      stage: 'The Outcome',
      pillar: 'Career Success',
      icon: Trophy,
      color: 'yellow',
      time: 'Year 4',
      situation: {
        before: "Placement season at NIT",
        problem: "Competing with IIT students",
        emotion: "🎉 Triumphant"
      },
      action: "ScaleUp verified profile catches Microsoft recruiter's attention",
      outcome: "Multiple offers: Microsoft (₹44 LPA), Flipkart (₹35 LPA), chooses Microsoft",
      benefits: [
        "Verified skills > College brand",
        "4 years of teaching credibility",
        "Strong peer recommendations",
        "First engineer in family"
      ],
      stats: {
        package: '₹44 LPA',
        offers: '5',
        familyIncome: '30x'
      }
    }
  ];

  // Alternative Path - When top college doesn't happen
  const journeyPath2 = [
    {
      stage: 'The Reality',
      pillar: 'Starting Point',
      icon: User,
      color: 'gray',
      time: 'After 12th',
      situation: {
        before: "Ravi from Tier-3 city, couldn't crack JEE",
        problem: "Joins local engineering college, feels future is limited",
        emotion: "😔 Disappointed"
      },
      action: "Friend shows him ScaleUp - 'College doesn't define you'",
      outcome: "Realizes skills matter more than college brand",
      benefits: [
        "Access to same content as IITians",
        "Can compete on skills, not degree",
        "Affordable at ₹99/month",
        "Hope restored"
      ],
      stats: null
    },
    {
      stage: 'Skill First',
      pillar: 'Learn Differently',
      icon: Zap,
      color: 'orange',
      time: 'Year 1-2',
      situation: {
        before: "Local college has outdated curriculum",
        problem: "Teachers teaching 2010 Java when industry needs React",
        emotion: "⚡ Taking charge"
      },
      action: "Learns modern tech stack on ScaleUp from industry professionals",
      outcome: "More skilled than IIT batchmates in practical technologies",
      benefits: [
        "Industry-relevant skills",
        "Real project experience",
        "GitHub profile building",
        "Freelance opportunities"
      ],
      stats: {
        techStack: '10+',
        projects: '15',
        earned: '₹50K'
      }
    },
    {
      stage: 'Building Credibility',
      pillar: 'Verification Advantage',
      icon: Award,
      color: 'green',
      time: 'Year 3',
      situation: {
        before: "Has skills but no brand college tag",
        problem: "Resumes getting rejected due to college filter",
        emotion: "💡 Strategic"
      },
      action: "Builds strongest verified skill profile on ScaleUp - 1000+ verifications",
      outcome: "Starts getting noticed by startups who value skills over degree",
      benefits: [
        "Bypassing resume filters",
        "Direct founder connections",
        "Proven track record",
        "Teaching income ₹15K/month"
      ],
      stats: {
        verifications: '1000+',
        interviews: '12',
        teachingIncome: '₹15K/mo'
      }
    },
    {
      stage: 'The Breakthrough',
      pillar: 'Network Effect',
      icon: Users,
      color: 'blue',
      time: 'Year 4',
      situation: {
        before: "Final year, placement season",
        problem: "Campus placements offering ₹3-5 LPA",
        emotion: "🎯 Confident"
      },
      action: "ScaleUp community member refers him to Razorpay",
      outcome: "Cracks interview with verified skills, gets ₹24 LPA offer",
      benefits: [
        "Network > College brand",
        "Skills spoke louder than degree",
        "Mentoring other tier-3 students",
        "Created his own path"
      ],
      stats: {
        package: '₹24 LPA',
        collegeAvg: '₹4 LPA',
        multiplier: '6x'
      }
    },
    {
      stage: 'Giving Back',
      pillar: 'Creating Opportunity',
      icon: Heart,
      color: 'purple',
      time: 'Post-Placement',
      situation: {
        before: "Secured job at Razorpay",
        problem: "Wants to help others like him",
        emotion: "🙏 Grateful"
      },
      action: "Becomes top creator on ScaleUp, mentoring 1000+ tier-3 students",
      outcome: "Additional ₹30K/month passive income, 50+ students placed",
      benefits: [
        "Creating pathway for others",
        "Building education brand",
        "Passive income stream",
        "Social impact"
      ],
      stats: {
        mentored: '1000+',
        placed: '50+',
        impact: '∞'
      }
    }
  ];

  const journey = selectedPath === 'path1' ? journeyPath1 : journeyPath2;
  const current = journey[currentStage];

  return (
    <section id="journey" className="min-h-screen py-10 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 text-sm md:text-base"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Heart className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-semibold">Real Stories, Real Impact</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gray-800">Every Student Deserves</span>
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              A Fighting Chance
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4 mb-8">
            ScaleUp isn't for the 1% who are already privileged.
            <br />
            It's for the 99% who have talent but lack opportunity.
          </p>

          {/* Path Selector */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                setSelectedPath('path1');
                setCurrentStage(0);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedPath === 'path1' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Path 1: Priya's Journey (Patna → NIT → Microsoft)
            </button>
            <button
              onClick={() => {
                setSelectedPath('path2');
                setCurrentStage(0);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedPath === 'path2' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Path 2: Ravi's Journey (Tier-3 College → Razorpay)
            </button>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 md:mb-12"
        >
          {/* Timeline */}
          <div className="flex items-center justify-between relative mb-8 overflow-x-auto pb-4">
            <div className="absolute inset-x-0 top-6 h-1 bg-gray-200" />
            <div 
              className="absolute top-6 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 transition-all duration-500"
              style={{ width: `${(currentStage / (journey.length - 1)) * 100}%` }}
            />
            
            {journey.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStage(index)}
                className={`relative z-10 transition-all flex-shrink-0 ${
                  index === currentStage ? 'scale-110' : 'scale-90'
                }`}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all ${
                  index === currentStage 
                    ? `bg-${step.color}-500 text-white shadow-lg` 
                    : index < currentStage 
                      ? `bg-${step.color}-200 text-${step.color}-700`
                      : 'bg-gray-100 text-gray-400'
                }`}>
                  <step.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <p className={`absolute top-16 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap ${
                  index === currentStage ? 'font-bold text-gray-800' : 'text-gray-600'
                }`}>
                  {step.time}
                </p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Current Stage Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedPath}-${currentStage}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8 md:mb-12"
          >
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
              {/* Stage Header */}
              <div className={`bg-gradient-to-r from-${current.color}-500 to-${current.color}-600 p-6 md:p-8 text-white`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-sm md:text-base opacity-90">{current.time}</p>
                    <h3 className="text-xl md:text-3xl font-bold">{current.stage}</h3>
                    <p className="text-base md:text-lg mt-2">{current.pillar}</p>
                  </div>
                  <div className="text-3xl md:text-4xl">
                    {current.situation.emotion}
                  </div>
                </div>
              </div>

              {/* Stage Content */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {/* Left: Situation & Story */}
                  <div>
                    <div className="mb-6">
                      <h4 className="font-bold text-lg mb-3">The Situation</h4>
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-xl p-4">
                          <p className="text-sm md:text-base">{current.situation.before}</p>
                        </div>
                        <div className="bg-yellow-50 rounded-xl p-4">
                          <p className="text-sm md:text-base text-gray-700">{current.situation.problem}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-3">What Happens</h4>
                      <div className="space-y-3">
                        <div className="bg-blue-50 rounded-xl p-4">
                          <p className="text-sm md:text-base text-blue-700">
                            <span className="font-semibold">Action:</span> {current.action}
                          </p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4">
                          <p className="text-sm md:text-base text-green-700">
                            <span className="font-semibold">Result:</span> {current.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Benefits & Impact */}
                  <div>
                    {current.benefits && (
                      <div className="mb-6">
                        <h4 className="font-bold text-lg mb-3">How ScaleUp Helps</h4>
                        <div className="space-y-2">
                          {current.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <p className="text-sm md:text-base">{benefit}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {current.stats && (
                      <div>
                        <h4 className="font-bold text-lg mb-3">The Numbers</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {Object.entries(current.stats).map(([key, value]) => (
                            <div key={key} className={`bg-gradient-to-br from-${current.color}-50 to-white rounded-lg p-3 text-center border border-${current.color}-200`}>
                              <p className="text-lg md:text-xl font-bold text-gray-800">{value}</p>
                              <p className="text-xs text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-6 pt-6 border-t">
                  <button
                    onClick={() => setCurrentStage(Math.max(0, currentStage - 1))}
                    disabled={currentStage === 0}
                    className="px-4 py-2 rounded-lg bg-gray-100 disabled:opacity-50 font-semibold"
                  >
                    ← Previous
                  </button>
                  <span className="text-sm font-medium text-gray-600">
                    Stage {currentStage + 1} of {journey.length}
                  </span>
                  <button
                    onClick={() => setCurrentStage(Math.min(journey.length - 1, currentStage + 1))}
                    disabled={currentStage === journey.length - 1}
                    className="px-4 py-2 rounded-lg bg-gray-100 disabled:opacity-50 font-semibold"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* The Impact Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <School className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-2xl md:text-4xl font-bold mb-6">
            ScaleUp: The Great Equalizer
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">For Those Who Make It</h4>
              <p className="text-sm md:text-base opacity-90">
                Get into top colleges → Earn while learning → Build network → Land dream jobs
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">For Those Who Don't</h4>
              <p className="text-sm md:text-base opacity-90">
  Skills {'>'} Degree → Verified credibility → Direct opportunities → Same outcomes
</p>
            </div>
          </div>
          <p className="mt-8 text-lg md:text-xl opacity-90">
            Your starting point doesn't determine your destination.
            <br />
            <span className="font-bold">ScaleUp ensures that.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}