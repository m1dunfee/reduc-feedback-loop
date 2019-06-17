import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./Pages.css";
import { HashRouter as Router, Route, Link}from 'react-router-dom';
import Page4 from '../Pages/Page4';


class Page3 extends Component{


handleChange = (event) =>{

    let action = event.target.value
    this.props.dispatch({
        type: 'TODAYS_SUPPORT',
        payload: action
    })

}


    render(){
        return(
            <Router>
                <div className = 'card'> 
                    Are you feeling supported by the staff?
                    <br/><br/>
                    <input placeholder = "1-5" onChange = {this.handleChange}/>
                    <Link to = "/page4"> Next </Link>
                </div>
                <Route path = '/page4' exact = {true} component = {Page4}/>
            </Router>
        )
    }
}


const mapReduxStateToProps=(reduxState)=>({
    reduxState
})

export default connect(mapReduxStateToProps)(Page3);