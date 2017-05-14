import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import LoginPage from './pages/login-page';
import SignupPage from './pages/signup-page';
import ProfilePage from './pages/profile-page';
import Auth from './auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const auth = new Auth();

//TODO: fix redirection?
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated() ? (
        <Component {...props}/>
    ) : (
        <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
        }}/>
    )
  )}/>
);


ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/signup' component={SignupPage}/>
            <PrivateRoute exact path='/profile' component={ProfilePage}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('container')
);