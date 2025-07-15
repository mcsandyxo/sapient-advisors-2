
import Header from '../components/Header';
import Footer from '../components/Footer';

const News = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-blue-900 mb-4">
              News & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest insights, expert analysis, and thought leadership from 
              Sapient Advisors.
            </p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Webinar */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                <div className="bg-blue-100 px-6 py-3">
                  <span className="text-blue-800 font-semibold text-sm">Upcoming Webinar</span>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">🏢</div>
                        <p className="text-sm">Conference Room</p>
                        <p className="text-xs">Office Presentation Setup</p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h2 className="text-2xl font-black text-blue-900 mb-3">
                        Office Hours with Avatar Buddy - July 15, 2025
                      </h2>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Join us for an interactive session exploring digital transformation strategies 
                        and the latest trends in AI-powered business solutions.
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <span className="mr-4">📅 July 15, 2025</span>
                        <span>🕒 2:00 - 3:00 EST</span>
                      </div>
                      
                      <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                        Reserve Seat
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours with Richard Vogel */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
                <h3 className="text-xl font-black text-blue-900 mb-3">
                  Office Hours with Richard Vogel - Aug 15, 2025
                </h3>
                <p className="text-gray-700 mb-4">
                  Strategic planning session focused on operational excellence and process optimization 
                  for modern enterprises.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-4">📅 Aug 15, 2025</span>
                    <span>🕒 2:00 - 3:00 EST</span>
                  </div>
                  <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                    Reserve Seat
                  </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* AI Things Tech Leadership */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
                <h3 className="text-lg font-black text-blue-900 mb-3">
                  AI Things Tech Leadership - Product Leadership with Michaela Martorana
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Explore the intersection of AI technology and product leadership strategies 
                  in today's rapidly evolving digital landscape.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full mr-3 flex items-center justify-center border border-gray-200">
                      <span className="text-gray-600 font-bold text-xs">MM</span>
                    </div>
                    <div>
                      <p className="font-black text-blue-900 text-sm">AI Things Tech Leadership</p>
                    </div>
                  </div>
                  <button className="bg-blue-900 text-white px-4 py-1 rounded text-sm font-semibold hover:bg-blue-800 transition-colors">
                    Read Full Post
                  </button>
                </div>
              </div>

              {/* Curiosity Code */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
                <h3 className="text-lg font-black text-blue-900 mb-3">
                  Curiosity Code
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Unlock the power of curiosity-driven innovation and how it can transform 
                  your approach to problem-solving and strategic thinking.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full mr-3 flex items-center justify-center border border-gray-200">
                      <span className="text-gray-600 font-bold text-xs">CC</span>
                    </div>
                    <div>
                      <p className="font-black text-blue-900 text-sm">Diana Moreno</p>
                    </div>
                  </div>
                  <button className="bg-blue-900 text-white px-4 py-1 rounded text-sm font-semibold hover:bg-blue-800 transition-colors">
                    Read Full Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Future Sights Section */}
          <div className="mt-16 bg-blue-100 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-blue-600 rounded-lg h-32 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🔮</div>
                  <p className="text-sm font-semibold">Future Vision</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-blue-900 mb-4">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
