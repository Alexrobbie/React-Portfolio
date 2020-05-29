import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Comp/Home';
import AboutMe from './Comp/AboutMe';
import Projects from './Comp/Projects';
import Links from './Comp/Links';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/aboutme" component={AboutMe}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/links" component={Links}/>
      
    </Router>
  )
}

export default App;
