import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { mockTool } from './utils/mock-tool'

import './index.css'

// eslint-disable-next-line import/newline-after-import
;(async () => {
  await mockTool.importMockData()

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
})()
