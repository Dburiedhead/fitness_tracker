import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="./">Moove and groove</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="./">Home</Nav.Link>
                            <Nav.Link href="./activities">Activities</Nav.Link>
                            <Nav.Link href="./connexion">Connexion</Nav.Link>
                            <Nav.Link href="./dashboard">Dashboard</Nav.Link>
                            <Nav.Link href="./profile">Profile</Nav.Link>
                            <Nav.Link href="./test">Test</Nav.Link>
                            <Nav.Link href="#">condition, si user pas connecté, afficher Home, Connexion. Sinon Activities, Dashboard, Profile et déco</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Menu;