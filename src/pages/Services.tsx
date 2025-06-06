
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Business Strategy & Planning",
      description: "Comprehensive strategic planning services to drive your business forward",
      features: [
        "Strategic roadmap development",
        "Market analysis and positioning",
        "Competitive intelligence",
        "Growth strategy formulation",
        "Performance optimization"
      ],
      color: "bg-slate-900"
    },
    {
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge digital solutions",
      features: [
        "Technology assessment and roadmap",
        "Process automation",
        "Digital platform integration",
        "Legacy system modernization",
        "Change management"
      ],
      color: "bg-blue-700"
    },
    {
      title: "Data Analytics & Intelligence",
      description: "Transform data into actionable business insights",
      features: [
        "Data strategy development",
        "Advanced analytics implementation",
        "Business intelligence dashboards",
        "Predictive modeling",
        "Data governance frameworks"
      ],
      color: "bg-red-700"
    },
    {
      title: "Operational Excellence",
      description: "Optimize processes and enhance operational efficiency",
      features: [
        "Process improvement initiatives",
        "Lean methodology implementation",
        "Quality management systems",
        "Cost optimization strategies",
        "Performance measurement"
      ],
      color: "bg-slate-900"
    },
    {
      title: "Technology Consulting",
      description: "Expert guidance on technology strategy and implementation",
      features: [
        "IT strategy and planning",
        "Technology vendor selection",
        "System integration services",
        "Cybersecurity assessment",
        "Cloud migration strategies"
      ],
      color: "bg-blue-700"
    },
    {
      title: "Change Management",
      description: "Navigate organizational transformation with confidence",
      features: [
        "Change readiness assessment",
        "Stakeholder engagement strategies",
        "Communication planning",
        "Training and development",
        "Resistance management"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Expertise & Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive business solutions designed to accelerate your growth 
              and drive sustainable competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-600">
              Tailored solutions that address your unique business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`${service.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
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

      {/* Process Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Approach</h2>
            <p className="text-xl text-slate-600">A proven methodology for delivering exceptional results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Assess</h3>
              <p className="text-slate-600">Comprehensive analysis of your current state and objectives</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Design</h3>
              <p className="text-slate-600">Develop tailored solutions aligned with your strategic goals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Implement</h3>
              <p className="text-slate-600">Execute solutions with precision and continuous monitoring</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Optimize</h3>
              <p className="text-slate-600">Continuous improvement and performance optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our expertise can drive your business forward
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Contact Our Experts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
