import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      category: "Financial Services",
      title: "Credit Vision",
      description: "Transformed credit risk assessment processes, resulting in 30% faster approvals and 25% reduction in defaults.",
      image: "/placeholder.svg", // Using placeholder since we don't have the actual images
      link: "#"
    },
    {
      category: "Technology",
      title: "Project Raven",
      description: "Developed an AI-powered analytics platform that increased operational efficiency by 45% for a Fortune 500 tech company.",
      image: "/placeholder.svg",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Success Stories Section */}
          <div className="lg:col-span-2">
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
                    <p className="text-blue-600 font-semibold text-sm mb-2">{story.category}</p>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{story.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{story.description}</p>
                    <Link 
                      to={story.link} 
                      className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                    >
                      Read case study →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="lg:col-span-1">
            <div className="bg-blue-900 text-white p-8 rounded-lg h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-6">
                Schedule a consultation with our experts to discuss your business challenges and how we can help you achieve your goals.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm">Personalized strategic recommendations</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm">Industry-specific insights</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-3" />
                  <span className="text-sm">Actionable implementation roadmap</span>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
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