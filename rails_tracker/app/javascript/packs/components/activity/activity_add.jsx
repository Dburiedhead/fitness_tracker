import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import setAxiosHeaders from "../AxiosHeaders";
import { Formik } from 'formik'

export default function ActivityAdd() {
  const [activities, setActivities] = useState([]);

    const getActivities = async () => {
        try {
            const allActivities = await

            axios.get('/api/v1/activities')
            setActivities(allActivities.data);
        } catch (err) {
            console.error(err.message);
        }
    }
    
    useEffect(() => {
        getActivities()
    }, []);

    return (
      <div>
          <Formik
            onSubmit= { setAxiosHeaders(), (values) =>
                axios.post('/api/v1/user_activities', values)
                .then(values => console.log('new activity submitted', values))
                .catch(err => console.log(err))
                }
              initialValues={{
                  activity_id: null,
                  date: '',
                  duration: '',
                  description: '',
              }}
          >
              {({
                  handleSubmit,
                  handleChange,
                  values,
              }) => (
                  <Form onSubmit={handleSubmit}>
                      <Form.Row>
                          <Form.Group as={Col} controlId="date">
                              <Form.Label>Date</Form.Label>
                              {/* <DatePicker selected={date} onChange={handleChange} dateFormat='MM/dd/yyyy' placeholder="Click to select a date"/> */}
                              <Form.Control onChange={handleChange} placeholder="MM/dd/yyy" />
                          </Form.Group>
                          <Form.Group as={Col} controlId="activity_id">
                              <Form.Label>Activity</Form.Label>
                              <Form.Control as="select" onChange={handleChange} defaultValue="Select activity">
                              <option>Choose...</option>
                              {activities.map(act => (
                                  <option key={act.id} value={act.id}>{act.name}</option>
                              ))}                                  
                              </Form.Control>
                          </Form.Group>
                          <Form.Group as={Col} controlId="duration">
                              <Form.Label>Duration</Form.Label>
                              <Form.Control onChange={handleChange} placeholder="Select a duration" />
                          </Form.Group>
                      </Form.Row>
                      <Form.Row>
                          <Form.Group as={Col} controlId="description">
                              <Form.Label>Comment</Form.Label>
                              <Form.Control as='textarea' onChange={handleChange} placeholder="How was your workout ?" />
                          </Form.Group>
                      </Form.Row>
                      <Button variant="primary" type="submit">
                          Submit
                      </Button>
                  </Form>
              )}
          </Formik>
    </div>
  )
}