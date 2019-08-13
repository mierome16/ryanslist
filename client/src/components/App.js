import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './HomePage';
import Listview from './Listview';
import SingleView from './SingleView';
import CreatePosting from './CreatePosting';
import PostCreated from './PostCreated'



export default props => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Route exact path="/" component={HomePage}></Route>
          <Route path = "/list/:category" component={Listview}></Route>
          <Route path = "/view-post/:id" component={SingleView}></Route>
          <Route path = "/create-a-posting/" component={CreatePosting}></Route>
          <Route path = "/post-created" component={PostCreated}></Route>
        </Router>
      </div>
    </Provider>
  )
}