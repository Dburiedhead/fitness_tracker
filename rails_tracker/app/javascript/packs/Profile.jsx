import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import {Formik} from 'formik';
import axios from 'axios';
import Cookies from 'js-cookie'
import ReactDOM from 'react-dom'

function deleteAccount() {
    console.log('To delete your account, please click on confirm');
    // axios.delete('/users', values)
    // .then(values => console.log('new user submitted', values))
    // .catch(err => console.log(err))
};


function EditEmail() {
  
    return (
        <>
            <Formik
                onSubmit= { (values) =>
                    console.log(values)
                    // api.put('/', values)
                    // .then(values => console.log('new user submitted', values))
                    // .catch(err => console.log(err))
                }
                initialValues={{
                    email: Cookies.get('useremail'),
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                }) => (
                    <Form inline noValidate onSubmit={handleSubmit}>
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
                            </Col>
                    </Form.Row>
                    <Button type="submit">Save</Button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

const validateConfirmPassword = (pass, value) => {

    let error = "";
    if (pass && value) {
      if (pass !== value) {
        error = "Password not matched";
      }
    }
    return error;
};

// function EditPassword() {
  
//     return (
//         <>
//             <Formik
//                 onSubmit= { (values, { validate }) =>
//                     validate(values),
//                     console.log(values)
//                     // api.post('/', values)
//                     // .then(values => console.log('new user submitted', values))
//                     // .catch(err => console.log(err))
//                 }
//                 initialValues={{
//                     password: '',
//                     confirm: ''
//                 }}
//             >
//                 {({
//                     handleSubmit,
//                     handleChange,
//                     values,
//                     errors
//                 }) => (
//                     <Form noValidate inline onSubmit={handleSubmit}>
//                         <Form.Row>
//                             <Col md={6}>
//                             <Form.Group controlId="validationFormik02">
//                                 <Form.Control
//                                     type="password"
//                                     name="password"
//                                     placeholder="Password"
//                                     value={values.password}
//                                     onChange={handleChange}
//                                 />
//                                 <Form.Control
//                                     type="password"
//                                     name="confirm"
//                                     placeholder="Confirm password"
//                                     value={values.confirmpassword}
//                                     onChange={handleChange}
//                                     validate={value => validateConfirmPassword(values.password, value)}
//                                 />
//                                 {errors.confirmPassword && (<div>{errors.confirmPassword}</div>)}
//                                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                             </Form.Group>
//                             </Col>
//                     </Form.Row>
//                     <Button type="submit">Save</Button>
//                     </Form>
//                 )}
//             </Formik>
//         </>
//     );
// }

export default function Profile() {

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
        <Container style={{ paddingTop: '2%', background: 'rgb(255, 255, 255)' }}>
            <Row>
                <Col>
                <a href="https://stackoverflow.com/questions/62182378/confirm-password-with-formik">https://stackoverflow.com/questions/62182378/confirm-password-with-formik</a>
                    <h3>User information</h3>
                    <EditEmail />
                </Col>
                <Col>
                    <h3>Edit your password</h3>
                    {/* <EditPassword /> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 style={{ color: 'red' }}>Delete your account</h3>
                    <p>Do you want to delete your account ?</p>
                    <Button variant='danger' onClick={deleteAccount}>Delete my account</Button>
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