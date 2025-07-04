import { motion } from 'framer-motion';

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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const Footer = () => {
    const socialLinks = [
        {
            name: 'Email',
            url: 'mailto:vihagamuthumala@gmail.com',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                </svg>
            )
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/__vihanga__m__',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
            )
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/vihanga.muthumala.1/',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/vihanga-muthumala-678451277',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>
            )
        },
        {
            name: 'GitHub',
            url: 'http://github.com/vihanga02',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
            )
        }
    ];

    return (
        <motion.footer
            className="footer glass-card"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.h3
                variants={itemVariants}
                className="gradient-text footer-heading"
            >
                Let's Connect
            </motion.h3>

            <motion.p
                variants={itemVariants}
                className="footer-text"
            >
                Ready to collaborate on your next project? Let's create something amazing together.
            </motion.p>

            <motion.div
                className="social-links"
                variants={itemVariants}
            >
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        whileHover={{
                            scale: 1.1,
                            y: -5
                        }}
                        whileTap={{ scale: 0.95 }}
                        title={link.name}
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </motion.div>

            <motion.div
                className="footer-bottom"
                variants={itemVariants}
            >
                <p className="copyright-text">
                    © 2024 Vihanga Muthumala. All rights reserved.
                </p>
                <p className="tech-stack-text">
                    Built with React & Framer Motion
                </p>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;
