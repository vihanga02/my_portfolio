import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from './ProjectData.json';

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

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleViewMore = () => {
    setShowAll(!showAll);
  }

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

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
            My <span className="text-gradient-purple">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass rounded-3xl p-8 hover:shadow-glass-lg transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-gradient-secondary rounded-full mr-3"></div>
                    <span className="text-sm text-slate-500 font-medium">Project {index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <motion.div
                  className="w-12 h-12 glass-dark rounded-2xl flex items-center justify-center"
                  animate={{ rotate: hoveredProject === project.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.div>
              </div>

              {/* Project Description */}
              <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.title.includes('Node') && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Node.js</span>
                )}
                {project.title.includes('React') && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React</span>
                )}
                {project.title.includes('MongoDB') && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">MongoDB</span>
                )}
                {project.title.includes('Next') && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Next.js</span>
                )}
                {project.title.includes('Java') && (
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Java</span>
                )}
              </div>

              {/* Project Link */}
              <motion.a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>View Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* View More/Less Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={handleViewMore}
            className="btn-glass px-8 py-4 rounded-2xl text-slate-700 font-semibold text-lg shadow-glass"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'View Less' : 'View More Projects'}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;