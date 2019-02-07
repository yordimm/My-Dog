import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from './redux/reducers';
import thunkMiddleware from 'redux-thunk';

const enhancer = compose(applyMiddleware(thunkMiddleware));
const store =createStore(Reducers, {}, enhancer);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

serviceWorker.unregister();
