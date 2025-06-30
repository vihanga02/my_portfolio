import React from 'react';
import { motion } from "framer-motion";
import ParallaxText from './ScrollTempX.tsx';
import image from './img/Untitled design.png'

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.2,
                staggerChildren: 0.4
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div 
            className="home"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '3rem'
            }}
        >
            {/* Premium Background Elements */}
            <motion.div 
                className="bg-accent-primary"
                style={{
                    position: 'absolute',
                    top: '15%',
                    left: '8%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    opacity: 0.3
                }}
                variants={floatingVariants}
                animate="animate"
            />
            
            <motion.div 
                className="bg-accent-secondary"
                style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '8%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    opacity: 0.2
                }}
                variants={floatingVariants}
                animate="animate"
            />

            <motion.div 
                className="bg-accent-tertiary"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    filter: 'blur(120px)',
                    opacity: 0.1
                }}
                variants={floatingVariants}
                animate="animate"
            />

            <motion.div 
                className="home-content glass-card liquid-glass premium-card"
                variants={itemVariants}
                style={{
                    textAlign: 'center',
                    padding: '4rem 3rem',
                    maxWidth: '900px',
                    width: '100%',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <motion.div
                    className="profile-image"
                    variants={itemVariants}
                    style={{
                        marginBottom: '3rem'
                    }}
                >
                    <motion.div
                        style={{
                            position: 'relative',
                            display: 'inline-block'
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.img 
                            src={image}
                            alt="Vihanga Muthumala"
                            style={{
                                width: '220px',
                                height: '220px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '4px solid rgba(145, 200, 228, 0.3)',
                                boxShadow: '0 20px 60px rgba(70, 130, 169, 0.2)'
                            }}
                        />
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: '-10px',
                                left: '-10px',
                                right: '-10px',
                                bottom: '-10px',
                                borderRadius: '50%',
                                border: '2px solid rgba(145, 200, 228, 0.2)',
                                animation: 'pulse 3s ease-in-out infinite'
                            }}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="developer-tag"
                    variants={itemVariants}
                    style={{
                        marginBottom: '1rem'
                    }}
                >
                    <motion.div
                        className="premium-btn"
                        style={{
                            display: 'inline-block',
                            fontSize: '1.1rem',
                            fontFamily: 'monospace',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '25px',
                            background: 'linear-gradient(135deg, rgba(145, 200, 228, 0.2), rgba(116, 155, 194, 0.1))',
                            border: '1px solid rgba(145, 200, 228, 0.3)'
                        }}
                        whileHover={{ scale: 1.05 }}
                        animate={{ 
                            boxShadow: [
                                '0 4px 20px rgba(70, 130, 169, 0.1)',
                                '0 8px 30px rgba(70, 130, 169, 0.2)',
                                '0 4px 20px rgba(70, 130, 169, 0.1)'
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        &lt; Developer + Learner /&gt;
                    </motion.div>
                </motion.div>

                <motion.div
                    className="name-section"
                    variants={itemVariants}
                    style={{
                        marginBottom: '2.5rem'
                    }}
                >
                    <motion.h1
                        className="gradient-text"
                        style={{
                            fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                            fontWeight: '800',
                            marginBottom: '1rem',
                            lineHeight: '1.1'
                        }}
                        whileHover={{ scale: 1.02 }}
                    >
                        VIHANGA MUTHUMALA
                    </motion.h1>
                    
                    <motion.p
                        style={{
                            fontSize: '1.1rem',
                            color: '#91C8E4',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: '1.6'
                        }}
                        variants={itemVariants}
                    >
                        Passionate about creating innovative solutions with cutting-edge technology
                    </motion.p>
                </motion.div>

                <motion.div
                    className="cta-section"
                    variants={itemVariants}
                    style={{
                        marginTop: '3rem',
                        display: 'flex',
                        gap: '1.5rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <motion.button
                        className="premium-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: 'linear-gradient(135deg, rgba(70, 130, 169, 0.2), rgba(116, 155, 194, 0.1))',
                            border: '2px solid rgba(70, 130, 169, 0.3)',
                            fontWeight: '600'
                        }}
                        onClick={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}
                    >
                        View Projects
                    </motion.button>
                    
                    <motion.button
                        className="premium-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: 'linear-gradient(135deg, rgba(145, 200, 228, 0.2), rgba(116, 155, 194, 0.1))',
                            border: '2px solid rgba(145, 200, 228, 0.3)',
                            fontWeight: '600'
                        }}
                        onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}
                    >
                        Get In Touch
                    </motion.button>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    variants={itemVariants}
                    style={{
                        marginTop: '2rem'
                    }}
                >
                    <motion.div
                        style={{
                            width: '2px',
                            height: '60px',
                            background: 'linear-gradient(to bottom, rgba(70, 130, 169, 0.3), transparent)',
                            margin: '0 auto',
                            position: 'relative'
                        }}
                        animate={{ 
                            background: [
                                'linear-gradient(to bottom, rgba(70, 130, 169, 0.3), transparent)',
                                'linear-gradient(to bottom, rgba(70, 130, 169, 0.8), transparent)',
                                'linear-gradient(to bottom, rgba(70, 130, 169, 0.3), transparent)'
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.p
                        style={{
                            marginTop: '1rem',
                            fontSize: '0.9rem',
                            color: '#91C8E4',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            fontWeight: '500'
                        }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Scroll to explore
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Home;