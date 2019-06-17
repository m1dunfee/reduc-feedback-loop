import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./Pages.css";
import { HashRouter as Router, Route, Link}from 'react-router-dom';
import Page2 from '../Pages/Page2';

class Page1 extends Component{


handleChange = (event) =>{

    let action = event.target.value
    this.props.dispatch({
        type: 'TODAYS_FEELING',
        payload: action
    })
}


    render(){
        return(
            <Router>
                <div className = "card">
                    How are you feeling today?
                    <br/><br/>
                    <input placeholder = "1-5?" onChange = {this.handleChange}/>
                    <Link to = "/page2"> Next </Link>
                </div>
                <Route path = '/page2' exact = {true} component = {Page2}/>
            </Router>
        )
    }
}


const mapReduxStateToProps=(reduxState)=>({
    reduxState
})

export default connect(mapReduxStateToProps)(Page1);