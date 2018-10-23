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

import Login from './container/user/login';
import Register from './container/user/register'
import Forget from './container/user/forget'
import PhoneBind from './container/user/phonebind'

import AddCard from './container/card/addcard'
import CardList from './container/card/cardlist'
import MsgCard from './container/card/msgcard'

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
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/forget" component={Forget}></Route>
        <Route path="/phonebind" component={PhoneBind}></Route>
        <Route path="/addcard" component={AddCard}></Route>
        <Route path="/cardlist" component={CardList}></Route>
        <Route path="/msgcard" component={MsgCard}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
  )
