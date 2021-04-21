import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


import { createStore,applyMiddleware, combineReducers} from 'redux';
import  {Provider}  from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension';

import App from './containers/App';
import { searchRobots, requestRobots } from './reducers.js';

import './index.css';
import 'tachyons';

const logger = createLogger();
const rootReducers = combineReducers({searchRobots, requestRobots})
const store = createStore(
	rootReducers,applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')	
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
