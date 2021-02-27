import React, { Component } from 'react';
import Connexion from './connexion';
import { Jumbotron } from 'react-bootstrap';

class Home extends Component {
    render() {

        return (
            <div>
                <Jumbotron>
                    <h1>Home page</h1>
                    <Connexion />
                </Jumbotron>
            </div>
        )
    }
}
  
export default Home;