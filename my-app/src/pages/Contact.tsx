import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaMusic, FaUsers, FaGuitar, FaCalendarAlt, FaDiscord, FaUser, FaEnvelopeOpen, FaPaperPlane } from 'react-icons/fa';
import Button from '../components/common/Button';

interface FormData {
  name: string;
  email: string;
  studentId: string;
  year: string;
  instrument: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string[];
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    studentId: '',
    year: 'freshman',
    instrument: '',
    subject: 'join',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate all fields
    const newErrors: Partial<FormData> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'name' || key === 'email' || key === 'message') {
        const error = validateField(key, value);
        if (error) newErrors[key as keyof FormData] = error;
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setShowSuccess(true);
    setIsSubmitting(false);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({
      name: '',
      email: '',
      studentId: '',
      year: 'freshman',
      instrument: '',
      subject: 'join',
      message: ''
    });
    setErrors({});
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: ["novamusic@university.edu", "president@novamusic.org"]
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Meeting Location", 
      content: ["Music Building Room 204", "Wednesdays 7:00 PM"]
    }
  ];

  const socialLinks: SocialLink[] = [
    { href: "https://discord.gg/novamusic", icon: <FaDiscord />, label: "Discord" },
    { href: "https://instagram.com/novamusic_university", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://youtube.com/@novamusic", icon: <FaYoutube />, label: "YouTube" },
    { href: "https://facebook.com/novamusic", icon: <FaFacebookF />, label: "Facebook" },
  ];

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
            Join Our Club
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-text max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Ready to make music with us? Get in touch and become part of the NOVA Music family
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Enhanced Contact Form */}
          <motion.div
            className="modern-card p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ 
              y: -10, 
              rotateY: 5,
              transition: { duration: 0.5 } 
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Form header with icon */}
            <motion.div 
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.div 
                className="w-12 h-12 bg-nova-gradient rounded-full flex items-center justify-center text-accent text-xl"
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <FaEnvelopeOpen />
              </motion.div>
              <h2 className="text-3xl font-bold font-heading text-gradient">Get Started</h2>
            </motion.div>
            
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  className="bg-nova-gradient text-accent p-6 rounded-2xl mb-8 text-center relative overflow-hidden"
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.div
                    className="flex items-center justify-center gap-3 text-lg font-semibold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <FaPaperPlane />
                    Thank you! We'll get back to you soon.
                  </motion.div>
                  
                  {/* Success sparkles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-2 right-4 cosmic-sparkle" style={{ animationDelay: '0.1s' }} />
                    <div className="absolute bottom-2 left-4 cosmic-sparkle" style={{ animationDelay: '0.3s' }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="relative"
              >
                <motion.label 
                  htmlFor="name" 
                  className="block text-accent font-semibold mb-3 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaUser className="text-nova-neon" />
                  Full Name
                </motion.label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={(e) => {
                    setFocusedField(null);
                    handleBlur(e);
                  }}
                  required
                  className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <div className="form-error">
                    <span>⚠️</span>
                    {errors.name}
                  </div>
                )}
                {!errors.name && formData.name && (
                  <div className="form-success">
                    <span>✓</span>
                    Looks good!
                  </div>
                )}
                {focusedField === 'name' && (
                  <motion.div
                    className="absolute right-4 top-12 music-note text-nova-neon opacity-60"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >♪</motion.div>
                )}
              </motion.div>
              
              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="relative"
              >
                <motion.label 
                  htmlFor="email" 
                  className="block text-accent font-semibold mb-3 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaEnvelope className="text-nova-neon" />
                  University Email
                </motion.label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-6 py-4 glass border border-primary/30 rounded-2xl text-accent focus:outline-none focus:border-nova-neon focus:shadow-neon transition-all duration-500 musical-hover-lift"
                  placeholder="your.name@university.edu"
                />
                {focusedField === 'email' && (
                  <motion.div
                    className="absolute right-4 top-12 music-note text-nova-neon opacity-60"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >♫</motion.div>
                )}
              </motion.div>
              
              {/* Student ID Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="relative"
              >
                <motion.label 
                  htmlFor="studentId" 
                  className="block text-accent font-semibold mb-3 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaUsers className="text-nova-neon" />
                  Student ID (Optional)
                </motion.label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('studentId')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-6 py-4 glass border border-primary/30 rounded-2xl text-accent focus:outline-none focus:border-nova-neon focus:shadow-neon transition-all duration-500 musical-hover-lift"
                  placeholder="Your student ID"
                />
              </motion.div>
              
              {/* Year and Instrument Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.9, duration: 0.6 }}
                  className="relative"
                >
                  <motion.label 
                    htmlFor="year" 
                    className="block text-accent font-semibold mb-3 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaCalendarAlt className="text-nova-neon" />
                    Academic Year
                  </motion.label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-6 py-4 glass border border-primary/30 rounded-2xl text-accent focus:outline-none focus:border-nova-neon focus:shadow-neon transition-all duration-500 musical-hover-lift"
                  >
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="graduate">Graduate</option>
                    <option value="faculty">Faculty/Staff</option>
                  </select>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.9, duration: 0.6 }}
                  className="relative"
                >
                  <motion.label 
                    htmlFor="instrument" 
                    className="block text-accent font-semibold mb-3 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaGuitar className="text-nova-neon" />
                    Instrument/Skill
                  </motion.label>
                  <input
                    type="text"
                    id="instrument"
                    name="instrument"
                    value={formData.instrument}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('instrument')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 glass border border-primary/30 rounded-2xl text-accent focus:outline-none focus:border-nova-neon focus:shadow-neon transition-all duration-500 musical-hover-lift"
                    placeholder="Piano, Guitar, Vocals, etc."
                  />
                  {focusedField === 'instrument' && (
                    <motion.div
                      className="absolute right-4 top-12 music-note text-nova-neon opacity-60"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.3 }}
                    >♬</motion.div>
                  )}
                </motion.div>
              </div>
              
              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.0, duration: 0.6 }}
              >
                <motion.label 
                  htmlFor="subject" 
                  className="block text-accent font-semibold mb-3 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaMusic className="text-nova-neon" />
                  Interest
                </motion.label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 glass border border-primary/30 rounded-2xl text-accent focus:outline-none focus:border-nova-neon focus:shadow-neon transition-all duration-500 musical-hover-lift"
                >
                  <option value="join">Join the Club</option>
                  <option value="workshop">Attend Workshops</option>
                  <option value="perform">Performance Opportunities</option>
                  <option value="collaborate">Collaboration</option>
                  <option value="general">General Questions</option>
                </select>
              </motion.div>
              
              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.1, duration: 0.6 }}
                className="relative"
              >
                <motion.label 
                  htmlFor="message" 
                  className="block text-accent font-semibold mb-3 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaPaperPlane className="text-nova-neon" />
                  Tell Us About Yourself
                </motion.label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="w-full px-6 py-4 glass border border-primary/30 rounded-2xl text-accent focus:outline-none focus:border-nova-neon focus:shadow-neon transition-all duration-500 musical-hover-lift resize-none"
                  placeholder="Share your musical background, interests, and what you hope to gain from joining NOVA Music Club..."
                />
                {focusedField === 'message' && (
                  <motion.div
                    className="absolute right-4 top-12 music-note text-nova-neon opacity-60"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3 }}
                  >♪</motion.div>
                )}
              </motion.div>
              
              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
              >
                <Button 
                  type="submit" 
                  size="large" 
                  disabled={isSubmitting}
                  className={`w-full btn-primary-enhanced ripple-effect ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  <span className="flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner w-5 h-5"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </span>
                </Button>
              </motion.div>
            </form>
            
            {/* Floating sparkles around form */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <div className="absolute top-8 right-8 cosmic-sparkle" style={{ animationDelay: '0.1s' }} />
              <div className="absolute bottom-8 left-8 cosmic-sparkle" style={{ animationDelay: '0.3s' }} />
              <div className="absolute top-1/3 left-4 cosmic-sparkle" style={{ animationDelay: '0.5s' }} />
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-12"
            whileHover={{ 
              y: -10, 
              rotateY: -5,
              transition: { duration: 0.5 } 
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Club Info */}
            <motion.div 
              className="modern-card p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <motion.h3 
                className="text-3xl font-bold font-heading text-gradient mb-6 flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <FaMusic className="text-nova-neon" />
                Club Information
              </motion.h3>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-nova-neon text-xl mt-1">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-accent">Weekly Meetings</h4>
                    <div className="text-gray-text space-y-1">
                      <p>Wednesdays: 7:00 PM - 9:00 PM</p>
                      <p>Music Building, Room 204</p>
                      <p>Everyone welcome!</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-nova-neon text-xl mt-1">
                    <FaUsers />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-accent">Membership</h4>
                    <div className="text-gray-text space-y-1">
                      <p>Open to all university students</p>
                      <p>No experience required</p>
                      <p>All skill levels welcome</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              className="modern-card p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <motion.h3 
                className="text-3xl font-bold font-heading text-gradient mb-6 flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <FaEnvelopeOpen className="text-nova-neon" />
                Get In Touch
              </motion.h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 + index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-nova-neon text-xl mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-accent">{info.title}</h4>
                      <div className="text-gray-text space-y-1">
                        {info.content.map((item, i) => (
                          <p key={i}>{item}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Social Media */}
            <motion.div 
              className="modern-card p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
            >
              <motion.h3 
                className="text-3xl font-bold font-heading text-gradient mb-6 flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <FaInstagram className="text-nova-neon" />
                Connect With Us
              </motion.h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 glass rounded-full flex items-center justify-center text-accent hover:text-nova-neon musical-hover-lift relative overflow-hidden"
                    aria-label={social.label}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 15,
                      y: -5 
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                    <div className="melodic-trail w-full h-full absolute inset-0 opacity-0 hover:opacity-100" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Campus Map */}
        <motion.div 
          className="modern-card p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ y: -10 }}
        >
          <motion.h3 
            className="text-3xl font-bold font-heading text-gradient mb-6 flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <FaMapMarkerAlt className="text-nova-neon" />
            Find Us On Campus
          </motion.h3>
          <div 
            className="h-96 rounded-2xl relative overflow-hidden glass border border-primary/30"
            style={{
              backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-73.985428,40.758896,15,0/1200x400@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            <motion.div 
              className="absolute bottom-6 left-6 right-6 glass-dark rounded-xl p-4"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.6 }}
            >
              <h4 className="text-xl font-bold font-heading text-accent mb-2">Music Building - Room 204</h4>
              <p className="text-gray-text">Located in the heart of campus, our practice room is equipped with instruments and recording equipment for all club activities.</p>
            </motion.div>
            
            {/* Map sparkles */}
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 2.8, duration: 1 }}
            >
              <div className="absolute top-1/4 left-1/3 cosmic-sparkle" style={{ animationDelay: '0.1s' }} />
              <div className="absolute bottom-1/3 right-1/4 cosmic-sparkle" style={{ animationDelay: '0.3s' }} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;