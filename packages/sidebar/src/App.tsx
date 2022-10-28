import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { SharedRoutes } from './components/SharedRoutes'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SharedRoutes producer="sidebar">
        <Route element={<Layout />} path="/chat" />
        <Route element={<Layout />} path="/profile" />
        <Route element="" path="*" />
      </SharedRoutes>
    </BrowserRouter>
  )
}
