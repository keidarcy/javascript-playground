import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
// import Raven from 'raven-js'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import logger from './services/logService'

logger.init()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
