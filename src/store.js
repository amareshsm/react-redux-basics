import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from "redux-thunk" //provides async support
import promise from 'redux-promise-middleware'  
import userReducer from './Reducers/userReducer'
import mathReducer from './Reducers/mathReducer'
export default createStore(
    combineReducers(
      {mathReducer,userReducer}),
      {},
      applyMiddleware(logger,thunk,promise)
    )

//const store = createStore(reducer)   //expcets 1 reduce it will not accept multiple reducers

//implementing own logger
// const myLogger = (store) => (next) => (action) =>{
//     console.log("Logged Action:",action);
//     next(action)
//     }
    
    

