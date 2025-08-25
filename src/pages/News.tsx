
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSEO, SEO_DATA } from '../hooks/useSEO';

const News = () => {
  // Apply SEO for News page
  useSEO(SEO_DATA.news);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="heading-hero mb-4">
              News & Insights
            </h1>
            <p className="text-hero-subtitle mx-auto">
              Stay informed with the latest trends, press releases, research, and thought leadership from 
              Sapient Advisors.
            </p>
          </div>

          {/* Section Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900">Upcoming Webinars</h2>
          </div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Webinars */}
            <div>
              <div className="space-y-6">
                {/* Office Hours with Dave Merwin - New Featured */}
                <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden
                               transform transition-all duration-300 ease-out
                               hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                               cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden flex items-center justify-center">
                    <div className="text-center text-white">
                      <h4 className="text-2xl font-bold mb-2">Office Hours</h4>
                      <p className="text-blue-200">Live LinkedIn Session</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">
                      📅 Sept 16 @1pm EST
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Office Hours with Dave Merwin
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      Dave Merwin shares his real-world journey in vibecoding and his unique approach to blending creativity and technology to help small businesses harness the power of AI to grow, adapt, and thrive.
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <span className="mr-4">🕒 1:00 PM - 2:00 PM EST</span>
                      <span>1-hour LinkedIn Live session with Q&A</span>
                    </div>
                    
                    <a 
                      href="https://www.linkedin.com/events/designingai-digitalproductsthat7361582136681762816/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full inline-block text-center"
                    >
                      Register Now
                    </a>
                  </div>
                </div>

                {/* Office Hours with Richard Vogel - Past Event */}
                <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6
                               transform transition-all duration-300 ease-out
                               hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                               cursor-pointer">
                  <div className="mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Past Event</span>
                    <span className="text-gray-500 text-xs ml-4">Aug 13, 2025</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Office Hours with Richard Vogel
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Our Chief Data Strategist Richard Vogel talks about how to set up your 
                    data for successful AI implementation
                  </p>
                  
                  <a 
                    href="https://www.linkedin.com/events/it-snottheai-it-sthedata-therea7349414910876872704/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full inline-block text-center"
                  >
                    Watch on LinkedIn
                  </a>
                </div>

                {/* Office Hours with Avatar Buddy */}
                <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6
                               transform transition-all duration-300 ease-out
                               hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                               cursor-pointer">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Office Hours with Avatar Buddy - July 11, 2025
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Join our panel of industry experts as they discuss practical strategies for 
                    implementing meaningful digital transformation initiatives that drive real 
                    business value.
                  </p>
                  
                  <a 
                    href="https://www.linkedin.com/video/live/urn:li:ugcPost:7349493159497809921/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full inline-block text-center"
                  >
                    Watch on LinkedIn
                  </a>
                </div>

                {/* Want to appear section */}
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">
                    Want to appear on our monthly LinkedIn Live series, Office Hours?
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Sapient Advisors hosts Office Hours with panelists driving thought leadership 
                    on AI, Strategy, and the future of work. We are seeking visionaries to speak 
                    and share thought leadership on our informative series.
                  </p>
                  
                  <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                    Be Our Guest
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Articles & Insights */}
            <div className="space-y-6">
              {/* AI Things Tech Leadership */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6
                             transform transition-all duration-300 ease-out
                             hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                             cursor-pointer">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Video</span>
                  <span className="text-gray-500 text-xs ml-4">October 2024</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  All Things Tech Leadership - Product Leadership with Maribeth Martorana
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Explore how AI, data analytics, and sustainability are reshaping the consulting 
                  landscape and creating new opportunities for business growth.
                </p>
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full mr-3 overflow-hidden border border-gray-200">
                    <img
                      src="/lovable-uploads/All-Things-Tech-Leadership-services.png"
                      alt="All Things Tech Leadership"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">All Things Tech Leadership</p>
                  </div>
                </div>
                
                <a 
                  href="https://www.linkedin.com/events/allthingstechleadership-product7255706164821151744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition-colors inline-block w-full text-center"
                >
                  Watch on LinkedIn
                </a>
              </div>

              {/* Curiosity Code */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6
                             transform transition-all duration-300 ease-out
                             hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                             cursor-pointer">
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Podcast</span>
                  <span className="text-gray-500 text-xs ml-4">June 2025</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Curiosity Code
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  The Curiosity Code Podcast dives into the ideas and people shaping the future 
                  of fintech hosted by Alex and featuring product leaders, founders, and 
                  executives transforming financial services from the inside out.
                </p>
                
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full mr-3 overflow-hidden border border-gray-200">
                    <img
                      src="/lovable-uploads/chen-services.png"
                      alt="Marcus Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Marcus Chen</p>
                  </div>
                </div>
                
                <a 
                  href="https://www.youtube.com/watch?v=ElDFx3nUpk0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition-colors inline-block w-full text-center"
                >
                  Watch on YouTube
                </a>
              </div>

              {/* Unlocking Generative AI */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6
                             transform transition-all duration-300 ease-out
                             hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                             cursor-pointer">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Strategy</span>
                  <span className="text-gray-500 text-xs ml-4">January 2025</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Unlocking the Potential of Generative AI: Real-World Use Cases in 2025
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  In 2025, businesses should be transitioning away from "AI-enhanced" to "AI-first" applications.
                </p>
                
                <a 
                  href="https://medium.com/future-sights/unlocking-the-potential-of-generative-ai-8e0d6051761a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
                >
                  Read More
                </a>
              </div>

              {/* The Art of Startup War */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6
                             transform transition-all duration-300 ease-out
                             hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                             cursor-pointer">
                <div className="mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">Technology</span>
                  <span className="text-gray-500 text-xs ml-4">January 2025</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  The Art of (Startup)War: Navigating Uncertainty with Sun Tzu
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  How quantum computing will revolutionize risk assessment, fraud detection, and algorithmic trading by 2025.
                </p>
                
                <a 
                  href="https://medium.com/future-sights/the-art-of-startup-war-navigating-uncertainty-with-sun-tzu-2534313fe49a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>



          {/* Future Sights Section - TEMPORARILY COMMENTED OUT */}
          {/*
          <div className="mt-16 bg-blue-100 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-blue-600 rounded-lg h-32 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🔮</div>
                  <p className="text-sm font-semibold">Future Vision</p>
                </div>
              </div>
              
              <div>
                <h3 className="heading-secondary mb-4">
                  Future Sights
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Predictions from thought leaders and innovators who are shaping tomorrow's 
                  business landscape. Discover emerging trends and strategic insights that will 
                  define the future of enterprise innovation.
                </p>
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Explore Future Sights
                </button>
              </div>
            </div>
          </div>
          */}

          {/* Sponsor Section - TEMPORARILY COMMENTED OUT */}
          {/*
          <div className="mt-16 bg-blue-50 rounded-lg p-8 shadow-sm
                         transform transition-all duration-300 ease-out
                         hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                         cursor-pointer">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="heading-tertiary mb-2">
                  Want to sponsor our monthly LinkedIn Live series, Office Hours?
                </h3>
                <p className="text-gray-700">
                  Connect with industry leaders and build meaningful connections while reaching our engaged audience and the future of strategic innovation.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                  Request A Sponsor
                </button>
                <div className="text-right mt-2">
                  <p className="text-blue-600 text-sm font-semibold whitespace-nowrap">We can't do this without you</p>
                </div>
              </div>
            </div>
          </div>
          */}

          {/* Sapient Advisors in the News Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Sapient Advisors in the News</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Sapient Advisors has been featured for its strategic partnerships and data-driven solutions, helping fintech, insurance and CRE clients modernize operations through AI, analytics, and digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* News Card 1 */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6
                             transform transition-all duration-300 ease-out
                             hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                             cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Strategic Partnership Announcement
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Avatar Buddy and Sapient Advisors Announce Strategic Partnership to Revolutionize Internal AI Projects
                </p>
                
                <button 
                  className="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-semibold w-full cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </button>
              </div>

              {/* News Card 2 */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6
                             transform transition-all duration-300 ease-out
                             hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                             cursor-pointer">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  WJBF Press Release Coverage
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Avatar Buddy and Sapient Advisors Announce Strategic Partnership to Revolutionize Internal AI Projects
                </p>
                
                <a 
                  href="https://www.wjbf.com/business/press-releases/ein-presswire/821257649/avatar-buddy-and-sapient-advisors-announce-strategic-partnership-to-revolutionize-internal-ai-projects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full inline-block text-center"
                >
                  Read Full Article
                </a>
              </div>
            </div>
          </div>

          {/* Specialized Expertise Section */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Left side - Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Looking for specialized expertise?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Explore our case studies to see how we've helped organizations like yours achieve remarkable results. 
                  We offer research as a service, contact us for custom reporting.
                </p>
              </div>
              
              {/* Right side - Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:flex-shrink-0">
                <Link 
                  to="/case-studies" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center whitespace-nowrap"
                >
                  View Case Studies
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="border-2 border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
