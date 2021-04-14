import React from 'react'
import ReactDOM from 'react-dom'
import Activity from './activity/activity_index.jsx'

class App extends React.Component {
  render() {
    return <Activity />
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('fitness-app')
  app && ReactDOM.render(
    <App />,
    app
  )
})

export default App