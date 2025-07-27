import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  content: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { href: "https://www.instagram.com/jamhouse.fsr/#", icon: <FaInstagram />, label: "Instagram" },
  ];

  const contactInfo: ContactInfo[] = [
    { icon: <FaMapMarkerAlt />, content: "Faculty of Sciences Rabat, 4 Avenue Ibn Batouta, Rabat, Morocco" },
    { icon: <FaPhone />, content: "0617478471" },
    { icon: <FaEnvelope />, content: "elkhouranihiba226@gmail.com" },
  ];

  return (
    <footer className="bg-dark-secondary pt-12 pb-4 mt-20">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-nova-neon text-xl font-semibold mb-6">About NOVA</h3>
            <p className="text-gray-text mb-4 leading-relaxed">
              Your university music community for collaborative sessions, workshops, musical growth and having the best vibes and experiences.
            </p>
            <blockquote className="text-primary italic text-sm mb-6 border-l-2 border-nova-neon pl-4">
              "Music is a higher revelation than all wisdom and philosophy." - Ludwig van Beethoven
            </blockquote>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-bg text-accent rounded-full flex items-center justify-center hover:bg-nova-neon hover:text-dark-bg transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-nova-neon text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/events" className="block text-gray-text hover:text-accent transition-colors duration-200">
                Upcoming Events
              </Link>
              <Link to="/artists" className="block text-gray-text hover:text-accent transition-colors duration-200">
                Featured Artists
              </Link>
              <Link to="/gallery" className="block text-gray-text hover:text-accent transition-colors duration-200">
                Photo Gallery
              </Link>
              <Link to="/contact" className="block text-gray-text hover:text-accent transition-colors duration-200">
                Join Our Club
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-nova-neon text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-text">
                  <div className="text-nova-neon mt-1 flex-shrink-0">{info.icon}</div>
                  {index === 1 ? (
                    <a 
                      href="https://wa.me/212617478471" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="leading-relaxed hover:text-nova-neon transition-colors duration-200"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <span className="leading-relaxed">{info.content}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-text text-sm">
          &copy; {new Date().getFullYear()} NOVA. All rights reserved. 
        </div>
      </div>
    </footer>
  );
};

export default Footer;