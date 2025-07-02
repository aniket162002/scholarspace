import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import WebProjects from './pages/WebProjects';
import AppProjects from './pages/AppProjects';
import AIMLProjects from './pages/AIMLProjects';
import GenAIProjects from './pages/GenAIProjects';
import FullStackProjects from './pages/FullStackProjects';
import CustomProject from './pages/CustomProject';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/web-projects" element={<WebProjects />} />
            <Route path="/app-projects" element={<AppProjects />} />
            <Route path="/ai-ml-projects" element={<AIMLProjects />} />
            <Route path="/gen-ai-projects" element={<GenAIProjects />} />
            <Route path="/fullstack-projects" element={<FullStackProjects />} />
            <Route path="/custom" element={<CustomProject />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;