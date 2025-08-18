import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import InstituteServices from './pages/InstituteServices';
import PlacementServices from './pages/PlacementServices';
import AdmissionAssistance from './pages/AdmissionAssistance';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institute-services" element={<InstituteServices />} />
            <Route path="/placement-services" element={<PlacementServices />} />
            <Route path="/admission-assistance" element={<AdmissionAssistance />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;