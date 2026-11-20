import React, { useState } from 'react';
import { Brain, Code, Database, Dna, FlaskRound, GraduationCap, Microscope, Rocket, Users, Linkedin, BookOpen, Clock, X, Menu, CheckCircle, Send, AlertCircle, Calendar, ChevronRight, Sparkles, ArrowRight, MapPin, Building2, ExternalLink, Download, Eye } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import FacultyDevelopmentProgram from './pages/FacultyDevelopmentProgram';
import myAsbLogo from './assets/img/MYASBlogo.jpg';

// Import images if they are in the src directory


// Components
const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://8khr67gk04.ufs.sh/f/zIEzptvTrmK5zuZegfvTrmK5chlRLqFs6Cve4IQUgYifHSXb"
                alt="Logo"
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-gray-900">AAIBA</span>
            </Link>

            <Link to="https://www.amrita.edu/school/business/coimbatore/" target="_blank" className="hidden lg:flex items-center space-x-2 ms-4">
              <img 
                src="https://8khr67gk04.ufs.sh/f/zIEzptvTrmK5SPTlBDMZSKcThVlXO36eNzMWwn70QHmBtaYd"
                alt="amrita"
                className="w-40 xl:w-60 h-10"
              />
            </Link>

            <div className="hidden lg:block h-6 w-px bg-gray-200 ms-3" />

            <Link
              to="https://www.amridev.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-2 ms-3 group hover:opacity-90 transition-opacity"
              title="Visit AmriDev"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center shadow-sm border border-slate-700/50 group-hover:border-blue-500 transition-colors">
                <Code className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" strokeWidth={2.5} />
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-extrabold tracking-tight text-gray-900">Amri</span>
                <span className="text-xl font-extrabold tracking-tight text-blue-600">Dev</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 ml-0.5"></span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className={`${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}>
              Home
            </Link>
            <Link to="/about" className={`${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}>
              About
            </Link>
            <Link to="/what-we-do" className={`${location.pathname === '/what-we-do' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}>
              What We Do
            </Link>
            <Link to="/team" className={`${location.pathname === '/team' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}>
              Team
            </Link>
            <Link to="/events" className={`${location.pathname === '/events' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}>
              Gallery
            </Link>
            <Link 
              to="/fdp-2026" 
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                location.pathname.includes('fdp') 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>FDP 2026</span>
              <span className="bg-amber-400 text-slate-900 text-[10px] px-1.5 py-0.2 rounded font-black tracking-wide">NEW</span>
            </Link>
            <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors font-medium`}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/what-we-do" 
                className={`${location.pathname === '/what-we-do' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                What We Do
              </Link>
              <Link 
                to="/team" 
                className={`${location.pathname === '/team' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/events" 
                className={`${location.pathname === '/events' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/fdp-2026" 
                className="flex items-center justify-between p-3 rounded-xl bg-blue-50 text-blue-700 font-bold border border-blue-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Two-Day FDP (AI Research)
                </span>
                <span className="text-[10px] bg-amber-400 text-slate-900 px-2 py-0.5 rounded font-black">NEW</span>
              </Link>
              <Link 
                to="/contact" 
                className={`${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="https://www.amridev.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 pt-2 border-t border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-7 h-7 rounded-md bg-slate-900 flex items-center justify-center">
                  <Code className="w-3.5 h-3.5 text-blue-400" strokeWidth={2.5} />
                </div>
                <div className="flex items-baseline">
                  <span className="text-base font-extrabold tracking-tight text-gray-900">Amri</span>
                  <span className="text-base font-extrabold tracking-tight text-blue-600">Dev</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 ml-0.5"></span>
                </div>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const Home = () => {
  const [showEventPopup, setShowEventPopup] = useState(true);

  return (
    <div>
      {/* Event Pop-up Modal */}
      {showEventPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div 
            className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 pb-4 border-b border-gray-100 relative">
              <button
                onClick={() => setShowEventPopup(false)}
                className="absolute top-5 right-5 p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                Faculty Development Program
              </span>

              <h3 className="text-xl font-bold text-gray-900 leading-snug">
                Business Research Automation with AI and Generative Models
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Amrita School of Business & AAIBA Lab • In Association with Course5 Intelligence (C5i)
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 text-sm text-gray-600">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-50 p-3 rounded-md border border-gray-100">
                  <div className="text-gray-500">Dates & Venue</div>
                  <strong className="text-gray-900 block mt-0.5">10–11 Dec 2026</strong>
                  <span className="text-gray-500">ASB, Coimbatore</span>
                </div>
                <div className="bg-blue-50/60 p-3 rounded-md border border-blue-100">
                  <div className="text-blue-700 font-medium">Early Bird Fee</div>
                  <strong className="text-blue-900 text-base block mt-0.5">₹1,750</strong>
                  <span className="text-blue-600 text-[11px]">Till 30 Nov 2026</span>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-gray-600">
                Two days of expert-led sessions on automated data acquisition, LLM evidence synthesis, and AI research workflows for management faculty and scholars.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/fdp-2026#register"
                  onClick={() => setShowEventPopup(false)}
                  className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors text-xs text-center flex items-center justify-center gap-1.5"
                >
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/fdp-2026"
                  onClick={() => setShowEventPopup(false)}
                  className="flex-1 py-2.5 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-md transition-colors text-xs text-center flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>View Details</span>
                </Link>
              </div>

              {/* Brochure Quick Access */}
              <div className="flex items-center justify-center gap-4 pt-3 border-t border-gray-100 text-xs">
                <a
                  href="/BR_FDP_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Brochure (PDF)</span>
                </a>
                <span className="text-gray-300">•</span>
                <a
                  href="/BR_FDP_Brochure.pdf"
                  download="BR_FDP_Brochure.pdf"
                  className="text-gray-700 hover:text-blue-600 hover:underline font-medium flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Re-Open Badge if dismissed */}
      {!showEventPopup && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setShowEventPopup(true)}
            className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2.5 rounded-full shadow-lg border border-gray-200 hover:border-blue-500 transition-all text-xs font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>FDP 2026 (AI Research)</span>
            <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-[11px]">View</span>
          </button>
        </div>
      )}

      <section className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Amrita Artificial Intelligence and Business Analytics Lab
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            We are a team of analysts and AI domain experts dedicated to advancing knowledge through research, pioneering innovation, delivering advanced professional training, and fostering academic excellence in AI and analytics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link 
              to="/about" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center"
            >
              Discover More
            </Link>
            <Link 
              to="/fdp-2026" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-amber-300" />
              <span>FDP 2026 Event</span>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Flagship Event Banner on Landing Page */}
    <section className="bg-white py-6 px-4 border-y border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                Upcoming FDP
              </span>
              <span className="text-xs text-gray-500">10–11 December 2026 • ASB Coimbatore</span>
              <span className="text-xs text-green-700 font-medium">Early Bird: ₹1,750</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Business Research Automation with AI and Generative Models
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Organized by AAIBA Lab, Amrita School of Business in Association with Course5 Intelligence (C5i)
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto flex-shrink-0">
          <a
            href="/BR_FDP_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 lg:flex-none px-4 py-2.5 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 text-xs font-semibold rounded-md transition-colors text-center flex items-center justify-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View Brochure</span>
          </a>
          <a
            href="/BR_FDP_Brochure.pdf"
            download="BR_FDP_Brochure.pdf"
            className="flex-1 lg:flex-none px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-md transition-colors text-center flex items-center justify-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
          <Link
            to="/fdp-2026"
            className="flex-1 lg:flex-none px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition-colors text-center flex items-center justify-center gap-1.5"
          >
            <span>View & Register</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>

  </div>
  );
};

const About = () => (
  <div className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">
          Amrita Artificial Intelligence and Business Analytics Lab 
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Vision, Mission, About Us */}
        <div className="space-y-8">
          {/* Vision Card */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-start space-x-6">
              <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
              <img 
            src="/assets/img/vision.png"
            alt="Vision"
            className="w-10 h-10"
          />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To foster a prosperous, responsible, compassionate, and sustainable future for all through transformative, 
                  value-based education in artificial intelligence and analytics, driving societal engagement and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-start space-x-6">
              <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
              <img 
            src="/assets/img/target.png"
            alt="Mission"
            className="w-10 h-10"
          />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                 To empower students with the knowledge and skills in artificial intelligence and analytics through immersive, value-based education. We aim to drive societal engagement by disseminating knowledge through impactful research, specialized training, and broader educational initiatives to address real-world challenges and contribute to a sustainable future.
                </p>
              </div>
            </div>
          </div>

          {/* About Us Card */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-600 leading-relaxed">
              The Amrita Artificial Intelligence and Business Analytics Lab (AAIBA LAB) is an initiative from the Amrita School of Business, Coimbatore. The lab's design provides a corporate working environment for students specializing in business analytics. The lab ensures intensive learning on AI and BA technologies through real-time projects, group discussions, training sessions, and guidance from industry experts and the school's alumni.
              <br></br>
It focuses on conducting impactful research and addressing real-world challenges in sectors such as micro, small, and medium enterprises (MSMEs), healthcare, clinical testing, and quality control. Currently, the lab offers courses on various fields of business analytics. The lab aims to disseminate its knowledge and research outcomes to the wider community through specialized training programs and broader educational initiatives.

            </p>
          </div>
        </div>

        {/* Right Column: Dean's Message */}
        <div className="bg-white p-8 rounded-xl shadow-md h-fit sticky top-24">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-6">Message from Dean</h2>
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-40 overflow-hidden">
                <img 
                  src="/assets/img/nava.jpg"
                  alt="Dr. Nava Subramaniam"
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-lg">Dr. Nava Subramaniam</h3>
              <p className="text-gray-600">
                Dean, Amrita School of Business, Coimbatore<br />
                Honorary Professor - RMIT University
              </p>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-600">
            <p className="leading-relaxed">
              "I am thrilled to share my excitement and pride in the establishment of the Amrita Artificial Intelligence 
              and Business Analytics Lab (AAIBA LAB). This lab represents our unwavering commitment to innovation and 
              excellence in fostering the role and impacts of emergent technologies and the use of analytics in developing 
              future leaders. It is a space where our students can immerse themselves in the transformative power of AI 
              and business analytics, and I am continually inspired by their passion and creativity.
            </p>
            <p className="leading-relaxed">
              The AAIBA Lab, conceptualized and mentored by Dr. Prashobhan Palakkeel, provides an unparalleled opportunity 
              for our students to engage with real-world challenges and develop impactful analytical solutions. It is a 
              multi-stakeholder supported initiative where industry specialists and experts in AI and faculty and scholars 
              within and outside Amrita University collaborate to address rising global and sustainability challenges. I am 
              confident that the skills and experiences gained through engaging with AAIBA lab will empower our students to 
              become leaders in their fields, driving progress and positive change in society."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WhatWeDo = () => (
<div className="py-20 px-4">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold mb-16 text-center">What We Do</h1>

    {/* Core Focus Areas */}
    <section className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Driving Innovation through Advanced Research in AI & Analytics",
            description:
              "We bridge the gap between foundational research and real-world application to solve critical challenges in MSMEs, healthcare, clinical testing, and quality control. Our work leverages advanced business analytics, Machine Learning, and Artificial Intelligence to transform organizational operations. We actively advance core methodologies by optimizing Retrieval-Augmented Generation (RAG), exploring graph augmentation and novel vector embedding strategies, and integrating advanced machine learning techniques with econometric models to derive deeper insights into consumer behavior from complex big data.",
            icon: "/assets/img/ai.png",
          },
          {
            title: "Elevating Expertise through Specialized Training Initiatives",
            description:
              "We empower academic and corporate communities through high-impact professional development programs. Our Faculty Development Programs (FDPs) strengthen academic rigor, while Executive and Management Development Programs (MDPs) equip industry professionals with data-driven competencies. These initiatives focus on advanced statistics, applied machine learning, comprehensive research methodology, and the principles of reproducible research.",
            icon: "/assets/img/training.png",
          },
          {
            title: "Accelerating Careers with High-Impact Certificate Programs",
            description:
              "Our short-term, high-intensity certificate programs rapidly equip students and professionals with end-to-end skills for a data-driven economy. Participants build strong foundations in statistics, research methodology, and business databases, followed by progressive training in Python and R. Advanced modules include multivariate analysis, machine learning, time series forecasting, deep learning, NLP, Generative AI, and Agentic AI, along with skills in data visualization and analytical communication.",
            icon: "/assets/img/analystics.png",
          },
          {
            title: "Developing Practical Business Solutions",
            description:
              "We believe academic insight achieves its full value when applied to real business challenges. While our lab focuses on foundational research and analytical frameworks, the development and deployment of commercial-grade AI and analytics solutions are handled through our spin-off entity, AmriDev.",
            icon: "/assets/img/interview.png",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start"
          >
            <div className="p-6 flex-shrink-0">
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Projects Section (KEPT AS-IS) */}
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "myASB",
            description:
              "An integrated mentor-mentee and academic platform built by AAIBA Lab to streamline student mentoring, academic progress tracking, and institutional collaborative learning.",
            image: myAsbLogo,
            link: "https://www.myasb.in",
          },
          {
            title: "Apps for MSMEs",
            description:
              "Streamlining operations and enhancing productivity for micro, small, and medium enterprises by leveraging advanced data analysis and AI tools to optimize workflow and enable real-time decision-making...",
            image:
              "https://img.freepik.com/free-vector/business-apps-background-design_1300-54.jpg",
          },
          {
            title: "Quality Control App",
            description:
              "Ensuring superior product quality with innovative AI-based tools that predict defects, improve quality assurance processes, and minimize production downtime for manufacturing units...",
            image:
              "https://img.freepik.com/free-vector/interaction-design-concept-illustration_114360-1507.jpg",
          },
          {
            title: "Clinical Testing App",
            description:
              "Revolutionizing clinical testing processes with cutting-edge technology, offering faster, accurate diagnostics while reducing operational costs for healthcare facilities...",
            image:
              "https://img.freepik.com/free-vector/medical-booking-app_23-2148571935.jpg",
          },
          {
            title: "Hospital Management App",
            description:
              "Optimizing hospital operations to deliver better patient care through efficient resource management, automated scheduling, and integrated data systems...",
            image:
              "https://img.freepik.com/free-vector/medical-booking-app-concept_23-2148578378.jpg",
          },
        ].map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-48 bg-gray-50 flex items-center justify-center p-3 border-b border-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0">
              <a
                href={project.link || "#"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* AmriDev Link */}
    <section className="text-center mt-16">
      <p className="text-gray-700 text-lg">
        For further information on developing impactful business solutions, please
        visit{" "}
        <a
          href="https://www.amridev.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          AmriDev
        </a>
        .
      </p>
    </section>
  </div>
</div>



);


const Contact = () => (
  <div className="py-20 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">Get in touch with us for any inquiries</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          <div className="space-y-6">
              {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                  <h4 className="font-bold mb-2">Location:</h4>
                <p className="text-gray-600">
                  AAIBA Lab<br />
                  Amrita School of Business<br />
                  Amrita University, Ettimadai,<br />
                    Coimbatore, Tamil Nadu 641112
                </p>
              </div>
            </div>

              {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                  <h4 className="font-bold mb-2">Email:</h4>
                  <a href="mailto:info@aaibalab.com" className="text-gray-600 hover:text-blue-600">
                    info@aaibalab.com
                  </a>
              </div>
            </div>

              {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                  <h4 className="font-bold mb-2">Phone:</h4>
                  <a href="tel:+919848114989" className="text-gray-600 hover:text-blue-600">
                    +91 98481 14989
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md h-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.1423732126805!2d76.90187519999999!3d10.904658299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85d004f5bc901%3A0x2f2e61941ac7ee98!2sAAIBA%20LAB!5e1!3m2!1sen!2sin!4v1737438818560!5m2!1sen!2sin"
            width="100%"
            height="100%"
              style={{ border: 0, minHeight: '400px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
        </div>
      </div>
    </div>
  </div>
);

const Team = () => (
  <div className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>

 {/* Current Executive Members */}
<div className="mb-16">
  <h2 className="text-2xl font-bold mb-6 text-center">  Executive Members
</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
    {[
      {
        name: "Malavika Venugopal",
        role: "President",
        image: "https://8khr67gk04.ufs.sh/f/zIEzptvTrmK5JSkjtsuow6QibWOcMhNpyFGYPntAeEg53JmZ"
      },
      {
        name: "Z Aadhil",
        role: "Secretary",
        image: "https://8khr67gk04.ufs.sh/f/zIEzptvTrmK5o1y8MKIJXey9fjHUYSrkK0OA1vuNtRMnsIbi"
      },
      {
        name: "Srivathsan V",
        role: "Coordinator",
        image: "https://8khr67gk04.ufs.sh/f/zIEzptvTrmK5uxaqNYs1hne8aMsE42WNqfDJOSB9zI5lcdF3"
      }
    ].map((member) => (
      <div key={member.name} className="text-center">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-32 h-40 object-cover object-center rounded-lg mx-auto mb-3"
        />
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-gray-600">{member.role}</p>
      </div>
    ))}
  </div>
</div>
      {/* Mentor Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Mentors</h2>
        <div className="flex justify-center">
          <div className="w-64 text-center">
            <img 
              src=".//assets/img/team/team1.jpg" 
              alt="Dr. Prashobhan Palakkeel" 
              className="w-32 h-40 object-cover object-center rounded-lg mx-auto mb-3"
            />
            <h3 className="text-xl font-bold mb-1">Dr. Prashobhan Palakkeel</h3>
            <p className="text-gray-600 mb-2">Principal Analyst <br />AIBA, Area Chair, ASB</p>
            <a 
              href="https://palakkeel.com/" 
              className="text-blue-600 hover:text-blue-700 inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <span className="ml-1">→</span>
            </a>
          </div>
          <div className="w-64 text-center">
            <img 
              src=".//assets/img/team/ajith.jpeg" 
              alt="Ajith Sankaran" 
              className="w-32 h-40 object-cover object-center rounded-lg mx-auto mb-3"
            />
            <h3 className="text-xl font-bold mb-1">Ajith Sankaran</h3>
            <p className="text-gray-600 mb-2">Adjunct Professor of Practice,ASB <br/>Senior Vice President,C5i</p>
            <a 
              href="https://www.linkedin.com/in/ajithsankaran/" 
              className="text-blue-600 hover:text-blue-700 inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <span className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Industry Mentors Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Industry Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sachin Varriar",
              role: "Product Owner, TransUnion",
              image: "/assets/img/team/sachin.png",
              linkedin: "https://www.linkedin.com/in/sachinvarriar/"
            },
            {
              name: "Vishnu Kurup M K",
              role: "Product Manager, Affine",
              image: "/assets/img/team/vishnu.png",
              linkedin: "https://www.linkedin.com/in/vishnukurupmk/"
            },
            {
              name: "Sreejith M T",
              role: "Assistant Manager, EY",
              image: "/assets/img/team/sreejith.jpeg",
              linkedin: "https://www.linkedin.com/in/sreejithmt/"
            }
          ].map((mentor) => (
            <div key={mentor.name} className="text-center">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-32 h-40 object-cover object-center rounded-lg mx-auto mb-3"
              />
              <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
              <p className="text-gray-600 mb-2">{mentor.role}</p>
              <a 
                href={mentor.linkedin}
                className="text-blue-600 hover:text-blue-700 inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-1" />
                Profile
              </a>
            </div>
          ))}
        </div>
      </div>

{/* Alumni Section */}
<div className='mb-16'>
  <h2 className="text-2xl font-bold mb-6 text-center">AAIBA Lab Alumni</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      {
        name: "Srinivasa Reddy",
        tenure: "President (2024–26)",
        role: "Former President & Coordinator (2024–26)",
        image: "/assets/img/team/sr.jpg"
      },
      {
        name: "Sreyas Namboodiri",
        tenure: "Secretary (2024–26)",
        role: "Former Secretary  (2024–26)\nEx: UST Global",
        image: "/assets/img/team/sreyas.jpg"
      },
      {
        name: "Harshitha Racharla",
        tenure: "Analyst (2024–26)",
        role: "Analyst (2024–26) \nEx: TCS",
        image: "/assets/img/team/harshitha.jpg"
      },
      {
        name: "Nanda Gopan",
        tenure: "Analyst (2024–26)",
        role: "Analyst (2024–26)",
        image: "/assets/img/team/ng.jpg"
      },
      {
        name: "Shruthi R Nair",
        tenure: "Analyst (2024–26)",
        role: "Analyst (2024–26)\nEx: Infosys",
        image: "/assets/img/team/Shruthi R Nair.jpg"
      },
      {
        name: "K J Ananthakrishnan",
        tenure: "Analyst (2024–26)",
        role: "Project Associate (2024–26)\nEx: Infosys",
        image: "/assets/img/team/kjananthu.jpg"
      }
    ].map((member) => (
      <div key={member.name} className="text-center">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-32 h-40 object-cover object-center rounded-lg mx-auto mb-3"
        />
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>

      

        <p className="text-gray-600 whitespace-pre-line">{member.role}</p>
      </div>
    ))}
  </div>
</div>

    



    </div>
  </div>
);

// Create the Courses components
const courseData = {
  python: {
    title: "Python for Data Science",
    description: "Master Python programming with a focus on data science applications",
    duration: "4 weeks",
    image: "/assets/img/courses/python.jpg",
    modules: [
      {
        title: "Introduction to Python",
        topics: [
          "Python basics and syntax",
          "Variables and data types",
          "Control structures",
          "Functions and modules"
        ]
      },
      {
        title: "Data Manipulation",
        topics: [
          "NumPy arrays and operations",
          "Pandas DataFrames",
          "Data cleaning and preprocessing",
          "Data visualization with Matplotlib and Seaborn"
        ]
      },
      {
        title: "Advanced Topics",
        topics: [
          "Machine Learning with Scikit-learn",
          "Data analysis projects",
          "Best practices and optimization",
          "Real-world applications"
        ]
      }
    ]
  },
  sql: {
    title: "SQL for Data Analysis",
    description: "Learn database management and analysis using SQL",
    duration: "4 weeks",
    image: "/assets/img/courses/sql.jpg",
    modules: [
      {
        title: "SQL Fundamentals",
        topics: [
          "Database basics",
          "SELECT statements",
          "Filtering and sorting",
          "Joins and relationships"
        ]
      },
      {
        title: "Advanced SQL",
        topics: [
          "Aggregations and grouping",
          "Subqueries",
          "Window functions",
          "Performance optimization"
        ]
      },
      {
        title: "Data Analysis with SQL",
        topics: [
          "Complex queries",
          "Data modeling",
          "ETL processes",
          "Case studies"
        ]
      }
    ]
  },
  powerBi: {
    title: "Power BI for Business Intelligence",
    description: "Create powerful business intelligence solutions with Power BI",
    duration: "4 weeks",
    image: "/assets/img/courses/power-bi.jpg",
    modules: [
      {
        title: "Power BI Basics",
        topics: [
          "Interface and navigation",
          "Data import and transformation",
          "Creating visualizations",
          "DAX basics"
        ]
      },
      {
        title: "Advanced Analytics",
        topics: [
          "Complex DAX formulas",
          "Custom visualizations",
          "Data modeling best practices",
          "Report design principles"
        ]
      },
      {
        title: "Enterprise BI",
        topics: [
          "Power BI service",
          "Sharing and collaboration",
          "Security and governance",
          "Real-time analytics"
        ]
      }
    ]
  }
};

const CourseContent = ({ course }) => (
  <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <div 
      className="h-[60vh] bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80")'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {course.description}
          </p>
        </div>
      </div>
    </div>

    {/* Course Info */}
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
          <Clock className="w-12 h-12 text-blue-600" />
          <div>
            <h3 className="font-semibold text-gray-900">Duration</h3>
            <p className="text-gray-600">{course.duration}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
          <Users className="w-12 h-12 text-blue-600" />
          <div>
            <h3 className="font-semibold text-gray-900">Class Size</h3>
            <p className="text-gray-600">30 Students</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
          <BookOpen className="w-12 h-12 text-blue-600" />
          <div>
            <h3 className="font-semibold text-gray-900">Level</h3>
            <p className="text-gray-600">Intermediate</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center space-x-4">
          <GraduationCap className="w-12 h-12 text-blue-600" />
          <div>
            <h3 className="font-semibold text-gray-900">Certificate</h3>
            <p className="text-gray-600">Yes</p>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
          <div className="prose max-w-none">
            <div className="space-y-8">
              {course.modules.map((module, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{module.title}</h3>
                  <ul className="space-y-2 text-gray-600 list-disc pl-5">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Learning Outcomes</h3>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li>Master {course.title} fundamentals and advanced concepts</li>
              <li>Build practical skills through hands-on projects</li>
              <li>Learn industry best practices and standards</li>
              <li>Develop problem-solving abilities</li>
              <li>Gain real-world application experience</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm sticky top-4">
            <h3 className="text-2xl font-bold mb-6">Course Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Prerequisites</h4>
                <p className="text-gray-600">Basic programming knowledge and analytical thinking</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Schedule</h4>
                <p className="text-gray-600">Flexible timing, 2-hour sessions</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Assessment</h4>
                <p className="text-gray-600">Projects and assignments</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Resources</h4>
                <p className="text-gray-600">Course materials and documentation provided</p>
              </div>
             <button 
  onClick={() => window.location.href = "https://noteforms.com/forms/course-registration-form-2fpf1n"} 
  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
>
  Enroll Now
</button>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

// Add a new Courses component for the main courses page
const Courses = () => (
  <div className="py-20 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Our Courses</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Enhance your skills with our specialized courses in data science, analytics, and business intelligence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            key: 'python',
            course: courseData.python,
            image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
          },
          {
            key: 'sql',
            course: courseData.sql,
            image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
          },
          {
            key: 'power-bi',
            course: courseData.powerBi,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
          }
        ].map(({ key, course, image }) => (
          <div 
            key={key}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-56">
              <img 
                src={image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-200 text-sm line-clamp-2">{course.description}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                  {course.duration}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {course.modules.length} Modules
                </span>
              </div>
              <Link
                to={`/courses/${key}`}
                className="block w-full text-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                View Course Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Feature cards with standard styling */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: GraduationCap,
            title: "Expert Instructors",
            description: "Learn from industry professionals with years of practical experience"
          },
          {
            icon: Microscope,
            title: "Hands-on Projects",
            description: "Apply your learning through practical projects and real-world case studies"
          },
          {
            icon: Users,
            title: "Career Support",
            description: "Get guidance on career opportunities and industry connections"
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App = () => {
  // Event photos for the gallery
  const galleryEvents = [
    {
      title: "AAIBA 2026–2027 – Introduction Session for Juniors",
      image: "/gallery/intro-session-juniors.jpg",
      category: "Orientation & Mentoring",
    },
    {
      title: "AAIBA Inauguration – Conclave CEO Connect",
      image: "/gallery/conclave-ceo-connect.jpeg",
      category: "Leadership Connect",
    },
    {
      title: "Conclave – AAIBA Stall",
      image: "/gallery/conclave-aaiba-stall.jpeg",
      category: "Exhibition & Showcase",
    },
    {
      title: "MyASB Inauguration",
      image: "/gallery/myasb-inauguration.jpeg",
      category: "Platform Launch",
    },
    {
      title: "Portfolio Development Sessions",
      image: "/gallery/portfolio-development.jpg",
      category: "Skill Workshop",
    },
    {
      title: "Python Training Session",
      image: "/gallery/python-training.jpg",
      category: "Hands-on Technical Training",
    },
  ];

  const Events = () => (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Gallery of Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Highlights from AAIBA Lab events, workshops, student mentoring sessions, and flagship industry connects (2026–2027).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryEvents.map((event, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group"
            >
              <div className="w-full h-64 bg-gray-100 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                  {event.category}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {event.title}
                </h3>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>AAIBA Lab</span>
                  <span className="text-blue-600 font-medium">2026–2027</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/python" element={<CourseContent course={courseData.python} />} />
          <Route path="/courses/sql" element={<CourseContent course={courseData.sql} />} />
          <Route path="/courses/power-bi" element={<CourseContent course={courseData.powerBi} />} />
          <Route path="/events" element={<Events/>} />
          <Route path="/events/business-research-fdp" element={<FacultyDevelopmentProgram />} />
          <Route path="/fdp-2026" element={<FacultyDevelopmentProgram />} />
          <Route path="/events/fdp" element={<FacultyDevelopmentProgram />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="p-20 text-center">Page Under Construction</div>} />
        </Routes>

        {/* Gallery Section */}
       
      </div>
    </Router>
  );
};

export default App;
