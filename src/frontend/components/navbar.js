import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import TournamentAPI from './rest/tournament-api';

const api = new TournamentAPI();

export default class DefNavbar extends React.Component {
    constructor(props) {
        super(props);
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
                    <NavItem eventKey={2} href="/login">Login</NavItem>
                </Nav>
            </Navbar>
           
        );
    } 

}