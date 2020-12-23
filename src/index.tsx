import * as Sentry from '@sentry/browser'
import Amplify from 'aws-amplify'
import React from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import App from './App'
import awsExports from './aws-exports'
import history from './history'
import './index.scss'
import * as serviceWorker from './serviceWorker'

// * Amplify (serverless service in cloud) configuration settings
Amplify.configure(awsExports)

// * Error monitoring tool
Sentry.init({
 dsn: process.env.REACT_APP_SENTRY_API_KEY,
})

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Render App with Drag & Drop provider (from react-dnd) and Router
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
ReactDOM.render(
 <DndProvider backend={Backend}>
  <Router history={history}>
   <App />
  </Router>
 </DndProvider>,
 document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
