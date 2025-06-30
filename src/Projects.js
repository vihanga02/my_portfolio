import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from './ProjectData.json';

const INITIAL_VISIBLE = 3; // ← how many you see before you click "View More"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.3 }
  }
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap:   { scale: 0.95 }
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Add safety check
  if (!projectsData || projectsData.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2>No projects found</h2>
      </div>
    );
  }

  // Toggle using functional update
  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  // // Calculate displayed projects based on showAll state
  // const displayed = showAll ? projectsData : projectsData.slice(0, INITIAL_VISIBLE);

  return (
    <motion.div
      className="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <motion.h1
        variants={projectVariants}
        className="gradient-text"
        style={{
          textAlign: 'center',
          marginBottom: '5rem',
          fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
          fontWeight: 800,
          lineHeight: 1.1
        }}
      >
        My Projects
      </motion.h1>

      <motion.div
        className="projects-list"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card glass-card liquid-glass premium-card"
            variants={projectVariants}
            whileHover={{
              x: 10,
              scale: 1.01,
              transition: { duration: 0.3, ease: 'easeOut' }
            }}
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'row',
              gap: '2rem',
              alignItems: 'flex-start',
              width: '100%',
              overflow: 'hidden'
            }}
          >
            {/* Left side - Project info */}
            <div style={{ flex: 1 }}>
              <motion.div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}
              >
                <div style={{
                  width: '4px',
                  height: '30px',
                  background: 'linear-gradient(135deg, #4682A9, #749BC2)',
                  borderRadius: '2px'
                }} />
                <motion.h3
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: '700',
                    color: '#4682A9',
                    lineHeight: '1.3',
                    margin: 0
                  }}
                >
                  {project.title}
                </motion.h3>
              </motion.div>
              
              <motion.p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#749BC2',
                  marginBottom: '1.5rem'
                }}
              >
                {project.description}
              </motion.p>

              <motion.div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                }}
              >
                {project.technologies && project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} style={{
                    padding: '0.4rem 0.8rem',
                    background: 'rgba(145, 200, 228, 0.1)',
                    border: '1px solid rgba(145, 200, 228, 0.2)',
                    borderRadius: '15px',
                    color: '#91C8E4',
                    fontWeight: '500',
                    fontSize: '0.8rem'
                  }}>
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right side - Action buttons */}
            <motion.div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                minWidth: '140px'
              }}
            >
              {project.live_link && (
                <motion.a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-btn"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    background: 'linear-gradient(135deg, rgba(70, 130, 169, 0.2), rgba(116, 155, 194, 0.1))',
                    border: '2px solid rgba(70, 130, 169, 0.3)',
                    padding: '0.8rem 1rem',
                    fontSize: '0.85rem',
                    borderRadius: '8px',
                    color: '#4682A9',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}
                >
                  <span>Live Demo</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </motion.a>
              )}

              <motion.a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-btn"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, rgba(145, 200, 228, 0.2), rgba(116, 155, 194, 0.1))',
                  border: '2px solid rgba(145, 200, 228, 0.3)',
                  padding: '0.8rem 1rem',
                  fontSize: '0.85rem',
                  borderRadius: '8px',
                  color: '#91C8E4',
                  fontWeight: '500',
                  textAlign: 'center'
                }}
              >
                <span>View Code</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="view-more-container"
        variants={projectVariants}
        style={{ textAlign: 'center', marginTop: '4rem' }}
      >
      </motion.div>
    </motion.div>
  );
};

export default Projects;