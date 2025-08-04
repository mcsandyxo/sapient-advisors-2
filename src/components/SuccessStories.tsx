import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      category: "Financial Services",
      title: "CVX",
      description: "Transformed credit risk assessment processes, resulting in 30% faster approvals and 25% reduction in defaults.",
      image: "/public/lovable-uploads/cvx services.png",
      link: "/case-studies"
    },
    {
      category: "Technology",
      title: "Project Raven", 
      description: "Developed an AI-powered analytics platform that increased operational efficiency by 45% for a Fortune 500 tech company.",
      image: "/public/lovable-uploads/proyect raven services.png",
      link: "/case-studies"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
          {/* Success Stories Section */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stories.map((story, index) => (
                <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 bg-slate-200 relative">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-blue-900 font-semibold text-sm mb-2">{story.category}</p>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{story.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{story.description}</p>
                    <Link 
                      to={story.link} 
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-blue-900 font-semibold text-sm hover:text-blue-800 transition-colors"
                    >
                      Read case study →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="lg:col-span-2">
            <div className="bg-blue-900 text-white p-6 rounded-lg h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">Ready to Transform Your Business?</h3>
                <p className="text-blue-100 mb-6 text-sm">
                  Schedule a consultation with our experts to discuss your business challenges and how we can help you achieve your goals.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <div className="w-3.5 h-3.5 bg-blue-500 rounded-full mr-2 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Personalized strategic recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3.5 h-3.5 bg-blue-500 rounded-full mr-2 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Industry-specific insights</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3.5 h-3.5 bg-blue-500 rounded-full mr-2 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Actionable implementation roadmap</span>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/news" 
                onClick={() => window.scrollTo(0, 0)}
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center inline-block"
              >
                Explore Our Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 