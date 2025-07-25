import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
    { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
    { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
    { href: "https://www.instagram.com/jamhouse.fsr", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
  ];

  const contactInfo: ContactInfo[] = [
    { icon: <FaMapMarkerAlt />, content: "123 Music Street, Downtown, NY 10001" },
    { icon: <FaPhone />, content: "+1 (555) 123-4567" },
    { icon: <FaEnvelope />, content: "info@jamhouse.com" },
  ];

  return (
    <footer className="bg-dark-secondary pt-12 pb-4 mt-20">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-jamhouse-gold text-xl font-semibold mb-6">About JAMHOUSE</h3>
            <p className="text-gray-text mb-6 leading-relaxed">
              Your premier destination for live music, unforgettable nights, and the best artists in town.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-bg text-accent rounded-full flex items-center justify-center hover:bg-jamhouse-gold hover:text-dark-bg hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-jamhouse-gold text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/events" className="block text-gray-text hover:text-accent transition-colors">
                Upcoming Events
              </Link>
              <Link to="/artists" className="block text-gray-text hover:text-accent transition-colors">
                Featured Artists
              </Link>
              <Link to="/gallery" className="block text-gray-text hover:text-accent transition-colors">
                Photo Gallery
              </Link>
              <Link to="/contact" className="block text-gray-text hover:text-accent transition-colors">
                Book Your Event
              </Link>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-jamhouse-gold text-xl font-semibold mb-6">Operating Hours</h3>
            <div className="space-y-2 text-gray-text">
              <p>Wednesday - Thursday: 8PM - 2AM</p>
              <p>Friday - Saturday: 8PM - 4AM</p>
              <p>Sunday: 7PM - 12AM</p>
              <p>Monday - Tuesday: Closed</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-jamhouse-gold text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3 text-gray-text">
                  <div className="text-jamhouse-gold mt-1 flex-shrink-0">{info.icon}</div>
                  <span className="leading-relaxed">{info.content}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-text text-sm">
          &copy; {new Date().getFullYear()} NOVA. All rights reserved. | Privacy Policy | Terms of Service
        </div>
      </div>
    </footer>
  );
};

export default Footer;