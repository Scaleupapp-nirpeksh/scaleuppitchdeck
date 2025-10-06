'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Award, Users, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [particlesPosition, setParticlesPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setParticlesPosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const problem = document.getElementById('problem');
    if (problem) problem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* IIT Bombay Validation Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white"
        >
          <Award className="w-5 h-5 mr-2 text-yellow-400" />
          <span className="font-semibold">Validated by 350+ IIT Bombay Students</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          The Learning{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Operating System
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto"
        >
          India's First Platform Connecting Knowledge to Careers
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-white/80 mb-12 max-w-2xl mx-auto"
        >
          Where 50 Million Students Transform Learning into Verified Skills and Job Opportunities
        </motion.p>

        {/* Key Metrics */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">
              {inView && <CountUp end={350} duration={2} suffix="+" />}
            </div>
            <div className="text-white/80">IIT Bombay Students</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">
              {inView && <CountUp end={45} duration={2} suffix="%" />}
            </div>
            <div className="text-white/80">Month-1 Retention</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <div className="text-3xl font-bold text-white mb-2">
              ₹{inView && <CountUp end={4} duration={2} suffix=" Cr" />}
            </div>
            <div className="text-white/80">Raising Pre-Seed</div>
          </div>
        </motion.div>

        {/* Founders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <p className="text-white/70 text-lg">
            Built by <span className="font-semibold text-white">Nirpeksh & Pratiksha</span>
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={scrollToNext}
            className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center mx-auto space-x-2"
          >
            <span>See How It Works</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Animated Flow Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-0 right-0"
          style={{
            transform: `translate(${particlesPosition.x}px, ${particlesPosition.y}px)`,
          }}
        >
          <div className="flex justify-center items-center space-x-8 text-white/60">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <span className="font-semibold">Learn</span>
              </div>
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/40"
            >
              →
            </motion.div>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <span className="font-semibold">Verify</span>
              </div>
            </div>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="text-white/40"
            >
              →
            </motion.div>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <span className="font-semibold">Career</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}