import { Link } from "react-router-dom";
import "./Home.css";
import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/Picsart_24-06-09_11-34-03-523.png?raw=true" alt="me" />
                <p id="name"><span>I am</span>Vihanga  Muthumala</p>
                <div className="developer-tag">
                    <p id="tag0">&lt;Developer&gt;</p>
                    <p id="tag1">&lt;Developer&gt;</p>
                    <p id="tag2">&lt;Developer&gt;</p>
                    <p id="tag3">&lt;Developer&gt;</p>
                </div>
            </div>
            <div className="thumbs">
                <div className="about-me-img thumb-in">
                    <Link to="/my_portfolio/about" className="thumb-link">
                        <img src="" alt="" />
                        <p>Go to About</p>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" ><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg>
                    </Link>
                </div>
                <div className="projects-img thumb-in" >
                    <Link to="/my_portfolio/projects" className="thumb-link">
                        <p>Go to Projects</p>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" ><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg>
                    </Link>
                </div>
                <div className="contact-img thumb-in">
                    <Link to="/my_portfolio/contact" className="thumb-link">
                        <p>Go to Contacts</p>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" ><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;