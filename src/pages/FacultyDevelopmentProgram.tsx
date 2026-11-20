import React, { useState } from 'react';
import { 
  Calendar, MapPin, Users, Award, BookOpen, CheckCircle, 
  Download, Mail, Phone, ExternalLink, ArrowRight, FileText, Check,
  CreditCard, Upload, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Google Apps Script Web App URL connected to Google Sheets & Drive
const GOOGLE_SCRIPT_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbyIiEuH_RI-2tZdZCV1I24U2y6pw8a7jFVE64YL7DYK-e_e1YMRJCAIJxJAUMAz3KzV9Q/exec';

export const FacultyDevelopmentProgram: React.FC = () => {
  const brochurePdfUrl = '/BR_FDP_Brochure.pdf';
  const payuPaymentUrl = 'https://u.payu.in/PAYUMN/HJuAR3lzJUPT';

  // Registration Form State
  const [formData, setFormData] = useState({
    fullName: '',
    category: 'Academician / Faculty',
    gender: 'Female',
    email: '',
    phone: '',
    organization: '',
    designation: '',
    city: '',
    accommodation: 'No',
    byodConfirmed: true
  });

  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);
  const [screenshotName, setScreenshotName] = useState<string>('');
  const [screenshotBase64, setScreenshotBase64] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5MB limit. Please upload an image under 5MB.");
        e.target.value = '';
        return;
      }
      setScreenshotFile(file);
      setScreenshotName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setScreenshotFile(null);
      setScreenshotName('');
      setScreenshotBase64('');
    }
  };

  const isFormValid = Boolean(
    formData.fullName.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.organization.trim() &&
    formData.designation.trim() &&
    formData.city.trim() &&
    screenshotBase64 &&
    formData.byodConfirmed
  );

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!screenshotBase64) {
      alert("Please upload the payment screenshot before submitting.");
      return;
    }
    setIsSubmitting(true);
    const regId = `FDP-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegistrationId(regId);

    const submissionPayload = {
      registrationId: regId,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      fullName: formData.fullName,
      category: formData.category,
      gender: formData.gender,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization,
      designation: formData.designation,
      city: formData.city,
      accommodation: formData.accommodation,
      byodConfirmed: formData.byodConfirmed ? 'Yes' : 'No',
      fileName: screenshotName,
      fileData: screenshotBase64
    };

    try {
      if (GOOGLE_SCRIPT_WEBAPP_URL) {
        await fetch(GOOGLE_SCRIPT_WEBAPP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(submissionPayload)
        });
      } else {
        console.log('Submission payload (Configure GOOGLE_SCRIPT_WEBAPP_URL to persist to Google Sheets):', submissionPayload);
        await new Promise(resolve => setTimeout(resolve, 800));
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting registration:', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const speakers = [
    { name: "Mr. Ajith Sankaran", role: "Executive Vice President", company: "Course5 Intelligence (C5i)" },
    { name: "Mr. Vivek Shetty", role: "Vice President", company: "Course5 Intelligence (C5i)" },
    { name: "Mr. G. Prem Prasad & Mr. V. Srinivasa Reddy", role: "Analytics Specialists", company: "Course5 Intelligence (C5i)" },
    { name: "Mr. Vishnu Kurup M. K.", role: "Product Manager", company: "Tiger Analytics" },
    { name: "Mr. Sreejith M. T.", role: "Assistant Manager", company: "EY (Ernst & Young)" },
    { name: "Mr. Sachin Muraleedharan Varriar", role: "CEO", company: "Stack Mount India Analytical Solutions" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header / Hero Section */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-100 text-center md:text-left">
          <div className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Two-Day Faculty Development Program
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Business Research Automation with AI and Generative Models
          </h1>
          
          <p className="text-lg text-gray-600 mt-3 font-medium">
            From Research Question to Decision Intelligence
          </p>
          
          <p className="text-sm text-gray-500 mt-1">
            Organized by Amrita Artificial Intelligence & Business Analytics Lab (AAIBA Lab), Amrita School of Business • In Association with Course5 Intelligence (C5i)
          </p>

          {/* Quick info bar */}
          <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span><strong>Date:</strong> 10–11 December 2026</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span><strong>Venue:</strong> AAIBA Lab, ASB Coimbatore</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Award className="w-5 h-5 text-blue-600" />
              <span><strong>Early Bird Fee:</strong> ₹1,750 (till 30 Nov)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <a
              href="#register"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow transition-colors flex items-center gap-2 text-sm"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={brochurePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 font-semibold rounded-md transition-colors flex items-center gap-2 text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View Brochure (PDF)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a
              href={brochurePdfUrl}
              download="BR_FDP_Brochure.pdf"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-md transition-colors flex items-center gap-2 text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Brochure</span>
            </a>
          </div>
        </div>

        {/* About Programme & Key Highlights */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Programme</h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            This intensive two-day Faculty Development Programme, jointly developed by Amrita School of Business and Course5 Intelligence (C5i), introduces participants to integrated, AI-enabled research workflows. The program demonstrates how business problems can be translated into structured research designs, supported by automated data collection, evidence management, analytical tools, and decision-oriented insights.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mt-3">
            Rather than treating generative AI merely as a tool for writing and content generation, the FDP explores its role in research planning, evidence synthesis, analytical reasoning, and insight generation, while maintaining academic rigor and reproducibility.
          </p>

          {/* 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 text-sm mb-1">Research Architecture</h3>
              <p className="text-xs text-gray-600">Design integrated, AI-enabled research workflows from question to decision.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 text-sm mb-1">End-to-End Automation</h3>
              <p className="text-xs text-gray-600">Automate evidence collection, APIs, web extraction, and quality screening.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 text-sm mb-1">AI-Powered Analytics</h3>
              <p className="text-xs text-gray-600">Apply LLMs, semantic retrieval (RAG), and agentic workflows to research.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="font-bold text-gray-900 text-sm mb-1">Industry Pedagogy</h3>
              <p className="text-xs text-gray-600">Translate enterprise practices into MBA teaching and capstone projects.</p>
            </div>
          </div>
        </div>

        {/* Schedule Grid: Day 1 & Day 2 */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Programme Schedule</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Day 1 */}
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 text-base">Day 1: Build the Research Workflow</h3>
                <span className="text-xs text-blue-700">10 December 2026</span>
              </div>
              <ul className="space-y-3 text-xs md:text-sm text-gray-700">
                <li className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <span className="font-semibold text-blue-600 block">09:00 – 09:30</span>
                  <strong className="text-gray-900">Inaugural Session & Program Orientation</strong>
                  <p className="text-gray-500 text-xs mt-0.5">Opening address by ASB leadership and C5i executives</p>
                </li>
                <li className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <span className="font-semibold text-blue-600 block">09:30 – 10:30</span>
                  <strong className="text-gray-900">Session 1 • Research Value Chain</strong>
                  <p className="text-gray-500 text-xs mt-0.5">Translating business problems into structured research questions</p>
                </li>
                <li className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <span className="font-semibold text-blue-600 block">10:45 – 11:45</span>
                  <strong className="text-gray-900">Session 2 • Research Design</strong>
                  <p className="text-gray-500 text-xs mt-0.5">AI-assisted questionnaire development and research planning</p>
                </li>
                <li className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <span className="font-semibold text-blue-600 block">11:45 – 13:15</span>
                  <strong className="text-gray-900">Session 3 • Data Collection</strong>
                  <p className="text-gray-500 text-xs mt-0.5">Automated data acquisition through APIs and web extraction</p>
                </li>
                <li className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <span className="font-semibold text-blue-600 block">14:15 – 15:30</span>
                  <strong className="text-gray-900">Session 4 • Data Processing & Quality</strong>
                  <p className="text-gray-500 text-xs mt-0.5">Automated cleaning and AI analytical preparation</p>
                </li>
                <li className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <span className="font-semibold text-blue-600 block">15:45 – 17:00</span>
                  <strong className="text-gray-900">Session 5 • Research Automation Lab</strong>
                  <p className="text-gray-500 text-xs mt-0.5">Guided hands-on lab: building an AI-enabled research workflow</p>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-900 text-base">Day 2: Generate, Validate & Apply Insights</h3>
                <span className="text-xs text-blue-700">11 December 2026</span>
              </div>
              <ul className="space-y-3 text-xs md:text-sm text-gray-700">
                <li className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <span className="font-semibold text-blue-600 block">09:00 – 10:30</span>
                  <strong className="text-gray-900">Session 6 • Insight Generation</strong>
                  <p className="text-gray-500 text-xs mt-0.5">LLM-powered insight generation, evidence synthesis, and RAG</p>
                </li>
                <li className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <span className="font-semibold text-blue-600 block">10:45 – 11:45</span>
                  <strong className="text-gray-900">Session 7 • Storage & Retrieval Systems</strong>
                  <p className="text-gray-500 text-xs mt-0.5">Research repositories, semantic retrieval, and vector storage</p>
                </li>
                <li className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <span className="font-semibold text-blue-600 block">11:45 – 12:45</span>
                  <strong className="text-gray-900">Session 8 • Insight Activation</strong>
                  <p className="text-gray-500 text-xs mt-0.5">Agentic AI workflows for translating insights into decisions</p>
                </li>
                <li className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <span className="font-semibold text-blue-600 block">14:00 – 15:30</span>
                  <strong className="text-gray-900">Session 9 • Research Validation Lab</strong>
                  <p className="text-gray-500 text-xs mt-0.5">Guided lab: hallucination detection, verification, and bias check</p>
                </li>
                <li className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <span className="font-semibold text-blue-600 block">15:45 – 16:30</span>
                  <strong className="text-gray-900">Faculty Forum: Pedagogy & Supervision</strong>
                  <p className="text-gray-500 text-xs mt-0.5">Integrating AI research workflows into MBA courses</p>
                </li>
                <li className="p-3 bg-gray-50 rounded-md border border-gray-100">
                  <span className="font-semibold text-blue-600 block">16:45 – 17:00</span>
                  <strong className="text-gray-900">Valedictory & Certification</strong>
                  <p className="text-gray-500 text-xs mt-0.5">Distribution of certificates and closing remarks</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resource Persons */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resource Persons & Industry Experts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakers.map((s, idx) => (
              <div key={idx} className="p-5 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 text-base">{s.name}</h3>
                <p className="text-blue-600 font-medium text-xs mt-1">{s.role}</p>
                <p className="text-gray-500 text-xs mt-0.5">{s.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brochure Card with View & Download Only */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-lg flex-shrink-0">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Official Programme Brochure (PDF)</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Download or view the official circular detailing session breakdown, faculty info, and prerequisites.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              href={brochurePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors text-xs sm:text-sm flex items-center justify-center gap-1.5"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View in New Tab</span>
            </a>
            <a
              href={brochurePdfUrl}
              download="BR_FDP_Brochure.pdf"
              className="flex-1 sm:flex-none px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-md transition-colors text-xs sm:text-sm flex items-center justify-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Registration Section */}
        <div id="register" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Registration Info */}
          <div className="lg:col-span-5 bg-white p-8 rounded-xl shadow-md border border-gray-100 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Participation & Fees</h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">Early Bird Registration</span>
                <div className="text-3xl font-extrabold text-gray-900 mt-1">₹1,750</div>
                <p className="text-xs text-gray-600 mt-1">For registrations completed on or before <strong>30 November 2026</strong>.</p>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                <span className="text-xs font-semibold text-gray-500 uppercase">Regular Registration</span>
                <div className="text-2xl font-bold text-gray-800 mt-1">₹2,000</div>
                <p className="text-xs text-gray-500 mt-1">For registrations after 30 November 2026.</p>
              </div>
            </div>

            <div className="text-xs text-gray-600 space-y-2 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Inclusive of GST, course kits, lunch, and refreshments for both days.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Bring Your Own Device (BYOD): Laptop required for hands-on labs.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 text-xs text-gray-600 space-y-1">
              <strong className="text-gray-900 block text-sm">Programme Coordinator:</strong>
              <p className="font-semibold text-gray-800">Dr. Prashobhan Palakkeel</p>
              <p>Assistant Professor & Area Chair, AAIBA Lab</p>
              <div className="pt-2 space-y-1">
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <a href="mailto:p_prashobhan@cb.amrita.edu" className="text-blue-600 hover:underline">
                    p_prashobhan@cb.amrita.edu
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>+91 94496 12995 / +91 95381 11135</span>
                </p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-xl shadow-md border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Registration & Payment Received</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong> ({formData.category}). Your registration reference is <strong>{registrationId}</strong>.
                  Your payment receipt has been submitted. You will receive an email at <strong>{formData.email}</strong> after the payment verification by the team.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg text-left text-xs text-gray-600 max-w-md mx-auto space-y-1">
                  <p><strong>Organization:</strong> {formData.organization || 'N/A'}</p>
                  <p><strong>Designation:</strong> {formData.designation || 'N/A'}</p>
                  <p><strong>City:</strong> {formData.city || 'N/A'}</p>
                  <p><strong>Accommodation Required:</strong> {formData.accommodation}</p>
                  <p><strong>Payment Screenshot:</strong> {screenshotName || 'Uploaded'}</p>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setScreenshotFile(null);
                    setScreenshotName('');
                    setScreenshotBase64('');
                  }}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md text-xs font-semibold hover:bg-blue-700"
                >
                  Register Another Participant
                </button>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Registration Form</h3>
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                {/* Participant Category & Gender */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Participant Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 bg-white"
                    >
                      <option value="Academician / Faculty">Academician / Faculty</option>
                      <option value="Research Scholar">Research Scholar</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 bg-white"
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Email ID & Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email ID *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@institution.edu"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                {/* Organization Name & Designation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Organization Name *</label>
                    <input
                      type="text"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="e.g. Amrita Vishwa Vidyapeetham"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Designation *</label>
                    <input
                      type="text"
                      name="designation"
                      required
                      value={formData.designation}
                      onChange={handleInputChange}
                      placeholder="e.g. Assistant Professor / Research Scholar"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Coimbatore"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                {/* Accommodation Requirement */}
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg space-y-2">
                  <label className="block text-xs font-semibold text-gray-800">
                    Do you require accommodation? *
                  </label>
                  <div className="flex items-center gap-6 text-sm text-gray-700">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="accommodation"
                        value="No"
                        checked={formData.accommodation === 'No'}
                        onChange={handleInputChange}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>No</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="accommodation"
                        value="Yes"
                        checked={formData.accommodation === 'Yes'}
                        onChange={handleInputChange}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>Yes</span>
                    </label>
                  </div>
                  <p className="text-[11px] text-gray-500 italic leading-snug">
                    * We will try to arrange accommodation at the university guest house annex or hostel subject to availability. Additional charges will apply.
                  </p>
                </div>

                {/* Payment & Screenshot Upload Section */}
                <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-lg space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-blue-600" />
                        <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                          Step 1: Registration Fee Payment (₹1,750)
                        </h4>
                      </div>
                      <p className="text-[12px] text-gray-600 mt-0.5">
                        Click <strong>Pay Now</strong> to complete payment securely on PayU.
                      </p>
                    </div>

                    <a
                      href={payuPaymentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-md shadow-sm transition shrink-0"
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      Pay Now
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="pt-3 border-t border-blue-100">
                    <label className="block text-xs font-semibold text-gray-800 mb-1">
                      Step 2: Upload Payment Screenshot * <span className="font-normal text-gray-500">(Required to enable Submit)</span>
                    </label>
                    <div className="mt-1 flex items-center gap-3">
                      <input
                        type="file"
                        id="paymentScreenshot"
                        accept="image/*,.pdf"
                        required
                        onChange={handleFileChange}
                        className="text-xs text-gray-600 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                      />
                    </div>
                    {screenshotName ? (
                      <p className="text-xs text-emerald-700 font-medium mt-1.5 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        Screenshot selected: <span className="underline">{screenshotName}</span>
                      </p>
                    ) : (
                      <p className="text-[11px] text-gray-500 mt-1">
                        Upload PNG, JPG, or PDF receipt from PayU or your banking app (Max 5MB).
                      </p>
                    )}
                  </div>
                </div>

                {/* BYOD Checkbox */}
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="byod"
                    name="byodConfirmed"
                    checked={formData.byodConfirmed}
                    onChange={handleInputChange}
                    required
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="byod" className="text-xs text-gray-600 cursor-pointer">
                    I confirm that I will bring a laptop (BYOD) for hands-on sessions.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="space-y-2 pt-2">
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Submitting Registration...
                      </>
                    ) : (
                      "Submit Registration (₹1,750)"
                    )}
                  </button>

                  {!isFormValid && (
                    <p className="text-[11px] text-center text-amber-700 bg-amber-50 py-1.5 px-3 rounded border border-amber-200 flex items-center justify-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      {!screenshotBase64 
                        ? "Please complete payment via 'Pay Now' and upload the screenshot to enable submission."
                        : "Please fill in all required fields and confirm laptop BYOD."}
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default FacultyDevelopmentProgram;
