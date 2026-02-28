import Header from '../components/Header';
import Footer from '../components/Footer';
import { TrendingUp, Users, DollarSign, Clock, Brain, Shield, Zap } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "FactSet Data Platform Optimization",
      client: "FactSet Research Systems",
      industry: "Financial Data Services",
      challenge: "Complex financial data processing workflows requiring optimization for real-time market analysis and improved data delivery performance",
      solution: "Advanced analytics implementation, data architecture redesign, and performance optimization using agile methodologies and lean frameworks",
      results: [
        { icon: <Zap className="h-5 w-5" />, metric: "40%", label: "Data Processing Speed Improvement" },
        { icon: <TrendingUp className="h-5 w-5" />, metric: "25%", label: "System Efficiency Increase" },
        { icon: <Users className="h-5 w-5" />, metric: "15%", label: "User Experience Enhancement" }
      ],
      color: "bg-blue-600"
    },
    {
      title: "Moody's Analytics AI Enhancement",
      client: "Moody's Analytics",
      industry: "Risk Assessment & Analytics",
      challenge: "Manual risk assessment processes limiting scalability and speed of credit risk analysis for financial institutions",
      solution: "Machine learning model development, AI-powered automation, and integration with existing risk management frameworks",
      results: [
        { icon: <Brain className="h-5 w-5" />, metric: "60%", label: "Reduction in Manual Analysis" },
        { icon: <Shield className="h-5 w-5" />, metric: "35%", label: "Risk Detection Accuracy" },
        { icon: <Clock className="h-5 w-5" />, metric: "50%", label: "Faster Risk Assessment" }
      ],
      color: "bg-slate-900"
    },
    {
      title: "Financial Services AI Adoption Strategy",
      client: "Mid-Size Investment Firm",
      industry: "Investment Management",
      challenge: "Legacy portfolio management systems needed modernization to incorporate AI-driven insights and automated decision-making capabilities",
      solution: "Comprehensive AI readiness assessment, phased implementation strategy, and custom AI integration with existing financial systems",
      results: [
        { icon: <DollarSign className="h-5 w-5" />, metric: "$2.5M", label: "Annual Cost Savings" },
        { icon: <TrendingUp className="h-5 w-5" />, metric: "35%", label: "Portfolio Performance Improvement" },
        { icon: <Zap className="h-5 w-5" />, metric: "70%", label: "Process Automation" }
      ],
      color: "bg-green-700"
    },
    {
      title: "Bloomberg Terminal Integration Project",
      client: "Bloomberg L.P.",
      industry: "Financial Information Services",
      challenge: "Complex data integration requirements for enhanced market analytics and improved user workflow efficiency",
      solution: "Strategic consulting on data architecture, agile implementation methodology, and performance optimization frameworks",
      results: [
        { icon: <Users className="h-5 w-5" />, metric: "30%", label: "User Workflow Efficiency" },
        { icon: <TrendingUp className="h-5 w-5" />, metric: "45%", label: "Data Integration Speed" },
        { icon: <Clock className="h-5 w-5" />, metric: "25%", label: "Faster Market Analysis" }
      ],
      color: "bg-red-700"
    }
  ];

  const expertise = [
    {
      company: "FactSet",
      focus: "Financial Data Platforms",
      description: "Deep expertise in financial data architecture and real-time market analytics"
    },
    {
      company: "Moody's Analytics",
      focus: "Risk Assessment AI",
      description: "Advanced risk modeling and AI-powered investment research solutions"
    },
    {
      company: "Bloomberg",
      focus: "Market Intelligence",
      description: "Financial information services and market data integration"
    },
    {
      company: "S&P Global",
      focus: "Analytics Platforms",
      description: "Market intelligence and financial analytics optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fintech Success Stories</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from 25+ years of experience with leading financial technology companies. 
              Discover how we've driven AI adoption and fintech innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Client Experience Overview */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Fintech Experience</h2>
            <p className="text-xl text-slate-600">Trusted by industry leaders</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.company}</h3>
                <p className="text-blue-600 font-semibold mb-2">{item.focus}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-600">Real implementations with measurable results</p>
          </div>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`${study.color} text-white p-8 rounded-lg ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-4">
                    <span className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                  <p className="text-slate-200 mb-6 font-semibold">{study.client}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Challenge</h4>
                      <p className="text-slate-200">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Our Solution</h4>
                      <p className="text-slate-200">{study.solution}</p>
                    </div>
                  </div>
                </div>
                
                <div className={`bg-slate-50 p-8 rounded-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Measurable Results</h3>
                  <div className="space-y-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <div className="bg-green-100 p-3 rounded-lg mr-4">
                          <div className="text-green-600">{result.icon}</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-slate-900">{result.metric}</div>
                          <div className="text-slate-600 font-medium">{result.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Cumulative Impact</h2>
            <p className="text-xl text-slate-600">Results across 25+ years in fintech and AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600 font-medium">Financial Services Clients</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-slate-600 font-medium">Client Cost Savings</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-slate-600 font-medium">AI Adoption Success Rate</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-slate-600 font-medium">Years Fintech Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Highlight */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Success Map Methodology</h2>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Our proven approach combines strategic planning with agile execution, 
              ensuring successful AI adoption and fintech innovation projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h4 className="font-semibold">Assess</h4>
              </div>
              <div className="text-center">
                <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h4 className="font-semibold">Design</h4>
              </div>
              <div className="text-center">
                <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h4 className="font-semibold">Implement</h4>
              </div>
              <div className="text-center">
                <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                <h4 className="font-semibold">Optimize</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
