import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import NavBar from './NavBar';
import React from 'react';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        <Helmet>
          <title>Vihanga Muthumala - Portfolio</title>
          <meta name="description" content="Full Stack Developer & Computer Science Student" />
        </Helmet>
        
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-300/15 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
        </div>

        <NavBar />
        <div className="content relative z-10">
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