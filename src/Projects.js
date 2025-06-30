import { motion } from 'framer-motion';
import projectsData from './ProjectData.json';


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

  // Add safety check
  if (!projectsData || projectsData.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2>No projects found</h2>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="projects"
    >
      <motion.h1
        variants={projectVariants}
        className="gradient-text projects-heading"
      >
        My Projects
      </motion.h1>

      <motion.div
        className="projects-list"
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
          >
            {/* Left side - Project info */}
            <div className="project-info">
              <motion.div
                className="project-title-wrapper"
              >
                <div className="project-title-accent" />
                <motion.h3
                  className="project-title"
                >
                  {project.title}
                </motion.h3>
              </motion.div>
              
              <motion.p
                className="project-description"
              >
                {project.description}
              </motion.p>

              <motion.div
                className="project-technologies"
              >
                {project.technologies && project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right side - Action buttons */}
            <motion.div
              className="project-actions"
            >
              {project.live_link && (
                <motion.a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-btn project-action-btn"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
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
                className="premium-btn project-action-btn"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
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
      >
      </motion.div>
    </motion.div>
  );
};

export default Projects;