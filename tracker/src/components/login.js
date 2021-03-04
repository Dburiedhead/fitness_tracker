import React, { Component } from 'react';
import { Col, Form, Button, Container } from 'react-bootstrap'

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value });


    handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        const data = {
            email: this.state.email,
            password: this.state.password
        };
        /*api.post('/', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))*/
        console.log(data)
    };

    render() {

        const { email, password } = this.state

        return (
            <div>
                <h2 style={{ marginBottom: '1em', textAlign: 'center' }}>Log in</h2>
                <Form noValidate onSubmit={this.handleSubmit} >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Control value={ email } onChange={this.handleChange} type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Control value={ password } onChange={this.handleChange} type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit" block>Submit</Button>
                </Form>
                <small>Already have an account ? <Button variant='link' size="sm" href='./signup' style={{ verticalAlign: 'unset' }}>Please, sign up</Button></small>
            </div>
        )
    }
}
  
export default Login;