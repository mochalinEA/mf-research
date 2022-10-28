import React from 'react'
import { Outlet } from 'react-router-dom'

import { AppHeader } from '../apps/AppHeader'
import { AppSidebar } from '../apps/AppSidebar'

export const AuthLayout = () => {
  return (
    <div>
      <div className="grid">
        <div className="grid__item">
          <AppHeader />
        </div>

        <div className="grid__item">
          <AppSidebar />
        </div>

        <div className="grid__item">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
