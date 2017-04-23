// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app';
//
// ReactDOM.render(<App />, document.getElementById('app'));

import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import { Provider } from "react-redux"

import Edit from "./pages/Edit.jsx";
import Layout from "./pages/Layout.jsx";
import Recipe from "./pages/Recipe.jsx";

import store from "./store"

const app = document.getElementById('app');

const history = syncHistoryWithStore(hashHistory, store);
console.log(history);
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Layout}>
                <Route path='edit(/:id)' component={Edit}/>
                <Route path='recipe(/:id)' component={Recipe} />
            </Route>
        </Router>
    </Provider>,
    app);