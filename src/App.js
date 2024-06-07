import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
