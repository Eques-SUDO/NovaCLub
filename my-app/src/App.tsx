import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Artists from './pages/Artists';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      {/* Optimized Background Elements */}
      <div className="musical-staff-bg"></div>
      <div className="nova-constellation"></div>
      
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;