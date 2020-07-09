import React from 'react';
import {render,ReactDOM} from 'react-dom';
import App from './Containers/App' //don't use curly brases if u have default export
import { Provider } from 'react-redux'
import store from './store'

render(
   <Provider store={store}><App/></Provider>,
  document.getElementById('root')
 );
