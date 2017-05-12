import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import LoginPage from './pages/login-page'
import SignupForm from './forms/signup-form'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/signup' component={SignupForm}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('container')
);