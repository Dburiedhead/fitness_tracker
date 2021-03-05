import React, { Component } from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap'
import Add from './add_activity'
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api/activities'
})

class Activities extends Component {

    state = {
        activities: []
    }

    constructor() {
        super();
        api.get('/').then(res => {
            let activities = res.data
            this.setState({activities})
        })
    }

    render() {

        return (
            <div>
                <h1>Activities page</h1>

                <Button>Add an activity</Button>
                <Add />
                <Row xl={{cols:4}} lg={{cols:3}} md={{cols:2}} sm={{cols:1}} noGutters='true'>
                    {this.state.activities.map(({name, description, image}, index) =>
                        <Col key={index} style={{ padding: '0 0.5em' }}>
                            <Card>
                                <Card.Img src={image} />
                                <Card.Body>
                                    <Card.Title>
                                        {name}
                                    </Card.Title>
                                    <Card.Text>
                                        {description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
}
  
export default Activities;