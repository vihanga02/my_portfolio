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
            style={{
                padding: '8rem 2rem 6rem',
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(70, 130, 169, 0.03), rgba(116, 155, 194, 0.02))',
                borderRadius: '24px',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
        >
            {/* Header Section */}
            <motion.div
                variants={itemVariants}
                style={{
                    textAlign: 'center',
                    marginBottom: '4rem'
                }}
            >
                <h1
                    className="gradient-text"
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: '900',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(135deg, #4682A9, #749BC2, #91C8E4)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 8px 32px rgba(70, 130, 169, 0.3)'
                    }}
                >
                    Let's Connect
                </h1>

                <h2
                    style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1rem)',
                        fontWeight: '500',
                        color: '#749BC2',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                        opacity: '0.9'
                    }}
                >
                    Ready to bring your ideas to life? Let's collaborate and create something amazing together.
                </h2>
            </motion.div>

            {/* Main Content Grid */}
            <div style={{
                display: 'grid',
                gap: '2.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                alignItems: 'start'
            }}>
                {/* Contact Info */}
                <motion.div 
                    variants={itemVariants}
                    style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '24px',
                        padding: '2.5rem',
                        boxShadow: '0 20px 40px rgba(70, 130, 169, 0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Decorative elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: '100px',
                        height: '100px',
                        background: 'linear-gradient(135deg, rgba(145, 200, 228, 0.2), rgba(116, 155, 194, 0.1))',
                        borderRadius: '50%',
                        filter: 'blur(20px)'
                    }} />

                    <h3 style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        color: '#4682A9',
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        Get In Touch 
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                        {/* Personal Email */}
                        <motion.div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.1rem',
                                background: 'linear-gradient(135deg, rgba(145, 200, 228, 0.15), rgba(116, 155, 194, 0.1))',
                                borderRadius: '16px',
                                border: '1px solid rgba(145, 200, 228, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(70, 130, 169, 0.15)' }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'linear-gradient(135deg, #4682A9, #749BC2)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 15px rgba(70, 130, 169, 0.3)'
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ color: '#4682A9', fontWeight: '700', marginBottom: '0.3rem', fontSize: '1rem' }}>Personal Email</p>
                                <a href="mailto:vihangamuthumala@gmail.com" style={{
                                    color: '#749BC2',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: '500'
                                }}>
                                    vihangamuthumala@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        {/* Work Email */}
                        <motion.div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.1rem',
                                background: 'linear-gradient(135deg, rgba(145, 200, 228, 0.15), rgba(116, 155, 194, 0.1))',
                                borderRadius: '16px',
                                border: '1px solid rgba(145, 200, 228, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(70, 130, 169, 0.15)' }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'linear-gradient(135deg, #749BC2, #91C8E4)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 15px rgba(116, 155, 194, 0.3)'
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ color: '#4682A9', fontWeight: '700', marginBottom: '0.3rem', fontSize: '1rem' }}>University Email</p>
                                <a href="mailto:vihangamuthumala.22@cse.mrt.ac.lk" style={{
                                    color: '#749BC2',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: '500'
                                }}>
                                    vihangamuthumala.22@cse.mrt.ac.lk
                                </a>
                            </div>
                        </motion.div>

                        {/* Phone */}
                        <motion.div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.1rem',
                                background: 'linear-gradient(135deg, rgba(145, 200, 228, 0.15), rgba(116, 155, 194, 0.1))',
                                borderRadius: '16px',
                                border: '1px solid rgba(145, 200, 228, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(70, 130, 169, 0.15)' }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'linear-gradient(135deg, #91C8E4, #A8D5E2)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 15px rgba(145, 200, 228, 0.3)'
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ color: '#4682A9', fontWeight: '700', marginBottom: '0.3rem', fontSize: '1rem' }}>Phone</p>
                                <a href="tel:+94763121937" style={{
                                    color: '#749BC2',
                                    textDecoration: 'none',
                                    fontSize: '0.95rem',
                                    fontWeight: '500'
                                }}>
                                    +94 76 312 1937
                                </a>
                            </div>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.1rem',
                                background: 'linear-gradient(135deg, rgba(145, 200, 228, 0.15), rgba(116, 155, 194, 0.1))',
                                borderRadius: '16px',
                                border: '1px solid rgba(145, 200, 228, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(70, 130, 169, 0.15)' }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'linear-gradient(135deg, #A8D5E2, #B8E0F0)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 15px rgba(168, 213, 226, 0.3)'
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ color: '#4682A9', fontWeight: '700', marginBottom: '0.3rem', fontSize: '1rem' }}>Location</p>
                                <p style={{ color: '#749BC2', fontSize: '0.95rem', fontWeight: '500' }}>
                                    Galle, Sri Lanka
                                </p>
                            </div>
                        </motion.div>

                        {/* Quick Connect Section */}
                        <motion.div
                            variants={itemVariants}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '1rem',
                                justifyContent: 'center',
                            }}
                        >
                            <motion.button
                                onClick={openWhatsApp}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: 'linear-gradient(135deg, #A1EEBD, #128C7E)',
                                    border: 'none',
                                    borderRadius: '50px',
                                    padding: '0.7rem 1.5rem',
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                                </svg>
                                WhatsApp Me
                            </motion.button>

                            <motion.a
                                href="mailto:vihangamuthumala.22@cse.mrt.ac.lk"
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: 'linear-gradient(135deg, #4682A9, #749BC2)',
                                    border: 'none',
                                    borderRadius: '50px',
                                    padding: '0.7rem 1.5rem',
                                    color: 'white',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    boxShadow: '0 8px 32px rgba(70, 130, 169, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                Quick Email
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form 
                    variants={itemVariants}
                    onSubmit={handleSubmit}
                    style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '24px',
                        padding: '2.5rem',
                        boxShadow: '0 20px 40px rgba(70, 130, 169, 0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Decorative elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-30px',
                        left: '-30px',
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, rgba(116, 155, 194, 0.2), rgba(145, 200, 228, 0.1))',
                        borderRadius: '50%',
                        filter: 'blur(15px)'
                    }} />

                    <h3 style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        color: '#4682A9',
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        Send Message 
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                        {/* Name Field */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label 
                                htmlFor="name"
                                style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    color: '#4682A9'
                                }}
                            >
                                Name
                            </label>
                            <motion.input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                whileFocus={{ scale: 1.02 }}
                                style={{
                                    padding: '1.2rem 1.5rem',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    border: '2px solid rgba(145, 200, 228, 0.3)',
                                    borderRadius: '16px',
                                    fontSize: '1rem',
                                    color: '#4682A9',
                                    outline: 'none',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    fontWeight: '500',
                                    boxShadow: '0 4px 15px rgba(145, 200, 228, 0.1)'
                                }}
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Field */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label 
                                htmlFor="email"
                                style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    color: '#4682A9'
                                }}
                            >
                                Email
                            </label>
                            <motion.input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                whileFocus={{ scale: 1.02 }}
                                style={{
                                    padding: '1.2rem 1.5rem',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    border: '2px solid rgba(145, 200, 228, 0.3)',
                                    borderRadius: '16px',
                                    fontSize: '1rem',
                                    color: '#4682A9',
                                    outline: 'none',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    fontWeight: '500',
                                    boxShadow: '0 4px 15px rgba(145, 200, 228, 0.1)'
                                }}
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Message Field */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label 
                                htmlFor="message"
                                style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    color: '#4682A9'
                                }}
                            >
                                Message
                            </label>
                            <motion.textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                whileFocus={{ scale: 1.02 }}
                                style={{
                                    padding: '1.2rem 1.5rem',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    border: '2px solid rgba(145, 200, 228, 0.3)',
                                    borderRadius: '16px',
                                    fontSize: '1rem',
                                    color: '#4682A9',
                                    outline: 'none',
                                    resize: 'vertical',
                                    minHeight: '140px',
                                    fontFamily: 'inherit',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    fontWeight: '500',
                                    boxShadow: '0 4px 15px rgba(145, 200, 228, 0.1)'
                                }}
                                placeholder="Tell me about your project or how I can help you..."
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'linear-gradient(135deg, #4682A9, #749BC2, #91C8E4)',
                                border: 'none',
                                borderRadius: '16px',
                                padding: '1rem 1.5rem',
                                color: 'white',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                boxShadow: '0 8px 32px rgba(70, 130, 169, 0.3)',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <span style={{ position: 'relative', zIndex: 1 }}>
                                Send Message
                            </span>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent)',
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                            }} />
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;
