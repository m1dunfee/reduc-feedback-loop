import React, {Component} from 'react';
import {connect} from 'react-redux';

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
            <div>
                <input placeholder = "UNDERSTANDING?" onChange = {this.handleChange}/>
            </div>
        )
    }
}


const mapReduxStateToProps=(reduxState)=>({
    reduxState
})

export default connect(mapReduxStateToProps)(Page2);