import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./Pages.css";
import { HashRouter as Router, Route, Link}from 'react-router-dom';
import Page5 from '../Pages/Page5';

class Page4 extends Component{


handleChange = (event) =>{

    let action = event.target.value
    this.props.dispatch({
        type: 'GERNAL_FEEDBACK',
        payload: action
    })

}


    render(){
        return(
            <Router>    
                <div className = 'card'>
                    General Feedback?
                    <br/><br/>
                    <input placeholder = "General Feedback?" onChange = {this.handleChange}/>
                    <Link to = "/page5"> Next </Link>
                </div>
                <Route path = '/page5' exact = {true} component = {Page5}/>
            </Router>
        )
    }
}


const mapReduxStateToProps=(reduxState)=>({
    reduxState
})

export default connect(mapReduxStateToProps)(Page4);