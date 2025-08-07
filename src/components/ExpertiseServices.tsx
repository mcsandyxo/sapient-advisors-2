import { Lightbulb, Users, Settings, Wrench, Search, GraduationCap } from 'lucide-react';

const ExpertiseServices = () => {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: "Data Lifecycle Strategy",
      description: "We design end-to-end data strategies from acquisition to monetization, which align with business goals and regulatory requirements.",
      features: [
        "Strategic Planning & Execution",
        "Digital Transformation",
        "Operational Excellence",
        "Financial Advisory"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "MLOps & AI Readiness",
      description: "We assess, build, and operationalize AI pipelines with built-in governance, monitoring, and scalable infrastructure from the start.",
      features: [
        "Leadership Development",
        "Innovation Workshops",
        "Team Building & Collaboration",
        "Strategic Planning Sessions"
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "Product Strategy",
      description: "We create user-validated, human-centered digital experiences that drive usability, trust, and adoption.",
      features: [
        "Prototyping",
        "Design Sprints",
        "UX Design",
        "Ecosystem Integration"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Engineering & Architecture",
      description: "We build scalable data pipelines, cloud-native infrastructure, and analytics environments optimized for AI readiness.",
      features: [
        "Strategic Planning & Execution",
        "Digital Transformation",
        "Operational Excellence"
      ]
    },
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Data Sourcing",
      description: "We evaluate whether to build, buy, or partner for data inputs and technology stacks.",
      features: [
        "Strategy",
        "Build-vs-Buy",
        "Monetization opportunities",
        "Strategic Planning Sessions"
      ]
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Talent Development & Training",
      description: "Workshops, webinars, bootcamps, and programs designed to build skills and capabilities in data and AI.",
      features: [
        "Technology Partnerships",
        "Implementation Support",
        "Joint Solution Development"
      ]
    }
  ];

  return (
    <>
      {/* Expertise & Services Section with blue background */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top section with blue gradient background */}
          <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-br from-blue-100 to-blue-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Expertise & Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              We deliver strategic, data-driven solutions tailored to your business needs, helping you navigate complex challenges and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="pt-2 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-12">
              <h3 id="our-services" className="text-2xl font-bold text-blue-900 mb-4">Our Services</h3>
              <p className="text-lg text-slate-600">
                At Sapient Advisors, we offer comprehensive consulting services designed to transform your business operations, enhance strategic decision-making, and drive sustainable growth across various industries.
              </p>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex flex-col
                                         transform transition-all duration-300 ease-out
                                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                                         cursor-pointer">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-blue-900 ml-3">{service.title}</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-3.5 h-3.5 bg-blue-500 rounded-full mr-2 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <button className="text-blue-900 font-semibold text-sm hover:text-blue-800 transition-colors">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpertiseServices; 