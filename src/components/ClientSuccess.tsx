const ClientSuccess = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Approach to Client Success</h2>
          <p className="text-xl text-slate-600 max-w-3xl">
            We combine industry expertise, innovative methodologies, and a client-centric approach to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-slate-300 flex-shrink-0"></div>
                <div>
                  <blockquote className="text-lg text-slate-700 italic mb-4">
                    "Our mission is to empower organizations to navigate complexity and achieve sustainable growth through strategic insights and practical solutions."
                  </blockquote>
                  <div>
                    <p className="font-semibold text-slate-900">Elizabeth Chen</p>
                    <p className="text-blue-600 text-sm">Chief Strategy Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-8 border-cyan-400 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-20"></div>
                <div className="absolute inset-8 rounded-full bg-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-slate-600 mb-1">Discover</div>
                    <div className="text-sm font-semibold text-slate-600 mb-1">Design</div>
                    <div className="text-sm font-semibold text-slate-600 mb-1">Implement</div>
                    <div className="text-sm font-semibold text-slate-600">Optimize</div>
                  </div>
                </div>
              </div>
              {/* Process labels around the circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white font-semibold bg-cyan-400 px-3 py-1 rounded text-sm">
                Discover
              </div>
              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-white font-semibold bg-cyan-400 px-3 py-1 rounded text-sm">
                Design
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white font-semibold bg-cyan-400 px-3 py-1 rounded text-sm">
                Implement
              </div>
              <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-white font-semibold bg-cyan-400 px-3 py-1 rounded text-sm">
                Optimize
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccess; 