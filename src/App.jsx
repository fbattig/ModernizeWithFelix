import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import './App.css';

const ScrollToTop = () =>
{
  const { pathname, hash } = useLocation();

  useEffect(() =>
  {
    if (hash)
    {
      const element = document.getElementById(hash.replace('#', ''));
      if (element)
      {
        setTimeout(() =>
        {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else
    {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const Navbar = () =>
{
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '-0.5px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap size={28} fill="currentColor" />
          Modernize With Felix
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-main)' }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', color: 'var(--text-main)' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'white', borderBottom: '1px solid #eee', overflow: 'hidden' }}
          >
            <div className="container" style={{ padding: '1rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ padding: '0.5rem 0', borderBottom: '1px solid #f0f0f0' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

const Footer = () =>
{
  return (
    <footer style={{ background: '#0F172A', color: '#94A3B8', padding: '4rem 0' }}>
      <div className="container">
        <div className="grid-2" style={{ gap: '4rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap size={24} fill="currentColor" />
              Modernize With Felix
            </div>
            <p style={{ maxWidth: '300px' }}>
              Expert IT consulting for small and medium businesses in the Greater Toronto Area.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '4rem' }}>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Services</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><Link to="/services">IT Modernization</Link></li>
                <li><Link to="/services">AI & Automation</Link></li>
                <li><Link to="/services">Cloud Solutions</Link></li>
                <li><Link to="/services">Web Development</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1E293B', paddingTop: '2rem', textAlign: 'center', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Modernize With Felix. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

import Chatbot from './components/Chatbot';

function App()
{
  const location = useLocation();

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default function WrappedApp()
{
  return (
    <Router>
      <App />
    </Router>
  );
}
