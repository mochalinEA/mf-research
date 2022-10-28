import React, { useEffect, useRef } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

export const Layout: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/profile">---profile</NavLink>
        </li>

        <li>
          <NavLink to="/chat">---chat</NavLink>
        </li>

        <li>
          <NavLink to="/111">---404</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}
