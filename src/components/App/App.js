import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link}from 'react-router-dom';

import './App.css';
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import Page3 from '../Pages/Page3'
import Page4 from '../Pages/Page4'
import Page5 from '../Pages/Page5'
import Home from '../Pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <ul>
          <li>
              <Link to = "/"> Home </Link>
          </li>
          <li>
              <Link to = "/page1"> page1 </Link>
          </li>
          <li>
              <Link to = "/page2"> page2 </Link>
          </li>
          <li>
              <Link to = "/page3"> page3 </Link>
          </li>
          <li>
              <Link to = "/page4"> page4 </Link>
          </li>
          <li>
              <Link to = "/page5"> page5 </Link>
          </li>
        </ul>
        <Route path = '/Home' exact = {true} component = {Home}/>
        <Route path = '/page1' exact = {true} component = {Page1}/>
        <Route path = '/page2' exact = {true} component = {Page2}/>
        <Route path = '/page3' exact = {true} component = {Page3}/>
        <Route path = '/page4' exact = {true} component = {Page4}/>
        <Route path = '/page5' exact = {true} component = {Page5}/>
      </div>
      </Router>
    );
  }
}


export default App;
