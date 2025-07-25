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
    { key: 'members', label: 'Club Members' },
    { key: 'featured', label: 'Featured Musicians' },
    { key: 'alumni', label: 'Alumni Artists' }
  ];

  const artists: Record<string, Artist[]> = {
    members: [
      {
        id: 1,
        name: "Alex Chen",
        genre: "Classical Piano",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3",
        bio: "Music Theory major specializing in classical piano composition. Leading our music theory workshops and arranging pieces for the club ensemble.",
        rating: 4.9,
        instrument: "Piano",
        year: "Junior",
        social: {
          instagram: "#",
          spotify: "#",
          youtube: "#"
        }
      },
      {
        id: 2,
        name: "Maya Rodriguez",
        genre: "Acoustic Guitar",
        image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?ixlib=rb-4.0.3",
        bio: "Music Education student with a passion for songwriting. Hosts our weekly acoustic sessions and leads the songwriting circle.",
        rating: 4.8,
        instrument: "Guitar",
        year: "Senior",
        social: {
          instagram: "#",
          spotify: "#",
          website: "#"
        }
      },
      {
        id: 3,
        name: "Jordan Kim",
        genre: "Audio Engineering",
        image: "https://images.unsplash.com/photo-1466232373731-46205f0b668e?ixlib=rb-4.0.3",
        bio: "Audio Engineering major handling our sound setup and teaching production techniques. Expert in mixing and recording.",
        rating: 4.7,
        instrument: "Production",
        year: "Sophomore",
        social: {
          instagram: "#",
          spotify: "#",
          youtube: "#"
        }
      }
    ],
    featured: [
      {
        id: 4,
        name: "The Campus Collective",
        genre: "Indie Folk",
        image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?ixlib=rb-4.0.3",
        bio: "Student band formed through NOVA Music Club jam sessions. Known for their original compositions and campus performances.",
        rating: 4.6,
        instrument: "Ensemble",
        year: "Mixed",
        social: {
          instagram: "#",
          spotify: "#",
          youtube: "#"
        }
      },
      {
        id: 5,
        name: "Sarah Chen",
        genre: "Vocal Performance",
        image: "https://images.unsplash.com/photo-1546528377-9049b2b6a9b7?ixlib=rb-4.0.3",
        bio: "Music major with exceptional vocal range. Regular performer at open mic nights and featured in university concerts.",
        rating: 4.8,
        instrument: "Vocals",
        year: "Senior",
        social: {
          instagram: "#",
          spotify: "#",
          website: "#"
        }
      },
      {
        id: 6,
        name: "Marcus Johnson",
        genre: "Jazz Drums",
        image: "https://images.unsplash.com/photo-1493225333253-ee3e176e7e83?ixlib=rb-4.0.3",
        bio: "Percussion student bringing rhythm to every club session. Leads our jazz ensemble and teaches drumming fundamentals.",
        rating: 4.7,
        instrument: "Drums",
        year: "Junior",
        social: {
          instagram: "#",
          spotify: "#",
          youtube: "#"
        }
      }
    ],
    alumni: [
      {
        id: 7,
        name: "Elena Vasquez",
        genre: "Professional Violinist",
        image: "https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-4.0.3",
        bio: "NOVA Music Club alumna now performing with the city symphony. Returns as guest mentor for string players.",
        rating: 4.9,
        instrument: "Violin",
        year: "Alumni '20",
        social: {
          instagram: "#",
          spotify: "#",
          youtube: "#"
        }
      },
      {
        id: 8,
        name: "David Park",
        genre: "Music Producer",
        image: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?ixlib=rb-4.0.3",
        bio: "Former club president now working in music production. Occasionally returns to share industry insights and career guidance.",
        rating: 4.8,
        instrument: "Producer",
        year: "Alumni '19",
        social: {
          instagram: "#",
          spotify: "#",
          website: "#"
        }
      }
    ]
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
            Meet the talented students and alumni who make NOVA Music Club special
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

        {/* Enhanced Artists Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {currentArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              className="group modern-card overflow-hidden transition-all duration-700 relative musical-hover-lift"
              initial={{ 
                opacity: 0, 
                y: 80, 
                scale: 0.8, 
                rotateY: index % 2 === 0 ? -20 : 20 
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                rotateY: 0 
              }}
              transition={{ 
                delay: 2 + index * 0.15, 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                rotateY: index % 2 === 0 ? 5 : -5,
                transition: { duration: 0.5, ease: "easeOut" } 
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Enhanced Image Section */}
              <motion.div 
                className="h-64 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url(${artist.image})` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Rating Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 2.2 + index * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-nova-gradient text-accent shadow-glow flex items-center gap-2">
                    <FaStar />
                    {artist.rating}
                  </span>
                </motion.div>
                
                {/* Year Badge */}
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 2.3 + index * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/80 text-accent">
                    {artist.year}
                  </span>
                </motion.div>
                
                {/* Instrument Icon */}
                <motion.div 
                  className="absolute bottom-4 right-4 text-3xl text-nova-neon opacity-80 advanced-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  {getInstrumentIcon(artist.instrument)}
                </motion.div>
                
                {/* Sound wave effects */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sound-wave w-32 h-32 opacity-0 group-hover:opacity-40"
                  transition={{ duration: 0.5 }}
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-nova-neon/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-200%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </motion.div>
              
              {/* Enhanced Content Section */}
              <motion.div 
                className="p-8 relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.3 + index * 0.15, duration: 0.6 }}
              >
                <motion.div 
                  className="flex justify-between items-start mb-6"
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.4 + index * 0.15, duration: 0.5 }}
                >
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold font-heading mb-2 text-accent group-hover:text-nova-neon transition-colors duration-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      {artist.name}
                    </motion.h3>
                    <motion.p 
                      className="text-nova-neon font-medium text-lg smooth-glow"
                      whileHover={{ scale: 1.02 }}
                    >
                      {artist.genre}
                    </motion.p>
                    <motion.p 
                      className="text-primary font-semibold mt-1"
                      whileHover={{ scale: 1.02 }}
                    >
                      {artist.instrument}
                    </motion.p>
                  </div>
                </motion.div>
                
                {/* Description */}
                <motion.p 
                  className="text-gray-text mb-8 leading-relaxed group-hover:text-gray-light transition-colors duration-500"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.5 + index * 0.15, duration: 0.5 }}
                >
                  {artist.bio}
                </motion.p>
                
                {/* Enhanced Social Links */}
                <motion.div 
                  className="flex gap-4 justify-center"
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.6 + index * 0.15, duration: 0.5 }}
                >
                  {artist.social.instagram && (
                    <motion.a
                      href={artist.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent hover:text-nova-neon musical-hover-lift relative overflow-hidden"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaInstagram />
                      <div className="melodic-trail w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100" />
                    </motion.a>
                  )}
                  {artist.social.spotify && (
                    <motion.a
                      href={artist.social.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent hover:text-nova-neon musical-hover-lift relative overflow-hidden"
                      whileHover={{ scale: 1.2, rotate: -15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaSpotify />
                      <div className="melodic-trail w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100" />
                    </motion.a>
                  )}
                  {artist.social.youtube && (
                    <motion.a
                      href={artist.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent hover:text-nova-neon musical-hover-lift relative overflow-hidden"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaYoutube />
                      <div className="melodic-trail w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100" />
                    </motion.a>
                  )}
                  {artist.social.website && (
                    <motion.a
                      href={artist.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-full flex items-center justify-center text-accent hover:text-nova-neon musical-hover-lift relative overflow-hidden"
                      whileHover={{ scale: 1.2, rotate: -15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGlobe />
                      <div className="melodic-trail w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100" />
                    </motion.a>
                  )}
                </motion.div>
                
                {/* Floating sparkles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute top-4 right-4 cosmic-sparkle" style={{ animationDelay: '0.1s' }} />
                  <div className="absolute bottom-4 left-4 cosmic-sparkle" style={{ animationDelay: '0.3s' }} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Artists;