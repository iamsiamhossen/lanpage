import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showOffers, setShowOffers] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load saved jobs from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('savedJobs');
    if (saved) {
      setSavedJobs(JSON.parse(saved));
    }
  }, []);

  // Save jobs to localStorage when they change
  useEffect(() => {
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }, [savedJobs]);


  const jobs = [

    {
  id: 6,
  title: "Store Associate - Immediate Openings",
  company: "ALDI",
  location: "Multiple Locations",
  salary: "$17.50 - $19.50/hr",
  type: "Full-time",
  description: "Start your career with ALDI today! Immediate openings available at locations near you.",
  posted: "Just now",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNKXl0RF-QQcRAipvIVUg46ZUICHPEtXZkA&s",
   // cpaLink: "/apply",
  fullDescription: "As an ALDI Store Associate, you'll be the face of our company while playing a key role in providing excellent customer service and maintaining store operations. This is your opportunity to start a rewarding career with a growing international retailer.",
  responsibilities: [
    "Provide exceptional customer service with a friendly attitude",
    "Operate cash register and process customer purchases",
    "Stock shelves and maintain neat product displays",
    "Maintain clean store environment including sweeping, mopping, and cleaning",
    "Work collaboratively with team members to meet store goals",
    "Follow all company policies and procedures"
  ],
  requirements: [
    "High school diploma or equivalent preferred",
    "Ability to work both independently and within a team",
    "Comfortable standing for extended periods and lifting up to 45 lbs",
    "Flexible availability including evenings and weekends",
    "No experience required - we provide complete training",
    "Positive attitude and strong work ethic"
  ],
  salaryBreakdown: {
    basePay: "$17.50/hr (starting) with regular raises",
    bonus: "Performance-based quarterly bonuses",
    benefits: "Health insurance, 401(k) with company match, paid time off, employee discount"
  },
  featured: true,
  hotJob: true,
  promoText: "Start A Career Today - ALDI HOT",
  promoDetails: "Begin your journey with ALDI - a stable career with growth opportunities and competitive benefits"
},
{
  id: 7,
  title: "FedEx Delivery Driver - Higher Pay Opportunities",
  company: "FedEx Ground",
  location: "Nationwide (US)",
  salary: "$21 - $25/hr + Bonuses",
  type: "Full-time",
  description: "Higher Income Opportunity! FedEx is now offering competitive pay rates for delivery drivers across the US.",
  posted: "Today",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wv81k5ePNauyE6exeoaqiPDH2l7qzl8jKA&s",
  // cpaLink: "/apply",
  fullDescription: "FedEx is expanding its workforce with higher-paying driver positions nationwide. This is your chance to join a recognized industry leader while earning premium wages with growth potential.",
  responsibilities: [
    "Safely operate company vehicle on assigned routes",
    "Deliver packages efficiently while meeting service standards",
    "Provide excellent customer service at each stop",
    "Complete pre-trip and post-trip vehicle inspections",
    "Use handheld device for delivery tracking and documentation",
    "Maintain professional appearance and conduct"
  ],
  requirements: [
    "Valid driver's license with clean record (CDL not required)",
    "Minimum 21 years of age",
    "Ability to lift 75 lbs and work in all weather conditions",
    "1+ year delivery/transportation experience preferred",
    "Strong time management and organizational skills",
    "Pass pre-employment drug screen and background check"
  ],
  salaryBreakdown: {
    basePay: "$21-$25/hr (based on experience)",
    bonus: "$1,500 sign-on bonus + performance incentives",
    benefits: "Comprehensive benefits package including healthcare, 401(k) with match, tuition assistance, and employee discounts"
  },
  featured: true,
  premiumJob: true,
  promoHeader: "HigherIncomeJobs - FedEx Jobs - (US)",
  promoTagline: "Earn More With FedEx - Immediate Openings Nationwide",
  highlights: [
    "Top-tier pay in the delivery industry",
    "Consistent schedule with overtime opportunities",
    "Career advancement programs",
    "Newer fleet vehicles with safety features"
  ]
},
{
  id: 8,
  title: "Professional Cleaning Specialist - High Earnings",
  company: "Premium Cleaning Services",
  location: "Nationwide (US)",
  salary: "$22 - $30/hr + Tips",
  type: "Full-time/Part-time",
  description: "Higher Income Cleaning Opportunity! Earn premium wages with flexible scheduling across the US.",
  posted: "New Today",
  logo: "https://marketplace.canva.com/EAF4y3V4yF0/1/0/1600w/canva-blue-and-white-cleaning-services-logo-sEqBBz8aTSU.jpg", // Add actual logo URL
   // cpaLink: "/apply",
  fullDescription: "We're hiring professional cleaners for high-paying residential and commercial positions. No experience required - we provide paid training and premium equipment.",
  responsibilities: [
    "Perform deep cleaning for residential/commercial clients",
    "Use professional-grade equipment and eco-friendly products",
    "Maintain strict quality and safety standards",
    "Provide exceptional customer service",
    "Manage cleaning supplies inventory",
    "Follow detailed cleaning checklists"
  ],
  requirements: [
    "Reliable transportation",
    "Ability to pass background check",
    "Physical ability to perform cleaning tasks",
    "Smartphone for scheduling app",
    "Positive attitude and attention to detail",
    "No experience required - we train!"
  ],
  salaryBreakdown: {
    basePay: "$22-$30/hr (based on assignment)",
    bonus: "$500 signing bonus after 90 days",
    benefits: "Flexible scheduling, performance bonuses, referral program, equipment provided"
  },
  featured: true,
  premiumJob: true,
  promoHeader: "HigherIncomeJobs - Cleaning Jobs - (US)",
  promoTagline: "Earn More While Cleaning - Immediate Openings Nationwide",
  highlights: [
    "Earn 25-40% more than standard cleaning rates",
    "Choose your own schedule (days/evenings/weekends)",
    "Keep 100% of your tips",
    "Weekly pay via direct deposit",
    "Advancement to supervisory role available",
    "Work independently or with a team"
  ],
  quickApply: true
},
{
  "id": 14,
  "title": "UPS Career Opportunities",
  "company": "United Parcel Service (UPS)",
  "location": "Nationwide (US)",
  "salary": "$15 - $38/hr",
  "type": "Full-time/Part-time/Seasonal",
  "description": "Immediate openings for package handlers, drivers, and logistics professionals across our network",
  "posted": "Hiring now for peak season",
  "logo": "https://1000logos.net/wp-content/uploads/2017/06/UPS-logo.jpg",
  "cpaLink": "/apply",
  "positions": [
    {
      "role": "Warehouse Operations",
      "roles": [
        { "title": "Package Handler", "pay": "$15-$21/hr", "shift": "Early morning, night, twilight" },
        { "title": "Operations Supervisor", "pay": "$25-$38/hr" },
        { "title": "Warehouse Associate", "pay": "$16-$22/hr" }
      ]
    },
    {
      "role": "Delivery Drivers",
      "roles": [
        { "title": "Package Delivery Driver", "pay": "$21-$30/hr" },
        { "title": "Feeder Driver (Tractor-Trailer)", "pay": "$30-$38/hr" },
        { "title": "Seasonal Driver Helper", "pay": "$15-$18/hr" }
      ]
    },
    {
      "role": "Mechanic/Technician",
      "roles": [
        { "title": "Automotive Technician", "pay": "$25-$35/hr" },
        { "title": "Diesel Mechanic", "pay": "$28-$38/hr" }
      ]
    }
  ],
  "benefits": [
    "Tuition assistance (up to $5,250/year)",
    "Health insurance (after 9 months for part-timers)",
    "Pension plan for Teamsters union members",
    "Paid time off and holidays",
    "Employee stock purchase plan",
    "Promotion-from-within culture"
  ],
  "featured": true,
  "peakSeason": true,
  "promoHeader": "UPS is Hiring - Immediate Openings",
  "promoTagline": "Build Your Career With America's Shipping Leader",
  "highlights": [
    "$0 healthcare premium option for union members",
    "Part-time jobs with full benefits eligibility",
    "Paid training programs",
    "Weekly paychecks",
    "Career path to $100k+ driver positions",
    "Free shift parking at most locations"
  ],
  "salaryBreakdown": {
    "basePay": "$15/hr minimum starting wage",
    "bonus": "Performance bonuses for drivers",
    "overtime": "Time-and-a-half after 5 hours (union positions)"
  },
  "quickApply": true,
  "badgeText": "HIRING NOW",
  "badgeColor": "bg-gradient-to-r from-brown-600 to-gold-500",
  "unionBenefits": true
},
{
  id: 10,
  title: "Immediate Openings - Walmart Careers",
  company: "Walmart",
  location: "Nationwide (US)",
  salary: "$15 - $28/hr",
  type: "Full-time/Part-time",
  description: "Start your career with Walmart - hiring for store associates, stockers, cashiers, and more!",
  posted: "Multiple openings",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1024px-Walmart_logo.svg.png",
   // cpaLink: "/apply",
  positions: [
    {
      role: "Store Associate",
      pay: "$15-$17/hr",
      type: "Full-time/Part-time",
      description: "Customer service, stocking shelves, and maintaining store appearance"
    },
    {
      role: "Overnight Stocker",
      pay: "$16.50-$18.50/hr",
      type: "Full-time",
      description: "Unload trucks and stock merchandise during non-business hours"
    },
    {
      role: "Cashier",
      pay: "$15-$16/hr",
      type: "Part-time",
      description: "Process customer transactions and provide excellent service"
    },
    {
      role: "Department Manager",
      pay: "$18-$22/hr",
      type: "Full-time",
      description: "Lead a team in specific store departments"
    },
    {
      role: "Warehouse Associate",
      pay: "$20-$28/hr",
      type: "Full-time",
      description: "Distribution center role with higher earning potential"
    }
    
  ],
  salaryBreakdown: {
    basePay: "$15.00/hr (starting) with regular raises",
    bonus: "Performance-based quarterly bonuses",
    benefits: "Health insurance, 401(k) with company match, paid time off, employee discount"
  },

  featured: true,
  hiringEvent: true,
  promoHeader: "Walmart Hiring Now - Immediate Opportunities",
  promoTagline: "Build Your Future With America's Largest Employer",
  highlights: [
    "No experience required for most positions",
    "Same-day job offers available",
    "Paid training for all role",
    "Multiple shift options (days/evenings/overnights)",
    "Tuition assistance programs",
    "Promotion opportunities to $100k+ management positions"
  ]
},
{
  id: 9,
  title: "Uber Professional Driver - Expert Matching Available",
  company: "Uber Technologies",
  location: "Nationwide (US)",
  salary: "$25 - $40/hr + Tips",
  type: "Flexible Full-time/Part-time",
  description: "Get expertly matched with premium driving opportunities in your area. Top earners make $1,500+/week.",
  posted: "New Today",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
   // cpaLink: "/apply",
  fullDescription: "Uber's Expert Match program connects qualified drivers with the highest-earning opportunities in their market. Get access to premium rides, surge pricing alerts, and exclusive bonuses.",
  responsibilities: [
    "Provide safe, comfortable transportation",
    "Maintain excellent ratings (4.9+ preferred)",
    "Optimize earnings using Uber's driver tools",
    "Follow all traffic and safety laws",
    "Deliver exceptional customer service",
    "Keep vehicle in pristine condition"
  ],
  requirements: [
    "25+ years old (21+ in some markets)",
    "1+ years licensed driving experience",
    "Clean driving record",
    "4-door vehicle (2010 or newer)",
    "Smartphone (iPhone or Android)",
    "Pass background check"
  ],
  salaryBreakdown: {
    basePay: "$25-$40/hr (market dependent)",
    bonus: "$500-$1,500 sign-on bonus (market dependent)",
    benefits: "Flexible hours, instant pay, fuel discounts, maintenance savings"
  },
  featured: true,
  expertMatch: true,
  promoHeader: "Expert Job Match - Uber (US)",
  promoTagline: "Smart Matching to Maximize Your Earnings",
  highlights: [
    "Get matched with premium ride requests automatically",
    "Higher earnings for experienced drivers (5,000+ trips)",
    "Priority airport and event assignments",
    "24/7 driver support",
    "Real-time earnings tracking",
    "Weekly cash bonuses available"
  ],
  quickApply: true,
  badgeText: "EXPERT MATCH",
  badgeColor: "bg-gradient-to-r from-black to-gray-800"
},
{
  id: 11,
  title: "Kelly Services - Immediate Job Placements",
  company: "Kelly Services",
  location: "Nationwide (US)",
  salary: "$15 - $45/hr",
  type: "Contract/Temp-to-Hire/Direct Hire",
  description: "Let Kelly connect you with top employers in your area - over 300,000 jobs filled annually!",
  posted: "New opportunities daily",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0saMPnWIMuIzYuPP8l73H-yuwO-Xgp3Xeg&s",
   // cpaLink: "/apply",
  positions: [
    {
      role: "Administrative",
      samplerole: ["Receptionist", "Data Entry", "Executive Assistant"],
      pay: "$15-$25/hr"
    },
    {
      role: "Light Industrial",
      samplerole: ["Warehouse Associate", "Machine Operator", "Assembly"],
      pay: "$16-$28/hr"
    },
    {
     role: "Professional",
      samplerole: ["Accountant", "HR Specialist", "Marketing Coordinator"],
      pay: "$22-$45/hr"
    },
    {
      role: "Technical",
      samplerole: ["IT Support", "Engineering Tech", "CAD Designer"],
      pay: "$25-$45/hr"
    }
  ],
  benefits: [
    "Weekly pay with direct deposit",
    "Health benefits available",
    "Free skills training programs",
    "Opportunity for permanent placement",
    "Dedicated career advisor",
    "Employee discount programs"
  ],
  featured: true,
  premiumStaffing: true,
  promoHeader: "Kelly Services - Staffing Experts Since 1946",
  promoTagline: "We Match Your Skills With Top Employers",
  highlights: [
    "98% of Fortune 100 companies use Kelly",
    "Get matched within 48 hours",
    "No cost to job seekers",
    "Temporary and career positions",
    "Local opportunities nationwide",
    "Specialized industry divisions"
  ],
    salaryBreakdown: {
    basePay: "$15/hr (starting) with regular raises",
    bonus: "Performance-based quarterly bonuses",
  },
  quickApply: true,
  badgeText: "TRUSTED STAFFING",
  badgeColor: "bg-gradient-to-r from-red-600 to-red-800"
},
{
  id: 12,
  title: "Waste Management - Essential Career Opportunities",
  company: "Waste Management",
  location: "Nationwide (US)",
  salary: "$18 - $34/hr + Benefits",
  type: "Full-time",
  description: "Build a rewarding career with North America's leading environmental solutions provider",
  posted: "Hiring Now",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPorjcqNNefkmKcHXr5VrRL5rfu7D_jLuTWw&s",
   // cpaLink: "/apply",
  positions: [
    {
      role: "CDL Truck Driver",
      pay: "$25-$34/hr",
      type: "Full-time",
      description: "Commercial waste collection with industry-leading equipment",
      bonus: "$5,000 sign-on bonus"
    },
    {
      role: "Recycling Technician",
      pay: "$18-$22/hr",
      type: "Full-time",
      description: "Sort and process recyclable materials at our advanced facilities"
    },
    {
      role: "Equipment Operator",
      pay: "$20-$28/hr",
      type: "Full-time",
      description: "Operate heavy machinery at landfills or recycling centers"
    },
    {
      role: "Customer Service",
      pay: "$17-$21/hr",
      type: "Full-time",
      description: "Support residential and commercial waste solutions"
    }
  ],
  benefits: [
    "Industry-leading pay and benefits",
    "$5,000+ annual tuition reimbursement",
    "Medical/dental/vision day 1",
    "401(k) with company match",
    "Paid training and CDL programs",
    "Employee stock purchase plan"
  ],
  featured: true,
  essential: true,
  promoHeader: "Waste Management Careers - (US)",
  promoTagline: "Essential Work That Sustains Our Communities",
  highlights: [
    "95% of our trucks run on clean natural gas",
    "Pioneers in renewable energy from waste",
    "Veteran-friendly employer",
    "20,000+ safety-trained employees",
    "Promote-from-within culture",
    "Named to Fortune's Most Admired Companies"
  ],
    salaryBreakdown: {
    basePay: "$18/hr (starting) with regular raises",
    bonus: "Performance-based quarterly bonuses",
  },
  quickApply: true,
  badgeText: "ESSENTIAL WORK",
  badgeColor: "bg-gradient-to-r from-green-700 to-green-900"
},
{
  id: 13,
  title: "Healthcare Career Opportunities",
  company: "National Healthcare Network",
  location: "Nationwide (US)",
  salary: "$18 - $95/hr",
  type: "Full-time/Part-time/Per Diem",
  description: "Immediate openings for medical professionals at hospitals, clinics, and facilities nationwide",
  posted: "Multiple openings",
  logo: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/medical-logo.jpg", // Add actual logo URL
   // cpaLink: "/apply",
  positions: [
    {
      role: "Nursing",
      roles: [
        { title: "Registered Nurse (RN)", pay: "$35-$65/hr", specialty: "All specialties" },
        { title: "Licensed Practical Nurse (LPN)", pay: "$28-$45/hr" },
        { title: "Travel Nurse", pay: "$45-$95/hr + stipends" }
      ]
    },
    {
      role: "Allied Health",
      roles: [
        { title: "Medical Assistant", pay: "$18-$25/hr" },
        { title: "Radiology Tech", pay: "$30-$55/hr" },
        { title: "Pharmacy Tech", pay: "$20-$30/hr" }
      ]
    },
    {
      role: "Therapy",
      roles: [
        { title: "Physical Therapist", pay: "$40-$60/hr" },
        { title: "Occupational Therapist", pay: "$38-$58/hr" },
        { title: "Speech Pathologist", pay: "$35-$55/hr" }
      ]
    },
    {
      role: "Physician",
      roles: [
        { title: "Family Medicine", pay: "$90-$120/hr" },
        { title: "Emergency Medicine", pay: "$110-$150/hr" },
        { title: "Specialists", pay: "$120-$200/hr" }
      ]
    }
  ],
  benefits: [
    "Competitive compensation packages",
    "Sign-on bonuses up to $25,000",
    "Comprehensive health benefits",
    "Student loan repayment assistance",
    "Continuing education allowances",
    "Flexible scheduling options"
  ],
  featured: true,
  medicalNetwork: true,
  promoHeader: "Medical Careers - Now Hiring Nationwide",
  promoTagline: "Your Skills Are Needed in Healthcare Today",
  highlights: [
    "100+ healthcare partners nationwide",
    "Licensing and certification support",
    "COVID-safe work environments",
    "Career ladder programs",
    "Relocation assistance available",
    "New graduate programs"
  ],
    salaryBreakdown: {
    basePay: "$18/hr (starting) with regular raises",
    bonus: "Performance-based quarterly bonuses",
  },
  quickApply: true,
  badgeText: "HEALTHCARE HEROES",
  badgeColor: "bg-gradient-to-r from-blue-600 to-blue-800"
},

{
  "id": 15,
  "title": "High-Income Remote Careers",
  "company": "Elite Virtual Professionals",
  "location": "Remote (US)",
  "salary": "$25 - $150/hr",
  "type": "Full-time/Part-time/Contract",
  "description": "Exclusive work-from-home positions for qualified professionals in tech, sales, and specialized services",
  "posted": "New listings daily",
  "logo": "https://static.vecteezy.com/system/resources/thumbnails/003/767/032/small/promotion-black-glyph-icon-vector.jpg",
  "cpaLink": "/apply",
  "positions": [
    {
      "role": "Technology",
      "roles": [
        { "title": "Senior Software Engineer", "pay": "$70-$150/hr", "requirements": "5+ years experience" },
        { "title": "Cloud Architect", "pay": "$80-$140/hr" },
        { "title": "Cybersecurity Specialist", "pay": "$65-$130/hr" }
      ]
    },
    {
      "role": "Sales & Consulting",
      "roles": [
        { "title": "Enterprise Sales Executive", "pay": "$50-$120/hr + commission", "ote": "$200K+" },
        { "title": "Management Consultant", "pay": "$60-$150/hr" },
        { "title": "Business Development", "pay": "$40-$90/hr + bonuses" }
      ]
    },
    {
      "role": "Creative & Marketing",
      "roles": [
        { "title": "UX/UI Designer", "pay": "$45-$100/hr" },
        { "title": "Digital Marketing Director", "pay": "$50-$120/hr" },
        { "title": "Video Producer", "pay": "$40-$90/hr" }
      ]
    },
    {
      "role": "Specialized Services",
      "roles": [
        { "title": "Telemedicine Physician", "pay": "$90-$200/hr" },
        { "title": "Virtual CFO", "pay": "$100-$250/hr" },
        { "title": "Legal Consultant", "pay": "$80-$180/hr" }
      ]
    }
  ],
  "benefits": [
    "100% remote work flexibility",
    "Performance bonuses (up to 30% of base)",
    "Annual profit sharing",
    "$1,500/year home office stipend",
    "Premium healthcare (including mental health)",
    "4 weeks PTO + flexible holidays"
  ],
  "featured": true,
  "fullyRemote": true,
  "promoHeader": "Six-Figure Remote Careers",
  "promoTagline": "Earn Top Dollar From Anywhere",
  "highlights": [
    "Direct hire positions (no staffing agencies)",
    "Async work options available",
    "$5K signing bonuses for select role",
    "Quarterly retreats (optional)",
    "Equity packages for leadership role",
    "Dedicated career coach"
  ],
  "salaryBreakdown": {
    "basePay": "$25/hr minimum (entry-level)",
    "bonus": "Up to 30% annual performance bonus",
    "equity": "Available for 85% of full-time role"
  },
  "quickApply": true,
  "badgeText": "REMOTE ELITE",
  "badgeColor": "bg-gradient-to-r from-purple-600 to-blue-500",
  "requirements": {
    "minimum": "2+ years professional experience",
    "preferred": "Portfolio or certifications",
    "equipment": "Reliable high-speed internet"
  }
}

  ];

  // Filter jobs based on active filter and search query
  const filteredJobs = jobs.filter(job => {
    const matchesFilter = activeFilter === 'all' || job.type.toLowerCase().includes(activeFilter);
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Featured jobs for hero section
  const featuredJobs = jobs.filter(job => job.featured);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "John D.",
      role: "Delivery Driver",
      content: "Found a great delivery job through Carrer Connect that fit my schedule perfectly. The application process was straightforward.",
      initials: "JD"
    },
    {
      id: 2,
      name: "Sarah M.",
      role: "Warehouse Associate",
      content: "I was hired within a week of applying to a warehouse position. The job listings were all up-to-date and accurate.",
      initials: "SM"
    },
    {
      id: 3,
      name: "Robert K.",
      role: "Retail Associate",
      content: "Carrer Connect helped me transition from food service to retail. The filters made it easy to find part-time work near me.",
      initials: "RK"
    }
  ];

  // Partner logos with real URLs
  const partners = [
    {
      name: "Uber",
      logo: "https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png"
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
    {
      name: "FedEx",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wv81k5ePNauyE6exeoaqiPDH2l7qzl8jKA&s"
    },
    {
      name: "Walmart",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxKFWQFC6RjQuYNZVmYiuSBFPGVhVO41NQg&s"
    },
    {
      name: "Kelly Services",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0saMPnWIMuIzYuPP8l73H-yuwO-Xgp3Xeg&s"
    },
    {
      name: "ALdi",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNKXl0RF-QQcRAipvIVUg46ZUICHPEtXZkA&s"
    }
  ];

  // Toggle save job
  const toggleSaveJob = (jobId) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
    } else {
      setSavedJobs([...savedJobs, jobId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Font import and global styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Header */}
<header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
  <div className="container mx-auto px-4 py-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <div className="text-2xl font-bold text-purple-700 hover:text-purple-800 transition-colors duration-200">
            <span className="bg-purple-600 text-white px-2 py-1 rounded mr-2">Hire</span>
            <span className="text-gray-800">Home</span>
          </div>
        </a>
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 hover:text-purple-700 focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search jobs, companies..."
            className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm bg-gray-50 focus:bg-white transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search jobs"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

      </nav>
    </div>
    
    {/* Mobile menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden mt-4 pb-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search jobs, companies..."
            className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm bg-gray-50 focus:bg-white transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search jobs"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

      </div>
    )}
  </div>
</header>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-blue-600 text-white py-5 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            Find Your <span className="text-purple-200">Dream Job</span> Today
          </h1>
          <p className="text-lg md:text-xl mb-5 max-w-2xl mx-auto leading-relaxed">
            Browse thousands of verified opportunities and apply with confidence
          </p>
          <button 
            onClick={() => setShowOffers(!showOffers)}
            className="bg-white text-purple-700 px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-purple-50 transition duration-300 font-semibold text-base md:text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            {showOffers ? 'Hide Offers' : 'View Hot Job Offers'}
          </button>
          <p className="text-purple-200 mt-6 text-sm md:text-base">
            Join over <span className="font-bold">1 million+</span> job seekers who found success with us!
          </p>

          {/* Featured Job Offers */}
          {showOffers && (
            <div className="mt-8 bg-white rounded-lg shadow-lg p-4 md:p-6 text-left max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-purple-800 mb-4">Featured Job Offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredJobs.map(job => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <img src={job.logo} alt={`${job.company} logo`} className="h-8 w-8 md:h-10 md:w-10 object-contain" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm md:text-base">{job.title}</h3>
                        <p className="text-gray-600 text-xs md:text-sm">{job.company} • {job.location}</p>
                        <p className="text-purple-600 text-xs md:text-sm font-medium mt-1">{job.salary}</p>
                        <div className="mt-2 flex items-center space-x-2">
                          <button 
                            onClick={() => setSelectedJob(job)}
                            className="text-xs md:text-sm text-purple-600 hover:text-purple-800 font-medium"
                          >
                            View Details →
                          </button>
<button
  onClick={() => navigate('/apply')}  // or navigate(job.cpaLink) if it's a relative path
  className="bg-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-md hover:bg-green-700 transition duration-300 text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
>
  Apply Now
</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Partnered Employers Section */}
      <section className="py-8 md:py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-800">Trusted By Leading Employers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {partners.map(partner => (
              <div key={partner.name} className="flex items-center justify-center p-2 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-8 md:h-12 object-contain" 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/150?text="+partner.name;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-0">Browse Job Openings</h2>
            <div className="text-sm text-gray-600">{filteredJobs.length} jobs found</div>
          </div>
          
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0 mb-4 md:mb-6">
            <div className="w-full md:w-1/4">
              <label htmlFor="job-category" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Job Category</label>
              <select 
                id="job-category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs md:text-sm"
              >
                <option>All Categories</option>
                <option>Delivery & Transportation</option>
                <option>Warehouse</option>
                <option>Retail</option>
                <option>Customer Service</option>
              </select>
            </div>
            
            {/* <div className="w-full md:w-1/4">
              <label htmlFor="location" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Location</label>
              <select 
                id="location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs md:text-sm"
              >
                <option>All Locations</option>
                <option>Chicago, IL</option>
                <option>Remote</option>
                <option>Naperville, IL</option>
                <option>Joliet, IL</option>
              </select>
            </div> */}
            
            <div className="w-full md:w-1/4">
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Job Type</label>
              <div className="flex space-x-1 md:space-x-2">
                <button 
                  onClick={() => setActiveFilter('all')}
                  className={`px-2 py-1 md:px-3 md:py-1 rounded-md text-xs md:text-sm ${activeFilter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                >
                  All
                </button>
                <button 
                  onClick={() => setActiveFilter('full')}
                  className={`px-2 py-1 md:px-3 md:py-1 rounded-md text-xs md:text-sm ${activeFilter === 'full' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                >
                  Full-time
                </button>
                <button 
                  onClick={() => setActiveFilter('part')}
                  className={`px-2 py-1 md:px-3 md:py-1 rounded-md text-xs md:text-sm ${activeFilter === 'part' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                >
                  Part-time
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-1/4 flex items-end">
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                Filter Jobs
              </button>
            </div>
          </div>
          
          {/* Job Cards */}
          <div className="space-y-3 md:space-y-4">
            {filteredJobs.map(job => (
              <div key={job.id} className="border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-md transition">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-start mb-3 md:mb-0">
                    <div className="flex-shrink-0 mr-3">
                      <img src={job.logo} alt={`${job.company} logo`} className="h-10 w-10 md:h-12 md:w-12 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-800">{job.title}</h3>
                      <p className="text-gray-600 text-xs md:text-sm">{job.company} • {job.location}</p>
                      <div className="mt-1 md:mt-2 flex items-center flex-wrap gap-1">
                        <span className={`inline-block text-xs px-2 py-1 rounded ${
                          job.type === 'Full-time' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {job.type}
                        </span>
                        <span className="text-gray-700 text-xs md:text-sm font-medium">{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end mt-2 md:mt-0 space-y-2">
                    <span className="text-gray-500 text-xs">Posted {job.posted}</span>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => toggleSaveJob(job.id)}
                        className="p-1 text-gray-500 hover:text-purple-600"
                        aria-label={savedJobs.includes(job.id) ? "Unsave job" : "Save job"}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={savedJobs.includes(job.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => setSelectedJob(job)}
                        className="bg-purple-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-md hover:bg-purple-700 transition duration-300 text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        View Details
                      </button>
<button
  onClick={() => navigate('/apply')}  // or navigate(job.cpaLink) if it's a relative path
  className="bg-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-md hover:bg-green-700 transition duration-300 text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
>
  Apply Now
</button>
                    </div>
                  </div>
                </div>
                <p className="mt-2 md:mt-4 text-gray-600 text-xs md:text-sm">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">Success Stories From Our Users</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-purple-100 flex items-center justify-center mr-2 md:mr-3">
                    <span className="text-purple-600 font-bold text-sm md:text-base">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs md:text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-700 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">Ready to find your dream job?</h2>
          <p className="text-base md:text-lg mb-4 md:mb-6 max-w-2xl mx-auto">Join thousands of happy job seekers who found their perfect match through Carrer Connect.</p>
          <button className="bg-white text-purple-700 px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-purple-50 transition duration-300 font-semibold text-base md:text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white">
            Browse All Jobs
          </button>
        </div>
      </section>



      {/* Job Details Modal */}
{selectedJob && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4">
    <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-start mb-3 md:mb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">{selectedJob.promoHeader || selectedJob.title}</h2>
            <p className="text-gray-600 text-sm md:text-base">{selectedJob.company} • {selectedJob.location}</p>
          </div>
          <button 
            onClick={() => setSelectedJob(null)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex items-center mb-4 md:mb-6">
          <img src={selectedJob.logo} alt={`${selectedJob.company} logo`} className="h-10 w-10 md:h-12 md:w-12 object-contain mr-3 md:mr-4" />
          <div>
            <p className="text-base md:text-lg font-medium text-gray-800">{selectedJob.salary}</p>
            <p className="text-gray-500 text-xs md:text-sm">{selectedJob.type} • {selectedJob.posted}</p>
          </div>
        </div>

        {selectedJob.promoTagline && (
          <div className="mb-4 md:mb-6 bg-blue-50 p-3 md:p-4 rounded-lg">
            <p className="text-blue-800 font-medium text-sm md:text-base italic">{selectedJob.promoTagline}</p>
          </div>
        )}

        <div className="mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">Job Description</h3>
          <p className="text-gray-600 text-sm md:text-base">{selectedJob.description}</p>
        </div>

        {selectedJob.positions && selectedJob.positions.length > 0 && (
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">Available Positions</h3>
            <div className="space-y-3">
              {selectedJob.positions.map((position, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-800">{position.role}</h4>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">{position.type}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{position.pay}</p>
                  <p className="text-gray-500 text-xs mt-2">{position.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

                {selectedJob.responsibilities && selectedJob.responsibilities.length > 0 && (
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">Responsibilities</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm md:text-base">
              {selectedJob.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
                {selectedJob.requirements && selectedJob. requirements.length > 0 && (
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">Requirements</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm md:text-base">
              {selectedJob. requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
                {selectedJob.salaryBreakdown && selectedJob. salaryBreakdown.length > 0 && (
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">Salary</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm md:text-base">
              {selectedJob.salaryBreakdown.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}


        {selectedJob.highlights && selectedJob.highlights.length > 0 && (
          <div className="mb-4 md:mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1 md:mb-2">Highlights</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm md:text-base">
              {selectedJob.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        

        {selectedJob.benefits && selectedJob.benefits.length > 0 && (
          <div className="mb-4 md:mb-6 bg-gray-50 p-3 md:p-4 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Benefits</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm md:text-base">
              {selectedJob.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

                     <div className="mb-4 md:mb-6 bg-gray-50 p-3 md:p-4 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Salary & Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <p className="text-gray-500 text-sm md:text-base">Base Pay</p>
                    <p className="font-medium text-sm md:text-base">{selectedJob.salaryBreakdown.basePay}</p>
                  </div>
                  {selectedJob.salaryBreakdown.bonus && (
                    <div>
                      <p className="text-gray-500 text-sm md:text-base">Bonus</p>
                      <p className="font-medium text-sm md:text-base">{selectedJob.salaryBreakdown.bonus}</p>
                    </div>
                  )}
                  <div className="md:col-span-2">
                    <p className="text-gray-500 text-sm md:text-base">Benefits</p>
                    <p className="font-medium text-sm md:text-base">{selectedJob.salaryBreakdown.benefits}</p>
                  </div>
                </div>
              </div>


        <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-gray-200">
          <div className="flex space-x-1 md:space-x-2">
            <button 
              onClick={() => toggleSaveJob(selectedJob.id)}
              className="p-1 md:p-2 text-gray-500 hover:text-purple-600"
              aria-label={savedJobs.includes(selectedJob.id) ? "Unsave job" : "Save job"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill={savedJobs.includes(selectedJob.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
            <button className="p-1 md:p-2 text-gray-500 hover:text-purple-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
<button
  onClick={() => navigate()}  // or navigate(job.cpaLink) if it's a relative path
  className="bg-green-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-md hover:bg-green-700 transition duration-300 text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
>
  Apply Now
</button>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default HeroSection;