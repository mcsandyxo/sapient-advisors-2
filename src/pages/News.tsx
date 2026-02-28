import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useSEO, SEO_DATA } from '../hooks/useSEO';

const News = () => {
  useSEO(SEO_DATA.news);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="heading-hero mb-4">News & Insights</h1>
            <p className="text-hero-subtitle mx-auto">
              Stay informed with the latest trends, press releases, research, and thought leadership from Sapient Advisors.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900">Upcoming Webinars</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden flex items-center justify-center">
                    <div className="text-center text-white">
                      <h4 className="text-2xl font-bold mb-2">Office Hours with Melissa Medina & Burhan Sebin</h4>
                      <p className="text-blue-200">Live LinkedIn Session</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold">📅 Mar 19 @12pm EDT</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours with Melissa Medina & Burhan Sebin</h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      Miami's Innovation Platform:haping Florida’s Tech future with Melissa Medina and Burhan Sebin from Emerge Americas.
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <span className="mr-4">🕒 12:00 PM - 1:00 PM ET</span>
                      <span>1-hour LinkedIn Live session with Q&A</span>
                    </div>
                    <a href="https://www.linkedin.com/event/manage/7430294679012876288/" target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full inline-block text-center">Register Now</a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] cursor-pointer">
                  <div className="mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Past Event</span>
                    <span className="text-gray-500 text-xs ml-4">Jan 20, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours with Zaid Marji</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      Designing AI-Native Enterprises: From Pilots to Scalable Systems with Zaid Marji, Chief Technology Officer at Sapient Advisors.
                  </p>
                  <a href="https://www.linkedin.com/event/manage/7419409362449784833/" target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full inline-block text-center">Watch on LinkedIn</a>
                </div>

                <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] cursor-pointer">
                  <div className="mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Past Event</span>
                    <span className="text-gray-500 text-xs ml-4">Jan 20, 2026</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours with Joyce Shen</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Joyce Shen is our guest as we discuss data and AI trends shaping up in 2026.
                  </p>
                  <a href="https://www.linkedin.com/events/7405326529783685122/" target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full inline-block text-center">Watch on LinkedIn</a>
                </div>

                <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] cursor-pointer">
                  <div className="mb-4">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Past Event</span>
                    <span className="text-gray-500 text-xs ml-4">Dec 9, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Office Hours with Aashish Mehta</h3>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Aashish Mehta is our guest as we discuss: The AI Advantage in Finance: What Every Leader Must Know Going Into 2026
                  </p>
                  <a href="https://www.linkedin.com/events/theaiadvantageinfinance-whateve7394554390981791744/" target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full inline-block text-center">Watch on LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] cursor-pointer">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Video</span>
                  <span className="text-gray-500 text-xs ml-4">October 2024</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  All Things Tech Leadership - Product Leadership with Maribeth Martorana
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Explore how AI, data analytics, and sustainability are reshaping the consulting landscape and creating new opportunities for business growth.
                </p>
                <a href="https://www.linkedin.com/events/allthingstechleadership-product7255706164821151744" target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition-colors inline-block w-full text-center">Watch on LinkedIn</a>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] cursor-pointer">
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Podcast</span>
                  <span className="text-gray-500 text-xs ml-4">June 2025</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Curiosity Code</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  The Curiosity Code Podcast dives into the ideas and people shaping the future of fintech hosted by Alex and featuring product leaders, founders, and executives transforming financial services.
                </p>
                <a href="https://www.youtube.com/watch?v=ElDFx3nUpk0" target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition-colors inline-block w-full text-center">Watch on YouTube</a>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] cursor-pointer">
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
                <a href="https://medium.com/future-sights/unlocking-the-potential-of-generative-ai-8e0d6051761a" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">Read More</a>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] cursor-pointer">
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
                <a href="https://medium.com/future-sights/the-art-of-startup-war-navigating-uncertainty-with-sun-tzu-2534313fe49a" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">Read More</a>
              </div>
            </div>
          </div>

          {/* Sapient Advisors in the News Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Sapient Advisors in the News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]">
                <div className="mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">Press Release</span>
                  <span className="text-gray-500 text-xs ml-4">December 2025</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Sapient Advisors Appoints Zaid Marji as Chief Technology Officer</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Leading consulting firm announces inaugural AI Strategy Summit bringing together industry leaders to discuss enterprise AI implementation.
                </p>
                <a href="https://24junction.com/article/release/76645b01c76b/sapient-advisors-appoints-zaid-marji-as-chief-technology-officer" className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">Read Press Release →</a>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]">
                <div className="mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">Press Release</span>
                  <span className="text-gray-500 text-xs ml-4">November 2025</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">AI Transformation Practice Announcement</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  As Firms Enter 2026, Sapient Advisors launches its AI Transformation Practice, to help Financial Services, Insurance, and Real Estate Firms Turn AI Experiments into Enterprise Results
                </p>
                <a href="https://nynewswire.net/article/release/ef7e52860fec/as-firms-enter-2026,-sapient-advisors-helps-financial-services,-insurance,-and-real-estate-firms-turn-ai-experiments-into-enterprise-results" className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">Read Press Release →</a>
              </div>

              <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]">
                <div className="mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">Press Release</span>
                  <span className="text-gray-500 text-xs ml-4">June 2025</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Avatar Buddy and Sapient Advisors </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Avatar Buddy and Sapient Advisors Announce Strategic Partnership to Revolutionize Internal AI Projects                </p>
                <a href="https://www.wjbf.com/business/press-releases/ein-presswire/821257649/avatar-buddy-and-sapient-advisors-announce-strategic-partnership-to-revolutionize-internal-ai-projects/" className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">Read Press Release →</a>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-blue-50 rounded-lg p-8 shadow-sm transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] cursor-pointer">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="heading-tertiary mb-2">
                  Want to appear on our monthly LinkedIn Live series, Office Hours?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sapient Advisors hosts Office Hours with panelists driving thought leadership on AI, Strategy, and the future of work.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:flex-shrink-0">
                <Link to="/case-studies" onClick={() => window.scrollTo(0, 0)} className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-flex items-center justify-center whitespace-nowrap">
                  View Case Studies
                </Link>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="border-2 border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center whitespace-nowrap">
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
