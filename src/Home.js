import { motion } from "framer-motion";
import ParallaxText from './ScrollTempX.tsx';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <motion.div 
        className="text-center max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.div 
            className="inline-block glass rounded-2xl px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-slate-700 font-medium text-lg">👋 Hello, I'm</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-slate-800 mb-6 leading-tight">
            Vihanga
            <br />
            <span className="text-gradient-purple">Muthumala</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-slate-600 font-light mb-8 space-y-2">
            <p>Full Stack Developer</p>
            <p className="text-lg text-slate-500">Computer Science Student at University of Moratuwa</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            className="btn-glass px-8 py-4 rounded-2xl text-slate-700 font-semibold text-lg shadow-glass"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          
          <motion.button
            className="px-8 py-4 rounded-2xl bg-gradient-secondary text-white font-semibold text-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Floating Cards */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: "💻", title: "Web Development", desc: "React, Node.js, MongoDB" },
            { icon: "📱", title: "Mobile Apps", desc: "React Native, Flutter" },
            { icon: "🎨", title: "UI/UX Design", desc: "Figma, Adobe Creative Suite" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-6 text-center hover:shadow-glass-lg transition-all duration-300 float"
              style={{ animationDelay: `${index * 0.5}s` }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-slate-800 font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="glass rounded-full p-3">
          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;