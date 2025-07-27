import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand, FaMusic, FaCamera, FaUsers, FaGuitar, FaMicrophone, FaCalendarAlt } from 'react-icons/fa';

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

interface Category {
  value: string;
  label: string;
}

const Gallery: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [];

  const categories: Category[] = [
    { value: 'all', label: 'All Photos' },
    { value: 'events', label: 'Concert Events' },
    { value: 'sessions', label: 'Jam Sessions' },
    { value: 'workshops', label: 'Workshops' },
    { value: 'campus', label: 'Campus Life' },
    { value: 'practice', label: 'Practice & Recording' },
    { value: 'social', label: 'Social Events' }
  ];

  const filteredImages = category === 'all' 
    ? images 
    : images.filter(img => img.category === category);

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'events': return <FaMusic />;
      case 'sessions': return <FaUsers />;
      case 'workshops': return <FaGuitar />;
      case 'campus': return <FaCamera />;
      case 'practice': return <FaMicrophone />;
      case 'social': return <FaCalendarAlt />;
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
            Photo Gallery
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-text max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Capturing memories from our musical journey at the university
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

        {/* Enhanced Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`px-6 py-3 rounded-full font-semibold text-lg relative overflow-hidden musical-hover-lift transition-all duration-700 flex items-center gap-3 ${
                category === cat.value
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
              <span className="text-nova-neon">{getCategoryIcon(cat.value)}</span>
              {cat.label}
              
              {/* Musical note on active */}
              {category === cat.value && (
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

        {/* Enhanced Gallery Grid with 3D Effects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 perspective-1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{ perspective: '1200px' }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer musical-hover-lift ${
                index % 7 === 0 ? 'lg:col-span-2 lg:row-span-2' : 
                index % 5 === 0 ? 'lg:row-span-2' : ''
              }`}
              initial={{ 
                opacity: 0, 
                y: 100, 
                scale: 0.8,
                rotateX: 30,
                rotateY: index % 2 === 0 ? -15 : 15
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateX: 0,
                rotateY: 0
              }}
              transition={{ 
                delay: 2 + index * 0.1, 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              whileHover={{ 
                y: -20, 
                scale: 1.05,
                rotateX: index % 2 === 0 ? 5 : -5,
                rotateY: index % 2 === 0 ? 10 : -10,
                z: 100,
                transition: { duration: 0.6, ease: "easeOut" } 
              }}
              onClick={() => setSelectedImage(image)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`${index % 7 === 0 ? 'aspect-video' : 'aspect-square'} overflow-hidden relative`}>
                <motion.img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Enhanced Overlay with 3D depth */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {/* Category badge */}
                  <motion.div 
                    className="absolute top-4 left-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-nova-gradient text-accent shadow-glow flex items-center gap-2">
                      {getCategoryIcon(image.category)}
                      {image.category}
                    </span>
                  </motion.div>
                  
                  {/* Expand icon */}
                  <motion.div 
                    className="absolute top-4 right-4 w-12 h-12 glass rounded-full flex items-center justify-center text-nova-neon opacity-0 group-hover:opacity-100 transition-all duration-500"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    <FaExpand />
                  </motion.div>
                  
                  {/* Content overlay */}
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4"
                    style={{ transform: 'translateZ(25px)' }}
                  >
                    <motion.h3 
                      className="text-xl font-bold font-heading mb-2 text-accent group-hover:text-nova-neon transition-colors duration-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      {image.title}
                    </motion.h3>
                    <motion.div className="flex items-center gap-4 text-sm text-gray-text">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-nova-neon" />
                        {image.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCamera className="text-nova-neon" />
                        {image.location}
                      </span>
                    </motion.div>
                    <motion.p 
                      className="text-gray-light text-sm mt-2 opacity-90"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {image.description}
                    </motion.p>
                  </motion.div>
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-nova-neon/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-200%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                  
                  {/* Floating sparkles */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute top-8 right-8 cosmic-sparkle" style={{ animationDelay: '0.1s' }} />
                    <div className="absolute bottom-8 left-8 cosmic-sparkle" style={{ animationDelay: '0.3s' }} />
                    <div className="absolute top-1/2 left-1/2 cosmic-sparkle" style={{ animationDelay: '0.5s' }} />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Lightbox with 3D effects */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-6xl max-h-full"
                initial={{ rotateY: -90, z: -200 }}
                animate={{ rotateY: 0, z: 0 }}
                exit={{ rotateY: 90, z: -200 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ transformStyle: 'preserve-3d' }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-cosmic"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Enhanced image info */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 glass-dark rounded-b-2xl p-6"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold font-heading mb-2 text-accent">{selectedImage.title}</h3>
                  <div className="flex items-center gap-6 text-gray-text mb-3">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-nova-neon" />
                      {selectedImage.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCamera className="text-nova-neon" />
                      {selectedImage.location}
                    </span>
                    <span className="flex items-center gap-2">
                      {getCategoryIcon(selectedImage.category)}
                      {selectedImage.category}
                    </span>
                  </div>
                  <p className="text-gray-light leading-relaxed">{selectedImage.description}</p>
                </motion.div>
              </motion.div>
              
              {/* Enhanced Controls */}
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-14 h-14 glass rounded-full flex items-center justify-center text-accent text-xl musical-hover-lift"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
              
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 glass rounded-full flex items-center justify-center text-accent text-xl musical-hover-lift"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft />
              </motion.button>
              
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 glass rounded-full flex items-center justify-center text-accent text-xl musical-hover-lift"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;