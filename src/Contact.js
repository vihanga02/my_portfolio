import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

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
        <div className="contact-container">
            <h1>What's Up?</h1>
            <motion.h2
                className="animate-scroll"
                variants={collabZoom}
                initial="hidden" // Set initial state
                whileInView="visible" // Trigger animation
            >
                Lets Collab...
            </motion.h2>
            <form className="contact-form">
                <label htmlFor="name-text" className="input-label">Name</label>
                <input type="text" className="text-input" id="name-text" placeholder="Enter name" required/>
                <label htmlFor="email-text" className="input-label">Email</label>
                <input type="text" className="text-input" id="email-text" placeholder="Enter email" required/>
                <label htmlFor="message-text" className="input-label">Message</label>
                <textarea type="text" className="text-input" id="message-text" placeholder="Type here" required/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
