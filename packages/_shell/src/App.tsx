import React from 'react'
import './styles.css'
import { BrowserRouter, Route } from 'react-router-dom'

import { AuthLayout } from './components/AuthLayout'
import { SharedRoutes } from './components/SharedRoutes'
import { AppLogin } from './apps/AppLogin'
import { AppProfile } from './apps/AppProfile'
import { AppChat } from './apps/AppChat'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SharedRoutes producer="shell">
        <Route element={<AppLogin />} index path="/" />

        <Route element={<AuthLayout />} path="/">
          <Route element={<AppProfile />} path="/profile" />
          <Route element={<AppChat />} path="/chat" />
        </Route>

        <Route element="404 Page" path="*" />
      </SharedRoutes>
    </BrowserRouter>
  )
}
