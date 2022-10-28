import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { SharedRoutes } from './components/SharedRoutes'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SharedRoutes producer="header">
        <Route element={<Layout />} path="*" />
      </SharedRoutes>
    </BrowserRouter>
  )
}
