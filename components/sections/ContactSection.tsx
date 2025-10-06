'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Calendar, Download, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Build India's Learning OS Together
          </h2>
          <p className="text-xl text-text-secondary">Connect with the founders</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Nirpeksh</h3>
            <p className="text-lg text-accent font-semibold mb-4">Co-founder, CEO</p>
            <div className="space-y-3">
              <a href="mailto:nirpeksh@scaleupapp.club" className="flex items-center text-text-secondary hover:text-primary">
                <Mail className="w-5 h-5 mr-3" />
                nirpeksh@scaleupapp.club
              </a>
              <a href="tel:+918800237144" className="flex items-center text-text-secondary hover:text-primary">
                <Phone className="w-5 h-5 mr-3" />
                +91 8800237144
              </a>
              <a href="https://www.linkedin.com/in/nirpekshnandan/" className="flex items-center text-text-secondary hover:text-primary">
                <Linkedin className="w-5 h-5 mr-3" />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Pratiksha</h3>
            <p className="text-lg text-accent font-semibold mb-4">Co-founder</p>
            <div className="space-y-3">
              <a href="mailto:pratiksha@sscaleupapp.club" className="flex items-center text-text-secondary hover:text-primary">
                <Mail className="w-5 h-5 mr-3" />
                pratiksha@scaleupapp.club
              </a>
              <a href="tel:+917875399406" className="flex items-center text-text-secondary hover:text-primary">
                <Phone className="w-5 h-5 mr-3" />
                +91 7875399406
              </a>
              <a href="https://www.linkedin.com/in/pratiksha-sinha-743a2539/" className="flex items-center text-text-secondary hover:text-primary">
                <Linkedin className="w-5 h-5 mr-3" />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center text-text-secondary mb-8">
            <MapPin className="w-5 h-5 mr-2" />
            <span>Bengaluru, India</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://calendly.com/scaleup', '_blank')}
              className="btn-primary flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Meeting
            </button>
            <button 
              onClick={() => window.print()}
              className="btn-secondary flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Deck
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}