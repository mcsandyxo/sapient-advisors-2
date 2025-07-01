import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Globe, Clock, Eye, Lightbulb, Palette, Handshake, Linkedin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-blue-600" />, number: "500+", label: "Clients Served" },
    { icon: <Award className="h-8 w-8 text-blue-600" />, number: "25+", label: "Years Experience" },
    { icon: <Globe className="h-8 w-8 text-blue-600" />, number: "25+", label: "Countries" },
    { icon: <Clock className="h-8 w-8 text-blue-600" />, number: "1000+", label: "Projects Completed" }
  ];

  const values = [
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Curiosity",
      description: "A forward-thinking mindset is our compass, guiding us to stay ahead of tech trends and turn into impact."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Innovation", 
      description: "We continuously seek creative solutions that challenge conventional thinking."
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-600" />,
      title: "Creativity",
      description: "Creativity is our engine powering fresh thinking and inventive solutions that turn challenges into opportunities."
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-600" />,
      title: "Collaboration",
      description: "We work side by side with our clients, believing true success is built through partnership and shared commitment."
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
      description: "Zaid is a builder, strategist and systems thinker with 30 years experience at the frontier of technology, partnering with teams to scale -- not just scaling or building -- they're performing flows things work.",
      linkedin: true
    },
    {
      name: "Phanom Noelani Parker",
      role: "Chief Operations & Product Strategy",
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
      name: "Kristine Parinelli",
      role: "Chief of Staff",
      description: "Phanom is a seasoned AI and product executive with experience transforming complex business challenges into scalable, data-driven solutions across enterprise, cloud, and consumer platforms.",
      linkedin: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Sapient Advisors</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Rooted in purpose: We lead with integrity, inclusivity, and exceptional excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                Sapient Advisors is a globally experienced consultancy focused on data-driven growth. As trusted B2B products and services.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                At Sapient Advisors, our mission is to <strong>empower organizations to achieve sustainable growth through data-driven strategies and operational excellence.</strong> We partner with our clients to navigate complex challenges and capitalize on emerging opportunities in an ever-changing business landscape.
              </p>
              <p className="text-lg text-slate-600">
                We believe that successful transformation requires both analytical rigor and human-centered approaches, which is why our team brings diverse expertise across industries and functions.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Values</h2>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                      <p className="text-slate-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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

      {/* Our Team */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Team</h2>
            <p className="text-xl text-slate-600">Meet the experienced professionals who lead our consulting practice and drive exceptional results for our clients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-slate-200 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4 text-center">{member.role}</p>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{member.description}</p>
                {member.linkedin && (
                  <div className="text-center">
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </button>
                  </div>
                )}
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
