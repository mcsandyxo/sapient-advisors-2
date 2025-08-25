import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSEO, SEO_DATA } from '../hooks/useSEO';

const CaseStudies = () => {
  // Apply SEO for Case Studies page
  useSEO(SEO_DATA.caseStudies);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="heading-hero mb-6">
              Our Case Studies
            </h1>
            <p className="text-hero-subtitle mx-auto">
              Explore how we've helped leading organizations transform their businesses 
              through strategic consulting and innovative solutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Raven */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100
                         transform transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                         cursor-pointer">
              <h2 className="heading-secondary mb-4">
                Project Raven
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A single conversation on product discovery inspired our first design 
                sprint and a new product to uncover new revenue streams through 
                cleaning unstructured data.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Design Sprints
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Innovation
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Data Strategy
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center border border-gray-200">
                    <span className="text-name text-sm">MM</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Maribeth Martorana, CFA</p>
                    <p className="text-sm text-gray-600">CEO</p>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
                  Read Case Study
                </button>
              </div>
            </div>

            {/* Amazon Alexa "Let's Chat" */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100
                         transform transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                         cursor-pointer">
              <h2 className="heading-secondary mb-4">
                Amazon Alexa "Let's Chat"
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team worked directly with Amazon's Alexa division to optimize voice 
                recognition algorithms, resulting in a 32% improvement in accuracy for 
                non-native English speakers and expanding market reach by 28% in 
                international markets.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  AI Development
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  IoT
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  MLOps
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                {/* <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center border border-gray-200">
                    <span className="text-name text-sm">PP</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Phanom Parker</p>
                    <p className="text-sm text-gray-600">Chief MLOps</p>
                  </div>
                </div> */}
                <div></div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
                  Read Case Study
                </button>
              </div>
            </div>

            {/* Credit Analyst Workbench */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100
                         transform transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                         cursor-pointer">
              <h2 className="heading-secondary mb-4">
                Credit Analyst Workbench
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Explore how we took an acquired startup to a fully operational, scalable 
                product using design sprints and collaborative Agile development.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  AI Development
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  UX Research
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Rapid prototyping
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center border border-gray-200">
                    <span className="text-name text-sm">SM</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Sandy McCarron</p>
                    <p className="text-sm text-gray-600">COO</p>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
                  Read Case Study
                </button>
              </div>
            </div>

            {/* Knowledge Graphs for Risk Management - Temporarily Disabled
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100
                         transform transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                         cursor-pointer">
              <h2 className="heading-secondary mb-4">
                Knowledge Graphs for Risk Management
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Unique approach enables investors and underwriters to quickly identify, 
                assess, and mitigate geospatial risks in a dynamic environment, helping 
                them make informed decisions.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Data Strategy
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Data Visualization
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Knowledge graphs
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full mr-4 flex items-center justify-center border border-gray-200">
                    <span className="text-name text-sm">MM</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Maribeth Martorana, CFA</p>
                    <p className="text-sm text-gray-600">CEO</p>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
                  Read Case Study
                </button>
              </div>
            </div>
            */}
          </div>

          {/* Book@Random Section - Temporarily Disabled
          <div className="mt-16 bg-white rounded-lg shadow-md p-8 border border-gray-100
                         transform transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                         cursor-pointer">
            <h2 className="heading-secondary mb-6">
              Book@Random
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-4xl text-blue-900 mb-4">"</div>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                  Put a quote here about the original data cleanup proj
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-name text-sm">SM</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Sandy McCarron</p>
                    <p className="text-sm text-gray-600">Member of Random House web team Book@Random</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📚</div>
                  <p className="text-sm font-medium">Bookstore with Digital Display</p>
                  <p className="text-xs mt-1 text-gray-400">Library/Bookstore Interior</p>
                </div>
              </div>
            </div>
          </div>
          */}

          {/* Ready to Transform Your Business Section */}
          <div className="mt-20 text-center bg-white py-16">
            <h2 className="heading-primary mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our strategic consulting services can help you achieve your 
              business goals and drive meaningful results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
                Explore Our Services
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                View Latest Insights
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
