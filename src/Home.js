import React from 'react';
import { motion } from "framer-motion";
import ParallaxText from './ScrollTempX.tsx';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <img src="../img/Untitled design.png" alt="me" />
                <div className="developer-tag">
                    <p id="tag0">&lt;Developer&gt;</p>
                    <p id="tag1">&lt;Developer&gt;</p>
                    <p id="tag2">&lt;Developer&gt;</p>
                    <p id="tag3">&lt;Developer&gt;</p>
                </div>
                <ParallaxText  baseVelocity={10}>I'm<span>VIHANGA MUTHUMALA </span></ParallaxText>
            </div>
        </div>
    )
}

export default Home;