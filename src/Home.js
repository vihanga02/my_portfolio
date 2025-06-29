// import "./Home.css";
import { motion } from "framer-motion";
import ParallaxText from './ScrollTempX.tsx';

const Home = () => {
    return (
        <div className="relative text-[aliceblue] w-full h-[55vw] row-gap-[10vw] overflow-hidden z-[-1]">
            <div className="home-content relative">
                <div className="developer-tag w-full bg-transparent font-mono font-bold flex flex-col justify-center items-center absolute left-[-13vw] top-[8vw]">
                    <p id="tag0" className="bg-transparent text-[rgba(255,255,255,0.1)] relative text-[4vw] h-[2.6vw]">&lt;Developer&gt;</p>
                    <p id="tag1" className="bg-transparent text-[rgba(255,255,255,0.2)] relative text-[5.5vw] h-[3.7vw]">&lt;Developer&gt;</p>
                    <p id="tag2" className="bg-transparent text-[rgba(255,255,255,0.35)] relative text-[7vw] h-[4.7vw]">&lt;Developer&gt;</p>
                    <p id="tag3" className="bg-transparent text-white relative text-[9vw]">&lt;Developer&gt;</p>
                </div>
                <ParallaxText baseVelocity={10}>I'm<span className="text-lime-300">VIHANGA MUTHUMALA </span></ParallaxText>
            </div>
        </div>
    )
}

export default Home;