import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Brain, TrendingUp, GraduationCap, Zap, Search, BarChart3, Lightbulb, Rocket, Eye, FileText, CheckCircle, Loader2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import useHubSpot from '../hooks/useHubSpot';

const Index = () => {
  // HubSpot integration
  const { isSubmitting, isSuccess, error, submitForm, reset } = useHubSpot();
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    company: '',
    agreement: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.businessEmail || !formData.company) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (!formData.agreement) {
      alert('Please agree to receive communications');
      return;
    }

    // Split full name into first and last name
    const nameParts = formData.fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Submit to HubSpot
    await submitForm({
      firstName,
      lastName,
      email: formData.businessEmail,
      company: formData.company,
      message: 'Data Readiness Assessment Request',
    });

    // Reset form if successful
    if (isSuccess) {
      setFormData({
        fullName: '',
        businessEmail: '',
        company: '',
        agreement: false,
      });
    }
  };

  const highlights = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "25+ Years Fintech Experience",
      description: "Proven expertise with FactSet, Moody's Analytics, Bloomberg, and S&P Global"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Success Map Methodology",
      description: "Strategic blueprints that scale projects from concept to final product"
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI Adoption Specialists",
      description: "Comprehensive AI integration strategy for financial services organizations"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Measurable Results",
      description: "500+ clients served with $50M+ in cost savings and 85% AI adoption success rate"
    }
  ];

  const trustedAdvisors = [
    {
      name: "Salesfy",
      subtitle: "Sales Transformation",
      description: "Elena specializes in sales process optimization and CRM implementation, helping organizations accelerate revenue growth through data-driven sales strategies."
    },
    {
      name: "Avatar Buddy",
      subtitle: "Digital UX Experience",
      description: "Avatar Buddy is an expert in user experience design and digital product strategy, focusing on digital transformation initiatives for leading brands across retail and financial services."
    },
    {
      name: "Superposition",
      subtitle: "Project Alignment and Facilitation",
      description: "Sophia brings deep expertise in advanced analytics and machine learning, helping organizations unlock insights from complex data sets to drive strategic decision-making."
    },
    {
      name: "Neural Seek",
      subtitle: "Project Alignment and Facilitation", 
      description: "Sophia brings deep expertise in advanced analytics and machine learning, helping organizations unlock insights from complex data sets to drive strategic decision-making."
    },
    {
      name: "Working Live",
      subtitle: "Data Transformation",
      description: "Sophia brings deep expertise in advanced analytics and machine learning, helping organizations unlock insights from complex data sets to drive strategic decision-making."
    },
    {
      name: "XXX",
      subtitle: "Project Alignment and Facilitation",
      description: "Sophia brings deep expertise in advanced analytics and machine learning, helping organizations unlock insights from complex data sets to drive strategic decision-making."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discover",
      description: "We begin by deeply understanding your business challenges, goals, and the competitive landscape."
    },
    {
      step: "2", 
      title: "Analyze",
      description: "Our team conducts thorough data analysis to identify key insights and opportunity areas for your organization."
    },
    {
      step: "3",
      title: "Strategize", 
      description: "We develop customized strategies and actionable recommendations tailored to your specific needs."
    },
    {
      step: "4",
      title: "Implement",
      description: "We partner with you to execute strategies, measure outcomes, and ensure sustainable results."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Pioneering Data & AI Solutions Section */}
      <section className="relative py-48 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/public/lovable-uploads/banner index.png" 
            alt="Data Analytics Dashboard" 
            className="w-full h-full object-cover opacity-70"
            style={{ objectPosition: 'center 30%' }}
          />
          {/* Blue overlay to maintain text readability */}
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        </div>
        
        {/* Background Data Visualization Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400 rounded-full"></div>
          <div className="absolute top-20 right-20 w-48 h-48 border border-blue-300 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-blue-600 rounded-full opacity-30"></div>
          <div className="absolute bottom-20 right-1/3 w-36 h-36 border-2 border-blue-500 rounded-full"></div>
          
          {/* Data Grid Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/5 to-transparent"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Floating Data Elements */}
          <div className="absolute top-1/4 left-1/4 text-blue-400 font-mono text-sm opacity-50">
            <div>Analytics Dashboard</div>
            <div className="mt-2">█████████░ 78%</div>
          </div>
          <div className="absolute top-1/3 right-1/4 text-blue-300 font-mono text-sm opacity-50">
            <div>ML Model Training</div>
            <div className="mt-2">▲ 94.2% Accuracy</div>
          </div>
          <div className="absolute bottom-1/3 left-1/6 text-blue-400 font-mono text-sm opacity-50">
            <div>Data Processing</div>
            <div className="mt-2">◆ 2.3M Records/sec</div>
          </div>
        </div>
        
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-4xl">
                          <h2 className="heading-hero text-white mb-6">
              Pioneering Data & AI
              <span className="block text-white">Solutions</span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-slate-200 max-w-3xl">
              Empowering the Data-Driven Future through Scalable AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center shadow-lg"
              >
                Get Started
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Strategy to Shipped Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:grid-rows-1">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="heading-primary mb-6">
                From strategy to shipped for<br/>mid-market financial services
            </h2>
              <p className="text-body-large mb-8">
                We help alternative asset managers, PE-backed RIA platforms & large 
                enterprise RIAs, and commercial real estate turn AI/data investments 
                into secure, production-ready solutions and measurable results.
              </p>
              
              <div className="mt-8">
                <h3 className="heading-secondary mb-6">
                  At-a-Glance
                </h3>
                <p className="text-body-large mb-8">
                  Sapient Advisors is a U.S.-based, women-led consultancy specializing in data, AI, and product & UX strategy, execution, and monetization for mid-market financial services.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-7 h-7 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                    <div>
                      <h4 className="text-blue-900 font-semibold mb-2 text-lg">What we do:</h4>
                      <p className="text-slate-700 text-base leading-relaxed">
                        Develop comprehensive data strategies, Internal AI solutions, workflow automation, data productization.
                      </p>
                    </div>
                </div>
                
                  <div className="flex items-start space-x-4">
                    <div className="w-7 h-7 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                    <div>
                      <h4 className="text-blue-900 font-semibold mb-2 text-lg">How we do it:</h4>
                      <p className="text-slate-700 text-base leading-relaxed">
                        Rapidly implement solutions that transform ideas and raw data into actionable business intelligence through Design Sprints, Strategy workshops, and roadmap development.
                      </p>
                    </div>
                </div>
                
                  <div className="flex items-start space-x-4">
                    <div className="w-7 h-7 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                    <div>
                      <h4 className="text-blue-900 font-semibold mb-2 text-lg">Why it works:</h4>
                      <p className="text-slate-700 text-base leading-relaxed">
                        Faster time-to-value, lower risk, and outcomes your ops can run on day one. We support regulated industries (e.g., law) and select startups by fit.
            </p>
          </div>
                </div>
              </div>
              
                <div className="pt-6">
                <Link 
                  to="/services" 
                  className="btn-primary inline-flex items-center"
                >
                  Explore Our Services
                </Link>
                </div>
              </div>
            </div>
            
            {/* Right Content - Form and Testimonial */}
            <div className="flex flex-col space-y-8 h-full">
              {/* Form */}
              <div className="bg-white px-6 pt-6 pb-6 rounded-lg shadow-lg">
              <h3 className="heading-secondary mb-3">
                Are you ready for AI?
              </h3>
                              <p className="text-body-small mb-4">
                Download our simple guide to evaluating your organization's data 
                maturity and identifying opportunities for AI Implementation.
              </p>
              
              {/* Success Message */}
              {isSuccess && (
                <div className="mb-3 p-2 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-green-800 text-xs">
                    ✅ Thank you! Your request has been submitted successfully.
                  </div>
                  <div className="text-green-700 text-xs mt-1">
                    We'll send you the Data Readiness Assessment shortly.
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded-lg">
                  <div className="text-red-800 text-xs">
                    ❌ Error: {error}
                  </div>
                  <button
                    onClick={reset}
                    className="text-red-600 text-xs mt-1 hover:text-red-800"
                  >
                    Try again
                  </button>
                </div>
              )}

              <form className="space-y-2" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="fullName" className="block text-label mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none disabled:bg-gray-50 disabled:cursor-not-allowed text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="businessEmail" className="block text-label mb-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none disabled:bg-gray-50 disabled:cursor-not-allowed text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-label mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none disabled:bg-gray-50 disabled:cursor-not-allowed text-sm"
                  />
                </div>
                
                <div className="flex items-start space-x-2 pt-1">
                  <input
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5 disabled:cursor-not-allowed"
                  />
                                      <label htmlFor="agreement" className="text-label">
                    I agree to receive communications from Sapient Advisors
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    'Download Now'
                  )}
                </button>
              </form>
            </div>
              
              {/* Testimonial below form */}
              <div className="flex-1">
                <div className="text-left mb-6">
                  <h3 className="heading-secondary mb-2">
                    Trusted by Industry Leaders
                  </h3>
                  <p className="text-sm text-slate-700">
                    We've helped organizations across industries transform their approach to data and analytics.
            </p>
          </div>
          
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-32 bg-blue-900 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <blockquote className="text-base text-slate-700 mb-3 italic leading-relaxed">
                      "Working with you both has been one of the highest-leverage decisions we've made so far. You jumped in, understood our product architecture, user dynamics, and go-to-market goals faster than anyone—and helped us identify and close critical gaps..."
                    </blockquote>
                    <blockquote className="text-base text-slate-700 mb-0 italic leading-relaxed">
                      "Your ability to cut through complexity, align the team, and keep momentum high made a real difference. As we head into the scaling phase, I'm genuinely excited to continue building with you. Your partnership isn't just valuable—it's foundational."
                    </blockquote>
                    
                    <div className="mt-6">
                      <div className="text-name text-sm">Yurek Vazquez</div>
                      <div className="text-slate-600 text-sm">Chief Executive Officer, Yurek.com</div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-primary mb-4">
              Success Stories
            </h2>
            <p className="text-hero-subtitle mx-auto">
              See how our clients have transformed their data operations and achieved remarkable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:grid-rows-1">
            {/* Project Raven */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-video bg-gray-900 relative overflow-hidden">
                <img
                  src="/public/lovable-uploads/proyect raven index.png"
                  alt="Data Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="heading-tertiary mb-3">Project Raven</h3>
                <p className="text-slate-700 mb-4 text-sm flex-1">
                  Helped a Fortune 500 financial services company implement a comprehensive data governance and collection using AI and NLP, resulting in improved data quality.
                </p>
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors text-sm mt-auto"
                >
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Alexa "Let's Chat" */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-video bg-gray-900 relative overflow-hidden">
                <img
                  src="/public/lovable-uploads/alexa index.png"
                  alt="Alexa Let's Chat Device"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="heading-tertiary mb-3">Alexa "Let's Chat"</h3>
                <p className="text-slate-700 mb-4 text-sm flex-1">
                  Developed a custom analytics solution for a tech giant, enabling real-time insights and driving a 25% increase in customer engagement.
                </p>
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors text-sm mt-auto"
                >
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* CVX */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-video bg-gray-900 relative overflow-hidden">
                <img
                  src="/public/lovable-uploads/cvx index.png"
                  alt="CVX Credit Risk Tool"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="heading-tertiary mb-3">CVX</h3>
                <p className="text-slate-700 mb-4 text-sm flex-1">
                  Transformed credit risk tool for a global firm through design thinking, rebuilding a scalable, secure platform to improve decision-making.
                </p>
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors text-sm mt-auto"
                >
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/case-studies" 
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Kick-Start Your AI Journey Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Kick-Start Your AI Journey
          </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              In one 30-minute call, surface challenges, reveal quick wins, and<br/>map the fastest path to ROI.
            </p>
            
            <div className="flex justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
            Book Your Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-primary mb-4">
              Latest Insights
            </h2>
            <p className="text-hero-subtitle mx-auto">
              Stay updated with the latest trends and best practices in data strategy and analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:grid-rows-1">
                          {/* The Future of AI in Data Analytics */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video bg-gray-900 relative overflow-hidden">
                  <img
                    src="/public/lovable-uploads/the future of ai index.png"
                    alt="The Future of AI in Data Analytics"
                    className="w-full h-full object-cover"
                  />
                </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-category mb-2">Future Sights</p>
                <h3 className="heading-tertiary mb-3">
                  The Future of AI in Data Analytics
                </h3>
                <p className="text-slate-700 mb-4 text-sm flex-1">
                  Explore how artificial intelligence is revolutionizing the way organizations analyze and interpret complex data sets.
                </p>
                <Link 
                  to="/news" 
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors text-sm mt-auto"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
          </div>
        </div>

                          {/* Building Effective Data Governance */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src="/public/lovable-uploads/building effective index.png"
                    alt="Building Effective Data Governance"
                    className="w-full h-full object-cover"
                  />
                </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-category mb-2">Webinar</p>
                <h3 className="heading-tertiary mb-3">
                  Building Effective Data Governance
                </h3>
                <p className="text-slate-700 mb-4 text-sm flex-1">
                  Join our experts for a comprehensive discussion on implementing robust data governance frameworks in your organization.
                </p>
                <Link 
                  to="/news" 
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors text-sm mt-auto"
                >
                  Watch recording
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
          </div>
          
                          {/* Data Security in the Cloud Era */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video bg-slate-900 relative overflow-hidden">
                  <img
                    src="/public/lovable-uploads/data security index.png"
                    alt="Data Security in the Cloud Era"
                    className="w-full h-full object-cover"
                  />
                </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-category mb-2">Future Sights</p>
                <h3 className="heading-tertiary mb-3">
                  Data Security in the Cloud Era
                </h3>
                <p className="text-slate-700 mb-4 text-sm flex-1">
                  Discover essential strategies for maintaining data security and compliance when leveraging cloud-based analytics platforms.
                </p>
                <Link 
                  to="/news" 
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors text-sm mt-auto"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/news" 
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center"
            >
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;