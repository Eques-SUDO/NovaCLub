import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMusic } from 'react-icons/fa';

interface NavItem {
  path: string;
  label: string;
}

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Show/hide based on scroll direction with mobile-optimized thresholds
    setIsVisible(prevVisible => {
      const isMobile = window.innerWidth <= 768;
      const threshold = isMobile ? 80 : 100; // Lower threshold for mobile
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      
      // Reduce sensitivity on mobile for smoother scrolling
      if (isMobile && scrollDelta < 5) {
        return prevVisible;
      }
      
      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        return false;
      }
      return true;
    });
    
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      scrolled 
        ? 'bg-gradient-to-r from-dark-bg/98 via-dark-surface/95 to-dark-bg/98 backdrop-blur-xl shadow-xl border-b border-dark-border' 
        : 'bg-gradient-to-r from-black/5 via-black/10 to-black/5 backdrop-blur-lg'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group transition-all duration-300 hover:scale-105 relative z-10"
          >
            <div className="relative overflow-hidden rounded-full mr-2 md:mr-3">
              <img 
                src="/etern-logo.PNG" 
                alt="ETERNOTES Logo" 
                className="h-14 w-14 md:h-18 md:w-18 object-contain transition-all duration-300 group-hover:rotate-12"
              />
              
              {/* Enhanced Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-nova-neon/30 to-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 scale-150"></div>
            </div>
            
            <div className="relative">
              <span className="text-xl md:text-2xl font-bold font-heading text-gradient-cosmic group-hover:text-gradient-aurora transition-all duration-300">
                ETERNOTES
              </span>
              
              {/* Decorative line under text */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8 xl:gap-10 items-center">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-heading font-semibold text-base lg:text-lg xl:text-xl px-4 py-3 rounded-xl transition-all duration-300 group ${
                  location.pathname === item.path 
                    ? 'text-primary bg-gradient-to-r from-primary/10 to-accent-purple/10 shadow-medium' 
                    : 'text-text-tertiary hover:text-text-primary'
                }`}
              >
                {item.label}
                
                {/* Modern hover indicator */}
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-brand-gradient rounded-full transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'group-hover:w-full'
                }`}></div>
                
                {/* Enhanced background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/8 to-accent-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative text-text-primary text-xl p-3 rounded-xl hover:text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/10"
            aria-label="Toggle menu"
          >
            <div className="relative z-10">
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-full max-w-sm bg-gradient-to-b from-dark-bg via-dark-surface/98 to-dark-bg backdrop-blur-2xl shadow-2xl transform transition-all duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } overflow-hidden border-l border-dark-border`}>
        
        {/* Mobile header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-dark-border">
          <div className="flex items-center gap-3">
            <img 
              src="/etern-logo.PNG" 
              alt="ETERNOTES MUSIC Logo" 
              className="h-16 w-16 object-contain"
            />
            <span className="text-xl font-bold text-gradient-cosmic">
              ETERNOTES
            </span>
          </div>
          
          <button
            onClick={toggleMenu}
            className="text-text-primary p-3 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/10"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        
        {/* Mobile menu content */}
        <div className="flex flex-col justify-center h-full px-6 pb-20">
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-2xl font-heading font-semibold transition-all duration-300 py-4 px-5 rounded-xl relative group ${
                  location.pathname === item.path 
                    ? 'text-primary bg-gradient-to-r from-primary/15 to-accent-purple/10 shadow-medium border-l-4 border-primary' 
                    : 'text-text-tertiary hover:text-text-primary hover:bg-primary/8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <FaMusic className={`text-xl ${
                    location.pathname === item.path ? 'text-primary' : 'text-primary/60'
                  }`} />
                  {item.label}
                </div>
                
                {/* Mobile hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/8 to-accent-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Link>
            ))}
          </div>
          
          {/* Mobile menu footer */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="flex items-center justify-center gap-3 text-primary/70 text-sm">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30"></div>
              <FaMusic className="text-sm" />
              <span className="uppercase tracking-widest font-medium text-gradient-aurora">ETERNOTES Music Club</span>
              <FaMusic className="text-sm" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;