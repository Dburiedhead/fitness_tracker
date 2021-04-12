import React, { Component, useState } from 'react';
import axios from 'axios';
import ActivityShow from './activity_show'
import ActivityAdd from './activity_add'
import Counter from './activity_count'
import { Row, Col, Button, Modal, Container, Card, Image, Accordion, Badge } from 'react-bootstrap'

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
        <Row>
          <Col md={10}>
            <h1>My Activities</h1>
          </Col>
          <Col md={2}>
            <AddActivityModal />
          </Col>
        </Row>
        <Row>
          <Accordion defaultActiveKey="0" style={{ width: '80vw', margin: '1em auto' }}>
            {this.state.activities.map(({ name, image }, index) =>
              <Card key={index} style={{ margin: '1rem 0' }}>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={index+1}
                  style={{ marginBottom: "0", display: 'flex', flexDirection: 'row', cursor: 'pointer', backgroundColor: "#ffffff" }}
                >
                  <h2 style={{ marginRight: '1em' }}>{name}</h2>
                  <span><Counter activityIndex={index+1} /></span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={index+1}>
                  <Card.Body>
                    <ActivityShow key={index+1} activityIndex={index+1} activityName={name}/>
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