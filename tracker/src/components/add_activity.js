import React, { Component } from 'react';
import { Col, Form, Button, Container } from 'react-bootstrap'
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Add extends Component {

    state = {
        name: '',
        comment: '',
        duration: '',
        date: '',
        activities: [],
        startDate: ''
    }

    constructor() {
        super();
        axios.get('http://localhost:3001/api/v1/activities').then(res => {
            let activities = res.data
            this.setState({activities})
        })
    }

    handleChange = e => {
        // console.log(e.target.id, e.target.value)
        this.setState({ [e.target.id]: e.target.value })
    }

    handleDateChange = date => {
        this.setState({date}) //set the state with the MM-dd-yyyy value
        console.log(this.state.date)
    }

    handleSubmit = (event) => {
        const data = {
            name: this.state.name,
            description: this.state.comment,
            duration: this.state.duration,
            date: this.state.date
        };
        /*axios.post('http://localhost:3001/api/v1/user_activities', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))*/
        console.log(data)
        event.preventDefault();
    };

    render() {

        const { name, comment, duration, date } = this.state

        return (
            <div>
                <h1>Add an activity</h1>
                <Container style={{ padding: '0 10vw' }}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="date">
                                <Form.Label>Date</Form.Label>
                                <DatePicker selected={date} onChange={this.handleDateChange} dateFormat='MM-dd-yyy' placeholder="Click to select a date"/>
                                {/* <Form.Control onChange={this.handleChange} placeholder="Select the date of your workout" /> */}
                            </Form.Group>
                            <Form.Group as={Col} controlId="name">
                                <Form.Label>Activity name</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange} defaultValue="Select activity">
                                <option>Choose...</option>
                                {this.state.activities.map(({name}, index) =>
                                    <option key={index}>{name}</option>
                                )}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="duration">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control onChange={this.handleChange} placeholder="Select a duration" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="comment">
                                <Form.Label>Comment</Form.Label>
                                <Form.Control as='textarea' onChange={this.handleChange} placeholder="How was your workout ?" />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
  
export default Add;