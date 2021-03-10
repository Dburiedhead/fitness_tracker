import React, { Component } from 'react';
import { Row, Col, Button, Modal, Container, Card, Image, Accordion, Table } from 'react-bootstrap'

class Profile extends Component {
    render() {

        return (
            <div>
                <h1>Profile page</h1>
                <p>Edit your profile, delete your account</p>
                <Container style={{ paddingTop: '2%', background: 'rgb(255, 255, 255)' }}>
                    <Row>
                        <Col md={10}>
                            
                        </Col>
                        <Col md={2}>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
  
export default Profile;