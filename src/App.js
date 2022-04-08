import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './Components/About.jsx';
import Home from "./Components/Home";
import Projects from './Components/Projects.jsx';
import "./App.css"
import Header from './Components/Header.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
function App() {
  return (



    <Router>
      <div>
        <>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Projects">
              <Projects />
            </Route>
          </Switch>
          <Contact exact path="/Contact" />
          <Footer />
        </>
      </div>
    </Router>
  )



};

export default App;







