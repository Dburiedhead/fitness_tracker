import React, { Component, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import NewActivity from './activity_add'


function AddActivityModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

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
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

class Test extends Component {
    render() {

        return (
            <div>
                <AddActivityModal />,
            </div>
        )
    }
}
  
export default Test;