import React from 'react';
import {render,ReactDOM} from 'react-dom';
import { createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import App from './Components/App' //don't use curly brases if u have default export
import { Provider } from 'react-redux'

const mathReducer = (state = {
  result: 1,
  lastValues: [10,20],

}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;
  }
  return state;  //reducer should return a state.
}


const userReducer = (state = {
  name: 'amr',
  age: 21
}, action) => {

  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
          name:action.payload
      }
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      }
      break;
  }
  return state;  //reducer should return a state.
}

//const store = createStore(reducer)   //expcets 1 reduce it will not accept multiple reducers
const myLogger = (store) => (next) => (action) =>{
console.log("Logged Action:",action);
next(action)
}


const store = createStore(
  combineReducers(
    {mathReducer,userReducer}),
    {},
    applyMiddleware(logger)
  )

store.subscribe(() => {
  //console.log("store updated", store.getState())
});


render(
   <Provider store={store}><App/></Provider>,
  document.getElementById('root')
 );
