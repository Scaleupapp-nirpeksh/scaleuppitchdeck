export interface ExecSummaryItem {
  title: string;
  detail: string;
}

export interface MetricHighlight {
  label: string;
  value: string;
  detail?: string;
}

export interface TableData {
  header: string[];
  rows: string[][];
}

export interface ModuleBlock {
  name: string;
  outcome: string;
  failureIfMissing: string;
  bullets: string[];
}

export interface TimelineMilestone {
  quarter: string;
  theme: string;
  users: string;
  retention: string;
  revenue: string;
  highlights: string[];
  fundingNote?: string;
}

export interface FounderProfile {
  name: string;
  role: string;
  focus: string;
  achievements: string[];
}

export interface FundingUse {
  category: string;
  amount: string;
  allocation: string;
  purpose: string;
}

export interface MilestoneTarget {
  metric: string;
  now: string;
  target: string;
  timeline: string;
}

export interface ContactCard {
  name: string;
  role: string;
  email: string;
  phone: string;
  linkedin: string;
}

export const deckContent = {
  company: {
    name: 'ScaleUp',
    tagline: "India's Learning OS",
    valueStatement: 'Where social, verified learning translates directly into career outcomes.',
    metrics: [
      { label: 'IIT Validation', value: '350+', detail: 'Students onboarded in 60 days' },
      { label: 'Retention', value: '55%', detail: '25 pts above category average' },
      { label: 'Market Size', value: '₹37K Cr', detail: 'Indian higher-ed learning spend' }
    ] as MetricHighlight[]
  },

  execSummary: {
    bullets: [
      {
        title: 'The Problem',
        detail: 'EdTech 1.0 spent $20B building passive video libraries. 70% of students churn within 3 weeks.'
      },
      {
        title: 'Our Solution',
        detail: 'ScaleUp is a Learning OS that closes the loop: Social Learning → Verification → Personalization → Career Translation.'
      },
      {
        title: 'Traction',
        detail: '350 IIT Bombay students onboarded, 55% month-1 retention, 750+ verified quizzes completed.'
      },
      {
        title: 'Business Model',
        detail: '5 revenue streams across B2C subscriptions & tournaments plus B2B enterprise and hiring fees.'
      },
      {
        title: 'Unit Economics',
        detail: 'CAC ₹200, LTV ₹12,000, payback under 1 month with LTV:CAC of 60:1.'
      },
      {
        title: 'Funding Ask',
        detail: '₹4 Cr pre-seed to scale from 350 to 50,000 students in the next 12 months.'
      }
    ] as ExecSummaryItem[],
    differentiator:
      'Only platform that compounds social learning, verified outcomes, AI personalization, and a hiring marketplace into one operating system.'
  },

  problem: {
    headline: 'Problem & Market Opportunity',
    summary:
      'Legacy EdTech optimised for content distribution, not learner outcomes. Students crave peer-driven validation and credible pathways into work.',
    stats: [
      { value: '70%', label: 'Drop-off rate', detail: 'Students leave within 3 weeks of starting.' },
      { value: '90 min', label: 'Average lecture', detail: 'Built for classrooms, not mobile-first attention spans.' },
      { value: '12 min', label: 'Daily engagement', detail: 'Learners spend 4.5 hours on social apps but minutes on EdTech.' },
      { value: '5%', label: 'Peer interaction', detail: 'Learning experiences remain isolated and lonely.' }
    ],
    failureTable: {
      header: ['Company', 'Raised', 'Peak Value', 'Current Value', 'Drawdown', 'What Went Wrong'],
      rows: [
        ["Byju's", '$5.1B', '$22B', '$0.2B', '-99%', 'Forced sales, ignored student engagement'],
        ['Unacademy', '$0.88B', '$3.4B', '$0.8B', '-76%', 'Celebrity teachers, no structure or verification'],
        ['Vedantu', '$0.4B', '$1.0B', '$0.2B', '-80%', 'Outdated live-class model with poor retention']
      ]
    } as TableData,
    behaviorShiftPoints: [
      'Peer-driven learning leapfrogged passive lectures from 45% to 85% share in four years.',
      'Students treat learning like social media: bite-sized, collaborative, verifiable.',
      'Employers demand proof of skills, but current platforms stop at content consumption.'
    ]
  },

  solution: {
    headline: 'Solution Architecture',
    intro:
      'ScaleUp operates as a closed loop. Each module strengthens the next, building compounding defensibility the moment a student joins.',
    modules: [
      {
        name: 'Social Learning Engine',
        outcome: 'Engaged Learning',
        failureIfMissing: 'No content flywheel, no community, stalled growth.',
        bullets: [
          '10-minute peer-created capsule videos tuned for attention span.',
          'Communities and tournaments that reward contribution, not consumption.',
          'Collaborative playbooks tailored to campus cohorts.'
        ]
      },
      {
        name: 'Verification Layer',
        outcome: 'Verified Skills',
        failureIfMissing: 'Questionable quality, zero trust from employers.',
        bullets: [
          'Rapid 2-minute quizzes following every learning unit.',
          'Dual verification from AI and subject-matter experts.',
          'CLIP Score reputation system across peers and institutions.'
        ]
      },
      {
        name: 'Personalization Engine',
        outcome: 'Compounding Progress',
        failureIfMissing: 'Generic experiences and high churn.',
        bullets: [
          'Adaptive recommendations based on skill gaps and goals.',
          'Playlists that remix peer content into personalised sprints.',
          'Auto-remediation nudges and accountability loops.'
        ]
      },
      {
        name: 'Career Translation',
        outcome: 'Job Outcomes',
        failureIfMissing: 'No economic payoff; students revert to legacy paths.',
        bullets: [
          'Verified profiles showcasing real skill proof, not just certificates.',
          'Talent marketplace bridging students with hiring partners.',
          'Outcome guarantees tied to deployment-ready skill tracks.'
        ]
      }
    ] as ModuleBlock[],
    closing:
      "Break any link and the system fails. Together, it becomes India's default operating system for skill-to-job mobility."
  },

  insight: {
    headline: 'Strategic Insight',
    summary:
      'Everyone built features; we built an operating system that makes learning, verification, and hiring inseparable.',
    whyItWorks: [
      'Peers create the most relevant content because they live the exams, interviews, and culture in real time.',
      'Verification converts learning data into trust currency for employers.',
      'Career outcomes create the incentive loop for perpetual student engagement.'
    ],
    osLayers: [
      {
        name: 'Knowledge Layer',
        today: '350 IIT Bombay students contributing proprietary content.',
        tomorrow: 'Scaling to the top 50 campuses across India.',
        reason: 'Community expertise moves faster than any central curriculum.'
      },
      {
        name: 'Proof Layer',
        today: '750+ quizzes completed with SME review.',
        tomorrow: 'Automated verification across millions of attempts.',
        reason: 'Skills without proof are entertainment, not employability.'
      },
      {
        name: 'Career Layer',
        today: 'Building skill passports from live performance data.',
        tomorrow: 'Direct hiring marketplace matching verified learners to jobs.',
        reason: 'The platform keeps students only if it drives income.'
      }
    ]
  },

  traction: {
    headline: 'Traction & Validation',
    summary:
      'We validated the loop in India’s most demanding campus. Students choose ScaleUp over incumbents because their outcomes are immediate.',
    metrics: [
      { label: 'Students onboarded', value: '350+', detail: 'IIT Bombay pilot in 60 days' },
      { label: 'Month-1 retention', value: '55%', detail: 'Beating category leaders by 25 pts' },
      { label: 'Quiz completions', value: '750+', detail: 'Avg 35 attempts per assessment' },
      { label: 'Time to PMF signal', value: '60 days', detail: 'From concept to validated loop' }
    ] as MetricHighlight[],
    retentionTable: {
      header: ['Platform', 'Retention', 'Context'],
      rows: [
        ['ScaleUp', '55%', 'Only social + verified platform'],
        ['PhysicsWallah', '40%', 'Full feature set, slower engagement'],
        ['Unacademy', '30%', 'Celebrity-led broadcast model'],
        ["Byju's", '25%', '₹1000 Cr marketing spend, low stickiness']
      ]
    } as TableData,
    growthPlan: {
      header: ['Quarter', 'Users', 'Retention', 'Milestone'],
      rows: [
        ['Now', '500', '55%', 'IIT Bombay validation in place'],
        ['Q1 2026', '5,000', '60%', 'Multi-campus expansion'],
        ['Q2 2026', '15,000', '65%', 'Monetisation launch'],
        ['Q3 2026', '50,000', '70%', 'Network effects compounding'],
        ['Q4 2026', '100,000', '75%', 'Seed-ready metrics achieved']
      ]
    } as TableData
  },

  businessModel: {
    headline: 'Business Model',
    overview:
      'Balanced mix of consumer and enterprise revenue streams with high gross margins and low distribution costs.',
    streams: [
      {
        name: 'Premium Subscriptions',
        share: '40%',
        details: '₹499-999/month for unlimited quizzes, AI study plans, advanced analytics.'
      },
      {
        name: 'Competitive Tournaments',
        share: '15%',
        details: 'Gamified leagues sponsored by brands & campuses, drives viral referrals.'
      },
      {
        name: 'Learning Marketplace',
        share: '15%',
        details: 'Peer-created courses, monetised with revenue share.'
      },
      {
        name: 'Institution Partnerships',
        share: '20%',
        details: 'White-label OS for colleges to run verified communities.'
      },
      {
        name: 'Hiring Platform',
        share: '10%',
        details: 'Success fees on placements and outcomes-based hiring subscriptions.'
      }
    ],
    revenueTable: {
      header: ['Quarter', 'Active Streams', 'Users', 'MRR', 'Key Launch'],
      rows: [
        ['Q2 2026', '3', '30,000', '₹6L', 'Premium + Institutions'],
        ['Q3 2026', '4', '60,000', '₹20L', 'Marketplace launch'],
        ['Q4 2026', '5', '100,000', '₹40L', 'Hiring platform live'],
        ['Q1 2027', '5', '150,000', '₹60L', 'All streams scaling']
      ]
    } as TableData
  },

  unitEconomics: {
    headline: 'Unit Economics',
    metrics: [
      { label: 'CAC', value: '₹200', detail: 'Campus championships, referrals, creator incentives.' },
      { label: 'LTV', value: '₹12,000', detail: '24-month value via subscriptions + tournaments.' },
      { label: 'LTV:CAC', value: '60x', detail: 'Category-leading efficiency with fast payback.' }
    ] as MetricHighlight[],
    cacTable: {
      header: ['Channel', 'Cost', 'Description', 'Efficiency'],
      rows: [
        ['Campus Championships', '₹100', 'Prize pools & operations', '500 users per event'],
        ['Referral Rewards', '₹50', '3 friends = 1 month free', '60% conversion'],
        ['Creator Incentives', '₹30', 'Content creation rewards', '1:50 reach'],
        ['Digital', '₹20', 'Targeted social ads', '5% CTR']
      ]
    } as TableData,
    ltvTable: {
      header: ['Period', 'Retention', 'Revenue', 'Cumulative LTV'],
      rows: [
        ['Month 1-3', '65%', '₹1,500', '₹1,500'],
        ['Month 4-6', '40%', '₹1,500', '₹3,000'],
        ['Month 7-12', '25%', '₹3,000', '₹6,000'],
        ['Month 13-24', '15%', '₹6,000', '₹12,000']
      ]
    } as TableData
  },

  competitive: {
    headline: 'Competitive Landscape',
    summary:
      'No incumbent combines social motivation, verified outcomes, and career translation. ScaleUp is the category creator.',
    comparisonTable: {
      header: ['Platform', 'Engaging Content', 'Proof of Learning', 'AI Personalization', 'Career Outcomes', 'Retention'],
      rows: [
        ['YouTube', '✓', '✗', '✗', '✗', 'N/A'],
        ['Unacademy', '✓', 'Partial', '✗', '✗', '30-40%'],
        ['LinkedIn Learning', '✗', '✗', '✗', '✓', 'N/A'],
        ['Duolingo', '✓', '✓', '✓', '✗', '70%'],
        ['ScaleUp', '✓', '✓', '✓', '✓', '55% → 70%']
      ]
    } as TableData,
    moatBullets: [
      'Social proof flywheel compounds with every new cohort.',
      'First-party verification data creates employer trust and defensibility.',
      'Integrated hiring marketplace monetises the value creation loop.'
    ]
  },

  roadmap: {
    headline: 'Product Roadmap',
    timeline: [
      {
        quarter: 'Q1 2026',
        theme: 'Multi-Campus Scale',
        users: '15,000',
        retention: '65%',
        revenue: '₹6L',
        highlights: ['Launch creator marketplace', 'Roll out CLIP scoring v1', 'Campus expansion to top 10 tech schools']
      },
      {
        quarter: 'Q2 2026',
        theme: 'Monetisation Engine',
        users: '30,000',
        retention: '68%',
        revenue: '₹15L',
        highlights: ['Premium tiers live', 'Launch B2B institution dashboards', 'Verification-as-a-service APIs']
      },
      {
        quarter: 'Q3 2026',
        theme: 'Career Platform',
        users: '60,000',
        retention: '72%',
        revenue: '₹30L',
        highlights: ['Hiring marketplace beta', 'AI interview prep', 'Employer analytics console'],
        fundingNote: 'Seed round preparation'
      },
      {
        quarter: 'Q1 2027',
        theme: 'Hiring Flywheel',
        users: '150,000',
        retention: '80%',
        revenue: '₹60L',
        highlights: ['Full placement engine', 'International cohorts pilot', 'Series A readiness'],
        fundingNote: 'Series A prep'
      }
    ] as TimelineMilestone[]
  },

  team: {
    headline: 'Team & Advisors',
    founders: [
      {
        name: 'Nirpeksh Nandan',
        role: 'Co-founder & CEO',
        focus: 'Product, Ops & Technology',
        achievements: [
          'Built and shipped education products impacting 100K+ learners.',
          'Led campus-wide peer learning communities while at IIT Bombay.',
          'Ex-early team at high growth edtech start-up; deep ops stack.'
        ]
      },
      {
        name: 'Pratiksha Sinha',
        role: 'Co-founder & CMO',
        focus: 'Marketing & Growth',
        achievements: [
          'Scaled creator-led programs to 1M+ reach across Gen Z campuses.',
          'Brand strategist for Fortune 500 campaigns in education vertical.',
          'Expert in community-led growth and storytelling for youth brands.'
        ]
      }
    ] as FounderProfile[],
    advisors: [
      'Ex-Byju’s CXO guiding GTM',
      'IIT Bombay faculty championing verified learning models',
      'Hiring partners from top Indian startups validating employer demand'
    ]
  },

  funding: {
    headline: 'Funding Ask',
    summary: 'Raising ₹4 Crore pre-seed to scale validated campus playbook nationwide.',
    useOfFunds: [
      {
        category: 'Product & Engineering',
        amount: '₹1.6 Cr',
        allocation: '40%',
        purpose: 'Ship AI personalization, gamification, and hiring integrations.'
      },
      {
        category: 'User Growth',
        amount: '₹1.2 Cr',
        allocation: '30%',
        purpose: 'Campus championships, creator networks, referral engine.'
      },
      {
        category: 'Team & Talent',
        amount: '₹0.8 Cr',
        allocation: '20%',
        purpose: 'Key hires across engineering, growth, and partnerships.'
      },
      {
        category: 'Operations & Buffer',
        amount: '₹0.4 Cr',
        allocation: '10%',
        purpose: 'Infrastructure, compliance, and working capital.'
      }
    ] as FundingUse[],
    milestones: [
      { metric: 'Users', now: '350', target: '50,000', timeline: '12 months' },
      { metric: 'Retention', now: '55%', target: '70%', timeline: '9 months' },
      { metric: 'Revenue', now: '₹0', target: '₹20L MRR', timeline: '12 months' },
      { metric: 'Hiring Outcomes', now: 'Pilot', target: '100+ placements', timeline: '15 months' },
      { metric: 'Team', now: '3 core', target: '15', timeline: '6 months' }
    ] as MilestoneTarget[]
  },

  contact: {
    headline: 'Let’s Build Together',
    callToAction: 'Ready to rewire how India learns and hires? Connect directly with the founders.',
    contacts: [
      {
        name: 'Nirpeksh Nandan',
        role: 'Co-founder & CEO',
        email: 'nirpeksh@scaleupapp.club',
        phone: '+91 8800237144',
        linkedin: 'linkedin.com/in/nirpekshnandan'
      },
      {
        name: 'Pratiksha Sinha',
        role: 'Co-founder & CMO',
        email: 'pratiksha@scaleupapp.club',
        phone: '+91 7875399406',
        linkedin: 'linkedin.com/in/pratiksha-sinha'
      }
    ] as ContactCard[],
    footerNote: 'ScaleUp • India’s Learning OS • Mumbai & Remote'
  }
};

export type DeckContent = typeof deckContent;
