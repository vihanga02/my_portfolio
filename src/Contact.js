import React, { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-slate-800 mb-4">
            Let's <span className="text-gradient-purple">Connect</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="glass rounded-3xl p-8 hover:shadow-glass-lg transition-all duration-300"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">Send me a message</h3>
              <p className="text-slate-600">I'll get back to you as soon as possible</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-primary-400 text-slate-700 placeholder-slate-400"
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-primary-400 text-slate-700 placeholder-slate-400"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-primary-400 text-slate-700 placeholder-slate-400 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-secondary text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            {[
              {
                icon: "📧",
                title: "Email",
                info: "vihagamuthumala@gmail.com",
                link: "mailto:vihagamuthumala@gmail.com"
              },
              {
                icon: "📍",
                title: "Location",
                info: "Galle, Sri Lanka",
                link: null
              },
              {
                icon: "🎓",
                title: "University",
                info: "University of Moratuwa",
                link: "https://uom.lk/"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 hover:shadow-glass-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-semibold">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="text-slate-600 hover:text-primary-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-slate-600">{item.info}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div 
              className="glass rounded-2xl p-6 hover:shadow-glass-lg transition-all duration-300"
              variants={itemVariants}
            >
              <h4 className="text-slate-800 font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {[
                  { name: "GitHub", url: "http://github.com/vihanga02", icon: "🐙" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/vihanga-muthumala-678451277", icon: "💼" },
                  { name: "Instagram", url: "https://www.instagram.com/__vihanga__m__", icon: "📸" },
                  { name: "Facebook", url: "https://www.facebook.com/vihanga.muthumala.1/", icon: "👥" }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-dark rounded-2xl flex items-center justify-center text-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;