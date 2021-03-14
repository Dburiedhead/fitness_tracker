import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'react-bootstrap'

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

  render() {
    return (
      // <table className="table table-bordered">
      //   <thead>
      //     <tr>
      //       <th>#</th>
      //       <th>Date</th>
      //       <th>Activity</th>
      //       <th>Duration</th>
      //       <th>Description</th>
      //       <th>Edit</th>
      //       <th>Delete</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     <tr>
      //       <td>
      //         id
      //       </td>
      //       <td>
      //         Date
      //       </td>
      //       <td>
      //         Activity : user_activities with the corresponding activity_id
      //       </td>
      //       <td>
      //         Duration
      //       </td>
      //       <td>
      //         Description
      //       </td>
      //       <td>
      //         <button className="btn btn-outline-secondary">Edit</button>
      //       </td>
      //       <td>
      //         <button className="btn btn-outline-danger">Delete</button>
      //       </td>
      //     </tr>
      //   </tbody>
      // </table>
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
          <tr>
            <td>
              id
            </td>
            <td>
              Date
            </td>
            <td>
              Activity : user_activities with the corresponding activity_id
            </td>
            <td>
              Duration
            </td>
            <td>
              Description
            </td>
            <td>
              <Button variant="outline-secondary">Edit</Button>
            </td>
            <td>
              <Button variant="outline-danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default ActivityShow