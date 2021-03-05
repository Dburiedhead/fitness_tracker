import React, { Component } from 'react';
import { Row,Col, Jumbotron, Container } from 'react-bootstrap';
import Login from './login';

class Home extends Component {
    render() {

        return (
            <div>
                <Jumbotron style={{ height: '90vh', margin: '0' }}>
                    <Row>
                        <Col lg={7}>
                            <h1>Moove and Groove</h1>
                            <p>Your simple sport tracker
                            <br/>Select the sport, log your workouts and keep track of your routine !</p>
                        </Col>
                        <Col lg={5}>
                            <Login />
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        )
    }
}
  
export default Home;