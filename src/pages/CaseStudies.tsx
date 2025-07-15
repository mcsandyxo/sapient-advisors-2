import Header from '../components/Header';
import Footer from '../components/Footer';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-blue-900 mb-6">
              Our Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Explore how we've helped leading organizations transform their businesses 
              through strategic consulting and innovative solutions.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Raven */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-black text-blue-900 mb-4">
                Project Raven
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A single conversation on product discovery inspired our first design 
                sprint and a new product to uncover new revenue streams through 
                cleaning unstructured data.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Design Sprints
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Innovation
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Data Strategy
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-sm">MM</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Maribeth Martorana, CFA</p>
                    <p className="text-sm text-gray-600">CEO</p>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Read Case Study
                </button>
              </div>
            </div>

            {/* Amazon Alexa "Let's Chat" */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-black text-blue-900 mb-4">
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
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  AI Development
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  IoT
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  MLOps
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-sm">PP</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Phanom Parker</p>
                    <p className="text-sm text-gray-600">Chief MLOps</p>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Read Case Study
                </button>
              </div>
            </div>

            {/* CVX */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-black text-blue-900 mb-4">
                CVX
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Explore how we took an acquired startup to a fully operational, scalable 
                product using design sprints and collaborative Agile development.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  AI Development
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  UX Research
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Rapid prototyping
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-sm">SM</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Sandy McCarron</p>
                    <p className="text-sm text-gray-600">COO</p>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Read Case Study
                </button>
              </div>
            </div>

            {/* Knowledge Graphs for Risk Management */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-black text-blue-900 mb-4">
                Knowledge Graphs for Risk Management
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Unique approach enables investors and underwriters to quickly identify, 
                assess, and mitigate geospatial risks in a dynamic environment, helping 
                them make informed decisions.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Data Strategy
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Data Visualization
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Knowledge graphs
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-sm">MM</span>
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Maribeth Martorana, CFA</p>
                    <p className="text-sm text-gray-600">CEO</p>
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Read Case Study
                </button>
              </div>
            </div>
          </div>

          {/* Book@Random Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-black text-blue-900 mb-6">
              Book@Random
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Quote and Comment */}
              <div>
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Put a quote here about the original data cleanup proj
                </p>
                
                {/* Comment Section */}
                <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 font-bold text-xs">SM</span>
                    </div>
                    <div>
                      <p className="font-black text-blue-900 text-sm">Sandy McCarron</p>
                      <p className="text-xs text-gray-600 mb-2">Member of Random House web team Book@Random</p>
                      <p className="text-sm text-gray-700">
                        <strong>Fede - we can hide/comment this one out for now</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Bookstore Image */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📚</div>
                  <p className="text-sm">Bookstore with Digital Display</p>
                  <p className="text-xs mt-1">Library/Bookstore Interior</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ready to Transform Your Business Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-black text-blue-900">
              Ready to Transform Your Business?
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
