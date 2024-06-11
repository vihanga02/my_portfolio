import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/my_portfolio/" element={<Home />} />
            <Route path="/my_portfolio/about" element={<About />} />
            <Route path="/my_portfolio/projects" element={<Projects />} />
            <Route path="/my_portfolio/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
