import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Globe, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-blue-600" />, number: "500+", label: "Clients Served" },
    { icon: <Award className="h-8 w-8 text-blue-600" />, number: "25+", label: "Years Experience" },
    { icon: <Globe className="h-8 w-8 text-blue-600" />, number: "25+", label: "Countries" },
    { icon: <Clock className="h-8 w-8 text-blue-600" />, number: "1000+", label: "Projects Completed" }
  ];

  const team = [
    {
      name: "Maribeth Martorana, CFA",
      role: "Co-Founder & Chief Executive Officer",
      description: "Fintech and AI leader with experience at FactSet, Moody's Analytics, Aiera, and Spatial Risk Systems"
    },
    {
      name: "Sandy McCarron",
      role: "Co-Founder & Chief Operations Officer",
      description: "Digital transformation specialist with experience at Random House, Bloomberg, S&P Global, and Moody's"
    },
    {
      name: "Zaid Marji",
      role: "Chief Technology Officer",
      description: "Technology innovator specializing in data, LLMs and Agentic solutions"
    },
    {
      name: "Phanom Parker",
      role: "Chief Product/ML Ops",
      description: "Product and ML operations expert with extensive experience in scalable AI solutions"
    },
    {
      name: "Richard Vogel",
      role: "Chief Data Strategist",
      description: "Data strategy leader specializing in financial services and analytics platforms"
    },
    {
      name: "Kristine Parinelli",
      role: "Product Manager",
      description: "Product management expert focused on fintech and AI-driven solutions"
    },
    {
      name: "Mary Beth Quinn",
      role: "Product Manager",
      description: "Experienced product manager with focus on user experience and market validation"
    },
    {
      name: "Daniel Zock",
      role: "MBA Candidate, Summer Intern",
      description: "Strategic business development with focus on AI adoption and market analysis"
    },
    {
      name: "Daniel Rodriguez",
      role: "UX Associate",
      description: "User experience specialist ensuring human-centered design and usability"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Sapient Advisors</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A fintech consultancy with 25+ years of experience specializing in data, technology, 
              finance, and design thinking to bridge strategic vision with operational execution.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                To close the gap between strategic vision and operational execution, applying 
                agile methodologies, Lean frameworks, and advanced AI tools to accelerate 
                from concept to final product.
              </p>
              <p className="text-lg text-slate-600">
                We specialize in fintech and AI adoption, helping financial services organizations 
                harness the power of data and artificial intelligence for competitive advantage.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 mb-6">
                To be the premier fintech consultancy that empowers financial institutions 
                to successfully adopt AI technologies and transform their operations through 
                strategic innovation and data-driven solutions.
              </p>
              <p className="text-lg text-slate-600">
                We envision a future where every financial organization can leverage AI 
                to deliver exceptional value to their clients and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Impact</h2>
            <p className="text-xl text-slate-600">Delivering results that matter in fintech and AI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-lg text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-600">Meet the experts driving fintech and AI innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
