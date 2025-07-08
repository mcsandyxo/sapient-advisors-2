import Header from '../components/Header';
import Footer from '../components/Footer';
import Industries from '../components/Industries';
import ExpertiseServices from '../components/ExpertiseServices';
import ClientSuccess from '../components/ClientSuccess';
import SuccessStories from '../components/SuccessStories';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Industries Section */}
      <Industries />

      {/* Expertise & Services Section */}
      <ExpertiseServices />

      {/* Client Success Section */}
      <ClientSuccess />

      {/* Success Stories Section */}
      <SuccessStories />

      <Footer />
    </div>
  );
};

export default Services;
