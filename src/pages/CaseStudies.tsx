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
              Our Success Stories
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
                Moody's Analytics Project Raven
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
                  <div className="w-12 h-12 rounded-full mr-4 overflow-hidden border border-gray-200">
                    <img 
                      src="/team/maribeth-martorana.png" 
                      alt="Maribeth Martorana" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Maribeth Martorana, CFA</p>
                    <p className="text-sm text-gray-600">CEO</p>
                  </div>
                </div>
                <a 
                  href="/case-studies/Case-Study-Project-Raven-Sapient-Advisors.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm inline-block text-center"
                >
                  Read Case Study
                </a>
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
                    <p className="font-black text-blue-900">Maribeth Martorana, CFA</p>
                    <p className="text-sm text-gray-600">Chief MLOps</p>
                  </div>
                </div> */}
                <div></div>
                <a 
                  href="/case-studies/Case-Study-Project-Lets-Chat-Alexa.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm inline-block text-center"
                >
                  Read Case Study
                </a>
              </div>
            </div>
{/* Quiqspread */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100
                         transform transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                         cursor-pointer">
              <h2 className="heading-secondary mb-4">
                Moody's Analytics Quiqspread
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Moody's first machine-learning product- from architecture to sales enablement- generating $5M in new revenue.

              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  AI / ML Development
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Product Strategy
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Cloud Computing
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4 overflow-hidden border border-gray-200">
                    <img 
                      src="/team/zaid-marji.png" 
                      alt="Zaid Marji" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Zaid Marji</p>
                    <p className="text-sm text-gray-600">CTO</p>
                  </div>
                </div>
                <a 
                  href="/case-studies/Case-Study-Project-QuiqSpread-SapientAdvisors.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm inline-block text-center"
                >
                  Read Case Study
                </a>
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
                  <div className="w-12 h-12 rounded-full mr-4 overflow-hidden border border-gray-200">
                    <img 
                      src="/team/sandy-mccarron.png" 
                      alt="Sandy McCarron" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Sandy McCarron</p>
                    <p className="text-sm text-gray-600">COO</p>
                  </div>
                </div>
                <a 
                  href="/case-studies/Case-Study-Project-CVX-Sapient-Advisors.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm inline-block text-center"
                >
                  Read Case Study
                </a>
              </div>
            </div>
      {/* DGN */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100
                         transform transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                         cursor-pointer">
              <h2 className="heading-secondary mb-4">
                Dodge Global Network
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
                  <div className="w-12 h-12 rounded-full mr-4 overflow-hidden border border-gray-200">
                    <img 
                      src="/team/sandy-mccarron.png" 
                      alt="Sandy McCarron" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Sandy McCarron</p>
                    <p className="text-sm text-gray-600">COO</p>
                  </div>
                </div>
                <a 
                  href="/case-studies/Case-Study-Project-DGN-Sapient Advisors.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm inline-block text-center"
                >
                  Read Case Study
                </a>
              </div>
            </div>
{/* JP Morgan */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100
                         transform transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                         cursor-pointer">
              <h2 className="heading-secondary mb-4">
                DX Reference JP Morgan
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Designed and built a centralized, metadata-driven global research library standardizing data, UX, and access—
                becoming a mission-critical, bank-wide platform used globally across product lines.
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Data Taxonomy
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Research
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Data
                </span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4 overflow-hidden border border-gray-200">
                    <img 
                      src="/team/richard-vogel.png" 
                      alt="Richard Vogel" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Richard Vogel</p>
                    <p className="text-sm text-gray-600">Chief Data Strategist</p>
                  </div>
                </div>
                <a 
                  href="/case-studies/Case-Study-JPMorganChase-Sapient-Advisors.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm inline-block text-center"
                >
                  Read Case Study
                </a>
              </div>
            </div>

            {/* Bank Focus */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100
                         transform transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                         cursor-pointer">
              <h2 className="heading-secondary mb-4">
                Moody's Bank Focus
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Designed and built an automated, high-volume bank financials processing capability—driven by machine learning, a 
                2,400-point data taxonomy, and global offshore operations 
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Data Operations
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Data Taxonomy
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4 overflow-hidden border border-gray-200">
                    <img 
                      src="/team/richard-vogel.png" 
                      alt="Richard Vogel" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Richard Vogel</p>
                    <p className="text-sm text-gray-600">Chief Data Strategist</p>
                  </div>
                </div>
                <a 
                  href="/case-studies/Case-Study-Moodys-Analytics-Sapient-Advisors.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm inline-block text-center"
                >
                  Read Case Study
                </a>
              </div>
            </div>

            {/* Project Iron */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100
                         transform transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                         cursor-pointer">
              <h2 className="heading-secondary mb-4">
                Project Iron
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Internal AI Business development tool created for Amazon Web Services.

              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  AI / ML Development
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Product Strategy
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                  Cloud Computing
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4 overflow-hidden border border-gray-200">
                    <img 
                      src="/team/zaid-marji.png" 
                      alt="Zaid Marji" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Zaid Marji</p>
                    <p className="text-sm text-gray-600">CTO</p>
                  </div>
                </div>
                <a 
                  href="/case-studies/Case-Study-Project-Iron-Sapient-Advisors.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm inline-block text-center"
                >
                  Read Case Study
                </a>
              </div>
            </div>

            {/* Knowledge Graphs for Risk Management - Temporarily Disabled */}
            {/*
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

          {/* The Strategy Signal Section */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8 border border-gray-100
                         transform transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                         cursor-pointer">
            <h2 className="heading-secondary mb-6">
              Read The Strategy Signal Newsletter
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-4xl text-blue-900 mb-4"></div>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                  "I help leaders get clarity and cut through chaos to execute AI transformation successfully. Your data is a scalable asset for AI and real growth."
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4 overflow-hidden border border-gray-200">
                    <img 
                      src="/team/maribeth-martorana.png" 
                      alt="Maribeth Martorana" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-black text-blue-900">Maribeth Martorana</p>
                    <p className="text-sm text-gray-600">Cut through the AI hype: turn signals into strategy, and strategy into growth for your business.</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maribethmartorana.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border border-gray-200 overflow-hidden block"
              >
                <img 
                  src="/lovable-uploads/strategy-signal.png" 
                  alt="The Strategy Signal" 
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          </div>

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
