
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Globe, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-blue-600" />, number: "500+", label: "Clients Served" },
    { icon: <Award className="h-8 w-8 text-blue-600" />, number: "15+", label: "Years Experience" },
    { icon: <Globe className="h-8 w-8 text-blue-600" />, number: "25+", label: "Countries" },
    { icon: <Clock className="h-8 w-8 text-blue-600" />, number: "1000+", label: "Projects Completed" }
  ];

  const team = [
    {
      name: "Maribeth Martorana, CFA",
      role: "Co-Founder & Chief Executive Officer",
      description: "Strategic visionary with 20+ years in business transformation"
    },
    {
      name: "Zaid Marji",
      role: "Chief Technology Officer",
      description: "Technology innovator specializing in digital solutions"
    },
    {
      name: "Sandy McCarron",
      role: "Co-Founder & Chief Operations Officer",
      description: "Expert in business strategy and organizational development"
    }
    return (
    <div className="min-h-screen bg-white"> )
    {
      name: "Phanom Parker",
      role: "Chief Product/ML Ops",
      description: "Strategic visionary with 20+ years in business transformation"
    },
    {
      name: "Richard Vogel",
      role: "Chief Data Strategist",
      description: "Technology innovator specializing in digital solutions"
    },
    {
      name: "Kristine Parinelli",
      role: "Product Manager",
      description: "Expert in business strategy and organizational development"
    }
      return (
    <div className="min-h-screen bg-white">
    {
      name: "Mary Beth Quinn",
      role: "Product Manager",
      description: "Strategic visionary with 20+ years in business transformation"
    },
    {
      name: "Daniel Zock",
      role: "MBA Candidate, Summer Intern",
      description: "Technology innovator specializing in digital solutions"
    },
    {
      name: "Daniel Rodriguez",
      role: "UX Associate",
      description: "Expert in business strategy and organizational development"
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
              We are a leading consulting firm dedicated to transforming businesses through 
              strategic innovation and cutting-edge technology solutions.
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
                To empower organizations with innovative strategies and technological solutions 
                that drive sustainable growth, operational excellence, and competitive advantage 
                in today's rapidly evolving business landscape.
              </p>
              <p className="text-lg text-slate-600">
                We believe in the power of strategic thinking combined with cutting-edge 
                technology to unlock unprecedented opportunities for our clients.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 mb-6">
                To be the premier global partner for businesses seeking transformational 
                change, recognized for our expertise, innovation, and unwavering commitment 
                to client success.
              </p>
              <p className="text-lg text-slate-600">
                We envision a future where every organization can harness the full potential 
                of strategic innovation to achieve extraordinary results.
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
            <p className="text-xl text-slate-600">Delivering results that matter</p>
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
            <p className="text-xl text-slate-600">Meet the visionaries driving our success</p>
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
