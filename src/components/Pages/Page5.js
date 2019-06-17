import React, {Component} from 'react';
import {connect} from 'react-redux'
import Home from '../Pages/Home'
import "./Pages.css";
import { HashRouter as Router, Route, Link}from 'react-router-dom';
import axios from 'axios';

class Page5 extends Component{
    state = {
        userData: ''
    }
    
    
    handleChange = (event) =>{
        this.setState({
            userData: event.target.value
        })
        console.log(this.state.userData)
        
    }
 
    
        render(){
            return(
                // make a table
                <Router>
                    <div className = 'card'>
                    <br/><br/>
                        THANKS!
                        {/* add submit button and take out home link */}
                        
                        {/* <Link to = "/Home"> Home </Link> */}
                        
                    </div>
                    <Route path = '/Home' exact = {true} component = {Home}/>
                </Router>
            )
        }
    }

const mapReduxStateToProps = (reduxState) =>({
    reduxState
})


export default connect(mapReduxStateToProps)(Page5);