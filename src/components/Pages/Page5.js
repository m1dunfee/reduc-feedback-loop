import React, {Component} from 'react';
import {connect} from 'react-redux'

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
                // console.log('5 loaded')
                <div>
                    <input placeholder = "Gernal Feedback?" onChange = {this.handleChange}/>
                </div>
            )
        }
    }

const mapReduxStateToProps = (reduxState) =>({
    reduxState
})


export default connect(mapReduxStateToProps)(Page5);