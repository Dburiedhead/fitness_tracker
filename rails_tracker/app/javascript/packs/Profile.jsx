import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios';
import Cookies from 'js-cookie'
import ReactDOM from 'react-dom'

export default function Profile() {
    return (
        <Container style={{ paddingTop: '2%', background: 'rgb(255, 255, 255)' }}>
            <Row>
                <h3>User information</h3>
            </Row>
            <Row>
                <Form noValidate>
                    <Form.Group as={Row}>
                        <Form.Label column md="6">Your email</Form.Label>
                        <Col md="6">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={Cookies.get('useremail')}
                                readOnly
                                plaintext
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <a href="/users/edit">Edit your Profile</a>
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