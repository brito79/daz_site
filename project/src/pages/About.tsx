import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import TeamSection from '../components/about/TeamSection';

const About = () => {
  return (
    <div className="bg-white">
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <TeamSection />
    </div>
  );
};

export default About;