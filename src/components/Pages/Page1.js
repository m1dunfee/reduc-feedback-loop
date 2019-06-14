import React, {Component} from 'react';
import {connect} from 'react-redux';

class Page1 extends Component{

// state = {
//     userData: ''
// }


handleChange = (event) =>{
    // this.setState({
    //     userData: event.target.value
    // })
    let action = event.target.value
    this.props.dispatch({
        type: 'TODAYS_FEELING',
        payload: action
    })
//    console.log(this.state.userData)
}


    render(){
        return(
            // console.log('5 loaded')
            <div>
                <input placeholder = "Feeling?" onChange = {this.handleChange}/>
            </div>
        )
    }
}


const mapReduxStateToProps=(reduxState)=>({
    reduxState
})

export default connect(mapReduxStateToProps)(Page1);