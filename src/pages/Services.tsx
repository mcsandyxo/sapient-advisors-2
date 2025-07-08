import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Target, Brain, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Industries from '../components/Industries';
import ExpertiseServices from '../components/ExpertiseServices';
import ClientSuccess from '../components/ClientSuccess';
import SuccessStories from '../components/SuccessStories';

const Services = () => {
  const services = [
    {
      title: "Success Map",
      description: "Strategic blueprints to scale projects from concept to final product",
      features: [
        "Strategic roadmap development",
        "Agile methodology implementation",
        "Lean framework application",
        "Project scaling strategies",
        "Performance measurement systems",
        "Risk mitigation planning"
      ],
      icon: <Target className="h-8 w-8" />,
      color: "bg-blue-600"
    },
    {
      title: "AI Adoption",
      description: "Comprehensive AI integration strategy for financial services",
      features: [
        "AI readiness assessment",
        "Prototype and MVP development",
        "Legacy system integration",
        "Machine learning model deployment",
        "AI governance frameworks",
        "ROI measurement and optimization"
      ],
      icon: <Brain className="h-8 w-8" />,
      color: "bg-slate-900"
    },
    {
      title: "Fintech Education",
      description: "Specialized training and workshops for financial technology adoption",
      features: [
        "AI-driven product development workshops",
        "Executive fintech bootcamps",
        "Financial technology training programs",
        "Innovation methodology sessions",
        "Digital transformation seminars",
        "Custom curriculum development"
      ],
      icon: <GraduationCap className="h-8 w-8" />,
      color: "bg-red-700"
    },
    {
      title: "Fractional Services",
      description: "Flexible consulting and advisory services tailored to your needs",
      features: [
        "Strategic consulting",
        "Executive training and coaching",
        "Agile methodology implementation",
        "General advisory services",
        "Interim leadership support",
        "Board advisory services"
      ],
      icon: <Users className="h-8 w-8" />,
      color: "bg-green-700"
    }
  ];

  const expertise = [
    {
      area: "Financial Data Platforms",
      experience: "25+ years with FactSet, Bloomberg, S&P Global",
      description: "Deep expertise in financial data architecture, real-time market data, and analytics platforms"
    },
    {
      area: "Risk Analytics & AI",
      experience: "Moody's Analytics, Aiera, Spatial Risk Systems",
      description: "Advanced risk modeling, AI-powered investment research, and geographic risk analysis"
    },
    {
      area: "Fintech Innovation",
      experience: "Startup to enterprise scale solutions",
      description: "From concept validation to product delivery in financial technology markets"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fintech & AI Expertise</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              25+ years of experience in financial technology, data platforms, and AI adoption. 
              We bridge strategic vision with operational execution.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <Industries />

      {/* Expertise & Services Section */}
      <ExpertiseServices />

      {/* Client Success Section */}
      <ClientSuccess />

      {/* Success Stories Section */}
      <SuccessStories />

      {/* Core Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-600">
              Specialized solutions for fintech and AI transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
                <div className={`${service.color} text-white p-6`}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-2xl font-bold ml-3">{service.title}</h3>
                  </div>
                  <p className="text-slate-200">{service.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-slate-600">Built on decades of experience with industry leaders</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.area}</h3>
                <p className="text-blue-600 font-semibold mb-3">{item.experience}</p>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Map Methodology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Success Map Methodology</h2>
            <p className="text-xl text-slate-600">Our proven approach to project success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Assess</h3>
              <p className="text-slate-600">Comprehensive analysis of current state, objectives, and AI readiness</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Design</h3>
              <p className="text-slate-600">Develop strategic roadmaps with agile and lean methodologies</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Implement</h3>
              <p className="text-slate-600">Execute with precision using proven fintech and AI frameworks</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Optimize</h3>
              <p className="text-slate-600">Continuous improvement with performance measurement and scaling</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Fintech Strategy?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our expertise can accelerate your AI adoption and fintech innovation
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
