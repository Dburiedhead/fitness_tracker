import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap'

function edit() {
    console.log('edit the field !')
};

/*function Fields () {

};*/

function Profile() {
    return (
        <div>
            <h1>Profile page</h1>
            <p>Edit your profile, delete your account</p>
            <Container style={{ paddingTop: '2%', background: 'rgb(255, 255, 255)' }}>
                <Row>
                    <Col md={10}>
                    {/* <Fields /> */}
                    </Col>
                    <Col md={2}>
                        <Button variant='primary' onClick={edit}>Edit your profile</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
  
export default Profile;