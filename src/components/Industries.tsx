import { Building, ShoppingCart, Gem, Building2, Shield, Scale, FileText } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "Financial Services",
      description: "Strategic solutions for banks, investment firms, and insurance companies."
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "CRE",
      description: "Enhancing productivity and supply chain optimization in commercial real estate."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Insurance",
      description: "Risk management and digital transformation solutions for insurance providers."
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Legal",
      description: "Transforming legal operations and client experiences through technology."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Information Providers",
      description: "Data management and analytics solutions for information service companies."
    }
  ];

  return (
    <section className="pt-0 pb-16 bg-white -mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Industries</h2>
          <p className="text-lg text-slate-600 max-w-4xl">
            We have deep expertise across multiple industries, allowing us to deliver tailored solutions that address sector-specific challenges and opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex flex-col h-full
                                         transform transition-all duration-300 ease-out
                                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                                         cursor-pointer">
              <div className="flex items-start mb-4 min-h-[3rem]">
                {industry.icon}
                <h3 className="text-xl font-semibold text-blue-900 ml-2 leading-tight">{industry.title}</h3>
              </div>
              <p className="text-slate-600 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries; 