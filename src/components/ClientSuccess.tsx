const ClientSuccess = () => {
  return (
    <section className="py-6 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-0 mt-4">
          <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">Our Approach to Client Success</h2>
          <p className="text-base text-slate-600 max-w-3xl">
            We combine industry expertise, innovative methodologies, and a client-centric approach to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center -mt-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <img
                src="/lovable-uploads/chen-services.png"
                alt="Elizabeth Chen"
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <blockquote className="text-base text-slate-700 italic mb-3">
                  "Our mission is to empower organizations to navigate complexity and achieve sustainable growth through strategic insights and practical solutions."
                </blockquote>
                <div>
                  <p className="font-semibold text-blue-900 text-sm">Elizabeth Chen, Chief Strategy Officer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/mapa%20services.png"
              alt="Services Map"
              className="w-80 h-80 object-contain transform scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccess; 