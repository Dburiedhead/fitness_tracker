import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Col, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios';
import setAxiosHeaders from "../AxiosHeaders";
import { Formik } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ActivityEdit(props) {
    return (
        <div>
            <Formik
                onSubmit={setAxiosHeaders(), (values) =>
                    axios.put(`/api/v1/user_activities/${props.user_activity_id}`, values)
                        .then( response => {if (response.status == 200){window.location.reload()}} )
                        .catch(err => console.log(err))
                }
                initialValues={{
                    userActivityId: props.user_activity_id,
                    date: props.user_activity_date,
                    duration: props.user_activity_duration,
                    description: props.user_activity_description
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    setFieldValue,
                    values,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="date">
                                <Form.Label>Date</Form.Label>
                                <DatePicker
                                    selected={Date.parse(values.date)}
                                    className="form-control"
                                    name="date"
                                    dateFormat='MM-dd-yyyy'
                                    onChange={date => setFieldValue('date', date)}
                                    value={Date.parse(values.date)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="userActivityId">
                                <Form.Label>Activity</Form.Label>
                                <Form.Control plaintext readOnly name='description' onChange={handleChange} value={props.user_activity_name}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="duration">
                                <Form.Label>Duration</Form.Label>
                                <DatePicker
                                    selected={Date.parse(values.duration)}
                                    className="form-control"
                                    name="duration"
                                    onChange={duration => setFieldValue('duration', duration)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={10}
                                    timeCaption="Time"
                                    timeFormat="HH:mm:ss"
                                    dateFormat="HH:mm:ss"
                                    value={Date.parse(values.duration)}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="description">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as='textarea' name='description' onChange={handleChange} value={values.description}/>
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