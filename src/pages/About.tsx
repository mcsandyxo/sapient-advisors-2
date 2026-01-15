import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Globe, Clock, Eye, Lightbulb, Palette, Handshake, Linkedin, Shield, CheckCircle, FileText, Star, ArrowRight } from 'lucide-react';
import { useSEO, SEO_DATA } from '../hooks/useSEO';

const About = () => {
  // Apply SEO for About page
  useSEO(SEO_DATA.about);

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
      title: "Digital Twin Experience",
      description: "AI-powered digital experiences that help businesses build stronger customer relationships through personalized interactions and data-driven insights."
    },
    {
      title: "AI-Powered Knowledge Management",
      description: "Platform specializes in AI-driven knowledge management solutions that help organizations unlock insights from their data and improve decision-making processes."
    },
    {
      title: "Collaborative Digital Management",
      description: "Provides collaborative digital management platforms that streamline workflows and enhance team productivity through innovative technology solutions."
    },
    {
      title: "Sales Transformation",
      description: "Focuses on sales process optimization and CRM implementation, helping organizations accelerate revenue growth through data-driven sales strategies."
    },
    {
      title: "Project Alignment and Facilitation",
      description: "Expertise in project alignment and facilitation, helping teams coordinate complex initiatives and achieve strategic objectives efficiently."
    },
    {
      title: "Data Transformation",
      description: "Specializes in data transformation services, helping organizations modernize their data infrastructure and analytics capabilities for better business outcomes."
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
      linkedin: true,
      linkedinUrl: "https://www.linkedin.com/in/maribeth-martorana/",
      image: "/team/maribeth-martorana.png"
    },
    {
      name: "Sandy McCarron",
      role: "Co-Founder & Chief Operating Officer", 
      description: "Sandy is a visionary leader in digital transformation across industries, including transformation initiatives at Penguin Random House, Bloomberg BusinessWeek, S&P Global, and Moody's Analytics.",
      linkedin: true,
      linkedinUrl: "https://www.linkedin.com/in/sandymccarron/",
      image: "/team/sandy-mccarron.png"
    },

    // {
    //   name: "Phanom Noelani Parker",
    //   role: "Chief AI/ML Ops & Product Strategy",
    //   description: "", // "Phanom is a seasoned AI and product executive with experience transforming complex business challenges into scalable, data-driven solutions across enterprise, cloud, and consumer platforms.",
    //   linkedin: false, // temporarily hidden
    //   // linkedinUrl: "https://www.linkedin.com/in/phanom-parker/", // URL placeholder, needs confirmation
    //   image: "/team/phanom-parker.png"
    // },
    {
      name: "Zaid Marji",
      role: "Chief Technology Officer",
      description: "Zaid leads our technology vision, combining strong AI and cloud engineering skills with an innovative, hands-on approach to building scalable solutions. .",
      linkedin: true,
      linkedinUrl: "https://www.linkedin.com/in/zaidmarji/", // URL placeholder, needs confirmation
      image: "/team/zaid-marji.png"
    },
        {
      name: "Richard Vogel",
      role: "Chief Data Strategy",
      description: "Richard brings 25 years of data, finance and operational expertise, having held leadership positions for transformational initiatives at major credit, risk and investment banks",
      linkedin: true,
      linkedinUrl: "https://www.linkedin.com/in/richard-vogel/", // URL placeholder, needs confirmation
      image: "/team/richard-vogel.png"
    },
    {
      name: "Kristine Parrinelli",
      role: "Agile Product Manager & Chief of Staff",
      description: "Kristine Parrinelli specializes in agile product management, digital systems, and cross-functional execution. As Chief of Staff, she drives clarity, collaboration, and delivery across strategic initiatives, from AI integration to marketing operations.",
      linkedin: true,
      linkedinUrl: "https://www.linkedin.com/in/kristine-parrinelli/",
      image: "/team/kristine-parrinelli.png"
    },
    {
      name: "Daniel Rodriguez",
      role: "Intern, UX Associate",
      description: "Daniel Rodriguez is our intern and jack of all trades, jumping in to learn new tools to edit videos and create marketing materials. ",
      linkedin: true,
      linkedinUrl: "https://www.linkedin.com/in/daniel-rodriguez-63a627354/",
      image: "/team/daniel-rodriguez.png"
    },
       {
      name: "Alex Zinny",
      role: "VP Sales",
      description: "Alex Zinny helps foster strategic relationships with business leaders exploring AI integration to unlock meaningful economic value.",
      linkedin: true,
      linkedinUrl: "https://www.linkedin.com/in/alexzinny/",
      image: "/team/alex-zinny.png"
    },
    {
      name: "Mary Beth Quinn",
      role: "Product & Marketing Operations Manager",
      description: "Mary Beth bridges strategic vision with operational rigor to ensure our clients' content workflows and tools deliver clarity, consistency, and impact. Mary Beth excels at building frameworks that make content accessible, scalable, and on-brand.",
      linkedin: true,
      linkedinUrl: "https://www.linkedin.com/in/mary-beth-quinn-03477840/",
      image: "/team/mary-beth-quinn.png"
    },
    {
      name: "Fede Crespo",
      role: "Tech Leader",
      description: "Full Stack Developer & Business Developer from Tandil, Argentina. Passionate about tech, music, and creating innovative digital solutions.",
      linkedin: true,
      linkedinUrl: "https://www.linkedin.com/in/fedecrespo/",
      image: "/team/fede-crespo.png"
    }
    // Zaid Marji (temporarily hidden)
    /*
    {
      name: "Zaid Marji",
      role: "TBD",
      description: "TBD",
      linkedin: true,
      linkedinUrl: "https://www.linkedin.com/in/zaidmarji/",
      image: "/team/zaid-marji.png"
    }
    */
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="text-white" style={{ backgroundColor: '#1E3A8A', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ padding: '1.5rem 1rem' }}>
            <h1 className="heading-hero text-white mb-6 text-left" style={{ letterSpacing: '-0.5px' }}>About Sapient Advisors</h1>
            <p className="max-w-3xl text-left" style={{ fontWeight: 400, lineHeight: 1.75, fontSize: '1.125rem', color: '#FFFFFF' }}>
              Rooted in purpose: We lead with integrity, inclusivity, and exceptional excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-white" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '1.5rem', padding: '1.5rem 1rem', alignItems: 'center' }}>
            {/* Mission */}
            <div>
              <h2 className="mb-8" style={{ color: '#0D1B2A', fontWeight: 700, fontSize: '1.875rem', lineHeight: '2.25rem' }}>Mission</h2>
              <div className="space-y-6">
                <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: '#4A4F55' }}>
                  At Sapient Advisors, we turn messy data and untested AI ideas into scalable, revenue-ready solutions—fast, and with integrity. We are an authority in AI strategy, data engineering, UI design, and deep technical execution, partnering with forward-thinking financial services teams to validate, prototype, and launch AI-enabled products in weeks, not quarters. Our mission is built on three pillars: work with great clients, treat people with respect, and deliver outstanding results.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: '#4A4F55' }}>
                  Our seasoned team of product strategists, data experts, UX leaders, and engineers works as an extension of your organization, aligning stakeholders and de-risking every step of the process. Through proven sprints and disciplined execution, we transform uncertainty into clear roadmaps and working MVPs. Every solution we deliver is designed to be scalable, secure, and compliant—built for real-world performance in demanding markets.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.75, color: '#4A4F55' }}>
                  When the challenge is complex and the stakes are high, we bring the clarity, speed, and technical depth to make it happen. Whether you need to refine data workflows, create a new AI-driven product, or redesign a user experience for greater adoption and ROI, Sapient Advisors delivers the expertise, velocity, and trust you can count on to achieve lasting impact.
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="heading-secondary mb-4">Our Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
                              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-left
                                         transform transition-all duration-300 ease-out
                                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                                         cursor-pointer">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-800 text-lg font-bold">{step.number}</span>
                </div>
                <h3 className="heading-tertiary mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <h2 className="heading-secondary mb-4">Our Team</h2>
            <p className="text-xl text-slate-600">Meet the experienced professionals who lead our consulting practice and drive exceptional results for our clients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm 
                                         transform transition-all duration-300 ease-out
                                         hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
                                         group cursor-pointer">
                <div className="w-64 h-64 mb-4 overflow-hidden rounded-lg
                               transform transition-transform duration-300
                               group-hover:scale-105">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300
                               group-hover:scale-110"
                  />
                </div>
                <h3 className="heading-tertiary mb-2 text-left">{member.name}</h3>
                <p className="text-slate-900 font-medium mb-4 text-left text-sm">{member.role}</p>
                <p className="text-slate-600 mb-4 text-xs leading-relaxed">{member.description}</p>
                {member.linkedin && (
                  <div className="text-left">
                    <a 
                      href={member.linkedinUrl || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-800 hover:text-blue-900 font-medium text-xs
                                transform transition-all duration-200 ease-out
                                hover:scale-105 hover:translate-x-1"
                    >
                      <Linkedin className="h-3 w-3 mr-1 transition-transform duration-200 
                                          group-hover:rotate-12" />
                      Connect on LinkedIn
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Network Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-8">
            <h2 className="heading-secondary mb-4">Trusted Partners Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-3">
                <p className="text-lg text-slate-600">
                  Our Trusted Partners Network drops elite data, AI, and product specialists into your project with one contract, zero vendor headaches. You get cutting-edge expertise on demand while we handle all the scouting and wrangling.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustedNetwork.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm
                                         transform transition-all duration-300 ease-out
                                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                                         cursor-pointer">
                <h3 className="heading-tertiary mb-2">{item.title}</h3>
                <p className="text-slate-500 font-medium mb-4 text-sm">{item.subtitle}</p>
                <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-primary mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Explore how our expertise can help your organization achieve sustainable growth and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              onClick={() => window.scrollTo(0, 0)}
              className="btn-primary"
            >
              Explore Our Services
            </Link>
            <Link 
              to="/case-studies" 
              onClick={() => window.scrollTo(0, 0)}
              className="btn-secondary"
            >
              View Case Studies
            </Link>
            <Link 
              to="/news" 
              onClick={() => window.scrollTo(0, 0)}
              className="btn-accent"
            >
              Read Our Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
