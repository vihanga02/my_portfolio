import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import logo from './img/favourite.ico'; // Ensure this path is correct

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const menuVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" }
  ];

  return (
    <motion.nav 
      className={`navbar glass ${scrolled ? 'scrolled' : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{
        position: 'fixed',
        width: '98%',
        top: 5,
        left: 15,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: scrolled ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: scrolled ? 'blur(25px) saturate(180%)' : 'blur(20px) saturate(180%)',
        borderBottom: scrolled ? '1px solid rgba(145, 200, 228, 0.3)' : '1px solid rgba(145, 200, 228, 0.2)',
        boxShadow: scrolled ? '0 8px 32px rgba(70, 130, 169, 0.15)' : '0 4px 20px rgba(70, 130, 169, 0.1)'
      }}
    >
      <motion.div 
        className="logo gradient-text"
        whileHover={{ scale: 1.05 }}
        style={{
          padding: '0.2rem 0.5rem',
        }}
      >
          <img src={logo} alt="Logo" style={{ height: '50px', borderRadius: '50%' }} />
      </motion.div>

      <div className="nav-links" style={{ gap: '2.5rem', alignItems: 'center' }}>
        {navItems.map((item) => (
          <motion.div
            key={item.to}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              style={{
                color: '#4682A9',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: '0.8rem 1.2rem',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(145, 200, 228, 0.15)';
                e.target.style.color = '#749BC2';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#4682A9';
              }}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="mobile-menu-btn premium-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: 'none',
          background: 'rgba(145, 200, 228, 0.15)',
          border: '1px solid rgba(145, 200, 228, 0.3)',
          borderRadius: '12px',
          padding: '0.8rem',
          cursor: 'pointer',
          color: '#4682A9'
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu glass-card"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{
              position: 'absolute',
              top: '100%',
              left: '1rem',
              right: '1rem',
              padding: '1.5rem',
              marginTop: '1rem',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(25px) saturate(180%)',
              border: '1px solid rgba(145, 200, 228, 0.3)',
              boxShadow: '0 12px 40px rgba(70, 130, 169, 0.2)'
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.to}
                whileHover={{ scale: 1.02 }}
                style={{ marginBottom: '0.8rem' }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: '#4682A9',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'block',
                    padding: '1rem 1.2rem',
                    borderRadius: '12px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(145, 200, 228, 0.15)';
                    e.target.style.color = '#749BC2';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#4682A9';
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
