import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMusic, FaTicketAlt, FaStar, FaChevronLeft, FaChevronRight, FaUsers } from 'react-icons/fa';
import Button from '../components/common/Button';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  artist: string;
  image: string;
}

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface StaffMember {
  id: number;
  name: string;
  role: string;
  major: string;
  image: string;
  description: string;
}

const Home: React.FC = () => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const features: Feature[] = [
    {
      icon: <FaMusic />,
      title: "Weekly Jam Sessions",
      description: "Join us every Tuesday & Thursday for collaborative music sessions - all skill levels welcome!"
    },
    {
      icon: <FaCalendarAlt />,
      title: "Music Theory Classes",
      description: "Learn fundamentals, composition, and advanced theory with our experienced student instructors"
    },
    {
      icon: <FaTicketAlt />,
      title: "Practice Room Access",
      description: "Book practice rooms and borrow club instruments for your musical development"
    },
    {
      icon: <FaStar />,
      title: "Campus Events",
      description: "Perform at university showcases, open mic nights, and seasonal music festivals"
    }
  ];

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Weekly Jam Session",
      date: "TUE, JAN 30",
      time: "7:00 PM",
      artist: "Open to All Members",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Music Theory Workshop",
      date: "THU, FEB 1",
      time: "6:30 PM",
      artist: "Led by Sarah Chen (Music Major)",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Campus Open Mic Night",
      date: "FRI, FEB 2",
      time: "8:00 PM",
      artist: "Student Union Hall",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3"
    }
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Jam Session Night",
      description: "Students jamming together in our main practice room",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Open Mic Performance",
      description: "Sarah performing her original song at campus open mic",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Music Theory Workshop",
      description: "Learning chord progressions and songwriting techniques",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Band Practice",
      description: "Our rock band preparing for the spring concert",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3"
    },
    {
      id: 5,
      title: "Acoustic Session",
      description: "Intimate acoustic performances in the student lounge",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3"
    }
  ];

  const staffMembers: StaffMember[] = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Club President",
      major: "Music Performance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      description: "Leading our club with passion for bringing students together through music"
    },
    {
      id: 2,
      name: "Maya Rodriguez",
      role: "Events Coordinator",
      major: "Music Education",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      description: "Organizing amazing events and workshops for our growing community"
    },
    {
      id: 3,
      name: "Jordan Kim",
      role: "Technical Director",
      major: "Audio Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      description: "Managing our equipment and helping with sound for all club events"
    },
    {
      id: 4,
      name: "Sam Taylor",
      role: "Workshop Leader",
      major: "Music Theory & Composition",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3",
      description: "Teaching music theory and helping members develop their musical skills"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-bg particle-system">
        {/* Background Image with Overlay */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3')`
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-dark-bg/90 via-nova-darkPurple/60 to-primary/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Animated NOVA Particles */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <motion.div 
            className="nova-particle w-96 h-96 top-1/4 left-1/4" 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
            style={{ animationDelay: '0s' }} 
          />
          <motion.div 
            className="nova-particle w-80 h-80 top-3/4 right-1/4" 
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 2, delay: 1.6, ease: "easeOut" }}
            style={{ animationDelay: '2s' }} 
          />
          <motion.div 
            className="nova-particle w-64 h-64 bottom-1/4 left-1/3" 
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 2, delay: 2, ease: "easeOut" }}
            style={{ animationDelay: '4s' }} 
          />
          <motion.div 
            className="nova-particle w-48 h-48 top-1/2 right-1/3" 
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 2, delay: 2.4, ease: "easeOut" }}
            style={{ animationDelay: '6s' }} 
          />
          <motion.div 
            className="nova-particle w-32 h-32 bottom-1/3 right-1/2" 
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 2, delay: 2.8, ease: "easeOut" }}
            style={{ animationDelay: '8s' }} 
          />
          
          {/* Musical Notes Floating */}
          <motion.div 
            className="music-note text-4xl top-20 left-20 advanced-float" 
            initial={{ opacity: 0, y: 100, rotate: -30 }}
            animate={{ opacity: 0.6, y: 0, rotate: 0 }}
            transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
            style={{ animationDelay: '0s' }}
          >♪</motion.div>
          <motion.div 
            className="music-note text-3xl top-40 right-32 advanced-float" 
            initial={{ opacity: 0, x: 100, rotate: 30 }}
            animate={{ opacity: 0.6, x: 0, rotate: 0 }}
            transition={{ duration: 1.5, delay: 2.2, ease: "easeOut" }}
            style={{ animationDelay: '2s' }}
          >♫</motion.div>
          <motion.div 
            className="music-note text-5xl bottom-32 left-40 advanced-float" 
            initial={{ opacity: 0, y: -100, rotate: 45 }}
            animate={{ opacity: 0.6, y: 0, rotate: 0 }}
            transition={{ duration: 1.5, delay: 2.4, ease: "easeOut" }}
            style={{ animationDelay: '4s' }}
          >♬</motion.div>
          <motion.div 
            className="music-note text-2xl bottom-20 right-20 advanced-float" 
            initial={{ opacity: 0, x: -100, rotate: -45 }}
            animate={{ opacity: 0.6, x: 0, rotate: 0 }}
            transition={{ duration: 1.5, delay: 2.6, ease: "easeOut" }}
            style={{ animationDelay: '6s' }}
          >♩</motion.div>
          <motion.div 
            className="music-note text-6xl top-60 left-1/2 advanced-float" 
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 2.8, ease: "easeOut" }}
            style={{ animationDelay: '8s' }}
          >♪</motion.div>
          
          {/* Sound Waves */}
          <motion.div 
            className="sound-wave w-32 h-32 top-1/3 left-10" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 3, ease: "easeOut" }}
            style={{ animationDelay: '1s' }} 
          />
          <motion.div 
            className="sound-wave w-24 h-24 bottom-1/3 right-16" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 3.2, ease: "easeOut" }}
            style={{ animationDelay: '3s' }} 
          />
          <motion.div 
            className="sound-wave w-40 h-40 top-1/2 right-1/3" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 3.4, ease: "easeOut" }}
            style={{ animationDelay: '5s' }} 
          />
          
          {/* Ethereal Glows */}
          <motion.div 
            className="ethereal-glow w-64 h-64 top-10 right-10" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
            style={{ animationDelay: '2s' }} 
          />
          <motion.div 
            className="ethereal-glow w-48 h-48 bottom-20 left-10" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 2, delay: 2, ease: "easeOut" }}
            style={{ animationDelay: '7s' }} 
          />
          
          {/* Cosmic Sparkles */}
          <motion.div 
            className="cosmic-sparkle top-16 left-1/4" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            style={{ animationDelay: '1s' }} 
          />
          <motion.div 
            className="cosmic-sparkle top-1/3 right-1/4" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.7 }}
            style={{ animationDelay: '3s' }} 
          />
          <motion.div 
            className="cosmic-sparkle bottom-1/4 left-1/2" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.9 }}
            style={{ animationDelay: '5s' }} 
          />
          <motion.div 
            className="cosmic-sparkle bottom-16 right-1/3" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 4.1 }}
            style={{ animationDelay: '7s' }} 
          />
          
          {/* Wave Ripples */}
          <motion.div 
            className="wave-ripple w-20 h-20 top-1/4 left-1/2" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1.5, delay: 3.3 }}
            style={{ animationDelay: '2s' }} 
          />
          <motion.div 
            className="wave-ripple w-16 h-16 bottom-1/3 right-1/2" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1.5, delay: 3.8 }}
            style={{ animationDelay: '6s' }} 
          />
          
          {/* Frequency Waves */}
          <motion.div 
            className="frequency-wave w-full top-1/3" 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 4 }}
            style={{ animationDelay: '1s' }} 
          />
          <motion.div 
            className="frequency-wave w-full bottom-1/3" 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 4.5 }}
            style={{ animationDelay: '4s' }} 
          />
          
          {/* Melodic Trails */}
          <motion.div 
            className="melodic-trail w-96 h-1 top-1/2 left-0" 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, delay: 5 }}
            style={{ animationDelay: '3s' }} 
          />
          <motion.div 
            className="melodic-trail w-80 h-1 bottom-1/4 right-0" 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, delay: 5.5 }}
            style={{ animationDelay: '7s' }} 
          />
        </motion.div>

        <motion.div 
          className="relative z-10 text-center max-w-6xl px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8 particle-system"
            initial={{ scale: 0.5, opacity: 0, rotateX: 45 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ delay: 1.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-display mb-8 leading-tight">
              <motion.span 
                className="block text-gradient animate-gradient smooth-glow"
                initial={{ opacity: 0, y: 80, rotateX: 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 2, duration: 1, ease: "easeOut" }}
              >
                WHERE
              </motion.span>
              <motion.span 
                className="block text-accent rhythm-pulse"
                initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 2.3, duration: 1, ease: "easeOut" }}
              >
                MUSIC
              </motion.span>
              <motion.span 
                className="block text-gradient animate-gradient smooth-glow"
                initial={{ opacity: 0, y: -80, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 2.6, duration: 1, ease: "easeOut" }}
              >
                COMES ALIVE
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-3xl lg:text-4xl text-gray-text mb-16 font-light leading-relaxed max-w-4xl mx-auto text-reveal"
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 3, duration: 1.2, ease: "easeOut" }}
          >
            Join the <motion.span 
              className="text-nova-neon font-medium smooth-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.3, duration: 0.8 }}
            >musical community</motion.span> at your university with <motion.span 
              className="text-accent font-bold rhythm-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.6, duration: 0.8 }}
            >NOVA MUSIC CLUB</motion.span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 4.2, duration: 0.8, ease: "easeOut" }}
            >
              <Link to="/events" className="group">
                <Button size="large" className="text-lg px-12 py-5 shimmer-effect rhythm-pulse dreamy-float button-advanced musical-hover-lift">
                  <FaCalendarAlt className="text-xl group-hover:animate-pulse mr-3" />
                  Join Activities
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 4.4, duration: 0.8, ease: "easeOut" }}
            >
              <Link to="/contact" className="group">
                <Button variant="outline" size="large" className="text-lg px-12 py-5 rhythm-pulse dreamy-float button-advanced musical-hover-lift">
                  <FaUsers className="text-xl group-hover:animate-pulse mr-3" />
                  <span className="group-hover:animate-pulse">Become a Member</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.1, y: -5 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center text-accent/60 group-hover:text-nova-neon transition-colors duration-500">
            <motion.span 
              className="text-sm font-medium mb-2 dreamy-float"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.2, duration: 0.8 }}
            >
              Scroll Down
            </motion.span>
            <motion.div 
              className="w-6 h-10 border-2 border-current rounded-full flex justify-center relative group-hover:shadow-glow transition-all duration-500"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 5.4, duration: 0.8 }}
            >
              <div className="w-1 h-3 bg-current rounded-full animate-bounce mt-2 group-hover:animate-pulse" />
              
              {/* Musical note on hover */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 music-note text-xs opacity-0 group-hover:opacity-80 transition-all duration-500">♪</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden particle-system">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        <motion.div 
          className="absolute inset-0 bg-mesh-gradient opacity-5"
          initial={{ opacity: 0, scale: 1.2 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        />
        
        <div className="container-custom relative">
          <motion.div 
            className="text-center mb-20 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Music Visualizer */}
            <div className="music-visualizer mb-8">
              <div className="visualizer-bar w-2" style={{ animationDelay: '0s' }} />
              <div className="visualizer-bar w-2" style={{ animationDelay: '0.1s' }} />
              <div className="visualizer-bar w-2" style={{ animationDelay: '0.2s' }} />
              <div className="visualizer-bar w-2" style={{ animationDelay: '0.3s' }} />
              <div className="visualizer-bar w-2" style={{ animationDelay: '0.4s' }} />
              <div className="visualizer-bar w-2" style={{ animationDelay: '0.5s' }} />
              <div className="visualizer-bar w-2" style={{ animationDelay: '0.6s' }} />
              <div className="visualizer-bar w-2" style={{ animationDelay: '0.7s' }} />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold font-display text-gradient mb-6 dreamy-float">
              What We Offer
            </h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto leading-relaxed">
              From beginner-friendly sessions to advanced workshops - grow your musical skills with fellow students
            </p>
            
            {/* Floating musical elements around title */}
            <div className="absolute -top-8 left-1/4 music-note text-2xl" style={{ animationDelay: '1s' }}>♪</div>
            <div className="absolute -top-4 right-1/4 music-note text-3xl" style={{ animationDelay: '3s' }}>♫</div>
            <div className="absolute top-8 left-1/6 cosmic-sparkle" style={{ animationDelay: '2s' }} />
            <div className="absolute top-8 right-1/6 cosmic-sparkle" style={{ animationDelay: '4s' }} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group modern-card text-center p-10 transition-all duration-700 relative overflow-hidden musical-hover-lift stagger-entrance"
                initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 1, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.5, ease: "easeOut" } 
                }}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <motion.div 
                  className="text-6xl text-nova-neon mb-8 flex justify-center relative"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.3 + 0.5, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 10,
                    filter: "brightness(1.3)",
                    transition: { duration: 0.4 }
                  }}
                  viewport={{ once: true }}
                >
                  {feature.icon}
                  
                  {/* Icon glow effect */}
                  <motion.div
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-60"
                    style={{ background: 'radial-gradient(circle, rgba(232, 145, 255, 0.5) 0%, transparent 70%)' }}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold font-heading mb-6 text-accent group-hover:text-nova-neon transition-colors duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 + 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-text leading-relaxed text-lg group-hover:text-gray-light transition-colors duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 + 0.9, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
                
                {/* Musical Elements for each card */}
                <div className="absolute top-4 right-4 music-note text-sm opacity-40" style={{ animationDelay: `${index * 2}s` }}>♪</div>
                <div className="absolute bottom-4 left-4 cosmic-sparkle" style={{ animationDelay: `${index * 1.5}s` }} />
                
                {/* Sound Wave Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="sound-wave w-16 h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ animationDelay: `${index * 0.2}s` }} />
                </div>
                
                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-nova-neon/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent" />
        
        <div className="container-custom relative">
          <motion.div 
            className="text-center mb-20 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold font-display text-gradient mb-6 rhythm-pulse">
              This Week's Activities
            </h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto leading-relaxed">
              Join us for weekly sessions, workshops, and campus performances
            </p>
            
            {/* Floating frequency waves */}
            <div className="frequency-wave w-64 h-1 absolute top-1/2 left-0" style={{ animationDelay: '2s' }} />
            <div className="frequency-wave w-64 h-1 absolute top-1/2 right-0" style={{ animationDelay: '4s' }} />
            
            {/* Musical notes around title */}
            <div className="absolute -top-6 left-1/3 music-note text-xl" style={{ animationDelay: '1s' }}>♬</div>
            <div className="absolute -top-6 right-1/3 music-note text-xl" style={{ animationDelay: '3s' }}>♩</div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="group modern-card overflow-hidden hover:shadow-glow-lg transition-all duration-500 relative dreamy-float"
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -15, rotateY: 5, transition: { duration: 0.4 } }}
              >
                <div className="relative overflow-hidden">
                  <motion.div 
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
                    <div className="absolute top-6 right-6 glass px-4 py-2 rounded-full">
                      <span className="text-nova-neon font-bold text-sm">{event.date}</span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-nova-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-heading mb-3 text-accent group-hover:text-nova-neon transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-nova-neon font-medium text-lg mb-6">
                    {event.artist} • {event.time}
                  </p>
                  <Link to={`/events/${event.id}`} className="block">
                    <Button className="w-full group-hover:animate-pulse">
                      <FaTicketAlt className="group-hover:animate-bounce" />
                      Get Tickets
                    </Button>
                  </Link>
                </div>

                {/* Musical Elements */}
                <div className="absolute top-6 left-6 music-note text-lg opacity-50" style={{ animationDelay: `${index * 1.5}s` }}>♪</div>
                <div className="absolute bottom-6 right-6 cosmic-sparkle" style={{ animationDelay: `${index * 2}s` }} />
                
                {/* Wave Ripple Effect on Hover */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="wave-ripple w-24 h-24 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: `${index * 0.3}s` }} />
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/events">
              <Button size="large" className="text-xl px-16 py-6 shimmer-effect rhythm-pulse dreamy-float relative overflow-hidden">
                <span className="mr-3">View All Events</span>
                <FaCalendarAlt className="animate-pulse" />
                
                {/* Musical trail effect */}
                <div className="melodic-trail w-full h-full absolute inset-0" style={{ animationDelay: '2s' }} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Campus Gallery Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-nova-darkPurple/20 to-dark-bg" />
        
        <div className="container-custom relative">
          <motion.div 
            className="text-center mb-20 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold font-display text-gradient mb-6 dreamy-float">
              Campus Gallery
            </h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto leading-relaxed">
              Moments from our musical journey - jam sessions, workshops, and campus performances
            </p>
            
            {/* Musical elements around title */}
            <div className="absolute -top-8 left-1/4 music-note text-xl" style={{ animationDelay: '1s' }}>♪</div>
            <div className="absolute -top-8 right-1/4 music-note text-xl" style={{ animationDelay: '3s' }}>♬</div>
          </motion.div>

          {/* Gallery Carousel */}
          <motion.div 
            className="relative max-w-6xl mx-auto"
            initial={{ opacity: 0, scale: 0.9, rotateX: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="overflow-hidden rounded-3xl modern-card relative particle-system"
              whileHover={{ 
                scale: 1.02, 
                rotateY: 2,
                transition: { duration: 0.6 }
              }}
            >
              <motion.div 
                className="flex carousel-smooth"
                style={{ transform: `translateX(-${currentGalleryIndex * 100}%)` }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {galleryImages.map((image, index) => (
                  <motion.div 
                    key={image.id} 
                    className="w-full flex-shrink-0 relative group"
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="aspect-video bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url(${image.image})` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 0.6 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Enhanced Musical elements on images */}
                      <motion.div 
                        className="absolute top-8 right-8 music-note text-2xl opacity-60 advanced-float" 
                        style={{ animationDelay: `${index * 0.5}s` }}
                        whileHover={{ scale: 1.3, rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >♪</motion.div>
                      <motion.div 
                        className="absolute bottom-8 left-8 cosmic-sparkle" 
                        style={{ animationDelay: `${index * 0.7}s` }}
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Sound wave effects */}
                      <motion.div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sound-wave w-32 h-32 opacity-0 group-hover:opacity-40"
                        transition={{ duration: 0.5 }}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                      
                      {/* Frequency waves on hover */}
                      <motion.div 
                        className="absolute top-1/3 left-0 frequency-wave w-full opacity-0 group-hover:opacity-60"
                        transition={{ duration: 0.7 }}
                        style={{ animationDelay: '0.2s' }}
                      />
                      <motion.div 
                        className="absolute bottom-1/3 left-0 frequency-wave w-full opacity-0 group-hover:opacity-60"
                        transition={{ duration: 0.7 }}
                        style={{ animationDelay: '0.4s' }}
                      />
                      
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 p-8"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <motion.h3 
                          className="text-3xl font-bold font-heading text-accent mb-4 dreamy-float group-hover:text-nova-neon transition-colors duration-500"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          {image.title}
                        </motion.h3>
                        <motion.p 
                          className="text-lg text-gray-light leading-relaxed group-hover:text-accent transition-colors duration-500"
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {image.description}
                        </motion.p>
                      </motion.div>
                      
                      {/* Shimmer effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-nova-neon/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                        initial={{ x: '-200%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Carousel Controls */}
            <motion.button 
              onClick={() => setCurrentGalleryIndex(prev => prev === 0 ? galleryImages.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 glass p-4 rounded-full text-accent hover:text-nova-neon transition-all duration-500 group musical-hover-lift"
              whileHover={{ 
                scale: 1.2, 
                rotate: -10,
                boxShadow: "0 0 30px rgba(232, 145, 255, 0.6)" 
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FaChevronLeft className="text-xl group-hover:animate-pulse" />
              
              {/* Musical note on hover */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 music-note text-sm opacity-0 group-hover:opacity-80"
                transition={{ duration: 0.3 }}
              >♪</motion.div>
            </motion.button>
            
            <motion.button 
              onClick={() => setCurrentGalleryIndex(prev => prev === galleryImages.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 glass p-4 rounded-full text-accent hover:text-nova-neon transition-all duration-500 group musical-hover-lift"
              whileHover={{ 
                scale: 1.2, 
                rotate: 10,
                boxShadow: "0 0 30px rgba(232, 145, 255, 0.6)" 
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FaChevronRight className="text-xl group-hover:animate-pulse" />
              
              {/* Musical note on hover */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 music-note text-sm opacity-0 group-hover:opacity-80"
                transition={{ duration: 0.3 }}
              >♫</motion.div>
            </motion.button>
            
            {/* Gallery Indicators */}
            <motion.div 
              className="flex justify-center mt-8 gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {galleryImages.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`rounded-full transition-all duration-500 carousel-indicator relative ${
                    index === currentGalleryIndex 
                      ? 'w-8 h-3 bg-nova-neon shadow-glow' 
                      : 'w-3 h-3 bg-gray-dark hover:bg-primary'
                  }`}
                  whileHover={{ 
                    scale: 1.5,
                    boxShadow: "0 0 15px rgba(232, 145, 255, 0.4)"
                  }}
                  whileTap={{ scale: 0.8 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                >
                  {index === currentGalleryIndex && (
                    <motion.div
                      className="absolute inset-0 bg-nova-neon rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Cosmic sparkle on active */}
                  {index === currentGalleryIndex && (
                    <motion.div
                      className="absolute -top-2 -right-2 cosmic-sparkle"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-32 relative overflow-hidden particle-system">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        
        {/* Floating musical elements in background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="music-note text-4xl opacity-10 absolute top-20 left-1/4 advanced-float" style={{ animationDelay: '0s' }}>♪</div>
          <div className="music-note text-3xl opacity-15 absolute top-1/3 right-1/4 advanced-float" style={{ animationDelay: '2s' }}>♫</div>
          <div className="music-note text-5xl opacity-8 absolute bottom-1/4 left-1/6 advanced-float" style={{ animationDelay: '4s' }}>♬</div>
          <div className="ethereal-glow w-40 h-40 absolute top-1/4 right-1/6" style={{ animationDelay: '1s' }} />
          <div className="ethereal-glow w-32 h-32 absolute bottom-1/3 left-1/3" style={{ animationDelay: '3s' }} />
        </motion.div>
        
        <div className="container-custom relative">
          <motion.div 
            className="text-center mb-20 relative"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold font-display text-gradient mb-6 smooth-glow"
              initial={{ opacity: 0, y: 30, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              Meet Our Team
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-text max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              The passionate students who make NOVA Music Club the amazing community it is
            </motion.p>
            
            {/* Enhanced Staff section musical elements */}
            <motion.div 
              className="absolute -top-6 left-1/3 music-note text-xl advanced-float" 
              style={{ animationDelay: '2s' }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >♫</motion.div>
            <motion.div 
              className="absolute -top-6 right-1/3 music-note text-xl advanced-float" 
              style={{ animationDelay: '4s' }}
              initial={{ opacity: 0, scale: 0, rotate: 180 }}
              whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >♩</motion.div>
            
            {/* Music visualizer for staff section */}
            <motion.div 
              className="music-visualizer mt-8 scale-75"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="visualizer-bar w-2" style={{ animationDelay: '0s' }} />
              <div className="visualizer-bar w-2" style={{ animationDelay: '0.1s' }} />
              <div className="visualizer-bar w-2" style={{ animationDelay: '0.2s' }} />
              <div className="visualizer-bar w-2" style={{ animationDelay: '0.3s' }} />
              <div className="visualizer-bar w-2" style={{ animationDelay: '0.4s' }} />
              <div className="visualizer-bar w-2" style={{ animationDelay: '0.5s' }} />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="group text-center p-8 transition-all duration-700 relative overflow-hidden staff-card-hover modern-card"
                initial={{ 
                  opacity: 0, 
                  y: 80, 
                  scale: 0.8, 
                  rotateY: index % 2 === 0 ? -45 : 45 
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  rotateY: 0 
                }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 1, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -25, 
                  scale: 1.05,
                  rotateY: index % 2 === 0 ? 8 : -8,
                  rotateX: 5,
                  transition: { duration: 0.6, ease: "easeOut" } 
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Enhanced Musical elements for each staff card */}
                <motion.div 
                  className="absolute top-4 right-4 music-note text-sm opacity-40 advanced-float" 
                  style={{ animationDelay: `${index * 2}s` }}
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >♪</motion.div>
                <motion.div 
                  className="absolute bottom-4 left-4 cosmic-sparkle" 
                  style={{ animationDelay: `${index * 1.5}s` }}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Sound wave effect on hover */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sound-wave w-20 h-20 opacity-0 group-hover:opacity-30"
                  transition={{ duration: 0.5 }}
                  style={{ animationDelay: `${index * 0.2}s` }}
                />
                
                <motion.div 
                  className="relative mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 relative"
                    whileHover={{ 
                      scale: 1.15,
                      rotateY: 10,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <motion.img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ 
                        scale: 1.2,
                        filter: "brightness(1.1) saturate(1.2)",
                        transition: { duration: 0.4 }
                      }}
                    />
                    
                    {/* Image border glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-nova-neon/0 group-hover:border-nova-neon/60"
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                  
                  {/* Enhanced Glow effect around image */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 via-nova-neon/20 to-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 -z-10"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Rotating musical notes around image */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="absolute -top-2 left-1/2 music-note text-xs opacity-0 group-hover:opacity-60">♪</div>
                    <div className="absolute top-1/2 -right-2 music-note text-xs opacity-0 group-hover:opacity-60">♫</div>
                    <div className="absolute -bottom-2 left-1/2 music-note text-xs opacity-0 group-hover:opacity-60">♬</div>
                    <div className="absolute top-1/2 -left-2 music-note text-xs opacity-0 group-hover:opacity-60">♩</div>
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold font-heading mb-2 text-accent group-hover:text-nova-neon transition-colors duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {member.name}
                </motion.h3>
                
                <motion.p 
                  className="text-nova-neon font-medium text-lg mb-2 smooth-glow"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {member.role}
                </motion.p>
                
                <motion.p 
                  className="text-gray-text text-sm mb-4 group-hover:text-primary transition-colors duration-500"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.9, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {member.major}
                </motion.p>
                
                <motion.p 
                  className="text-gray-text leading-relaxed text-sm group-hover:text-gray-light transition-colors duration-500"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {member.description}
                </motion.p>
                
                {/* Enhanced Hover Effect Background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-nova-neon/5 to-primary/5 opacity-0 group-hover:opacity-100 rounded-3xl"
                  transition={{ duration: 0.7 }}
                />
                
                {/* Particle effect on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute top-1/4 left-1/4 cosmic-sparkle" style={{ animationDelay: '0.1s' }} />
                  <div className="absolute top-3/4 right-1/4 cosmic-sparkle" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute bottom-1/4 left-3/4 cosmic-sparkle" style={{ animationDelay: '0.5s' }} />
                </motion.div>
                
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-nova-neon/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-200%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;