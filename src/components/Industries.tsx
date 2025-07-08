import { Building, Scale, Database, Home } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Financial Services",
      description: "Strategic solutions for banks, investment firms, and insurance companies."
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Legal",
      description: "Transforming customer experiences and optimizing operations."
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Data Information",
      description: "Improving patient outcomes and operational efficiency."
    },
    {
      icon: <Home className="h-8 w-8 text-blue-600" />,
      title: "Commercial Real Estate",
      description: "Enhancing productivity and supply chain optimization."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{industry.title}</h3>
              <p className="text-slate-600 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries; 