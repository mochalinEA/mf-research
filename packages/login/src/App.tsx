import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { SharedRoutes } from './components/SharedRoutes'
import { Page } from './components/Page'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SharedRoutes producer="login">
        <Route element={<Page />} path="*" />
      </SharedRoutes>
    </BrowserRouter>
  )
}
