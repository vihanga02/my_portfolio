import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navBarMotion = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
};

const menuButtonVariants = {
  hover: {
    scale: 1.1,
    rotate: 180,
    transition: {
      duration: 0.3
    }
  }
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='relative z-50'>
      {/* Menu Button */}
      <motion.button
        onClick={handleClick}
        className="fixed top-6 left-6 w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-glass hover:shadow-glass-lg transition-all duration-300 group"
        variants={menuButtonVariants}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col space-y-1.5">
          <motion.div 
            className={`w-6 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <motion.div 
            className={`w-6 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
          />
          <motion.div 
            className={`w-6 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </div>
      </motion.button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            className="fixed top-6 left-24 glass rounded-2xl shadow-glass-lg overflow-hidden"
            variants={navBarMotion}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center px-2 py-2 space-x-1">
              {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item, index) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth
                  duration={800}
                  offset={-100}
                  className="px-6 py-3 text-slate-700 font-medium text-sm tracking-wide cursor-pointer rounded-xl hover:bg-white/30 hover:text-slate-800 transition-all duration-300 hover:shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;