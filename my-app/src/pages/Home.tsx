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
      description: "Join us every Sunday for collaborative music sessions - all skill levels welcome!"
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Weekly Jam Session",
      date: "SUN, JAN 28",
      time: "7:00 PM",
      artist: "Open to All Members",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Music Theory Workshop",
      date: "THU, FEB 1",
      time: "6:30 PM",
      artist: "Led by Sarah Chen (Music Major)",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Campus Open Mic Night",
      date: "FRI, FEB 2",
      time: "8:00 PM",
      artist: "Student Union Hall",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const galleryImages: GalleryImage[] = [
    // Gallery images will be added here once available
  ];

  const staffMembers: StaffMember[] = [
    {
      id: 1,
      name: "Achraf ElOuazzani",
      role: "President",
      major: "", // Field of study not provided yet
      image: "/images/staff/achraf.jpg",
      description: "Singer/Records, Masters Songs"
    },
    {
      id: 2,
      name: "Manal Ahmina (Minnie)",
      role: "Vice President",
      major: "", // Field of study not provided yet
      image: "/images/staff/Minnie.jpg",
      description: "Content Creator, Singer, Song Writer"
    },
    {
      id: 3,
      name: "Hiba ELKhourani",
      role: "Human Resources",
      major: "", // Field of study not provided yet
      image: "/images/staff/hiba.jpg",
      description: "Singer"
    },
    {
      id: 4,
      name: "Salma Hajjaji",
      role: "VP of Administration",
      major: "", // Field of study not provided yet
      image: "/images/staff/salma.jpg",
      description: "Singer"
    },
    {
      id: 5,
      name: "Faris Moughamir",
      role: "Artistic Director",
      major: "", // Field of study not provided yet
      image: "/images/staff/Faris.jpg",
      description: "DJ and Producer"
    },
    {
      id: 6,
      name: "Nour Naim",
      role: "Artistic Director",
      major: "", // Field of study not provided yet
      image: "/images/staff/Nour.jpg",
      description: "Singer"
    },
    {
      id: 7,
      name: "Hamza Naim",
      role: "Vocal Coach/Music Theory Tutor",
      major: "", // Field of study not provided yet
      image: "/images/staff/hamza.jpg",
      description: "Singer"
    },
    {
      id: 8,
      name: "Youssef Loulida",
      role: "Marketing Leader",
      major: "", // Field of study not provided yet
      image: "/images/staff/Youffes.jpg",
      description: "Events Presenter"
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
            backgroundImage: `url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-dark-bg/90 via-nova-darkPurple/60 to-primary/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        
        {/* Animated NOVA Particles */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div 
            className="nova-particle w-64 h-64 top-1/4 left-1/4" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          />
          <motion.div 
            className="nova-particle w-48 h-48 bottom-1/3 right-1/4" 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          />
          
          {/* Simplified Musical Notes */}
          <motion.div 
            className="music-note text-3xl top-20 left-20 opacity-30" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 1.5 }}
          >♪</motion.div>
          <motion.div 
            className="music-note text-2xl bottom-20 right-20 opacity-30" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1, delay: 2 }}
          >♫</motion.div>
        </motion.div>

        <motion.div 
          className="relative z-10 text-center max-w-6xl px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-display mb-8 leading-tight">
              <motion.span 
                className="block text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                WHERE
              </motion.span>
              <motion.span 
                className="block text-accent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                MUSIC
              </motion.span>
              <motion.span 
                className="block text-gradient"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                COMES ALIVE
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-3xl lg:text-4xl text-gray-text mb-16 font-light leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            Join the <span className="text-nova-neon font-medium">musical community</span> at your university with <span className="text-accent font-bold">NOVA MUSIC CLUB</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <Link to="/events" className="group">
              <Button size="large" className="text-lg px-12 py-5">
                <FaCalendarAlt className="text-xl mr-3" />
                Join Activities
              </Button>
            </Link>
            <Link to="/contact" className="group">
              <Button variant="outline" size="large" className="text-lg px-12 py-5">
                <FaUsers className="text-xl mr-3" />
                Become a Member
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center text-accent/60 hover:text-nova-neon transition-colors duration-300">
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full animate-bounce mt-2" />
            </div>
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
                  y: -4, 
                  scale: 1.02,
                  transition: { duration: 0.2, ease: "easeOut" } 
                }}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <motion.div 
                  className="text-6xl text-nova-neon mb-8 flex justify-center relative"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.3 + 0.5, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
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

      {/* About Us Section */}
      <section className="py-32 relative overflow-hidden particle-system">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-dark-bg via-nova-darkPurple/30 via-primary/15 to-dark-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        
        {/* Enhanced animated background mesh */}
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.2, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-nova-neon/10 via-primary/20 to-nova-neon/10 blur-3xl" />
        </motion.div>
        
        {/* Enhanced floating musical elements in background */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="music-note text-6xl text-nova-neon opacity-20 absolute top-20 left-1/6 advanced-float filter drop-shadow-lg"
            style={{ animationDelay: '0s' }}
            animate={{ 
              textShadow: [
                "0 0 20px rgba(232, 145, 255, 0.5)",
                "0 0 40px rgba(232, 145, 255, 0.8)", 
                "0 0 20px rgba(232, 145, 255, 0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >♪</motion.div>
          <motion.div 
            className="music-note text-4xl text-primary opacity-25 absolute top-1/3 right-1/5 advanced-float filter drop-shadow-lg"
            style={{ animationDelay: '3s' }}
            animate={{ 
              textShadow: [
                "0 0 15px rgba(180, 92, 240, 0.6)",
                "0 0 30px rgba(180, 92, 240, 0.9)", 
                "0 0 15px rgba(180, 92, 240, 0.6)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >♫</motion.div>
          <motion.div 
            className="music-note text-5xl text-accent opacity-18 absolute bottom-1/4 left-1/4 advanced-float filter drop-shadow-lg"
            style={{ animationDelay: '6s' }}
            animate={{ 
              textShadow: [
                "0 0 25px rgba(255, 255, 255, 0.4)",
                "0 0 50px rgba(255, 255, 255, 0.7)", 
                "0 0 25px rgba(255, 255, 255, 0.4)"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          >♬</motion.div>
          
          {/* Enhanced ethereal glows with color variations */}
          <motion.div 
            className="w-48 h-48 absolute top-1/4 right-1/6 rounded-full blur-3xl"
            style={{ 
              background: 'radial-gradient(circle, rgba(232, 145, 255, 0.3) 0%, rgba(180, 92, 240, 0.2) 50%, transparent 100%)',
              animationDelay: '2s' 
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="w-32 h-32 absolute bottom-1/3 left-1/2 rounded-full blur-2xl"
            style={{ 
              background: 'radial-gradient(circle, rgba(180, 92, 240, 0.4) 0%, rgba(232, 145, 255, 0.2) 50%, transparent 100%)',
              animationDelay: '5s' 
            }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
          
          {/* Enhanced sound waves with gradients */}
          <motion.div 
            className="w-40 h-40 absolute top-1/2 left-10 rounded-full opacity-30"
            style={{ 
              background: 'conic-gradient(from 0deg, transparent, rgba(232, 145, 255, 0.5), transparent)',
              animationDelay: '1s' 
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="w-32 h-32 absolute bottom-1/4 right-16 rounded-full opacity-25"
            style={{ 
              background: 'conic-gradient(from 180deg, transparent, rgba(180, 92, 240, 0.6), transparent)',
              animationDelay: '4s' 
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Enhanced frequency waves with animated gradients */}
          <motion.div 
            className="w-full h-1 absolute top-1/3"
            style={{ animationDelay: '3s' }}
            animate={{
              background: [
                'linear-gradient(90deg, transparent, rgba(232, 145, 255, 0.4), transparent)',
                'linear-gradient(90deg, transparent, rgba(180, 92, 240, 0.6), transparent)',
                'linear-gradient(90deg, transparent, rgba(232, 145, 255, 0.4), transparent)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="w-full h-1 absolute bottom-1/3"
            style={{ animationDelay: '7s' }}
            animate={{
              background: [
                'linear-gradient(90deg, transparent, rgba(180, 92, 240, 0.3), transparent)',
                'linear-gradient(90deg, transparent, rgba(232, 145, 255, 0.5), transparent)',
                'linear-gradient(90deg, transparent, rgba(180, 92, 240, 0.3), transparent)'
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
          
          {/* Floating particle effects */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-nova-neon rounded-full opacity-40"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${15 + i * 8}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.2, 0.5]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
        </motion.div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            {/* Music visualizer */}
            <motion.div 
              className="music-visualizer mb-8 scale-75"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
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
            
            <motion.h2
              className="text-5xl md:text-6xl font-bold font-display text-gradient mb-8 smooth-glow"
              initial={{ opacity: 0, y: 30, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.h2>
            
            {/* Musical elements around title */}
            <motion.div 
              className="absolute -top-8 left-1/4 music-note text-2xl advanced-float"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              style={{ animationDelay: '2s' }}
            >♪</motion.div>
            <motion.div 
              className="absolute -top-8 right-1/4 music-note text-2xl advanced-float"
              initial={{ opacity: 0, scale: 0, rotate: 180 }}
              whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
              style={{ animationDelay: '5s' }}
            >♬</motion.div>
          </motion.div>

          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="modern-card p-12 md:p-16 text-center relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(30, 30, 40, 0.95) 50%, rgba(10, 10, 10, 0.9) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(232, 145, 255, 0.2)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
              whileHover={{ 
                y: -4, 
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
            >
              {/* Enhanced animated border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(232, 145, 255, 0.3), transparent, rgba(180, 92, 240, 0.3), transparent)',
                  backgroundSize: '400% 400%'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Enhanced floating sparkles around the card */}
              <motion.div
                className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              >
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-nova-neon rounded-full"
                    style={{
                      left: `${10 + (i * 8)}%`,
                      top: `${15 + (i * 6)}%`,
                    }}
                    animate={{
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0.3, 1, 0.3],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 2 + i * 0.2,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Main content with enhanced styling */}
              <motion.p 
                className="text-xl md:text-2xl leading-relaxed mb-8 group-hover:text-gray-light transition-colors duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(232, 145, 255, 0.8) 50%, rgba(255, 255, 255, 0.9) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                }}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))" }}
                transition={{ delay: 1, duration: 1 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="font-bold text-2xl md:text-3xl"
                  style={{
                    background: 'linear-gradient(45deg, #E891FF 0%, #B45CF0 50%, #E891FF 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 20px rgba(232, 145, 255, 0.6))'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(232, 145, 255, 0.6)',
                      '0 0 40px rgba(232, 145, 255, 0.9)',
                      '0 0 20px rgba(232, 145, 255, 0.6)'
                    ]
                  }}
                  whileHover={{
                    scale: 1.1,
                    filter: 'drop-shadow(0 0 30px rgba(232, 145, 255, 0.8))'
                  }}
                >
                  NOVA
                </motion.span>
                <motion.span 
                  className="italic opacity-80"
                  style={{
                    background: 'linear-gradient(45deg, rgba(180, 92, 240, 0.9) 0%, rgba(232, 145, 255, 0.7) 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.8 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {" "}Music Club{" "}
                </motion.span>
                is a music club based in the Faculty of Sciences Rabat, gathering ambitious and music enthusiasts that want to showcase their talent and do what they love...
              </motion.p>
              
              <motion.p 
                className="text-2xl md:text-3xl font-bold font-heading rhythm-pulse"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #E891FF 30%, #B45CF0 70%, #FFFFFF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 4px 8px rgba(232, 145, 255, 0.4))'
                }}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 1.6, 
                  duration: 1, 
                  ease: "easeOut",
                  textShadow: { duration: 3, repeat: Infinity }
                }}
                viewport={{ once: true }}
                animate={{
                  textShadow: [
                    '0 0 30px rgba(232, 145, 255, 0.6)',
                    '0 0 60px rgba(232, 145, 255, 0.9)',
                    '0 0 30px rgba(232, 145, 255, 0.6)'
                  ]
                }}
                whileHover={{ 
                  scale: 1.15,
                  filter: 'drop-shadow(0 6px 12px rgba(232, 145, 255, 0.8))'
                }}
              >
                Music, what unites us!
              </motion.p>
              
              {/* Enhanced musical notes with glowing effects */}
              <motion.div 
                className="absolute top-4 right-4 text-lg text-nova-neon opacity-60 advanced-float"
                style={{ 
                  animationDelay: '1s',
                  filter: 'drop-shadow(0 0 10px rgba(232, 145, 255, 0.8))'
                }}
                animate={{ 
                  rotate: 360,
                  textShadow: [
                    '0 0 10px rgba(232, 145, 255, 0.8)',
                    '0 0 20px rgba(232, 145, 255, 1)',
                    '0 0 10px rgba(232, 145, 255, 0.8)'
                  ]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  textShadow: { duration: 2, repeat: Infinity }
                }}
              >♪</motion.div>
              <motion.div 
                className="absolute bottom-4 left-4 text-xl text-primary opacity-70 advanced-float"
                style={{ 
                  animationDelay: '3s',
                  filter: 'drop-shadow(0 0 12px rgba(180, 92, 240, 0.9))'
                }}
                animate={{ 
                  rotate: -360,
                  textShadow: [
                    '0 0 12px rgba(180, 92, 240, 0.9)',
                    '0 0 24px rgba(180, 92, 240, 1)',
                    '0 0 12px rgba(180, 92, 240, 0.9)'
                  ]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  textShadow: { duration: 2.5, repeat: Infinity }
                }}
              >♫</motion.div>
              
              {/* Enhanced sound wave effect with gradient */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-40"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(232, 145, 255, 0.6), transparent, rgba(180, 92, 240, 0.8), transparent)'
                }}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
              
              {/* Enhanced shimmer effect with rainbow gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 -skew-x-12"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(232, 145, 255, 0.3), rgba(180, 92, 240, 0.4), rgba(232, 145, 255, 0.3), transparent)'
                }}
                initial={{ x: '-200%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
              
              {/* Enhanced glow effect with pulsing */}
              <motion.div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at center, rgba(232, 145, 255, 0.1) 0%, rgba(180, 92, 240, 0.05) 50%, transparent 100%)'
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </motion.div>
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
          {galleryImages.length > 0 ? (
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
                scale: 1.01,
                transition: { duration: 0.3 }
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
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
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
          ) : (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass border border-primary/20 rounded-3xl p-12 max-w-2xl mx-auto backdrop-blur-xl">
                <div className="w-20 h-20 bg-nova-gradient rounded-full flex items-center justify-center mx-auto mb-8">
                  <FaMusic className="text-3xl text-accent" />
                </div>
                
                <h3 className="text-2xl font-bold text-accent mb-4">
                  Gallery Coming Soon
                </h3>
                <p className="text-xl text-gray-text leading-relaxed">
                  We're preparing an amazing collection of moments from our musical journey.<br />
                  Check back soon for photos and videos!
                </p>
                
                <div className="w-16 h-1 bg-nova-gradient rounded-full mx-auto mt-8" />
              </div>
            </motion.div>
          )}
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
              The passionate staff who make NOVA Music Club the amazing community it is
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
                  y: -4, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" } 
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
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.img 
                      src={member.image} 
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.3 }
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