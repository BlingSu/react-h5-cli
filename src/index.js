import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
// import {
//   BrowserRouter,
//   Route,
//   Switch
// } from 'react-router-dom';
/**
 * import container comp
 */
import App from './component/App'
/**
 * import reducer and styles
 */
import reducers from './reducer'
import './util/css/reset.css'
import './index.scss'

const store = createStore(reducers, compose(
    applyMiddleware(thunk)
  ))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
  )
