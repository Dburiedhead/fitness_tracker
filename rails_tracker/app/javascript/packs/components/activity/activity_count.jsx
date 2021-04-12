import React from 'react'
import { Badge } from 'react-bootstrap'
import axios from 'axios'

function getCount(id, arr) {
  var counter = 0;
  
  for (var i=0; i<arr.length; i++) {
    if ( 'activity_id' in arr[i] && arr[i].activity_id === id ) counter++;
  }
  if (counter > 0) {
    return counter;
  } else {
    return "No activity added yet"
  }
}

class Counter extends React.Component {

  state = {
    user_activities: [],
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

    return (
      <Badge variant="secondary">{getCount(this.props.activityIndex, this.state.user_activities)}</Badge>
    )
  }
}

export default Counter