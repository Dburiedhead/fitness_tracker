import React, { Component } from 'react';
import { Col, Form, Button, Container } from 'react-bootstrap'
import { Formik } from 'formik';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api/v1/sessions'
});

function Login() {

    return (

        <Container style={{ padding: '5% 10%', background: 'rgb(255, 255, 255)' }}>
            <h2 style={{ marginBottom: '1em', textAlign: 'center' }}>Log in</h2>
            <Formik
                onSubmit= { (values) =>
                    // console.log(values),
                    api.post('/', values)
                    .then(values => console.log('new user submitted', values))
                    .catch(err => console.log(err))
                }
                initialValues={{
                    email: '',
                    password: '',
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Row>
                            <Col md={6}>
                                <Form.Group controlId="validationFormik01">
                                    <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="validationFormik02">
                                    <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                    </Form.Row>
                    <Button block type="submit">Submit form</Button>
                  </Form>
            )}
        </Formik>
        <small>Don't have an account ? <Button variant='link' size="sm" href='./signup' style={{ verticalAlign: 'unset' }}>Please, sign up</Button></small>
      </Container>

    );
}
  
export default Login;