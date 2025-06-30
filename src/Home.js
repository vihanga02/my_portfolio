import { motion } from "framer-motion";
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
            initial="hidden"
            animate="visible"
            className="home"
        >
            {/* Premium Background Elements */}
            <motion.div 
                className="bg-accent-primary bg-circle"
                variants={floatingVariants}
                animate="animate"
            />
            
            <motion.div 
                className="bg-accent-secondary bg-circle"
                variants={floatingVariants}
                animate="animate"
            />

            <motion.div 
                className="bg-accent-tertiary bg-circle"
                variants={floatingVariants}
                animate="animate"
            />

            <motion.div 
                className="home-content glass-card liquid-glass premium-card"
                variants={itemVariants}
            >
                <motion.div
                    className="profile-image"
                    variants={itemVariants}
                >
                    <motion.div
                        className="profile-image-wrapper"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.img 
                            src={image}
                            alt="Vihanga Muthumala"
                            className="profile-img"
                        />
                        <motion.div
                            className="profile-img-pulse"
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="developer-tag"
                    variants={itemVariants}
                >
                    <motion.div
                        className="premium-btn developer-tag-btn"
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
                >
                    <motion.h1
                        className="gradient-text name-heading"
                        whileHover={{ scale: 1.02 }}
                    >
                        VIHANGA MUTHUMALA
                    </motion.h1>
                    
                    <motion.p
                        className="name-subheading"
                        variants={itemVariants}
                    >
                        Passionate about creating innovative solutions with cutting-edge technology
                    </motion.p>
                </motion.div>

                <motion.div
                    className="cta-section"
                    variants={itemVariants}
                >
                    <motion.button
                        className="premium-btn cta-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}
                    >
                        View Projects
                    </motion.button>
                    
                    <motion.a
                        href="/contact"
                        className="premium-btn cta-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Home;