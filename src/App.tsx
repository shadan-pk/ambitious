import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import BlobBackground from './components/BlobBackground';
import TechIcons from './components/TechIcons';
import GlassCard from './components/GlassCard';
import { FaPaintBrush, FaCode, FaUsers } from 'react-icons/fa';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

const HomePage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{ display: 'flex', width: '100%' }}
  >
    <div className="left-panel">
      <h1 className="name">SHADAN PK</h1>
      <div className="experience-blocks">
        <GlassCard icon={FaPaintBrush} title="Designing" />
        <GlassCard icon={FaCode} title="UI/UX" />
        <GlassCard icon={FaUsers} title="Volunteering" />
      </div>
    </div>
    <div className="right-panel">
      <img 
        src="https://picsum.photos/400" 
        alt="Shadan PK" 
        className="profile-image"
      />
    </div>
  </motion.div>
);

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      <BlobBackground />
      <TechIcons />
      <div className="glass-pane">
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </AnimatePresence>
        </main>
        <nav className="navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
        </nav>
      </div>
    </div>
  );
};

export default App;
