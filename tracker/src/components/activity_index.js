import React, { Component, useState } from 'react';
import { Row, Col, Button, Modal, Container, Card, Image, Accordion } from 'react-bootstrap'
import NewActivity from './activity_add'
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api/v1/activities'
})

function AddActivityModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>Add an activity</Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add an activity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewActivity />.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

class Activities extends Component {

    state = {
        activities: []
    }

    constructor() {
        super();
        api.get('/').then(res => {
            let activities = res.data
            this.setState({activities})
        })
    }

    render() {


        return (
            
            <Container style={{ paddingTop: '2%', background: 'rgb(255, 255, 255)' }}>
                <Row>
                    <Col md={10}>
                        <h1>All Activities</h1>
                    </Col>
                    <Col md={2}>
                        <AddActivityModal />
                    </Col>
                </Row>
                    <Row>
                        <Accordion defaultActiveKey="0">
                            {this.state.activities.map(({name, description, image}, index) =>
                                <Accordion defaultActiveKey="0">
                                <Card>
                                  <Accordion.Toggle as={Card.Header} eventKey={index}>
                                    <Image rounded src={image} style={{ width: '50px', marginRight: '1em' }} />
                                    <h2 style={{ marginRight: '1em' }}>{name}</h2>
                                    <p style={{ margin: 'auto 0' }}>{description}</p>
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey={index}>
                                    <Card.Body>user_activities with the corresponding activity_id</Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                              </Accordion>
                            )}
                        </Accordion>
                    </Row>
            </Container>
        )
    }
}
  
export default Activities;