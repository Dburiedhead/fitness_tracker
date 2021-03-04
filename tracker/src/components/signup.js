import { Form, Col, Row, Button, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import { render } from 'react-dom';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api/v1/sessions'
});

function FormExample() {
  return (
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
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample