import React, { useState } from 'react'
import { Table, Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import setAxiosHeaders from "../AxiosHeaders";
import ActivityEdit from './activity_edit'

function EditActivityModal(id) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-secondary" onClick={() => handleShow(id)}>Edit</Button>

     {console.log(`${id} for editing`)}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ActivityEdit user_activity_id={id.id}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

class ActivityShow extends React.Component {

  state = {
    user_activities: []
  }

  constructor() {
    super();
    axios.get('/api/v1/user_activities/').then(res => {
      let user_activities = res.data
        this.setState({user_activities})
    })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    function handleDelete(id) {
      console.log(id, 'deleted')
      setAxiosHeaders()
      axios.delete(`/api/v1/user_activities/${id}`).then(res => {
        console.log('Activity deleted', res)
      }, window.location.reload())
        .catch(error => {
          console.log(error);
        });
    }

    return (
      <Table borderless responsive>

        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Date</th>
            {/* <th>Activity</th> */}
            <th>Duration</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.user_activities.filter(act => act.activity_id==this.props.activityIndex).map(({ id, activity_id, description, duration, date }, index) =>
            <tr key={index}>
              {/* <td>
                {id}
              </td> */}
              <td>
                {date}
              </td>
              {/* <td>
                {activity_id}
              </td> */}
              <td>
                { new Date (`${duration}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </td>
              <td>
                {description}
              </td>
              <td>
                <EditActivityModal key={id} id={id}/>
              </td>
              <td>
                <Button variant="outline-danger" onClick={() => handleDelete(id)}>Delete</Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    )
  }
}

export default ActivityShow