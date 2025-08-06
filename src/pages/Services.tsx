import Header from '../components/Header';
import Footer from '../components/Footer';
import ExpertiseServices from '../components/ExpertiseServices';
import Industries from '../components/Industries';
import SuccessStories from '../components/SuccessStories';
import { useSEO, SEO_DATA } from '../hooks/useSEO';

const Services = () => {
  // Apply SEO for Services page
  useSEO(SEO_DATA.services);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Expertise & Services Section */}
      <ExpertiseServices />

      {/* Industries Section */}
      <Industries />

      {/* Success Stories Section */}
      <SuccessStories />

      <Footer />
    </div>
  );
};

export default Services;
