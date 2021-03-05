import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api/v1/registration'
});

function Signup() {
  return (
    <Container style={{ padding: '5% 10%', background: 'rgb(255, 255, 255)' }}>
      <Row className="justify-content-md-center">
        <Col lg={8}>
          <h2 style={{ marginBottom: '1em', textAlign: 'center' }}>Sign up</h2>
          <Formik
            onSubmit= { (values) =>
              // console.log(values)
              api.post('/', { user: values })
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
          <small>Already have an account ? <Button variant='link' size="sm" href='./' style={{ verticalAlign: 'unset' }}>Please, log in</Button></small>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup