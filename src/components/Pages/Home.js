import React, {Component} from 'react';
import {connect} from 'react-redux'

class Home extends Component{
    render(){
        return(
            // console.log('5 loaded')
            <div>
                <ul>
                    <li>
                        taco
                    </li>
                </ul>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState)=>({
    reducState: reduxState
})

export default connect(mapReduxStateToProps)(Home);