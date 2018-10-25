

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from 'react';

import Header from './components/Header/header'
import Skills from './components/Skills/skills'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Projects from './components/Projects/Projects'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './App.css';

AOS.init()

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
