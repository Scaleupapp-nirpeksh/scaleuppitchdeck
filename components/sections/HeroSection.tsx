'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Users, BookOpen, Trophy, Brain, Target, Rocket, CheckCircle, MessageSquare, Award } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const metrics = [
  { 
    label: 'IIT Bombay Validation', 
    value: 350, 
    suffix: '+', 
    prefix: '', 
    subtext: 'Students Validated MVP',
    highlight: true 
  },
  { 
    label: 'Better Than Industry', 
    value: 50, 
    suffix: '%', 
    prefix: '', 
    subtext: 'Higher Retention Rate',
    comparison: 'vs 30% avg' 
  },
  { 
    label: 'TAM Opportunity', 
    value: 37, 
    suffix: 'K Cr', 
    prefix: '₹', 
    subtext: 'Market Size' 
  },
];

const platformFeatures = {
  'Learn': {
    
    color: 'from-blue-400 to-blue-600',
    capabilities: [
      { name: 'Communities', icon: Users, desc: 'Peer-to-peer learning' },
      { name: 'LearnLists', icon: BookOpen, desc: 'Curated study paths' },
      { name: 'Content Creation', icon: Rocket, desc: '10-min video lessons' }
    ]
  },
  'Verify': {
    
    color: 'from-green-400 to-green-600',
    capabilities: [
      { name: 'Smart Quizzes', icon: Target, desc: '2-min assessments' },
      { name: 'SME Verification', icon: Award, desc: 'Expert validation' },
      { name: 'Performance Tracking', icon: Trophy, desc: 'Skill analytics' }
    ]
  },
  'Grow': {
    
    color: 'from-purple-400 to-purple-600',
    capabilities: [
      { name: 'FlashCards', icon: MessageSquare, desc: 'Spaced repetition' },
      { name: 'Study Buddy AI', icon: Brain, desc: 'Personal tutor' },
      { name: 'Career Matching', icon: Rocket, desc: 'Job opportunities' }
    ]
  }
};

type ScaleUpLogoProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

// ## MODIFICATION 1: Made the logo more prominent ##
// Removed the 'invert' filter and added a yellow drop-shadow to make it stand out 
// on the dark background while preserving brand colors.
function ScaleUpLogo({ className = '', size = 'md' }: ScaleUpLogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/scaleup_dark_logo_with_Yellow_U.png" 
        alt="ScaleUp" 
        className={`${sizes[size]} w-auto [filter:drop-shadow(0_2px_10px_rgba(242,194,0,0.5))]`}
      />
    </div>
  );
}

export default function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [glowPoint, setGlowPoint] = useState({ x: 50, y: 50 });
  const [activeFeature, setActiveFeature] = useState('Learn');
  const features = Object.keys(platformFeatures);

  useEffect(() => {
    let frame = 0;

    const handleMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setGlowPoint({
          x: (event.clientX / window.innerWidth) * 100,
          y: (event.clientY / window.innerHeight) * 100,
        });
      });
    };

    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveFeature((prev) => {
        const currentIndex = features.indexOf(prev);
        return features[(currentIndex + 1) % features.length];
      });
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const problem = document.getElementById('problem');
    if (problem) problem.scrollIntoView({ behavior: 'smooth' });
  };

  const currentFeature = platformFeatures[activeFeature as keyof typeof platformFeatures];

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#031824] pb-20 pt-24 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="pointer-events-none absolute inset-0 opacity-70 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at ${glowPoint.x}% ${glowPoint.y}%, rgba(255, 200, 72, 0.22), transparent 55%)`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(8,56,75,0.35),_transparent_60%)]" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#08384B]/25 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-x-1/3 translate-y-1/3 rounded-full bg-[#0B7285]/25 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_40%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-10 lg:col-span-7"
          >
            {/* Logo and Validation Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <ScaleUpLogo size="lg" />
             
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
              className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              India's First Social and Personalized&nbsp;
              <span className="block bg-gradient-to-r from-[#F2C200] via-[#F7CF41] to-[#F49B22] bg-clip-text text-transparent">
                Learning Platform
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
              className="space-y-3"
            >
              <p className="text-xl text-white font-semibold sm:text-2xl">
                Where Social Verified and Personalized Learning Meets Career Growth
              </p>
              
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={scrollToNext}
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F2C200] via-[#F6C533] to-[#F49B22] px-8 py-4 text-lg font-semibold text-[#052734] shadow-[0_24px_60px_rgba(242,194,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(242,194,0,0.45)]"
              >
                See The Opportunity
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
            </motion.div>

            {/* Founders Credit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
              className="text-white/70"
            >
              <p className="text-lg">
                Built by <span className="font-semibold text-white">Nirpeksh & Pratiksha</span>
                
              </p>
            </motion.div>

            {/* Metrics - Redesigned */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
              className="grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-3"
            >
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className={`rounded-2xl border ${metric.highlight ? 'border-yellow-400/30 bg-yellow-400/5' : 'border-white/10 bg-white/5'} p-5 text-left backdrop-blur-lg`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                    {metric.label}
                  </p>
                  <div className="mt-2 text-3xl font-bold text-white">
                    {inView && (
                      <CountUp
                        end={metric.value}
                        duration={1.8}
                        suffix={metric.suffix ?? ''}
                        prefix={metric.prefix ?? ''}
                        decimals={0}
                        separator=","
                      />
                    )}
                  </div>
                  <p className="mt-1 text-sm text-white/70">
                    {metric.subtext}
                  </p>
                  {metric.comparison && (
                    <p className="mt-1 text-xs text-green-400 font-semibold">
                      {metric.comparison}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Platform Features Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
            className="relative lg:col-span-5"
          >
            <div className="pointer-events-none absolute -top-24 right-6 h-48 w-48 rounded-full bg-[#F2C200]/25 blur-3xl" />
            <div className="pointer-events-none absolute bottom-12 left-8 h-32 w-32 rounded-full bg-[#0B7285]/25 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_40px_120px_rgba(15,23,42,0.55)]">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60 mb-6">
                Our Learning Operating System
              </p>

              {/* ## MODIFICATION 2: Created a visual flow for features ## */}
              {/* Added ArrowRight icons between buttons to show the Learn -> Verify -> Grow progression. */}
              <div className="flex items-center justify-center gap-3 mb-8">
                {features.map((feature, index) => (
                  <React.Fragment key={feature}>
                    <button
                      onClick={() => setActiveFeature(feature)}
                      className={`px-4 py-3 rounded-xl font-semibold transition-all text-sm ${
                        activeFeature === feature
                          ? 'bg-white/20 text-white border border-white/30'
                          : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {feature}
                    </button>
                    {index < features.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <ArrowRight className="h-5 w-5 text-white/30" />
                      </motion.div>
                    )}
                  </React.Fragment>
                ))}
              </div>


              {/* Feature Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  

                  {currentFeature.capabilities.map((capability, index) => (
                    <motion.div
                      key={capability.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <capability.icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{capability.name}</h4>
                        <p className="text-sm text-white/60">{capability.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Platform Stats */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">10min</div>
                    <div className="text-xs text-white/60">Avg lesson</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">2min</div>
                    <div className="text-xs text-white/60">Quiz time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-xs text-white/60">AI Support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        type="button"
        onClick={scrollToNext}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
        className="group absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/70 backdrop-blur-lg transition hover:border-white/35 hover:text-white md:flex"
      >
        Keep exploring
        <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
      </motion.button>
    </section>
  );
}