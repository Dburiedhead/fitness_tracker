import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Activities from './activity_index';
import Home from './home';
import Profile from './profile';
import Signup from './signup';
import Test from './test';

const Main = () => (
    <BrowserRouter>
        <Switch>
            <Route path ='/activities' component = { Activities } />
            <Route path ='/signup' component = { Signup } />
            <Route exact path ='/' component = { Home } />
            <Route path ='/profile' component = { Profile } />
            <Route path ='/test' component = { Test } />
        </Switch>
    </BrowserRouter>
)

export default Main;