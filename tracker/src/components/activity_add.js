import React, { useEffect, useState } from 'react';
import { Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from 'formik'

/*axios.post('http://localhost:3001/api/v1/user_activities', data)
.then(res => console.log(res))
.catch(err => console.log(err))*/


export default function NewActivity() {

    const [activities, setActivities] = useState([]);

    const getActivities = async () => {
        try {
            const allActivities = await

            axios.get('http://localhost:3001/api/v1/activities')
            setActivities(allActivities.data); //set State
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
                    onSubmit= { (values) =>
                    console.log(values)
                    /*,api.post('/', { user_activity: values })
                    .then(values => console.log('new user submitted', values))
                    .catch(err => console.log(err))*/
                    }
                    initialValues={{
                        user_id: null,
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
                                <Form.Group as={Col} controlId="name">
                                    <Form.Label>Activity name</Form.Label>
                                    <Form.Control as="select" onChange={handleChange} defaultValue="Select activity">
                                    <option>Choose...</option>
                                    {activities.map(act => (
                                        <option key={act.id}>{act.name}</option>
                                    ))}                                  
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="duration">
                                    <Form.Label>Duration</Form.Label>
                                    <Form.Control onChange={handleChange} placeholder="Select a duration" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="comment">
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