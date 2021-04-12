import React from 'react';
import ReactDOM from 'react-dom'
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import * as Icon from 'react-feather';
import Cookies from 'js-cookie'

export default function Profile() {
    return (
        <Container style={{ paddingTop: '2%', background: 'rgb(255, 255, 255)' }}>
            <Row>
                <h3>User information</h3>
            </Row>
            <Row>
                <Col md={6}>
                    <Form noValidate>
                        <Form.Group as={Row}>
                            <Form.Label column>Your email</Form.Label>
                            <Col style={{ display: "flex", flexDirection: "row" }}>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={Cookies.get('useremail')}
                                    readOnly
                                    plaintext
                                />
                                <span style={{ paddingTop: "calc(.375rem + 1px)" }}>
                                    <a href="/users/edit"><Icon.Edit color="#4c4c4c" /></a>
                                </span>
                            </Col>
                            {/* <Col md={6} >
                            </Col> */}
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


document.addEventListener('turbolinks:load', () => {
    const app = document.getElementById('profile-page')
    app && ReactDOM.render(
        <Profile />,
        app
    )
})