import React from 'react';
import { motion } from 'framer-motion';
// import './Contact.css';

const collabZoom = {
    hidden: {
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
    visible: {
        scale: [1.2,1,1.2,1,1.2,1,1.2,1,1.2,1,1.2,1],
        transition: {
            duration: 7
        }
    }
};

const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center relative top-[20vw] w-[99vw] text-[aliceblue]">
            <h1 className="text-[9vw] mb-[1vw] m-0">What's Up?</h1>
            <motion.h2
                className="text-[4vw] mb-[2vw] text-lime-400 m-0 animate-scroll"
                variants={collabZoom}
                initial="hidden"
                whileInView="visible"
            >
                Lets Collab...
            </motion.h2>
            <form className="flex flex-col w-[30vw]">
                <label htmlFor="name-text" className="text-[1.5vw] mb-[0.2vw]">Name</label>
                <input type="text" className="mb-[1.5vw] border border-lime-300 border-b-[0.2vw] border-r-[0.2vw] rounded-[0.5vw] text-white p-[0.6vw] bg-[rgba(1,3,32,0.842)] font-sans" id="name-text" placeholder="Enter name" required/>
                <label htmlFor="email-text" className="text-[1.5vw] mb-[0.2vw]">Email</label>
                <input type="text" className="mb-[1.5vw] border border-lime-300 border-b-[0.2vw] border-r-[0.2vw] rounded-[0.5vw] text-white p-[0.6vw] bg-[rgba(1,3,32,0.842)] font-sans" id="email-text" placeholder="Enter email" required/>
                <label htmlFor="message-text" className="text-[1.5vw] mb-[0.2vw]">Message</label>
                <textarea type="text" className="mb-[1.5vw] border border-lime-300 border-b-[0.2vw] border-r-[0.2vw] rounded-[0.5vw] p-[0.6vw] h-[10vw] text-white bg-[rgba(1,3,32,0.842)] resize-none font-sans scrollbar-thin scrollbar-thumb-lime-400" id="message-text" placeholder="Type here" required/>
                <button type="submit" className="bg-lime-300/80 rounded-[0.5vw] h-[3vw] text-[1.7vw] font-bold text-white border-b-[0.3vw] border-l-[0.3vw] border-r-[0.3vw] border-t-[0.3vw] border-b-lime-800 border-l-lime-800/30 border-r-lime-800 border-t-lime-800/30 hover:bg-green-900/90 transition-colors">Send</button>
            </form>
        </div>
    );
};

export default Contact;
