import React from 'react';
import { Brain, Code, Database, Dna, FlaskRound, GraduationCap, Microscope, Rocket, Users, Linkedin, BookOpen, Clock, X, Menu } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Components
const Header = () => {
  const location = useLocation();
  const [isCoursesOpen, setIsCoursesOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AAIBA</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}>
              Home
            </Link>
            <Link to="/about" className={`${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}>
              About
            </Link>
            <Link to="/what-we-do" className={`${location.pathname === '/what-we-do' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}>
              What We Do
            </Link>
            <div className="relative">
              <button 
                className={`${location.pathname.startsWith('/courses') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors flex items-center`}
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              >
                Courses
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isCoursesOpen && (
                <div 
                  className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 mt-1"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  <Link to="/courses" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                    All Courses
                  </Link>
                  <Link to="/courses/python" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                    Python
                  </Link>
                  <Link to="/courses/sql" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                    SQL
                  </Link>
                  <Link to="/courses/power-bi" className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                    Power BI
                  </Link>
                </div>
              )}
            </div>
            <Link to="/team" className={`${location.pathname === '/team' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}>
              Team
            </Link>
            <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}>
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
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Courses</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/courses" 
                    className="block text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Courses
                  </Link>
                  <Link 
                    to="/courses/python" 
                    className="block text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Python
                  </Link>
                  <Link 
                    to="/courses/sql" 
                    className="block text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    SQL
                  </Link>
                  <Link 
                    to="/courses/power-bi" 
                    className="block text-gray-600 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Power BI
                  </Link>
                </div>
              </div>
              <Link 
                to="/team" 
                className={`${location.pathname === '/team' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className={`${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const Home = () => (
  <div>
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Amrita Artificial Intelligence and Business Analytics Lab
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            We are a team of analysts and AI developers dedicated to building powerful applications that drive business success.
          </p>
        </div>
      </div>
    </section>
  </div>
);

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
                <Brain className="w-8 h-8 text-blue-600" />
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
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower students with the knowledge and skills in artificial intelligence and analytics through immersive, 
                  value-based education. We aim to drive societal engagement and innovation by developing impactful solutions 
                  that address real-world challenges and contribute to a sustainable future.
                </p>
              </div>
            </div>
          </div>

          {/* About Us Card */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-600 leading-relaxed">
              The Amrita Artificial Intelligence and Business Analytics Lab (AAIBA LAB) is an initiative from the Amrita School 
              of Business, Coimbatore. The lab's design provides a corporate working environment for students specializing in 
              business analytics. The lab ensures intensive learning on AI and BA technologies through real-time projects, 
              group discussions, training sessions, and guidance from industry experts and the school's alumni.
              <br /><br />
              It focuses on developing analytical solutions for micro, small, and medium enterprises (MSMEs), hospitals, 
              clinical testing, and quality control. Currently, the lab offers courses on various fields of business analytics. 
              Soon, the lab aims to make its analytics solutions available to the public through its own businesses.
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
                src="../img/nava.jpg"
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
      
      {/* Services Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Data Analytics Consulting",
              description: "Providing expert guidance on leveraging data analytics to drive business decisions.",
              icon: "src/assets/img/interview.png"
            },
            {
              title: "AI and Machine Learning Solutions",
              description: "Developing custom AI models and machine learning algorithms tailored to your needs.",
              icon: "src/assets/img/ai.png"
            },
            {
              title: "Business Intelligence Tools",
              description: "Creating dashboards and tools to visualize and interpret business performance.",
              icon: "src/assets/img/artificial-intelligence.png"
            },
            {
              title: "Process Automation",
              description: "Streamlining workflows and reducing manual effort through advanced automation techniques.",
              icon: "src/assets/img/automated.png"
            },
            {
              title: "Cybersecurity Analytics",
              description: "Enhancing security measures using data-driven risk analysis and threat prediction.",
              icon: "src/assets/img/cyber-security.png"
            },
            {
              title: "Customer Insights and Engagement",
              description: "Analyzing customer data to personalize experiences and boost engagement.",
              icon: "src/assets/img/analystics.png"
            },
            {
              title: "Training and Workshops",
              description: "Providing hands-on training in data analytics, AI, and related technologies.",
              icon: "src/assets/img/training.png"
            },
            {
              title: "Cloud Computing Solutions",
              description: "Offering scalable cloud-based solutions to meet growing business demands.",
              icon: "src/assets/img/server.png"
            },
            {
              title: "Predictive Analytics",
              description: "Utilizing data models to forecast trends and inform strategic decisions.",
              icon: "src/assets/img/predictive-chart.png"
            }
          ].map((service) => (
            <div 
              key={service.title} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center overflow-hidden"
            >
              <div className="p-6 flex-shrink-0">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Apps for MSMEs",
              description: "Streamlining operations and enhancing productivity for micro, small, and medium enterprises by leveraging advanced data analysis and AI tools to optimize workflow and enable real-time decision-making...",
              image: "https://img.freepik.com/free-vector/business-apps-background-design_1300-54.jpg?t=st=1737185231~exp=1737188831~hmac=ca05ea564acb0db5f0a7ea660ed624fc429a5908e0d1b340e14cf17646338e03&w=826"
            },
            {
              title: "Quality Control App",
              description: "Ensuring superior product quality with innovative AI-based tools that predict defects, improve quality assurance processes, and minimize production downtime for manufacturing units...",
              image: "https://img.freepik.com/free-vector/interaction-design-concept-illustration_114360-1507.jpg?t=st=1737185372~exp=1737188972~hmac=30273b9eb137b796eb7af1a7dffb9da0d3619a937a6c96fce27aa5043709eea3&w=826"
            },
            {
              title: "Clinical Testing App",
              description: "Revolutionizing clinical testing processes with cutting-edge technology, offering faster, accurate diagnostics while reducing operational costs for healthcare facilities...",
              image: "https://img.freepik.com/free-vector/medical-booking-app_23-2148571935.jpg?t=st=1737185442~exp=1737189042~hmac=00ad05054453145d1ec4c2beeaf960486350801a50fd95ef15a86b36fa7e4e93&w=826"
            },
            {
              title: "Hospital Management App",
              description: "Optimizing hospital operations to deliver better patient care through efficient resource management, automated scheduling, and integrated data systems...",
              image: "https://img.freepik.com/free-vector/medical-booking-app-concept_23-2148578378.jpg?t=st=1737185493~exp=1737189093~hmac=afcfaa9c6bfb3718400639e0ac3fd95f9167c729eb7125def4727109b37092a2&w=1380"
            }
          ].map((project) => (
            <div 
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <a
                  href="#"
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
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

      {/* Mentor Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Mentor</h2>
        <div className="flex justify-center">
          <div className="w-64 text-center">
            <img 
              src="src/assets/img/team/team1.jpg" 
              alt="Dr. Prashobhan Palakkeel" 
              className="w-32 h-40 object-cover object-center rounded-lg mx-auto mb-3"
            />
            <h3 className="text-xl font-bold mb-1">Dr. Prashobhan Palakkeel</h3>
            <p className="text-gray-600 mb-2">Principal Analyst, Mentor</p>
            <a 
              href="https://palakkeel.com/" 
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
              image: "src/assets/img/team/sachin.png",
              linkedin: "https://www.linkedin.com/in/sachinvarriar/"
            },
            {
              name: "Vishnu Kurup M K",
              role: "Product Manager, Affine",
              image: "src/assets/img/team/vishnu.png",
              linkedin: "https://www.linkedin.com/in/vishnukurupmk/"
            },
            {
              name: "Sreejith M T",
              role: "Analytics Consultant, Fractal",
              image: "src/assets/img/team/sreejith.jpeg",
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

      {/* Executive Members Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Executive Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            {
              name: "Srinivasa Reddy",
              role: "President & Coordinator\nAnalyst",
              image: "src/assets/img/team/sr.jpg"
            },
            {
              name: "Sreyas",
              role: "Secretary\nAnalyst\nEx: UST Global",
              image: "src/assets/img/team/sreyas.jpg"
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

      {/* Members Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Harshitha Racharla",
              role: "Analyst\nEx: TCS",
              image: "src/assets/img/team/harshitha.jpg"
            },
            {
              name: "Nanda Gopan",
              role: "Analyst",
              image: "src/assets/img/team/ng.jpg"
            },
            {
              name: "Shruthi R Nair",
              role: "Analyst\nEx: Infosys",
              image: "src/assets/img/team/Shruthi R Nair.jpg"
            },
            {
              name: "Arun Pandian",
              role: "Analyst",
              image: "src/assets/img/team/Arun Pandian.jpg"
            },
            {
              name: "Ramesh Krishna",
              role: "Analyst\nEx: Cognizant",
              image: "src/assets/img/team/rk.jpg"
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
    image: "src/assets/img/courses/python.jpg",
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
    image: "src/assets/img/courses/sql.jpg",
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
    image: "src/assets/img/courses/power-bi.jpg",
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
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
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
            key: 'powerBi',
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
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="p-20 text-center">Page Under Construction</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;