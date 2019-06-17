import React, {Component} from 'react';
import {connect} from 'react-redux'
import { HashRouter as Router, Route, Link}from 'react-router-dom';
import Page1 from '../Pages/Page1'

class Home extends Component{
    render(){
        return(
            <Router>    
                <div>
                Welcome! the reminder of the day, which is the reminder of everyday is, Feedback
              <Link to = "/page1"> Survay </Link>
         
                </div>
                
            <Route path = '/page1' exact = {true} component = {Page1}/>
            </Router>
        )
    }
}

const mapReduxStateToProps = (reduxState)=>({
    reducState: reduxState
})

export default connect(mapReduxStateToProps)(Home);