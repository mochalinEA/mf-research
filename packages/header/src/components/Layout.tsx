import React, { useEffect, useRef } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

export const Layout: React.FC = () => {
  return (
    <div>
      <div>
        <NavLink end to="/">
          LOGOUT
        </NavLink>
      </div>

      <ul
        style={{
          display: 'flex',
          gap: '20px',
          listStyle: 'none',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <li>
          <NavLink to="/profile">profile</NavLink>
        </li>

        <li>
          <NavLink to="/chat">chat</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}
