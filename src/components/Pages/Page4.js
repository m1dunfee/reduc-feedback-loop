import React, {Component} from 'react';
import {connect} from 'react-redux';

class Page4 extends Component{


handleChange = (event) =>{

    let action = event.target.value
    this.props.dispatch({
        type: 'TODAYS_GENERAL_FEEDBACK',
        payload: action
    })

}


    render(){
        return(
            <div>
                <input placeholder = "General Feedback?" onChange = {this.handleChange}/>
            </div>
        )
    }
}


const mapReduxStateToProps=(reduxState)=>({
    reduxState
})

export default connect(mapReduxStateToProps)(Page4);