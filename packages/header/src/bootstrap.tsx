import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'

let root = null

const mount = (rootNode) => {
  if (root === null) {
    root = createRoot(rootNode)
  }

  root.render(<App />)
}

const unmount = () => {
  if (root !== null) {
    root.unmount()
    root = null
  }
}

export { mount, unmount }
