'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, Linkedin, Calendar, Download, MapPin, 
  ArrowRight, Users, Rocket, MessageCircle, Globe,
  CheckCircle, Copy, ExternalLink, Sparkles
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { downloadPitchDeckPpt } from '@/lib/pptxExport';

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [hoveredFounder, setHoveredFounder] = useState<string | null>(null);

  const founders = [
    {
      id: 'nirpeksh',
      name: 'Nirpeksh Nandan',
      role: 'Co-founder & CEO',
      focus: 'Product, Ops & Technology',
      email: 'nirpeksh@scaleupapp.club',
      phone: '+91 8800237144',
      linkedin: 'https://www.linkedin.com/in/nirpekshnandan/',
      gradient: 'from-blue-500 to-purple-500',
      photo: '/team/nirpeksh.jpg'
    },
    {
      id: 'pratiksha',
      name: 'Pratiksha Sinha',
      role: 'Co-founder & CMO',
      focus: 'Marketing & Growth',
      email: 'pratiksha@scaleupapp.club',
      phone: '+91 7875399406',
      linkedin: 'https://www.linkedin.com/in/pratiksha-sinha-743a2539/',
      gradient: 'from-orange-500 to-pink-500',
      photo: '/team/pratiksha.jpg'
    }
  ];

  const quickActions = [
    
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a 30-min call',
      action: () => window.open('https://calendly.com/scaleup', '_blank'),
      bgClass: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      icon: MessageCircle,
      title: 'Quick Message',
      description: 'Send us an email',
      action: () => {
        window.location.href = 'mailto:admin@scaleupapp.club';
      },
      bgClass: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-4 py-2 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Users className="w-5 h-5" />
            <span className="font-semibold">Get in Touch</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Let's Build India's</span>{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Learning OS Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect directly with the founders to discuss partnership, investment, or collaboration
          </p>
        </motion.div>

        {/* Founders Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (index === 0 ? -50 : 50) }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredFounder(founder.id)}
              onMouseLeave={() => setHoveredFounder(null)}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${founder.gradient}`}></div>
                
                <div className="p-8">
                  {/* Founder Info Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800">{founder.name}</h3>
                      <p className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {founder.role}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">{founder.focus}</p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-4">
                    {/* Email */}
                    <div className="group">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <a 
                          href={`mailto:${founder.email}`}
                          className="flex items-center gap-3 flex-1 text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                          <span className="text-sm font-medium">{founder.email}</span>
                        </a>
                        <button
                          onClick={() => copyToClipboard(founder.email, `${founder.id}-email`)}
                          className="p-2 hover:bg-white rounded-md transition-colors"
                        >
                          {copiedItem === `${founder.id}-email` ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="group">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <a 
                          href={`tel:${founder.phone}`}
                          className="flex items-center gap-3 flex-1 text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                          <Phone className="w-5 h-5" />
                          <span className="text-sm font-medium">{founder.phone}</span>
                        </a>
                        <button
                          onClick={() => copyToClipboard(founder.phone, `${founder.id}-phone`)}
                          className="p-2 hover:bg-white rounded-md transition-colors"
                        >
                          {copiedItem === `${founder.id}-phone` ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                    >
                      <div className="flex items-center gap-3 text-blue-700">
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm font-medium">Connect on LinkedIn</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-blue-400 group-hover:text-blue-600" />
                    </a>
                  </div>

                  {/* Hover Effect */}
                  <AnimatePresence>
                    {hoveredFounder === founder.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <p className="text-sm text-gray-600 italic">
                          "Let's discuss how we can transform education together"
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-center mb-8 text-gray-800">Quick Actions</h3>
          
          <div className="grid gap-6 sm:grid-cols-2 justify-items-center max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                onClick={action.action}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all group text-center w-full max-w-xs flex flex-col items-center"
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform ${action.bgClass}`}>
                  <action.icon className={`w-7 h-7 ${action.iconColor}`} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">{action.title}</h4>
                <p className="text-sm text-gray-600">{action.description}</p>
                <ArrowRight className="w-5 h-5 text-gray-400 mx-auto mt-4 group-hover:text-indigo-600 transition-colors" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Location & Office Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-8 items-center justify-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-indigo-600" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-sm text-gray-600">Bengaluru, India</p>
              </div>
            </div>
            
            <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
            
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-indigo-600" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Available</p>
                <p className="text-sm text-gray-600">Mon-Sat, 10AM-7PM IST</p>
              </div>
            </div>
            
            <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
            
            <div className="flex items-center gap-3">
              <Rocket className="w-5 h-5 text-indigo-600" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Response Time</p>
                <p className="text-sm text-gray-600">Within 24 hours</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: inView ? 1 : 0, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Ready to Transform Education?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
