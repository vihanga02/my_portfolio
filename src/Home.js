import "./Home.css";
import { motion } from "framer-motion";

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
                <p id="name">
                    <span> I am</span>Vihanga  Muthumala
                </p>
            </div>
        </div>
    )
}

export default Home;