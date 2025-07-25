import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaTicketAlt, FaFilter, FaMusic, FaUsers, FaGuitar, FaMapMarkerAlt } from 'react-icons/fa';
import { format } from 'date-fns';
import Button from '../components/common/Button';

interface Event {
  id: number;
  title: string;
  artist: string;
  date: Date;
  time: string;
  price: number;
  category: string;
  image: string;
  description: string;
  location: string;
  soldOut: boolean;
}

interface Category {
  value: string;
  label: string;
}

const Events: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const events: Event[] = [
    {
      id: 1,
      title: "Weekly Jam Session",
      artist: "All Members Welcome",
      date: new Date('2025-02-06'),
      time: "7:00 PM",
      price: 0,
      category: "jam",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3",
      description: "Bring your instrument and join our collaborative music session. All skill levels welcome!",
      location: "Music Building Room 204",
      soldOut: false
    },
    {
      id: 2,
      title: "Music Theory Workshop",
      artist: "Led by Sarah Chen (Music Major)",
      date: new Date('2025-02-08'),
      time: "6:30 PM",
      price: 0,
      category: "workshop",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3",
      description: "Learn chord progressions, songwriting, and music composition fundamentals.",
      location: "Music Building Room 107",
      soldOut: false
    },
    {
      id: 3,
      title: "Campus Open Mic Night",
      artist: "Student Union Hall",
      date: new Date('2025-02-09'),
      time: "8:00 PM",
      price: 0,
      category: "performance",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3",
      description: "Showcase your talent! Sign up to perform your original songs or covers.",
      location: "Student Union Hall",
      soldOut: false
    },
    {
      id: 4,
      title: "Guitar Skills Masterclass",
      artist: "Jordan Kim (Audio Engineering)",
      date: new Date('2025-02-12'),
      time: "7:30 PM",
      price: 5,
      category: "workshop",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3",
      description: "Advanced guitar techniques, effects, and performance tips for all levels.",
      location: "Music Building Room 101",
      soldOut: false
    },
    {
      id: 5,
      title: "Spring Concert Prep",
      artist: "NOVA Music Club Band",
      date: new Date('2025-02-14'),
      time: "6:00 PM",
      price: 0,
      category: "rehearsal",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3",
      description: "Join our main band as we prepare for the university's spring music festival.",
      location: "University Auditorium",
      soldOut: false
    },
    {
      id: 6,
      title: "Songwriting Circle",
      artist: "Maya Rodriguez (Music Education)",
      date: new Date('2025-02-16'),
      time: "7:00 PM",
      price: 0,
      category: "workshop",
      image: "https://images.unsplash.com/photo-1547525016-f56a87a0b195?ixlib=rb-4.0.3",
      description: "Collaborative songwriting session where we create music together from scratch.",
      location: "Music Building Room 204",
      soldOut: false
    }
  ];

  const categories: Category[] = [
    { value: 'all', label: 'All Activities' },
    { value: 'jam', label: 'Jam Sessions' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'performance', label: 'Performances' },
    { value: 'rehearsal', label: 'Rehearsals' }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

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
            Club Activities
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-text max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Join our weekly sessions, workshops, and campus performances
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

        {/* Enhanced Filter Bar */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="flex items-center gap-3 text-nova-neon"
            whileHover={{ scale: 1.05 }}
          >
            <FaFilter className="text-xl" />
            <span className="font-medium">Filter Activities:</span>
          </motion.div>
          
          {categories.map((cat, index) => (
            <motion.button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-500 relative overflow-hidden musical-hover-lift ${
                filter === cat.value
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
              {cat.label}
              
              {/* Musical note on active */}
              {filter === cat.value && (
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

        {/* Enhanced Events Grid */}
        {filteredEvents.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
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
                style={{ backgroundImage: `url(${event.image})` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Status Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 2.2 + index * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-glow ${
                    event.price === 0 ? 'bg-nova-gradient text-accent' : 'bg-primary text-accent'
                  }`}>
                    {event.price === 0 ? 'FREE' : `$${event.price}`}
                  </span>
                </motion.div>
                
                {/* Musical elements on image */}
                <motion.div 
                  className="absolute top-4 right-4 music-note text-xl opacity-60 advanced-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >♪</motion.div>
                
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
                      {event.title}
                    </motion.h3>
                    <motion.p 
                      className="text-nova-neon font-medium text-lg smooth-glow"
                      whileHover={{ scale: 1.02 }}
                    >
                      {event.artist}
                    </motion.p>
                  </div>
                  
                  {/* Category Icon */}
                  <motion.div
                    className="text-3xl text-nova-neon"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {event.category === 'jam' && <FaMusic />}
                    {event.category === 'workshop' && <FaGuitar />}
                    {event.category === 'performance' && <FaUsers />}
                    {event.category === 'rehearsal' && <FaMusic />}
                  </motion.div>
                </motion.div>
                
                {/* Date and Time */}
                <motion.div 
                  className="flex gap-6 text-gray-text text-sm mb-6"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.5 + index * 0.15, duration: 0.5 }}
                >
                  <motion.span 
                    className="flex items-center gap-2 group-hover:text-accent transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaCalendarAlt className="text-nova-neon" />
                    {format(event.date, 'MMM dd, yyyy')}
                  </motion.span>
                  <motion.span 
                    className="flex items-center gap-2 group-hover:text-accent transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaClock className="text-nova-neon" />
                    {event.time}
                  </motion.span>
                  <motion.span 
                    className="flex items-center gap-2 group-hover:text-accent transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaMapMarkerAlt className="text-nova-neon" />
                    {event.location}
                  </motion.span>
                </motion.div>
                
                {/* Description */}
                <motion.p 
                  className="text-gray-text mb-8 leading-relaxed group-hover:text-gray-light transition-colors duration-500"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.6 + index * 0.15, duration: 0.5 }}
                >
                  {event.description}
                </motion.p>
                
                {/* Enhanced Button */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.7 + index * 0.15, duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full button-advanced musical-hover-lift relative overflow-hidden"
                    >
                    <FaTicketAlt className="mr-3 group-hover:animate-pulse" />
                    {event.price === 0 ? 'Join Activity' : 'Register'}
                    
                    {/* Musical trail effect */}
                    <motion.div 
                      className="melodic-trail w-full h-full absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{ animationDelay: '0.2s' }}
                    />
                  </Button>
                  </motion.div>
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
      ) : (
        <motion.div 
          className="text-center py-20 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.div
            className="music-visualizer mb-8 scale-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 2.7, duration: 0.8 }}
          >
            <div className="visualizer-bar w-2" style={{ animationDelay: '0s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.2s' }} />
            <div className="visualizer-bar w-2" style={{ animationDelay: '0.4s' }} />
          </motion.div>
          
          <motion.h3 
            className="text-3xl font-bold font-heading mb-6 text-accent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.6 }}
          >
            No activities found
          </motion.h3>
          
          <motion.p 
            className="text-xl text-gray-text mb-8"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.9, duration: 0.6 }}
          >
            Check back soon for new sessions and workshops!
          </motion.p>
          
          {/* Musical notes around empty state */}
          <motion.div 
            className="absolute top-4 left-1/4 music-note text-2xl opacity-30 advanced-float"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
          >♪</motion.div>
          <motion.div 
            className="absolute top-4 right-1/4 music-note text-2xl opacity-30 advanced-float"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3.2, duration: 0.5 }}
          >♫</motion.div>
        </motion.div>
      )}
      </div>
    </div>
  );
};

export default Events;