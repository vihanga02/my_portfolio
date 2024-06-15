import "./Home.css";
import { motion } from "framer-motion";
import ParallaxText from './ScrollTempX.tsx';

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/Picsart_24-06-09_11-34-03-523.png?raw=true" alt="me" />
                <div className="developer-tag">
                    <p id="tag0">&lt;Developer&gt;</p>
                    <p id="tag1">&lt;Developer&gt;</p>
                    <p id="tag2">&lt;Developer&gt;</p>
                    <p id="tag3">&lt;Developer&gt;</p>
                </div>
                <ParallaxText  baseVelocity={30}>I'm<span>VIHANGA MUTHUMALA </span></ParallaxText>
            </div>
        </div>
    )
}

export default Home;