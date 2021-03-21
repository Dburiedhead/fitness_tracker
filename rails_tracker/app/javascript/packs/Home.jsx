import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import {Formik} from 'formik';
import axios from 'axios';
import Cookies from 'js-cookie'
import ReactDOM from 'react-dom'


export default function Home() {

    return (
        <div>
            <h1>React home page</h1>
        </div>
    )
}


// document.addEventListener('turbolinks:load', () => {
//     const app = document.getElementById('profile-page')
//     app && ReactDOM.render(
//       <Profile />
//     )
//   })