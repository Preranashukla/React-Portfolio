import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from './components/about';
import Resume from './components/resume';
import Nav from './components/Navbar';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

class App extends Component {

  render() {
    return (
          <Router>
            <Nav />
              <Routes>
              <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/contact" component={Contact} />
              </Routes>
              <Footer/>

          </Router>

    )
  }
}

export default App;
