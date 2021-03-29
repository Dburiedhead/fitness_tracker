import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Col, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios';
import setAxiosHeaders from "../AxiosHeaders";
import { Formik } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ActivityEdit(props) {
    const [userActivity, setUserActivity] = useState([]);

    const getUserActivity = async () => {
        try {
            const selectedUserActivity = await

                axios.get(`/api/v1/user_activities/${props.user_activity_id}`)
            setUserActivity(selectedUserActivity.data);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getUserActivity()
    }, []);

    // const formData = {
    //     userActivity_id: props.user_activity_id,
    //     date: userActivity.date,
    //     duration: userActivity.duration,
    //     description: userActivity.description
    // }

    return (
        <div>
            <p>{props.user_activity_id}</p>
            <Formik
                onSubmit={setAxiosHeaders(), (values) =>
                    axios.put(`/api/v1/user_activities/${props.user_activity_id}`, values)
                        .then(values => console.log('user activity edited', values))
                        .catch(err => console.log(err))
                }
                initialValues={{
                    userActivity_id: props.user_activity_id,
                    date: '',
                    duration: '',
                    description: props.user_activity_id
                }}
                // initialValues={formData}
            >
                {({
                    handleSubmit,
                    handleChange,
                    setFieldValue,
                    values,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Row>
                            {/* <Form.Group as={Col} controlId="date">
                                <Form.Label>Date</Form.Label>
                                <DatePicker
                                    selected={values.date}
                                    className="form-control"
                                    name="startDate"
                                    dateFormat='MM-dd-yyyy'
                                    onChange={date => setFieldValue('date', date)}
                                    placeholderText={userActivity.date}
                                />
                            </Form.Group> */}
                            {/* <Form.Group as={Col} controlId="userActivity_id">
                                <Form.Label>Activity to edit</Form.Label>
                                {userActivity.map(act => (
                                    <Form.Control key={act.id} onChange={handleChange} defaultValue={act.name} plaintext readOnly />
                                ))}
                            </Form.Group> */}
                            {/* <Form.Control as="select" onChange={handleChange} defaultValue="Select user Activity">
                                <option>Choose...</option>
                                {userActivity.map(act => (
                                    <option key={act.id} value={act.id}>{act.name}</option>
                                ))}
                            </Form.Control> */}
                            {/* <Form.Group as={Col} controlId="duration">
                                <Form.Label>Duration</Form.Label>
                                <DatePicker
                                    selected={values.duration}
                                    className="form-control"
                                    name="startDuration"
                                    onChange={duration => setFieldValue('duration', duration)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={10}
                                    timeCaption="Time"
                                    timeFormat="HH:mm:ss"
                                    dateFormat="HH:mm:ss"
                                    placeholderText={ new Date (`${userActivity.duration}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                />
                            </Form.Group> */}
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="description">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as='textarea' onChange={handleChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Save
                      </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}