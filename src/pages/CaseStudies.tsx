
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Global Manufacturing Digital Transformation",
      client: "Fortune 500 Manufacturing Company",
      industry: "Manufacturing",
      challenge: "Legacy systems hindering operational efficiency and data visibility",
      solution: "Comprehensive digital transformation including ERP modernization, IoT implementation, and advanced analytics",
      results: [
        { icon: <TrendingUp className="h-5 w-5" />, metric: "35%", label: "Efficiency Increase" },
        { icon: <DollarSign className="h-5 w-5" />, metric: "$2.5M", label: "Annual Cost Savings" },
        { icon: <Clock className="h-5 w-5" />, metric: "50%", label: "Faster Decision Making" }
      ],
      color: "bg-slate-900"
    },
    {
      title: "Financial Services Data Analytics Platform",
      client: "Regional Banking Institution",
      industry: "Financial Services",
      challenge: "Fragmented data sources limiting customer insights and risk assessment capabilities",
      solution: "Unified data platform with real-time analytics, customer segmentation, and predictive modeling",
      results: [
        { icon: <Users className="h-5 w-5" />, metric: "25%", label: "Customer Retention Increase" },
        { icon: <TrendingUp className="h-5 w-5" />, metric: "40%", label: "Risk Assessment Improvement" },
        { icon: <DollarSign className="h-5 w-5" />, metric: "15%", label: "Revenue Growth" }
      ],
      color: "bg-blue-700"
    },
    {
      title: "Healthcare System Operational Excellence",
      client: "Multi-Site Healthcare Network",
      industry: "Healthcare",
      challenge: "Inconsistent processes across facilities affecting patient care and operational costs",
      solution: "Standardized processes, lean methodology implementation, and performance monitoring systems",
      results: [
        { icon: <Clock className="h-5 w-5" />, metric: "30%", label: "Reduced Wait Times" },
        { icon: <DollarSign className="h-5 w-5" />, metric: "$1.8M", label: "Cost Reduction" },
        { icon: <TrendingUp className="h-5 w-5" />, metric: "95%", label: "Patient Satisfaction" }
      ],
      color: "bg-red-700"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how we've helped organizations across industries achieve 
              transformational results and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <p className="text-slate-200 mb-6">{study.client}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-slate-200">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-slate-200">{study.solution}</p>
                    </div>
                  </div>
                </div>
                
                <div className={`bg-slate-50 p-8 rounded-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Results</h3>
                  <div className="space-y-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-lg mr-4">
                          <div className="text-green-600">{result.icon}</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-slate-900">{result.metric}</div>
                          <div className="text-slate-600">{result.label}</div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Overall Impact</h2>
            <p className="text-xl text-slate-600">Measurable results across all our engagements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$25M+</div>
              <div className="text-slate-600">Total Cost Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">45%</div>
              <div className="text-slate-600">Average Efficiency Gain</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">6 Months</div>
              <div className="text-slate-600">Average ROI Timeline</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
