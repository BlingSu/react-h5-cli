import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Test from './container/test/index';

import reducers from './reducer'
import './util/css/reset.css'
import './index.scss'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f => f
  ))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/test" component={Test}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
  )
