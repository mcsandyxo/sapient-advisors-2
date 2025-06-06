import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Lightbulb, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  const highlights = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Team",
      description: "Industry-leading professionals with decades of combined experience"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Strategic Focus",
      description: "Targeted solutions that align with your business objectives"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description: "Cutting-edge approaches to solve complex business challenges"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Proven Results",
      description: "Track record of delivering measurable business growth"
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
              Transforming Visions into 
              <span className="text-blue-400"> Strategic Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200">
              Empowering businesses with innovative strategies and cutting-edge technology 
              solutions that drive sustainable growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
              >
                Get Started
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
              We combine deep industry expertise with innovative thinking to deliver 
              solutions that transform your business landscape.
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
              Our Core Services
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-slate-900 text-white p-8 rounded-lg hover:bg-blue-900 transition-colors">
                <h3 className="text-2xl font-bold mb-4">Business Strategy</h3>
                <p className="text-slate-200 mb-6">
                  Strategic planning and execution that drives sustainable growth and market leadership.
                </p>
                <Link 
                  to="/services" 
                  className="text-blue-400 font-semibold group-hover:text-white flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-red-700 text-white p-8 rounded-lg hover:bg-red-800 transition-colors">
                <h3 className="text-2xl font-bold mb-4">Digital Transformation</h3>
                <p className="text-red-100 mb-6">
                  Modernize your operations with cutting-edge technology and digital solutions.
                </p>
                <Link 
                  to="/services" 
                  className="text-red-200 font-semibold group-hover:text-white flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-slate-900 text-white p-8 rounded-lg hover:bg-blue-900 transition-colors">
                <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
                <p className="text-slate-200 mb-6">
                  Turn your data into actionable insights that drive informed decision-making.
                </p>
                <Link 
                  to="/services" 
                  className="text-blue-400 font-semibold group-hover:text-white flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve your strategic objectives
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
