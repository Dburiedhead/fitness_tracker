import React, { Component } from 'react';
import Connexion from './connexion';
import { Row,Col, Jumbotron, Container } from 'react-bootstrap';

class Home extends Component {
    render() {

        return (
            <div>
                <Jumbotron>
                    <Row>
                        <Col lg={7}>
                            <h1>Home page</h1>
                            <p>Some presentation text</p>
                        </Col>
                        <Col lg={5}>
                            <Connexion />
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        )
    }
}
  
export default Home;