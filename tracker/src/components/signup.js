import React, { Component } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap'

class Singup extends Component {
    render() {

        return (
            <Container style={{ padding: '0 10vw' }}>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}
  
export default Singup;