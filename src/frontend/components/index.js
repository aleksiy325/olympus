import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import LoginPage from './pages/login-page';
import SignupPage from './pages/signup-page';
import ProfilePage from './pages/profile-page';
import GroupPage from './pages/group-page';
import DefNavbar from './navbar';
import Auth from './auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Col } from 'react-bootstrap';
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
    <div>
        <DefNavbar/>
        <Col mdOffset={3}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route exact path='/signup' component={SignupPage}/>
                    <PrivateRoute exact path='/group' component={GroupPage}/>
                    <PrivateRoute exact path='/profile' component={ProfilePage}/>
                </Switch>
            </BrowserRouter>
        </Col>
    </div>,
    document.getElementById('container')
);