import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from './ProjectData.json';

const startings_left = {
    hidden: {
        x: -100,
        opacity: 0,
        transition: {
            duration: 0.6
        }
    },
    visible: {
        x: 0,
        opacity: 0.75,
        transition: {
            duration: 1
        }
    },
    hover: {
        scale: 1.05,
        opacity: 1,
        backgroundColor: 'rgb(22, 24, 41)',
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        transition: {
            duration: 0.5,
        },
    }
}

const startings_right = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 0.75,
        transition: {
            duration: 1
        }
    },
    hover: {
        scale: 1.05,
        opacity: 1,
        backgroundColor: 'rgb(22, 24, 41)',
        boxShadow: "0px 0px 8px rgb(255, 255, 255)",
        transition: {
            duration: 0.5,
        },
    }
}
const buttonAnimation = {
    hover: {
        textShadow: "0px 0px 8px rgb(255, 255, 255)",
        scale: 1.2,
        transition: {
            duration: 1,
            yoyo: Infinity
        }
    }
};

const h1Variant = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
};

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
  
    const handleViewMore = () => {
      setShowAll(!showAll);
    }
  
    return (
      <div className="projects">
        <motion.h1
            variants={h1Variant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
        >
            <span>Pro</span>jects
        </motion.h1>
        {projectsData.slice(0, showAll ? projectsData.length : 2).map((project, index) => (
          <motion.div
            key={project.id}
            className={project.id}
            variants={index % 2 === 0 ? startings_left : startings_right}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            whileHover='hover'
            whileTap='hover'
          >
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p className="project-git">
                <motion.a
                  href={project.github_link}
                  variants={buttonAnimation}
                  initial='hidden'
                  animate='visible'
                  whileHover='hover'
                  whileTap='hover'
                >
                  Check this out!
                </motion.a>
              </p>
            </div>
          </motion.div>
        ))}
        {!showAll && (
          <div className="view-more-div">
            <motion.button
              onClick={handleViewMore}
              variants={buttonAnimation}
              whileHover='hover'
              whileTap='hover'
            >
              View More
            </motion.button>
          </div>
        )}
        {showAll && (
          <div className="view-more-div">
            <motion.button
              onClick={handleViewMore}
              variants={buttonAnimation}
              whileHover='hover'
              whileTap='hover'
            >
              View Less
            </motion.button>
          </div>
        )}
      </div>
    );
  }

export default Projects;
