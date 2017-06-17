import React from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import Auth from './auth';

const auth = new Auth();

export default class DefNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    logoutButton = () => {
        if(auth.isAuthenticated()){
             return <NavItem onClick={ auth.logout() }>Logout</NavItem>
        }
    }

    render() {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Olympus</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavItem href="/login">Login</NavItem>
                    { this.logoutButton() }
                </Nav>
            </Navbar>
           
        );
    } 

}

