import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App'




document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Route path ='/' component = { App } />
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})