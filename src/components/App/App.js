import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link}from 'react-router-dom';
import {connect} from "react-redux"

import './App.css';
import Page1 from '../Pages/Page1'
import Page2 from '../Pages/Page2'
import Page3 from '../Pages/Page3'
import Page4 from '../Pages/Page4'
import Page5 from '../Pages/Page5'
import Home from '../Pages/Home'

class App extends Component {

   
  handleSubmit = () =>{
    console.log(this.props.reduxState)
    axios({
        method: 'POST',
        url: '/',
        data: this.props.reduxState
    }).then((response)=>{
        console.log(response)
    })
}


  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
              <Link to = "/Home"> Home </Link>

        <footer className = "footer">
            Todays Feels: 
            {this.props.reduxState.todaysFeeling}
            <br/><br/>
            todays Support: 
            {this.props.reduxState.todaysSupport}
            <br/><br/>
            todays Understanding: 
            {this.props.reduxState.todaysUnderstanding}
            <br/><br/>
            gerenal Feedback: 
            {this.props.reduxState.gernalFeedback}
            <br/><br/>
            {/* turnary */}
            {
            this.props.reduxState.todaysFeeling &&
            this.props.reduxState.todaysSupport &&
            this.props.reduxState.todaysUnderstanding &&
            this.props.reduxState.gernalFeedback == true
            ? 
            <button onClick = {this.handleSubmit}> Submit </button>
            : 
            <button onClick = {this.alert}> Incomplete </button> 
            } 
            
        </footer>
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

const mapReduxStateToProps=(reduxState)=>({
  reduxState
})

export default connect(mapReduxStateToProps)(App);
