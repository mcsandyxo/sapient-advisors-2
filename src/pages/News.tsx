
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const News = () => {
  const articles = [
    {
      title: "Project Raven",
      excerpt: "Exploring emerging trends and technologies that will shape business transformation strategies in the coming year.",
      date: "June 2025",
      category: "Digital Transformation",
      readTime: "5 min read",
      featured: true
    },
    {
      title: "Leveraging AI for Strategic Decision Making",
      excerpt: "How artificial intelligence is revolutionizing business intelligence and strategic planning processes.",
      date: "December 10, 2024",
      category: "Technology",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Building Resilient Supply Chains",
      excerpt: "Strategies for creating supply chain networks that can withstand global disruptions and market volatility.",
      date: "December 5, 2024",
      category: "Operations",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Data-Driven Culture: A Competitive Advantage",
      excerpt: "How organizations are fostering data literacy and analytics-driven decision making across all levels.",
      date: "November 28, 2024",
      category: "Data Analytics",
      readTime: "4 min read",
      featured: false
    },
    {
      title: "Sustainable Business Practices in Modern Enterprise",
      excerpt: "The integration of ESG principles into core business strategies and operational frameworks.",
      date: "November 20, 2024",
      category: "Sustainability",
      readTime: "8 min read",
      featured: false
    },
    {
      title: "The Rise of Remote-First Organizations",
      excerpt: "Best practices for building and managing distributed teams in the post-pandemic business landscape.",
      date: "November 15, 2024",
      category: "Workplace",
      readTime: "5 min read",
      featured: false
    }
  ];

  const insights = [
    {
      title: "2024 Business Transformation Report",
      description: "Comprehensive analysis of transformation trends across industries",
      type: "White Paper"
    },
    {
      title: "Digital Strategy Playbook",
      description: "Step-by-step guide to successful digital transformation",
      type: "Guide"
    },
    {
      title: "ROI of Business Intelligence",
      description: "Measuring the impact of data-driven decision making",
      type: "Case Study"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Insights</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay informed with the latest trends, insights, and thought leadership 
              in business strategy and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {articles.filter(article => article.featured).map((article, index) => (
        <section key={index} className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Tag className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-medium">{article.category}</span>
                  <span className="mx-2 text-slate-400">•</span>
                  <span className="text-slate-600">{article.readTime}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {article.title}
                </h2>
                <p className="text-lg text-slate-600 mb-6">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-slate-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="bg-slate-200 rounded-lg h-64 lg:h-80"></div>
            </div>
          </div>
        </section>
      ))}

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-slate-600">Expert insights and industry perspectives</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => !article.featured).map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-slate-200 h-48 rounded-t-lg"></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="ml-auto text-slate-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{article.title}</h3>
                  <p className="text-slate-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Business Resources</h2>
            <p className="text-xl text-slate-600">Download our research and tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {insight.type}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{insight.title}</h3>
                <p className="text-slate-600 mb-6">{insight.description}</p>
                <button className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition-colors">
                  Download Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
