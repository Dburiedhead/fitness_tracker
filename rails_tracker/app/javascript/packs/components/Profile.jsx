import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import {Formik} from 'formik';
import axios from 'axios';
import Cookies from 'js-cookie'

function deleteAccount() {
    console.log('To delete your account, please click on confirm');
    // axios.get('/api/v1/session')
    console.log(Cookies.get('useremail'))
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
                    email: Cookies.get('useremail'),
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

export default function Profile(props) {

    // const [items, setItems] = useState([]);

    // const getItems = async () => {
    //     try {
    //         const allItems = await

        //     axios.get('/api/v1/session')
        //     setItems(allItems.data); //set State
        // } catch (err) {
        //     console.error(err.message);
        // }
    // }
    
    // useEffect(() => {
    //     getItems()
    // }, []);

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
  