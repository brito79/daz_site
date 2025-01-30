import HeroSection from '../components/home/HeroSection';
import DementiaOverview from '../components/home/DementiaOverview';
import DementiaInfo from '../components/home/DementiaInfo';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DementiaOverview />
      <DementiaInfo />
    </div>
  );
};

export default Home;