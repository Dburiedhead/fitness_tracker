import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Activities from './activities';
import Connexion from './connexion';
import Dashboard from './dashboard';
import Home from './home';
import Profile from './profile';
import Test from './test';
import Signup from './signup';

const Main = () => (
    <BrowserRouter>
        <Switch>
            <Route path ='/activities' component = { Activities } />
            <Route path ='/connexion' component = { Connexion } />
            <Route path ='/dashboard' component = { Dashboard } />
            <Route exact path ='/' component = { Home } />
            <Route path ='/profile' component = { Profile } />
            <Route path ='/test' component = { Test } />
            <Route path ='/signup' component = { Signup } />
        </Switch>
    </BrowserRouter>
)

export default Main;