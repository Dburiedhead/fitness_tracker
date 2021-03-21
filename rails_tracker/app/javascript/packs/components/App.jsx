import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Activity from './activity/activity_index.jsx'
import Profile from '../Profile'
import Home from '../Home'

class App extends React.Component {
  render() {
    return <Activity />
    // <h1>Moove and Groove</h1>
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('fitness-app')
  app && ReactDOM.render(
    <App />,
    app
  )
})