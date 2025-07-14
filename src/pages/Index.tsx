import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Brain, TrendingUp, GraduationCap, Zap, Search, BarChart3, Lightbulb, Rocket, Eye, FileText, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
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
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Background Data Visualization Elements */}
        <div className="absolute inset-0 opacity-20">
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pioneering Data & AI
              <span className="block text-blue-400">Solutions</span>
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
      </section>

      {/* The World is Evolving Fast Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                The world is evolving fast...
              </h2>
              <p className="text-lg text-slate-700 mb-8 font-medium">
                Companies everywhere are investing in data, AI, and talent development, 
                which are areas where we bring deep, ready-to-implement expertise. 
                Our goal is to be a trusted partner, connecting global innovation with 
                local impact.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium">
                    Comprehensive data assessment and strategy development
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium">
                    Advanced analytics and visualization solutions
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium">
                    Implementation of data governance frameworks
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium">
                    Customized solutions for industry-specific challenges
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <Link 
                  to="/services" 
                  className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
            
            {/* Right Content - Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-black text-blue-900 mb-4">
                Free Data Readiness Assessment
              </h3>
              <p className="text-slate-700 mb-6 font-medium">
                Download our simple guide to evaluating your organization's data 
                maturity and identifying opportunities for AI implementation.
              </p>
              
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission here
                console.log('Form submitted');
              }}>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-slate-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="businessEmail" className="block text-sm font-semibold text-slate-800 mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-800 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                
                <div className="flex items-start space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="agreement"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5"
                  />
                  <label htmlFor="agreement" className="text-sm text-slate-700 font-medium">
                    I agree to receive communications from Sapient Advisors
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors mt-6"
                >
                  Download Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto font-medium">
              We deliver tailored solutions across multiple industries, helping organizations harness the 
              full potential of their data assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data Strategy */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-black text-blue-900 mb-4">Data Strategy</h3>
              <p className="text-slate-700 mb-6 font-medium">
                Develop comprehensive data strategies aligned with your business objectives to maximize the value of your information assets.
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Analytics Implementation */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-black text-blue-900 mb-4">Analytics Implementation</h3>
              <p className="text-slate-700 mb-6 font-medium">
                Design and implement advanced analytics solutions that transform raw data into actionable business intelligence.
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Data Governance */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-black text-blue-900 mb-4">Data Governance</h3>
              <p className="text-slate-700 mb-6 font-medium">
                Establish robust governance frameworks to ensure data quality, security, and compliance with regulatory requirements.
              </p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto font-medium">
              See how our clients have transformed their data operations and achieved remarkable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Project Raven */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-900 relative overflow-hidden">
                <img
                  src="/public/lovable-uploads/34375465-fae0-4a23-a4b0-e61c4d3081ef.jpg"
                  alt="Data Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-blue-900 mb-4">Project Raven</h3>
                <p className="text-slate-700 mb-6 font-medium">
                  Helped a Fortune 500 financial services company implement a comprehensive data governance framework, resulting in 40% improved data quality.
                </p>
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Alexa "Let's Chat" */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-900 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-blue-900 mb-4">Alexa "Let's Chat"</h3>
                <p className="text-slate-700 mb-6 font-medium">
                  Developed a custom analytics solution for a tech firm, enabling real-time insights and driving a 25% increase in customer engagement.
                </p>
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors"
                >
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* CVX */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-900 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 p-4">
                    <div className="bg-blue-500 h-8 rounded"></div>
                    <div className="bg-green-500 h-12 rounded"></div>
                    <div className="bg-orange-500 h-6 rounded"></div>
                    <div className="bg-purple-500 h-10 rounded"></div>
                    <div className="bg-yellow-500 h-8 rounded"></div>
                    <div className="bg-red-500 h-14 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-blue-900 mb-4">CVX</h3>
                <p className="text-slate-700 mb-6 font-medium">
                  Transformed credit risk tool for a global firm through design thinking, reducing default rates by 15% and improving decision accuracy.
                </p>
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-800 transition-colors"
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
              className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center text-lg"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Data Strategy Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule a free 30-minute consultation with our experts to discuss your specific challenges and opportunities.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Book Your Consultation
          </button>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-blue-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest trends and best practices in data strategy and analytics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Future of AI in Data Analytics */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-40 h-32 flex items-center justify-center">
                    <BarChart3 className="h-20 w-20 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 font-semibold mb-2">Future Sights</p>
                <h3 className="text-xl font-black text-blue-900 mb-3">
                  The Future of AI in Data Analytics
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore how artificial intelligence is revolutionizing the way organizations analyze and interpret complex data sets.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Read more →
                </button>
              </div>
            </div>

            {/* Building Effective Data Governance */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-gray-600 to-blue-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-40 h-32 flex items-center justify-center">
                    <Users className="h-20 w-20 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 font-semibold mb-2">Webinar</p>
                <h3 className="text-xl font-black text-blue-900 mb-3">
                  Building Effective Data Governance
                </h3>
                <p className="text-gray-600 mb-4">
                  Join our experts for a comprehensive discussion on implementing robust data governance frameworks in your organization.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Watch recording →
                </button>
              </div>
            </div>

            {/* Data Security in the Cloud Era */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-600 to-blue-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-40 h-32 flex items-center justify-center">
                    <Eye className="h-20 w-20 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 font-semibold mb-2">Future Sights</p>
                <h3 className="text-xl font-black text-blue-900 mb-3">
                  Data Security in the Cloud Era
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover essential strategies for maintaining data security and compliance when leveraging cloud-based analytics platforms.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Read more →
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              View All Insights
            </button>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Trusted by Industry Leaders */}
            <div>
              <h2 className="text-3xl font-black text-blue-900 mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-600 mb-8">
                We've helped organizations across industries transform their approach to data and analytics.
              </p>
              
              {/* Company Logos Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {/* Row 1 */}
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
                  <div className="text-blue-600 text-2xl font-bold">PayPal</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
                  <div className="text-teal-600 text-2xl font-bold">25</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
                  <div className="text-orange-600 text-2xl font-bold">📚</div>
                </div>
                
                {/* Row 2 */}
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
                  <div className="text-blue-400 text-2xl font-bold">🏢</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
                  <div className="text-teal-500 text-2xl font-bold">Ion</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-20">
                  <div className="text-purple-600 text-2xl font-bold">🎵</div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                <div className="text-blue-600 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-4 italic">
                  "Sapient Advisors transformed our approach to data analytics. Their strategic guidance and technical expertise helped us implement solutions that have significantly improved our decision-making capabilities and operational efficiency."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-gray-600 font-bold">SJ</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Chief Technology Officer, Credit Vision</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Our Locations */}
            <div>
              <h2 className="text-3xl font-black text-blue-900 mb-8">
                Our Locations
              </h2>
              
              <div className="space-y-6 mb-8">
                {/* Miami */}
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <p className="font-black text-blue-900">Miami</p>
                    <p className="text-gray-600">1200 Brickell Avenue, Suite 1950</p>
                    <p className="text-gray-600">Miami, FL 33131</p>
                  </div>
                </div>
                
                {/* Houston */}
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <p className="font-black text-blue-900">Houston</p>
                    <p className="text-gray-600">2000 West Sam Houston Parkway, Suite 200</p>
                    <p className="text-gray-600">Houston, TX 77042</p>
                  </div>
                </div>
                
                {/* NYC Metro */}
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4"></div>
                  <div>
                    <p className="font-black text-blue-900">NYC Metro</p>
                    <p className="text-gray-600">340 Park Avenue, 15th Floor</p>
                    <p className="text-gray-600">New York, NY 10022</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p>Location Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;