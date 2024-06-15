import './Projects.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        scale: 1.01,
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
        scale: 1.01,
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

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    const handleViewMore = () => {
        setShowAll(!showAll);
    }

    return (
        <div className="projects">
            <motion.h1
                variants={startings_right}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
            >
                <span>Pro</span>jects
            </motion.h1>
            <motion.div className="nano-processor"
                variants={startings_left}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                whileHover='hover'
            >
                <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/basys-3-0.png?raw=true" alt="board" />
                <div className="project-content">
                    <h2>Nano-Processor</h2>
                    <p>The assigned lab task is to design and develop a 4-bit nanoprocessor capable of executing 4 instructions. This includes several components that need to be developed or extended from the previous labs and this is a group project for Computer Organization and Digital Design module for semester 2. We used Vivado to all the coding and simulation works.</p>
                    <p className="project-git">
                        <motion.a
                            href="https://github.com/vihanga02/Nano-Processor.git"
                            variants={buttonAnimation}
                            initial='hidden'
                            animate='visible'
                            whileHover='hover'
                        >
                            Check this out!
                        </motion.a>
                    </p>
                </div>
            </motion.div>
            <motion.div className="grocery-shop"
                variants={startings_right}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                whileHover='hover'
            >
                <div className="project-content">
                    <h2>POS System</h2>
                    <p>Required to develop a program to manage an online shopping system. The shopkeepers can login to the system and add new items and edit current items which are available in the shop. Customers can login to the system and track their current shopping cart. Backend is developed by Java and GUI is developed using JavaFX.</p>
                    <p className="project-git">
                        <motion.a
                            href="https://github.com/vihanga02/Grocery_shop_System.git"
                            variants={buttonAnimation}
                            initial='hidden'
                            animate='visible'
                            whileHover='hover'
                        >
                            Check this out!
                        </motion.a>
                    </p>
                </div>
                <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/benefits-supermarket-1024x683.jpg?raw=true" alt="market" />
            </motion.div>
            {showAll && (
                <div className="view-more-div">
                    <motion.div className="dummy-project"
                        variants={startings_left}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}
                        whileHover='hover'
                        exit='hidden'
                    >
                        <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/Web-Development-Projects-1-2048x1001.png?raw=true" alt="dummy" />
                        <div className="project-content">
                            <h2>Dummy Project</h2>
                            <p>This is a dummy project to test the web page. I add this to increase the number of project divs on this page for testing purposes. In future, I will add more projects to this section and remove these dummy projects. I hope now you know enough about this now. Enjoy my page.</p>
                            <p className="project-git">
                                <motion.a
                                    variants={buttonAnimation}
                                    whileHover='hover'
                                >
                                    Check this out!
                                </motion.a>
                            </p>
                        </div>
                    </motion.div>
                    <div className='view-more-less'>
                        <button onClick={handleViewMore} className='view-more-less-button less-button'>View Less</button>
                    </div>
                </div>
            )}
            {!showAll && (
                <div className="view-more-less">
                    <motion.button onClick={handleViewMore} className='view-more-less-button'
                        variants={buttonAnimation}
                        whileHover='hover'
                    >
                        View More
                    </motion.button>
                </div>
            )}
        </div>
    );
}

export default Projects;
