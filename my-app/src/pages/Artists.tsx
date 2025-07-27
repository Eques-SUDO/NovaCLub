import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaSpotify, FaYoutube, FaGlobe, FaStar, FaMusic, FaGuitar, FaMicrophone, FaDrum, FaCompactDisc } from 'react-icons/fa';

interface Artist {
  id: number;
  name: string;
  genre: string;
  image: string;
  bio: string;
  rating: number;
  instrument: string;
  year: string;
  social: {
    instagram?: string;
    spotify?: string;
    youtube?: string;
    website?: string;
  };
}

interface Tab {
  key: string;
  label: string;
}

const Artists: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('members');

  const tabs: Tab[] = [
    { key: 'members', label: 'Group Members' }
  ];

  const artists: Record<string, Artist[]> = {
    members: []
  };

  const currentArtists = artists[activeTab] || [];

  const getInstrumentIcon = (instrument: string) => {
    switch (instrument.toLowerCase()) {
      case 'piano': return <FaMusic />;
      case 'guitar': return <FaGuitar />;
      case 'vocals': return <FaMicrophone />;
      case 'drums': return <FaDrum />;
      case 'production': return <FaCompactDisc />;
      default: return <FaMusic />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden particle-system">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark-bg via-nova-darkPurple/20 to-dark-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Floating Musical Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="music-note text-6xl opacity-10 absolute top-20 left-1/4 advanced-float" style={{ animationDelay: '0s' }}>♪</div>
        <div className="music-note text-4xl opacity-15 absolute top-1/3 right-1/4 advanced-float" style={{ animationDelay: '2s' }}>♫</div>
        <div className="music-note text-5xl opacity-8 absolute bottom-1/4 left-1/6 advanced-float" style={{ animationDelay: '4s' }}>♬</div>
        <div className="ethereal-glow w-40 h-40 absolute top-1/4 right-1/6" style={{ animationDelay: '1s' }} />
        <div className="ethereal-glow w-32 h-32 absolute bottom-1/3 left-1/3" style={{ animationDelay: '3s' }} />
        
        {/* Frequency waves */}
        <div className="frequency-wave w-full absolute top-1/4" style={{ animationDelay: '2s' }} />
        <div className="frequency-wave w-full absolute bottom-1/4" style={{ animationDelay: '5s' }} />
      </motion.div>

      <div className="container-custom py-8 relative z-10">
        {/* Enhanced Page Header */}
        <motion.div 
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Music visualizer */}
          <motion.div 
            className="music-visualizer mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="visualizer-bar w-2" style={{ animationDelay: '0s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.1s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.2s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.3s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.4s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.5s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.6s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.7s' }} />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-display text-gradient mb-6 smooth-glow"
            initial={{ opacity: 0, y: 30, rotateX: 45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            Our Musicians
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-text max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Our dedicated group members who make NOVA Music Club special
          </motion.p>
          
          {/* Musical elements around title */}
          <motion.div 
            className="absolute -top-8 left-1/4 music-note text-xl advanced-float"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ animationDelay: '1s' }}
          >♪</motion.div>
          <motion.div 
            className="absolute -top-8 right-1/4 music-note text-xl advanced-float"
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ animationDelay: '3s' }}
          >♬</motion.div>
        </motion.div>

        {/* Enhanced Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 py-4 rounded-full font-semibold text-lg relative overflow-hidden musical-hover-lift transition-all duration-700 ${
                activeTab === tab.key
                  ? 'bg-nova-gradient text-accent shadow-glow'
                  : 'glass border border-primary/30 text-accent hover:border-nova-neon hover:shadow-neon'
              }`}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.1, 
                y: -3,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
              
              {/* Musical note on active */}
              {activeTab === tab.key && (
                <motion.div
                  className="absolute -top-2 -right-2 music-note text-xs opacity-80"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >♪</motion.div>
              )}
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-nova-neon/20 to-transparent -skew-x-12 opacity-0 hover:opacity-100"
                initial={{ x: '-200%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Recruitment Message */}
        <motion.div 
          className="flex justify-center items-center min-h-96"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.div
            className="glass border border-primary/20 rounded-3xl p-16 max-w-2xl mx-auto backdrop-blur-xl text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.div 
              className="w-24 h-24 bg-nova-gradient rounded-full flex items-center justify-center mx-auto mb-8"
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              <FaMusic className="text-3xl text-accent" />
            </motion.div>
            
            <motion.h3 
              className="text-4xl font-bold text-accent mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              We Are Recruiting Soon!
            </motion.h3>
            
            <motion.p 
              className="text-xl text-gray-text leading-relaxed mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.6 }}
            >
              Stay tuned for updates on our upcoming recruitment process.<br />
              Join NOVA Music Club and become part of our musical family!
            </motion.p>
            
            <motion.div 
              className="w-20 h-1 bg-nova-gradient rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 2.8, duration: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Artists;