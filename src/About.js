import { motion } from 'framer-motion';
// import './About.css';
import React from 'react';

const aboutScale = {
    hidden: {
        opacity: 0.5,
        y: 200
    },
    visible: {
        opacity: 0.7,
        scale: 0.9,
        y: 0,
        transition: {
            duration: 0.3,
            type: 'tween'
        }
    },
    hover: {
        scale: 1,
        opacity: 1,
        zIndex: 10,
        backgroundColor: 'rgb(22, 24, 41)',
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
        },
    },
}

const h1Variant = {
    hidden: {
        opacity: 0.5,
        y: 200
    },
    visible: {
        opacity: 1, // Ensure opacity is 1 when in view
        scale: 1,
        y: 0,
        transition: {
            duration: 0.3,
            type: 'tween'
        }
    },
};

const About = () => {

    return (
        <div className="about-content flex flex-col items-center gap-8 px-4 py-8 text-[aliceblue]">
            <motion.h1
                className="text-4xl font-bold mb-8 tracking-widest"
                variants={h1Variant}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
            >
                AB<span className="text-lime-400">OUT </span>
            </motion.h1>
            <motion.div  className="about-1 about bg-[rgba(22,24,41,0.8)] rounded-lg shadow-lg p-6 w-full max-w-2xl mb-6 hover:bg-[rgb(22,24,41)] hover:shadow-[0_0_8px_rgb(255,255,255)] transition-all"
                variants={aboutScale}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                whileHover= 'hover'
                whileTap='hover'
            >
                <h2 className="text-2xl font-semibold mb-2">Hi there,</h2>
                <p className="mb-2">
                I am a 22-year-old passionate developer from Galle, Sri Lanka. I am currently studying web development and app backend development.  I love to learn new things and do my best at anything that I do.
                </p>
                <p>
                In my free time, I love to travel with my friends and play cricket and football. I love to do new projects and gain knowledge and experience. So feel free to drop me a message.
                </p>
            </motion.div >
            <motion.div className="about-2 about bg-[rgba(22,24,41,0.8)] rounded-lg shadow-lg p-6 w-full max-w-2xl mb-6 hover:bg-[rgb(22,24,41)] hover:shadow-[0_0_8px_rgb(255,255,255)] transition-all"
                variants={aboutScale}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                whileHover= 'hover'
                whileTap='hover'
            >
                <h2 className="text-2xl font-semibold mb-2">Education</h2>
                <div className="school mb-4">
                    <p className="time text-sm text-lime-400">2008-2021</p>
                    <p className="institute font-semibold"><a href="https://www.richmondcollege.lk/" className="underline">Richmond College</a></p>
                    <div className="exams flex flex-col gap-2 mt-2">
                        <div>
                            <p className="passes font-bold text-lime-300">3A passes</p>
                            <p>2021 Advanced Level (Physical Science).</p>
                            <p>Island Rank: 14</p>
                        </div>
                        <div>
                            <p className="passes font-bold text-lime-300">9A passes.</p>
                            <p>2028 Ordinary Level</p>
                        </div>
                        
                    </div>
                </div>
                <div className="university">
                    <p className="time text-sm text-lime-400">since-2023</p>
                    <p className="institute font-semibold"><a href="https://uom.lk/" className="underline">University of Moratuwa</a></p>
                    <p className="degree">BSc (hons) in Computer Science and Engineering</p>
                </div>
            </motion.div>
            <motion.div  className="about-3 about bg-[rgba(22,24,41,0.8)] rounded-lg shadow-lg p-6 w-full max-w-2xl mb-6 hover:bg-[rgb(22,24,41)] hover:shadow-[0_0_8px_rgb(255,255,255)] transition-all"
                variants={aboutScale}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                whileHover= 'hover'
                whileTap='hover'
            >
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                <div className="skills flex flex-col md:flex-row gap-4">
                    <div className="tech-skills flex-1">
                        <h3 className="font-bold mb-2">Tech Skills</h3>
                        <div className="language-logo flex flex-wrap gap-2">
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/python.svg" alt="python" className="h-8" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/java.svg" alt="java" className="h-8" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/c-plus-plus.svg" alt="cpp" className="h-8" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/react-javascript-js-framework-facebook.svg" alt="react" className="h-8" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/javascript.svg" alt="js" className="h-8" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/html-5.svg" alt="html" className="h-8" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/css-3.svg" alt="css" className="h-8" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/git.svg" alt="git" className="h-8" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/intellij-idea.svg" alt="intellij" className="h-8" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/vs-code.svg" alt="vs" className="h-8" />
                        </div>
                    </div>
                    <div className="language-skils flex-1">
                        <h3 className="font-bold mb-2">Language Skills</h3>
                        <ul className="list-disc list-inside">
                            <li>English</li>
                            <li>Sinhala</li>
                        </ul>
                    </div>
                    <div className="other-skills flex-1">
                        <h3 className="font-bold mb-2">Other Skills</h3>
                        <ul className="list-disc list-inside">
                            <li>HR Management</li>
                            <li>Social Services</li>
                            <li>Volunteering</li>
                            <li>Leadership</li>
                        </ul>
                    </div>
                </div>
            </motion.div >
            <motion.div  className="about-4 about bg-[rgba(22,24,41,0.8)] rounded-lg shadow-lg p-6 w-full max-w-2xl mb-6 hover:bg-[rgb(22,24,41)] hover:shadow-[0_0_8px_rgb(255,255,255)] transition-all"
                variants={aboutScale}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                whileHover= 'hover'
                whileTap='hover'
            >
                <h2 className="text-2xl font-semibold mb-2">Experience</h2>
                <ul className="list-disc list-inside">
                    <li>Main coordinator of R2U workshop program 2022</li>
                    <li>Former Vice secretary of Richmond College Scociel service society</li>
                    <li>Member of Ephilogue'23 Logistic Commitee</li>
                    <li>Member of IESL Student Branch, University of Moratuwa</li>
                    <li>All island art competition participation</li>
                    <li>Volunteer at Sasnaka Sansada Foundation</li>
                </ul>
            </motion.div >
        </div >
    );
}

export default About;