import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap'
import Login from './login'

class Connexion extends Component {
    render() {

        return (
            <div>
                <h1>Log in</h1>
                <p>condition si login selectionné afficher formulaire login sinon signup</p>
                <Login />
                <p>Already have an account ? <Button href='./signup'>Please, sign up</Button></p>
            </div>
        )
    }
}
  
export default Connexion;