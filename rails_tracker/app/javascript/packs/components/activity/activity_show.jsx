import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'react-bootstrap'
import axios from 'axios'
import setAxiosHeaders from "../AxiosHeaders";

/*class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: this.props.todoItem.complete,
    }
  }
  render() {
    const { todoItem } = this.props
    return (
      <tr className={`${this.state.complete ? 'table-light' : ''}`}>
        <td>
          <input
            type="text"
            defaultValue={todoItem.title}
            disabled={this.state.complete}
            className="form-control"
            id={`todoItem__title-${todoItem.id}`}
          />
        </td>
        <td className="text-right">
          <div className="form-check form-check-inline">
            <input
              type="boolean"
              defaultChecked={this.state.complete}
              type="checkbox"
              className="form-check-input"
              id={`complete-${todoItem.id}`}
            />
            <label
              className="form-check-label"
              htmlFor={`complete-${todoItem.id}`}
            >
              Complete?
            </label>
          </div>
          <button className="btn btn-outline-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

export default TodoItem

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
}*/

class ActivityShow extends React.Component {

  state = {
    user_activities: []
  }

  constructor() {
    super();
    axios.get('/api/v1/user_activities').then(res => {
        let user_activities = res.data
        this.setState({user_activities})
        console.log(user_activities)
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    function handleEdit(id) {
      console.log(id, 'edited')
    }
    
    function handleDelete(id) {
      console.log(id, 'deleted')
      setAxiosHeaders()
      axios.delete(`/api/v1/user_activities/${id}`).then(res => {
        console.log('Activity deleted', res)
      })
      .catch(error => {
        console.log(error);
      });
    }
    return (
      <Table borderless responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Activity</th>
            <th>Duration</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.user_activities.map(({ id, activity_id, description, duration, date }, index) =>
            <tr key={id}>
              <td>
                {id}
              </td>
              <td>
                {date}
              </td>
              <td>
                {activity_id}
              </td>
              <td>
                {duration}
              </td>
              <td>
                {description}
              </td>
              <td>
                <Button variant="outline-secondary" onClick={() => handleEdit(id)}>Edit</Button>
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