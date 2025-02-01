import React from 'react';
import { Brain, Code, Database, Dna, FlaskRound, GraduationCap, Microscope, Rocket, Users } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Components
const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">AAIBA</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={`${location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}>Home</Link>
          <Link to="/about" className={`${location.pathname === '/about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}>About</Link>
          <Link to="/services" className={`${location.pathname === '/services' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}>Services</Link>
          <Link to="/projects" className={`${location.pathname === '/projects' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}>Projects</Link>
          <Link to="/team" className={`${location.pathname === '/team' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}>Team</Link>
          <Link to="/blog" className={`${location.pathname === '/blog' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}>Blog</Link>
          <Link to="/contact" className={`${location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}>Contact</Link>
        </nav>
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

    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About us</h2>
        <p className="text-gray-600 text-lg text-justify">
          The Amrita Artificial Intelligence and Business Analytics Lab (AAIBA LAB) is an initiative from the Amrita School of Business, Coimbatore. The lab's design provides a corporate working environment for students specializing in business analytics. The lab ensures intensive learning on AI and BA technologies through real-time projects, group discussions, training sessions, and guidance from industry experts and the school's alumni. It focuses on developing analytical solutions for micro, small, and medium enterprises (MSMEs), hospitals, clinical testing, and quality control. Currently, the lab offers courses on various fields of business analytics. Soon, the lab aims to make its analytics solutions available to the public through its own businesses.
        </p>
      </div>
    </section>
  </div>
);

const About = () => (
  <div className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-8">
            Amrita Artificial Intelligence and Business Analytics Lab (AAIBA LAB)
          </h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Vision</h3>
                <p className="text-gray-600">
                  To foster a prosperous, responsible, compassionate, and sustainable future for all through transformative, value-based education in artificial intelligence and analytics, driving societal engagement and innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Mission</h3>
                <p className="text-gray-600">
                  To empower students with the knowledge and skills in artificial intelligence and analytics through immersive, value-based education. We aim to drive societal engagement and innovation by developing impactful solutions that address real-world challenges and contribute to a sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="message-box">
            <h4 className="text-2xl font-bold text-center mb-6">Message from Dean</h4>
            <div className="mb-6">
              <img 
                src="https://via.placeholder.com/132x156"
                alt="Dr. Nava Subramaniam"
                className="mx-auto rounded-lg"
              />
              <div className="text-center mt-4 font-medium">
                Dr. Nava Subramaniam<br />
                Dean, Amrita School of Business, Coimbatore<br />
                Honorary Professor - RMIT University
              </div>
            </div>
            <p className="text-gray-600 text-justify">
              "I am thrilled to share my excitement and pride in the establishment of the Amrita Artificial Intelligence and Business Analytics Lab (AAIBA LAB). This lab represents our unwavering commitment to innovation and excellence in fostering the role and impacts of emergent technologies and the use of analytics in developing future leaders. It is a space where our students can immerse themselves in the transformative power of AI and business analytics, and I am continually inspired by their passion and creativity.
              <br /><br />
              The AAIBA Lab, conceptualized and mentored by Dr. Prashobhan Palakkeel, provides an unparalleled opportunity for our students to engage with real-world challenges and develop impactful analytical solutions. It is a multi-stakeholder supported initiative where industry specialists and experts in AI and faculty and scholars within and outside Amrita University collaborate to address rising global and sustainability challenges. I am confident that the skills and experiences gained through engaging with AAIBA lab will empower our students to become leaders in their fields, driving progress and positive change in society."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-8">Get in touch</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Location:</h4>
                <p className="text-gray-600">
                  AAIBA Lab<br />
                  Amrita School of Business<br />
                  Amrita University, Ettimadai,<br />
                  Coimbatore. Tamil Nadu 641112
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email:</h4>
                <p className="text-gray-600">info@aaibalab.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Call:</h4>
                <p className="text-gray-600">+91 9848114989</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.1423732126805!2d76.90187519999999!3d10.904658299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85d004f5bc901%3A0x2f2e61941ac7ee98!2sAAIBA%20LAB!5e1!3m2!1sen!2sin!4v1737438818560!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
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
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="p-20 text-center">Page Under Construction</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;