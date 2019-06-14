import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {logger} from 'redux-logger';
// build out reducers here

const todaysFeeling = (state = '', action) =>{
  if(action.type === 'TODAYS_FEELING'){
    return action.payload
  }
  return state
}

const todaysUnderstanding = (state = '', action) =>{
  if(action.type === 'TODAYS_UNDERSTANDING'){
    return action.payload
  }
  return state
}

const todaysSupport = (state = '', action) =>{
  if(action.type === 'TODAYS_SUPPORT'){
    return action.payload
  }
  return state
}

const gernalFeedback = (state = '', action) =>{
  if(action.type === 'GERNAL_FEEDBACK'){
    return action.payload
  }
  return state
}


const storeInstance = createStore(
  //this is a reducer, but add the names of all the others too
  combineReducers({
      todaysFeeling,
      todaysSupport,
      todaysUnderstanding,
      gernalFeedback
      
    
 }),// a reducer is a function
 applyMiddleware(logger),
)


ReactDOM.render(<Provider store = {storeInstance}><App /></Provider>, document.getElementById('root'));