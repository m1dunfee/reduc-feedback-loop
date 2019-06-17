import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./Pages.css";
import { HashRouter as Router, Route, Link}from 'react-router-dom';
import Page3 from '../Pages/Page3';

class Page2 extends Component{


handleChange = (event) =>{

    let action = event.target.value
    this.props.dispatch({
        type: 'TODAYS_UNDERSTANDING',
        payload: action
    })
}


    render(){
        return(
            <Router>
                <div className = "card">
                    How well are you understanding the material?
                    <br/><br/>
                    <input placeholder = "1-5?" onChange = {this.handleChange}/>
                    <Link to = "/page3"> Next </Link>
                </div>
                <Route path = '/page3' exact = {true} component = {Page3}/>
            </Router>
        )
    }
}


const mapReduxStateToProps=(reduxState)=>({
    reduxState
})

export default connect(mapReduxStateToProps)(Page2);