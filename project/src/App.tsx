import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import EarlySigns from './pages/EarlySigns';
import CaregiverSupport from './pages/CaregiverSupport';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import VolunteerForm from './pages/volunteer/VolunteerForm';
import DonationPage from './pages/donate/DonationPage';
import EventsPage from './pages/events/EventsPage';
import MembershipPage from './pages/membership/MembershipPage';
import GetSupport from './pages/support/GetSupport';
import LearnMore from './pages/resources/LearnMore';
import UnderstandingDementia from './pages/resources/UnderstandingDementia';
import CaregiversHandbook from './pages/resources/CaregiversHandbook';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/early-signs" element={<EarlySigns />} />
            <Route path="/caregiver-support" element={<CaregiverSupport />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/volunteer" element={<VolunteerForm />} />
            <Route path="/donate" element={<DonationPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/support" element={<GetSupport />} />
            <Route path="/learn" element={<LearnMore />} />
            <Route path="/resources/understanding-dementia" element={<UnderstandingDementia />} />
            <Route path="/resources/caregivers-handbook" element={<CaregiversHandbook />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;