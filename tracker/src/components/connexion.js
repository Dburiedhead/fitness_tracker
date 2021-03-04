import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import Login from './login'
import FormExample from './signup'

class Connexion extends Component {
    render() {

        return (
            <div>
                <Container style={{ padding: '10%', background: 'rgb(255, 255, 255)' }}>
                    {/* <Login /> */}
                    <FormExample />
                </Container>
            </div>
        )
    }
}
  
export default Connexion;