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
                        <svg className="thumb-svg-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="profile"><path d="M97.7,503.54c105.53,11.28,211.06,11.28,316.59,0,43.01-4.99,84.25-46.24,89.25-89.25,11.28-105.53,11.28-211.06,0-316.59-4.99-43.01-46.24-84.25-89.25-89.25-105.53-11.28-211.06-11.28-316.59,0C54.69,13.45,13.45,54.69,8.46,97.7c-11.28,105.53-11.28,211.06,0,316.59,4.99,43.01,46.24,84.25,89.25,89.25ZM256,75.03c44.77,0,81.06,36.29,81.06,81.06s-36.29,81.06-81.06,81.06-81.06-36.29-81.06-81.06,36.29-81.06,81.06-81.06ZM114.49,352.73c23.73-49.33,78.32-92.66,141.51-93.08t0,0c63.19.42,117.78,43.74,141.51,93.08,12.7,26.11-8.47,64.97-40.28,73-67.06,14.96-135.39,14.96-202.44,0-31.81-8.03-52.99-46.9-40.28-73Z"></path></svg>
                        <p>Go to About</p>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" ><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg>
                    </Link>
                </div>
                <div className="projects-img thumb-in" >
                    <Link to="/my_portfolio/projects" className="thumb-link">
                        <svg className="thumb-svg-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="check-lists"><path fill-rule="evenodd" d="M120.989 8h261.158v50.852c0 11.287 9.172 20.46 20.46 20.46h50.852v362.24c0 4.913-4.007 8.921-8.921 8.921h-28.606V120.534c0-6.699-2.562-12.884-7.299-17.621l-50.086-50.086c-4.737-4.737-10.922-7.299-17.621-7.299H112.068V16.921c0-4.913 4.008-8.921 8.921-8.921zM344.62 62.301v50.078a4.469 4.469 0 0 0 4.46 4.46h50.078a8.967 8.967 0 0 0-1.839-2.613L347.233 64.14a8.948 8.948 0 0 0-2.613-1.839zm-277.158-.774c-4.914 0-8.921 4.007-8.921 8.921v424.631c0 4.913 4.007 8.921 8.921 8.921h323.549c4.913 0 8.921-4.008 8.921-8.921v-362.24H349.08c-11.288 0-20.46-9.172-20.46-20.46V61.527H67.462zm167.467 116.606h104.492a8 8 0 0 0 0-16H234.929a8 8 0 0 0 0 16zM131.427 363.605c-5.611 0-10.707 2.29-14.396 5.979-3.688 3.689-5.979 8.785-5.979 14.396v37.501c0 5.611 2.29 10.707 5.979 14.396s8.785 5.979 14.396 5.979h37.501c5.611 0 10.707-2.29 14.396-5.979s5.979-8.785 5.979-14.396v-23.548l22.097-20.054a7.985 7.985 0 0 0 .531-11.281 7.985 7.985 0 0 0-11.281-.531l-12.452 11.301a20.451 20.451 0 0 0-4.874-7.783c-3.689-3.688-8.785-5.979-14.396-5.979h-37.501v-.001zm37.501 16h-37.501a4.358 4.358 0 0 0-3.083 1.291 4.358 4.358 0 0 0-1.291 3.084v37.501c0 1.195.495 2.287 1.291 3.084a4.361 4.361 0 0 0 3.083 1.291h37.501a4.358 4.358 0 0 0 3.083-1.291 4.362 4.362 0 0 0 1.291-3.084v-9.028l-5.8 5.264-.044.045a8 8 0 0 1-11.313 0l-18.208-18.208a8 8 0 1 1 11.313-11.313l12.828 12.828 11.224-10.186v-6.904a4.362 4.362 0 0 0-1.291-3.084 4.357 4.357 0 0 0-3.083-1.29zm-37.501-226.362c-5.611 0-10.707 2.29-14.396 5.979-3.688 3.689-5.979 8.785-5.979 14.396v37.501c0 5.611 2.29 10.707 5.979 14.396s8.785 5.979 14.396 5.979h37.501c5.611 0 10.707-2.29 14.396-5.979s5.979-8.785 5.979-14.396V187.57l22.097-20.054a7.985 7.985 0 0 0 .531-11.281 7.985 7.985 0 0 0-11.281-.531l-12.452 11.301a20.451 20.451 0 0 0-4.874-7.783c-3.689-3.688-8.785-5.979-14.396-5.979h-37.501zm37.501 16h-37.501a4.358 4.358 0 0 0-3.083 1.291 4.358 4.358 0 0 0-1.291 3.084v37.501c0 1.195.495 2.287 1.291 3.084a4.361 4.361 0 0 0 3.083 1.291h37.501a4.358 4.358 0 0 0 3.083-1.291 4.362 4.362 0 0 0 1.291-3.084v-9.028l-5.8 5.264-.044.045a8 8 0 0 1-11.313 0l-18.208-18.208a8 8 0 1 1 11.313-11.313l12.828 12.828 11.224-10.186v-6.904a4.362 4.362 0 0 0-1.291-3.084 4.361 4.361 0 0 0-3.083-1.29zm-37.501 89.181c-5.611 0-10.707 2.29-14.396 5.979-3.688 3.689-5.979 8.785-5.979 14.396V316.3c0 5.611 2.29 10.707 5.979 14.396s8.785 5.979 14.396 5.979h37.501c5.611 0 10.707-2.29 14.396-5.979s5.979-8.785 5.979-14.396v-23.548l22.097-20.054a7.985 7.985 0 0 0 .531-11.281 7.985 7.985 0 0 0-11.281-.531l-12.452 11.301a20.451 20.451 0 0 0-4.874-7.783c-3.689-3.688-8.785-5.979-14.396-5.979h-37.501v-.001zm37.501 16h-37.501a4.358 4.358 0 0 0-3.083 1.291 4.357 4.357 0 0 0-1.291 3.083v37.501c0 1.195.495 2.287 1.291 3.084a4.361 4.361 0 0 0 3.083 1.291h37.501a4.358 4.358 0 0 0 3.083-1.291 4.362 4.362 0 0 0 1.291-3.084v-9.028l-5.8 5.264-.044.045a8 8 0 0 1-11.313 0l-18.208-18.207a8 8 0 1 1 11.313-11.313l12.828 12.828 11.224-10.186v-6.904a4.358 4.358 0 0 0-1.291-3.083 4.358 4.358 0 0 0-3.083-1.291zm66.001 114.071h104.492a8 8 0 0 0 0-16H234.929a8 8 0 0 0 0 16zm0 44.47h104.492a8 8 0 0 0 0-16H234.929a8 8 0 0 0 0 16zm0-149.651h104.492a8 8 0 0 0 0-16H234.929a8 8 0 0 0 0 16zm0 44.47h104.492a8 8 0 0 0 0-16H234.929a8 8 0 0 0 0 16zm0-105.181h104.492a8 8 0 0 0 0-16H234.929a8 8 0 0 0 0 16zM398.147 8.774v50.078a4.469 4.469 0 0 0 4.46 4.46h50.078a8.967 8.967 0 0 0-1.839-2.613L400.76 10.613a8.967 8.967 0 0 0-2.613-1.839z" clip-rule="evenodd"></path></svg>
                        <p>Go to Projects</p>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" ><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg>
                    </Link>
                </div>
                <div className="contact-img thumb-in">
                    <Link to="/my_portfolio/contact" className="thumb-link">
                        <svg className="thumb-svg-1 thumb-svg-1-1" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h48v48H0z"></path><path d="M42 16v-2l-6 4-6-4v2l6 4 6-4zm2-10H4c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h40c2.21 0 3.98-1.79 3.98-4L48 10c0-2.21-1.79-4-4-4zm-28 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm12 24H4v-2c0-4 8-6.2 12-6.2S28 30 28 34v2zm16-12H28V12h16v12z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                        <p>Go to Contacts</p>
                        <svg stroke="currentColor" fill="currentColor"  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" ><path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;