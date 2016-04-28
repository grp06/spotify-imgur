import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import './styles/app.scss'
import reducers from './reducers'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, document.getElementById('main'))

