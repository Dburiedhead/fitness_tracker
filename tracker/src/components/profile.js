import React from 'react';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import {Formik} from 'formik';
// import axios from 'axios'

// const api = axios.create({
//     baseURL: 'http://localhost:3001/api/v1/sessions'
// });

function deleteAccount() {
    console.log('To delete your account, please click on confirm');
};

function FormFields() {
  
    return (
        <>
            <Formik
                onSubmit= { (values) =>
                    console.log(values)
                    // api.post('/', values)
                    // .then(values => console.log('new user submitted', values))
                    // .catch(err => console.log(err))
                }
                initialValues={{
                    email: 'user_email',
                    password: 'user_password',
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
                                    plaintext
                                    />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationFormik02">
                                <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                plaintext
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            </Col>
                    </Form.Row>
                    <Button type="submit">Save</Button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

function Profile(props) {

    return (
        <div>
            <h1>Profile page</h1>
            <Container style={{ paddingTop: '2%', background: 'rgb(255, 255, 255)' }}>
                <Row>
                    <FormFields />
                </Row>
                <Row>
                    <p>Do you want to delete your account ?</p>
                    <Button variant='danger' style={{ marginLeft: '1em' }} onClick={deleteAccount}>Delete my account</Button>
                </Row>
            </Container>
        </div>
    )
}
  
export default Profile;