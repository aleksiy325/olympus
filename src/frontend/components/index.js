import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import LoginPage from './login-page'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/login' component={LoginPage}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('container')
);