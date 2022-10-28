import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'

const shellRootSelector = '#shell-root'
const root = createRoot(document.querySelector(shellRootSelector))
root.render(<App />)
