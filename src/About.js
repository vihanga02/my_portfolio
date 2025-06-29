import { motion } from 'framer-motion';
import React from 'react';

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

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const About = () => {
  const skills = [
    { name: "Python", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "React", level: 88, color: "bg-cyan-500" },
    { name: "Node.js", level: 82, color: "bg-green-500" },
    { name: "Java", level: 80, color: "bg-red-500" },
    { name: "MongoDB", level: 75, color: "bg-green-600" }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-slate-800 mb-4">
            About <span className="text-gradient-purple">Me</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Passionate developer with a love for creating beautiful, functional applications
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Personal Info */}
          <motion.div 
            className="glass rounded-3xl p-8 hover:shadow-glass-lg transition-all duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">👋</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-800">Hello There!</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">
              I'm a 22-year-old passionate developer from Galle, Sri Lanka. Currently studying Computer Science 
              and Engineering at the University of Moratuwa, I specialize in web development and backend systems.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When I'm not coding, you'll find me traveling with friends, playing cricket and football, 
              or working on exciting new projects. I believe in continuous learning and always strive 
              to deliver my best work.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="glass rounded-3xl p-8 hover:shadow-glass-lg transition-all duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🎓</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-800">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-400 pl-6">
                <p className="text-primary-600 font-medium text-sm">Since 2023</p>
                <h4 className="text-lg font-semibold text-slate-800">University of Moratuwa</h4>
                <p className="text-slate-600">BSc (Hons) in Computer Science and Engineering</p>
              </div>
              
              <div className="border-l-4 border-secondary-400 pl-6">
                <p className="text-secondary-600 font-medium text-sm">2008 - 2021</p>
                <h4 className="text-lg font-semibold text-slate-800">Richmond College</h4>
                <div className="text-slate-600 space-y-1">
                  <p><span className="font-medium text-primary-600">3A passes</span> - 2021 A/L (Physical Science) - Island Rank: 14</p>
                  <p><span className="font-medium text-secondary-600">9A passes</span> - 2018 O/L</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="glass rounded-3xl p-8 mb-16 hover:shadow-glass-lg transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center mr-4">
              <span className="text-white text-xl">⚡</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800">Technical Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">{skill.name}</span>
                  <span className="text-slate-500 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <motion.div 
                    className={`h-2 rounded-full ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div 
          className="glass rounded-3xl p-8 hover:shadow-glass-lg transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mr-4">
              <span className="text-white text-xl">🏆</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-800">Experience & Achievements</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Main coordinator of R2U workshop program 2022",
              "Former Vice secretary of Richmond College Social Service Society",
              "Member of Ephilogue'23 Logistic Committee",
              "Member of IESL Student Branch, University of Moratuwa",
              "All island art competition participation",
              "Volunteer at Sasnaka Sansada Foundation"
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/20 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-600">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;