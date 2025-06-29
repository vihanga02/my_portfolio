import React from 'react';
import { Link } from 'react-scroll';
// import './NavBar.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const svgDropdown = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.2
  },
};

const navBarMotion = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='relative'>
      <AnimatePresence>
        {!isOpen && (
          <motion.nav className="fixed top-[1vw] left-[2.5vw] h-[2.5vw] w-[50vw] bg-gradient-to-r from-[rgba(18,13,41,0.705)] to-[#01172b] rounded-tr-[1vw] rounded-br-[1vw] z-[1]"
            variants={navBarMotion}
            initial="hidden"
            animate= 'visible'
            exit= 'hidden'
          >
              <div className="flex flex-row justify-center w-full text-[1.4vw] bg-transparent">
                <Link to="home" smooth duration={500} className="font-mono text-center h-[2vw] w-full pt-[0.5vw] no-underline text-[rgba(240,248,255,0.671)] hover:text-lime-400 hover:bg-[rgba(4,15,44,0.842)] hover:border-b-[0.1rem] hover:border-lime-400 focus:text-lime-400 focus:bg-[rgba(4,15,44,0.842)] focus:border-b-[0.1rem] focus:border-lime-400 transition-colors">HOME</Link>
                <Link to="about" smooth duration={500} className="font-mono text-center h-[2vw] w-full pt-[0.5vw] no-underline text-[rgba(240,248,255,0.671)] hover:text-lime-400 hover:bg-[rgba(4,15,44,0.842)] hover:border-b-[0.1rem] hover:border-lime-400 focus:text-lime-400 focus:bg-[rgba(4,15,44,0.842)] focus:border-b-[0.1rem] focus:border-lime-400 transition-colors">ABOUT</Link>
                <Link to="projects" smooth duration={500} className="font-mono text-center h-[2vw] w-full pt-[0.5vw] no-underline text-[rgba(240,248,255,0.671)] hover:text-lime-400 hover:bg-[rgba(4,15,44,0.842)] hover:border-b-[0.1rem] hover:border-lime-400 focus:text-lime-400 focus:bg-[rgba(4,15,44,0.842)] focus:border-b-[0.1rem] focus:border-lime-400 transition-colors">PROJECTS</Link>
                <Link to="contact" smooth duration={500} className="font-mono text-center h-[2vw] w-full pt-[0.5vw] no-underline text-[rgba(240,248,255,0.671)] hover:text-lime-400 hover:bg-[rgba(4,15,44,0.842)] hover:border-b-[0.1rem] hover:border-lime-400 focus:text-lime-400 focus:bg-[rgba(4,15,44,0.842)] focus:border-b-[0.1rem] focus:border-lime-400 transition-colors">CONTACT</Link>
              </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <motion.svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="menu"
        className="fill-[aliceblue] h-[2.5vw] w-[2.5vw] fixed top-[1vw] left-[0.5vw] z-[2] hover:fill-lime-400 active:fill-lime-400 transition-colors"
        variants={svgDropdown}
        initial="hidden"
        animate= 'visible'
        whileHover='hover'
        whileTap='hover'
      >
        <path d="M16,1C7.729,1,1,7.729,1,16s6.729,15,15,15,15-6.729,15-15S24.271,1,16,1Zm-6,22c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm0-6c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm0-6c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm2.965-1c0-.552,.447-1,1-1h8.148c.553,0,1,.448,1,1s-.447,1-1,1H13.965c-.553,0-1-.448-1-1Zm9.162,13h-7.436c-.553,0-1-.448-1-1s.447-1,1-1h7.436c.553,0,1,.448,1,1s-.447,1-1,1Zm0-6h-7.436c-.553,0-1-.448-1-1s.447-1,1-1h7.436c.553,0,1,.448,1,1s-.447,1-1,1Z"></path>
      </motion.svg>
    </div>
    
  );
}

export default NavBar;
