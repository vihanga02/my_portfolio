import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import NavBar from './NavBar';
import React from 'react';
import Footer from './Footer';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>VM02</title>
        </Helmet>
        <NavBar />
        <div className="content">
        <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;