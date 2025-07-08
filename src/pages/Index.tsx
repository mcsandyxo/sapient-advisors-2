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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fintech & AI Innovation
              <span className="text-blue-400"> Experts</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200">
              25+ years of experience bridging strategic vision with operational execution. 
              We specialize in AI adoption, fintech education, and data-driven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Explore Our Expertise
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Sapient Advisors?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine deep fintech industry expertise with proven AI adoption methodologies 
              to deliver transformational results for financial services organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-xl text-slate-600">
              Tailored solutions for fintech and AI transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-blue-600 text-white p-8 rounded-lg hover:bg-blue-700 transition-colors h-full">
                <div className="mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Success Map</h3>
                <p className="text-blue-100 mb-6">
                  Strategic blueprints to scale projects from concept to final product using agile and lean methodologies.
                </p>
                <Link to="/services" className="text-white font-semibold group-hover:text-blue-100 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-slate-900 text-white p-8 rounded-lg hover:bg-slate-800 transition-colors h-full">
                <div className="mb-4">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Adoption</h3>
                <p className="text-slate-200 mb-6">
                  Comprehensive AI integration strategy for financial services, from readiness assessment to deployment.
                </p>
                <Link to="/services" className="text-blue-400 font-semibold group-hover:text-blue-300 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-red-700 text-white p-8 rounded-lg hover:bg-red-800 transition-colors h-full">
                <div className="mb-4">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fintech Education</h3>
                <p className="text-red-100 mb-6">
                  Specialized training and workshops for financial technology adoption and AI-driven product development.
                </p>
                <Link to="/services" className="text-red-200 font-semibold group-hover:text-red-100 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group">
              <div className="bg-green-700 text-white p-8 rounded-lg hover:bg-green-800 transition-colors h-full">
                <div className="mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fractional Services</h3>
                <p className="text-green-100 mb-6">
                  Flexible consulting and advisory services including strategic consulting and executive training.
                </p>
                <Link to="/services" className="text-green-200 font-semibold group-hover:text-green-100 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Advisors Network */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted Advisors Network
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our extended network of industry experts brings specialized knowledge and capabilities to complement our core team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustedAdvisors.map((advisor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{advisor.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{advisor.subtitle}</p>
                <p className="text-slate-600">{advisor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-600">
              Our team brings experience from the world's leading financial technology companies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">FactSet</h3>
              <p className="text-sm text-blue-600">Financial Data Platforms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Moody's Analytics</h3>
              <p className="text-sm text-blue-600">Risk Assessment AI</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bloomberg</h3>
              <p className="text-sm text-blue-600">Market Intelligence</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-2">S&P Global</h3>
              <p className="text-sm text-blue-600">Analytics Platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Explore how our expertise can help your organization achieve sustainable growth and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Explore Our Services
            </Link>
            <Link 
              to="/case-studies" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Case Studies
            </Link>
            <Link 
              to="/news" 
              className="bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
            >
              Read Our Insights
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your AI Adoption?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our fintech expertise can transform your organization
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Schedule Your Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;