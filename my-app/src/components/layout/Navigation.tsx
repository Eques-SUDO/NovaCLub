import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavItem {
  path: string;
  label: string;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Show/hide based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    setScrolled(currentScrollY > 50);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let ticking = false;
    
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    return () => window.removeEventListener('scroll', optimizedScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems: NavItem[] = useMemo(() => [
    { path: '/', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/artists', label: 'Artists' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ], []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 transform ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      scrolled ? 'glass-dark shadow-cosmic backdrop-blur-2xl' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group transition-all duration-500 hover:scale-105 relative"
          >
            {/* Musical Elements Around Logo */}
            <div className="absolute -top-2 -left-2 music-note text-xs opacity-60" style={{ animationDelay: '0s' }}>♪</div>
            <div className="absolute -bottom-2 -right-2 cosmic-sparkle" style={{ animationDelay: '2s' }} />
            
            <div className="relative overflow-hidden rounded-full">
              <img 
                src="/nova logo.png" 
                alt="NOVA MUSIC Logo" 
                className="h-16 w-16 object-contain mr-4 logo-nova animate-float transition-all duration-700"
              />
              
              {/* Enhanced Glow Effects */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 animate-pulse-glow"></div>
              <div className="absolute inset-0 bg-nova-neon/10 rounded-full blur-2xl opacity-30 animate-particle-float"></div>
              
              {/* Sound Wave Ripples */}
              <div className="absolute inset-0 wave-ripple w-full h-full opacity-0 group-hover:opacity-60 transition-opacity duration-500" style={{ animationDelay: '0.2s' }} />
            </div>
            
            <div className="relative">
              <span className="text-2xl font-bold font-heading text-accent group-hover:nova-text-glow transition-all duration-500 dreamy-float">
                NOVA MUSIC
              </span>
              
              {/* Music Visualizer Next to Text */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 music-visualizer scale-50 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="visualizer-bar w-1 h-2" style={{ animationDelay: '0s' }} />
                <div className="visualizer-bar w-1 h-3" style={{ animationDelay: '0.1s' }} />
                <div className="visualizer-bar w-1 h-2" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 items-center relative">
            {/* Background Musical Elements */}
            <div className="absolute -top-8 left-1/4 music-note text-xs opacity-30" style={{ animationDelay: '3s' }}>♫</div>
            <div className="absolute -bottom-8 right-1/4 cosmic-sparkle" style={{ animationDelay: '5s' }} />
            
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link font-heading font-medium text-lg px-4 py-2 rounded-xl focus-ring micro-bounce ${
                  location.pathname === item.path ? 'active' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <div className="nav-indicator"></div>
                
                {/* Musical Note on Hover */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 music-note text-xs opacity-0 group-hover:opacity-80 transition-all duration-500" style={{ animationDelay: '0.1s' }}>♪</div>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-accent text-xl p-3 hover:text-nova-neon transition-all duration-500 hover:scale-110 interactive-hover relative rhythm-pulse"
            aria-label="Toggle menu"
          >
            {/* Musical Elements */}
            <div className="absolute -top-1 -right-1 music-note text-xs opacity-50" style={{ animationDelay: '1s' }}>♪</div>
            
            <div className="relative">
              {isOpen ? <FaTimes className="dreamy-float" /> : <FaBars className="dreamy-float" />}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Sound Wave Effect */}
              <div className="absolute inset-0 sound-wave w-full h-full opacity-0 hover:opacity-40 transition-opacity duration-500" />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[70%] glass-dark shadow-cosmic transform transition-all duration-700 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } overflow-hidden`}>
        {/* Background Musical Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="music-note text-2xl opacity-20 absolute top-20 left-8" style={{ animationDelay: '1s' }}>♪</div>
          <div className="music-note text-xl opacity-15 absolute top-40 right-12" style={{ animationDelay: '3s' }}>♫</div>
          <div className="music-note text-3xl opacity-10 absolute bottom-40 left-12" style={{ animationDelay: '5s' }}>♬</div>
          <div className="cosmic-sparkle absolute top-32 right-8" style={{ animationDelay: '2s' }} />
          <div className="cosmic-sparkle absolute bottom-32 left-8" style={{ animationDelay: '4s' }} />
          
          {/* Ethereal Glows */}
          <div className="ethereal-glow w-32 h-32 absolute top-16 right-4" style={{ animationDelay: '6s' }} />
          <div className="ethereal-glow w-24 h-24 absolute bottom-20 left-4" style={{ animationDelay: '8s' }} />
        </div>
        
        <div className="flex flex-col justify-center items-center h-full gap-12 relative z-10">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-2xl font-heading font-medium transition-all duration-500 hover:text-nova-neon hover:scale-110 interactive-hover dreamy-float relative ${
                location.pathname === item.path ? 'nova-text-glow animate-neon-pulse rhythm-pulse' : 'text-accent'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
              
              {/* Musical Note for Each Link */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 music-note text-sm opacity-60" style={{ animationDelay: `${index * 0.5}s` }}>♪</div>
              
              {/* Sound Wave on Active */}
              {location.pathname === item.path && (
                <div className="absolute inset-0 sound-wave w-full h-full opacity-30" style={{ animationDelay: `${index * 0.2}s` }} />
              )}
            </Link>
          ))}
          
          {/* Mobile Menu Visualizer */}
          <div className="music-visualizer mt-8 scale-75">
            <div className="visualizer-bar w-2" style={{ animationDelay: '0s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.1s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.2s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.3s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-500"
          onClick={toggleMenu}
        >
          {/* Subtle Musical Elements in Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="music-note text-lg opacity-10 absolute top-1/4 left-1/4" style={{ animationDelay: '2s' }}>♪</div>
            <div className="music-note text-xl opacity-5 absolute bottom-1/3 right-1/3" style={{ animationDelay: '4s' }}>♫</div>
            <div className="cosmic-sparkle absolute top-1/2 left-1/2" style={{ animationDelay: '3s' }} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;