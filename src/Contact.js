import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Define the openWhatsApp function using environment variable
    const openWhatsApp = () => {
      const phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
      const message = "Hi! I'd like to get in touch with you.";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
          // Use environment variables for EmailJS
          await emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
              to_email: process.env.REACT_APP_CONTACT_EMAIL
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
          );

          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } catch (error) {
          console.error('Error sending email:', error);
          setSubmitStatus('error');
        } finally {
          setIsSubmitting(false);
          // Clear status after 3 seconds
          setTimeout(() => setSubmitStatus(''), 3000);
        }
    };

    return (
        <motion.div
            className="contact"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {/* Header Section */}
            <motion.div
                className="contact-header"
                variants={itemVariants}
            >
                <h1
                    className="gradient-text contact-heading"
                >
                    Let's Connect
                </h1>

                <h2
                    className="contact-subheading"
                >
                    Ready to bring your ideas to life? Let's collaborate and create something amazing together.
                </h2>
            </motion.div>

            {/* Main Content Grid */}
            <div className="contact-grid">
                {/* Contact Info */}
                <motion.div
                    className="contact-info-card"
                    variants={itemVariants}
                >
                    <div className="contact-info-card-bg" />

                    <h3 className="contact-info-heading">
                        Get In Touch
                    </h3>

                    <div className="contact-info-list">
                        {/* Personal Email */}
                        <motion.div
                            className="contact-info-item"
                            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(70, 130, 169, 0.15)' }}
                        >
                            <div className="contact-info-icon-wrapper personal-email-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <div className="contact-info-text">
                                <p className="contact-info-title">Personal Email</p>
                                <a href="mailto:vihangamuthumala@gmail.com" className="contact-info-link">
                                    vihangamuthumala@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="contact-info-item"
                            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(70, 130, 169, 0.15)' }}
                        >
                            <div className="contact-info-icon-wrapper work-email-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <div className="contact-info-text">
                                <p className="contact-info-title">Work Email</p>
                                <a href="mailto:vihangamuthumala@cse.mrt.ac.lk" className="contact-info-link">
                                    vihangamuthumala@cse.mrt.ac.lk
                                </a>
                            </div>
                        </motion.div>

                        {/* Phone */}
                        <motion.div
                            className="contact-info-item"
                            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(70, 130, 169, 0.15)' }}
                        >
                            <div className="contact-info-icon-wrapper phone-icon bg-blue-500">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                            </div>
                            <div className="contact-info-text">
                                <p className="contact-info-title">Phone</p>
                                <div className="contact-info-phone-container">
                                    <a href="tel:+94763121937" className="contact-info-link">
                                        +94 76 312 1937
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Address */}
                        <motion.div
                            className="contact-info-item"
                            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(70, 130, 169, 0.15)' }}
                        >
                            <div className="contact-info-icon-wrapper address-icon bg-blue-500">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <div className="contact-info-text">
                                <p className="contact-info-title">Address</p>
                                <span className="contact-info-link">
                                    443/12, Wakwella Rd, Galle
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            className="contact-info-item"
                            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(70, 130, 169, 0.15)' }}
                            onClick={openWhatsApp}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="contact-info-icon-wrapper whatsapp-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.451-4.437-9.887-9.888-9.888-5.451 0-9.887 4.436-9.888 9.888-.001 2.02.63 3.865 1.739 5.574l-1.549 4.493 4.805-1.251z"/>
                                </svg>
                            </div>
                            <div className="contact-info-text">
                                <p className="contact-info-title">WhatsApp</p>
                                <span className="contact-info-link">Click to chat</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="contact-form-card"
                    variants={itemVariants}
                >
                    <h3 className="contact-form-heading">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="What should I call you?"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Where can I reach you?"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Tell me about your project or idea..."
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="premium-btn form-submit-btn"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </motion.button>

                        {submitStatus === 'success' && (
                            <p className="form-status-success">Message sent successfully!</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="form-status-error">Failed to send. Please try again.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
