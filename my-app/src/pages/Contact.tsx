import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaInstagram, FaMusic, FaUsers, FaUser, FaEnvelopeOpen, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
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

  const ContactCard = memo(({ icon, title, content, isClickable = false, href }: {
    icon: React.ReactNode;
    title: string;
    content: string[];
    isClickable?: boolean;
    href?: string;
  }) => (
    <motion.div 
      className="bg-dark-secondary/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-nova-neon/30 transition-all duration-300"
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-nova-neon text-2xl">{icon}</div>
        <h3 className="text-xl font-semibold text-accent">{title}</h3>
      </div>
      <div className="space-y-2">
        {content.map((item, i) => (
          isClickable && href ? (
            <a 
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-text hover:text-nova-neon transition-colors duration-200 font-medium"
            >
              {item}
            </a>
          ) : (
            <p key={i} className="text-gray-text">{item}</p>
          )
        ))}
      </div>
    </motion.div>
  ));

  ContactCard.displayName = 'ContactCard';

  return (
    <div className="min-h-screen bg-dark-bg py-12">
      {/* Simplified Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient" />
      </div>

      <div className="container-custom relative z-10">
        {/* Clean Page Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass rounded-full border border-primary/20">
            <FaMusic className="text-nova-neon" />
            <span className="text-nova-neon font-medium">NOVA Music Club</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-display text-gradient mb-6">
            Join Our Club
          </h1>
          
          <p className="text-xl text-gray-text max-w-2xl mx-auto leading-relaxed">
            Ready to make music with us? Get in touch and become part of the NOVA family
          </p>
          
          <div className="w-20 h-1 bg-nova-gradient rounded-full mx-auto mt-8" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ContactCard 
            icon={<FaEnvelope />}
            title="Email"
            content={["elkhouranihiba226@gmail.com"]}
          />
          
          <ContactCard 
            icon={<FaWhatsapp />}
            title="WhatsApp"
            content={["0617478471"]}
            isClickable={true}
            href="https://wa.me/212617478471"
          />
          
          <ContactCard 
            icon={<FaInstagram />}
            title="Instagram"
            content={["@jamhouse.fsr"]}
            isClickable={true}
            href="https://www.instagram.com/jamhouse.fsr/#"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            className="modern-card p-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Form header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-nova-gradient rounded-full flex items-center justify-center text-accent text-xl">
                <FaEnvelopeOpen />
              </div>
              <h2 className="text-3xl font-bold font-heading text-gradient">Get Started</h2>
            </div>
            
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  className="bg-nova-gradient text-accent p-6 rounded-2xl mb-8 text-center relative overflow-hidden"
                  initial={{ opacity: 0, y: -20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-center gap-3 text-lg font-semibold">
                    <FaPaperPlane />
                    Thank you! We'll get back to you soon.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-accent font-semibold flex items-center gap-2">
                    <FaUser className="text-nova-neon" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 glass border border-primary/30 rounded-xl text-accent focus:outline-none focus:border-nova-neon focus:shadow-lg transition-all duration-300 ${errors.name ? 'border-red-400' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm flex items-center gap-2">
                      <span>⚠️</span>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-accent font-semibold flex items-center gap-2">
                    <FaEnvelope className="text-nova-neon" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 glass border border-primary/30 rounded-xl text-accent focus:outline-none focus:border-nova-neon focus:shadow-lg transition-all duration-300 ${errors.email ? 'border-red-400' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm flex items-center gap-2">
                      <span>⚠️</span>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Year and Instrument Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-accent font-semibold flex items-center gap-2">
                    <FaUsers className="text-nova-neon" />
                    Academic Year
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass border border-primary/30 rounded-xl text-accent focus:outline-none focus:border-nova-neon focus:shadow-lg transition-all duration-300"
                  >
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="graduate">Graduate</option>
                    <option value="faculty">Faculty/Staff</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-accent font-semibold flex items-center gap-2">
                    <FaMusic className="text-nova-neon" />
                    Instrument/Skill
                  </label>
                  <input
                    type="text"
                    name="instrument"
                    value={formData.instrument}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass border border-primary/30 rounded-xl text-accent focus:outline-none focus:border-nova-neon focus:shadow-lg transition-all duration-300"
                    placeholder="Piano, Guitar, Vocals, etc."
                  />
                </div>
              </div>

              {/* Interest */}
              <div className="space-y-2">
                <label className="block text-accent font-semibold flex items-center gap-2">
                  <FaMusic className="text-nova-neon" />
                  Interest
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass border border-primary/30 rounded-xl text-accent focus:outline-none focus:border-nova-neon focus:shadow-lg transition-all duration-300"
                >
                  <option value="join">Join the Club</option>
                  <option value="workshop">Attend Workshops</option>
                  <option value="perform">Performance Opportunities</option>
                  <option value="collaborate">Collaboration</option>
                  <option value="general">General Questions</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-accent font-semibold flex items-center gap-2">
                  <FaPaperPlane className="text-nova-neon" />
                  Tell Us About Yourself
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 glass border border-primary/30 rounded-xl text-accent focus:outline-none focus:border-nova-neon focus:shadow-lg transition-all duration-300 resize-none ${errors.message ? 'border-red-400' : ''}`}
                  placeholder="Share your musical background, interests, and what you hope to gain from joining NOVA Music Club..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm flex items-center gap-2">
                    <span>⚠️</span>
                    {errors.message}
                  </p>
                )}
              </div>
              
              {/* Submit Button */}
              <Button 
                type="submit" 
                size="large" 
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span className="flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
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
            </form>
          </motion.div>

          {/* Location Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Meeting Info */}
            <div className="modern-card p-8">
              <h3 className="text-3xl font-bold font-heading text-gradient mb-6 flex items-center gap-3">
                <FaMusic className="text-nova-neon" />
                Club Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-nova-neon text-xl mt-1">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-accent">Location</h4>
                    <div className="text-gray-text space-y-1">
                      <p>Faculty of Sciences Rabat</p>
                      <p>4 Avenue Ibn Batouta, Rabat, Morocco</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-nova-neon text-xl mt-1">
                    <FaUsers />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-accent">Meetings</h4>
                    <div className="text-gray-text space-y-1">
                      <p>Saturdays 12:00 - 16:00</p>
                      <p>Open to all university students</p>
                      <p>All skill levels welcome</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="modern-card p-8">
              <h3 className="text-3xl font-bold font-heading text-gradient mb-6 flex items-center gap-3">
                <FaMapMarkerAlt className="text-nova-neon" />
                Find Us
              </h3>
              <div 
                className="h-64 rounded-xl relative overflow-hidden glass border border-primary/30"
                style={{
                  backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-6.8382388,34.0079673,15,0/600x200@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 glass-dark rounded-lg p-4">
                  <h4 className="text-lg font-bold text-accent mb-2">Faculty of Sciences Rabat</h4>
                  <p className="text-gray-text text-sm">Located at 4 Avenue Ibn Batouta, Rabat, Morocco. Our club meets at this university campus for all activities and events.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;