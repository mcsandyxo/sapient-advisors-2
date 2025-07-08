import Header from '../components/Header';
import Footer from '../components/Footer';
import ExpertiseServices from '../components/ExpertiseServices';
import Industries from '../components/Industries';
import ClientSuccess from '../components/ClientSuccess';
import SuccessStories from '../components/SuccessStories';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Expertise & Services Section */}
      <ExpertiseServices />

      {/* Industries Section */}
      <Industries />

      {/* Client Success Section */}
      <ClientSuccess />

      {/* Success Stories Section */}
      <SuccessStories />

      <Footer />
    </div>
  );
};

export default Services;
