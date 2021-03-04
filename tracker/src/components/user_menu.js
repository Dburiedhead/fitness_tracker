import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class UserMenu extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="./">Moove and groove</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="./">Home</Nav.Link>
                            <Nav.Link href="./dashboard">Dashboard</Nav.Link>
                            <Nav.Link href="./activities">Activities</Nav.Link>
                            <Nav.Link href="./test">Test</Nav.Link>
                            <Nav.Link href="./profile">Profile</Nav.Link>
                            <Nav.Link href="#">Sign out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default UserMenu;