import React, { Component, useState } from 'react';
import axios from 'axios';
import ActivityShow from './activity_show'
import ActivityAdd from './activity_add'
import Profile from '../Profile'
import { Row, Col, Button, Modal, Container, Card, Image, Accordion, Table } from 'react-bootstrap'

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
          <ActivityAdd />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
class ActivityIndex extends Component {

  state = {
    activities: []
  }

  constructor() {
    super();
    axios.get('/api/v1/activities').then(res => {
      let activities = res.data
      this.setState({ activities })
    })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    return (
      <Container style={{ paddingTop: '2%', background: 'rgb(255, 255, 255)' }}>
        <Profile />
        <Row>
          <Col md={10}>
            <h1>All Activities</h1>
          </Col>
          <Col md={2}>
            <AddActivityModal />
          </Col>
        </Row>
        <Row>
          <Accordion defaultActiveKey="0" style={{ width: '100%', marginTop: '1em' }}>
            {this.state.activities.map(({ name, description, image }, index) =>
              <Card key={index}>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={index+1}
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <Image rounded src={image} style={{ width: '50px', marginRight: '1em' }} />
                  <span>
                    <h2 style={{ marginRight: '1em' }}>{name}</h2>
                  </span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index+1}>
                  <Card.Body>
                    <ActivityShow />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            )}
          </Accordion>
        </Row>
      </Container>
    )
  }
}
export default ActivityIndex