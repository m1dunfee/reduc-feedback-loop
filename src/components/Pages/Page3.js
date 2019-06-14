import React, {Component} from 'react';
import {connect} from 'react-redux';

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
            <div>
                <input placeholder = "Supported?" onChange = {this.handleChange}/>
            </div>
        )
    }
}


const mapReduxStateToProps=(reduxState)=>({
    reduxState
})

export default connect(mapReduxStateToProps)(Page3);