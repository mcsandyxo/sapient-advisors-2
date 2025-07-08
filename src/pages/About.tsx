import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Globe, Clock, Eye, Lightbulb, Palette, Handshake, Linkedin, Shield, CheckCircle, FileText, Star, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-blue-600" />, number: "500+", label: "Clients Served" },
    { icon: <Award className="h-8 w-8 text-blue-600" />, number: "25+", label: "Years Experience" },
    { icon: <Globe className="h-8 w-8 text-blue-600" />, number: "25+", label: "Countries" },
    { icon: <Clock className="h-8 w-8 text-blue-600" />, number: "1000+", label: "Projects Completed" }
  ];

  const values = [
    {
      icon: <Eye className="h-6 w-6 text-blue-800" />,
      title: "Curiosity",
      description: "A forward-thinking mindset is our compass, guiding us to stay ahead of tech trends and turn into impact."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-blue-800" />,
      title: "Innovation", 
      description: "We continuously seek creative solutions that challenge conventional thinking."
    },
    {
      icon: <Palette className="h-6 w-6 text-blue-800" />,
      title: "Creativity",
      description: "Creativity is our engine powering fresh thinking and inventive solutions that turn challenges into opportunities."
    },
    {
      icon: <Handshake className="h-6 w-6 text-blue-800" />,
      title: "Collaboration",
      description: "We work side by side with our clients, believing true success is built through partnership and shared commitment."
    }
  ];

  const trustedNetwork = [
    {
      title: "Salesfy",
      subtitle: "Sales Transformation",
      description: "Elena specializes in sales process optimization and CRM implementation, helping organizations accelerate revenue growth through data-driven sales strategies."
    },
    {
      title: "Avatar Buddy",
      subtitle: "Digital Twin Experience",
      description: "Avatar Buddy is an expert in user experience design and digital product strategy, having led digital transformation initiatives for leading brands across retail and financial services."
    },
    {
      title: "Superposition",
      subtitle: "Project Alignment and Facilitation",
      description: "Sophia brings deep expertise in advanced analytics and machine learning, helping organizations unlock insights from complex data sets to drive strategic decision-making."
    },
    {
      title: "Neural Seek",
      subtitle: "Project Alignment and Facilitation",
      description: "Sophia brings deep expertise in advanced analytics and machine learning, helping organizations unlock insights from complex data sets to drive strategic decision-making."
    },
    {
      title: "Working Live",
      subtitle: "Data Transformation",
      description: "Sophia brings deep expertise in advanced analytics and machine learning, helping organizations unlock insights from complex data sets to drive strategic decision-making."
    },
    {
      title: "NRoad",
      subtitle: "Project Alignment and Facilitation",
      description: "Sophia brings deep expertise in advanced analytics and machine learning, helping organizations unlock insights from complex data sets to drive strategic decision-making."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discover",
      description: "We begin by deeply understanding your business challenges, goals, and the competitive landscape."
    },
    {
      number: "2", 
      title: "Analyze",
      description: "Our team conducts through analysis to identify key insights and opportunity areas for your organization."
    },
    {
      number: "3",
      title: "Strategize",
      description: "We develop customized strategic and actionable recommendations tailored to your specific needs."
    },
    {
      number: "4",
      title: "Implement",
      description: "We partner with you to execute the strategy seamlessly and ensure sustainable results."
    }
  ];

  const team = [
    {
      name: "Maribeth Martorana, CFA",
      role: "Co-Founder & Chief Executive Officer",
      description: "Maribeth is an accomplished product leader with over two decades of experience driving growth, alignment, and transformation at the intersection of finance, data, and technology.",
      linkedin: true
    },
    {
      name: "Sandy McCarron",
      role: "Co-Founder & Chief Operating Officer", 
      description: "Sandy is a visionary leader in digital transformation across industries, including transformation initiatives at Penguin Random House, Bloomberg BusinessWeek, S&P Global, and Moody's Analytics.",
      linkedin: true
    },
    {
      name: "Zaid Marji",
      role: "Chief Technology Officer",
      description: "Zaid is a builder, strategist and systems thinker with 30 years experience at the frontier of technology, partnering with teams to scale -- not just scaling or building -- they're redefining how things work.",
      linkedin: true
    },
    {
      name: "Phanom Noelani Parker",
      role: "Chief AI, Operations & Product Strategy",
      description: "Phanom is a seasoned AI and product executive with experience transforming complex business challenges into scalable, data-driven solutions across enterprise, cloud, and consumer platforms.",
      linkedin: true
    },
    {
      name: "Richard Vogel",
      role: "Chief Data Strategy",
      description: "Richard brings 25 years of financial expertise, having held leadership positions at top consulting firms and led financial transformation initiatives for multinational corporations.",
      linkedin: true
    },
    {
      name: "Kristine Parrinelli",
      role: "Agile Product Manager & Chief of Staff",
      description: "Phanom is a seasoned AI and product executive with experience transforming complex business challenges into scalable, data-driven solutions across enterprise, cloud, and consumer platforms.",
      linkedin: true
    },
    {
      name: "Daniel Zook",
      role: "Business Development Lead",
      description: "Phanom is a seasoned AI and product executive with experience transforming complex business challenges into scalable, data-driven solutions across enterprise, cloud, and consumer platforms.",
      linkedin: true
    },
    {
      name: "Mary Beth Quinn",
      role: "Product & Marketing Operations Manager",
      description: "Richard brings 25 years of financial expertise, having held leadership positions at top consulting firms and led financial transformation initiatives for multinational corporations.",
      linkedin: true
    },
    {
      name: "Fede Crespo",
      role: "Lead Data Scientist",
      description: "Phanom is a seasoned AI and product executive with experience transforming complex business challenges into scalable, data-driven solutions across enterprise, cloud, and consumer platforms.",
      linkedin: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="text-white" style={{ backgroundColor: '#1E3A8A', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ padding: '1.5rem 1rem' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left" style={{ fontWeight: 700, letterSpacing: '-0.5px' }}>About Sapient Advisors</h1>
            <p className="max-w-3xl text-left" style={{ fontWeight: 400, lineHeight: 1.75, fontSize: '1.125rem', color: '#FFFFFF' }}>
              Rooted in purpose: We lead with integrity, inclusivity, and exceptional excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-white" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '1.5rem', padding: '1.5rem 1rem' }}>
            {/* Our Mission */}
            <div>
              <h2 className="mb-8" style={{ color: '#0D1B2A', fontWeight: 700, fontSize: '1.875rem', lineHeight: '2.25rem' }}>Our Mission</h2>
              <div className="space-y-6">
                <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: '#4A4F55' }}>
                  Sapient Advisors is a globally experienced consultancy focused on data-driven, AI-enabled B2B products and services.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: '#4A4F55' }}>
                  At Sapient Advisors, our mission is to <span style={{ fontWeight: 600, color: '#0D1B2A' }}>empower organizations to achieve sustainable growth through data-driven strategies and operational excellence.</span> We partner with our clients to navigate complex challenges and capitalize on emerging opportunities in an ever-changing business landscape.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: '#4A4F55' }}>
                  We believe that successful transformation requires both analytical rigor and human-centered approaches, which is why our team brings diverse expertise across industries and functions.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div>
              <div style={{ backgroundColor: '#EFF2F5', padding: '2rem', borderRadius: '0.5rem' }}>
                <h2 className="mb-8" style={{ color: '#0D1B2A', fontWeight: 700, fontSize: '1.875rem', lineHeight: '2.25rem' }}>Our Values</h2>
                <div className="space-y-8">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1" style={{ marginRight: '0.5rem' }}>{value.icon}</div>
                      <div>
                        <h3 className="mb-3" style={{ color: '#0D1B2A', fontWeight: 700, fontSize: '1.25rem', lineHeight: '1.75rem' }}>{value.title}</h3>
                        <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: '#4A4F55' }}>{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
                              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-left">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-800 text-lg font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Team</h2>
            <p className="text-xl text-slate-600">Meet the experienced professionals who lead our consulting practice and drive exceptional results for our clients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-slate-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-blue-800 mb-2 text-left">{member.name}</h3>
                <p className="text-slate-900 font-medium mb-4 text-left text-sm">{member.role}</p>
                <p className="text-slate-600 mb-4 text-xs leading-relaxed">{member.description}</p>
                {member.linkedin && (
                  <div className="text-left">
                    <button className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium text-xs">
                      <Linkedin className="h-3 w-3 mr-1" />
                      Connect on LinkedIn
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Advisors Network Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Trusted Advisors Network</h2>
            <p className="text-lg text-slate-600 max-w-4xl">
              Our extended network of industry experts brings specialized knowledge and capabilities to complement our core team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustedNetwork.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 font-medium mb-4 text-sm">{item.subtitle}</p>
                <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Explore how our expertise can help your organization achieve sustainable growth and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
              Explore Our Services
            </button>
            <button className="border border-blue-800 text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Case Studies
            </button>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Read Our Insights
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
