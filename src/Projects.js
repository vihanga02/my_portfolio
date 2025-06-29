// import './Projects.css';
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
      <div className="projects relative top-[12vw] flex flex-col gap-[4vw] overflow-hidden h-full text-[aliceblue]">
        <motion.h1
            className="text-center text-[6vw] font-black font-['Black_Ops_One',cursive] text-[rgba(240,248,255,0.774)] mb-[2vw] mt-[1vw]"
            variants={h1Variant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
        >
            <span className="text-lime-400">Pro</span>jects
        </motion.h1>
        {projectsData.slice(0, showAll ? projectsData.length : 2).map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex flex-row w-[65%] h-[20vw] gap-[4vw] bg-[rgba(3,16,46,0.505)] rounded-r-[1vw] p-[1.5vw] origin-left ${project.id} ${index % 2 !== 0 ? 'relative right-[-33vw] rounded-l-[1vw] rounded-r-none origin-right' : ''}`}
            variants={index % 2 === 0 ? startings_left : startings_right}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            whileHover='hover'
            whileTap='hover'
          >
            <div className="project-content w-full">
              <h2 className="text-[3vw] font-['Spicy_Rice',cursive] text-[rgba(255,255,255,0.863)] font-light mb-[2vw]">{project.title}</h2>
              <p className="text-[1.3vw] font-['Antic_Slab',serif] text-[rgba(255,255,255,0.863)] font-light h-1/2 pr-[1vw] overflow-y-scroll text-justify scrollbar-thin scrollbar-thumb-lime-400">
                {project.description}
              </p>
              <p className="project-git pt-[2vw] font-sans relative left-[15vw] top-[1vw] p-[0.6vw] rounded-[1vw] h-auto w-[11vw] text-center">
                <motion.a
                  href={project.github_link}
                  className="text-white text-[1.5vw] font-light no-underline hover:text-lime-400 focus:text-lime-400 transition-colors"
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
          <div className="view-more-div h-[45px]">
            <motion.button
              onClick={handleViewMore}
              className="text-[rgb(255,242,242)] border-0 bg-transparent text-[1.5vw] relative top-[-1vw] left-[45vw] h-[4vw] cursor-pointer hover:text-lime-400 font-normal"
              variants={buttonAnimation}
              whileHover='hover'
              whileTap='hover'
            >
              View More
            </motion.button>
          </div>
        )}
        {showAll && (
          <div className="view-more-div h-[45px]">
            <motion.button
              onClick={handleViewMore}
              className="text-[rgb(255,242,242)] border-0 bg-transparent text-[1.5vw] relative top-[-1vw] left-[45vw] h-[4vw] cursor-pointer hover:text-lime-400 font-normal"
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
